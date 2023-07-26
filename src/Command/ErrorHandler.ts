export default interface ErrorHandler {
    handle(error: Error): void;
}