// WPU Coding Challenge 2024 by Peter Shaan
// 46/365
// https://www.codewars.com/kata/56f6ad906b88de513f000d96/

function bonusTime(salary, bonus) {
    return '\u00A3' + (bonus ?  salary*10 : salary)
}

console.log(bonusTime(10000, true))