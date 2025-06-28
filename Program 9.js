
const number1  = parseInt(prompt('Enter a positive integer: '));

if (number1  < 0) {
    alert('Error! Factorial for negative number does not exist.');
}

else if (number1 === 0) {
    console.log(`The factorial of ${number1} is 1.`);
}

else {
    let fact = 1;
    for (i = 1; i <= number1; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number1} is ${fact}.`);
}


