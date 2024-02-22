// WPU Coding Challenge 2024 by Peter Shaan
// 26/365
// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

// function squareSum(numbers) {
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         total += (numbers[i] * numbers[i])
//     }
//     return total
// }

// const squareSum = numbers => numbers.map(x => x * x).reduce((a, c) => a + c, 0)

const squareSum = num => num.reduce((sum, num) => sum + (num * num), 0)

console.log(squareSum([1, 2]))
console.log(squareSum([]))