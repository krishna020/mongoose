#maxPoolSize

/*
Note: While increasing the maxPoolSize can be beneficial in certain scenarios,
 it's important to consider the limitations and capacity of your MongoDB server. 
 Excessive connection pooling can lead to resource exhaustion on the MongoDB server, 
 impacting overall performance. Always ensure that the chosen maxPoolSize value aligns with the server's capabilities and the requirements of your application.
*/

const mongoose = require('mongoose');

// Connection URI
const dbURI = 'mongodb://localhost:27017/mydatabase';

// Connection options with maxPoolSize set
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 10,
   // Set the maximum pool size to 10 connections
  //it means 10 users can connect same time
  //default 100
};

// Establish a connection to the MongoDB database
mongoose.connect(dbURI, connectionOptions)
  .then(() => {
    console.log('Connected to the database');
    // Your application logic here...
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });
