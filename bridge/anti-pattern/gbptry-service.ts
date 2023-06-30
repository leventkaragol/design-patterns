export class GBPTRYService {
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

    getHistoricalData(format: "json" | "xml") {

        const data = this.getData();

        if (format === "json") {
            return this.formatToJSON(data);
        } else if (format === "xml") {
            return this.formatToXML(data);
        }
    }
}