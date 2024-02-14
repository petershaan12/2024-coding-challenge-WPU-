// function segitiga1(banyak) {
//     let hasil = '';
//     for (let i = 0; i < banyak; i++) {
//         for (let j = 0; j <= i; j++) {
//             hasil += '* ';
//         }
//         hasil += '\n';
//     }
//     return hasil;
// }

const segitiga1 = banyak => Array.from({ length: banyak }, (_, i) => '* '.repeat(i + 1)).join('\n');

console.log(segitiga1(5));