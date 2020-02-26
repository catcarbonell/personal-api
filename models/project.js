const mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost:27017/personal-api", {useNewUrlParser: true, useFindAndModify: false});

const project = mongoose.Schema({
    title: String,
})