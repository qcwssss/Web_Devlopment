const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies:['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

// alert(person)
console.log(person.hobbies[1]);

// deconstruct
const { firstName, lastName, address: { city }} = person;
console.log(city);

person.email = '123@email';
console.log(person.email);

const todos = [
    {
        id: 1, 
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2, 
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3, 
        text: 'Dentist appt',
        isCompleted: false
    },

]

console.log(todos[2].text);

const todoJSON = JSON.stringify(todos);

// // of loop
// for (let todo of todos) {
//     console.log(todo.text);
// }

// forEach, map, filter
todos.forEach(function(elt) {
    console.log(elt.text);
});

const todoText = todos.map(function(elt) {
    return elt.text;
});

console.log(todoText);

// chain filter and map
const todoCompleted = todos.filter(function(elt) {
    return elt.isCompleted === true;
})
.map(function(elt) {
    return elt.text;
});

console.log(todoCompleted);

const x = 10;

if (x === 10) {
    console.log('x is 10');
} else {
    console.log('x is NOT 10');
}

const color = x > 10 ? 'red' : 'blue';
console.log(color);

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;    
}


