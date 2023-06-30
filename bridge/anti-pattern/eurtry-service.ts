export class EURTRYService {
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

    getHistoricalData(format: "json" | "xml") {

        const data = this.getData();

        if (format === "json") {
            return this.formatToJSON(data);
        } else if (format === "xml") {
            return this.formatToXML(data);
        }
    }
}