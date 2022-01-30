const express = require('express');
const app = express();
const PORT = 3030;

const { ls } = require('./utils/unix');
const catchAsync = require('./utils/catchAsync');

app.get('/', async (req, res) => res.send('Welcome to my server!'));

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