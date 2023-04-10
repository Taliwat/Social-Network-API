const mongoose = require('mongoose');


const thoughtSchema = new mongoose.Schema({
    thoughtText: { type: String,
        required: true,
        min: 1,
        max: 280},
    createdAt: { type: Date,
        get: (date),
        timestamps: true,
        toJSON: {
            getters: true
        }},
    username: { type: String,
        reuiqred: true},
    reactions: { type: Array,
        reference: {
            model: reactionSchema
        }}
});

thoughtSchema
  .virtual('reactionCount')
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

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;

