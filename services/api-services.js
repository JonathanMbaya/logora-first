const fetch = require('node-fetch');


// Route pour obtenir une prédiction de modération
module.exports.getPredict = async (req, res) => {
    try {
        const { text, language } = req.query; // Récupérer les paramètres de la requête
        const response = await fetch(`https://moderation.logora.fr/predict?text=${encodeURIComponent(text)}&language=${encodeURIComponent(language)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Erreur du serveur');
    }
};



// Route pour obtenir un score de qualité
module.exports.getScore = async (req, res) => {
    try {
        const { text, language } = req.query; // Récupérer les paramètres de la requête
        const response = await fetch(`https://moderation.logora.fr/score?text=${encodeURIComponent(text)}&language=${encodeURIComponent(language)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Erreur du serveur');
    }
};

