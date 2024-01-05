/*
a schema typically refers to a structural blueprint or framework that outlines the organization 
and definition of data within a database
*/

//basic blueprint of any schema
const mongoose=require('mongoose')
const schemaName= new mongoose.Schema({
   
    //type the schema field
})

const modelName=mongoose.model('collection_name',schemaName)
module.exports=modelName