const fs = require('fs');
const latestNews = JSON.parse(fs.readFileSync('./data/news.json','utf8'));
const vacationTips = JSON.parse(fs.readFileSync('./data/tips.json','utf8'));

const news = (req, res) => {
    res.render('news', {title: "Travlr Getaways - News", latestNews, vacationTips});
};

module.exports = {
    news
};