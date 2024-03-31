// WPU Coding Challenge 2024 by Peter Shaan
// 41/365
// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af

// function doubleChar(str) {
//     let hasil = ''
//     for (let i = 0; i < str.length; i++) {
//         hasil += str[i]
//         hasil += str[i]
//     }
//     return hasil
// }

// const doubleChar = (str) => str.split('').map(el => el + el).join('')
const doubleChar = (str) => [...str].map(el => el + el).join('')

console.log(doubleChar("abcd"))