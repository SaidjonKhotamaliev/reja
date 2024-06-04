let box: string = "Hello!";
console.log(box);

// interface
// interface Person {
//   name: string;
//   age: number;
//   nationality: string;
// }

// let person: Person = {
//   name: "Steve",
//   age: 24,
//   nationality: "Uzbekistan",
// };

let skills: (number | string)[];
skills = ["Hello", "World!", 100];
console.log(skills);

class Person {
  age: number;
  firstName: string;
  lastName: string;

  constructor(age: number, firstName: string, lastName: string) {
    this.age = age;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
const person1 = new Person(24, "Steve", "Specter");
