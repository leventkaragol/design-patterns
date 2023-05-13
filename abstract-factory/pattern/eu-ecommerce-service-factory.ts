import {ECommerceServiceFactory} from "./ecommerce-service-factory";
import {PayPal} from "./paypal";
import {Dhl} from "./dhl";

export class EUECommerceServiceFactory extends ECommerceServiceFactory {
    createPaymentProvider() {
        return new PayPal();
    }

    createShippingService() {
        return new Dhl();
    }
}