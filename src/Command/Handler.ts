export default interface Handler<T> {
    handle(data: T): void;
}