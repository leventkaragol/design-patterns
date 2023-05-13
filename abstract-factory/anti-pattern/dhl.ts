export class Dhl {
    shipOrder(orderId: string): void {
        console.log(`Dhl ile kargo gönderiliyor, Şipariş Kodu: ${orderId}`);
    }
}