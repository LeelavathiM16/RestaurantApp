const express = require("express");
const moongoose = require("moongoose");

const app = express();
const port = process.env.port || 3000;

const connectionDb = () => {
  moongoose
    .connect(
      "mongodb+srv://iamleelamadhesh_db_user:qeTO08Zz3i4rTaqC@cluster1.srw1nzw.mongodb.net/",
    )
    .then(() => console.log("MongoGB connected"))
    .catch((err) => console.log(err));

  app.listen(port, () => console.log("DB connected successfully"));
};

module.exports= connectionDb;