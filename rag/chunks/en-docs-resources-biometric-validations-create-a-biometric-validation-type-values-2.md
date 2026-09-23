---
id: "en-docs-resources-biometric-validations-create-a-biometric-validation-type-values-2"
title: "Create a Biometric Validation — `type` Values"
sourcePath: "docs/resources/biometric-validations/create-a-biometric-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "biometric-validations"
  - "resources"
endpoint: "/v2/biometric-validations"
sourceAnchor: "`type` Values"
slug: "/resources/create-a-biometric-validation"
url: "https://docs.verifik.co/resources/create-a-biometric-validation"
---

# Create a Biometric Validation
**API path(s):** /v2/biometric-validations

## `type` Values

- `validation` - General biometric identity validation.
- `login` - Biometric verification during user authentication.
- `onboarding` - Biometric verification during user registration.

### Request

### Request

```javascript
const axios = require("axios");

const config = {
  method: "post",
  url: "https://api.verifik.co/v2/biometric-validations",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  data: {
    project: "project_123456789",
    projectFlow: "flow_123456789",
    identifier: "user@example.com",
    type: "validation",
    expiresAt: "2024-01-15T11:30:00Z",
    redirectUrl: "https://example.com/success",
    webhookUrl: "https://example.com/webhook",
    requires2FA: false,
    ipAddress: "192.168.1.1",
    sendViaEmail: true,
    email: "user@example.com",
    language: "en"
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

```python

url = "https://api.verifik.co/v2/biometric-validations"

payload = json.dumps({
  "project": "project_123456789",
  "projectFlow": "flow_123456789",
  "identifier": "user@example.com",
  "type": "validation",
  "expiresAt": "2024-01-15T11:30:00Z",
  "redirectUrl": "https://example.com/success",
  "webhookUrl": "https://example.com/webhook",
  "requires2FA": False,
  "ipAddress": "192.168.1.1",
  "sendViaEmail": True,
  "email": "user@example.com",
  "language": "en"
})

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
```

```php
 'https://api.verifik.co/v2/biometric-validations',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
    "project": "project_123456789",
    "projectFlow": "flow_123456789",
    "identifier": "user@example.com",
    "type": "validation",
    "expiresAt": "2024-01-15T11:30:00Z",
    "redirectUrl": "https://example.com/success",
    "webhookUrl": "https://example.com/webhook",
    "requires2FA": false,
    "ipAddress": "192.168.1.1",
    "sendViaEmail": true,
    "email": "user@example.com",
    "language": "en"
  }',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json',
    'Authorization: Bearer YOUR_ACCESS_TOKEN'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
?>
```

```go
package main

  "fmt"
  "strings"
  "net/http"
  "io/ioutil"
)

func main() {
  url := "https://api.verifik.co/v2/biometric-validations"
  
  payload := strings.NewReader(`{
    "project": "project_123456789",
    "projectFlow": "flow_123456789",
    "identifier": "user@example.com",
    "type": "validation",
    "expiresAt": "2024-01-15T11:30:00Z",
    "redirectUrl": "https://example.com/success",
    "webhookUrl": "https://example.com/webhook",
    "requires2FA": false,
    "ipAddress": "192.168.1.1",
    "sendViaEmail": true,
    "email": "user@example.com",
    "language": "en"
  }`)

  req, _ := http.NewRequest("POST", url, payload)

  req.Header.Add("Content-Type", "application/json")
  req.Header.Add("Authorization", "Bearer YOUR_ACCESS_TOKEN")

  res, _ := http.DefaultClient.Do(req)

  defer res.Body.Close()
  body, _ := ioutil.ReadAll(res.Body)

  fmt.Println(string(body))
}
```
