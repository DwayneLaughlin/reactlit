const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
    process.allowedNodeEnvironmentFlags.MONGODB_URI || "mongodb://localhost/googlebooks"
);
mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true })

const testBook = [
    {
        title : "The Dark Knight Returns",
        author : "Frank Miller",
        description : "it's about batman but he's old",
        image : "this an image",
        link : "this a ling"
    },

    {
        title : "The Dark Knight Returns pt 2",
        author : " also Frank Miller",
        description : "it's about batman but he's even older and lives underground now",
        image : "this an image2",
        link : "this a link"
    }
];

