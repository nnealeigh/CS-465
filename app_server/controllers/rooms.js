const fs = require('fs');
const room = JSON.parse(fs.readFileSync('./data/room.json','utf8'));

const rooms = (req, res) => {
    res.render('rooms', {title: "Travlr Getaways - Rooms", room});
};

module.exports = {
    rooms
};