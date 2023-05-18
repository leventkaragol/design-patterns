import {Email} from "./email";

const email1 = new Email(
    "sender@test.com",
    ["receiver1@test.com"],
    [],
    [],
    "Test Subject",
    "Test Body",
    undefined,
    undefined,
    new Date(2023, 5, 8)
);

const email2 = new Email(
    "sender@test.com",
    ["receiver2@test.com"],
    [],
    ["receiver4@test.com", "receiver5@test.com"],
    "Test Subject",
    "Test Body",
    undefined,
    undefined,
    null,
    "html"
);

const email3 = new Email(
    "sender@test.com",
    ["receiver1@test.com"],
    [],
    [],
    "Test Subject",
    "Test Body",
    undefined,
    "no-reply@test.com",
    null,
    "plain-text"
);
