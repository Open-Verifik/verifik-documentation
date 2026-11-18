---
id: "en-docs-driver-validation-peru-driver-license-endpoint"
title: "Peru - Driver License — Endpoint"
sourcePath: "docs/driver-validation/peru-driver-license.mdx"
locale: "en"
category: "driver-validation"
tags:
  - "pe"
  - "driver-validation"
endpoint: "/v2/pe/driver-license"
sourceAnchor: "Endpoint"
slug: "/driver-validation/peru-driver-license"
url: "https://docs.verifik.co/driver-validation/peru-driver-license"
---

# Peru - Driver License
**API path(s):** /v2/pe/driver-license

## Endpoint

### Endpoint

```
GET https://api.verifik.co/v2/pe/driver-license
```

Look up a Peruvian **driver license** by **DNI**. Returns license **category**, **status**, **expiration**, **restrictions**, **procedures**, **regulatory courses**, and related fields when available from official transport records.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name             | Type   | Required | Description                                      | Example     |
| ---------------- | ------ | -------- | ------------------------------------------------ | ----------- |
| `documentType`   | string | Yes      | Document type. Valid value: `DNI`.               | `DNI`       |
| `documentNumber` | string | Yes      | DNI number (6–8 digits), without spaces.         | `10000001`  |

### Request

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/pe/driver-license',
  params: {
    documentType: 'DNI',
    documentNumber: '10000001',
  },
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer ',
  },
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
    "Accept": "application/json",
    "Authorization": "Bearer ",
}
conn.request(
    "GET",
    "/v2/pe/driver-license?documentType=DNI&documentNumber=10000001",
    headers=headers,
)
res = conn.getresponse()
print(res.read().decode("utf-8"))
```

```swift
var request = URLRequest(
  url: URL(string: "https://api.verifik.co/v2/pe/driver-license?documentType=DNI&documentNumber=10000001")!,
  timeoutInterval: Double.infinity
)
request.httpMethod = "GET"
request.setValue("application/json", forHTTPHeaderField: "Accept")
request.setValue("Bearer ", forHTTPHeaderField: "Authorization")

let task = URLSession.shared.dataTask(with: request) { data, response, error in
  guard let data = data else { return }
  print(String(data: data, encoding: .utf8)!)
}
task.resume()
```

```php
setUrl('https://api.verifik.co/v2/pe/driver-license?documentType=DNI&documentNumber=10000001');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setHeader('Accept', 'application/json');
$request->setHeader('Authorization', 'Bearer ');
$response = $request->send();
echo $response->getBody();
```
