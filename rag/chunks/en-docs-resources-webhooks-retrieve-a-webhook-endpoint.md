---
id: "en-docs-resources-webhooks-retrieve-a-webhook-endpoint"
title: "Retrieve a Webhook — Endpoint"
sourcePath: "docs/resources/webhooks/retrieve-a-webhook.mdx"
locale: "en"
category: "resources"
tags:
  - "webhooks"
  - "resources"
endpoints:
  - "/v2/webhooks/66de320d6a5c6ef0e02d4223"
  - "/v2/webhooks/{id}"
sourceAnchor: "Endpoint"
slug: "/resources/retrieve-a-webhook"
url: "https://docs.verifik.co/resources/retrieve-a-webhook"
---

# Retrieve a Webhook
**API path(s):** /v2/webhooks/66de320d6a5c6ef0e02d4223, /v2/webhooks/{id}

## Endpoint

**GET** `https://api.verifik.co/v2/webhooks/{id}`

We will query by ID any webhook that is stored in our Database.

#### headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

#### path parameters

#### `id`

**Type:** string  
**Required:** Yes

ID of the webhook that you want to bring the information.

### Request Example

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/webhooks/66de320d6a5c6ef0e02d4223',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '
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

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer '
}

conn.request("GET", "/v2/webhooks/66de320d6a5c6ef0e02d4223", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('GET', 'https://api.verifik.co/v2/webhooks/66de320d6a5c6ef0e02d4223', [
  'headers' => [
    'Content-Type': 'application/json',
    'Authorization' => 'Bearer ',
  ],
]);

echo $response->getBody();
```

```go
package main

	"fmt"
	"io"
	"net/http"
)

func main() {
	url := "https://api.verifik.co/v2/webhooks/66de320d6a5c6ef0e02d4223"

	req, _ := http.NewRequest("GET", url, nil)
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
