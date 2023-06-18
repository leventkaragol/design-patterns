export class InventoryService {
    getProduct(productId: string) {

        return {
            id: productId,
            stock: 10,
            weight: 5,
            price: 100
        };
    }

    increaseStock(productId: string, quantity: number) {
        console.log(`${productId} ürününün stok adedi ${quantity} arttırıldı`);
    }

    decreaseStock(productId: string, quantity: number) {
        console.log(`${productId} ürününün stok adedi ${quantity} azaltıldı`);
    }
}