import {PayPalService} from "./paypal-service";
import {IPaymentAdapter} from "./ipayment-adapter";

export class PaypalAdapter implements IPaymentAdapter {
    private payPalService: PayPalService;

    constructor(paypPalService: PayPalService) {
        this.payPalService = paypPalService;
    }

    processPayment(accountCode: string, amount: number): void {
        this.payPalService.processPayment(accountCode, amount);
    }
}