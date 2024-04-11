// WPU Coding Challenge 2024 by Peter Shaan
// 44/365
// https://www.codewars.com/kata/59c8b38423dacc7d95000008

function isValid(formula) {
    if (formula.includes(1) && formula.includes(2)) {
        return false;
    }
    if (formula.includes(3) && !formula.includes(4)) {
        return false;
    }
    if (formula.includes(5) && !formula.includes(6)) {
        return false;
    }
    if (!formula.includes(5) && formula.includes(6)) {
        return false;
    }
    if (!formula.includes(7) && !formula.includes(8)) {
        return false;
    }

    return true;
}

console.log(isValid([1, 3, 7]))
console.log(isValid([3, 8]))