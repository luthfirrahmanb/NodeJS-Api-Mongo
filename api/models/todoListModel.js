'use strict';

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var TaskSchema = new schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the task'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        required: 'Can\'t be blank'
    },
    user: {
        type: String,
        required: 'Please input the user name or email'
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);