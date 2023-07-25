import Vehicle from "./Vehicle";

export default class Bomber extends Vehicle{

    start(): void{
        console.log("INSEIDE", this.isStarted)
        super.start()
    }

    stop(): void{
        super.stop()
    }
    launchBomb(): void{
        console.log("Bomb Launched!");
    }
}