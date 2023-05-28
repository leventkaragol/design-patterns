import {ApiConnector} from "./api-connector";

let connector = new ApiConnector();

// Eski yöntem
connector.write("veri1");
console.log(connector.read());

console.log();

// Sıkıştırmayı aktif ediyoruz
connector.write("veri2", true, "gzip", false, "");
console.log(connector.read(true, "gzip", false, ""));

console.log();

// Sıkıştırma ve şifrelemeyi aktif ediyoruz
connector.write("veri3", true, "gzip", true, "aes256");
console.log(connector.read(true, "gzip", true, "aes256"));
