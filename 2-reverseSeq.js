// WPU Coding Challenge 2024 by Peter Shaan
// 2/366
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

// const reverseSeq = n => {
//     const result = []
//     for (let i = n; i >= 1; i--) {
//         result.push(i);
//     }
//     return result;
// };

const reverseSeq = n => [...Array(n).fill().map((el, i) => n - i)]

console.log(reverseSeq(5))