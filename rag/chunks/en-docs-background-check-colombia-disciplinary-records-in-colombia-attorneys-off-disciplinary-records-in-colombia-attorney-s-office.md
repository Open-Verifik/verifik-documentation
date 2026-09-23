---
id: "en-docs-background-check-colombia-disciplinary-records-in-colombia-attorneys-off-disciplinary-records-in-colombia-attorney-s-office"
title: "Colombia - Disciplinary Records in Colombia (attorney's office) — Disciplinary Records in Colombia (attorney's office)"
sourcePath: "docs/background-check/colombia/disciplinary-records-in-colombia-attorneys-office.md"
locale: "en"
category: "background-check"
tags:
  - "co"
  - "background-check"
endpoint: "/v2/co/procuraduría/antecedentes"
sourceAnchor: "Disciplinary Records in Colombia (attorney's office)"
slug: "/background-check/colombia/disciplinary-records-in-colombia-attorneys-office"
url: "https://docs.verifik.co/background-check/colombia/disciplinary-records-in-colombia-attorneys-office"
---

# Colombia - Disciplinary Records in Colombia (attorney's office)
**API path(s):** /v2/co/procuraduría/antecedentes

## Disciplinary Records in Colombia (attorney's office)

## Disciplinary Records in Colombia (attorney's office)

`GET - https://api.verifik.co/v2/co/procuraduría/antecedentes`

The service to check disciplinary records of individuals in Colombia (attorney's office). By providing the document type and number, you can retrieve information on the individual's name and whether they have any disciplinary records. The response includes details on sanctions, instances, crimes, and ineligibility associated with the individual's record.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

**Query Parameters**

| Name | Type | Required? | Description | Example |
| --- | --- | --- | --- | --- |
| documentType | String | True | Document type. Allowable parameter: CC, PEP, CE. | `CC` |
| documentNumber | String | True | Document number of the person to consult, without spaces or points. | `123456789` |

#### Request

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/procuraduria/antecedentes',
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
conn.request("GET", "/v2/co/procuraduria/antecedentes?documentType=CC&documentNumber=123456789", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/procuraduria/antecedentes?documentType=CC&documentNumber=123456789")!,timeoutInterval: Double.infinity)
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
setUrl('https://api.verifik.co/v2/co/procuraduria/antecedentes?documentType=CC&documentNumber=123456789');
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
