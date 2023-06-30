import {ICurrency} from "./icurrency";

export class EURTRY implements ICurrency {
    public getData() {

        // İlgili merkez bankasından döviz kurları çekiliyor
        return [
            {
                date: "2020-06-26",
                open: 27.52,
                high: 28.53,
                low: 27.33,
                close: 28.25
            }, {
                date: "2020-06-27",
                open: 28.25,
                high: 28.70,
                low: 27.78,
                close: 28.49
            }, {
                date: "2020-06-28",
                open: 28.49,
                high: 28.73,
                low: 28.25,
                close: 28.38
            }
        ];
    }
}