// WPU Coding Challenge 2024 by Peter Shaan
// bebas/1/365
// https://www.codewars.com/kata/568dcc3c7f12767a62000038/train/javascript

// function setAlarm(employed, vacation) {
//     if (employed === true & vacation === false) {
//         return true
//     }
//     return false
// }

const setAlarm = (e, v) => e && !v;

console.log(setAlarm(true, true))
console.log(setAlarm(true, false))
console.log(setAlarm(false, true))
console.log(setAlarm(false, false))