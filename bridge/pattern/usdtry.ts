import {ICurrency} from "./icurrency";

export class USDTRY implements ICurrency {
    public getData() {

        // Temsili olarak ilgili merkez bankasından döviz kurları çekiliyor
        return [
            {
                date: "2020-06-26",
                open: 25.32,
                high: 26.25,
                low: 25.25,
                close: 26.07
            }, {
                date: "2020-06-27",
                open: 26.07,
                high: 26.21,
                low: 25.53,
                close: 26.03
            }, {
                date: "2020-06-28",
                open: 26.03,
                high: 26.23,
                low: 25.94,
                close: 26.04
            }
        ];
    }
}