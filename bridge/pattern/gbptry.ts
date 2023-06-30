import {ICurrency} from "./icurrency";

export class GBPTRY implements ICurrency {
    public getData() {

        // İlgili merkez bankasından döviz kurları çekiliyor
        return [
            {
                date: "2020-06-26",
                open: 32.13,
                high: 33.34,
                low: 31.88,
                close: 32.94
            }, {
                date: "2020-06-27",
                open: 32.91,
                high: 33.40,
                low: 32.40,
                close: 33.14
            }, {
                date: "2020-06-28",
                open: 33.14,
                high: 33.42,
                low: 32.73,
                close: 32.87
            }
        ];
    }
}