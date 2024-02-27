const fetch = require('node-fetch');


// Route pour obtenir une prédiction de modération
module.exports.getPredict = async (req, res) =>{
    try {
        const { text, language } = req.body;
        const response = await fetch('https://moderation.logora.fr/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text, language })
        });
        const data = await response;
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Erreur du serveur');
    }
};

// Route pour obtenir un score de qualité
module.exports.getScore= async (req, res) =>{
    try {
        const { text, language } = req.body;
        const response = await fetch('https://moderation.logora.fr/score', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text, language })
        });
        const data = await response;
        res.send(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Erreur du serveur');
    }
};


