const express = require('express');
const app = express();
const PORT = 3030;
const path = require('path');

const db = require('./db');
db.setupDatabase();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const engine = require('ejs-mate');
app.engine('ejs', engine);
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const { ls } = require('./utils/unix');
const { format } = require('./utils/helpers');

const sourceRoute = require('./routes/source');
app.use('/source', sourceRoute);

app.get('/', async (req, res) => {
    const db = require('./db');

    const sources = await db.getAll('source');

    res.render('index', { sources });
});

app.get('/ls', async (req, res) => {
    const data = await ls();
    
    if (data.stderr) return res.send(data.stderr)

    return res.send(
        format(data.stdout)
    );
});

app.get('/sources/add', async (req, res) => {
    // const result = await db.addSource(['Google', 'https://www.duckduckgo.com']);
    // console.log(result);
    
    res.send('DONE');
});

app.listen(
    PORT,
    () => console.log(`Serving on PORT ${PORT}...`)
);