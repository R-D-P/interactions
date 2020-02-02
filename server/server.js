const mongoose = require("mongoose");
const dotenv = require("dotenv");
const faker = require("faker");
dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.CONNECTION_STRING;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log("DB connection successful!"))
  .catch(err => {
    console.log("-----", err);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
