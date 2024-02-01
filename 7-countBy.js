// WPU Coding Challenge 2024 by Peter Shaan
// 7/365
// https://www.codewars.com/kata/5513795bd3fafb56c200049e

// function countBy(x, n) {
//     let z = [];
//     for (let i = 1; i <= n; i++) {
//         z.push(i * x)
//     }

//     return z;
// }

const countBy = (x, n) => [...Array(n)].map((_, i) => ++i * x);

console.log(countBy(2, 5))