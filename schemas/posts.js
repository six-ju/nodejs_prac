const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
  name: {
    type: String,
    require:true,
    unique : true,
  },
  title: {
    type: String,
  },
  contents:{
    type: String,     
  },
  date:{
    type: Date,
  },
  pw:{
    type: String,
  }
  
});

module.exports = mongoose.model("posts", postsSchema);