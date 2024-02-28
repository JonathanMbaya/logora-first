const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;


// Middleware pour analser les requêtes JSON
app.use(bodyParser.json());

// Middleware pour analyser les requêtes URL encodées
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', require('./routes/api-routes'))

app.listen(PORT, () => {
    console.log(`Le servveur écoute sur le port ${PORT}`);
});

