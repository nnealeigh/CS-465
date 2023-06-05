const mongoose = require('mongoose');

// define trip schema
const tripSchema = new mongoose.Schema({
    link: { type: String, required: true},
    image: { type: String, required: true},
    title: { type: String, required: true},
    description: { type: String, required: true}
});

mongoose.model('rooms', tripSchema);