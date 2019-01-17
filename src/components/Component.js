import React from 'react'
import FormLabel from '@material-ui/core/FormLabel'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            xyuv : "XY",
            X_U : "U",
            Y_V : "V",
            rearWheel : {
                diameter : 0.0,
                mass : 0.0,
                lxxlyy : 0.0,
                lzz : 0.0,
                alpha : 0.0
            },
            frontWheel : {
                diameter : 0.0,
                mass : 0.0,
                lxxlyy: 0.0,
                lzz : 0.0,
                alpha : 0.0
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

        this.handleRearWheelDiameter = this.handleRearWheelDiameter.bind(this);
        this.handleRearWheelMass = this.handleRearWheelMass.bind(this);
        this.handleRearWheelLxxLyy = this.handleRearWheelLxxLyy.bind(this)
        this.handleRearWheelLzz = this.handleRearWheelLzz.bind(this)

        this.handleFrontWheelDiameter = this.handleFrontWheelDiameter.bind(this)
        this.handleFrontWheelMass = this.handleFrontWheelMass.bind(this)
        this.handleFrontWheelLxxLyy = this.handleFrontWheelLxxLyy.bind(this)
        this.handleFrontWheelLzz = this.handleFrontWheelLzz.bind(this)

        this.handleRearFrameX = this.handleRearFrameX.bind(this)
        this.handleRearFrameY = this.handleRearFrameY.bind(this)
        this.handleRearFrameMass = this.handleRearFrameMass.bind(this)
        this.handleRearFrameL11 = this.handleRearFrameL11.bind(this)
        this.handleRearFrameL22 = this.handleRearFrameL22.bind(this)
        this.handleRearFrameLzz = this.handleRearFrameLzz.bind(this)
        this.handleRearFrameAlpha = this.handleRearFrameAlpha.bind(this)

        this.handleRiderX = this.handleRiderX.bind(this)
        this.handleRiderY = this.handleRiderY.bind(this)
        this.handleRiderMass = this.handleRiderMass.bind(this)
        this.handleRiderL11 = this.handleRiderL11.bind(this)
        this.handleRiderL22 = this.handleRiderL22.bind(this)
        this.handleRiderLzz = this.handleRiderLzz.bind(this)
        this.handleRiderAlpha = this.handleRiderAlpha.bind(this)

        this.handleRearRackX = this.handleRearRackX.bind(this)
        this.handleRearRackY = this.handleRearRackY.bind(this)
        this.handleRearRackMass = this.handleRearRackMass.bind(this)
        this.handleRearRackL11 = this.handleRearRackL11.bind(this)
        this.handleRearRackL22 = this.handleRearRackL22.bind(this)
        this.handleRearRackLzz = this.handleRearRackLzz.bind(this)
        this.handleRearRackAlpha = this.handleRearRackAlpha.bind(this)

        this.handleFrontForkX = this.handleFrontForkX.bind(this)
        this.handleFrontForkY = this.handleFrontForkY.bind(this)
        this.handleFrontForkMass = this.handleFrontForkMass.bind(this)
        this.handleFrontForkL11 = this.handleFrontForkL11.bind(this)
        this.handleFrontForkL22 = this.handleFrontForkL22.bind(this)
        this.handleFrontForkLzz = this.handleFrontForkLzz.bind(this)
        this.handleFrontForkAlpha = this.handleFrontForkAlpha.bind(this)

        this.handleFrontBasketkX = this.handleFrontBasketX.bind(this)
        this.handleFrontBasketY = this.handleFrontBasketY.bind(this)
        this.handleFrontBasketMass = this.handleFrontBasketMass.bind(this)
        this.handleFrontBasketL11 = this.handleFrontBasketL11.bind(this)
        this.handleFrontBasketL22 = this.handleFrontBasketL22.bind(this)
        this.handleFrontBasketLzz = this.handleFrontBasketLzz.bind(this)
        this.handleFrontBasketAlpha = this.handleFrontBasketAlpha.bind(this)

        this.handleXyUv = this.handleXyUv.bind(this)
    }

    handleRearWheelDiameter(e) {
        this.setState({ rearWheel : {diameter : e.target.value}})
        this.props.rearWheelAction[0](e.target.value);

    }

    handleRearWheelMass(e) {
        this.setState({ rearWheel : {mass : e.target.value}})
        this.props.rearWheelAction[1](e.target.value);
    }

    handleRearWheelLxxLyy(e) {
        this.setState({ rearWheel : {lxxlyy : e.target.value}})
        this.props.rearWheelAction[2](e.target.value);
    }

    handleRearWheelLzz(e) {
        this.setState({ rearWheel : {lzz : e.target.value}})
        this.props.rearWheelAction[3](e.target.value);
    }

    handleFrontWheelDiameter(e) {
        let newFrontWheel = this.state.frontWheel
        newFrontWheel.diameter = e.target.value
        this.setState({ frontWheel : newFrontWheel})
        this.props.frontWheelAction[0](e.target.value)
    }

    handleFrontWheelMass(e) {
        let newFrontWheel = this.state.frontWheel
        newFrontWheel.mass = e.target.value
        this.setState({ frontWheel : newFrontWheel})
        this.props.frontWheelAction[1](e.target.value)
    }

    handleFrontWheelLxxLyy(e) {
        let newFrontWheel = this.state.frontWheel
        newFrontWheel.lxxlyy = e.target.value
        this.setState({ frontWheel : newFrontWheel})
        this.props.frontWheelAction[2](e.target.value)
    }

    handleFrontWheelLzz(e) {
        let newFrontWheel = this.state.frontWheel
        newFrontWheel.lzz = e.target.value
        this.setState({ frontWheel : newFrontWheel})
        this.props.frontWheelAction[3](e.target.value)
    }

    handleRearFrameX(e) {
        this.props.rearFrameAction[0](e.target.value)
    }

    handleRearFrameY(e) {
        this.props.rearFrameAction[1](e.target.value)
    }

    handleRearFrameMass(e) {
        this.props.rearFrameAction[2](e.target.value)
    }

    handleRearFrameL11(e) {
        this.props.rearFrameAction[3](e.target.value)
    }

    handleRearFrameL22(e) {
        this.props.rearFrameAction[4](e.target.value)
    }

    handleRearFrameLzz(e) {
        this.props.rearFrameAction[5](e.target.value)
    }

    handleRearFrameAlpha(e) {
        this.props.rearFrameAction[6](e.target.value)
    }

    handleRiderX(e) {
        this.props.riderAction[0](e.target.value)
    }

    handleRiderY(e) {
        this.props.riderAction[1](e.target.value)
    }

    handleRiderMass(e) {
        this.props.riderAction[2](e.target.value)
    }

    handleRiderL11(e) {
        this.props.riderAction[3](e.target.value)
    }

    handleRiderL22(e) {
        this.props.riderAction[4](e.target.value)
    }

    handleRiderLzz(e) {
        this.props.riderAction[5](e.target.value)
    }

    handleRiderAlpha(e) {
        this.props.riderAction[6](e.target.value)
    }

    handleRearRackX(e) {
        this.props.rearRackAction[0](e.target.value)
    }

    handleRearRackY(e) {
        this.props.rearRackAction[1](e.target.value)
    }

    handleRearRackMass(e) {
        this.props.rearRackAction[2](e.target.value)
    }

    handleRearRackL11(e) {
        this.props.rearRackAction[3](e.target.value)
    }

    handleRearRackL22(e) {
        this.props.rearRackAction[4](e.target.value)
    }

    handleRearRackLzz(e) {
        this.props.rearRackAction[5](e.target.value)
    }

    handleRearRackAlpha(e) {
        this.props.rearRackAction[6](e.target.value)
    }

    handleFrontForkX(e) {
        this.props.frontForkAction[0](e.target.value)
    }

    handleFrontForkY(e) {
        this.props.frontForkAction[1](e.target.value)
    }

    handleFrontForkMass(e) {
        this.props.frontForkAction[2](e.target.value)
    }

    handleFrontForkL11(e) {
        this.props.frontForkAction[3](e.target.value)
    }

    handleFrontForkL22(e) {
        this.props.frontForkAction[4](e.target.value)
    }

    handleFrontForkLzz(e) {
        this.props.frontForkAction[5](e.target.value)
    }

    handleFrontForkAlpha(e) {
        this.props.frontForkAction[6](e.target.value)
    }

    handleFrontBasketX(e) {
        this.props.frontBasketAction[0](e.target.value)
    }

    handleFrontBasketY(e) {
        this.props.frontBasketAction[1](e.target.value)
    }

    handleFrontBasketMass(e) {
        this.props.frontBasketAction[2](e.target.value)
    }

    handleFrontBasketL11(e) {
        this.props.frontBasketAction[3](e.target.value)
    }

    handleFrontBasketL22(e) {
        this.props.frontBasketAction[4](e.target.value)
    }

    handleFrontBasketLzz(e) {
        this.props.frontBasketAction[5](e.target.value)
    }

    handleFrontBasketAlpha(e) {
        this.props.frontBasketAction[6](e.target.value)
    }

    handleXyUv(e) {
        e.preventDefault();
        if (this.state.xyuv === "XY") {
            this.setState({xyuv : "UV", X_U: "X", Y_V : "Y"})
        }
        else
            this.setState({xyuv : "XY", X_U : "U", Y_V : "V"})
        this.props.xyuvAction();
    }

    render() {
        return (
        <div>
            <div id="wheels">
            <h2>Components</h2>
                    <FormLabel>Rear Wheel</FormLabel>
                    <FormLabel>Front Wheel</FormLabel>
                    <FormLabel>Diameter</FormLabel>
                    <TextField id="rearWheelDiameter" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleRearWheelDiameter}/>
                    <TextField id="frontWheelDiameter" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleFrontWheelDiameter}/>
                    <FormLabel>Mass</FormLabel>
                    <TextField id="rearWheelMass" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleRearWheelMass}/>
                    <TextField id="frontWheelMass" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleFrontWheelMass}/>
                    <FormLabel>Moment of Inertia</FormLabel>
                    <FormLabel>lxx {'&'} lyy</FormLabel>
                    <TextField id="rearLxxLyy" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleRearWheelLxxLyy}/>
                    <TextField id="frontLxxLyy" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleFrontWheelLxxLyy}/>
                    <FormLabel>lzz</FormLabel>
                    <TextField id="rearLzz" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleRearWheelLzz}/>
                    <TextField id="frontLzz" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleFrontWheelLzz}/>
            </div>
                    <FormLabel>Rear Frame</FormLabel>
                    <FormLabel>Rider</FormLabel>
                    <FormLabel>Rear Rack</FormLabel>

                    <FormLabel>X</FormLabel>
                    <TextField id="frameX" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleRearFrameX}></TextField>
                    <TextField id="riderX" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleRiderX}></TextField>
                    <TextField id="rackX" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleRearRackX}></TextField>

                    <FormLabel>Y</FormLabel>
                    <TextField id="frameY" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleRearFrameY}></TextField>
                    <TextField id="riderY" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleRiderY}></TextField>
                    <TextField id="rackY" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleRearRackY}></TextField>
                
                
                    <FormLabel>Mass</FormLabel>
                    <TextField id="frameMass" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleRearFrameMass}></TextField>
                    <TextField id="riderMass" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleRiderMass}></TextField>
                    <TextField id="rackMass" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleRearRackMass}></TextField>
                
                
                    <FormLabel>l11</FormLabel>
                    <TextField id="framel11" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleRearFrameL11}></TextField>
                    <TextField id="riderl11" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleRiderL11}></TextField>
                    <TextField id="rackl11" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleRearRackL11}></TextField>
                
                
                    <FormLabel>l22</FormLabel>
                    <TextField id="framel22" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleRearFrameL22}></TextField>
                    <TextField id="riderl22" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleRiderL22}></TextField>
                    <TextField id="rackl22" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleRearRackL22}></TextField>
                
                
                    <FormLabel>lzz</FormLabel>
                    <TextField id="framelzz" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleRearFrameLzz}></TextField>
                    <TextField id="riderlzz" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleRiderLzz}></TextField>
                    <TextField id="racklzz" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleRearRackLzz}></TextField>
                
                
                    <FormLabel>Principal Axis Angle (alpha)</FormLabel>
                    <TextField id="frameAlpha" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleRearFrameAlpha}></TextField>
                    <TextField id="riderAlpha" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleRiderAlpha}></TextField>
                    <TextField id="rackAlpha" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleRearRackAlpha}></TextField>
                
                    <Button variant="contained" size="small" color="primary" onClick={this.handleXyUv}>{this.state.xyuv}</Button>
                    <FormLabel>Front Fork</FormLabel>
                    <FormLabel>Front Basket</FormLabel>
                
                
                    <FormLabel>{this.state.X_U}</FormLabel>
                    <TextField id="uFrontFork" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleFrontForkX}></TextField>
                    <TextField id="uFrontBasket" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleFrontBasketkX}></TextField>
                
                
                    <FormLabel>{this.state.Y_V}</FormLabel>
                    <TextField id="vFrontFork" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleFrontForkY}></TextField>
                    <TextField id="vFrontBasket" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleFrontBasketkY}></TextField>
                
                
                    <FormLabel>Mass</FormLabel>
                    <TextField id="massFrontFork" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleFrontForkMass}></TextField>
                    <TextField id="massFrontBasket" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleFrontBasketkMass}></TextField>
                
                
                    <FormLabel>l11</FormLabel>
                    <TextField id="frontForkl11" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleFrontForkL11}></TextField>
                    <TextField id="frontBasketl11" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleFrontBasketkL11}></TextField>
                
                
                    <FormLabel>l22</FormLabel>
                    <TextField id="frontForkl22" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleFrontForkL22}></TextField>
                    <TextField id="frontBasketl22" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleFrontBasketL22}></TextField>
                
                
                    <FormLabel>lzz</FormLabel>
                    <TextField id="frontForklzz" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleFrontForkLzz}></TextField>
                    <TextField id="frontBasketlzz" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleFrontBasketLzz}></TextField>
                
                
                    <FormLabel>alpha</FormLabel>
                    <TextField id="frontForkAlpha" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleFrontForkAlpha}></TextField>
                    <TextField id="frontBasketAlpha" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.handleFrontBasketAlpha}></TextField>
        </div>
        )
    }
}

export default Component