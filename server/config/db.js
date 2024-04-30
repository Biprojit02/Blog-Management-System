const mongoose = require('mongoose');

const url="mongodb+srv://biprojitgiri09:UoHcrvSlvD7YlZGP@cluster0.fql2n35.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectDB = async () => {
  
  try {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect(url);
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }

}

module.exports = connectDB;
