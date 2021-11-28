// jshint esversion:6
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit."
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "John",
  age: 37
});

person.save();

// add more fruits
const kiwi = new Fruit({
  name: "Kiwi",
  score: 10,
  review: "The best fruit"
});

const orange = new Fruit({
  name: "Orange",
  score: 4,
  review: "Too sour"
});

const banana = new Fruit({
  name: "Banana",
  score: 3,
  review: "Wierd texture"
});

// Fruit.insertMany([kiwi, orange, banana], function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all fruits to fruitsDB");
//   }
// });
Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {
    // mongoose.connection.close(); // ??
    // mongoose.disconnect();

    fruits.forEach(function(element) {
      console.log(element.name);
    });
  }
});
