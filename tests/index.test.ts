import Bomber from "src/Bomber";
import Pilot from "src/Pilot";
import StarshipFactory from "src/GangOfFour/StarshipFactory";
import CorvetteStarship from "src/GangOfFour/CorvetteStarship";
import StarDestroyerStarship from "src/GangOfFour/StarDestroyerStarship";

test('Luke Skywalker vehicle is Started', () => {
    const bomber = new Bomber()
    const lukeSkywalker = new Pilot(bomber)
    lukeSkywalker.launchVehicle();
    expect(lukeSkywalker.getVehicleIsStarted()).toBe(true);
});

test('Corvette vs Destroyer', () => {
    const corvette = StarshipFactory.make("corvette")
    const destroyer = StarshipFactory.make("destroyer")

    if(corvette && destroyer){
        expect(corvette.name).toBe('XU5800');
        if (!(corvette instanceof StarDestroyerStarship)) {
            expect(corvette?.countPassengers()).toBe(200);
        }

        expect(destroyer.name).toBe('SUPER DESTROYER');
        if (destroyer instanceof StarDestroyerStarship) {
            expect(destroyer?.attack(corvette)).toBe("attack XU5800");
        }
    }
});