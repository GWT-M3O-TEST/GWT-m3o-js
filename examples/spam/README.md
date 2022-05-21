# Spam

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Spam/api](https://m3o.com/Spam/api).

Endpoints:

## Classify

Check whether an email is likely to be spam based on its attributes

[https://m3o.com/spam/api#Classify](https://m3o.com/spam/api#Classify)

```js
const { SpamService } = require("m3o/spam");

const spamService = new SpamService(process.env.M3O_API_TOKEN);

// Check whether an email is likely to be spam based on its attributes
async function classifyAnEmail() {
  const rsp = await spamService.classify({
    from: "noreply@m3o.com",
    subject: "Welcome",
    text_body: "Hi there,\n\nWelcome to M3O.\n\nThanks\nM3O team",
    to: "hello@example.com",
  });
  console.log(rsp);
}

classifyAnEmail();
```

## Classify

Check whether an email is likely to be spam based on its attributes

[https://m3o.com/spam/api#Classify](https://m3o.com/spam/api#Classify)

```js
const { SpamService } = require("m3o/spam");

const spamService = new SpamService(process.env.M3O_API_TOKEN);

// Check whether an email is likely to be spam based on its attributes
async function classifyAnEmailUsingTheRawData() {
  const rsp = await spamService.classify({
    email_body:
      "Subject: Welcome\r\nTo: hello@emaple.com\r\nFrom: noreply@m3o.com\r\n\r\nHi there,\n\nWelcome to M3O.\n\nThanks\nM3O team",
  });
  console.log(rsp);
}

classifyAnEmailUsingTheRawData();
```
