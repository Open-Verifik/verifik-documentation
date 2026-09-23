---
id: "en-docs-resources-document-validations-retrieve-a-document-validation-endpoint"
title: "Retrieve a Document Validation — Endpoint"
sourcePath: "docs/resources/document-validations/retrieve-a-document-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "document-validations"
  - "resources"
endpoint: "/v2/document-validations/{id}"
sourceAnchor: "Endpoint"
slug: "/resources/retrieve-a-document-validation"
url: "https://docs.verifik.co/resources/retrieve-a-document-validation"
---

# Retrieve a Document Validation
**API path(s):** /v2/document-validations/{id}

## Endpoint

**GET** `https://api.verifik.co/v2/document-validations/{id}`

With this service, you can bring all Document Validations that you have created or if you only want one, you can specify the ID of the document validation and the endpoint will return only the selected validation.

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

ID of the Document Validation that you want to bring the information.

#### `populates[]`
Type: string  
Required: No

Options: `appRegistration`, `projectFlow`

### Request

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/document-validations/document_validation_123456789',
  params: {
    'populates[]': ['appRegistration', 'projectFlow']
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

conn.request("GET", "/v2/document-validations/document_validation_123456789?populates[]=appRegistration&populates[]=projectFlow", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('GET', 'https://api.verifik.co/v2/document-validations/document_validation_123456789', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer ',
  ],
  'query' => [
    'populates[]' => ['appRegistration', 'projectFlow']
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
  url := "https://api.verifik.co/v2/document-validations/document_validation_123456789?populates[]=appRegistration&populates[]=projectFlow"

  req, _ := http.NewRequest("GET", url, nil)

  req.Header.Add("Content-Type", "application/json")
  req.Header.Add("Authorization", "Bearer ")

  res, _ := http.DefaultClient.Do(req)

  defer res.Body.Close()
  body, _ := ioutil.ReadAll(res.Body)

  fmt.Println(string(body))
}
```
