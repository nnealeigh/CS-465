const fs = require('fs');
const meal = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8'));

const meals = (req, res) => {
    res.render('meals', {title: "Travlr Getaways - Meals", meal});
};

module.exports = {
    meals
};