function well(x) {
    const good = x.filter(x => x === 'good').length
    return good === 0 ? 'Fail!' : good <= 2 ? 'Publish!' : 'I smell a series!'
}

console.log(well(['bad', 'bad', 'bad']))