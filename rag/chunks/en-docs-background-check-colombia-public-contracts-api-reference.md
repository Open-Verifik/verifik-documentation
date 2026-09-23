---
id: "en-docs-background-check-colombia-public-contracts-api-reference"
title: "Colombia - Public Contracts — API Reference"
sourcePath: "docs/background-check/colombia-public-contracts.mdx"
locale: "en"
category: "background-check"
tags:
  - "co"
  - "background-check"
endpoints:
  - "/v2/co/contracts"
  - "/v2/co/contracts?documenttype=cc&documentnumber=63535790"
sourceAnchor: "API Reference"
slug: "/background-check/colombia-public-contracts"
url: "https://docs.verifik.co/background-check/colombia-public-contracts"
---

# Colombia - Public Contracts
**API path(s):** /v2/co/contracts, /v2/co/contracts?documenttype=cc&documentnumber=63535790

## API Reference

## API Reference

### Endpoint

```
https://api.verifik.co/v2/co/contracts
```

The Public Contracts service allows users to retrieve a list of public contracts associated with a person or company by providing their document number and document type. The response includes valuable details about each contract, such as contractor information, contract values, involved entities, contract duration, and more.

This service promotes transparency and facilitates the monitoring of public contracts with the state in Colombia.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

:::info
For the complete list of supported **Document Types** and their specific mandatory parameters, please visit the [Document Types](/background-check/document-types) guide.
:::

| Name             | Type   | Required | Description                                                                 |
| ---------------- | ------ | -------- | --------------------------------------------------------------------------- |
| `documentType`   | string | Yes      | Document type. Allowed parameters: CC, NIT.                                 |
| `documentNumber` | string | Yes      | Document number to request.                                                 |

### Request

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/contracts',
  params: {documentType: 'CC', documentNumber: '123456789'},
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer '
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
payload = ''
headers = {}
conn.request("GET", "/v2/co/contracts?documentType=CC&documentNumber=63535790", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/contracts?documentType=CC&documentNumber=63535790")!,timeoutInterval: Double.infinity)
request.httpMethod = "GET"

let task = URLSession.shared.dataTask(with: request) { data, response, error in 
  guard let data = data else {
    print(String(describing: error))
    return
  }
  print(String(data: data, encoding: .utf8)!)
}

task.resume()

```

```php
setUrl('https://api.verifik.co/v2/co/contracts?documentType=CC&documentNumber=63535790');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
try {
  $response = $request->send();
  if ($response->getStatus() == 200) {
    echo $response->getBody();
  }
  else {
    echo 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .
    $response->getReasonPhrase();
  }
}
catch(HTTP_Request2_Exception $e) {
  echo 'Error: ' . $e->getMessage();
}
```
