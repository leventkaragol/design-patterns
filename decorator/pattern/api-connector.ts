import {IConnector} from "./iconnector";

export class ApiConnector implements IConnector {
    read(): string {
        return "gelen veri";
    }

    write(data: string): void {
        console.log(`gönderilen veri: ${data}`);
    }
}