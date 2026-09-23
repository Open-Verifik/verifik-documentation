---
id: "en-docs-business-validation-brazil-parameters-2"
title: "Business Verification (CNPJ) — Parameters"
sourcePath: "docs/business-validation/brazil.mdx"
locale: "en"
category: "business-validation"
tags:
  - "br"
  - "business-validation"
endpoints:
  - "/v2/br/company"
  - "/v2/br/company?"
  - "/v2/br/company?documenttype=cnpj&documentnumber=09159197000180"
sourceAnchor: "Parameters"
slug: "/business-validation/brazil"
url: "https://docs.verifik.co/business-validation/brazil"
---

# Business Verification (CNPJ)
**API path(s):** /v2/br/company, /v2/br/company?, /v2/br/company?documenttype=cnpj&documentnumber=09159197000180

Verifik's Business Verification API helps you authenticate Brazilian companies using official government data. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the legitimacy of companies, partners, or vendors.

## Parameters

| Name           | Type    | Required | Description                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentType` | string  | Yes      | Document type. Allowed value: `CNPJ`. |
| `documentNumber` | string | Yes      | 14-digit CNPJ without separators. |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/br/company", {
  params: { documentType: "CNPJ", documentNumber: "09159197000180" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```php
 "CNPJ",
    "documentNumber" => "09159197000180"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/br/company?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/br/company"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CNPJ", "documentNumber": "09159197000180"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```go
package main

    "fmt"
    "net/http"
)

func main() {
    url := "https://api.verifik.co/v2/br/company?documentType=CNPJ&documentNumber=09159197000180"
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("Accept", "application/json")
    req.Header.Set("Authorization", "Bearer "+getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    fmt.Println(resp.Status)
}
```
