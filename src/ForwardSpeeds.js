import React from 'react';
import Button from '@material-ui/core/Button';


class ForwardSpeeds extends React.Component {
    constructor() {
        super();
        this.calculate = this.calculate.bind(this);
        this.saveBike = this.saveBike.bind(this);
        this.clearBike = this.clearBike.bind(this);
    }

    calculate(e) {
        e.preventDefault();
        alert("check");
    }

    saveBike(e) {
        e.preventDefault();
    }

    clearBike(e) {
        e.preventDefault();
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
        
        <br />
        <label>Max</label>
        <input type="number" name="max"></input>
        <label>m/s</label>
        
        <br />
        <label>Steps</label>
        <input type="number" name="steps"></input>
        <Button variant="contained" color="primary" onClick={this.props.action}>Calculate</Button>
        <Button variant="outlined" color="primary">Save Bike</Button>
        <Button variant="outlined" color="primary">Clear Bike</Button> 
        </form>
        </div>)
    }
}

export default ForwardSpeeds;