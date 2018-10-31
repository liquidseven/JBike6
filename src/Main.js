import React from 'react';
import Bike from './Bike';
// import ForwardSpeeds from './ForwardSpeeds';
import Button from '@material-ui/core/Button';

class Main extends React.Component {

    constructor() {
        super(); 
            this.state = {
                headAngle : 0.0,
                angleMeasurement: 0,
                wheelBase : 0.0,
                trail : 0.0
            }
        this.getHeadAngle = this.getHeadAngle.bind(this);
        this.getAngleMeasurement = this.getAngleMeasurement.bind(this);
        this.getWheelBase = this.getWheelBase.bind(this);
        this.getTrail = this.getTrail.bind(this);

        this.check = this.check.bind(this);

        this.bikeCallbacks = [this.getHeadAngle, this.getAngleMeasurement, this.getWheelBase, this.getTrail]
    }

    getHeadAngle(data) {
        this.setState({headAngle : data});
    }

    getAngleMeasurement(data) {
        this.setState({angleMeasurement : data});
    }

    getWheelBase(data) {
        this.setState({wheelBase : data});
    }

    getTrail(data) {
        this.setState({trail : data});
    }

    check() {
        alert(this.state.headAngle + '\n' + this.state.wheelBase + '\n' + this.state.angleMeasurement + '\n' + this.state.trail);
    }

    render() {
        return (
        <div>
            <Bike action={this.bikeCallbacks}/>

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
            <Button variant="contained" color="primary" onClick={this.check}>Calculate</Button>
            <Button variant="outlined" color="primary">Save Bike</Button>
            <Button variant="outlined" color="primary">Clear Bike</Button> 
            </form>
        </div>
        )
    }
}

export default Main;