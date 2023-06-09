import {ICurrency} from "./icurrency";
import {IFormatter} from "./iformatter";

export class CurrencyService {
    constructor(
        private currencyImplementor: ICurrency,
        private formatImplementor: IFormatter
    ) {
    }

    public getHistoricalData() {
        const data = this.currencyImplementor.getData();
        return this.formatImplementor.formatData(data);
    }
}