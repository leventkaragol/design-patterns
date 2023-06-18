import {InventoryService} from "./inventory-service";
import {PaymentService} from "./payment-service";
import {ShippingService} from "./shipping-service";
import {UserService} from "./user-service";
import {NotificationService} from "./notification-service";

const inventoryService = new InventoryService();
const paymentService = new PaymentService();
const shippingService = new ShippingService();
const userService = new UserService();
const notificationService = new NotificationService();

// Kullanıcı bilgilerini çekiyoruz
const user = userService.getUserDetails("user01");

// SİPARİŞ VERME İŞLEMİ
// ----------------------

// Stoktan ürün bilgisini çekiyoruz
const product = inventoryService.getProduct("batarya01");

// Stok durumunu kontrol ediyoruz
if (product.stock > 0) {

    const shippingCost = shippingService.calculateShippingCost(user.address, product.weight);

    // Ödeme işlemini başlatıyoruz
    const paymentId = paymentService.initiatePayment(product.price + shippingCost);

    // Ödeme işlemi onaylanırsa
    if (paymentService.confirmPayment(paymentId)) {

        // Stoktan ürün düşülüyor
        inventoryService.decreaseStock(product.id, 1);

        // Kargo işlemi başlatılıyor
        const orderId = shippingService.initiateShipping(user.address, product.id);

        // Kullanıcı işlem geçmişine sipariş bilgisi ekleniyor
        userService.updateOrderHistory(user.id, orderId);

        // Kullanıcıya bildirim gönderiliyor
        notificationService.sendNotification(user.id, `${orderId} numaralı siparişiniz alınmıştır`);
    }
}


console.log();


// SİPARİŞ İPTAL İŞLEMİ
// ----------------------

// Sipariş geçmişi çekiliyor
const order = userService.getOrderHistory("XYZ123");

// Ödeme iptal ediliyor
paymentService.cancelPayment(order.paymentId);

// Stoktan ürün iade ediliyor
inventoryService.increaseStock(order.productId, order.quantity);

// Kargo iptal ediliyor
shippingService.cancelShipping(order.orderId);

// Kullanıcı işlem geçmişine sipariş iptal bilgisi ekleniyor
userService.updateOrderHistory(order.userId, "CANCEL-XYZ123");

// Kullanıcıya bildirim gönderiliyor
notificationService.sendNotification(order.userId, "Siparişiniz iptal edilmiştir");
