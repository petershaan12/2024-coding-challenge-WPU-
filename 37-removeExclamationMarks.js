// WPU Coding Challenge 2024 by Peter Shaan
// 37/365
// https://www.codewars.com/kata/57a0885cbb9944e24c00008e

// function removeExclamationMarks(s) {
//     let hasil = ""
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] !== '!')
//             hasil += s[i]
//     }

//     return hasil;
// }

// const removeExclamationMarks = (s) => s.split('!').join('')
const removeExclamationMarks = (s) => s.replace(/!/g, '')

console.log(removeExclamationMarks("Hello World!"))