const express = require("express");
// On appelle les fonctions api du fichier service 
const {
getScore,
getPredict
} = require("../services/api-services");
const router = express.Router();

// On définit la suite de la route APi ainsi que la fonction qui passe la requête
router.post("/predict", getPredict);
router.post("/score", getScore);


module.exports = router;