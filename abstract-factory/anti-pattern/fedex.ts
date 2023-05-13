export class Fedex {
    shipOrder(orderId: string): void {
        console.log(`Fedex ile kargo gönderiliyor, Şipariş Kodu: ${orderId}`);
    }
}