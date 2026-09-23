---
id: "en-docs-resources-webhooks-update-a-webhook-endpoint"
title: "Update a Webhook — Endpoint"
sourcePath: "docs/resources/webhooks/update-a-webhook.mdx"
locale: "en"
category: "resources"
tags:
  - "webhooks"
  - "resources"
endpoints:
  - "/v2/webhooks/66de320d6a5c6ef0e02d4223"
  - "/v2/webhooks/{id}"
sourceAnchor: "Endpoint"
slug: "/resources/update-a-webhook"
url: "https://docs.verifik.co/resources/update-a-webhook"
---

# Update a Webhook
**API path(s):** /v2/webhooks/66de320d6a5c6ef0e02d4223, /v2/webhooks/{id}

## Endpoint

**PUT** `https://api.verifik.co/v2/webhooks/{id}`

Method for updating an existing webhook. To make the service work, the _id parameter is required, which is generated when a webhook is created correctly.

#### headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

#### path parameters

#### `id`

**Type:** string  
**Required:** Yes

The unique identifier of the webhook to update.

#### body parameters

#### `name`

**Type:** string  
**Required:** No

The new name you want this webhook to have.

#### `url`

**Type:** string  
**Required:** No

You can update the url to where you want to receive the POST calls.

#### `description`

**Type:** string  
**Required:** No

The new description you want this webhook to have.

#### `link`

**Type:** array  
**Required:** No

Array of projectFlows that you want to **link** this webhook to.

#### `unlink`

**Type:** array  
**Required:** No

Array of projectFlows that you want to **unlink** from this webhook.

### Request Example

```javascript

const options = {
  method: 'PUT',
  url: 'https://api.verifik.co/v2/webhooks/66de320d6a5c6ef0e02d4223',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '
  },
  data: {
    url: 'https://sandbox.verifik.co/v2/webhooks/logs',
    name: 'Updated webhook name',
    description: 'Updated description'
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
  "name": "Updated webhook name",
  "description": "Updated description"
})

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer '
}

conn.request("PUT", "/v2/webhooks/66de320d6a5c6ef0e02d4223", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('PUT', 'https://api.verifik.co/v2/webhooks/66de320d6a5c6ef0e02d4223', [
  'headers' => [
    'Content-Type': 'application/json',
    'Authorization' => 'Bearer ',
  ],
  'json' => [
    'url' => 'https://sandbox.verifik.co/v2/webhooks/logs',
    'name' => 'Updated webhook name',
    'description' => 'Updated description'
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
	url := "https://api.verifik.co/v2/webhooks/66de320d6a5c6ef0e02d4223"

	payload := map[string]interface{}{
		"url":         "https://sandbox.verifik.co/v2/webhooks/logs",
		"name":        "Updated webhook name",
		"description": "Updated description",
	}

	jsonData, _ := json.Marshal(payload)

	req, _ := http.NewRequest("PUT", url, bytes.NewBuffer(jsonData))
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
