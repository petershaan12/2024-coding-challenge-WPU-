// WPU Coding Challenge 2024 by Peter Shaan
// 33/365
// https://www.codewars.com/kata/55a5befdf16499bffb00007b/javascript

function feast(beast, dish) {
    // return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
    return beast.at(0) === dish.at(0) && beast.at(-1) === dish.at(-1)
        // return beast.slice(0, 1) === dish.slice(0, 1) && beast.slice(-1) === dish.slice(-1)
}

console.log(feast("great blue heron", "garlic naan"))