---
id: "en-docs-business-validation-panama-parameters-2"
title: "Panamanian Business Verification — Parameters"
sourcePath: "docs/business-validation/panama.mdx"
locale: "en"
category: "business-validation"
tags:
  - "pa"
  - "business-validation"
endpoint: "/v2/pa/company"
sourceAnchor: "Parameters"
slug: "/business-validation/panama"
url: "https://docs.verifik.co/business-validation/panama"
---

# Panamanian Business Verification
**API path(s):** /v2/pa/company

Verifik's Business Verification API helps you authenticate Panamanian companies using official government data. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the legitimacy of companies, partners, or vendors.

## Parameters

| Name           | Type    | Required | Description                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentType` | string  | Yes      | Document type. Allowed value: `RUC`. |
| `documentNumber` | string | Yes      | Company identifier. |
| `dv` | string | Yes      | Verification digit. |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/pa/company", {
  params: { documentType: "RUC", documentNumber: "155703400-2-2021", dv: "39" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```php
 "RUC",
    "documentNumber" => "155703400-2-2021",
    "dv" => "39"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/pa/company?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/pa/company"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "RUC", "documentNumber": "155703400-2-2021", "dv": "39"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```go
package main

    "fmt"
    "net/http"
)

func main() {
    url := "https://api.verifik.co/v2/pa/company?documentType=RUC&documentNumber=155703400-2-2021&dv=39"
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("Accept", "application/json")
    req.Header.Set("Authorization", "Bearer "+getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    fmt.Println(resp.Status)
}
```
