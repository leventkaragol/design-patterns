import {ECommerceService} from "./ecommerce-service";
import {EUECommerceServiceFactory} from "./eu-ecommerce-service-factory";
import {USECommerceServiceFactory} from "./us-ecommerce-service-factory";

// Avrupa için Paypal ve DHL
const euECommerceService = new ECommerceService(new EUECommerceServiceFactory());
euECommerceService.processPayment("12345", 1200);
euECommerceService.shipOrder("112233");

// Amerika için Stripe ve Fedex
const usECommerceService = new ECommerceService(new USECommerceServiceFactory());
usECommerceService.processPayment("67890", 1800);
usECommerceService.shipOrder("445566");