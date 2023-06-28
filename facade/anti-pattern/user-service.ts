export class UserService {
    getUserDetails(userId: string) {
        return {
            id: userId,
            name: "Esma Hanım",
            address: "İstanbul Merkez. PK: 34000"
        }
    }

    updateOrderHistory(userId: string, orderId: string): void {
        console.log(`${orderId} numaralı sipariş ${userId} kullanıcısının geçmişine işlendi`);
    }

    getOrderHistory(orderId: string) {

        return {
            orderId: orderId,
            paymentId: "ABC123",
            shippingId: "XYZ123",
            productId: "batarya01",
            quantity: 1,
            userId: "user01"
        };
    }
}