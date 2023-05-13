import {PaymentProcessor} from "./payment-processor";
import {PayPalFactory} from "./paypal-factory";
import {StripeFactory} from "./stripe-factory";

PaymentProcessor.processPayment(new PayPalFactory(), "12345", 1200);
PaymentProcessor.processPayment(new StripeFactory(), "67890", 1800);
