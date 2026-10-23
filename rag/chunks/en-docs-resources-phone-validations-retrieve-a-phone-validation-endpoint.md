---
id: "en-docs-resources-phone-validations-retrieve-a-phone-validation-endpoint"
title: "Retrieve a Phone Validation — Endpoint"
sourcePath: "docs/resources/phone-validations/retrieve-a-phone-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "phone-validations"
  - "resources"
endpoints:
  - "/api/phone-validations"
  - "/v2/phone-validations"
  - "/v2/phone-validations/{id}"
sourceAnchor: "Endpoint"
slug: "/resources/retrieve-a-phone-validation"
url: "https://docs.verifik.co/resources/retrieve-a-phone-validation"
---

# Retrieve a Phone Validation
**API path(s):** /api/phone-validations, /v2/phone-validations, /v2/phone-validations/{id}

## Endpoint

```
GET https://api.verifik.co/v2/phone-validations/{id}
```

This service retrieves a specific phone validation record using its unique identifier. The response includes all the details about the phone validation process, including status, OTP information, and associated project data. This endpoint is useful for checking the current status of a phone validation or retrieving details for audit purposes.

#### Headers

#### `Content-Type`

**Type:** String  
**Required:** Required  
**Value:** `application/json`

#### `Authorization`

**Type:** String  
**Required:** Required  
**Value:** `Bearer {YOUR_ACCESS_TOKEN}`

#### Path Parameters

#### `id`

**Type:** String  
**Required:** Yes

The unique identifier of the Phone Validation you want to retrieve.

#### Query Parameters

#### `populates[]`

**Type:** String  
**Required:** No

Optional. A list of related objects to include in the response. Available options: `client`, `project`, `projectFlow`.

### Request

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/phone-validations/phone_validation_123456789',
  params: {
    'populates[]': ['client', 'project', 'projectFlow']
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

conn.request("GET", "/v2/phone-validations/phone_validation_123456789?populates[]=client&populates[]=project&populates[]=projectFlow", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('GET', 'https://api.verifik.co/v2/phone-validations/phone_validation_123456789', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer ',
  ],
  'query' => [
    'populates[]' => ['client', 'project', 'projectFlow']
  ]
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
	url := "https://api.verifik.co/v2/phone-validations/phone_validation_123456789?populates[]=client&populates[]=project&populates[]=projectFlow"

	req, _ := http.NewRequest("GET", url, nil)
	req.Header.Add("Content-Type", "application/json")
	req.Header.Add("Authorization", "Bearer ")

	client := &http.Client{}
	res, _ := client.Do(req)
	defer res.Body.Close()

	body, _ := io.ReadAll(res.Body)
	fmt.Println(string(body))
}
```
