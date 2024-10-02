const mongoose = require('mongoose')

const connectToDb = async() => {
  mongoose.connect(process.env.MONGO_URI)
  .then((conn) => {
    console.log("mongodb connected successfully")
    console.log("connection host string", conn.connection.host);
    
  })
  .catch((err) => {
    console.log("mongodb connection fail", err);    
    process.exit(1);
  })
}

module.exports=connectToDb