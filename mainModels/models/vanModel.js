
const mongoose = require('mongoose');

const vanSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    availability: { type: Boolean, default: true },
    description: { type: String },
    images: [{ type: String }]  
});

const Van = mongoose.model('Van', vanSchema);
module.exports = Van;
