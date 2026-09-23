---
id: "en-docs-resources-document-validations-delete-a-document-validation-endpoint"
title: "Delete a Document Validation — Endpoint"
sourcePath: "docs/resources/document-validations/delete-a-document-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "document-validations"
  - "resources"
endpoint: "/v2/document-validations/{id}"
sourceAnchor: "Endpoint"
slug: "/resources/delete-a-document-validation"
url: "https://docs.verifik.co/resources/delete-a-document-validation"
---

# Delete a Document Validation
**API path(s):** /v2/document-validations/{id}

## Endpoint

**DELETE** `https://api.verifik.co/v2/document-validations/{id}`

With this service, you can permanently remove a specific Document Validation record from your Verifik account. This action cannot be undone and will completely remove the document validation data.

### Headers

#### Content-Type
Type: String  
Required: Yes

`application/json`

#### Authorization
Type: String  
Required: Yes

`Bearer {YOUR_ACCESS_TOKEN}`

### Path Parameters

#### `id`
Type: string  
Required: Yes

The unique identifier of the Document Validation you want to delete

### Request

```javascript

const options = {
  method: 'DELETE',
  url: 'https://api.verifik.co/v2/document-validations/document_validation_123456789',
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

conn.request("DELETE", "/v2/document-validations/document_validation_123456789", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('DELETE', 'https://api.verifik.co/v2/document-validations/document_validation_123456789', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer ',
  ]
]);

echo $response->getBody();
```

```go
package main

  "fmt"
  "net/http"
  "io/ioutil"
)

func main() {
  url := "https://api.verifik.co/v2/document-validations/document_validation_123456789"

  req, _ := http.NewRequest("DELETE", url, nil)

  req.Header.Add("Content-Type", "application/json")
  req.Header.Add("Authorization", "Bearer ")

  res, _ := http.DefaultClient.Do(req)

  defer res.Body.Close()
  body, _ := ioutil.ReadAll(res.Body)

  fmt.Println(string(body))
}
```
