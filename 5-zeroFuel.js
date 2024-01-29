// WPU Coding Challenge 2024 by Peter Shaan
// 5/365
// https://www.codewars.com/kata/5861d28f124b35723e00005e

const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump <= mpg * fuelLeft;

console.log(zeroFuel(100, 50, 1))