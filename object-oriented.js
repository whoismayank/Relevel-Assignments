// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     age = () => {
//         console.log(this.name)
//         return 'hello';
//     }
// }

// let person = new Person('Mahendra');
// console.log(person.age());


// const dog = {
//     name: 'Deepak',
//     caldsl(){
//          console.log(this.name)
//          return this.name
//     }
// }

// console.log(dog.caldsl())


// class Student {
//     constructor(name, age, id) {
//         this.name = name;
//         this.age = age;
//         this.id = id;
//     }
//     study() {

//     }
//     eat() {

//     }
//     sleep() {

//     }
//     exercise() {

//     }
// }



//getter and setters
// class Student {
//     constructor(){
//         let name;
//         let marks;
//     }

//     setMarks(marks) {
//         this.marks = marks;
//     }
//     getMarks() {
//         return this.marks;
//     }
// }
// const person1 = new Student();
// person1.setMarks(100);
// const result = person1.getMarks();
// console.log(result);



//private variables in class

// class Vehicle {
//     //color is the private variable
//     #color;
//     no_of_tyres;

//     constructor(color, no_of_tyres) {
//         this.#color = color;
//         this.no_of_tyres = no_of_tyres;
//     }
//     getColor() {
//         return this.#color
//     }
// }
// const bike  =  new Vehicle('Red', '5');
// console.log(bike.getColor());


// //abstraction hide/private method also
// class Vehicle {
//     //color is the private variable
//     #color;
//     no_of_tyres;

//     constructor(color, no_of_tyres) {
//         this.#color = color;
//         this.no_of_tyres = no_of_tyres;
//     }
//     //we can declare private methods using #
//     #vehicleType(){
//         if(this.no_of_tyres == '2') {
//             return 'Bike';
//         } else if(this.no_of_tyres == '4') {
//             return 'Car';
//         } else {
//             return 'Other';
//         }
//     }
//     getVehicleType(){
//         return this.#vehicleType();
//     }
//     getColor() {
//         return this.#color
//     }
// }
// const bike  =  new Vehicle('Red', '4');
// console.log(bike.getVehicleType());


//inheritance(inheritance is used where relation should be is a)

class Shape {
    length;
    breadth;
    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }
    area() {
        return this.length * this.breadth
    }
}


class Rectangle extends Shape {
    constructor(length, breadth) {
        super(length, breadth);
    }
    getArea() {
        return super.area()
    }
}


var obj = new Rectangle(4, 5);
console.log(obj.getArea());