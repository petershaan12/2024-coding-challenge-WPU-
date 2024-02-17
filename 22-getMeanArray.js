// WPU Coding Challenge 2024 by Peter Shaan
// 22/365
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

// function getAverage(marks) {
//     let hasil = 0;
//     for (let i = 0; i < marks.length; i++) {
//         hasil += marks[i]
//     }
//     return Math.floor(hasil / marks.length)
// }

const getAverage = (marks) => Math.floor(marks.reduce((acc, curr) => acc + curr, 0) / marks.length);

console.log(getAverage([2, 2, 2, 2]))
console.log(getAverage([1, 2, 3, 4, 5, ]))
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]))