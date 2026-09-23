---
id: "en-docs-background-check-ofac-background-check-request-2"
title: "OFAC Background Check — Request"
sourcePath: "docs/background-check/ofac-background-check.mdx"
locale: "en"
category: "background-check"
tags:
  - "ofac"
  - "ofac?fullname=mateo"
  - "ofac?fullname=mateo%20verifik"
  - "background-check"
endpoints:
  - "/v2/ofac"
  - "/v2/ofac?fullname=mateo"
  - "/v2/ofac?fullname=mateo%20verifik"
sourceAnchor: "Request"
slug: "/background-check/international/ofac-background-check"
url: "https://docs.verifik.co/background-check/international/ofac-background-check"
---

# OFAC Background Check
**API path(s):** /v2/ofac, /v2/ofac?fullname=mateo, /v2/ofac?fullname=mateo%20verifik

## Request

```javascript

const options = {
  method: "GET",
  url: "https://api.verifik.co/v2/ofac",
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
conn.request("GET", "/v2/ofac?fullName=Mateo%20Verifik", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/ofac?fullName=Mateo%20Verifik")!,timeoutInterval: Double.infinity)
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
setUrl('https://api.verifik.co/v2/ofac?fullName=Mateo Verifik');
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
    "documentNumber": "80927603",
    "fullName": "MATEO ANDRES VERIFIK",
    "firstName": "MATEO ANDRES",
    "lastName": "VERIFIK",
    "arrayName": ["MATEO", "ANDRES", "VERIFIK"],
    "foundInOFAC": false,
    "details": {}
  },
  "signature": {
    "dateTime": "June 27, 2025 4:33 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "U4RBQ"
}
```

```json
{
  "data": {
    "documentType": "CURP",
    "documentNumber": "VILJ580411HSLLRN09",
    "fullName": "JUAN CARLOS VILLEGAS LOERA",
    "firstName": "JUAN CARLOS",
    "lastName": "VILLEGAS LOERA",
    "arrayName": ["JUAN", "CARLOS", "VILLEGAS", "LOERA"],
    "foundInOFAC": true,
    "details": {
      "fullLink": "https://sanctionssearch.ofac.treas.gov/Details.aspx?id=15785",
      "type": "Individual",
      "list": "SDN",
      "lastName": "VILLEGAS LOERA",
      "program": "SDNTK",
      "firstName": "Juan Carlos",
      "nationality": "",
      "title": "",
      "citizenship": "",
      "dateOfBirth": "11 Apr 1958",
      "placeOfBirth": "Culiacan, Sinaloa, Mexico",
      "remarks": "(Linked To: BUENOS AIRES SERVICIOS, S.A. DE C.V.; Linked To: ESTACIONES DE SERVICIOS CANARIAS, S.A. DE C.V.; Linked To: GASODIESEL Y SERVICIOS ANCONA, S.A. DE C.V.; Linked To: GASOLINERA ALAMOS COUNTRY, S.A. DE C.V.; Linked To: GASOLINERA Y SERVICIOS VILLABONITA, S.A. DE C.V.; Linked To: PETROBARRANCOS, S.A. DE C.V.; Linked To: SERVICIOS CHULAVISTA, S.A. DE C.V.)",
      "identifications": [
        {
          "type": "C.U.R.P.",
          "idNumber": "VILJ580411HSLLRN09",
          "country": "Mexico",
          "issueDate": null,
          "expireDate": null
        }
      ],
      "addresses": [
        {
          "address": "Calle Golfo de California No. 1635",
          "city": "Culiacan",
          "stateOrProvince": "Sinaloa",
          "postalCode": "",
          "country": "Mexico"
        }
      ]
    }
  },
  "signature": {
    "dateTime": "June 27, 2025 4:48 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "1LMO7"
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

```json
{
  "code": "MissingParameter",
  "message": "documentType must be one of: [DNIAR]"
}
```
