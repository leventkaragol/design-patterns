import {InventoryService} from "./inventory-service";
import {PaymentService} from "./payment-service";
import {ShippingService} from "./shipping-service";
import {UserService} from "./user-service";
import {NotificationService} from "./notification-service";

export class OrderFacade {

    private inventoryService: InventoryService;
    private paymentService: PaymentService;
    private shippingService: ShippingService;
    private userService: UserService;
    private notificationService: NotificationService;

    constructor() {
        this.inventoryService = new InventoryService();
        this.paymentService = new PaymentService();
        this.shippingService = new ShippingService();
        this.userService = new UserService();
        this.notificationService = new NotificationService();
    }

    placeOrder(userId: string, productId: string) {

        // Kullanıcı bilgilerini çekiyoruz
        const user = this.userService.getUserDetails(userId);

        // SİPARİŞ VERME İŞLEMİ
        // ----------------------

        // Stoktan ürün bilgisini çekiyoruz
        const product = this.inventoryService.getProduct(productId);

        // Stok durumunu kontrol ediyoruz
        if (product.stock > 0) {

            const shippingCost = this.shippingService.calculateShippingCost(user.address, product.weight);

            // Ödeme işlemini başlatıyoruz
            const paymentId = this.paymentService.initiatePayment(product.price + shippingCost);

            // Ödeme işlemi onaylanırsa
            if (this.paymentService.confirmPayment(paymentId)) {

                // Stoktan ürün düşülüyor
                this.inventoryService.decreaseStock(product.id, 1);

                // Kargo işlemi başlatılıyor
                const orderId = this.shippingService.initiateShipping(user.address, product.id);

                // Kullanıcı işlem geçmişine sipariş bilgisi ekleniyor
                this.userService.updateOrderHistory(user.id, orderId);

                // Kullanıcıya bildirim gönderiliyor
                this.notificationService.sendNotification(user.id, `${orderId} numaralı siparişiniz alınmıştır`);
            }
        }
    }

    cancelOrder(orderId: string) {

        // Sipariş geçmişi çekiliyor
        const order = this.userService.getOrderHistory(orderId);

        // Ödeme iptal ediliyor
        this.paymentService.cancelPayment(order.paymentId);

        // Stoktan ürün iade ediliyor
        this.inventoryService.increaseStock(order.productId, order.quantity);

        // Kargo iptal ediliyor
        this.shippingService.cancelShipping(order.orderId);

        // Kullanıcı işlem geçmişine sipariş iptal bilgisi ekleniyor
        this.userService.updateOrderHistory(order.userId, "CANCEL-XYZ123");

        // Kullanıcıya bildirim gönderiliyor
        this.notificationService.sendNotification(order.userId, "Siparişiniz iptal edilmiştir");
    }
}