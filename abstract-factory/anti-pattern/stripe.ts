export class Stripe {
    processPayment(accountNumber: string, amount: number): void {
        console.log(`Stripe ile ödeme alınıyor, Hesap No: ${accountNumber} Tutar: ${amount}`);
    }
}