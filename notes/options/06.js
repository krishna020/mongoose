#socketTimeoutMS

/*
Yes, that's correct. When you set the socketTimeoutMS option in Mongoose,
you are defining a maximum idle time for a connection (socket) to remain open.
If a user is connected to your MongoDB database through your application and there is no activity
on that connection (no data being transmitted) for a period longer than the specified socketTimeoutMS,
Mongoose will automatically close the connection.
*/

const dbURI = 'mongodb://localhost:27017/mydatabase';

// Connection options with socketTimeoutMS set to 30000 milliseconds (30 seconds)
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  socketTimeoutMS: 30000, // Set the socket timeout to 30 seconds
  //means if any user are connected to url and not doing anything for specific time then it will be disconnect
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