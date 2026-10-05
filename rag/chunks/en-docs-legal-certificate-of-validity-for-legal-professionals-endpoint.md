---
id: "en-docs-legal-certificate-of-validity-for-legal-professionals-endpoint"
title: "Certificate of Validity for Legal Professionals — Endpoint"
sourcePath: "docs/legal/certificate-of-validity-for-legal-professionals.mdx"
locale: "en"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/rama/certificado/vigencia"
sourceAnchor: "Endpoint"
slug: "/legal/certificate-of-validity-for-legal-professionals"
url: "https://docs.verifik.co/legal/certificate-of-validity-for-legal-professionals"
---

# Certificate of Validity for Legal Professionals
**API path(s):** /v2/co/rama/certificado/vigencia

## Endpoint

### Endpoint

```
GET https://api.verifik.co/v2/co/rama/certificado/vigencia
```

The Certificate of Validity for Legal Professionals service verifies the current registration status of legal professionals in Colombia. Send **`documentType`**, **`documentNumber`**, and **`quality`** as **query** parameters. **`documentType`** must be **`CC`** (Cédula de Ciudadanía) or **`CE`** (Cédula de Extranjería). **`quality`** identifies the professional role to check (commonly **`ABG`**, **`JUEZPAZ`**, or **`LT`**—use the code expected by the source for your case). The response includes certification status, dates, resume identifier (`idHojaDeVida`), and related fields. The field **`encalidad`** is spelled as returned by the API.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name               | Type   | Required | Description                                                                 |
| ------------------ | ------ | -------- | --------------------------------------------------------------------------- |
| `documentType`     | string | Yes      | `CC` or `CE` only (other types are rejected).                               |
| `documentNumber`   | string | Yes      | ID number for the professional to consult.                                  |
| `quality`          | string | Yes      | Professional category code (e.g. `ABG`, `JUEZPAZ`, `LT`).                     |

### Request

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/rama/certificado/vigencia',
  params: {
    documentType: 'CC',
    documentNumber: '123456789',
    quality: 'ABG'
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

conn.request("GET", "/v2/co/rama/certificado/vigencia?documentType=CC&documentNumber=123456789&quality=ABG", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('GET', 'https://api.verifik.co/v2/co/rama/certificado/vigencia?documentType=CC&documentNumber=123456789&quality=ABG', [
  'headers' => [
    'Accept' => 'application/json',
    'Authorization' => 'JWT token',
  ],
]);

echo $response->getBody();
```

  
  

```swift

let headers = [
  "Accept": "application/json",
  "Authorization": "JWT token"
]

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/co/rama/certificado/vigencia?documentType=CC&documentNumber=123456789&quality=ABG")! as URL,
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
