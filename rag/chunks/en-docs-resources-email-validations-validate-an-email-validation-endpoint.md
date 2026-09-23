---
id: "en-docs-resources-email-validations-validate-an-email-validation-endpoint"
title: "Validate an Email Validation — Endpoint"
sourcePath: "docs/resources/email-validations/validate-an-email-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "email-validations"
  - "resources"
endpoints:
  - "/v2/email-validations/email_validation_123456789/validate"
  - "/v2/email-validations/{id}/validate"
sourceAnchor: "Endpoint"
slug: "/resources/validate-an-email-validation"
url: "https://docs.verifik.co/resources/validate-an-email-validation"
---

# Validate an Email Validation
**API path(s):** /v2/email-validations/email_validation_123456789/validate, /v2/email-validations/{id}/validate

## Endpoint

```
POST https://api.verifik.co/v2/email-validations/{id}/validate
```

This service validates an email validation by providing the verification code. The system will check the code against the stored verification code and update the validation status accordingly.

#### Headers

#### `Content-Type`

**Type:** String  
**Required:** Required  
**Value:** `application/json`

#### `Authorization`

**Type:** String  
**Required:** Required  
**Value:** `Bearer {YOUR_ACCESS_TOKEN}`

#### Path Parameters

#### `id`

**Type:** String  
**Required:** Yes

The unique identifier of the email validation record you want to validate.

#### Body Parameters

#### `verificationCode`

**Type:** String  
**Required:** Yes

The verification code received via email.

### Request

  

```javascript

const options = {
  method: 'POST',
  url: 'https://api.verifik.co/v2/email-validations/email_validation_123456789/validate',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '
  },
  data: {
    verificationCode: '123456'
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
  "verificationCode": "123456"
})

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer '
}

conn.request("POST", "/v2/email-validations/email_validation_123456789/validate", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('POST', 'https://api.verifik.co/v2/email-validations/email_validation_123456789/validate', [
  'headers' => [
    'Content-Type': 'application/json',
    'Authorization' => 'Bearer ',
  ],
  'json' => [
    'verificationCode' => '123456'
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
	url := "https://api.verifik.co/v2/email-validations/email_validation_123456789/validate"

	payload := map[string]interface{}{
		"verificationCode": "123456",
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
