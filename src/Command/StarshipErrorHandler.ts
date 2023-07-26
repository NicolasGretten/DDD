import ErrorHandler from "src/Command/ErrorHandler";

export default class StarshipErrorHandler implements ErrorHandler {
    handle(error: Error): void {
        console.error('An error occurred:', error.message);
    }
}