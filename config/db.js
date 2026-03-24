const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config(); 

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log("MongoDB Connected Successfully ✅"); // 👈 IMPORTANT
  } catch (error) {
    console.log("MongoDB Connection Error :", error.message);
    process.exit(1); // 👈 stops app if DB fails
  }
};

module.exports = connectDB;