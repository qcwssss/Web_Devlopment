// jshint esversion: 6

const mongoose = require('mongoose');

// Call async main function declared below and catch any errors at the end.
main().catch(err => console.log(err));


// Go read this for a better understanding of async and await:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
async function main() {
  await mongoose.connect('mongodb://localhost:27017/fruitsDB');

  // Creating the Schema.
  const fruitSchema = new mongoose.Schema({
    name: { // Validator
      type: String,
      required: [true, "Fruits must have a name."],
    },
    rating: { // Validator
      type: Number,
      min: [1, "min >= 1"],
      max: [10, "max <= 10"],
    },
    review: String,
  });

  // Compiling Schema into a Model.
  const Fruit = mongoose.model("Fruit", fruitSchema);

  // Create a fruit document with properties and behaviors as declared in our Schema.
  const fruit = new Fruit({
    name: "Mandarino",
    rating: 1,
    review: "eww!",
  });
  // Save fruit document. Remember to comment it after the first time you launch app.js.
  // await fruit.save();

  const personSchema = new mongoose.Schema({
    name: String,
    age: Number
  });

  const Person = mongoose.model("Person", personSchema);

  const person = new Person({
    name: "John",
    age: 37
  });

  // person.save();

  // Person.deleteMany({name: "John"}, function(err) {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log("Successfully deleted Person document");
  //     }
  //   });



  // Fruit.create( {name: "Peach" }, {rating: 5}, {review: "just ok"}, function(err) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log("Successfully inserted Fruits document");
  //   }
  // });

  // Fruit.updateOne({_id: "61a2d4eabae70accbc851508"  }, {name: "Peach" }, function(err) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log("Successfully updated Fruits document");
  //   }
  // });

  // Fruit.deleteOne({
  //   name: "Peach"
  // }, function(err) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //
  //     console.log("Successfully deleted Fruits document");
  //   }
  // });


  // Find all the fruits inside fruits collection with mongoose .find({}, callback).
  Fruit.find({}, (err, fruits) => {
    if (err) {
      return handleError(err); // not if this is the correct way to handle errors in async function
    } else {

      // Close connection to database!
      mongoose.connection.close();

      // Console log all the fruit names inside fruits collection.
      fruits.forEach(fruit => {
        console.log(fruit.name);
      });
    }
  });



}
// end of async main func.
