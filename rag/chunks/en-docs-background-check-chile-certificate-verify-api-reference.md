---
id: "en-docs-background-check-chile-certificate-verify-api-reference"
title: "Chile - Civil Registry Certificate Verification — API Reference"
sourcePath: "docs/background-check/chile-certificate-verify.mdx"
locale: "en"
category: "background-check"
tags:
  - "cl"
  - "background-check"
endpoints:
  - "/v2/cl/registro-civil/certificado"
  - "/v2/cl/registro-civil/certificado?folio=50070080804&verificationcode=2aacbb9a636a"
sourceAnchor: "API Reference"
slug: "/background-check/chile-certificate-verify"
url: "https://docs.verifik.co/background-check/chile-certificate-verify"
---

# Chile - Civil Registry Certificate Verification
**API path(s):** /v2/cl/registro-civil/certificado, /v2/cl/registro-civil/certificado?folio=50070080804&verificationcode=2aacbb9a636a

## API Reference

## API Reference

### Endpoint

```
GET https://api.verifik.co/v2/cl/registro-civil/certificado
```

Verify a Chile **Registro Civil (SRCEI)** certificate using the **folio** and **verification code** (`Código Verificador`) printed on the document. Returns structured identity fields, **conviction-register** details, and the **certificate PDF as base64** when the verification succeeds.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name               | Type   | Required | Description                                                              |
| ------------------ | ------ | -------- | ------------------------------------------------------------------------ |
| `folio`            | string | Yes      | Certificate folio (10–15 characters). Example: `50070080804`.            |
| `verificationCode` | string | Yes      | Verification code from the certificate. Example: `2aacbb9a636a`.         |

### Request

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/cl/registro-civil/certificado',
  params: {
    folio: '50070080804',
    verificationCode: '2aacbb9a636a',
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
    "/v2/cl/registro-civil/certificado?folio=50070080804&verificationCode=2aacbb9a636a",
    headers=headers,
)
res = conn.getresponse()
print(res.read().decode("utf-8"))
```

```swift
var request = URLRequest(
  url: URL(string: "https://api.verifik.co/v2/cl/registro-civil/certificado?folio=50070080804&verificationCode=2aacbb9a636a")!,
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
setUrl('https://api.verifik.co/v2/cl/registro-civil/certificado?folio=50070080804&verificationCode=2aacbb9a636a');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setHeader('Accept', 'application/json');
$request->setHeader('Authorization', 'Bearer ');
$response = $request->send();
echo $response->getBody();
```
