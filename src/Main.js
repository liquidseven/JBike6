import React from 'react';
import Bike from './Bike';
import Component from './Component'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Matrix from './Matrix.js'
import './Main.css'

const math = require('mathjs')

class Main extends React.Component {

    constructor() {
        super(); 
            this.state = {

                bike : {
                    bikeName : "",
                    headAngle : 0.0,
                    angleMeasurement: 0,
                    wheelBase : 0.0,
                    trail : 0.0
                },
                
                velocity : {
                    minVel : 0,
                    maxVel : 0,
                    steps : 0
                },

                rearWheel : {
                    diameter : 0.0,
                    mass : 0.0,
                    lxxlyy : 0.0,
                    lzz : 0.0,
                    inertia : 0.0
                },

                frontWheel : {
                    diameter : 0.0,
                    mass : 0.0,
                    lxxlyy : 0.0,
                    lzz : 0.0,
                    inertia :0.0
                },

                rearFrame : {
                    x : 0.0,
                    y : 0.0,
                    mass : 0.0,
                    l11 : 0.0,
                    l22 : 0.0,
                    lzz : 0.0,
                    alpha : 0.0
                },

                rider : {
                    x : 0.0,
                    y : 0.0,
                    mass : 0.0,
                    l11 : 0.0,
                    l22 : 0.0,
                    lzz : 0.0,
                    alpha : 0.0
                },

                rearRack : {
                    x : 0.0,
                    y : 0.0,
                    mass : 0.0,
                    l11 : 0.0,
                    l22 : 0.0,
                    lzz : 0.0,
                    alpha : 0.0
                },

                frontFork : {
                    x : 0.0,
                    y : 0.0,
                    mass : 0.0,
                    l11 : 0.0,
                    l22 : 0.0,
                    lzz : 0.0,
                    alpha : 0.0
                },

                frontBasket : {
                    x : 0.0,
                    y : 0.0,
                    mass : 0.0,
                    l11 : 0.0,
                    l22 : 0.0,
                    lzz : 0.0,
                    alpha : 0.0
                },

                xy_uv : 0
            }

        let gravity = 9.80665;
        let startTime;
        let endTime;

        let u = 0
        let v = 0
        let forkX = 0
        let forkY = 0
        let basketX = 0
        let basketY = 0
        let sha = Math.sin(Math.PI/2-this.state.headAngle)
        let cha = Math.cos(Math.PI/2-this.state.headAngle)
        let forkU = 0
        let forkV = 0
        let basketU = 0
        let basketV = 0
        
        this.getBikeName = this.getBikeName.bind(this)
        this.getHeadAngle = this.getHeadAngle.bind(this);
        this.getAngleMeasurement = this.getAngleMeasurement.bind(this);
        this.getWheelBase = this.getWheelBase.bind(this);
        this.getTrail = this.getTrail.bind(this);

        this.getMinVel = this.getMinVel.bind(this)
        this.getMaxVel = this.getMaxVel.bind(this)
        this.getSteps = this.getSteps.bind(this)

        this.getRearWheelDiameter = this.getRearWheelDiameter.bind(this);
        this.getRearWheelMass = this.getRearWheelMass.bind(this);
        this.getRearWheelLxxLyy = this.getRearWheelLxxLyy.bind(this);
        this.getRearWheelLzz = this.getRearWheelLzz.bind(this);

        this.getFrontWheelDiameter = this.getFrontWheelDiameter.bind(this);
        this.getFrontWheelMass = this.getFrontWheelMass.bind(this);
        this.getFrontWheelLxxLyy = this.getFrontWheelLxxLyy.bind(this);
        this.getFrontWheelLzz = this.getFrontWheelLzz.bind(this);

        this.getRearFrameX = this.getRearFrameX.bind(this);
        this.getRearFrameY = this.getRearFrameY.bind(this);
        this.getRearFrameMass = this.getRearFrameMass.bind(this);
        this.getRearFrameL11 = this.getRearFrameL11.bind(this);
        this.getRearFrameL22 = this.getRearFrameL22.bind(this);
        this.getRearFrameLzz = this.getRearFrameLzz.bind(this);
        this.getRearFrameAlpha = this.getRearFrameAlpha.bind(this);

        this.getRiderX = this.getRiderX.bind(this);
        this.getRiderY = this.getRiderY.bind(this);
        this.getRiderMass = this.getRiderMass.bind(this);
        this.getRiderL11 = this.getRiderL11.bind(this);
        this.getRiderL22 = this.getRiderL22.bind(this);
        this.getRiderLzz = this.getRiderLzz.bind(this);
        this.getRiderAlpha = this.getRiderAlpha.bind(this);

        this.getRearRackX = this.getRearRackX.bind(this);
        this.getRearRackY = this.getRearRackY.bind(this);
        this.getRearRackMass = this.getRearRackMass.bind(this);
        this.getRearRackL11 = this.getRearRackL11.bind(this);
        this.getRearRackL22 = this.getRearRackL22.bind(this);
        this.getRearRackLzz = this.getRearRackLzz.bind(this);
        this.getRearRackAlpha = this.getRearRackAlpha.bind(this);

        this.getFrontForkX = this.getFrontForkX.bind(this);
        this.getFrontForkY = this.getFrontForkY.bind(this);
        this.getFrontForkMass = this.getFrontForkMass.bind(this);
        this.getFrontForkL11 = this.getFrontForkL11.bind(this);
        this.getFrontForkL22 = this.getFrontForkL22.bind(this);
        this.getFrontForkLzz = this.getFrontForkLzz.bind(this);
        this.getFrontForkAlpha = this.getFrontForkAlpha.bind(this);

        this.getFrontBasketX = this.getFrontBasketX.bind(this);
        this.getFrontBasketY = this.getFrontBasketY.bind(this);
        this.getFrontBasketMass = this.getFrontBasketMass.bind(this);
        this.getFrontBasketL11 = this.getFrontBasketL11.bind(this);
        this.getFrontBasketL22 = this.getFrontBasketL22.bind(this);
        this.getFrontBasketLzz = this.getFrontBasketLzz.bind(this);
        this.getFrontBasketAlpha = this.getFrontBasketAlpha.bind(this);

        this.check = this.check.bind(this);

        this.bikeCallbacks = [this.getHeadAngle, this.getAngleMeasurement, this.getWheelBase, this.getTrail, this.getBikeName]
        this.rearWheelCallbacks = [this.getRearWheelDiameter, this.getRearWheelMass, this.getRearWheelLxxLyy, this.getRearWheelLzz]
        this.frontWheelCallbacks = [this.getFrontWheelDiameter, this.getFrontWheelMass, this.getFrontWheelLxxLyy, this.getFrontWheelLzz]
        this.rearFrameCallbacks = [this.getRearFrameX, this.getRearFrameY, this.getRearFrameMass, this.getRearFrameL11, this.getRearFrameL22, this.getRearFrameLzz, this.getRearFrameAlpha]
        this.riderCallbacks = [this.getRiderX, this.getRiderY, this.getRiderMass, this.getRiderL11, this.getRiderL22, this.getRiderLzz, this.getRiderAlpha]
        this.rearRackCallbacks = [this.getRearRackX, this.getRearRackY, this.getRearRackMass, this.getRearRackL11, this.getRearRackL22, this.getRearRackLzz, this.getRearRackAlpha]
        this.frontForkCallbacks = [this.getFrontForkX, this.getFrontForkY, this.getFrontForkMass, this.getFrontForkL11, this.getFrontForkL22, this.getFrontForkLzz, this.getFrontForkAlpha]
        this.frontBasketCallbacks = [this.getFrontBasketX, this.getFrontBasketY, this.getFrontBasketMass, this.getFrontBasketL11, this.getFrontBasketL22, this.getFrontBasketLzz, this.getFrontBasketAlpha]
        
        this.setXyUv = this.setXyUv.bind(this)
        this.calculate = this.calculate.bind(this)
        this.addMassInertia = this.addMassInertia.bind(this)
        }

    getBikeName(data) {
        this.setState({bikeName : data})
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

    getMinVel(e) {
        let newVel = this.state.velocity;
        newVel.minVel = e.target.value
        this.setState({velocity : newVel})
    }

    getMaxVel(e) {
        let newVel = this.state.velocity;
        newVel.maxVel = e.target.value
        this.setState({velocity : newVel})
    }

    getSteps(e) {
        let newVel = this.state.velocity
        newVel.steps = e.target.value
        this.setState({velocity : newVel})
    }

    getRearWheelDiameter(data) {
        let newRearWheel = this.state.rearWheel
        newRearWheel.diameter = data
        this.setState({rearWheel : newRearWheel})
    }

    getRearWheelMass(data) {
        let newRearWheel = this.state.rearWheel
        newRearWheel.mass = data
        this.setState({rearWheel : newRearWheel})
    }

    getRearWheelLxxLyy(data) {
        let newRearWheel = this.state.rearWheel
        newRearWheel.lxxlyy = data
        this.setState({rearWheel : newRearWheel})
    }

    getRearWheelLzz(data) {
        let newRearWheel = this.state.rearWheel
        newRearWheel.lzz = data
        this.setState({rearWheel : newRearWheel})
    }

    getFrontWheelDiameter(data) {
        let newFrontWheel = this.state.frontWheel
        newFrontWheel.diameter = data
        this.setState({frontWheel : newFrontWheel})
    }

    getFrontWheelMass(data) {
        let newFrontWheel = this.state.frontWheel
        newFrontWheel.mass = data
        this.setState({frontWheel : newFrontWheel})
    }

    getFrontWheelLxxLyy(data) {
        let newFrontWheel = this.state.frontWheel
        newFrontWheel.lxxlyy = data
        this.setState({frontWheel : newFrontWheel})
    }

    getFrontWheelLzz(data) {
        let newFrontWheel = this.state.frontWheel
        newFrontWheel.lzz = data
        this.setState({frontWheel : newFrontWheel})
    }

    getRearFrameX(data) {
        let newRearFrame = this.state.rearFrame
        newRearFrame.x = data
        this.setState({rearFrame : newRearFrame})
    }

    getRearFrameY(data) {
        let newRearFrame = this.state.rearFrame
        newRearFrame.y = data
        this.setState({rearFrame : newRearFrame})
    }

    getRearFrameMass(data) {
        let newRearFrame = this.state.rearFrame
        newRearFrame.mass = data
        this.setState({rearFrame : newRearFrame})
    }

    getRearFrameL11(data) {
        let newRearFrame = this.state.rearFrame
        newRearFrame.l11 = data
        this.setState({rearFrame : newRearFrame})
    }

    getRearFrameL22(data) {
        let newRearFrame = this.state.rearFrame
        newRearFrame.l22 = data
        this.setState({rearFrame : newRearFrame})
    }

    getRearFrameLzz(data) {
        let newRearFrame = this.state.rearFrame
        newRearFrame.lzz = data
        this.setState({rearFrame : newRearFrame})
    }

    getRearFrameAlpha(data) {
        let newRearFrame = this.state.rearFrame
        newRearFrame.alpha = data
        this.setState({rearFrame : newRearFrame})
    }

    getRiderX(data) {
        let newRider = this.state.rider
        newRider.x = data
        this.setState({rider : newRider})
    }

    getRiderY(data) {
        let newRider = this.state.rider
        newRider.y = data
        this.setState({rider : newRider})
    }

    getRiderMass(data) {
        let newRider = this.state.rider
        newRider.mass = data
        this.setState({rider : newRider})
    }

    getRiderL11(data) {
        let newRider = this.state.rider
        newRider.l11 = data
        this.setState({rider : newRider})
    }

    getRiderL22(data) {
        let newRider = this.state.rider
        newRider.l22 = data
        this.setState({rider : newRider})
    }

    getRiderLzz(data) {
        let newRider = this.state.rider
        newRider.lzz = data
        this.setState({rider : newRider})
    }

    getRiderAlpha(data) {
        let newRider = this.state.rider
        newRider.alpha = data
        this.setState({rider : newRider})
    }

    getRearRackX(data) {
        let newRearRack = this.state.rearRack
        newRearRack.x = data
        this.setState({rearRack : newRearRack})
    }

    getRearRackY(data) {
        let newRearRack = this.state.rearRack
        newRearRack.y = data
        this.setState({rearRack : newRearRack})
    }

    getRearRackMass(data) {
        let newRearRack = this.state.rearRack
        newRearRack.mass = data
        this.setState({rearRack : newRearRack})
    }

    getRearRackL11(data) {
        let newRearRack = this.state.rearRack
        newRearRack.l11 = data
        this.setState({rearRack : newRearRack})
    }

    getRearRackL22(data) {
        let newRearRack = this.state.rearRack
        newRearRack.l22 = data
        this.setState({rearRack : newRearRack})
    }

    getRearRackLzz(data) {
        let newRearRack = this.state.rearRack
        newRearRack.lzz = data
        this.setState({rearRack : newRearRack})
    }

    getRearRackAlpha(data) {
        let newRearRack = this.state.rearRack
        newRearRack.alpha = data
        this.setState({rearRack : newRearRack})
    }

    getFrontForkX(data) {
        let newFrontFork = this.state.frontFork
        newFrontFork.x = data
        this.setState({frontFork : newFrontFork})
    }

    getFrontForkY(data) {
        let newFrontFork = this.state.frontFork
        newFrontFork.y = data
        this.setState({frontFork : newFrontFork})
    }

    getFrontForkMass(data) {
        let newFrontFork = this.state.frontFork
        newFrontFork.mass = data
        this.setState({frontFork : newFrontFork})
    }

    getFrontForkL11(data) {
        let newFrontFork = this.state.frontFork
        newFrontFork.l11 = data
        this.setState({frontFork : newFrontFork})
    }

    getFrontForkL22(data) {
        let newFrontFork = this.state.frontFork
        newFrontFork.l22 = data
        this.setState({frontFork : newFrontFork})
    }

    getFrontForkLzz(data) {
        let newFrontFork = this.state.frontFork
        newFrontFork.lzz = data
        this.setState({frontFork : newFrontFork})
    }

    getFrontForkAlpha(data) {
        let newFrontFork = this.state.frontFork
        newFrontFork.alpha = data
        this.setState({frontFork : newFrontFork})
    }

    getFrontBasketX(data) {
        let newFrontBasket = this.state.frontBasket
        newFrontBasket.x = data
        this.setState({frontBasket : newFrontBasket})
    }

    getFrontBasketY(data) {
        let newFrontBasket = this.state.frontBasket
        newFrontBasket.y = data
        this.setState({frontBasket : newFrontBasket})
    }

    getFrontBasketMass(data) {
        let newFrontBasket = this.state.frontBasket
        newFrontBasket.mass = data
        this.setState({frontBasket : newFrontBasket})
    }

    getFrontBasketL11(data) {
        let newFrontBasket = this.state.frontBasket
        newFrontBasket.l11 = data
        this.setState({frontBasket : newFrontBasket})
    }

    getFrontBasketL22(data) {
        let newFrontBasket = this.state.frontBasket
        newFrontBasket.l22 = data
        this.setState({frontBasket : newFrontBasket})
    }

    getFrontBasketLzz(data) {
        let newFrontBasket = this.state.frontBasket
        newFrontBasket.lzz = data
        this.setState({frontBasket : newFrontBasket})
    }

    getFrontBasketAlpha(data) {
        let newFrontBasket = this.state.frontBasket
        newFrontBasket.alpha = data
        this.setState({frontBasket : newFrontBasket})
    }



    check() {
        alert(this.state.velocity.minVel + '\n' + this.state.velocity.maxVel + '\n' + this.state.velocity.steps)
    }

    setXyUv() {
        let xyuv = this.state.xy_uv

        if (xyuv === 0)
            this.setState({xy_uv : 1})
        else {
            this.setState({xy_uv : 0})
        }
        console.log(this.state.xy_uv)
    }

    startTimeBegin() {
        this.startTime = new Date()
    }

    endTimeEnd() {
        this.endTime = new Date()
        let diff = this.endTime - this.startTime;
        console.log(`Done. Elapsed time = ${diff} seconds`)
    }

    calculate() {
        this.startTimeBegin();

        
        let bikeName = this.state.bike.bikeName
        let wheelBase = parseFloat(this.state.bike.wheelBase)
        let headAngle = parseFloat(this.state.bike.headAngle)
        let trail = parseFloat(this.state.bike.trail)
        let angleMeasurement = parseInt(this.state.bike.angleMeasurement)

        let minVel = parseFloat(this.state.velocity.minVel)
        let maxVel = parseFloat(this.state.velocity.maxVel)
        
        let rearWheelDiamter = parseFloat(this.state.rearWheel.diameter)
        let rearWheelMass = parseFloat(this.state.rearWheel.mass)
        let rearWheelLxxLyy = parseFloat(this.state.rearWheel.lxxlyy)
        let rearWheelLzz = parseFloat(this.state.rearWheel.lzz)
        let rearWheelInertia = parseFloat(this.state.rearWheel.inertia)

        let frontWheelDiamter = parseFloat(this.state.frontWheel.diameter)
        let frontWheelMass = parseFloat(this.state.frontWheel.mass)
        let frontWheelLxxLyy = parseFloat(this.state.frontWheel.lxxlyy)
        let frontWheelLzz = parseFloat(this.state.frontWheel.lzz)
        let frontWheelInertia = parseFloat(this.state.frontWheel.inertia)

        let rearFrameX = parseFloat(this.state.rearFrame.x)
        let rearFrameY = parseFloat(this.state.rearFrame.y)
        let rearFrameMass = parseFloat(this.state.rearFrame.mass)
        let rearFrameL11 = parseFloat(this.state.rearFrame.l11)
        let rearFrameL22 = parseFloat(this.state.rearFrame.l22)
        let rearFrameLzz = parseFloat(this.state.rearFrame.lzz)
        let rearFrameInertia = parseFloat(this.state.rearFrame.alpha)

        let riderX = parseFloat(this.state.rider.x)
        let riderY = parseFloat(this.state.rider.y)
        let riderMass = parseFloat(this.state.rider.mass)
        let riderL11 = parseFloat(this.state.rider.l11)
        let riderL22 = parseFloat(this.state.rider.l22)
        let riderLzz = parseFloat(this.state.rider.lzz)
        let riderInertia = parseFloat(this.state.rider.alpha)


        let rearRackX = parseFloat(this.state.rearRack.x)
        let rearRackY = parseFloat(this.state.rearRack.y)
        let rearRackMass = parseFloat(this.state.rearRack.mass)
        let rearRackL11 = parseFloat(this.state.rearRack.l11)
        let rearRackL22 = parseFloat(this.state.rearRack.l22)
        let rearRackLzz = parseFloat(this.state.rearRack.lzz)
        let rearRackInertia = parseFloat(this.state.rearRack.alpha)

        let frontForkX = parseFloat(this.state.frontFork.x)
        let frontForkY = parseFloat(this.state.frontFork.y)
        let frontForkMass = parseFloat(this.state.frontFork.mass)
        let frontForkL11 = parseFloat(this.state.frontFork.l11)
        let frontForkL22 = parseFloat(this.state.frontFork.l22)
        let frontForkLzz = parseFloat(this.state.frontFork.lzz)
        let frontForkInertia = parseFloat(this.state.frontFork.alpha)

        let frontBasketX = parseFloat(this.state.frontBasket.x)
        let frontBasketY = parseFloat(this.state.frontBasket.y)
        let frontBasketMass = parseFloat(this.state.frontBasket.mass)
        let frontBasketL11 = parseFloat(this.state.frontBasket.l11)
        let frontBasketL22 = parseFloat(this.state.frontBasket.l22)
        let frontBasketLzz = parseFloat(this.state.frontBasket.lzz)
        let frontBasketInertia = parseFloat(this.state.frontBasket.alpha)

        let iFrontWheel  = math.matrix([[frontWheelLxxLyy], [frontWheelLxxLyy], [frontWheelLzz]])
        let iFork = math.matrix([[frontForkL11], [frontForkL22], [frontForkLzz]])
        let iBasket = math.matrix([[frontBasketL11], [frontBasketL22], [frontBasketLzz]])
        let iRearWheel = math.matrix([[rearWheelLxxLyy], [rearWheelLxxLyy], [rearWheelLzz]])
        let iFrame = math.matrix([[rearFrameL11], [rearFrameL22], [rearFrameLzz]])
        let iRack = math.matrix([[rearRackL11], [rearRackL22], [rearRackLzz]])
        let iRider = math.matrix([[riderL11], [riderL22], [riderLzz]])

        if (headAngle === 0) {
            rearWheelInertia *= Math.PI/180
            frontWheelInertia *= Math.PI/180
            rearFrameInertia *= Math.PI/180
            riderInertia *= Math.PI/180
            rearRackInertia *= Math.PI/180
            frontForkInertia *= Math.PI/180
            frontBasketInertia *= Math.PI/180
        }

        if (this.state.xy_uv === 1) {
            this.u = wheelBase + trail
            this.v = 0;

            this.forkX = this.forkU
            this.forkY = this.forkV
            
            this.basketX = this.basketU
            this.basketY = this.basketV

            this.forkU = (this.ForkX - this.u) * this.cha + (this.forkY - this.v) * this.sha
            this.forkV = (this.forkX - this.u) * this.sha + (this.forkY - this.u) * this.cha
            this.basketU = (this.basketX - this.u) * this.cha + (this.basketY - this.v) * this.sha
            this.basketV = -(this.basketX - this.u) * this.sha + (this.basketY - this.v) * this.cha
        }

        let lambda = Math.PI / 2 - headAngle

        let massMatrix = math.matrix([frontWheelMass, frontForkMass, frontBasketMass, rearWheelMass, rearFrameMass, rearRackMass, riderMass])

        let R1 = math.matrix([[Math.cos(lambda), -Math.sin(lambda)], [Math.sin(lambda), Math.cos(lambda)]])
        //let O1 = math.matrix([[wheelBase + trail], [0]])
        let O1 = math.matrix([[2], [4]])
        let x = O1.get([0,0])
        let y = O1.get([1,0])
        let p0 = math.eval('R1[1:1,:] + x', {R1, x})
        let p1 = math.eval('R1[2:2,:] + y', {R1, y})
        //let uvFork = math.matrix([[frontForkX], [frontForkY]])
        //let uvBasket = math.matrix([[frontBasketX], [frontBasketY]])
        let uvFork = math.matrix([[2], [3]])
        let uvBasket = math.matrix([[3], [5]])

        let p = math.matrix([[p0.get([0,0]), p0.get([0,1])], [p1.get([0,0]), p1.get([0,1])]])

        let pFork = math.multiply(p,uvFork)
        let xcmFork = pFork.get([0,0])
        let ycmFork = pFork.get([1,0])

        let pBasket = math.multiply(p,uvBasket)
        let xcmBasket = pBasket.get([0,0])
        let ycmBasket = pBasket.get([1,0])

        let centerMassMatrix = math.matrix([[wheelBase, frontWheelDiamter / 2], [xcmFork, ycmFork], [xcmBasket, ycmBasket], [0, rearWheelDiamter/2], [rearFrameX, rearFrameY], [rearRackX, rearRackY], [riderX, riderY]])
        let inertiaMatrix = math.matrix([[iFrontWheel], [iFork], [iBasket], [iRearWheel], [iFrame], [iRack], [iRider]]);
        let alphaCenterMass = math.matrix([[frontWheelInertia], [frontForkInertia], [frontBasketInertia], [rearWheelInertia], [rearFrameInertia], [rearRackInertia], [riderInertia]])
        
    }

    addMassInertia(m, cm, I, a) {
        let n = m.length;
        let mt = math.sum(m)
        let cmt

    }


    checkForBlanks() {
    }

    render() {
        return (
        <div>
            <Bike action={this.bikeCallbacks}/>
            <h2>Forward Speeds</h2>
            <br />
            <table className="center">
            <tbody>
                <tr>
                    <td><TextField id="minVel" label="Minimum Velocity (m/s)" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.getMinVel}/></td>
                    <td><Button variant="contained" color="primary" onClick={this.calculate}>Calculate</Button></td>
                </tr>
                <tr>
                    <td><TextField id="maxVel" label="Maximum Velocity (m/s)" defaultValue="0.0" margin="normal" variant="outlined" onChange={this.getMaxVel}/></td>
                    <td><Button variant="outlined" color="primary">Save Bike</Button></td>
                </tr>
                <tr>
                <td><TextField id="steps" label="Steps" defaultValue="0" margin="normal" variant="outlined" onChange={this.getSteps}/></td>
                </tr>
            </tbody>
            </table>
            <Component rearWheelAction={this.rearWheelCallbacks} frontWheelAction={this.frontWheelCallbacks} rearFrameAction={this.rearFrameCallbacks} riderAction={this.riderCallbacks} rearRackAction={this.rearRackCallbacks} frontForkAction={this.frontForkCallbacks}
            frontBasketAction={this.frontBasketCallbacks} xyuvAction={this.setXyUv}/>
        </div>
        )
    }
}

export default Main;