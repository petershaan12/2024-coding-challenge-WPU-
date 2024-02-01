// WPU Coding Challenge 2024 by Peter Shaan
// 8/365
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

// var countSheep = function(num) {
//     let kata = ""
//     for (let i = 1; i <= num; i++) {
//         kata += `${i} sheep...`
//     }

//     return kata
// }

const countSheep = (num) => [...Array(num)].map((_, i) => `${i+1} sheep...`).join('')


console.log(countSheep(5))