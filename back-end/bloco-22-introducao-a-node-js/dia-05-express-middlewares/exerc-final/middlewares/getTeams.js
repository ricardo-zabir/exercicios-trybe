const fs = require('fs/promises');

module.exports = async (req, res, _next) => {
    const fileContent = await fs.readFile('teams.json','utf-8');
    if(fileContent === "") {
        return res.status(200).json({teams: []})
    }
    return res.status(200).json({teams: JSON.parse(fileContent)})
}