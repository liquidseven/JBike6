import React from 'react';

class Bike extends React.Component {
    render() {
        return (<div>
        <form name="bikes">
            <select>
            <option value="1">Schwin</option>    
            <option value="2">Bike 2</option>
            <option value="3">Bike 3</option>
            </select>     
            <label>Name</label>    
            <input type="text" name="bikeName"></input>
            <label>Head angle</label>
            <input type="number" name="headAngle"></input>
            <select>
                <option value="degrees">degrees</option>
                <option value="radians">radians</option>
            </select>
            <label>Wheel Base</label>
            <input type="number" name="wheelBaseNumber"></input>
            <label>Trail</label>
            <input type="number" name="trail"></input>
            <textarea rows="10" columns="40">The original Jbike6 set of parameters.</textarea>
        </form>
        </div>)
    }
}

export default Bike;