// WPU Coding Challenge 2024 by Peter Shaan
// 24/365
// https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1/train/javascript

// function getAge(inputString) {
//     return Number(inputString[0])
// }

function getAge(inputString) {
    return +inputString[0]
}

// const getAge = (inputString) => parseInt(inputString)

// const getAge = parseInt

console.log(getAge("50 years 5old"))