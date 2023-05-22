import {AmazonPayService} from "./amazon-pay-service";
import {IPaymentAdapter} from "./ipayment-adapter";

export class AmazonPayAdapter implements IPaymentAdapter {
    private amazonPayService: AmazonPayService;

    constructor(amazonPayService: AmazonPayService) {
        this.amazonPayService = amazonPayService;
    }

    processPayment(accountCode: string, amount: number): void {
        let paymentToken = this.amazonPayService.getPaymentToken(accountCode);

        this.amazonPayService.processPayment(paymentToken, amount);
    }
}