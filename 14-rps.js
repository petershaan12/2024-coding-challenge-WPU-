// WPU Coding Challenge 2024 by Peter Shaan
// 14/365
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

// const rps = (p1, p2) => {
//     if (p1 === p2) return 'Draw!'
//     if (p1 === 'rock' && p2 === 'scissors' || p1 === 'scissors' && p2 === 'paper' || p1 === 'paper' && p2 === 'rock') {
//         return 'Player 1 won!'
//     } else {
//         return 'Player 2 won!'
//     }
// };

const rps = (p1, p2) => {
    const rules = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    }

    // if (p1 === p2) {
    //     return 'Draw!'
    // } else {
    //     // return `${rules[p1]}`
    //     return `Player ${(rules[p1] === p2) ? '1' : '2'} won!`
    // }

    return p1 === p2 ? 'Draw!' : `Player ${(rules[p1] === p2) ? '1' : '2'} won!`
}

console.log(rps('rock', 'scissors'))