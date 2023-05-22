export class AmazonPayService {
    getPaymentToken(accountNumber: string): string {
        console.log(`Amazon Pay'de ${accountNumber} numaralı hesap için token alınıyor`);
        return "XYZ123";
    }

    processPayment(paymentToken: string, amount: number): void {
        console.log(`Amazon Pay ile ödeme alınıyor, Token: ${paymentToken} Tutar: ${amount}`);
    }
}