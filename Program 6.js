const num1 = parseInt(prompt("Enter first number: "));

const num2 = parseInt(prompt("Enter second number: "));

const num3 = parseInt(prompt("Enter third number: "));

let large = 0;

if(num1 >= num2 && num1 >= num3) {

   large = num1; } 
   
else if (num2 >= num1 && num2 >= num3) {

   large= num2; } 

else {

   large = num3; }

console.log("The largest number is " + large);