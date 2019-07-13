module.exports = function() {

    this.roots = function(c) {
    if (c._size[0] > 1 && c.size[1] > 1) {
        throw new Error('Not a Vector')
    }

    if (!isFinite(c._data))
        throw new Error("Not a finite Number")
    
    let n = c._size[1]
    }
}