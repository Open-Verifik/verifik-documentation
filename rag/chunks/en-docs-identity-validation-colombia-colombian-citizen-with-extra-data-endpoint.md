---
id: "en-docs-identity-validation-colombia-colombian-citizen-with-extra-data-endpoint"
title: "Colombian Citizen with Extra Data — Endpoint"
sourcePath: "docs/identity-validation/colombia/colombian-citizen-with-extra-data.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "co"
  - "identity-validation"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "Endpoint"
slug: "/identity-validation/colombia/colombian-citizen-with-extra-data"
url: "https://docs.verifik.co/identity-validation/colombia/colombian-citizen-with-extra-data"
---

# Colombian Citizen with Extra Data
**API path(s):** /v2/co/cedula/extra

## Endpoint

```
https://api.verifik.co/v2/co/cedula/extra
```

Access detailed information about a Colombian citizen using their government-issued ID (Cédula de Ciudadanía). This API endpoint provides core details—full name, first name, last name, and ID number—along with extended private data, including date of birth, gender, and living status, for enhanced identity verification.

#### Key Use Case

Designed for businesses requiring in-depth identity checks for advanced KYC processes, fraud detection, or compliance in Colombia. Use responsibly due to the sensitive nature of the data returned.

**Note:** This endpoint is exclusive to Colombian ID documents (Cédula de Ciudadanía). For other countries or document types, please refer to our alternative validation services.

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Query Parameters

| Name | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| `documentType` | String | True | Type of document. Valid parameter: CC. | `CC` |
| `documentNumber` | String | True | Document number of the person to consult, without spaces or periods. | `123456789` |
| `date` | String | True | Document issue date. Valid format: DD/MM/YYYY. | `10/10/2020` |

### Request

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/cedula/extra',
  params: {documentType: 'CC', documentNumber: '123456789', date: '10/10/2020'},
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
conn.request("GET", "/v2/co/cedula/extra?documentType=CC&documentNumber=123456789&date=10/10/2020", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  
  

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/cedula/extra?documentType=CC&documentNumber=123456789&date=10%2F10%2F2020")!,timeoutInterval: Double.infinity)
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
setUrl('https://api.verifik.co/v2/co/cedula/extra?documentType=CC&documentNumber=123456789&date=10/10/2020');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setBody('');
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
