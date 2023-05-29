const fs = require('fs');
const blogs = JSON.parse(fs.readFileSync('./data/blogs.json', 'utf8'));
const sidebar = JSON.parse(fs.readFileSync('./data/sidebar.json', 'utf8'));

const index = (req, res) => {
    res.render('index', {title:'Travlr Getaways', blogs, sidebar});
};

module.exports = {
    index
};