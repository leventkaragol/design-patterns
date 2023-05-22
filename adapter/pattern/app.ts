import {PaymentProcessor} from "./payment-processor";
import {PaypalAdapter} from "./paypal-adapter";
import {AmazonPayAdapter} from "./amazon-pay-adapter";
import {PayPalService} from "./paypal-service";
import {AmazonPayService} from "./amazon-pay-service";

let paymentProcessor = new PaymentProcessor();
let paypalAdapter = new PaypalAdapter(new PayPalService());
let amazonPayAdapter = new AmazonPayAdapter(new AmazonPayService());

// Paypal ile ödeme işlemi
paymentProcessor.executePayment("ACC123", 100, paypalAdapter);

// Amazon Pay ile ödeme işlemi
paymentProcessor.executePayment("ACC456", 200, amazonPayAdapter);
