const express = require('express');

const app = express();

const theList = [];

app.get('/names', (req, res, next) => {
  if (!theList.length) {
    return res.send('The list is empty...');
  }
  const names = theList.join(', ');
  return res.send(`The names are: ${names}`);
});

app.get('/names/:name', (req, res, next) => {
  const { name } = req.params;
  if (theList.includes(name)) {
    return res.send(`${name} is on the list!`);
  } else {
    const fourOhfour = new Error(`${name} is not on the list!`);
    fourOhfour.status = 404;
    return next(fourOhfour);
  }
});

app.put('/names/:name', (req, res, next) => {
  const { name } = req.params;
  if (theList.includes(name)) {
    return res.send(`${name} is already on the list!`);
  } else {
    theList.push(name);
    return res.status(201).send(`Successfully added ${name} to the list.`);
  }
});

app.delete('/names/:name', (req, res, next) => {
  const { name } = req.params;
  if (theList.includes(name)) {
    theList.splice(theList.indexOf(name), 1);
    return res.send(`Successfully removed ${name} from the list.`);
  } else {
    const fourOhfour = new Error(`${name} is not on the list!`);
    fourOhfour.status = 404;
    return next(fourOhfour);
  }
});

app.use((err, req, res, next) => {
  return res
    .status(err.status || 500)
    .send(err.message || 'Internal Server Error');
});

module.exports = app;
