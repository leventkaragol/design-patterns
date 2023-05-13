import {IShippingService} from "./ishipping-service";

export class Dhl implements IShippingService {
    shipOrder(orderId: string): void {
        console.log(`Dhl ile kargo gönderiliyor, Şipariş Kodu: ${orderId}`);
    }
}