export class USDTRYService {
    private formatToJSON(data: any[]) {

        // Veri JSON formatına çevriliyor (Parite için kapanış değerini alıyoruz)
        return data.map((x) => {
            return {
                date: x.date,
                value: x.close
            }
        });
    }

    private formatToXML(data: any[]) {

        // Veri XML formatına çevriliyor (Parite için kapanış değerini alıyoruz)
        let parityList = data.map((x) => {
            return `<parity><date>${x.date}</date><value>${x.close}</value></parity>`;
        });

        return `<parities>${parityList.join('')}</parities>`;
    };

    private getData() {

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

    public getHistoricalData(format: "json" | "xml") {

        const data = this.getData();

        if (format === "json") {
            return this.formatToJSON(data);
        } else if (format === "xml") {
            return this.formatToXML(data);
        }
    }
}