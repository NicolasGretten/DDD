import Vehicle from "./Vehicle";

export default class Starships extends Vehicle{

    decoller(): void{
        super.start()
    }

    hyperSpeed(): void{
        console.log("HYPER VITESSE !!!!")
    }

}