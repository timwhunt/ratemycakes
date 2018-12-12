//This file will contain all of the information pertaining to the database and models

//mongoose configuration lines will go here
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cakes', { useNewUrlParser: true }); //can add callback for success

//model definition will go here
const RatingSchema = new mongoose.Schema({
    rating: {type: Number, required: true},
    comment: {type: String, required: true},
}, {timestamps: true});

mongoose.model("Rating", RatingSchema);

const CakeSchema = new mongoose.Schema({
    bakerName: {type: String, required: true},
    imageURL: {type: String, required: true},
    ratings: [RatingSchema]
}, {timestamps: true});

mongoose.model("Cake", CakeSchema);

//for modularization, you must add the following:
module.exports = mongoose.model('Cake');