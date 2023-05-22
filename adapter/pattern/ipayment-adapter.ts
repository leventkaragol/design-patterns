export interface IPaymentAdapter {
    processPayment(accountCode: string, amount: number): void;
}
