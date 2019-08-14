// const express = require("express");
import express from "express";
const app = express();

const hostname = 'localhost';
const port = 1997;

app.get('/hello', (req, res) => {
  res.send("<h1>Hello World</h1>")
});


app.listen(port, hostname, () => {
  console.log(`starting with ${hostname}:${port}`);
})
