const express = require('express');
const router = express.Router();
const Model = require('../models/model');


//Create and Save a Record of a Model:
let addPerson = new Model({
    name:'Smoky',age:50, favoriteFoods:['fish','cavier']
});
addPerson.save().then((done)=> {console.log(done)}).catch((err)=>{console.error(err)});

//Create Many Records with model.create():
let people = [
    { name: "Tony", age: 28, favoriteFoods: ["pizza", "Hotdogs"] },
    { name: "Sami", age: 26, favoriteFoods: ["tagine", "koskos"] },
    { name: "Carlos", age: 30, favoriteFoods: ["pasta", "tacos"] },
];
Model.create(people,(err, done)=>{
    if(err){return console.log(err)}
    else{return console.log(null, done)}
});

//Use model.find() to Search Your Database:
Model.find({name:'Tony'},(err, done)=>{
    if(err){return console.log(err)}
    else{return console.log(null, done)}
});

//Use model.findOne() to Return a Single Matching Document from Your Database:
Model.findOne({favoriteFoods:{$all:['pasta']}},(err, done)=>{
    if(err){return console.log(err)}
    else{return console.log(null, done)}
});


//Use model.findById() to Search Your Database By _id:
Model.findById({_id:'615b10e520deee3f34b925e9'},(err, data)=>{
    if(err){return console.log(err)}
    else{return console.log(null, done)}
});

//Perform Classic Updates by Running Find, Edit, then Save:
Model.findOne({name:'Tony'},(err, done)=>{
    if(err){return console.log(err)}
    else{done.favoriteFoods.push('tacos')
    done.save();
}
});

//Perform New Updates on a Document Using model.findOneAndUpdate():
Model.findOneAndUpdate({age:28},{$set:{name:'Sarra'}},{new: true},(err, done)=>{
    if (err){console.log('Men Down')};
});

//Delete One Document Using model.findByIdAndRemove:
Model.findByIdAndRemove({_id:'615b10e520deee3f34b925e9'},(err, done)=>{
    if(err){return console.log(err)}
    else{return console.log(null, done)}
});

//MongoDB and Mongoose - Delete Many Documents with model.remove():
Model.remove({name:'Sami'},(err, done)=>{
    if(err){return console.log(err)}
    else{return console.log(null, done)}
});

//Chain Search Query Helpers to Narrow Search Results:
Model.find({favoriteFoods:['koskos']})
.sort({name:'asc'})
.limit(2)
.select('-age')
.exec((err, done)=>{
    if(err){return console.log(err)}
    else{return console.log(null, done)}
});

//Export
module.exports = router;
