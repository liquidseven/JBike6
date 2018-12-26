import React from 'react'
import ReactDOM from 'react-dom'
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

class Bike extends React.Component {

    constructor(props) {
        super(props);
        this.state = { bikeName: "Schwinn Crown"}
        this.handleHeadAngle = this.handleHeadAngle.bind(this);
        this.handleAngleMeasurement = this.handleAngleMeasurement.bind(this);
        this.handleWheelBase = this.handleWheelBase.bind(this);
        this.handleTrail = this.handleTrail.bind(this);
    }

    handleHeadAngle(e) {
        this.props.action[0](e.target.value);
    }

    handleAngleMeasurement(e) {
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
        return (<div>
            <table>
            <tbody>
                <tr>
                    <td>
                        <FormControl>
                            <InputLabel htmlFor="bikeName">{this.state.bikeName}</InputLabel>
                                <Select autoWidth={true} id="bikeName" value={this.state.bikename}>
                                    <MenuItem value={this.state.bikeName}>{this.state.bikeName}</MenuItem>
                                </Select>
                        </FormControl>
                    </td>
                    <td><Button variant="contained" color="primary">Flip Fork</Button></td>
                </tr>
            <tr>
                <td><TextField id="name" label="Bike Name" name='name' margin='normal' onChange={this.handleBikeName}/></td>
                <td><TextField id="headAngle" label="Head angle" defaultValue = "0.0" name='headAngle' margin="normal" variant='outlined' onChange={this.handleHeadAngle}/></td>
            </tr>
            </tbody>
            </table>
            <table>
            <tbody>
                <tr><td><FormLabel>Angle Measurement</FormLabel></td></tr>
                <tr><td><RadioGroup
            value = {this.state.angleMeasurement}
            onChange={this.handleAngleMeasurement}>
                <FormControlLabel value="0" control={<Radio />} label="Degrees" />
                <FormControlLabel value="1" control={<Radio />} label="Radians" />
            </RadioGroup>
            </td></tr>
            </tbody>
            </table>
            <TextField id="wheelBase" label="Wheel base" defaultValue = "0.0" name='wheelBase' margin="normal" variant='outlined' onChange={this.handleWheelBase}/>
            <TextField id="trail" label="Trail" defaultValue = "0.0" margin = "normal" variant='outlined' onChange={this.handleTrail}/>
            <TextField id="bikeComment" label="Bike Comment" multiline rows="6" defaultValue="No Comment" margin="normal" variant="outlined"/>
        </div>)
    }
}

export default Bike;