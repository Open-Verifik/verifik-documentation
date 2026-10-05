---
id: "es-docs-es-accounts-authentication-renew-your-token-jwt"
title: "Renew Your Token (JWT) — Endpoint"
sourcePath: "docs-es/accounts/authentication/renew-your-token-jwt.mdx"
locale: "es"
category: "accounts"
tags:
  - "authentication"
  - "auth"
  - "accounts"
endpoint: "/v2/auth/session"
sourceAnchor: "Endpoint"
slug: "/accounts/authentication/renew-your-token-jwt"
url: "https://docs.verifik.co/verifik-es/accounts/authentication/renew-your-token-jwt"
---

# Renew Your Token (JWT)
**API path(s):** /v2/auth/session

## Endpoint

### Endpoint

```
https://api.verifik.co/v2/auth/session
```

This method renews the access token generated with other login endpoints, with a validity period of **30 days**. After this period, it is necessary to **generate** a new Access Token. The only parameter required for renewal is the previous token, as long as it has not expired. This service only renews tokens that are still valid.

### Headers

| Name         | Value              |
| -------------- | ------------------ |
| Authorization  | ``          |

### Parameters

| Name           | Type   | Required | Description                                    |
| ---------------- | ------ | --------- | ---------------------------------------------- |
| `origin`         | string | No        | Defines the action to perform with the token. In this case, the action will be "refresh". |
| `expiresIn`      | number | No        | Integer representing months: 1 = 1 month, 2 = 2 months, etc. |

### Request

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/auth/session',
  params: {origin: 'refresh', expiresIn: 120},
  headers: {
    Authorization: ''
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

### Response

  

```json
{
    "accessToken": "eyJhbGcpXVCJ9.eyJjbGllbnR...JZCIYiUzNjEaIWxYShWeBaRs",
    "tokenType": "bearer"
}
```
