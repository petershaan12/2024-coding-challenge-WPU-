function changeMe(moneyIn) {
    return moneyIn == '50p' ? '20p 20p 10p' : (moneyIn == '20p' ? '10p 10p' : moneyIn == '£1' ? '20p '.repeat(5).trim() : moneyIn == '£2' ? '20p '.repeat(10).trim() : moneyIn == '£5' ? '20p '.repeat(25).trim() : moneyIn);
}

console.log(changeMe("£5"))
console.log(changeMe("£1"))
console.log(changeMe("£2"))
console.log(changeMe("50p"))