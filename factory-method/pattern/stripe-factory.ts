import {IPaymentProviderFactory} from "./payment-provider-factory";
import {IPaymentProvider} from "./ipayment-provider";
import {Stripe} from "./stripe";

export class StripeFactory implements IPaymentProviderFactory {
    createPaymentProvider(): IPaymentProvider {
        return new Stripe();
    }
}