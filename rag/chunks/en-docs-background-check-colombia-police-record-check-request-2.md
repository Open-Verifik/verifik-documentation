---
id: "en-docs-background-check-colombia-police-record-check-request-2"
title: "Colombia - Colombian Police Record Check — Request"
sourcePath: "docs/background-check/colombia-police-record-check.mdx"
locale: "en"
category: "background-check"
tags:
  - "co"
  - "background-check"
endpoint: "/v2/co/policia/consultar"
sourceAnchor: "Request"
slug: "/background-check/colombia-police-record-check"
url: "https://docs.verifik.co/background-check/colombia-police-record-check"
---

# Colombia - Colombian Police Record Check
**API path(s):** /v2/co/policia/consultar

## Request

```javascript

const options = {
  method: "GET",
  url: "https://api.verifik.co/v2/co/policia/consultar",
  params: { documentType: "CC", documentNumber: "1032386359" },
  headers: {
    Accept: "application/json",
    Authorization: "Bearer ",
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
conn.request("GET", "/v2/co/policia/consultar?documentType=CC&documentNumber=1032386359", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/policia/consultar?documentType=CC&documentNumber=1032386359")!,timeoutInterval: Double.infinity)
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
setUrl('https://api.verifik.co/v2/co/policia/consultar?documentType=CC&documentNumber=1032386359');
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
