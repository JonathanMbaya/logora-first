const express = require("express");
const {
getScore,
getPredict
} = require("../services/api-services");
const router = express.Router();

router.post("/predict", getPredict);
router.post("/score", getScore);


module.exports = router;