export class NotificationService {
    sendNotification(userId: string, message: string): void {
        console.log(`${userId} kullanıcısına "${message}" mesajı gönderildi`);
    }
}