class Vector {

    constructor(...numbers) {
            let v = [];

            if (numbers.length > 0) {
                for (let n of numbers) {
                    v.push(n);
                }
            }
            this.data = v;
    }
    push(number) {
        this.data.push(number);
    }

    getDimens() {
        return this.data.length;
    }

    add(b) {
        if (this.data.length !== b.data.length) {
            throw new Error("Invalid Dimension of " + b)
        }
        let vec = new Vector();
        vec.data = this.data.map((value,index) => value + b.data[index]);
        return vec;
    }

    scalerProduct(c){
        this.data = this.data.map(w => w * c);
        return this;
    }
}

export default Vector;

