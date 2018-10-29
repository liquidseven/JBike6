import React from 'react'
import Menu from '@material-ui/core/Menu'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import TextField from '@material-ui/core/TextField'

class Bike extends React.Component {
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
            />
            <RadioGroup>
                <Radio />
                <Radio />
            </RadioGroup>
            <TextField
                id="wheelBase"
                label="Wheel base"
            />
            <TextField
                id="trail"
                label="Trail"
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