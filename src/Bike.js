import React from 'react'
import Menu from '@material-ui/core/Menu'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'

const initialState = {
        bikename : "",
        headAngle : 0.0,
        angleMeasurement: "0",
        wheelBase : 0.0,
        trail : 0.0
}
class Bike extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
        this.handleHeadAngle = this.handleHeadAngle.bind(this);
        this.handleAngleMeasurement = this.handleAngleMeasurement.bind(this);
        this.handleWheelBase = this.handleWheelBase.bind(this);
        this.handleTrail = this.handleTrail.bind(this);
    }

    handleHeadAngle(e) {
    this.props.action[0](e.target.value);
    }

    handleAngleMeasurement(e) {
        this.setState({angleMeasurement : e.target.value})
        this.props.action[1](e.target.value);
    }

    handleWheelBase(e) {
        
        this.props.action[2](e.target.value);
    }

    handleTrail(e) {
        this.props.action[3](e.target.value);
    }

    render() {
        return (<div>
        <form name="bikes">
        <Menu />      
            <TextField 
                id="name"
                label="Bike Name"/>
            <TextField 
            id="headAngle"
            label="Head angle"
            defaultValue = "0.0"
            name={'headAngle'}
            margin="normal"
            onChange={this.handleHeadAngle}
            />
            <FormLabel>Angle Measurement</FormLabel>
            <RadioGroup
            value = {this.state.angleMeasurement}
            onChange={this.handleAngleMeasurement}>
                <FormControlLabel value="0" control={<Radio />} label="Degrees" />
                <FormControlLabel value="1" control={<Radio />} label="Radians" />
            </RadioGroup>
            <TextField
                id="wheelBase"
                label="Wheel base"
                defaultValue = "0.0"
                name='wheelBase'
                margin="normal"
                onChange={this.handleWheelBase}
            />
            <TextField
                id="trail"
                label="Trail"
                defaultvalue = "0.0"
                margin = "normal"
                onChange={this.handleTrail}
            />
            <TextField
                id="bikeComment"
                label="Bike Comment"
                multiline
                rows="6"
                defaultValue=""
                margin="normal"
                variant="outlined"
        />
        </form>
        </div>)
    }
}

export default Bike;