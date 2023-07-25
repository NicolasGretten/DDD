import IVehicle from "../Interface/IVehicle";

export default class Vehicle implements IVehicle{
    isStarted;
    nbPersonIn;

    constructor() {
        this.isStarted = false
        this.nbPersonIn = 0
    }

    protected start(): void{
        this.isStarted = true;
        console.log("Starting", "TEST")
    }
    protected stop(): void{
        this.isStarted = false;
        console.log("Stop")
    }

    getIn(): void{
        this.nbPersonIn += 1
        console.log("Get In the Vehicle")
    }

    getOut(): void{
        if(this.nbPersonIn >= 0) this.nbPersonIn += 1
        console.log("Get Out the Vehicle")
    }

    launch(): void{
        console.log("Décollage")
    }

    getIsStarted(): boolean {
        return this.isStarted
    }
}