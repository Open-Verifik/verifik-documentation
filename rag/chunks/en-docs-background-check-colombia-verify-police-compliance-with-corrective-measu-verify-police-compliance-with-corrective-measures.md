---
id: "en-docs-background-check-colombia-verify-police-compliance-with-corrective-measu-verify-police-compliance-with-corrective-measures"
title: "Colombia - Verify Police Compliance with Corrective Measures — Verify Police Compliance with Corrective Measures"
sourcePath: "docs/background-check/colombia/verify-police-compliance-with-corrective-measures.mdx"
locale: "en"
category: "background-check"
tags:
  - "co"
  - "background-check"
endpoint: "/v2/co/policia/rnmc"
sourceAnchor: "Verify Police Compliance with Corrective Measures"
slug: "/background-check/colombia/verify-police-compliance-with-corrective-measures"
url: "https://docs.verifik.co/background-check/colombia/verify-police-compliance-with-corrective-measures"
---

# Colombia - Verify Police Compliance with Corrective Measures
**API path(s):** /v2/co/policia/rnmc

## Verify Police Compliance with Corrective Measures

## Verify Police Compliance with Corrective Measures

`GET - https://api.verifik.co/v2/co/policia/rnmc`

The Police RNMC service allows you to verify whether an individual has any pending corrective measures. By providing the individual's name, document type, document number, and the date of verification, you can obtain details about any corrective measures pending.

This service helps ensure that individuals comply with corrective measures and supports informed decision-making based on their compliance status.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

**Query Parameters**

NameTypeRequired?DescriptionExampledocumentTypeStringTrueDocument type. Valid parameters: CC, CE.CCdocumentNumberStringTrueDocument number of the person to consult, without spaces or points.123456789dateStringTrueExpedition date of the document. Valid format: DD/MM/YYYY.10/10/2020

#### Request

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/policia/rnmc',
  params: {
      documentType: 'CC', 
      documentNumber: '123456789', 
      date: '10/10/2020'
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
payload = ''
headers = {}
conn.request("GET", "/v2/co/policia/rnmc?documentType=CC&documentNumber=&date=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/policia/rnmc?documentType=CC&documentNumber=&date=")!,timeoutInterval: Double.infinity)
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
setUrl('https://api.verifik.co/v2/co/policia/rnmc?documentType=CC&documentNumber=&date=');
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
