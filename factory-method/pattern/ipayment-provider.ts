export interface IPaymentProvider {
    processPayment(accountNumber: string, amount: number): void;
}