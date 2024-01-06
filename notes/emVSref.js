//...................mongodb have many types of mapping.........................

1- oneToOne

// Define the User schema
const userSchema = new Schema({
    username: String,
    email: String,
  });

  //..............one to few............

  // Create a user
  const user = await User.create({
    username: 'john_doe',
    email: 'john@example.com',
    posts: [
      { title: 'Post 1', content: 'Content of Post 1' },
      { title: 'Post 2', content: 'Content of Post 2' },
    ],
  });



  //..........one to many.....................
  // Create a user
  const user0 = await User.create({
    username: 'john_doe',
    email: 'john@example.com',
    posts: [
      { title: 'Post 1', content: 'Content of Post 1' },
      { title: 'Post 2', content: 'Content of Post 2' },
      { title: 'Post 3', content: 'Content of Post 3' },
      { title: 'Post 4', content: 'Content of Post 4' },
      { title: 'Post 5', content: 'Content of Post 5' },
      { title: 'Post 6', content: 'Content of Post 6' }
    ],
  });

  //...........one to squillions........................................
  //user have too much data

  // Define the Log schema
const logSchema = new Schema({
    message: String,
    timestamp: { type: Date, default: Date.now },
  });
  
  // Define the Host schema with a reference to many logs
  const hostSchema = new Schema({
    hostname: String,
    ipAddress: String,
    logs: [{ type: Schema.Types.ObjectId, ref: 'Log' }], // Reference to Log documents
  });

  //..........................