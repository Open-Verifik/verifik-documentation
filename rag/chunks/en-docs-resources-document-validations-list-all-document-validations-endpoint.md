---
id: "en-docs-resources-document-validations-list-all-document-validations-endpoint"
title: "List All Document Validations — Endpoint"
sourcePath: "docs/resources/document-validations/list-all-document-validations.mdx"
locale: "en"
category: "resources"
tags:
  - "document-validations"
  - "document-validations?page=1&perpage=10&populates[]=appregistration&populates[]=projectflow&where_status=active&where_documenttype=driver_license&where_validationmethod=ocr"
  - "resources"
endpoints:
  - "/v2/document-validations"
  - "/v2/document-validations?page=1&perpage=10&populates[]=appregistration&populates[]=projectflow&where_status=active&where_documenttype=driver_license&where_validationmethod=ocr"
sourceAnchor: "Endpoint"
slug: "/resources/list-all-document-validations"
url: "https://docs.verifik.co/resources/list-all-document-validations"
---

# List All Document Validations
**API path(s):** /v2/document-validations, /v2/document-validations?page=1&perpage=10&populates[]=appregistration&populates[]=projectflow&where_status=active&where_documenttype=driver_license&where_validationmethod=ocr

## Endpoint

**GET** `https://api.verifik.co/v2/document-validations`

This endpoint allows you to retrieve a list of all Document Validations within the Verifik API. You can use this to get a detailed overview of multiple document validations, including their status, associated project, validation methods, and more.

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

Specifies the page number for pagination, starting from 1.

#### `perPage`
Type: number  
Required: No

Defines the number of items per page for pagination.

#### `populates[]`
Type: string  
Required: No

Populates the specified field, transforming identifier references into full objects. Available options: `appRegistration`, `projectFlow`

#### `where_status`
Type: string  
Required: No

Where condition to filter by status. Options: ASSESSING, ACTIVE, FAILED, NEEDS_MANUAL_VERIFICATION, NOT_FOUND, EXPIRED, ACTIVE_BUT_UNVERIFIED

#### `where_documentType`
Type: string  
Required: No

Filter by document type (e.g., "driver_license", "passport", "national_id")

#### `where_validationMethod`
Type: string  
Required: No

Filter by validation method. Options: MANUAL, OCR, SCAN_PROMPT, SCAN_STUDIO

#### `where_type`
Type: string  
Required: No

Filter by validation type. Options: validation, login, signup, ocr, demo

#### `where_inputMethod`
Type: string  
Required: No

Filter by input method. Options: CAMERA, FILE_UPLOAD, NOT_SET

### Request

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/document-validations',
  params: {
    page: 1,
    perPage: 10,
    'populates[]': ['appRegistration', 'projectFlow'],
    where_status: 'ACTIVE',
    where_documentType: 'driver_license',
    where_validationMethod: 'OCR'
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

conn.request("GET", "/v2/document-validations?page=1&perPage=10&populates[]=appRegistration&populates[]=projectFlow&where_status=ACTIVE&where_documentType=driver_license&where_validationMethod=OCR", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('GET', 'https://api.verifik.co/v2/document-validations', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer ',
  ],
  'query' => [
    'page' => 1,
    'perPage' => 10,
    'populates[]' => ['appRegistration', 'projectFlow'],
    'where_status' => 'ACTIVE',
    'where_documentType' => 'driver_license',
    'where_validationMethod' => 'OCR'
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
  url := "https://api.verifik.co/v2/document-validations?page=1&perPage=10&populates[]=appRegistration&populates[]=projectFlow&where_status=ACTIVE&where_documentType=driver_license&where_validationMethod=OCR"

  req, _ := http.NewRequest("GET", url, nil)

  req.Header.Add("Content-Type", "application/json")
  req.Header.Add("Authorization", "Bearer ")

  res, _ := http.DefaultClient.Do(req)

  defer res.Body.Close()
  body, _ := ioutil.ReadAll(res.Body)

  fmt.Println(string(body))
}
```
