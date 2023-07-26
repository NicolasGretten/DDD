import axios from 'axios';
import ErrorHandler from "src/Command/ErrorHandler";
import Command from "src/Command/Command";
import Handler from "src/Command/Handler";
import StarshipData from "src/Command/StarshipData";

export default class FetchAllStarshipsCommand implements Command {
    private url = 'https://swapi.dev/api/starships';
    private handler: Handler<StarshipData[]>;
    private errorHandler: ErrorHandler;

    constructor(handler: Handler<StarshipData[]>, errorHandler: ErrorHandler) {
        this.handler = handler;
        this.errorHandler = errorHandler;
    }

    async execute(): Promise<void> {
        try {
            const response = await axios.get(this.url);
            const starships: StarshipData[] = response.data.results.map((result: any) => ({
                name: result.name,
                model: result.model,
                manufacturer: result.manufacturer,
            }));
            this.handler.handle(starships);
        } catch (error: any) {
            this.errorHandler.handle(error);
        }
    }
}
