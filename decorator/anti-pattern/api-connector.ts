export class ApiConnector {
    read(compress: boolean = false, compressionFormat: string = "", encrypt: boolean = false, encryptionAlgorithm: string = ""): string {

        let data = "gelen veri";

        if (compress) {
            data = `${compressionFormat} ile açılmış ${data}`;
        }

        if (encrypt) {
            data = `${encryptionAlgorithm} ile çözülmüş ${data}`;
        }

        return data;
    }

    write(data: string, compress: boolean = false, compressionFormat: string = "", encrypt: boolean = false, encryptionAlgorithm: string = ""): void {

        if (encrypt) {
            data = `${encryptionAlgorithm} ile şifrelenmiş ${data}`;
        }

        if (compress) {
            data = `${compressionFormat} ile sıkıştırılmış ${data}`;
        }

        console.log(`gönderilen veri: ${data}`);
    }
}