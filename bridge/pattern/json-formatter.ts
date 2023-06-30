import {IFormatter} from "./iformatter";

export class JSONFormatter implements IFormatter {
    public formatData(data: any[]) {

        // Veri JSON formatına çevriliyor (Parite için kapanış değerini alıyoruz)
        return data.map((x) => {
            return {
                date: x.date,
                value: x.close
            }
        });
    }
}