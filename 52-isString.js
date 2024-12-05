// WPU Coding Challenge 2024 by Peter Shaan
// 52/365
// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript

String.prototype.isUpperCase = function() {
  return this.toString() === this.toUpperCase();
}


console.log('c'.isUpperCase()) // false