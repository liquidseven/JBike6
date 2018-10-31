import React from 'react'
import FormLabel from '@material-ui/core/FormLabel'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rearWheel : {
                diameter : 0.0,
                mass : 0.0,
                momentOfInertiaX : 0.0,
                momentOfInertiaY : 0.0,
                momentOfInertiaZ : 0.0,
                alphaInertia : 0.0
            },
            frontWheel : {
                diameter : 0.0,
                mass : 0.0,
                momentOfInertiaX : 0.0,
                momentOfInertiaY : 0.0,
                momentOfInertiaZ : 0.0,
                alphaInertia : 0.0
            },
            frame : {
                centerOfMassX : 0.0,
                centerOfMassY : 0.0,
                mass : 0.0,
                iFrameX : 0.0,
                iFrameY : 0.0,
                iFrameZ : 0.0,
                alphaIFrame : 0.0
            },
            rider : {
                centerOfMassX : 0.0,
                centerOfMassY : 0.0,
                mass : 0.0,
                iRiderX : 0.0,
                iRiderY : 0.0,
                iRiderZ : 0.0,
                alphaIRider : 0.0
            },
            rack : {
                centerOfMassX : 0.0,
                centerOfMassY : 0.0,
                mass : 0.0,
                iRackX : 0.0,
                iRackY : 0.0,
                iRackZ : 0.0,
                alphaIRack : 0.0
            },
            fork : {
                mass: 0.0,
                uCenterMass : 0.0,
                vCenterMass : 0.0,
                iForkX : 0.0,
                iForkY : 0.0,
                iForkZ : 0.0,
                alphaIFork : 0.0
            },
            basket : {
                mass: 0.0,
                uCenterMass : 0.0,
                vCenterMass : 0.0,
                iBasketX : 0.0,
                iBasketY : 0.0,
                iBasketZ : 0.0,
                alphaIBasket : 0.0
            }
        }
    }

    render() {
        return (
        <div>
            <h2>Components</h2>
            
            <table className="center">
                <tr>
                    <td></td>
                    <td></td>
                    <th><FormLabel>Rear Wheel</FormLabel></th>
                    <th><FormLabel>Front Wheel</FormLabel></th>
                </tr>
                <tr>
                    <td></td>
                    <th><FormLabel>Diameter</FormLabel></th>
                    <td><TextField id="rearWheelDiameter" defaultValue="0.0" margin="normal" variant="outlined"/></td>
                    <td><TextField id="frontWheelDiameter" defaultValue="0.0" margin="normal" variant="outlined"/></td>
                </tr>
                <tr>
                    <td></td>
                    <th><FormLabel>Mass</FormLabel></th>
                    <td><TextField id="rearWheelMass" defaultValue="0.0" margin="normal" variant="outlined"/></td>
                    <td><TextField id="frontWheelMass" defaultValue="0.0" margin="normal" variant="outlined"/></td>
                </tr>
                <tr>
                    <th><FormLabel>Moment of Inertia</FormLabel></th>
                    <th><FormLabel>lxx & lyy</FormLabel></th>
                    <td><TextField id="rearLxxLyy" defaultValue="0.0" margin="normal" variant="outlined"/></td>
                    <td><TextField id="frontLxxLyy" defaultValue="0.0" margin="normal" variant="outlined"/></td>
                </tr>
                <tr>
                    <td></td>
                    <th><FormLabel>lzz</FormLabel></th>
                    <td><TextField id="rearLzz" defaultValue="0.0" margin="normal" variant="outlined"/></td>
                    <td><TextField id="frontLzz" defaultValue="0.0" margin="normal" variant="outlined"/></td>
                </tr>
            </table>

            <table className="center">
                <tr>
                    <th></th>
                    <th><FormLabel>Rear Frame</FormLabel></th>
                    <th><FormLabel>Rider</FormLabel></th>
                    <th><FormLabel>Rear Rack</FormLabel></th>
                </tr>
                <tr>
                    <th><FormLabel>X</FormLabel></th>
                    <td><TextField id="frameX" defaultValue="0.0" margin="normal" variant="outlined"></TextField></td>
                    <td><TextField id="riderX" defaultValue="0.0" margin="normal" variant="outlined"></TextField></td>
                    <td><TextField id="rackX" defaultValue="0.0" margin="normal" variant="outlined"></TextField></td>
                </tr>
                <tr>
                    <th><FormLabel>Y</FormLabel></th>
                    <td><TextField id="frameY" defaultValue="0.0" margin="normal" variant="outlined"></TextField></td>
                    <td><TextField id="riderY" defaultValue="0.0" margin="normal" variant="outlined"></TextField></td>
                    <td><TextField id="rackY" defaultValue="0.0" margin="normal" variant="outlined"></TextField></td>
                </tr>
                <tr>
                    <th><FormLabel>Mass</FormLabel></th>
                    <td><TextField id="frameMass" defaultValue="0.0" margin="normal" variant="outlined"></TextField></td>
                    <td><TextField id="riderMass" defaultValue="0.0" margin="normal" variant="outlined"></TextField></td>
                    <td><TextField id="rackMass" defaultValue="0.0" margin="normal" variant="outlined"></TextField></td>
                </tr>
                <tr>
                    <th><FormLabel>l11</FormLabel></th>
                    <td><TextField id="framel11" defaultValue="0.0" margin="normal" variant="outlined"></TextField></td>
                    <td><TextField id="riderl11" defaultValue="0.0" margin="normal" variant="outlined"></TextField></td>
                    <td><TextField id="rackl11" defaultValue="0.0" margin="normal" variant="outlined"></TextField></td>
                </tr>
                <tr>
                    <th><FormLabel>l22</FormLabel></th>
                    <td><TextField id="framel22" defaultValue="0.0" margin="normal" variant="outlined"></TextField></td>
                    <td><TextField id="riderl22" defaultValue="0.0" margin="normal" variant="outlined"></TextField></td>
                    <td><TextField id="rackl22" defaultValue="0.0" margin="normal" variant="outlined"></TextField></td>
                </tr>
                <tr>
                    <th><FormLabel>lzz</FormLabel></th>
                    <td><TextField id="framelzz" defaultValue="0.0" margin="normal" variant="outlined"></TextField></td>
                    <td><TextField id="riderlzz" defaultValue="0.0" margin="normal" variant="outlined"></TextField></td>
                    <td><TextField id="racklzz" defaultValue="0.0" margin="normal" variant="outlined"></TextField></td>
                </tr>
                <tr>
                    <th><FormLabel>Principal Axis Angle (alpha)</FormLabel></th>
                    <td><TextField id="frameAlpha" defaultValue="0.0" margin="normal" variant="outlined"></TextField></td>
                    <td><TextField id="riderAlpha" defaultValue="0.0" margin="normal" variant="outlined"></TextField></td>
                    <td><TextField id="rackAlpha" defaultValue="0.0" margin="normal" variant="outlined"></TextField></td>
                </tr>
            </table>

            <table className="center">
                <tr>
                    <td><Button variant="contained" size="small" color="primary">XY</Button></td>
                    <th><FormLabel>Front Fork</FormLabel></th>
                    <th><FormLabel>Front Basket</FormLabel></th>
                </tr>
                <tr>
                    <th><FormLabel>U</FormLabel></th>
                    <td><TextField id="uFrontFork" defaultValue="0.0" margin="normal" variant="outlined"></TextField></td>
                    <td><TextField id="uFrontBasket" defaultValue="0.0" margin="normal" variant="outlined"></TextField></td>
                </tr>
                <tr>
                    <th><FormLabel>V</FormLabel></th>
                    <td><TextField id="vFrontFork" defaultValue="0.0" margin="normal" variant="outlined"></TextField></td>
                    <td><TextField id="vFrontBasket" defaultValue="0.0" margin="normal" variant="outlined"></TextField></td>
                </tr>
                <tr>
                    <th><FormLabel>Mass</FormLabel></th>
                    <td><TextField id="massFrontFork" defaultValue="0.0" margin="normal" variant="outlined"></TextField></td>
                    <td><TextField id="massFrontBasket" defaultValue="0.0" margin="normal" variant="outlined"></TextField></td>
                </tr>
                <tr>
                    <th><FormLabel>l11</FormLabel></th>
                    <td><TextField id="frontForkl11" defaultValue="0.0" margin="normal" variant="outlined"></TextField></td>
                    <td><TextField id="frontBasketl11" defaultValue="0.0" margin="normal" variant="outlined"></TextField></td>
                </tr>
                <tr>
                    <th><FormLabel>l22</FormLabel></th>
                    <td><TextField id="frontForkl22" defaultValue="0.0" margin="normal" variant="outlined"></TextField></td>
                    <td><TextField id="frontBasketl22" defaultValue="0.0" margin="normal" variant="outlined"></TextField></td>
                </tr>
                <tr>
                    <th><FormLabel>lzz</FormLabel></th>
                    <td><TextField id="frontForklzz" defaultValue="0.0" margin="normal" variant="outlined"></TextField></td>
                    <td><TextField id="frontBasketlzz" defaultValue="0.0" margin="normal" variant="outlined"></TextField></td>
                </tr>
                <tr>
                    <th><FormLabel>alpha</FormLabel></th>
                    <td><TextField id="frontForkAlpha" defaultValue="0.0" margin="normal" variant="outlined"></TextField></td>
                    <td><TextField id="frontBasketAlpha" defaultValue="0.0" margin="normal" variant="outlined"></TextField></td>
                </tr>
            </table>
        </div>
        )
    }
}

export default Component