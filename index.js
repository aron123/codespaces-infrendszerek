const express = require('express');
const app = express();

app.get('/hello', (req, res) => res.json({ greet: 'Hello' }));
app.listen(3000, () => console.log('Listening on 3000 ...'));

const app2 = express();
app2.get('/hello', (req, res) => res.json({ greet: 'Szia Uram!' }));
app2.listen(3001, () => console.log('Listening on 3001 ...'));