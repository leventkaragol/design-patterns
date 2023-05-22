import {PaymentProcessor} from "./payment-processor";

let paymentProcessor = new PaymentProcessor();

// Paypal ile ödeme işlemi
paymentProcessor.executePayment("ACC123", 100, "paypal");

// Amazon Pay ile ödeme işlemi
paymentProcessor.executePayment("ACC456", 200, "amazonpay");
