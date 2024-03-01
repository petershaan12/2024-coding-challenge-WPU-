// WPU Coding Challenge 2024 by Peter Shaan
// 32/365
// https://www.codewars.com/kata/5662b14e0a1fb8320a00005c/javascript

// function naughtyOrNice(data) {
//     let hitung_naughty = 0;
//     let hitung_nice = 0;
//     for (const month in data) {
//         for (const day in data[month]) {
//             const behavior = data[month][day];
//             if (behavior === 'Naughty') {
//                 hitung_naughty++;
//             } else if (behavior === 'Nice') {
//                 hitung_nice++;
//             }
//         }
//     }
//     return hitung_naughty > hitung_nice ? "Naughty!" : "Nice!";
// }

// function naughtyOrNice(data) {
//     let hitung_naughty = 0;
//     let hitung_nice = 0;

//     // return data["January"];
//     // return Object.values(data)[1]
// }

const naughtyOrNice = (data) => {
    let naughtyMeter = 0

    for (const month in data) {
        for (const day in data[month]) {
            naughtyMeter += data[month][day] === "Nice" ? 1 : -1
        }
    }

    return naughtyMeter < 0 ? "Naughty!" : "Nice!"
}

console.log(naughtyOrNice({ "January": { "1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Nice", "5": "Naughty", "6": "Nice", "7": "Naughty", "8": "Nice", "9": "Naughty", "10": "Nice", "11": "Naughty", "12": "Nice", "13": "Naughty", "14": "Nice", "15": "Naughty", "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Naughty", "20": "Nice", "21": "Naughty", "22": "Nice", "23": "Naughty", "24": "Nice", "25": "Naughty", "26": "Nice", "27": "Naughty", "28": "Nice", "29": "Naughty", "30": "Nice", "31": "Naughty" }, "February": { "1": "Nice", "2": "Naughty", "3": "Nice", "4": "Naughty", "5": "Nice", "6": "Naughty", "7": "Nice", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Nice", "12": "Naughty", "13": "Nice", "14": "Naughty", "15": "Nice", "16": "Naughty", "17": "Nice", "18": "Naughty", "19": "Nice", "20": "Naughty", "21": "Nice", "22": "Naughty", "23": "Nice", "24": "Naughty", "25": "Nice", "26": "Naughty", "27": "Nice", "28": "Naughty", "29": "Nice" }, "March": { "1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Nice", "5": "Naughty", "6": "Nice", "7": "Naughty", "8": "Nice", "9": "Naughty", "10": "Nice", "11": "Naughty", "12": "Nice", "13": "Naughty", "14": "Nice", "15": "Naughty", "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Naughty", "20": "Nice", "21": "Naughty", "22": "Nice", "23": "Naughty", "24": "Nice", "25": "Naughty", "26": "Nice", "27": "Naughty", "28": "Nice", "29": "Naughty", "30": "Nice", "31": "Naughty" }, "April": { "1": "Nice", "2": "Naughty", "3": "Nice", "4": "Naughty", "5": "Nice", "6": "Naughty", "7": "Nice", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Nice", "12": "Naughty", "13": "Nice", "14": "Naughty", "15": "Nice", "16": "Naughty", "17": "Nice", "18": "Naughty", "19": "Nice", "20": "Naughty", "21": "Nice", "22": "Naughty", "23": "Nice", "24": "Naughty", "25": "Nice", "26": "Naughty", "27": "Nice", "28": "Naughty", "29": "Nice", "30": "Naughty" }, "May": { "1": "Nice", "2": "Naughty", "3": "Nice", "4": "Naughty", "5": "Nice", "6": "Naughty", "7": "Nice", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Nice", "12": "Naughty", "13": "Nice", "14": "Naughty", "15": "Nice", "16": "Naughty", "17": "Nice", "18": "Naughty", "19": "Nice", "20": "Naughty", "21": "Nice", "22": "Naughty", "23": "Nice", "24": "Naughty", "25": "Nice", "26": "Naughty", "27": "Nice", "28": "Naughty", "29": "Nice", "30": "Naughty", "31": "Nice" }, "June": { "1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Nice", "5": "Naughty", "6": "Nice", "7": "Naughty", "8": "Nice", "9": "Naughty", "10": "Nice", "11": "Naughty", "12": "Nice", "13": "Naughty", "14": "Nice", "15": "Naughty", "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Naughty", "20": "Nice", "21": "Naughty", "22": "Nice", "23": "Naughty", "24": "Nice", "25": "Naughty", "26": "Nice", "27": "Naughty", "28": "Nice", "29": "Naughty", "30": "Nice" }, "July": { "1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Nice", "5": "Naughty", "6": "Nice", "7": "Naughty", "8": "Nice", "9": "Naughty", "10": "Nice", "11": "Naughty", "12": "Nice", "13": "Naughty", "14": "Nice", "15": "Naughty", "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Naughty", "20": "Nice", "21": "Naughty", "22": "Nice", "23": "Naughty", "24": "Nice", "25": "Naughty", "26": "Nice", "27": "Naughty", "28": "Nice", "29": "Naughty", "30": "Nice", "31": "Naughty" }, "August": { "1": "Nice", "2": "Naughty", "3": "Nice", "4": "Naughty", "5": "Nice", "6": "Naughty", "7": "Nice", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Nice", "12": "Naughty", "13": "Nice", "14": "Naughty", "15": "Nice", "16": "Naughty", "17": "Nice", "18": "Naughty", "19": "Nice", "20": "Naughty", "21": "Nice", "22": "Naughty", "23": "Nice", "24": "Naughty", "25": "Nice", "26": "Naughty", "27": "Nice", "28": "Naughty", "29": "Nice", "30": "Naughty", "31": "Nice" }, "September": { "1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Nice", "5": "Naughty", "6": "Nice", "7": "Naughty", "8": "Nice", "9": "Naughty", "10": "Nice", "11": "Naughty", "12": "Nice", "13": "Naughty", "14": "Nice", "15": "Naughty", "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Naughty", "20": "Nice", "21": "Naughty", "22": "Nice", "23": "Naughty", "24": "Nice", "25": "Naughty", "26": "Nice", "27": "Naughty", "28": "Nice", "29": "Naughty", "30": "Nice" }, "October": { "1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Nice", "5": "Naughty", "6": "Nice", "7": "Naughty", "8": "Nice", "9": "Naughty", "10": "Nice", "11": "Naughty", "12": "Nice", "13": "Naughty", "14": "Nice", "15": "Naughty", "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Naughty", "20": "Nice", "21": "Naughty", "22": "Nice", "23": "Naughty", "24": "Nice", "25": "Naughty", "26": "Nice", "27": "Naughty", "28": "Nice", "29": "Naughty", "30": "Nice", "31": "Naughty" }, "November": { "1": "Nice", "2": "Naughty", "3": "Nice", "4": "Naughty", "5": "Nice", "6": "Naughty", "7": "Nice", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Nice", "12": "Naughty", "13": "Nice", "14": "Naughty", "15": "Nice", "16": "Naughty", "17": "Nice", "18": "Naughty", "19": "Nice", "20": "Naughty", "21": "Nice", "22": "Naughty", "23": "Nice", "24": "Naughty", "25": "Nice", "26": "Naughty", "27": "Nice", "28": "Naughty", "29": "Nice", "30": "Naughty" }, "December": { "1": "Nice", "2": "Naughty", "3": "Nice", "4": "Naughty", "5": "Nice", "6": "Naughty", "7": "Nice", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Nice", "12": "Naughty", "13": "Nice", "14": "Naughty", "15": "Nice", "16": "Naughty", "17": "Nice", "18": "Naughty", "19": "Nice", "20": "Naughty", "21": "Nice", "22": "Naughty", "23": "Nice", "24": "Naughty", "25": "Nice", "26": "Naughty", "27": "Nice", "28": "Naughty", "29": "Nice", "30": "Naughty", "31": "Nice" } }))