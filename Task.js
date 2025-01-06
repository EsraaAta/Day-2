//4

function Person(name, age) {

	this.name = name;
	this.age = age;
    // this.greed = function(){
    //     console.log (this.name)
    //     console.log (this.age)
    // }

}
Person.prototype.greed = function(){
    console.log (this.name)
    console.log (this.age)
}

var p1= new Person("Esraa",22)
var p2= new Person("Ata",50)

console.log(p1)
console.log(p2)
//----------------------------------

//5

// function createUser(config) {
//   if (config.type === 'Admin') {
//       return {
//           name: config.name,
//           manageUsers: function() {
//               console.log(`${this.name} is managing users.`);
//           }
//       };
//   } else if (config.type === 'Guest') {
//       return {
//           name: config.name,
//           viewContent: function() {
//               console.log(`${this.name} is viewing content.`);
//           }
//       };
//   } else {
//       throw new Error("Invalid user type.");
//   }
// }

// var adminUser = createUser({ type: 'Admin', name: 'Esraa' });
// adminUser.manageUsers(); 

// var guestUser = createUser({ type: 'Guest', name: 'Ata' });
// guestUser.viewContent();


//-----------------------------------
// new lab 
//

// function Person(name) {
//   this.name = name;
// }
// function Student(name, school) {
//   Person.call(this, name);
//   this.school = school;
// }
// let Student1 = new Student("asmaa", "elshohadaa");
// // console.log(Student1.school);
// // console.log(Student1.name);

// Person.prototype.greet = function () {
//   console.log(my name is ${this.name});
// };

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;
// Student.prototype.greet = function () {
//   console.log(my name is ${this.name} and my school is ${this.school});
// };
// let person2 = new Person("lina");
// let Student2 = new Student("ali", "cairo");
// console.log(person2.greet());
// console.log(Student2.greet());

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.compareAge = function (person1, person2) {
//   if (person1.age > person2.age) {
//     console.log(${person1.name}  older than ${person2.name});
//   } else if (person1.age < person2.age) {
//     console.log(${person2.name}  older than ${person1.name});
//   } else {
//     console.log(${person1.name}  the same age  ${person2.name});
//   }
// };

// person1 = new Person("Esraa", 22);
// person2 = new Person("Ata", 50);
// Person.compareAge(person1, person2);

// function Person(name, id) {
//   this.name = name;
//   var _id = id;
//   this.getId = function () {
//     return _id;
//   };
// }

// let person1 = new Person("Asmaa", 200120);
// console.log(person1.id);
// console.log(person1.getId());

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function () {
//     console.log(hello ,${this.name});
//   };
// }
// let person1 = new Person("Esraa", 22);
// console.log(person1.name);
// console.log(person1.age);
// person1.greet();

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.greet = function () {
//   console.log(my name is ${this.name});
// };

// let person1 = new Person("Esra", 22);
// let person2 = new Person("Ata", 22);
// person1.greet();
// person2.greet();

