'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    complete: { type: Boolean, default: false },
    text: { type: String, required: true },
    difficulty: { type: Number, default: 1 },
    assignee: { type: String },
});

module.exports = mongoose.model('todoList', schema);
