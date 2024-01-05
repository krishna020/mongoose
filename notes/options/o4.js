#autoIndex

/*
In Mongoose, the autoIndex option is used to control the automatic creation of indexes
 when Mongoose models are defined. However, the _id field in MongoDB is indexed by default,
  and the autoIndex option doesn't affect the creation of this default index on the _id field.
*/

/*
By default, Mongoose automatically creates indexes for fields that have unique 
constraints (unique: true) or are explicitly specified as indexed using the index: 
true option in the schema. If you disable autoIndex, Mongoose won't automatically create indexes for these fields.
*/

/*
The autoIndex option is set to true in non-production environments (process.env.NODE_ENV !== 'production'). 
This means that indexes will be automatically created in development, improving query performance during
development and testing.
In a production environment, where performance may be critical, autoIndex is set to false to
avoid the overhead of automatic index creation during each deployment.
*/


const mongoose = require('mongoose');

// Define a Mongoose schema for a blog post
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/blogdb', { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: process.env.NODE_ENV !== 'production', // Disable autoIndex in production
})
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error.message);
  });