const fs = require('fs');
const path = require('path');

module.exports = function handler(req, res) {
    try {
        const filePath = path.join(__dirname, '..', 'data', 'db.json');
        const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        res.status(200).json(jsonData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to load test data', details: error.message });
    }
};