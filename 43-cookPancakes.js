// WPU Coding Challenge 2024 by Peter Shaan
// 43/365
// https://www.codewars.com/kata/58552bdb68b034a1a80001fb

function cookPancakes(n, m) {
    return (n < m) ? 2 : Math.ceil(n / m * 2)
}

console.log(cookPancakes(10, 3))
console.log(cookPancakes(1, 2))
console.log(cookPancakes(4, 1))