---
id: "en-docs-resources-document-liveness-list-all-document-liveness-endpoint"
title: "List All Document Liveness Validations — Endpoint"
sourcePath: "docs/resources/document-liveness/list-all-document-liveness.mdx"
locale: "en"
category: "resources"
tags:
  - "document-liveness"
  - "document-liveness?page=1&limit=10&status=completed&populates[]=client&populates[]=appregistration"
  - "resources"
endpoints:
  - "/v2/document-liveness"
  - "/v2/document-liveness?page=1&limit=10&status=completed&populates[]=client&populates[]=appregistration"
sourceAnchor: "Endpoint"
slug: "/resources/list-all-document-liveness"
url: "https://docs.verifik.co/resources/list-all-document-liveness"
---

# List All Document Liveness Validations
**API path(s):** /v2/document-liveness, /v2/document-liveness?page=1&limit=10&status=completed&populates[]=client&populates[]=appregistration

## Endpoint

**GET** `https://api.verifik.co/v2/document-liveness`

With this service, you can retrieve all document liveness validations that you have processed.

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

#### `page`
Type: number  
Required: No

Page number for pagination (default: 1)

#### `limit`
Type: number  
Required: No

Number of records per page (default: 10, maximum: 100)

#### `status`
Type: string  
Required: No

Filter by status: `new`, `processing`, `completed`, `failed`

#### `populates[]`
Type: string  
Required: No

Optional array of related data to include. Available options: `client`, `appRegistration`.

### Request

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/document-liveness',
  params: {
    page: 1,
    limit: 10,
    status: 'completed',
    'populates[]': ['client', 'appRegistration']
  },
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

conn.request("GET", "/v2/document-liveness?page=1&limit=10&status=completed&populates[]=client&populates[]=appRegistration", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

```php
request('GET', 'https://api.verifik.co/v2/document-liveness', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer ',
  ],
  'query' => [
    'page' => 1,
    'limit' => 10,
    'status' => 'completed',
    'populates[]' => ['client', 'appRegistration']
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
  url := "https://api.verifik.co/v2/document-liveness?page=1&limit=10&status=completed&populates[]=client&populates[]=appRegistration"

  req, _ := http.NewRequest("GET", url, nil)

  req.Header.Add("Content-Type", "application/json")
  req.Header.Add("Authorization", "Bearer ")

  res, _ := http.DefaultClient.Do(req)

  defer res.Body.Close()
  body, _ := ioutil.ReadAll(res.Body)

  fmt.Println(string(body))
}
```
