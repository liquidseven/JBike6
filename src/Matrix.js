import Vector from './Vector';

class Matrix {

    constructor(...v) {
        let d = [];
        if (v.length === 0) {
            this.data = d;                                // implement error check for valid Vector dimensions
        }
        else {
            for(let n = 0; n < v.length; n++) {
                d.push(v[n]);
            }
            this.data = d;
        }
    }

    getM() {
        return this.data[0].getDimens();
    }

    getN() {
        return this.data.length;
    }



    multiply(v) {       // Ax
        if (this.data.length == 0) {
            throw new Error("Empty Matrix")
        }
        if (v.data.length != this.data.length) {
            throw new Error("Invalid Vector dimensions")
        }
        this.data.map((vec, index) => vec.scalerProduct(v.data[index]));
        return this;
    }

    swap(v1,v2) { //indices
        let temp = v1;
    }
}

export default Matrix;