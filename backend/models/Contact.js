const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    company: {
        type: String,
        trim: true
    },
    division: {
        type: String,
        trim: true
    },
    service: {
        type: String,
        trim: true
    },
    budget: {
        type: String,
        trim: true
    },
    timeline: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    otherDescription: {
        type: String,
        trim: true
    },
    submittedAt: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['new', 'contacted', 'closed'],
        default: 'new'
    }
});

module.exports = mongoose.model('Contact', contactSchema);
