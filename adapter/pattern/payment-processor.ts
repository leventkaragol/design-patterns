import {IPaymentAdapter} from "./ipayment-adapter";

export class PaymentProcessor {
    executePayment(accountCode: string, amount: number, provider: IPaymentAdapter): void {
        provider.processPayment(accountCode, amount);
    }
}
