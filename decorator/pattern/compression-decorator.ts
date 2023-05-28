import {IConnector} from "./iconnector";

export class CompressionDecorator implements IConnector {
    constructor(private connector: IConnector, private format: string) {
    }

    read(): string {

        const data = this.connector.read();

        //Gelen veri açılıyor
        return `${this.format} ile açılmış ${data}`;
    }

    write(data: string): void {

        // Gelen veri sıkıştırılıyor
        data = `${this.format} ile sıkıştırılmış ${data}`;

        this.connector.write(data);
    }
}