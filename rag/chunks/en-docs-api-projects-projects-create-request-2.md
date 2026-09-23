---
id: "en-docs-api-projects-projects-create-request-2"
title: "Create Project — Request"
sourcePath: "docs/api/projects/projects-create.mdx"
locale: "en"
category: "api"
tags:
  - "api"
endpoint: "/v3/projects"
sourceAnchor: "Request"
slug: "/api/projects/projects-create"
url: "https://docs.verifik.co/api/projects/projects-create"
---

# Create Project
**API path(s):** /v3/projects

## Request

```javascript
const fetch = require("node-fetch");

async function run() {
  const res = await fetch("https://api.verifik.co/v3/projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
    },
    body: JSON.stringify({
      name: "My KYC Project",
      allowedCountries: ["United States"],
      contactEmail: "admin@example.com",
      privacyUrl: "https://example.com/privacy",
      termsAndConditionsUrl: "https://example.com/terms",
      dataProtection: {
        name: "John Doe",
        email: "dpo@example.com",
        address: "123 Main St",
        city: "New York",
        country: "United States",
        postalCode: "10001"
      }
    }),
  });
  console.log(await res.json());
}

run();
```

  
  

```php
 "My KYC Project",
    "allowedCountries" => ["United States"],
    "contactEmail" => "admin@example.com",
    "privacyUrl" => "https://example.com/privacy",
    "termsAndConditionsUrl" => "https://example.com/terms",
    "dataProtection" => [
        "name" => "John Doe",
        "email" => "dpo@example.com",
        "address" => "123 Main St",
        "city" => "New York",
        "country" => "United States",
        "postalCode" => "10001"
    ]
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v3/projects"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
payload = {
    "name": "My KYC Project",
    "allowedCountries": ["United States"],
    "contactEmail": "admin@example.com",
    "privacyUrl": "https://example.com/privacy",
    "termsAndConditionsUrl": "https://example.com/terms",
    "dataProtection": {
        "name": "John Doe",
        "email": "dpo@example.com",
        "address": "123 Main St",
        "city": "New York",
        "country": "United States",
        "postalCode": "10001"
    }
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
        "name": "My KYC Project",
        "allowedCountries": []string{"United States"},
        "contactEmail": "admin@example.com",
        "privacyUrl": "https://example.com/privacy",
        "termsAndConditionsUrl": "https://example.com/terms",
        "dataProtection": map[string]string{
            "name": "John Doe",
            "email": "dpo@example.com",
            "address": "123 Main St",
            "city": "New York",
            "country": "United States",
            "postalCode": "10001",
        },
    }
    b, _ := json.Marshal(payload)
    req, _ := http.NewRequest("POST", "https://api.verifik.co/v3/projects", bytes.NewBuffer(b))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
