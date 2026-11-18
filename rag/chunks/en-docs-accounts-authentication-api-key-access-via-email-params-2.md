---
id: "en-docs-accounts-authentication-api-key-access-via-email-params-2"
title: "API Key Access via Email — Params"
sourcePath: "docs/accounts/authentication/api-key-access-via-email.mdx"
locale: "en"
category: "accounts"
tags:
  - "authentication"
  - "projects"
  - "accounts"
endpoints:
  - "/api/projects/email-login"
  - "/v2/projects/email-login"
sourceAnchor: "Params"
slug: "/accounts/authentication/api-key-access-via-email"
url: "https://docs.verifik.co/accounts/authentication/api-key-access-via-email"
---

# API Key Access via Email
**API path(s):** /api/projects/email-login, /v2/projects/email-login

## Params

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | string | Yes | Email used in the OTP request. |
| `otp` | string | Yes | OTP received by email. |

### Request

  

```javascript

const { data } = await axios.post("https://api.verifik.co/v2/projects/email-login/confirm", { email: "user@example.com", otp: "123456" }, { headers: { Accept: "application/json" } });
console.log(data);
```

  
  

```php
"user@example.com", "otp"=>"123456"]));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

r = requests.post("https://api.verifik.co/v2/projects/email-login/confirm", json={"email": "user@example.com", "otp": "123456"}, headers={"Accept": "application/json"})
print(r.json())
```

  
  

```go
package main

func main() {
    body := bytes.NewBufferString(`{"email":"user@example.com","otp":"123456"}`)
    req, _ := http.NewRequest("POST", "https://api.verifik.co/v2/projects/email-login/confirm", body)
    req.Header.Set("Accept", "application/json")
    req.Header.Set("Content-Type", "application/json")
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    fmt.Println(resp.Status)
}
```

### Response

  

```json
{
  "data": {
    "accessToken": "",
    "tokenType": "bearer"
  }
}
```

  
  

```json
{
  "message": "invalid_otp",
  "code": "ERROR"
}
```
