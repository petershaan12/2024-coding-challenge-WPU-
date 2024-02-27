// WPU Coding Challenge 2024 by Peter Shaan
// 29/365
// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

function past(h, m, s) {
    return (h * 3600 + m * 60 + s) * 1000
}

console.log(past(0, 1, 1))