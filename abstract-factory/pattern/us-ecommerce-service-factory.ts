import {ECommerceServiceFactory} from "./ecommerce-service-factory";
import {Stripe} from "./stripe";
import {Fedex} from "./fedex";

export class USECommerceServiceFactory extends ECommerceServiceFactory {
    createPaymentProvider() {
        return new Stripe();
    }

    createShippingService() {
        return new Fedex();
    }
}