// WPU Coding Challenge 2024 by Peter Shaan
// 36/365
// https://www.codewars.com/kata/568d0dd208ee69389d000016

// function rentalCarCost(d) {
//     let cost = 0;
//     for (let i = 0; i < d; i++) {
//         cost += 40

//     }
//     if (d >= 3 && d < 7) {
//         return cost -= 20
//     }
//     if (d >= 7) {
//         return cost -= 50
//     } else
//         return cost
// }

// function rentalCarCost(d) {
//     return d >= 7 ? d * 40 - 50 : d >= 3 ? d * 40 - 20 : d * 40
// }

const rentalCarCost = (d) => d * 40 - ((d >= 7) ? 50 : (d >= 3) ? 20 : 0)

console.log(rentalCarCost(1))
console.log(rentalCarCost(2))
console.log(rentalCarCost(3))
console.log(rentalCarCost(7))