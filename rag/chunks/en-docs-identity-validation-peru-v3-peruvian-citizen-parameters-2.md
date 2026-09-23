---
id: "en-docs-identity-validation-peru-v3-peruvian-citizen-parameters-2"
title: "\\U0001F1F5\\U0001F1EA Peru - V3 Peruvian Citizen — Parameters"
sourcePath: "docs/identity-validation/peru/v3-peruvian-citizen.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "pe"
  - "identity-validation"
endpoint: "/v3/pe/cedula/extra"
sourceAnchor: "Parameters"
slug: "/identity-validation/peru/v3-peruvian-citizen"
url: "https://docs.verifik.co/identity-validation/peru/v3-peruvian-citizen"
---

# \U0001F1F5\U0001F1EA Peru - V3 Peruvian Citizen
**API path(s):** /v3/pe/cedula/extra

Verifik's Identity Verification API helps you perform extended identity verification for Peruvian citizens using their DNI (Documento Nacional de Identidad) number. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to access comprehensive personal information, including full name, civil status, date of birth, document details, address, and photo data.
**The Authorization header is required for authentication to access this information securely.**

## Parameters

| Name | Type | Required | Description | Example |
| ---- | ---- | -------- | ----------- | ------- |
| `documentType` | string | **Yes** | Document type. Allowed value: DNI. | `DNI` |
| `documentNumber` | string | **Yes** | Document number of the person to be queried. | `123456789` |

### Request

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v3/pe/cedula/extra',
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

url = "https://app.verifik.co/v3/pe/cedula/extra?documentType=DNI&documentNumber=74687367"

payload = {}
headers = {
  'Authorization': 'Bearer eyJhbGciOIJ9.eyJjbGllbnRJZCI6..06rwjGQ'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
```

  
  

```ruby
require "uri"
require "net/http"

url = URI("https://app.verifik.co/v3/pe/cedula/extra?documentType=DNI&documentNumber=74687367")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = "Bearer eyJhbGciOkpXVCJ9.eyJjbGllbn...rwjGQ"

response = https.request(request)
puts response.read_body
```

  
  

```bash
curl --location --request GET 'https://app.verifik.co/v3/pe/cedula/extra?documentType=DNI&documentNumber=74687367' \
--header 'Authorization: Bearer eyJhbGciOiJXVCJ9.eyJjbGllbnR...QqLcIe4-706rwjGQ'
```
