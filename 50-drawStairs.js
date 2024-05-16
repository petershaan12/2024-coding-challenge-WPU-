function drawStairs(n) {
    let hasil = []
    for (let i = 0; i < n; i++) {
        hasil.push(' '.repeat(i) + 'I'); 
    }
    return hasil.join("\n");
}

console.log(drawStairs(3));
console.log(drawStairs(5));

