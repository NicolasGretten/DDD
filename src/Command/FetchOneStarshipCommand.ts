import axios from "axios";
import Command from "src/Command/Command";
import ErrorHandler from "src/Command/ErrorHandler";
import Handler from "src/Command/Handler";
import StarshipData from "src/Command/StarshipData";

export default class FetchOneStarshipCommand implements Command {
    private url: string;
    private handler: Handler<StarshipData>;
    private errorHandler: ErrorHandler;

    constructor(id: number, handler: Handler<StarshipData>, errorHandler: ErrorHandler) {
        this.url = `https://swapi.dev/api/starships/${id}`;
        this.handler = handler;
        this.errorHandler = errorHandler;
    }

    async execute(): Promise<void> {
        try {
            const response = await axios.get(this.url);
            const starship: StarshipData = {
                name: response.data.name,
                model: response.data.model,
                manufacturer: response.data.manufacturer,
            };
            this.handler.handle(starship);
        } catch (error: any) {
            this.errorHandler.handle(error);
        }
    }
}