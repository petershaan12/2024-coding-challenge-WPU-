// WPU Coding Challenge 2024 by Peter Shaan
// 15/365

// function points(games) {
//     let result = 0
//     for (let i = 0; i < games.length; i++) {
//         if (games[i][0] > games[i][2]) {
//             result += 3
//         } else if (games[i][0] === games[i][2]) {
//             result += 1
//         }
//     }
//     return result
// }

const points = (games) => games.reduce((acc, [x, _, y]) => (x > y ? 3 : x < y ? 0 : 1) + acc, 0);

console.log(points(["0:4", "0:0", "2:1", "4:3", "1:1", "3:0", "3:3", "3:1", "3:4", "0:0"]))