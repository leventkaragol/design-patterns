import {IPaymentProvider} from "./ipayment-provider";

export class PayPal implements IPaymentProvider {
    processPayment(accountNumber: string, amount: number): void {
        console.log(`Paypal ile ödeme alınıyor, Hesap No: ${accountNumber} Tutar: ${amount}`);
    }
}