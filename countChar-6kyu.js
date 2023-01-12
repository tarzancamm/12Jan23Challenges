// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.



const count = (str) => {
    let letterCount = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0,
        g: 0,
        h: 0,
        i: 0,
        j: 0,
        k: 0,
        l: 0,
        m: 0,
        n: 0,
        o: 0,
        p: 0,
        q: 0,
        r: 0,
        s: 0,
        t: 0,
        u: 0,
        v: 0,
        w: 0,
        x: 0,
        y: 0,
        z: 0
    }
    
    if (str === false){
        return {}
    }

    let strArr = [...str]
    let arr = []

    for (let i = 0; i < strArr.length; i++) {
        letterCount[strArr[i]] += 1
    }
    const keys = Object.keys(letterCount)
    keys.forEach((key) => {
        if (letterCount[key] > 0) {
            let arrEntry = []
            arrEntry.push(`${key}`)
            arrEntry.push(+`${letterCount[key]}`)
            arr.push(arrEntry)
        }
    })
    return Object.fromEntries(arr)
}


console.log(count('aba')) // {a: 2, b: 1}
console.log(count(''))