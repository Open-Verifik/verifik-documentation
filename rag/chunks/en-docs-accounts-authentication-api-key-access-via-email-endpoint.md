---
id: "en-docs-accounts-authentication-api-key-access-via-email-endpoint"
title: "API Key Access via Email — Endpoint"
sourcePath: "docs/accounts/authentication/api-key-access-via-email.mdx"
locale: "en"
category: "accounts"
tags:
  - "authentication"
  - "projects"
  - "accounts"
endpoints:
  - "/v2/projects/email-login"
  - "/v2/projects/email-login/confirm"
  - "/v2/projects/email-login?email=user@example.com"
sourceAnchor: "Endpoint"
slug: "/accounts/authentication/api-key-access-via-email"
url: "https://docs.verifik.co/accounts/authentication/api-key-access-via-email"
---

# API Key Access via Email
**API path(s):** /v2/projects/email-login, /v2/projects/email-login/confirm, /v2/projects/email-login?email=user@example.com

## Endpoint

```
https://api.verifik.co/v2/projects/email-login
```

Request an OTP to be sent to a registered client email.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |

### Params

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | string | Yes | Client email to receive the OTP. |

### Request

  

```javascript

const { data } = await axios.post("https://api.verifik.co/v2/projects/email-login", null, {
  params: { email: "user@example.com" },
  headers: { Accept: "application/json" },
});
console.log(data);
```

  
  

```php

  

```python

r = requests.post("https://api.verifik.co/v2/projects/email-login", params={"email": "user@example.com"}, headers={"Accept": "application/json"})
print(r.json())
```

  
  

```go
package main

func main() {
    url := "https://api.verifik.co/v2/projects/email-login?email=user@example.com"
    req, _ := http.NewRequest("POST", url, nil)
    req.Header.Set("Accept", "application/json")
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    fmt.Println(resp.Status)
}
```

### Response

  

```json
{
  "data": {
    "status": "sent",
    "email": "user@example.com",
    "expiresAt": "2025-06-13T17:24:58.000Z"
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "January 16, 2024 3:44 PM"},
  "id": "EML01"
}
```

  
  

```json
{
  "code": "NotFound",
  "message": "invalid_email"
}
```

  

---

### Endpoint

```
https://api.verifik.co/v2/projects/email-login/confirm
```

Confirm the OTP and obtain a JWT access token.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
