import Bomber from "./Bomber";
import Pilot from "./Pilot";
import CorvetteStarship from "src/GangOfFour/CorvetteStarship";
import StarshipFactory from "src/GangOfFour/StarshipFactory";
import Starship from "src/GangOfFour/Starship";
import StarDestroyerStarship from "src/GangOfFour/StarDestroyerStarship";
import StarshipDataHandler from "src/Command/StarshipDataHandler";
import StarshipErrorHandler from "src/Command/StarshipErrorHandler";
import FetchAllStarshipsCommand from "src/Command/FetchAllStarshipsCommand";
import FetchOneStarshipCommand from "src/Command/FetchOneStarshipCommand";
import StarshipCommandBus from "src/Command/StarshipCommandBus";

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

export async function tp3() {
    const starshipDataHandler = new StarshipDataHandler();
    const starshipErrorHandler = new StarshipErrorHandler();

    const fetchAllStarshipsCommand = new FetchAllStarshipsCommand(starshipDataHandler, starshipErrorHandler);
    const fetchOneStarshipCommand = new FetchOneStarshipCommand(9, starshipDataHandler, starshipErrorHandler);

    const starshipCommandBus = new StarshipCommandBus();
    starshipCommandBus.addCommand(fetchAllStarshipsCommand);
    starshipCommandBus.addCommand(fetchOneStarshipCommand);

    await starshipCommandBus.executeCommands();
}

tp3().then(r => console.log("Finished", r));

// initLukeSkywalker();
// starships()

