import Bomber from "./Bomber";
import Pilot from "./Pilot";

export const initLukeSkywalker = (): Pilot => {
    const bomber = new Bomber()
    console.log("BOMBER ", bomber.isStarted)
    const lukeSkywalker = new Pilot(bomber)
    lukeSkywalker.launchVehicle();

    return lukeSkywalker
}

initLukeSkywalker();

