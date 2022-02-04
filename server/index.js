const express = require('express');
const app = express();
const PORT = 3030;
const path = require('path');

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

const sourceRoute = require('./routes/source');
app.use('/source', sourceRoute);

app.get('/', (req, res) => res.render('index'));

app.get('/ls', async (req, res) => {
    const data = await ls();
    
    if (data.stderr) return res.send(data.stderr)

    return res.send(
        data.stdout
            .split('\n')
            .filter(file => file.length)
            .map(file => file.replace('/home/aaron/Downloads/', ''))
    );
});

app.listen(
    PORT,
    () => console.log(`Serving on PORT ${PORT}...`)
);