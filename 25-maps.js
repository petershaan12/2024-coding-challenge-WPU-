// WPU Coding Challenge 2024 by Peter Shaan
// 25/365
// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript

// function maps(x) {
//     let hasil = []
//     for (let i = 0; i < x.length; i++) {
//         hasil.push(x[i] * 2)
//     }

//     return hasil
// }

//fungsi map

const maps = (arr) => arr.map(x => x * 2)

console.log(maps([1, 2, 3]))