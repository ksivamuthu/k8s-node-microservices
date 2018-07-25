'use strict'

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send(200, 'Hero Service'));
app.get('/heroes', (req, res) => res.send(200, require('./heros.json')));

app.listen(port, () => { console.log('Hero Service is running...') });
