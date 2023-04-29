const mongoose = require("mongoose");

function connectDb() {
  mongoose.connect("mongodb+srv://xenon:xenon123@cluster0.fe8izhn.mongodb.net/?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  const connection = mongoose.connection;
  connection.on("connected", () => {
    console.log("connection successfull");
  });
  connection.on("error", () => {
    console.log("connection failed");
  });
}

mongoose.set('strictQuery', true);


connectDb();
module.exports = mongoose;
