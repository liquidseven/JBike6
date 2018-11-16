
class Matrix {

    constructor(...v) {
        let d = [];
        this.data = []
        if (v.length === 0) {
            this.data.push(d);                                // implement error check for valid Vector dimensions
        }
        else {
            for(let n = 0; n < v.length; n++) {
                d.push(v[n]);
            }
            this.data.push(d);
        }
    }

    getM() {
        //return this.data[0].getDimens();
        return this.data[0].length
    }

    getN() {
        return this.data.length;
    }



    multiply(v) {       // Ax
        if (this.data.length === 0) {
            throw new Error("Empty Matrix")
        }
        if (v.data.length !== this.data.length) {
            throw new Error("Invalid Vector dimensions")
        }
        this.data.map((vec, index) => vec.scalerProduct(v.data[index]));
        return this;
    }

    add(m) {
        if (this.data.length === 0)
            return m
        if (m.data.length === 0)
            return this
        if ((this.getM !== m.getM) || (m.getM !== this.getM))
            throw new Error("Matrix Dimensions must be the same")
        
        let newM = new Matrix()
        
        if (m.getM === 1) {
            let y = m.data[0][0]
            this.data.map((x) => x + y)
            newM.data = this.data
            return newM
        }
        else {
        let d = []
        this.data.forEach((element,i) => {
            let v = []
            element.forEach((e2, j) => {
                v.push(e2 + m.data[i][j])
            })
            d.push(v)
        })
        newM.data = d
        return newM
    }
    }
}

export default Matrix;