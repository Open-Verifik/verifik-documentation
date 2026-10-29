---
id: "en-docs-identity-validation-colombia-special-stay-permit-pep-request-2"
title: "\\U0001F1E8\\U0001F1F4 Colombia - Special Stay Permit (PEP) — Request"
sourcePath: "docs/identity-validation/colombia/special-stay-permit-pep.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "co"
  - "identity-validation"
endpoint: "/v2/co/foreigner-id/pep"
sourceAnchor: "Request"
slug: "/identity-validation/colombia/special-stay-permit-pep"
url: "https://docs.verifik.co/identity-validation/colombia/special-stay-permit-pep"
---

# \U0001F1E8\U0001F1F4 Colombia - Special Stay Permit (PEP)
**API path(s):** /v2/co/foreigner-id/pep

Verifik's Identity Verification API helps you validate the Special Stay Permit (PEP - Permiso Especial de Permanencia) for Venezuelan citizens in Colombia. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for organizations needing to verify the legal status of Venezuelan nationals in Colombia, such as for employment, financial services, or humanitarian programs.

## Request

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/foreigner-id/pep',
  params: {
    expeditionDate: '10/10/2024',
    documentNumber: '123456789'
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
conn.request("GET", "/v2/co/foreigner-id/pep?documentNumber=123456789&expeditionDate=10/10/2024", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  
  

```php
setUrl('https://api.verifik.co/v2/co/foreigner-id/pep?documentNumber=123456789&expeditionDate=10/10/2024');
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
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/foreigner-id/pep?documentNumber=123456789&expeditionDate=10%2F10%2F2024")!,timeoutInterval: Double.infinity)
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
