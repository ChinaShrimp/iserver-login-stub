const express = require('express');
const cors = require('cors');
const app = express();
const port = 9000;

app.use(cors());

app.get('/login.json', (req, res) => {
  res.json({
    "random":"769402418142382",
    "jsessionID":"1799892840"
  });
});

app.post('/login.json', (req, res) => {
  res.status(201).json({"postResultType":"CreateChild","succeed":true});
});

app.listen(port, () => {
  console.log(`app started, listening at http://localhost:${port}`);
});
