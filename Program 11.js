const number = prompt("Enter a positive integer");
const numofdigits = number.length;
let sum = 0;
let hell = number;
while (hell > 0) {
     let remainder = hell % 10;
    sum += remainder ** numofdigits;
    hell = parseInt(hell / 10);
}

if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}
