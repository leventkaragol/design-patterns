import {IShippingService} from "./ishipping-service";

export class Fedex implements IShippingService {
    shipOrder(orderId: string): void {
        console.log(`Fedex ile kargo gönderiliyor, Şipariş Kodu: ${orderId}`);
    }
}