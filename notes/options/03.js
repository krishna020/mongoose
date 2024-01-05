there are many option

#buffer command.

The bufferCommands option in Mongoose determines whether or not Mongoose should convert queries,
update documents, and delete documents into BSON buffers before sending them to MongoDB.
When bufferCommands is set to false, Mongoose converts these operations into plain JavaScript objects.

Here's how you can use the bufferCommands option:

const mongoose = require('mongoose');

// Set the bufferCommands option to false when creating a Mongoose connection
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  bufferCommands: false, // Set to true by default
});

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
});

const User = mongoose.model('User', userSchema);

const newUser = new User({
  username: 'john_doe',
  email: 'john@example.com',
});

// If bufferCommands is set to false, operations are sent as plain objects
newUser.save((err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result);
  }
});

// If bufferCommands is set to true, operations are sent as BSON buffers
User.findOne({ username: 'john_doe' }).exec((err, user) => {
  if (err) {
    console.error(err);
  } else {
    console.log(user);
  }
});
