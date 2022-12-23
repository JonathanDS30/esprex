const express = require('express');
const {resolve} = require ('path');
const app = express();
const appRoutes = require('./routing/app.routes');


// Récup dossier public pour les scripts & css
app.use(express.static(resolve('public'), { index: false}));

app.use(appRoutes);

module.exports = app;