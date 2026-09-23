---
id: "en-docs-background-check-argentina-certificate-verify-api-reference"
title: "Argentina - Criminal Record Certificate — API Reference"
sourcePath: "docs/background-check/argentina-certificate-verify.mdx"
locale: "en"
category: "background-check"
tags:
  - "ar"
  - "background-check"
endpoints:
  - "/v2/ar/dnrec/antecedentes"
  - "/v2/ar/dnrec/antecedentes?requestcode=02118499487&securitycode=371488f861"
sourceAnchor: "API Reference"
slug: "/background-check/argentina-certificate-verify"
url: "https://docs.verifik.co/background-check/argentina-certificate-verify"
---

# Argentina - Criminal Record Certificate
**API path(s):** /v2/ar/dnrec/antecedentes, /v2/ar/dnrec/antecedentes?requestcode=02118499487&securitycode=371488f861

## API Reference

## API Reference

### Endpoint

```
GET https://api.verifik.co/v2/ar/dnrec/antecedentes
```

Verify an Argentine **DNREC** criminal-record certificate using the **request code** (`Solicitud`) and **security code** (`Cod. Segur.`) printed on the official PDF. The service returns structured identity fields, the **criminal-record statement** extracted from the certificate, and the **PDF as base64**.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name            | Type   | Required | Description                                                                 |
| --------------- | ------ | -------- | --------------------------------------------------------------------------- |
| `requestCode`   | string | Yes      | Request code (`Solicitud`) from the certificate. Example: `02118499487`.   |
| `securityCode`  | string | Yes      | Security code (`Cod. Segur.`) from the certificate. Example: `371488F861`.   |

### Request

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/ar/dnrec/antecedentes',
  params: {
    requestCode: '02118499487',
    securityCode: '371488F861',
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
    "/v2/ar/dnrec/antecedentes?requestCode=02118499487&securityCode=371488F861",
    headers=headers,
)
res = conn.getresponse()
print(res.read().decode("utf-8"))
```

```swift
var request = URLRequest(
  url: URL(string: "https://api.verifik.co/v2/ar/dnrec/antecedentes?requestCode=02118499487&securityCode=371488F861")!,
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
setUrl('https://api.verifik.co/v2/ar/dnrec/antecedentes?requestCode=02118499487&securityCode=371488F861');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setHeader('Accept', 'application/json');
$request->setHeader('Authorization', 'Bearer ');
$response = $request->send();
echo $response->getBody();
```
