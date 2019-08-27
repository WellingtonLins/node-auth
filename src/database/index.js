const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/noderest", {
//   useMongoClient: true
// });
mongoose.set("useCreateIndex", true);

const uri = "mongodb://localhost:27017/noderest";
mongoose.connect(uri, { useNewUrlParser: true });

mongoose.Promise = global.Promise;

module.exports = mongoose;
