import {Fedex} from "./fedex";
import {Dhl} from "./dhl";

export class ShippingProcessor {
    static shipOrder(provider: string, orderId: string): void {

        if (provider === "Fedex") {

            const fedex = new Fedex();

            fedex.shipOrder(orderId);

        } else if (provider === "DHL") {

            const dhl = new Dhl();

            dhl.shipOrder(orderId);

        } else {

            throw new Error("Geçersiz nakliye sistemi");
        }
    }
}