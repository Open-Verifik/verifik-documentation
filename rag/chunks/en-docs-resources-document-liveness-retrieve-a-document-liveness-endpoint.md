---
id: "en-docs-resources-document-liveness-retrieve-a-document-liveness-endpoint"
title: "Retrieve a Document Liveness Validation — Endpoint"
sourcePath: "docs/resources/document-liveness/retrieve-a-document-liveness.mdx"
locale: "en"
category: "resources"
tags:
  - "document-liveness"
  - "resources"
endpoints:
  - "/v2/document-liveness/document_liveness_123456789"
  - "/v2/document-liveness/{id}"
sourceAnchor: "Endpoint"
slug: "/resources/retrieve-a-document-liveness"
url: "https://docs.verifik.co/resources/retrieve-a-document-liveness"
---

# Retrieve a Document Liveness Validation
**API path(s):** /v2/document-liveness/document_liveness_123456789, /v2/document-liveness/{id}

## Endpoint

**GET** `https://api.verifik.co/v2/document-liveness/{id}`

With this service, you can retrieve all document liveness validations that you have processed, or if you only want one, you can specify the document liveness record ID and the endpoint will return only the selected validation result.

### Headers

#### Content-Type
Type: String  
Required: Yes

`application/json`

#### Authorization
Type: String  
Required: Yes

`Bearer `

### Query Parameters

#### `id`
Type: string  
Required: Yes

ID of the Document Liveness record from which you want to retrieve the information.

### Request

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/document-liveness/document_liveness_123456789',
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

conn.request("GET", "/v2/document-liveness/document_liveness_123456789", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

```php
request('GET', 'https://api.verifik.co/v2/document-liveness/document_liveness_123456789', [
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
  url := "https://api.verifik.co/v2/document-liveness/document_liveness_123456789"

  req, _ := http.NewRequest("GET", url, nil)

  req.Header.Add("Content-Type", "application/json")
  req.Header.Add("Authorization", "Bearer ")

  res, _ := http.DefaultClient.Do(req)

  defer res.Body.Close()
  body, _ := ioutil.ReadAll(res.Body)

  fmt.Println(string(body))
}
```
