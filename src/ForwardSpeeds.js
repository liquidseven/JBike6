import React from 'react';

class ForwardSpeeds extends React.Component {
    constructor() {
        super();
        this.calculate = this.calculate.bind(this);
    }

    calculate(e) {
        e.preventDefault();
        alert("check");
    }
    render() {

        return (
        <div>
        <form name ="calculateSpeed" onSubmit={this.handleSubmit}>
        <h2>Forward Speeds</h2>
        <br />
        <label>Min</label>
        <input type="number" name="min"></input>
        <label>m/s</label>
        <button name="calculate" onClick={this.calculate}>Calculate</button>
        <br />
        <label>Max</label>
        <input type="number" name="max"></input>
        <label>m/s</label>
        <button name="saveBike">Save Bike</button>
        <br />
        <label>Steps</label>
        <input type="number" name="steps"></input>
        <button name = "clearBike">Clear Bike</button> 
        </form>
        </div>)
    }
}

export default ForwardSpeeds;