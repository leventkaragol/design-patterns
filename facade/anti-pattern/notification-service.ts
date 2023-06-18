export class NotificationService {
    sendNotification(userId: string, message: string) {
        console.log(`${userId} kullanıcısına "${message}" mesajı gönderildi`);
    }
}