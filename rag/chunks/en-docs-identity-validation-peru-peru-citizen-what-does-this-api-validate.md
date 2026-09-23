---
id: "en-docs-identity-validation-peru-peru-citizen-what-does-this-api-validate"
title: "Peruvian Citizen v3 — What does this API validate?"
sourcePath: "docs/identity-validation/peru/peru-citizen.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "pe"
  - "identity-validation"
endpoints:
  - "/v3/pe/cedula"
  - "/v3/pe/cedula?documenttype=dni&documentnumber=1234567"
sourceAnchor: "What does this API validate?"
slug: "/identity-validation/peru/peru-citizen"
url: "https://docs.verifik.co/identity-validation/peru/peru-citizen"
---

# Peruvian Citizen v3
**API path(s):** /v3/pe/cedula, /v3/pe/cedula?documenttype=dni&documentnumber=1234567

## What does this API validate?

Verifik's Identity Verification API helps you authenticate Peruvian citizens using the National Identity Document (DNI). It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## What does this API validate?

Our API connects directly with official records to validate:

-   **Full Name & DNI**: Supports *Documento Nacional de Identidad* (DNI).
-   **Personal Details**: Returns date of birth, gender, civil status, and address.
-   **Identity Match**: Confirms that the name provided matches the DNI number.

By verifying these details, you can be confident that the person you're dealing with is real and holds a valid document, significantly lowering the risk of impersonation and fraud.

## API Reference

### Endpoint

```
https://api.verifik.co/v3/pe/cedula
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| `documentType` | string | Yes | Document type. Allowed value: `DNI`. |
| `documentNumber` | string | Yes | Document number of the person to be queried. |

### Request

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v3/pe/cedula',
  params: {
    documentType: 'DNI',
    documentNumber: '1234567'
  },
  headers: {
    'Accept': 'application/json',
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
payload = ''
headers = {}
conn.request("GET", "/v3/pe/cedula?documentType=DNI&documentNumber=1234567", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  
  

```php
setUrl('https://api.verifik.co/v3/pe/cedula?documentType=DNI&documentNumber=1234567');
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
?>
```

  
  

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v3/pe/cedula?documentType=DNI&documentNumber=1234567")!,timeoutInterval: Double.infinity)
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
