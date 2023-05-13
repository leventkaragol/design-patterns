import {IPaymentProvider} from "./ipayment-provider";

export interface IPaymentProviderFactory {
    createPaymentProvider(): IPaymentProvider;
}