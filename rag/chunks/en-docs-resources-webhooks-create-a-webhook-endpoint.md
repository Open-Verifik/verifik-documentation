---
id: "en-docs-resources-webhooks-create-a-webhook-endpoint"
title: "Create a Webhook — Endpoint"
sourcePath: "docs/resources/webhooks/create-a-webhook.mdx"
locale: "en"
category: "resources"
tags:
  - "webhooks"
  - "resources"
endpoint: "/v2/webhooks"
sourceAnchor: "Endpoint"
slug: "/resources/create-a-webhook"
url: "https://docs.verifik.co/resources/create-a-webhook"
---

# Create a Webhook
**API path(s):** /v2/webhooks

## Endpoint

**POST** `https://api.verifik.co/v2/webhooks`

This API allows you to create a new webhook within your account. You can associate a webhook with project Flows in this step or when you update the webhook.

#### headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

#### body parameters

#### `url`

**Type:** string  
**Required:** Yes

The url where we will send the information via POST.

#### `name`

**Type:** string  
**Required:** Yes

The name of your webhook to identify it easily.

#### `isActive`

**Type:** boolean  
**Required:** Yes

This boolean will enable/disable it whenever you require it.

#### `description`

**Type:** string  
**Required:** No

Description to know what information you will be sending there.

#### `link`

**Type:** array  
**Required:** No

Array of projectFlows that you want to link this webhook to.

### Request Example

```javascript

const options = {
  method: 'POST',
  url: 'https://api.verifik.co/v2/webhooks',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '
  },
  data: {
    url: 'https://sandbox.verifik.co/v2/webhooks/logs',
    name: 'Postman sample',
    isActive: true,
    description: 'This is an example',
    link: ['66df24f4c80823e06a348019']
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
  "url": "https://sandbox.verifik.co/v2/webhooks/logs",
  "name": "Postman sample",
  "isActive": True,
  "description": "This is an example",
  "link": ["66df24f4c80823e06a348019"]
})

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer '
}

conn.request("POST", "/v2/webhooks", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('POST', 'https://api.verifik.co/v2/webhooks', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer ',
  ],
  'json' => [
    'url' => 'https://sandbox.verifik.co/v2/webhooks/logs',
    'name' => 'Postman sample',
    'isActive' => true,
    'description' => 'This is an example',
    'link' => ['66df24f4c80823e06a348019']
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
	url := "https://api.verifik.co/v2/webhooks"

	payload := map[string]interface{}{
		"url":         "https://sandbox.verifik.co/v2/webhooks/logs",
		"name":        "Postman sample",
		"isActive":    true,
		"description": "This is an example",
		"link":        []string{"66df24f4c80823e06a348019"},
	}

	jsonData, _ := json.Marshal(payload)

	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer ")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	body, _ := io.ReadAll(resp.Body)
	fmt.Println(string(body))
}
```
