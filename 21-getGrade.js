// WPU Coding Challenge 2024 by Peter Shaan
// 21/365
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript

// function getGrade(s1, s2, s3) {
//     let rata = (s1 + s2 + s3) / 3

//     switch (true) {
//         case rata >= 80 && rata < 90:
//             return 'B';
//         case rata >= 70 && rata < 80:
//             return 'C';
//         case rata >= 60 && rata < 70:
//             return 'D';
//         case rata < 60:
//             return 'F';
//         default:
//             return 'A';
//     }
// }

const getGrade = (...s) => {
    const average = s.reduce((acc, curr) => acc + curr) / 3;
    return average >= 90 ? 'A' : average >= 80 ? 'B' : average >= 70 ? 'C' : average >= 60 ? 'D' : 'F';
};


console.log(getGrade(95, 90, 93));
console.log(getGrade(100, 85, 96));
console.log(getGrade(92, 93, 94))