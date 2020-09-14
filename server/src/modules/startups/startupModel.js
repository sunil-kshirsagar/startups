const mongoose = require('mongoose');

const startupSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    country: { type: String, required: true }
});

module.exports = mongoose.model('Startup', startupSchema);