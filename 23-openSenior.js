// WPU Coding Challenge 2024 by Peter Shaan
// 23/365
// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

// function openOrSenior(data) {
//     let hasil = [];
//     for (let i = 0; i < data.length; i++) {
//         if (data[i][0] >= 55 && data[i][1] > 7) {
//             hasil.push("Senior")
//         } else {
//             hasil.push("Open")
//         }
//     }
//     return hasil
// }

const openOrSenior = (data) => data.map(([x, y]) => x >= 55 && y > 7 ? "Senior" : "Open");

console.log(openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20]
]))