import Vehicle from "src/Vehicle";
import IVehicle from "../Interface/IVehicle";

export default class Pilot {
    constructor(
        private vehicle: IVehicle
    ) {
    }

    launchVehicle(): void{
        console.log(this.vehicle.isStarted)
        this.vehicle.getIn()
        this.vehicle.start()
        this.vehicle.launch()
        console.log(this.vehicle.getIsStarted())
    }

    getVehicleIsStarted(): boolean{
        return this.vehicle.isStarted
    }

}