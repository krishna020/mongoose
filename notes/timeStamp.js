{timestamps: true}

Mongoose will add two properties of type Date to your schema:

1-createdAt: a date representing when this document was created       // immutable
2-updatedAt: a date representing when this document was last updated  //mutable


//...........we can override the property name ..............
const userSchema = new Schema({ name: String }, {
    timestamps: {
      createdAt: 'created_at', // Use `created_at` to store the created date
      updatedAt: 'updated_at' // and `updated_at` to store the last updated date
    }
  });

  //.......................Timestamps on Subdocuments...............
  
Mongoose also supports setting timestamps on subdocuments. Keep in mind that createdAt and updatedAt
for subdocuments represent when the subdocument was created or updated, not the top level document. 
Overwriting a subdocument will also overwrite createdAt.
