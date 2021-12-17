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
        isCompleted: true
    },

]

// console.log(todos);
console.log(todos[2].text);

const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// For loops
// for (let i = 0; i < 10; i++) {
//     console.log(`number ${i}`);
// }

// while
let i = 0;
while (i < 3) {
    console.log(`while number ${i}`);
    i++
}

// of loop
for (let todo of todos) {
    console.log(todo.text);
    // console.log(todo.id);
}



