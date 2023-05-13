import {IPaymentProvider} from "./ipayment-provider";

export class Stripe implements IPaymentProvider {
    processPayment(accountNumber: string, amount: number): void {
        console.log(`Stripe ile ödeme alınıyor, Hesap No: ${accountNumber} Tutar: ${amount}`);
    }
}