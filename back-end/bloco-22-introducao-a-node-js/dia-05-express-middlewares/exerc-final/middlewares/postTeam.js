const fs = require('fs/promises')
module.exports = async (req,res,_next) => {
    const { name, initials, country, league } = req.body;
    const nameValid = name && name.length > 5;
    const initialsValid = initials && initials === initials.toUpperCase();
    const countryValid = country && country.length > 3;
    if(!nameValid || !initialsValid || !countryValid) {
        return res.status(400).json({message: "invalid data"})
    }
    const team = league ? {
        name,
        initials,
        country,
        league
    } : {
        name,
        initials,
        country,
        league
    };
    const currentTeams = await fs.readFile('teams.json');
    if(currentTeams.toString() === "") {
        await fs.writeFile('teams.json',JSON.stringify([team]));
        return res.status(200).json(team)
    }
    else {
        const fileContent = JSON.parse(currentTeams);
        fileContent.push(team);
        await fs.writeFile('teams.json', JSON.stringify(fileContent));
        return res.status(200).json(team)
    }
}