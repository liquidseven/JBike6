import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import './Component.css'
import './Bike.css'

class Bike extends React.Component {

    constructor(props) {
        super(props);
        this.state = { bikeName: "Schwinn Crown", angleMeasurement : 0}
        this.handleHeadAngle = this.handleHeadAngle.bind(this);
        this.handleAngleMeasurement = this.handleAngleMeasurement.bind(this);
        this.handleWheelBase = this.handleWheelBase.bind(this);
        this.handleTrail = this.handleTrail.bind(this);
    }

    handleHeadAngle(e) {
        this.props.action[0](e.target.value);
    }

    handleAngleMeasurement(e) {
        console.log(e.target.value)
        this.setState({angleMeasurement : e.target.value})
        this.props.action[1](e.target.value);
    }

    handleWheelBase(e) {
        this.props.action[2](e.target.value);
    }

    handleTrail(e) {
        this.props.action[3](e.target.value);
    }

    handleBikeName(e) {
        this.props.action[4](e.target.value)
    }

    render() {
        return (<div id="bike">
            <span id="drop">
            <FormControl>
            <InputLabel htmlFor="bikeName">Bike Name</InputLabel>
            <Select autoWidth={true} id="bikeName" value={this.state.bikeName}>
                <MenuItem value={this.state.bikeName}>{this.state.bikeName}</MenuItem>
           </Select>
             </FormControl>
             </span>
             <span id="flip"><Button variant="contained" color="primary">Flip Fork</Button></span>
            <span id="name"><TextField id="name" label="Bike Name" name='name' margin='normal' onChange={this.handleBikeName}/></span>
            <span id="headAngle"><TextField id="headAngle" label="Head angle" defaultValue = "0.0" name='headAngle' margin="normal" variant='outlined' onChange={this.handleHeadAngle}/></span>
            
                <span id="angle-measure">
                <FormControl>
            <FormLabel>Angle Measurement</FormLabel>
            <RadioGroup value={this.state.angleMeasurement} onChange={this.handleAngleMeasurement}>
                <FormControlLabel value='0' control={<Radio />} label="Degrees" />
                <FormControlLabel value='1' control={<Radio />} label="Radians" />
            </RadioGroup>
            </FormControl>
            </span>
            <span id="wheelBase"><TextField id="wheelBase" label="Wheel base" defaultValue = "0.0" name='wheelBase' margin="normal" variant='outlined' onChange={this.handleWheelBase}/></span>
            <span id="trail"><TextField id="trail" label="Trail" defaultValue = "0.0" margin = "normal" variant='outlined' onChange={this.handleTrail}/></span>
            <span id="comment"><TextField id="bikeComment" label="Bike Comment" multiline rows="6" defaultValue="No Comment" margin="normal" variant="outlined"/></span>
        </div>)
    }
}

export default Bike;