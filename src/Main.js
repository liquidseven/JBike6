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
                    bikeName : "Schwinn Crown",
                    headAngle : 70.977782,
                    angleMeasurement: 0,
                    wheelBase : 1.016,
                    trail : 0.090968
                },
                
                velocity : {
                    minVel : 0,
                    maxVel : 10,
                    steps : 101
                },

                rearWheel : {
                    diameter : 0.6858,
                    mass : 1.818182,
                    lxxlyy : 0.085513,
                    lzz : 0.171026,
                    inertia : 0.0
                },

                frontWheel : {
                    diameter : 0.6858,
                    mass : 1.818182,
                    lxxlyy : 0.085513,
                    lzz : 0.171026,
                    inertia :0.0
                },

                rearFrame : {
                    x : 0.3,
                    y : 0.5,
                    mass : 2.5,
                    l11 : 0.058579,
                    l22 : 0.341421,
                    lzz : 0.4,
                    alpha : 22.499995
                },

                rider : {
                    x : 0.3,
                    y : 1.2,
                    mass : 80,
                    l11 : 10.531129,
                    l22 : 2.468871,
                    lzz : 12,
                    alpha : -14.872437
                },

                rearRack : {
                    x : -0.1,
                    y : 0.8,
                    mass : 2,
                    l11 : 0.02,
                    l22 : 0.02,
                    lzz : 0.02,
                    alpha : 0
                },

                frontFork : {
                    u : 0,
                    v : 0.6858,
                    mass : 1.5,
                    l11 : 0.05879,
                    l22 : 0.000588,
                    lzz : 0.05879,
                    alpha : 19.022199
                },

                frontBasket : {
                    u : 0.15,
                    v : 0.8,
                    mass : 1.5,
                    l11 : 0.01,
                    l22 : 0.01,
                    lzz : 0.01,
                    alpha : 0
                },

                xy_uv : 0
            }

        this.gravity = 9.80665;
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

        this.getFrontForkU = this.getFrontForkU.bind(this);
        this.getFrontForkV = this.getFrontForkV.bind(this);
        this.getFrontForkMass = this.getFrontForkMass.bind(this);
        this.getFrontForkL11 = this.getFrontForkL11.bind(this);
        this.getFrontForkL22 = this.getFrontForkL22.bind(this);
        this.getFrontForkLzz = this.getFrontForkLzz.bind(this);
        this.getFrontForkAlpha = this.getFrontForkAlpha.bind(this);

        this.getFrontBasketU = this.getFrontBasketU.bind(this);
        this.getFrontBasketV = this.getFrontBasketV.bind(this);
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
        this.frontForkCallbacks = [this.getFrontForkU, this.getFrontForkV, this.getFrontForkMass, this.getFrontForkL11, this.getFrontForkL22, this.getFrontForkLzz, this.getFrontForkAlpha]
        this.frontBasketCallbacks = [this.getFrontBasketU, this.getFrontBasketV, this.getFrontBasketMass, this.getFrontBasketL11, this.getFrontBasketL22, this.getFrontBasketLzz, this.getFrontBasketAlpha]
        
        this.setXyUv = this.setXyUv.bind(this)
        this.subtractByColumn = this.subtractByColumn.bind(this)
        this.calculate = this.calculate.bind(this)
        this.addMassInertia = this.addMassInertia.bind(this)
        this.getRow = this.getRow.bind(this)
        this.test = this.test.bind(this)
        this.conv = this.conv.bind(this)
        this.test();
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

    getFrontForkU(data) {
        let newFrontFork = this.state.frontFork
        newFrontFork.x = data
        this.setState({frontFork : newFrontFork})
    }

    getFrontForkV(data) {
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

    getFrontBasketU(data) {
        let newFrontBasket = this.state.frontBasket
        newFrontBasket.x = data
        this.setState({frontBasket : newFrontBasket})
    }

    getFrontBasketV(data) {
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

        let frontForkU = parseFloat(this.state.frontFork.u)
        let frontForkV = parseFloat(this.state.frontFork.v)
        let frontForkMass = parseFloat(this.state.frontFork.mass)
        let frontForkL11 = parseFloat(this.state.frontFork.l11)
        let frontForkL22 = parseFloat(this.state.frontFork.l22)
        let frontForkLzz = parseFloat(this.state.frontFork.lzz)
        let frontForkInertia = parseFloat(this.state.frontFork.alpha)

        let frontBasketU = parseFloat(this.state.frontBasket.u)
        let frontBasketV = parseFloat(this.state.frontBasket.v)
        let frontBasketMass = parseFloat(this.state.frontBasket.mass)
        let frontBasketL11 = parseFloat(this.state.frontBasket.l11)
        let frontBasketL22 = parseFloat(this.state.frontBasket.l22)
        let frontBasketLzz = parseFloat(this.state.frontBasket.lzz)
        let frontBasketInertia = parseFloat(this.state.frontBasket.alpha)

        if (angleMeasurement === 0) {
            headAngle *= Math.PI/180
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

        let R1 = math.matrix([[Math.cos(lambda), -Math.sin(lambda)], [Math.sin(lambda), Math.cos(lambda)]])
        let O1 = math.matrix([[wheelBase + trail], [0]])

        let p = math.multiply(R1, math.matrix([[frontForkU], [frontForkV]]))
        p = math.add(O1, p)

        let xcmFork = p.get([0,0])
        let ycmFork = p.get([1,0])

        p = math.multiply(R1, math.matrix([[frontBasketU], [frontBasketV]]))
        p = math.add(O1, p)

        let xcmBasket = p.get([0,0])
        let ycmBasket = p.get([1,0])


        let massMatrix = math.matrix([[frontWheelMass], [frontForkMass], [frontBasketMass], [rearWheelMass], [rearFrameMass], [rearRackMass], [riderMass]])

        let centerMassMatrix = math.matrix([[wheelBase, frontWheelDiamter / 2], [xcmFork, ycmFork], [xcmBasket, ycmBasket], [0, rearWheelDiamter/2], [rearFrameX, rearFrameY], [rearRackX, rearRackY], [riderX, riderY]])

        let inertiaMatrix = math.matrix([[frontWheelLxxLyy, frontWheelLxxLyy, frontWheelLzz], [frontForkL11, frontForkL22, frontForkLzz], [frontBasketL11, frontBasketL22, frontBasketLzz], [rearWheelLxxLyy, rearWheelLxxLyy, rearWheelLzz], 
            [rearFrameL11, rearFrameL22, rearFrameLzz], [rearRackL11, rearRackL22, rearRackLzz], [riderL11, riderL22, riderLzz]]);

        let alphaCenterMass = math.matrix([[frontWheelInertia], [frontForkInertia], [frontBasketInertia], [rearWheelInertia], [rearFrameInertia], [rearRackInertia], [riderInertia]])

        let mf = this.addMassInertia(massMatrix.subset(math.index([0,1,2], [0])), centerMassMatrix.subset(math.index([0,1,2], [0,1])), inertiaMatrix.subset(math.index([0,1,2], [0,1,2])), alphaCenterMass.subset(math.index([0,1,2], [0])))
        let mt = this.addMassInertia(massMatrix, centerMassMatrix, inertiaMatrix, alphaCenterMass)
        
        let cmtO = math.matrix([ [mt.cmt.get([0,0])], [mt.cmt.get([0,1])], [0] ])
        
        let ItO = math.multiply(math.multiply(math.transpose(cmtO), cmtO).get([0,0]), math.identity(3))
        ItO = math.subtract(ItO, math.multiply(cmtO, math.transpose(cmtO)))
        ItO = math.add(mt.It, math.dotMultiply(mt.mt, ItO))
        let Txx = ItO.get([0,0])
        let Txy = ItO.get([0,1])
        let Tyy = ItO.get([1,1])

        R1 = math.matrix([ [Math.cos(lambda), -Math.sin(lambda)], [Math.sin(lambda), Math.cos(lambda)]])
        let cmfuv = math.multiply(math.transpose(R1), math.subtract(math.transpose(mf.cmt), math.matrix([[wheelBase + trail], [0]])))

        let d = cmfuv.get([0,0])

        let ldir = math.matrix([ [-Math.sin(lambda)], [Math.cos(lambda)], [0]])
        let xdir = math.matrix([ [1], [0], [0]])
        let ydir = math.matrix([ [0], [1], [0]])

        let Fll = math.add(math.multiply(math.multiply(mf.mt, d), d), math.multiply(math.multiply(math.transpose(ldir), mf.It), ldir))
        let Flx = math.add(math.multiply(math.multiply(-mf.mt , mf.cmt.get([0,1])), d), math.multiply(math.multiply(math.transpose(xdir), mf.It), ldir))
        let Fly = math.add(math.multiply(math.multiply(mf.mt , mf.cmt.get([0,0])), d), math.multiply(math.multiply(math.transpose(ydir), mf.It), ldir))

        let cw = wheelBase
        let cf = trail * Math.cos(lambda)
        let Sr = rearWheelLzz / (rearWheelDiamter / 2)
        let Sf = frontWheelLzz / (frontWheelDiamter / 2)
        let St = Sr + Sf

        let nu = math.add(math.multiply(mf.mt, d), math.multiply(math.multiply(mt.mt, mt.cmt.get([0,0])), (cf / cw)))
        
        let M0 = math.zeros(2,2)
        M0.set([0,0], Txx)
        M0.set([0,1], math.add(Flx, math.multiply((cf/cw), Txy)).get([0,0]))
        M0.set([1,0], M0.get([0,1]))
        M0.set([1,1], math.add(math.add(Fll, math.multiply((2 * (cf/cw)), Fly)), math.multiply((cf/cw) ** 2, Tyy)).get([0,0]))

        let C1 = math.zeros(2,2)
        C1.set([0,0], 0)
        C1.set([0,1], -(Sf * Math.cos(lambda) + (cf/cw) * St) + Txy * Math.cos(lambda) / cw - (cf/cw) * mt.mt * mt.cmt.get([0,1]))
        C1.set([1,0], Sf * Math.cos(lambda) + (cf/cw) * St)
        C1.set([1,1], math.add(math.multiply(Math.cos(lambda) / cw, Fly), (cf/cw) * (nu+Math.cos(lambda)/cw * Tyy)).get([0,0]))

        let g = this.gravity
        let K0 = math.zeros(2,2)
        K0.set([0,0], -g * mt.mt * mt.cmt.get([0,1]))
        K0.set([0,1], g * nu)
        K0.set([1,0], K0.get([0,1]))
        K0.set([1,1], -g*nu*Math.sin(lambda))

        let K2 = math.zeros(2,2)
        K2.set([0,0], 0)
        K2.set([0,1], -Math.cos(lambda) / cw * (St+mt.mt* mt.cmt.get([0,1])))
        K2.set([1,0], 0)
        K2.set([1,1], Math.cos(lambda) / cw * (Math.sin(lambda) * Sf + nu))

        let m1 = M0.get([0,0])
        let m2 = M0.get([0,1])
        let m3 = M0.get([1,1])

        let c1 = C1.get([0,1])
        let c2 = C1.get([1,0])
        let c3 = C1.get([1,1])

        let k01 = K0.get([0,0])
        let k02 = K0.get([0,1])
        let k03 = K0.get([1,1])

        let k21 = K2.get([0,1])
        let k22 = K2.get([1,1])

        let Apc = m1 * m3 - m2 ** 2
        let Bpc = math.matrix([ [m1 * c3 - m2 * c2 - c1 * m2, 0] ])
        let Cpc = math.matrix([ [ m1 * k22 - c1 * c2 - k21 * m2, 0, m1 * k03 + k01 * m3-2 * m2 * k02]])
        let Dpc = math.matrix([ [-k21 * c2, 0, k01 * c3 - c1 * k02 - k02 * c2, 0]])
        let Epc = math.matrix([ [k01 * k22 - k21 * k02, 0, k01 * k03 - k02 ** 2]])

        if (APC === 0)
            console.log('Warning; Determinant of Mass Matrix = 0')
        if (APC < 0)
            console.log('Determinant of Mass Matrix < 0')




    }

    conv(u, v) {
        let m = u.length
        let n = v.length
        let k = m + n - 1

        let j = math.matrix([ [Math.max(1, k+1-n), Math.min(k,m)] ])
        let result = math.zeros(k, k)

        for (let i = 0; i < k; i++) {
            
        }
        // for (let i = 0; i < k; i++) {
        //     for (let h = 0; h < k; h++) {
        //         result.set([h,i], math.sum(j.get([0,])))
        //     }
        // }
    }


    addMassInertia(m, cm, I, a) {

        let n = math.size(m).get([0])
        let mt = math.sum(m)
        let cmt

        if (mt === 0)
            cmt = math.dotMultiply(math.multiply(math.transpose(m), cm), 0)
        else
            cmt = math.dotDivide(math.multiply(math.transpose(m), cm), mt)

        let It = math.zeros(3,3)
        let q
        let R
        let Iuvz
        let d1
        let d2
        let dColumn
        let Ixyz
        let identity = math.identity(3)
        let ixyz1
        let ixyz2

       for (let i = 0; i < n; i++) {
            q = a.get([i,0])
            R = math.matrix([[Math.cos(q), -Math.sin(q), 0], [Math.sin(q), Math.cos(q), 0], [0, 0, 1]])
            Iuvz = math.diag(this.getRow(I,i,1)[0])
            d1 = math.matrix([[cm.get([i,0])], [cm.get([i,1])], [0]])
            d2 = math.matrix([[cmt.get([0,0])], [cmt.get([0,1])], [0]])
            dColumn = math.subtract(d1,d2)

            ixyz1 = math.multiply(R, Iuvz)
            ixyz1 = math.multiply(ixyz1, math.transpose(R))           
            
            ixyz2 = math.multiply(math.transpose(dColumn), dColumn)
            ixyz2 = math.multiply(identity, ixyz2.get([0,0]))
            ixyz2 = math.subtract(ixyz2, math.multiply(dColumn, math.transpose(dColumn)))
            ixyz2 = math.dotMultiply(m.get([i,0]), ixyz2)

            Ixyz = math.add(ixyz1, ixyz2)
            It = math.add(It, Ixyz)
       }

       return {mt : mt, cmt : cmt, It : It}
    }

    getRow(m, i, a) {
        let newM = math.matrix()
        let n = math.size(m).get([1])

        for (let j = 0; j < n; j++) {
            newM.set([0,j], m.get([i,j]))
        }

        if (a === 0)
            return newM
        else
            return newM.valueOf()

    }

    subtractByColumn(m, c) {
        let n = math.size(m).get([1])

        let newM = math.matrix().resize([3,3]);
        for (let i = 0; i < n; i++)
        {
            for (let j = 0; j < n; j++) {
                newM.set([j,i], c.get([j,0]))
            }
        }
        return math.subtract(m, newM)
    }

    test() {


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
                    <td><Button variant="contained" color="primary" onClick={this.test}>Test</Button></td>
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