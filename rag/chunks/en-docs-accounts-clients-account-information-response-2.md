---
id: "en-docs-accounts-clients-account-information-response-2"
title: "Account Information — Response"
sourcePath: "docs/accounts/clients/account-information.mdx"
locale: "en"
category: "accounts"
tags:
  - "clients"
  - "accounts"
endpoints:
  - "/api/clients/me"
  - "/v2/clients/me"
sourceAnchor: "Response"
slug: "/accounts/clients/account-information"
url: "https://docs.verifik.co/accounts/clients/account-information"
---

# Account Information
**API path(s):** /api/clients/me, /v2/clients/me

## Response

```json
{
    "data": {
        "avatar": null,
        "initialIpAddress": null,
        "secretKey": null,
        "deletedAt": null,
        "_id": "613a3a48f2c84b454153add7",
        "active": true,
        "isEmailVerified": true,
        "isPhoneVerified": true,
        "isVerified": true,
        "otpSentAt": null,
        "requestsCount": 0,
        "subscriptionPlan": "61337217cbbb97a96877e984",
        "email": "jorgemanuel@verifik.co",
        "phone": "7809843183",
        "countryCode": "+1",
        "name": "JORGE MANUEL SANCHEZ",
        "updatedAt": "2025-03-12T17:37:13.526Z",
        "createdAt": "2021-09-09T16:46:01.334Z",
        "__v": 0,
        "totalRequestsCount": 1403,
        "credits": 114.03000000000034,
        "emailOTPCount": 0,
        "isBiometricVerified": false,
        "language": "es",
        "otp": "$2a$10$Q3wDasZgVWLuhEoYatVun.RBdItctOPNZ5lnXNWisZI0L.cFqM5b.",
        "phoneOTPCount": 0,
        "emailOTPSentAt": "2023-08-03T05:21:42.000Z",
        "status": "joined",
        "workSpace": "6647c29855503eb3e836449d",
        "clientSettings": "64cbd0717ae61d030ba39195",
        "JWTPhrase": "123456",
        "stripeCustomer": "cus_Q6iF3XDQgBQ8ZA",
        "clientSubscriptionPlan": {
            "projects": {
                "smartLinkLimit": 5,
                "smartAccessLimit": 5,
                "smartEnrollLimit": 5,
                "datAPILimit": 20,
                "globally": 20
            },
            "_id": "67c0d39dd4b3dec0fc4c81a7",
            "client": "613a3a48f2c84b454153add7",
            "name": "Plus",
            "subscriptionPlan": {
                "projects": {
                    "datAPILimit": 20,
                    "globally": 20,
                    "smartAccessLimit": 5,
                    "smartEnrollLimit": 5,
                    "smartLinkLimit": 5
                },
                "_id": "644f2a3ef19094d3b3f66b7f",
                "amount": 249,
                "trialDays": 0,
                "active": true,
                "visible": true,
                "name": "Plus",
                "code": "smart_check_plus_plan",
                "limit": 100,
                "interval": "month",
                "intervalCount": 1,
                "currency": "USD",
                "stripeProduct": "prod_Nlo8FqIrzIfTkS",
                "stripePrice": "price_1N0GWgFO6i3ofqGHOOUioaUt"
            },
            "stripeSubscription": "sub_1QxEGqFO6i3ofqGH0fyDzHNJ",
            "category": "credits",
            "code": "smart_check_plus_plan",
            "interval": "month",
            "intervalCount": 1,
            "active": true,
            "lastFour": "4242",
            "cardBrand": "visa",
            "cardExpMonth": "2",
            "cardExpYear": "2027",
            "startDate": "2025-02-27T21:05:28.000Z",
            "endDate": "2025-03-27T21:05:28.000Z",
            "autoRenew": true,
            "notes": "new subscription -> sub_1QxEGqFO6i3ofqGH0fyDzHNJ"
        },
        "person": null
    }
}
```

  
  

```json
{
    "error": "Unauthorized"
}
```

  
  

```json
{
    "error": "Forbidden"
}
```
