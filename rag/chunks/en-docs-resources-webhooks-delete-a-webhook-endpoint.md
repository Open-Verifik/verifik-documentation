---
id: "en-docs-resources-webhooks-delete-a-webhook-endpoint"
title: "Delete a Webhook — Endpoint"
sourcePath: "docs/resources/webhooks/delete-a-webhook.mdx"
locale: "en"
category: "resources"
tags:
  - "webhooks"
  - "resources"
endpoint: "/v2/webhooks/{id}"
sourceAnchor: "Endpoint"
slug: "/resources/delete-a-webhook"
url: "https://docs.verifik.co/resources/delete-a-webhook"
---

# Delete a Webhook
**API path(s):** /v2/webhooks/{id}

## Endpoint

**DELETE** `https://api.verifik.co/v2/webhooks/{id}`

To delete a specific webhook, make a DELETE request to the endpoint where `{id}` should be replaced with the unique identifier of the webhook you want to delete.

#### headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

#### path parameters

#### `id`

**Type:** string  
**Required:** Yes

ID of the webhook that you want to delete.

### Request Example

```javascript

const options = {
  method: 'DELETE',
  url: 'https://api.verifik.co/v2/webhooks/66df1c0ad08b9d244bd1c806',
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

conn.request("DELETE", "/v2/webhooks/66df1c0ad08b9d244bd1c806", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('DELETE', 'https://api.verifik.co/v2/webhooks/66df1c0ad08b9d244bd1c806', [
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
	url := "https://api.verifik.co/v2/webhooks/66df1c0ad08b9d244bd1c806"

	req, _ := http.NewRequest("DELETE", url, nil)
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
