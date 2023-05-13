import {IPaymentProviderFactory} from "./payment-provider-factory";

export class PaymentProcessor {
    static processPayment(factory: IPaymentProviderFactory, accountNumber: string, amount: number): void {

        const paymentProvider = factory.createPaymentProvider();

        paymentProvider.processPayment(accountNumber, amount);
    }
}