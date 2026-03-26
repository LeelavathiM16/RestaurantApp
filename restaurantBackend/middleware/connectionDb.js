const mongoose = require("mongoose");

const connectionDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://iamleelamadhesh_db_user:qeTO08Zz3i4rTaqC@cluster1.srw1nzw.mongodb.net/",
    );
    console.log("mongo DB Connected");
  } catch (error) {
    console.log("DB connection failed");
    process.exit(1);
  }
};

module.exports = connectionDb;
