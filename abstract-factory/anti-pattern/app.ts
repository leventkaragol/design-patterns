import {PaymentProcessor} from "./payment-processor";
import {ShippingProcessor} from "./shipping-processor";

// Avrupa için Paypal ve DHL
PaymentProcessor.processPayment("PayPal", "12345", 1200);
ShippingProcessor.shipOrder("DHL", "112233")

// Amerika için Stripe ve Fedex
PaymentProcessor.processPayment("Stripe", "67890", 1800);
ShippingProcessor.shipOrder("Fedex", "445566")
