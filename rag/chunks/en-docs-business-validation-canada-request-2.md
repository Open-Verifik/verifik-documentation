---
id: "en-docs-business-validation-canada-request-2"
title: "Canadian Business Verification — Request"
sourcePath: "docs/business-validation/canada.mdx"
locale: "en"
category: "business-validation"
tags:
  - "ca"
  - "business-validation"
endpoints:
  - "/v2/ca/company"
  - "/v2/ca/company?"
  - "/v2/ca/company?business=bai%20heng%20packaging%20supplies%20inc&province=on"
sourceAnchor: "Request"
slug: "/business-validation/canada"
url: "https://docs.verifik.co/business-validation/canada"
---

# Canadian Business Verification
**API path(s):** /v2/ca/company, /v2/ca/company?, /v2/ca/company?business=bai%20heng%20packaging%20supplies%20inc&province=on

Verifik's Business Verification API helps you authenticate Canadian companies using official government data. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the legitimacy of companies, partners, or vendors.

## Request

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/ca/company", {
  params: { business: "BAI HENG PACKAGING SUPPLIES INC", province: "ON" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```php
 "BAI HENG PACKAGING SUPPLIES INC",
    "province" => "ON"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/ca/company?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/ca/company"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"business": "BAI HENG PACKAGING SUPPLIES INC", "province": "ON"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```go
package main

    "fmt"
    "net/http"
)

func main() {
    url := "https://api.verifik.co/v2/ca/company?business=BAI%20HENG%20PACKAGING%20SUPPLIES%20INC&province=ON"
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("Accept", "application/json")
    req.Header.Set("Authorization", "Bearer "+getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    fmt.Println(resp.Status)
}
```

### Response

  

```json
{
    "data": {
        "business": "BAI HENG PACKAGING SUPPLIES INC",
        "businessNumber": "783439201",
        "businessType": "ONTARIO BUSINESS CORP.",
        "compayName": "BAI HENG PACKAGING SUPPLIES INC.",
        "province": "ON",
        "regOfficeCity": "Richmond Hill",
        "regOfficeProvince": "Ontario",
        "registryId": "2859292",
        "status": "Active",
        "statusDate": "2021-08-10"
    },
    "signature": {
        "dateTime": "October 10, 2025 4:19 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "1J9CJ"
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
  "message": "Authentication required",
  "code": "UNAUTHORIZED"
}
```

  
  

```json
{
    "code": "InternalServerError",
    "message": "Server error."
}
```
