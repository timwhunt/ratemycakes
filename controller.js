//You must require your model file to use queries
const Cake = require("./models");

module.exports = {
    all : function(req,res){
        Cake.find({})
            .then((data)=> res.json({status: "success", data: data}))
            .catch((err)=> res.json({status: "error", error: err}));
    },
    create : function(req,res){
        Cake.create(req.body)
            .then((data)=> res.json({status: "success", data: data}))
            .catch((err)=> res.json({status: "error", error: err}));
    },
    delete: function(req,res) {
        Cake.findByIdAndRemove(req.params.id)
            .then((data)=> res.json({status: "success", data: data}))
            .catch((err)=> res.json({status: "error", error: err}));
    },
    get: function(req,res) {
        Cake.findById(req.params.id)
            .then((data)=> res.json({status: "success", data: data}))
            .catch((err)=> res.json({status: "error", error: err}));
    },
    update: function(req,res) {
        Cake.findByIdAndUpdate(req.body._id, req.body)
            .then((data)=> res.json({status: "success", data: data}))
            .catch((err)=> res.json({status: "error", error: err}));
    },
    createRating: function(req,res) {
        Cake.findByIdAndUpdate(req.params.id, {$push: {ratings: req.body}}, { runValidators: true})
            .then((data)=> res.json({status: "success", data: data}))
            .catch((err)=> res.json({status: "error", error: err}));
    }
};