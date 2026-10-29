---
id: "en-docs-resources-app-registrations-create-an-app-registration-biometric-validat-endpoint"
title: "Create an App Registration Biometric Validation — Endpoint"
sourcePath: "docs/resources/app-registrations/create-an-app-registration-biometric-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "biometric-validations"
  - "resources"
endpoints:
  - "/api/biometric-validations/app-registration"
  - "/v2/biometric-validations/app-registration"
sourceAnchor: "Endpoint"
---

# Create an App Registration Biometric Validation
**API path(s):** /api/biometric-validations/app-registration, /v2/biometric-validations/app-registration

## Endpoint

```
POST https://api.verifik.co/v2/biometric-validations/app-registration
```

A Biometric Validation is an instance within Verifik's system that allows you to process and validate user identities through facial recognition and liveness detection during the onboarding process. This process ensures the authenticity of users by verifying their unique biometric characteristics through advanced security technology. This endpoint is specifically designed for users who are in the middle of an app registration flow.

:::warning
The JWT Token you should use when creating `App Registration Biometric Validations` is provided from the `App Registration` in creation. You must use the token returned when creating an [App Registration](/resources/app-registrations/create-an-app-registration) to authenticate this request.
:::

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Params

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `image` | string | Yes | Base64 encoded facial image that will be used for biometric validation and liveness detection. The image should be in data URI format (e.g., `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...`) |
| `os` | string | Yes | Operating system of the device. Valid values: `DESKTOP`, `IOS`, `ANDROID` |
| `force` | boolean | No | Optional flag to force creation even if a person already exists. Defaults to `false`. When set to `true`, this will override existing person records if needed |

### Request

  

```javascript
const fetch = require("node-fetch");

async function run() {
  const res = await fetch("https://api.verifik.co/v2/biometric-validations/app-registration", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
    },
    body: JSON.stringify({
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
      os: "DESKTOP"
    }),
  });
  console.log(await res.json());
}

run();
```

  
  

```php
 "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
    "os" => "DESKTOP"
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/biometric-validations/app-registration"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
payload = {
    "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
    "os": "DESKTOP"
}
r = requests.post(url, json=payload, headers=headers)
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
    payload := map[string]interface{}{
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
        "os": "DESKTOP",
    }
    b, _ := json.Marshal(payload)
    req, _ := http.NewRequest("POST", "https://api.verifik.co/v2/biometric-validations/app-registration", bytes.NewBuffer(b))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
