const fs = require('fs');
const aboutUs = JSON.parse(fs.readFileSync('./data/aboutUs.json', 'utf8'));

const about = (req, res) => {
    res.render('about', {title: "Travlr Getaways - About", aboutUs});
};

module.exports = {
    about
};