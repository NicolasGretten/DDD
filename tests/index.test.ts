import Bomber from "src/Bomber";
import Pilot from "src/Pilot";

test('Luke Skywalker vehicle is Started', () => {
    const bomber = new Bomber()
    const lukeSkywalker = new Pilot(bomber)
    lukeSkywalker.launchVehicle();
    expect(lukeSkywalker.getVehicleIsStarted()).toBe(true);
});