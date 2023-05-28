import {IConnector} from "./iconnector";

export class EncryptionDecorator implements IConnector {
    constructor(private connector: IConnector, private algorithm: string) {
    }

    read(): string {

        const data = this.connector.read();

        // Gelen veri çözülüyor
        return `${this.algorithm} ile çözülmüş ${data}`;
    }

    write(data: string): void {

        // Gelen veri şifreleniyor
        data = `${this.algorithm} ile şifrelenmiş ${data}`;

        this.connector.write(data);
    }
}