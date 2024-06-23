// WPU Coding Challenge 2024 by Peter Shaan
// 51/365
// https://www.codewars.com/kata/50654ddff44f800200000007/train/javascript

// function solution(a, b){
//   let hasil = "";
//   // Check if both inputs are numbers
//   if (typeof a === "number" && typeof b === "number") {
//       if (a < b) {
//           hasil += a + b + a;
//       } else {
//           hasil += b + a + b;
//       }
//   } else if (typeof a === "string" && typeof b === "string") {
//       // If strings, compare their lengths
//       if (a.length < b.length) {
//           hasil += a + b + a;
//       } else {
//           hasil += b + a + b;
//       }
//   }
//   return hasil;
// }

function solution(a, b) {
  return (a.length > b.length) ? b + a + b : a + b + a;
}


  console.log(solution('45', '1'))
  console.log(solution('Soon', 'Me'))
  console.log(solution('U', 'False'))
  