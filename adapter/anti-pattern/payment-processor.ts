import {PayPalService} from "./paypal-service";
import {AmazonPayService} from "./amazon-pay-service";

export class PaymentProcessor {
    executePayment(accountCode: string, amount: number, provider: string): void {

        if (provider === "paypal") {

            const payPalService = new PayPalService();

            payPalService.processPayment(accountCode, amount);

        } else if (provider === "amazonpay") {

            const amazonPayService = new AmazonPayService();

            const token = amazonPayService.getPaymentToken(accountCode);

            amazonPayService.processPayment(token, amount);
        }
    }
}
