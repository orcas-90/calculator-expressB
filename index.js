const express = require('express');
const path = require('path');
const fs = require('fs');
const port = 3000;
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(cors());

app.listen(port, () => {
  console.log(`Приложение запущено и слушает порт ${port}`);
});

app.get('/', (req, res) => {
  res.sendFile('/Users/nnl/calculatorExpressB/database.json');
});

app.put('/calculator/plus:id', (req, res) => {
  const id = req.params.id;
  let value = req.body.value;
  let count = req.body.count;
  const database = fs.readFileSync(
    path.join(__dirname, 'database.json'),
    'utf-8'
  );

  const data = JSON.parse(database);
  result = +data.count;
  if (data.id === +id) {
    count = value + result;
    data.count = +count;

    fs.writeFileSync(
      path.join(__dirname, 'database.json'),
      JSON.stringify(data, null, 4),
      'utf-8'
    );

    res.send(
      JSON.stringify({
        id,
        count,
      })
    );
    return;
  } else res.sendStatus(404);
});

app.put('/calculator/minus:id', (req, res) => {
    const id = req.params.id;
    let value = req.body.value;
    let count = req.body.count;
    const database = fs.readFileSync(
      path.join(__dirname, 'database.json'),
      'utf-8'
    );

    const data = JSON.parse(database);
    result = +data.count;
    if (data.id === +id) {
      count = result - value;
      data.count = count;

      fs.writeFileSync(
        path.join(__dirname, 'database.json'),
        JSON.stringify(data, null, 4),
        'utf-8'
      );

      res.send(
        JSON.stringify({
          id,
          count,
        })
      );
      return;
    } else res.sendStatus(404);
  });

  app.put('/calculator/multiply:id', (req, res) => {
    const id = req.params.id;
    let value = req.body.value;
    let count = req.body.count;
    const database = fs.readFileSync(
      path.join(__dirname, 'database.json'),
      'utf-8'
    );

    const data = JSON.parse(database);
    result = +data.count;
    if (data.id === +id) {
      count = value * result;
      data.count = count;

      fs.writeFileSync(
        path.join(__dirname, 'database.json'),
        JSON.stringify(data, null, 4),
        'utf-8'
      );

      res.send(
        JSON.stringify({
          id,
          count,
        })
      );
      return;
    } else res.sendStatus(404);
  });
  app.put('/calculator/divide:id', (req, res) => {
    const id = req.params.id;
    let value = req.body.value;
    let count = req.body.count;
    const database = fs.readFileSync(
      path.join(__dirname, 'database.json'),
      'utf-8'
    );

    const data = JSON.parse(database);
    result = +data.count;
    if (data.id === +id) {
      count = result / value;
      data.count = count;

      fs.writeFileSync(
        path.join(__dirname, 'database.json'),
        JSON.stringify(data, null, 4),
        'utf-8'
      );

      res.send(
        JSON.stringify({
          id,
          count,
        })
      );
      return;
    } else res.sendStatus(404);
  });
