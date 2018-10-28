class Bike {
    constructor()
    {
        this.name = ""
        this.comment = ""
        this.wheelbase = 0.0
        this.headAngle = 0.0
        this.trail = 0.0

        this.rearWheelDiamter = 0.0
        this.rearWheelMass = 0.0
        this.rearMomentOfInertia = [0.0, 0.0, 0.0]
        this.rearAlphaInertia = 0.0

        this.frontWheelDiamter = 0.0
        this.frontWheelMass = 0.0
        this.frontMomentOfInertia = [0.0, 0.0, 0.0]
        this.frontAlphaInertia = 0.0

        this.riderMass = 0.0
        this.riderCenterMassX = 0.0
        this.riderCenterMassY = 0.0
        this.riderMomentOfInertia = [0.0, 0.0, 0.0]
        this.riderAlphaInertia = 0.0

        this.frameMass = 0.0
        this.frameCenterMassX = 0.0
        this.frameCenterMassY = 0.0
        this.frameMomentOfInertia = [0.0, 0.0, 0.0]
        this.frameAlphaInertia = 0.0

        this.rearRackMass = 0.0
        this.rearRackCenterMassX = 0.0
        this.rearRackCenterMassY = 0.0
        this.rearRackMomentOfInertia = [0.0, 0.0, 0.0]
        this.rearRackAlphaInertia = 0.0

        this.frontForkMass = 0.0
        this.frontForkCenterMassU = 0.0
        this.frontForkCenterMassV = 0.0
        this.frontForkMomentOfInertia = [0.0, 0.0, 0.0]
        this.frontForkAlphaInertia = 0.0

        this.frontForkMass = 0.0
        this.frontForkCenterMassU = 0.0
        this.frontForkCenterMassV = 0.0
        this.frontForkMomentOfInertia = [0.0, 0.0, 0.0]
        this.frontForkAlphaInertia = 0.0

        this.frontBasketkMass = 0.0
        this.frontBasketCenterMassU = 0.0
        this.frontBasketCenterMassV = 0.0
        this.frontBasketMomentOfInertia = [0.0, 0.0, 0.0]
        this.frontBasketAlphaInertia = 0.0
    }
}

class User {
    constructor()
    {
        this.username = "";
        this.password = "";
    }
}