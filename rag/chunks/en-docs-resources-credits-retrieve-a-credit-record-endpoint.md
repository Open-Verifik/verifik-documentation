---
id: "en-docs-resources-credits-retrieve-a-credit-record-endpoint"
title: "Retrieve a Credit Record — Endpoint"
sourcePath: "docs/resources/credits/retrieve-a-credit-record.mdx"
locale: "en"
category: "resources"
tags:
  - "credits"
  - "resources"
endpoints:
  - "/v2/credits/credit_123456789"
  - "/v2/credits/{id}"
sourceAnchor: "Endpoint"
slug: "/resources/credits/retrieve-a-credit-record"
url: "https://docs.verifik.co/resources/credits/retrieve-a-credit-record"
---

# Retrieve a Credit Record
**API path(s):** /v2/credits/credit_123456789, /v2/credits/{id}

## Endpoint

**GET** `https://api.verifik.co/v2/credits/{id}`

Retrieve a specific credit record by its unique identifier. This endpoint returns detailed information about a single credit transaction including its status, amount, and associated client information.

### Headers

#### Content-Type
Type: String  
Required: Yes

`application/json`

#### Authorization
Type: String  
Required: Yes

`Bearer `

### Parameters

#### `id`
Type: String  
Required: Yes

The unique identifier of the credit record you want to retrieve.

#### `populates[]`
Type: Array  
Required: No

Optional array of related data to include. Available options: `client`, `superAdmin`.

### Request

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/credits/credit_123456789',
  params: {
    "populates[]": ["client", "superAdmin"]
  },
  headers: {
    Accept: 'application/json',
    Authorization: 'jwt '
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
    'Accept': "application/json",
    'Authorization': "JWT token"
}

conn.request("GET", "/v2/credits/credit_123456789?populates[]=client&populates[]=superAdmin", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

```php
request('GET', 'https://api.verifik.co/v2/credits/credit_123456789?populates[]=client&populates[]=superAdmin', [
  'headers' => [
    'Accept' => 'application/json',
    'Authorization' => 'JWT token',
  ],
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
  url := "https://api.verifik.co/v2/credits/credit_123456789?populates[]=client&populates[]=superAdmin"

  req, _ := http.NewRequest("GET", url, nil)

  req.Header.Add("Accept", "application/json")
  req.Header.Add("Authorization", "JWT token")

  res, _ := http.DefaultClient.Do(req)

  defer res.Body.Close()
  body, _ := ioutil.ReadAll(res.Body)

  fmt.Println(string(body))
}
```
