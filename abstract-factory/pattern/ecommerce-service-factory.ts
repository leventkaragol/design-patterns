import {IPaymentProvider} from "./ipayment-provider";
import {IShippingService} from "./ishipping-service";

export abstract class ECommerceServiceFactory {
    abstract createPaymentProvider(): IPaymentProvider;
    abstract createShippingService(): IShippingService;
}