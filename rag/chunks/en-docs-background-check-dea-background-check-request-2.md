---
id: "en-docs-background-check-dea-background-check-request-2"
title: "DEA Background Check — Request"
sourcePath: "docs/background-check/dea-background-check.mdx"
locale: "en"
category: "background-check"
tags:
  - "dea"
  - "dea?fullname="
  - "background-check"
endpoints:
  - "/v2/dea"
  - "/v2/dea?fullname="
sourceAnchor: "Request"
slug: "/background-check/international/dea-background-check"
url: "https://docs.verifik.co/background-check/international/dea-background-check"
---

# DEA Background Check
**API path(s):** /v2/dea, /v2/dea?fullname=

## Request

```javascript

const options = {
  method: "GET",
  url: "https://api.verifik.co/v2/dea",
  params: { documentType: "CC", documentNumber: "80251972" },
  headers: {
    Accept: "application/json",
    Authorization: "jwt ",
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
payload = ''
headers = {}
conn.request("GET", "/v2/dea?fullName=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/dea?fullName=")!,timeoutInterval: Double.infinity)
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
setUrl('https://api.verifik.co/v2/dea?fullName=');
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
```

### Response

```json
{
  "data": {
    "documentType": "CC",
    "documentNumber": "123456789",
    "fullName": "MATEO VERIFIK",
    "firstName": "MATEO",
    "lastName": "VERIFIK",
    "arrayName": ["MATEO", "VERIFIK"],
    "foundInDEA": true,
    "urlDEA": "https://www.dea.gov/fugitives/ismael-zambada-garcia"
  },
  "signature": {
    "dateTime": "June 28, 2022 11:41 AM",
    "message": "Certified by Verifik.co"
  }
}
```

```json
{
  "code": "NotFound",
  "message": "Record not found."
}
```

```json
{
  "code": "MissingParameter",
  "message": "missing documentType\n. missing documentNumber\n"
}
```
