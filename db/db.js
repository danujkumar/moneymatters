const mongoose = require("mongoose");

const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect("mongodb+srv://p4sngh:8VTD25VxFSIJxRFl@cluster0.z0rc1vg.mongodb.net/?retryWrites=true&w=majority");
    console.log("Database Connected!");
  } catch (error) {
    console.log("DB Connection Error");
  }
};

module.exports = { db };
