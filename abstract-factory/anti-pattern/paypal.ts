export class PayPal {
    processPayment(accountNumber: string, amount: number): void {
        console.log(`Paypal ile ödeme alınıyor, Hesap No: ${accountNumber} Tutar: ${amount}`);
    }
}