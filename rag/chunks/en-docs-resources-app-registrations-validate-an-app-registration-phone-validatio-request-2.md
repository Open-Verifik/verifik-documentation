---
id: "en-docs-resources-app-registrations-validate-an-app-registration-phone-validatio-request-2"
title: "Validate an App Registration Phone Validation — Request"
sourcePath: "docs/resources/app-registrations/validate-an-app-registration-phone-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "phone-validations"
  - "resources"
endpoints:
  - "/api/phone-validations"
  - "/v2/phone-validations"
sourceAnchor: "Request"
---

# Validate an App Registration Phone Validation
**API path(s):** /api/phone-validations, /v2/phone-validations

## Request

```javascript
const fetch = require("node-fetch");

async function run() {
  const res = await fetch("https://api.verifik.co/v2/phone-validations", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
    },
    body: JSON.stringify({
      phone: "62647737",
      countryCode: "+507",
      otp: 123456
    }),
  });
  console.log(await res.json());
}

run();
```

  
  

```php
 "62647737",
    "countryCode" => "+507",
    "otp" => 123456
]);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/phone-validations"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
payload = {
    "phone": "62647737",
    "countryCode": "+507",
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
    url := "https://api.verifik.co/v2/phone-validations"
    payload := map[string]interface{}{
        "phone": "62647737",
        "countryCode": "+507",
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
