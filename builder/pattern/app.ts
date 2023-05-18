import {EmailBuilder} from "./email-builder";

const email1 = new EmailBuilder()
    .setFrom("sender@test.com")
    .setTo(["receiver1@test.com"])
    .setSubject("Test Subject")
    .setBody("Test Body")
    .setSendingDate(new Date(2023, 5, 8))
    .build();

const email2 = new EmailBuilder()
    .setFrom("sender@test.com")
    .setTo(["receiver2@test.com"])
    .setBcc(["receiver4@test.com", "receiver5@test.com"])
    .setSubject("Test Subject")
    .setBody("Test Body")
    .setFormat("html")
    .build();

const email3 = new EmailBuilder()
    .setFrom("sender@test.com")
    .setTo(["receiver3@test.com"])
    .setSubject("Test Subject")
    .setBody("Test Body")
    .setReplyTo("no-reply@test.com")
    .setFormat("plain-text")
    .build();
