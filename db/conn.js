const mongoose=require('mongoose')
let url='mongodb://127.0.0.1:27017/testing'
mongoose.connect(url)
.then(()=>
{
    console.log('database is connected');
})
.catch((err)=>
{
    console.log(err.message);
})