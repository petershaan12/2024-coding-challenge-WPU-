// WPU Coding Challenge 2024 by Peter Shaan
// 42/365
// https://www.codewars.com/kata/58649884a1659ed6cb000072

// function updateLight(current) {
//     return current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green'
// }

const updateLight = current => ({ green: 'yelow', yellow: 'red', red: 'green' })[current]

console.log(updateLight("green"))
console.log(updateLight("yellow"))