// WPU Coding Challenge 2024 by Peter Shaan
// 19/365
// https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript


// function check(a, x) {
//     for (let i = 0; i <= a.length; i++) {
//         if (a[i] === x) {
//             return true
//         }
//     }
//     return false
// }

const check = (a, x) => a.includes(x)



console.log(check([101, 45, 75, 105, 99, 107], 107))