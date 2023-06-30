import {IFormatter} from "./iformatter";

export class XMLFormatter implements IFormatter {
    public formatData(data: any[]) {

        // Veri XML formatına çevriliyor (Parite için kapanış değerini alıyoruz)
        let parityList = data.map((x) => {
            return `<parity><date>${x.date}</date><value>${x.close}</value></parity>`;
        });

        return `<parities>${parityList.join('')}</parities>`;
    }
}