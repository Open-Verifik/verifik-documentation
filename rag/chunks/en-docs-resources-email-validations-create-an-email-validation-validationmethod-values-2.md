---
id: "en-docs-resources-email-validations-create-an-email-validation-validationmethod-values-2"
title: "Create an Email Validation — `validationMethod` Values"
sourcePath: "docs/resources/email-validations/create-an-email-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "email-validations"
  - "resources"
endpoint: "/v2/email-validations"
sourceAnchor: "`validationMethod` Values"
slug: "/resources/create-an-email-validation"
url: "https://docs.verifik.co/resources/create-an-email-validation"
---

# Create an Email Validation
**API path(s):** /v2/email-validations

## `validationMethod` Values

| Value              | Description                                                            |
| ------------------ | ---------------------------------------------------------------------- |
| `verificationCode` | Sends a 6-digit OTP code to the email address                        |
| `oneTimeLink`      | Sends a single-use link to the email address                          |

### Request

  

```javascript

const options = {
  method: 'POST',
  url: 'https://api.verifik.co/v2/email-validations',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '
  },
  data: {
    project: 'project_123456789',
    validationMethod: 'verificationCode',
    email: 'user@example.com',
    type: 'validation',
    expiresAt: '2024-01-15T11:30:00Z',
    redirectUrl: 'https://example.com/success',
    webhookUrl: 'https://example.com/webhook',
    requires2FA: false,
    ipAddress: '192.168.1.1'
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

  
  

```python

conn = http.client.HTTPSConnection("api.verifik.co")

payload = json.dumps({
  "project": "project_123456789",
  "validationMethod": "verificationCode",
  "email": "user@example.com",
  "type": "validation",
  "expiresAt": "2024-01-15T11:30:00Z",
  "redirectUrl": "https://example.com/success",
  "webhookUrl": "https://example.com/webhook",
  "requires2FA": False,
  "ipAddress": "192.168.1.1"
})

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer '
}

conn.request("POST", "/v2/email-validations", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('POST', 'https://api.verifik.co/v2/email-validations', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer ',
  ],
  'json' => [
    'project' => 'project_123456789',
    'validationMethod' => 'verificationCode',
    'email' => 'user@example.com',
    'type' => 'validation',
    'expiresAt' => '2024-01-15T11:30:00Z',
    'redirectUrl' => 'https://example.com/success',
    'webhookUrl' => 'https://example.com/webhook',
    'requires2FA' => false,
    'ipAddress' => '192.168.1.1'
  ]
]);

echo $response->getBody();
```

  
  

```go
package main

	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

func main() {
	url := "https://api.verifik.co/v2/email-validations"

	payload := map[string]interface{}{
		"project":          "project_123456789",
		"validationMethod": "verificationCode",
		"email":            "user@example.com",
		"type":             "validation",
		"expiresAt":        "2024-01-15T11:30:00Z",
		"redirectUrl":      "https://example.com/success",
		"webhookUrl":       "https://example.com/webhook",
		"requires2FA":      false,
		"ipAddress":        "192.168.1.1",
	}

	jsonData, _ := json.Marshal(payload)

	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
	req.Header.Add("Content-Type", "application/json")
	req.Header.Add("Authorization", "Bearer ")

	client := &http.Client{}
	res, _ := client.Do(req)
	defer res.Body.Close()

	body, _ := io.ReadAll(res.Body)
	fmt.Println(string(body))
}
```
