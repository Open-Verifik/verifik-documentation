---
id: "en-docs-background-check-colombia-comptroller-certificate-api-reference"
title: "Colombia - Contraloría Certificate — API Reference"
sourcePath: "docs/background-check/colombia-comptroller-certificate.mdx"
locale: "en"
category: "background-check"
tags:
  - "co"
  - "background-check"
endpoint: "/v2/co/contraloria/certificado"
sourceAnchor: "API Reference"
slug: "/background-check/colombia-comptroller-certificate"
url: "https://docs.verifik.co/background-check/colombia-comptroller-certificate"
---

# Colombia - Contraloría Certificate
**API path(s):** /v2/co/contraloria/certificado

## API Reference

## API Reference

### Endpoint

```
https://api.verifik.co/v2/co/contraloria/certificado
```

The service lets you verify the certificate of good conduct issued by the Contraloría General de Colombia by entering the document type and number, and returns the query date together with the certificate as a base64-encoded PDF. This service is ideal for quickly confirming the good standing status of a Colombian company or individual.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parameters

:::info
For the complete list of supported **Document Types** and their specific mandatory parameters, please visit the [Document Types](/background-check/document-types) guide.
:::

| Name             | Type   | Required | Description                                                                 |
| ---------------- | ------ | -------- | --------------------------------------------------------------------------- |
| `documentType`   | string | Yes      | Type of document. Valid parameters: CC, CE, PA, PEP.                        |
| `documentNumber` | string | Yes      | Document number of the person to consult, without spaces or points.         |

### Request

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/contraloria/certificado',
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
headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer '
}
conn.request("GET", "/v2/co/contraloria/certificado?documentType=CC&documentNumber=123456789", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/contraloria/certificado?documentType=CC&documentNumber=123456789")!,
                         timeoutInterval: Double.infinity)
request.httpMethod = "GET"
request.setValue("application/json", forHTTPHeaderField: "Accept")
request.setValue("Bearer ", forHTTPHeaderField: "Authorization")

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
setUrl('https://api.verifik.co/v2/co/contraloria/certificado?documentType=CC&documentNumber=123456789');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setHeader('Accept', 'application/json');
$request->setHeader('Authorization', 'Bearer ');
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
