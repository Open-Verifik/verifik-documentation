---
id: "en-docs-background-check-brazil-api-reference"
title: "Background Check (CPF) — API Reference"
sourcePath: "docs/background-check/brazil.mdx"
locale: "en"
category: "background-check"
tags:
  - "br"
  - "background-check"
endpoint: "/v2/br/background-check"
sourceAnchor: "API Reference"
slug: "/background-check/brazil"
url: "https://docs.verifik.co/background-check/brazil"
---

# Background Check (CPF)
**API path(s):** /v2/br/background-check

## API Reference

## API Reference

### Endpoint

```
https://api.verifik.co/v2/br/background-check
```

**Brazil individual background screening** using **CPF** and **date of birth**. A successful response includes identity-related fields and, when the data provider supplies it, a **base64-encoded PDF** report. Intended for **employment screening**, **due diligence**, and **compliance**; handle the PDF and metadata under your own legal and retention rules.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parameters

:::info
For the complete list of supported **Document Types** and their specific mandatory parameters, please visit the [Document Types](/background-check/document-types) guide.
:::

| Name           | Type    | Required | Description                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentType` | string  | Yes      | Document type. Allowed parameter: CPF. |
| `documentNumber` | string | Yes      | Document number of the person to consult. |
| `dateOfBirth` | string | Yes      | Date of birth of the person to consult, valid format: dd/mm/yyyy. |

### Request

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/br/background-check',
  params: {
    documentType: 'CPF',
    documentNumber: '012.345.678-01',
    dateOfBirth: '17/02/2002'
  },
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

headers = {
    'Accept': "application/json",
    'Authorization': "Bearer "
}

conn.request("GET", "/v2/br/background-check?documentType=CPF&documentNumber=012.345.678-01&dateOfBirth=17/02/2002", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('GET', 'https://api.verifik.co/v2/br/background-check?documentType=CPF&documentNumber=012.345.678-01&dateOfBirth=17/02/2002', [
  'headers' => [
    'Accept' => 'application/json',
    'Authorization' => 'Bearer ',
  ],
]);

echo $response->getBody();
```

  
  

```swift

let headers = [
  "Accept": "application/json",
  "Authorization": "Bearer "
]

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/br/background-check?documentType=CPF&documentNumber=012.345.678-01&dateOfBirth=17/02/2002")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "GET"
request.allHTTPHeaderFields = headers

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error as Any)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()
```
