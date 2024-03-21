// WPU Coding Challenge 2024 by Peter Shaan
// 39/365
// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af

// const quarterOf = (month) => {
//     return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4
// };

const quarterOf = (month) => {
    return Math.ceil(month / 3) // pembulatan keatas
}

console.log(quarterOf(12));
console.log(quarterOf(11));