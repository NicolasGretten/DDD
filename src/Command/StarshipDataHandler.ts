import Handler from "src/Command/Handler";
import StarshipData from "src/Command/StarshipData";

export default class StarshipDataHandler implements Handler<StarshipData[]> {
    handle(data: StarshipData[]): void {
        console.log('Starships:');
        data.forEach((starship) => {
            console.log(`Name: ${starship.name}, Model: ${starship.model}, Manufacturer: ${starship.manufacturer}`);
        });
    }
}