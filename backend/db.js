const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config({path:"../.env"});

const mongoURI = process.env.MONGO_URI

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected successfully");
     const fetched_data = await mongoose.connection.db
      .collection("food_items")
      .find({})
      .toArray()
       
        const foodCategory = await mongoose.connection.db
      .collection("foodCategory")
      .find({})
      .toArray()
     global.food_items = fetched_data
     global.foodCategory = foodCategory
     
    
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
   
    process.exit(1);
  }
  
};

module.exports = mongoDB
