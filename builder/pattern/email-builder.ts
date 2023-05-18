import {Email} from "./email";

export class EmailBuilder {
    private from: string = "";
    private to: string[] = [];
    private cc: string[] = [];
    private bcc: string[] = [];
    private subject: string = "";
    private body: string = "";
    private attachments?: string[];
    private replyTo?: string;
    private sendingDate?: Date | null;
    private format?: string;

    setFrom(from: string): EmailBuilder {
        this.from = from;
        return this;
    }

    setTo(to: string[]): EmailBuilder {
        this.to = to;
        return this;
    }

    setCc(cc: string[]): EmailBuilder {
        this.cc = cc;
        return this;
    }

    setBcc(bcc: string[]): EmailBuilder {
        this.bcc = bcc;
        return this;
    }

    setSubject(subject: string): EmailBuilder {
        this.subject = subject;
        return this;
    }

    setBody(body: string): EmailBuilder {
        this.body = body;
        return this;
    }

    setAttachments(attachments: string[]): EmailBuilder {
        this.attachments = attachments;
        return this;
    }

    setReplyTo(replyTo: string): EmailBuilder {
        this.replyTo = replyTo;
        return this;
    }

    setSendingDate(sendingDate: Date): EmailBuilder {
        this.sendingDate = sendingDate;
        return this;
    }

    setFormat(format: string): EmailBuilder {
        this.format = format;
        return this;
    }

    build(): Email {
        return new Email(this.from, this.to, this.cc, this.bcc, this.subject, this.body, this.attachments, this.replyTo, this.sendingDate, this.format);
    }
}