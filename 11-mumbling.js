// WPU Coding Challenge 2024 by Peter Shaan
// 11/365
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript


function accum(s) {
    const hasil = []
    for (let i = 0; i < s.length; i++) {
        const hurufBesar = s[i].toUpperCase()
        const hurufKecil = s[i].toLowerCase().repeat(i)
        const gabung = hurufBesar + hurufKecil
        hasil.push(gabung)
    }

    return hasil.join('-')
}

console.log(accum("EvidjUnokmM"))