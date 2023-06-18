export class ShippingService {
    calculateShippingCost(address: string, weight: number) {
        // Temsili kargo ücreti
        return 4 * weight;
    }

    initiateShipping(address: string, productId: string) {
        console.log(`${address} adresine ${productId} kodlu ürünün kargosu başlatıldı, sipariş kodu: XYZ123`);

        return "XYZ123";
    }

    cancelShipping(orderId: string) {
        console.log(`${orderId} numaralı siparişin kargolaması iptal edildi`);
    }
}