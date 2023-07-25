import Bomber from "./Bomber";
import Pilot from "./Pilot";
import CorvetteStarship from "src/GangOfFour/CorvetteStarship";
import StarshipFactory from "src/GangOfFour/StarshipFactory";
import Starship from "src/GangOfFour/Starship";
import StarDestroyerStarship from "src/GangOfFour/StarDestroyerStarship";

export const initLukeSkywalker = (): Pilot => {
    const bomber = new Bomber()
    console.log("BOMBER ", bomber.isStarted)
    const lukeSkywalker = new Pilot(bomber)
    lukeSkywalker.launchVehicle();

    return lukeSkywalker
}

export const starships = () => {
    const corvette = StarshipFactory.make("corvette")
    console.log("Corvette Name: ", corvette?.name)
    if (corvette instanceof CorvetteStarship) {
        console.log("Corvette total passengers: ", corvette?.countPassengers())
    }

    const destroyer = StarshipFactory.make("destroyer")
    console.log("Destroyer Name: ", destroyer?.name)
    if (destroyer instanceof StarDestroyerStarship && corvette) {
        destroyer?.attack(corvette)
    }
}

// initLukeSkywalker();
starships()

