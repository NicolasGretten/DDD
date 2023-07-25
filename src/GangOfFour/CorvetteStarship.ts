import Starship from "src/GangOfFour/Starship";

export default class CorvetteStarship extends Starship{
    readonly nbPassengers: number;

    constructor(name: string, nbPassengers: number) {
        super(name);
        this.nbPassengers = nbPassengers
    }
    countPassengers(): number {
        return this.nbPassengers;
    }
}