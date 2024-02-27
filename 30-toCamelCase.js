// WPU Coding Challenge 2024 by Peter Shaan
// 30/365
// https://www.codewars.com/kata/517abf86da9663f1d2000003/javascript

function toCamelCase(str) {
    return str.replace(/[_-]([a-zA-Z])/g, (m, g) => g.toUpperCase())
}

console.log(toCamelCase("the_stealth_warrior"))
console.log(toCamelCase("the-Stealth-Warrior"))