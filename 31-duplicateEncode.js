// WPU Coding Challenge 2024 by Peter Shaan
// 31/365
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/javascript

// function duplicateEncode(word) {
//     let final = ''
//     word = word.toLowerCase()

//     for (let i = 0; i < word.length; i++) {
//         if (word.indexOf(word[i]) === word.lastIndexOf(word[i])) {
//             final += '(';
//         } else {
//             final += ')';
//         }
//     }
//     return final;
// }

const duplicateEncode = w => w.toLowerCase().split('')
    .map(function(a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');



// console.log(duplicateEncode("din"))
console.log(duplicateEncode("recede"))