import {ECommerceServiceFactory} from "./ecommerce-service-factory";
import {IPaymentProvider} from "./ipayment-provider";
import {IShippingService} from "./ishipping-service";

export class ECommerceService {

    private paymentProvider: IPaymentProvider;
    private shippingService: IShippingService;

    constructor(private eCommerceServiceFactory: ECommerceServiceFactory) {

        this.paymentProvider = eCommerceServiceFactory.createPaymentProvider();
        this.shippingService = eCommerceServiceFactory.createShippingService();
    }

    processPayment(accountNumber: string, amount: number): void {

        this.paymentProvider.processPayment(accountNumber, amount);
    }

    shipOrder(orderId: string): void {

        this.shippingService.shipOrder(orderId);
    }
}