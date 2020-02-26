// API Endpoints
// Require necessities (express, bodyParser, etc)
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 4200;

app.use(bodyParser.json());

