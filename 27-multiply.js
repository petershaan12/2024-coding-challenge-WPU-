// function multiply(number) {
//     // return number.toString().length
//     let kali = 1;
//     if (number > 0) {
//         for (let i = 0; i < number.toString().length; i++) {
//             kali *= 5
//         }
//     } else {
//         for (let i = 1; i < number.toString().length; i++) {
//             kali *= 5
//         }
//     }
//     return number * kali
// }

function multiply(number) {
    return number * Math.pow(5, Math.abs(number).toString().length)
}

console.log(multiply(200))
console.log(multiply(-3))