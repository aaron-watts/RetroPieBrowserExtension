const express = require('express');
const app = express();
const PORT = 3030;

const engine = require('ejs-mate');

const { ls } = require('./utils/unix');
const { format } = require('./utils/helpers');

const db = require('./db');
db.setupDatabase();

app.engine('ejs', engine);
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'));

app.get('/source', (req, res) => {
    return res.render('source');
})

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