import {PayPal} from "./paypal";
import {Stripe} from "./stripe";

export class PaymentProcessor {
    static processPayment(provider: string, accountNumber: string, amount: number): void {

        if (provider === "PayPal") {

            const payPal = new PayPal();

            payPal.processPayment(accountNumber, amount);

        } else if (provider === "Stripe") {

            const stripe = new Stripe();

            stripe.processPayment(accountNumber, amount);

        } else {

            throw new Error("Geçersiz ödeme sistemi");
        }
    }
}