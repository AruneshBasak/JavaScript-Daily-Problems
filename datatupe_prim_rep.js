//Primitive data types
console.log("Welcome to learning 1");
//string
constname = "Arunesh";
console.log("my name is " + name);
console.log("Data type is" + (typeof name));
//numbers
const marks = 34;
console.log("Data type is" + (typeof marks));
//Boolean
const isDriver = true;
console.log("Data type is" + (typeof isDriver));
//null
const nullvar = null;
console.log("Data type is" + (typeof nullvar));
//undefined
const undef = undefined;
console.log("Data type is" + (typeof undef));
//reference data types

//arrays
const myarr = [1, 2, 3, 4, false, 'string'];
console.log("Data type is" + (typeof myarr));
//object literals
const stMarks = {
    arunesh: 84,
    subham: 89,
}
console.log("data type is " + (typeof stMarks));
console.log(stMarks)

function findname() {

}
console.log(typeof findname)

const date = new Date();
console.log(typeof date)