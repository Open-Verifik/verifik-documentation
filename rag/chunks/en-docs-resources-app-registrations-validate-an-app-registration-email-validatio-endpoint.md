---
id: "en-docs-resources-app-registrations-validate-an-app-registration-email-validatio-endpoint"
title: "Validate an App Registration Email Validation — Endpoint"
sourcePath: "docs/resources/app-registrations/validate-an-app-registration-email-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "email-validations"
  - "resources"
endpoints:
  - "/v2/email-validations/${emailvalidationid}"
  - "/v2/email-validations/%s"
  - "/v2/email-validations/{email_validation_id}"
  - "/v2/email-validations/{id}"
sourceAnchor: "Endpoint"
---

# Validate an App Registration Email Validation
**API path(s):** /v2/email-validations/${emailvalidationid}, /v2/email-validations/%s, /v2/email-validations/{email_validation_id}, /v2/email-validations/{id}

## Endpoint

```
PUT https://api.verifik.co/v2/email-validations/{id}
```

This endpoint validates a one-time password (OTP) sent to a user's email address during the onboarding (app registration) process. It ensures the user-provided OTP is correct and updates the verification status accordingly. This route is specifically designed for users who are in the middle of an app registration flow.

:::warning
The JWT Token you should use when validating `Onboarding Email Validations` is provided from the `App Registration` in creation. You must use the token returned when creating an [App Registration](/resources/app-registrations/create-an-app-registration) to authenticate this request.
:::

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Params

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | Yes | The unique identifier of the Email Validation you want to validate. This is the `_id` returned when creating the email validation |
| `email` | string | Yes | The email address that was used to create the email validation. Spaces will be automatically removed and converted to lowercase |
| `otp` | number | Yes | The one-time password (OTP) that was sent to the user's email address |

### Request

  

```javascript
const fetch = require("node-fetch");

async function run() {
  const emailValidationId = "674de8df21c72be3cc42b8a7";
  const res = await fetch(`https://api.verifik.co/v2/email-validations/${emailValidationId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
    },
    body: JSON.stringify({
      email: "user@example.com",
      otp: 123456
    }),
  });
  console.log(await res.json());
}

run();
```

  
  

```php
 "user@example.com",
    "otp" => 123456
]);
curl_setopt($ch, CURLOPT_PUT, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

email_validation_id = "674de8df21c72be3cc42b8a7"
url = f"https://api.verifik.co/v2/email-validations/{email_validation_id}"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
payload = {
    "email": "user@example.com",
    "otp": 123456
}
r = requests.put(url, json=payload, headers=headers)
print(r.json())
```

  
  

```go
package main

    "bytes"
    "encoding/json"
    "fmt"
    "net/http"
    "os"
)

func main() {
    emailValidationId := "674de8df21c72be3cc42b8a7"
    url := fmt.Sprintf("https://api.verifik.co/v2/email-validations/%s", emailValidationId)
    payload := map[string]interface{}{
        "email": "user@example.com",
        "otp": 123456,
    }
    b, _ := json.Marshal(payload)
    req, _ := http.NewRequest("PUT", url, bytes.NewBuffer(b))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
