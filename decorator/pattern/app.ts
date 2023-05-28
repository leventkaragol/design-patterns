import {ApiConnector} from "./api-connector";
import {CompressionDecorator} from "./compression-decorator";
import {EncryptionDecorator} from "./encryption-decorator";

let connector = new ApiConnector();

// Eski yöntem
connector.write("veri1");
console.log(connector.read());

console.log();

// Sıkıştırmayı aktif ediyoruz
connector = new CompressionDecorator(connector, "gzip");
connector.write("veri2");
console.log(connector.read());

console.log();

// Şifrelemeyi de aktif ediyoruz
connector = new EncryptionDecorator(connector, "aes256");
connector.write("veri3");
console.log(connector.read());
