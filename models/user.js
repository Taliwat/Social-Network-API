const mongoose = require('mongoose');


//create new Mongoose Schema for the User with the data given in the example.
const userSchema = new mongoose.Schema({
    username: { type: String, 
        unique: true, 
        required: true, 
        trimmed: true},
    email: { type: String, 
        unique: true, 
        required: true, 
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']},
    thoughts: { type: Array,
        references: {
            model: 'Thought',
            key: '_id'
    }},
    friends: { type: Array,
        references: {
            model: 'User',
            key: '_id'
        }}
    }
);

userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return `[${this.first} ${this.last}]`;
  })
  // Setter to set the first and last name
  .set(function (v) {
    const first = v.split(' ')[0];
    const last = v.split(' ')[1];
    this.set({ first, last });
  });

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;