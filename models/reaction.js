const mongoose = require('mongoose');

//create new Mongoose Schema for Reactions with the data given in the example, just reffing it back to Re
 const reactionSchema = new mongoose.Schema({
    reactionID: { type: Object},
    reactionBody: { type: String,
        required: true,
        min: 1,
        max: 280},
    username: { type: String,
        required: true},
    createdAt: { type: Date,
        get: (date),
        timestamps: true,
        toJSON: {
            getters: true}    
}});

module.exports = reactionSchema
