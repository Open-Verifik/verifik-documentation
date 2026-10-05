---
id: "es-docs-es-resources-validaciones-email-crear-una-validacion-email-valores-de-validationmethod-2"
title: "Crear una Validación de Email — Valores de `validationMethod`"
sourcePath: "docs-es/resources/validaciones-email/crear-una-validacion-email.mdx"
locale: "es"
category: "resources"
tags:
  - "email-validations"
  - "resources"
endpoint: "/v2/email-validations"
sourceAnchor: "Valores de `validationMethod`"
slug: "/resources/crear-una-validacion-email"
url: "https://docs.verifik.co/verifik-es/resources/crear-una-validacion-email"
---

# Crear una Validación de Email
**API path(s):** /v2/email-validations

## Valores de `validationMethod`

| Valor              | Descripción                                              |
| ------------------ | -------------------------------------------------------- |
| `verificationCode` | Envía un código OTP de 6 dígitos a la dirección de email |
| `oneTimeLink`      | Envía un enlace de un solo uso a la dirección de email   |

### Solicitud

  

```javascript

const options = {
    method: "POST",
    url: "https://api.verifik.co/v2/email-validations",
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ",
    },
    data: {
        project: "project_123456789",
        validationMethod: "verificationCode",
        email: "user@example.com",
        type: "validation",
        expiresAt: "2024-01-15T11:30:00Z",
        redirectUrl: "https://example.com/success",
        webhookUrl: "https://example.com/webhook",
        requires2FA: false,
        ipAddress: "192.168.1.1",
    },
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

  
  

```swift

let headers = [
  "Content-Type": "application/json",
  "Authorization": "Bearer "
]

let parameters = [
  "project": "project_123456789",
  "validationMethod": "verificationCode",
  "email": "user@example.com",
  "type": "validation",
  "expiresAt": "2024-01-15T11:30:00Z",
  "redirectUrl": "https://example.com/success",
  "webhookUrl": "https://example.com/webhook",
  "requires2FA": false,
  "ipAddress": "192.168.1.1"
] as [String : Any]

let postData = try JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/email-validations")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "POST"
request.allHTTPHeaderFields = headers
request.httpBody = postData as Data

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error as Any)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()
```
