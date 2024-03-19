// WPU Coding Challenge 2024 by Peter Shaan
// 38/365
// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7

// function monkeyCount(n) {
//     let array = []
//     for (let i = 1; i <= n; i++)
//         array.push(i)

//     return array
// }

const monkeyCount = (n) => Array.from({ length: n }, (_, i) => i + 1)

console.log(monkeyCount(5))