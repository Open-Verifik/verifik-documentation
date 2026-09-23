---
id: "en-docs-background-check-fbi-background-check-request-2"
title: "FBI Background Check — Request"
sourcePath: "docs/background-check/fbi-background-check.mdx"
locale: "en"
category: "background-check"
tags:
  - "fbi"
  - "background-check"
endpoint: "/v2/fbi"
sourceAnchor: "Request"
slug: "/background-check/international/fbi-background-check"
url: "https://docs.verifik.co/background-check/international/fbi-background-check"
---

# FBI Background Check
**API path(s):** /v2/fbi

## Request

```javascript

const options = {
  method: "GET",
  url: "https://api.verifik.co/v2/fbi",
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
conn.request("GET", "/v2/fbi?fullName=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/fbi?fullName=")!,timeoutInterval: Double.infinity)
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
setUrl('https://api.verifik.co/v2/fbi?fullName=');
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

### Response

```json
{
  "data": {
    "documentType": "CC",
    "documentNumber": "80251972",
    "fullName": "WILVER VILLEGAS PALOMINO",
    "firstName": "WILVER",
    "lastName": "VILLEGAS PALOMINO",
    "arrayName": ["WILVER", "VILLEGAS", "PALOMINO"],
    "foundInFBI": true,
    "urlFBI": "https://www.fbi.gov/wanted/cei/wilver-villegas-palomino-"
  },
  "signature": {
    "dateTime": "June 28, 2022 12:36 PM",
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
