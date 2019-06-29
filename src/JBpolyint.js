"use strict"

const math = require('mathjs')



function roots(c) {
    if (c._size[0] > 1 && c.size[1] > 1) {
        throw new Error('Not a Vector')
    }

    if (!isFinite(c._data))
        throw new Error("Not a finite Number")
    
    let n = c._size[1]



    console.log(c)
    
}

let p = math.matrix([[29.6899]])
console.log(roots(p))


