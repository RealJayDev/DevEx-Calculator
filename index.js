const scale = 0.0035;
const prompt = require('prompt-sync')({sigint: true});

console.log(`Welcome to the DevEx Calculator`)

const num = prompt("Insert a Robux amount you'd like to convert to USD: ")

if (parseInt(num) <= 100000) {
    console.log("WARNING: This amount isn't DevEx-able as it is not above 100k")
}

let math = parseInt(num) * scale

console.log(`Your DevEx cashout should be: $${math}`)