'use strict'

const express = require('express');
const app = express();

const port = process.env.PORT || 3001;

app.get('/', (req, res) => res.send(200, 'Villain Service'));
app.get('/villains', (req, res) => res.send(200, require('./villains.json')));

app.listen(port, () => { console.log('Villain Service is running...') });
