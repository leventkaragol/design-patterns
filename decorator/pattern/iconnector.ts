export interface IConnector {
    read(): string;
    write(data: string): void;
}