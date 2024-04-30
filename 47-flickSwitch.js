function flickSwitch(arr) {
    let result = []
    let cek = true

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 'flick') {
            cek = !cek; // Toggle the boolean value
        }
        result.push(cek);
    }
    return result;
}

console.log(flickSwitch(["codewars", "flick", "code", "wars"]))
console.log(flickSwitch(["flick", "chocolate", "adventure", "sunshine"]))
console.log(flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]))