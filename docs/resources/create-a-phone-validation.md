---
id: create-a-phone-validation
title: Create a Phone Validation
description: Create a new phone validation request
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create a Phone Validation

**POST** `https://api.verifik.co/v2/phone-validations`

A Phone Validation is an instance within Verifik's system that allows you to process and validate phone numbers during authentication and registration processes. This process ensures the authenticity of user phone numbers and provides secure verification through SMS or WhatsApp delivery methods.

## Headers

| Name         | Value              |
| ------------ | ------------------ |
| Content-Type | `application/json` |

## Body

| Name               | Type    | Required | Description                                                                                                 |
| ------------------ | ------- | -------- | ----------------------------------------------------------------------------------------------------------- |
| `project`          | string  | **Yes**  | The unique identifier for the project where this phone validation will be used.                             |
| `validationMethod` | string  | **Yes**  | The validation method, set to `verificationCode`.                                                           |
| `phone`            | string  | **Yes**  | The phone number that will be validated (spaces will be automatically removed).                             |
| `countryCode`      | string  | **Yes**  | The country code of the phone number in format `+XXX` (e.g., `+507` for Panama).                           |
| `type`             | string  | **Yes**  | Type of validation: `validation`, `login`, `onboarding`, or `oneTimeLink`.                                |
| `expiresAt`        | string  | No       | Optional expiration date for the validation code.                                                           |
| `redirectUrl`      | string  | No       | Optional URL for redirect after validation.                                                                 |
| `webhookUrl`       | string  | No       | Optional webhook URL for validation notifications.                                                          |
| `identityUrl`      | string  | No       | Optional identity verification URL.                                                                         |
| `requires2FA`      | boolean | No       | Optional flag indicating if two-factor authentication is required.                                          |
| `ipAddress`        | string  | No       | Optional IP address of the user.                                                                            |

## `validationMethod` Values

| Value              | Description                                                           |
| ------------------ | --------------------------------------------------------------------- |
| `verificationCode` | Sends a one-time password (OTP) to the phone number for verification. |
| `manual`           | Manual verification process without OTP.                              |

## `type` Values

| Value        | Description                                                                                                                                                                                                                  |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `validation` | General phone number validation.                                                                                                                                                                                             |
| `login`      | Phone verification during user login.                                                                                                                                                                                        |
| `onboarding` | Phone verification during user registration. For onboarding - you must use create-an-app-registration-phone-validation |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "post",
  url: "https://api.verifik.co/v2/phone-validations",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  data: {
    project: "project_123456789",
    validationMethod: "verificationCode",
    phone: "1234567890",
    countryCode: "+1",
    type: "validation",
    expiresAt: "2024-01-15T11:30:00Z",
    redirectUrl: "https://example.com/success",
    webhookUrl: "https://example.com/webhook",
    requires2FA: false,
    ipAddress: "192.168.1.1"
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

## Response

<Tabs>
  <TabItem value="200" label="200">

```json
{
  "success": true,
  "data": {
    "_id": "phone_validation_123456789",
    "client": "client_123456789",
    "project": "project_123456789",
    "projectFlow": "flow_123456789",
    "status": "sent",
    "countryCode": "+1",
    "phone": "1234567890",
    "type": "validation",
    "validationMethod": "verificationCode",
    "verificationCode": "123456",
    "expiresAt": "2024-01-15T11:30:00Z",
    "redirectUrl": "https://example.com/success",
    "webhookUrl": "https://example.com/webhook",
    "requires2FA": false,
    "ipAddress": "192.168.1.1",
    "attempts": 0,
    "maxAttempts": 3,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  },
  "signature": {
    "dateTime": "April 11, 2023 12:25 PM",
    "message": "Certified by Verifik.co"
  }
}
```

  </TabItem>
  <TabItem value="400" label="400">

```json
{
  "success": false,
  "error": "Invalid phone number",
  "code": "INVALID_PHONE"
}
```

  </TabItem>
</Tabs>

## Features

- **Validation Creation**: Creates new phone validations with complete configuration
- **Multiple Methods**: Support for verification codes and manual verification
- **Validation Types**: Standard validation, login, onboarding and unique links
- **Country Codes**: Support for international country codes
- **Advanced Configuration**: Redirect URLs, webhooks and two-factor authentication
- **Security**: Attempt control, expiration and abuse prevention
- **Multiple Languages**: Support for JavaScript, Python, PHP and Swift
- **Error Handling**: Detailed error responses for different scenarios
