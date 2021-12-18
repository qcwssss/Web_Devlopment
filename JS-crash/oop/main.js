// OOP
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);

    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }

    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1999');

console.log(person1.getBirthYear());
console.log(person1.getFullName());