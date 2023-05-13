import {IPaymentProviderFactory} from "./payment-provider-factory";
import {IPaymentProvider} from "./ipayment-provider";
import {PayPal} from "./paypal";

export class PayPalFactory implements IPaymentProviderFactory {
    createPaymentProvider(): IPaymentProvider {
        return new PayPal();
    }
}