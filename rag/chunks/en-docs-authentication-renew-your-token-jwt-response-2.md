---
id: "en-docs-authentication-renew-your-token-jwt-response-2"
title: "Renew your token (JWT) — Response"
sourcePath: "docs/authentication/renew-your-token-jwt.mdx"
locale: "en"
category: "authentication"
tags:
  - "authentication"
  - "auth"
endpoints:
  - "/v2/auth/session"
  - "/v2/auth/session?origin=refresh&expiresin=120"
sourceAnchor: "Response"
slug: "/authentication/renew-your-token-jwt"
url: "https://docs.verifik.co/authentication/renew-your-token-jwt"
---

# Renew your token (JWT)
**API path(s):** /v2/auth/session, /v2/auth/session?origin=refresh&expiresin=120

## Response

```json
{
    "accessToken": "eyJhbGcpXVCJ9.eyJjbGllbnR...JZCIYiUzNjEaIWxYShWeBaRs",
    "tokenType": "bearer"
}
```

  
  

```json
{
    "code": "Unauthorized",
    "message": "Invalid or expired token.",
    "signature": {
        "dateTime": "August 31, 2022 3:24 PM",
        "message": "Certified by Verifik.co"
    }
}
```

  
  

```json
{
    "code": "MissingParameter",
    "message": "missing Authorization header"
}
```

### Features

-   **Token Renewal**: Renew access tokens to extend their validity period
-   **30-Day Validity**: Extended tokens remain valid for 30 days
-   **Simple Process**: Only requires the existing valid token
-   **Structured Response**: Organized data format for easy integration
-   **Multiple Programming Languages**: Support for JavaScript, Python, PHP, and Swift
-   **Error Handling**: Comprehensive error responses for various scenarios
