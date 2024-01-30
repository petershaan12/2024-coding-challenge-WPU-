// WPU Coding Challenge 2024 by Peter Shaan
// 6/365
// https://www.codewars.com/kata/5556282156230d0e5e000089

function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U')
}

console.log(DNAtoRNA("TTTT"))