export class Email {
    constructor(
        public from: string,
        public to: string[],
        public cc: string[],
        public bcc: string[],
        public subject: string,
        public body: string,
        public attachments?: string[],
        public replyTo?: string,
        public sendingDate?: Date | null,
        public format?: string,
    ) {
    }
}