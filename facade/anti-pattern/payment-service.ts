export class PaymentService {
    initiatePayment(amount: number): string {
        console.log(`${amount} TL tutarında ödeme işlemi başlatıldı, talep kodu ABC123`);

        return "ABC123"
    }

    confirmPayment(paymentId: string): boolean {
        console.log(`${paymentId} kodlu ödeme işlemi onaylandı`);

        return true;
    }

    cancelPayment(paymentId: string): boolean {
        console.log(`${paymentId} kodlu ödeme işlemi iptal edildi`);

        return true;
    }
}