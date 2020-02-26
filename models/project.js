const mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost:27017/personal-api", {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

const projectSchema = mongoose.Schema({
    title: { 
        type: String,
        required: 'Enter a title for this project!'
    } ,
    demoUrl: String,
    previewImg: { 
        type: String,
        required: 'Enter a URL ',
    },
    description: String,
    technologies: [String],
});

module.exports = mongoose.model('Project', projectSchema );