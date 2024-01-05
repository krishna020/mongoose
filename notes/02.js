// this is the basic code to add our node.js server to database
const mongoose=require('mongoose')
mongoose.connect(URL,option)

//................................................url........................................


url_1='mongodb://localhost:27017/mydatabase'
url_2='mongodb://127.0.0.1:27017/myapp'

You can also specify several more parameters in the uri:'mongodb://username:password@host:port/database?options...'

/*
we recommend using 127.0.0.1 instead of localhost. 
That is because Node.js 18 and up prefer IPv6 addresses,
which means, on many machines, Node.js will resolve localhost to the 
IPv6 address ::1 and Mongoose will be unable to connect, unless the mongodb instance
is running with ipv6 enabled.
*/


//.........................error handling..........................................
// mongoose.connect return promise, we can handle this promise using then, catch block
const mongoose = require('mongoose')

mongoose.connect(URL)
    .then(() => {
        console.log(`connected to : ${URL}`);
    })
    .catch((err) => {
        console.log(err.message);
    })

    //..............................