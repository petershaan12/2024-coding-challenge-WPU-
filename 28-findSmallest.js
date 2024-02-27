// WPU Coding Challenge 2024 by Peter Shaan
// 28/365
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//         let kecil = args[0];
//         for (let i = 0; i < args.length; i++) {
//             if (args[i] < kecil) kecil = args[i]
//         }
//         return kecil
//     }
// }

//pakai fungsi math
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//         return Math.min(...args)
//     }
// }

//pakai fungsi sort 
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return args.sort((a, b) => a - b)[0]
    }
}


const finder = new SmallestIntegerFinder();

console.log(finder.findSmallestInt([78, 56, 232, 12, 8]))