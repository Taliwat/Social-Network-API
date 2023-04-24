const mongoose = require('mongoose');

//make the initial server connection using Mongoose 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true 
}); 

mongoose.set('debug', true);

module.exports = mongoose