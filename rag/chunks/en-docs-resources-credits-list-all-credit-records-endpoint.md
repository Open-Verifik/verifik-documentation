---
id: "en-docs-resources-credits-list-all-credit-records-endpoint"
title: "List All Credit Records — Endpoint"
sourcePath: "docs/resources/credits/list-all-credit-records.mdx"
locale: "en"
category: "resources"
tags:
  - "credits"
  - "resources"
endpoint: "/v2/credits"
sourceAnchor: "Endpoint"
slug: "/resources/list-all-credit-records"
url: "https://docs.verifik.co/resources/list-all-credit-records"
---

# List All Credit Records
**API path(s):** /v2/credits

## Endpoint

**GET** `https://api.verifik.co/v2/credits`

Retrieve a list of Credit records in Verifik's system. This endpoint returns an array of credit objects, each containing detailed information about credit transactions, balances, and associated client accounts.

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

#### `page`
Type: Number  
Required: No

Specifies the page number for pagination, starting from 1.

#### `perPage`
Type: Number  
Required: No

Defines the number of items per page for pagination.

#### `populates[]`
Type: String  
Required: No

Populates the specified field, transforming identifier references into full objects. Available options: `client`, `superAdmin`

#### `where_status`
Type: String  
Required: No

Where condition to filter by status. Options: `approved`, `pending`, `failed`, `postPaid`

#### `where_category`
Type: String  
Required: No

Where condition to filter by category. Options: `purchase`, `usage`

#### `where_client`
Type: String  
Required: No

Filter by specific client ID

### Request

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/credits',
  params: {
    page: 1,
    perPage: 20,
    "populates[]": ["client"],
    where_status: "approved",
    where_category: "purchase"
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

conn.request("GET", "/v2/credits?page=1&perPage=20&populates[]=client&where_status=approved&where_category=purchase", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

```php
request('GET', 'https://api.verifik.co/v2/credits?page=1&perPage=20&populates[]=client&where_status=approved&where_category=purchase', [
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
  url := "https://api.verifik.co/v2/credits?page=1&perPage=20&populates[]=client&where_status=approved&where_category=purchase"

  req, _ := http.NewRequest("GET", url, nil)

  req.Header.Add("Accept", "application/json")
  req.Header.Add("Authorization", "JWT token")

  res, _ := http.DefaultClient.Do(req)

  defer res.Body.Close()
  body, _ := ioutil.ReadAll(res.Body)

  fmt.Println(string(body))
}
```
