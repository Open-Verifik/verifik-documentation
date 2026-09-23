---
id: "en-docs-resources-biometric-validations-list-all-biometric-validations-endpoint"
title: "List All Biometric Validations — Endpoint"
sourcePath: "docs/resources/biometric-validations/list-all-biometric-validations.mdx"
locale: "en"
category: "resources"
tags:
  - "biometric-validations"
  - "resources"
endpoint: "/v2/biometric-validations"
sourceAnchor: "Endpoint"
slug: "/resources/list-all-biometric-validations"
url: "https://docs.verifik.co/resources/list-all-biometric-validations"
---

# List All Biometric Validations
**API path(s):** /v2/biometric-validations

## Endpoint

**GET** `https://api.verifik.co/v2/biometric-validations`

Retrieves a list of biometric validation records based on specified filters and parameters.

### Headers

#### Authorization
Type: String  
Required: Yes

`Bearer {YOUR_ACCESS_TOKEN}`

### Query Parameters

#### `page`
Type: Number  
Required: No

Page number (starts at 1).

Example: `page=1`

#### `perPage`
Type: Number  
Required: No

Items per page (default: 20).

Example: `perPage=10`

#### `offset`
Type: Number  
Required: No

Alternative to page for skipping records.

Example: `offset=20`

#### `populates[]`
Type: Array  
Required: No

Fields to populate with related data.

Example: `populates[]=client&populates[]=project`

#### `where_client`
Type: String  
Required: No

Filter by client ID.

Example: `where_client=507f1f77bcf86cd799439013`

#### `where_status`
Type: String  
Required: No

Filter by validation status.

Example: `where_status=validated`

#### `where_type`
Type: String  
Required: No

Filter by validation type.

Example: `where_type=login`

#### `where_livenessSession`
Type: String  
Required: No

Filter by liveness session ID.

Example: `where_livenessSession=674de8df21c72be3cc42b8a7`

#### `in_status`
Type: Array  
Required: No

Filter by multiple statuses.

Example: `in_status[]=validated&in_status[]=failed`

#### `where>_createdAt`
Type: String  
Required: No

Filter records created after date.

Example: `where>_createdAt=2024-12-01`

#### `sort`
Type: String  
Required: No

Sort order (prefix with `-` for descending).

Example: `sort=-createdAt`

### Request

### Request

```javascript
const axios = require("axios");

const config = {
  method: "get",
  url: "https://api.verifik.co/v2/biometric-validations",
  headers: {
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  params: {
    page: 1,
    perPage: 10,
    "populates[]": ["client", "project"],
    where_status: "validated",
    where_type: "login",
    sort: "-createdAt"
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

```python

url = "https://api.verifik.co/v2/biometric-validations"

params = {
  'page': 1,
  'perPage': 10,
  'populates[]': ['client', 'project'],
  'where_status': 'validated',
  'where_type': 'login',
  'sort': '-createdAt'
}

headers = {
  'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
}

response = requests.request("GET", url, headers=headers, params=params)

print(response.text)
```

```php
 'https://api.verifik.co/v2/biometric-validations?page=1&perPage=10&populates[]=client&populates[]=project&where_status=validated&where_type=login&sort=-createdAt',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
    'Authorization: Bearer YOUR_ACCESS_TOKEN'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
?>
```

```go
package main

  "fmt"
  "net/http"
  "io/ioutil"
)

func main() {
  url := "https://api.verifik.co/v2/biometric-validations?page=1&perPage=10&populates[]=client&populates[]=project&where_status=validated&where_type=login&sort=-createdAt"

  req, _ := http.NewRequest("GET", url, nil)

  req.Header.Add("Authorization", "Bearer YOUR_ACCESS_TOKEN")

  res, _ := http.DefaultClient.Do(req)

  defer res.Body.Close()
  body, _ := ioutil.ReadAll(res.Body)

  fmt.Println(string(body))
}
```
