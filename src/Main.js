import React from 'react';
import Bike from './Bike';
import Component from './Component'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Main.css'

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
            <h2>Forward Speeds</h2>
            <br />
            <table className="center">
                <tr>
                    <td><TextField id="minVel" label="Minimum Velocity (m/s)" defaultValue="0.0" margin="normal" variant="outlined"/></td>
                    <td><Button variant="contained" color="primary" onClick={this.check}>Calculate</Button></td>
                </tr>
                <tr>
                    <td><TextField id="maxVel" label="Maximum Velocity (m/s)" defaultValue="0.0" margin="normal" variant="outlined"/></td>
                    <td><Button variant="outlined" color="primary">Save Bike</Button></td>
                </tr>
                <tr>
                <td><TextField id="steps" label="Steps" defaultValue="0" margin="normal" variant="outlined"/></td>
                </tr>
            </table>
            <Component />
        </div>
        )
    }
}

export default Main;