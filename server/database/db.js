const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/TemplateLibrary");
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`MongoDB error: ${error}`);
  }
};

module.exports = connectDB

