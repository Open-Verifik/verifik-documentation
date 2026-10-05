---
id: "en-docs-identity-costa-rica-request-2"
title: "Costa Rican Citizen (CCCR) — Request"
sourcePath: "docs/identity/costa-rica.mdx"
locale: "en"
category: "identity"
tags:
  - "cr"
  - "identity"
endpoint: "/v2/cr/cedula"
sourceAnchor: "Request"
slug: "/identity/costa-rica"
url: "https://docs.verifik.co/identity/costa-rica"
---

# Costa Rican Citizen (CCCR)
**API path(s):** /v2/cr/cedula

Verifik's Identity Verification API helps you authenticate Costa Rican citizens using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## Request

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/cr/cedula", {
  params: { documentType: "CCCR", documentNumber: "010000001" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```php
 "CCCR",
    "documentNumber" => "010000001"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/cr/cedula?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/cr/cedula"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CCCR", "documentNumber": "010000001"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```go
package main

    "fmt"
    "net/http"
)

func main() {
    url := "https://api.verifik.co/v2/cr/cedula?documentType=CCCR&documentNumber=010000001"
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
    "documentType": "CCCR",
    "documentNumber": "010000001",
    "firstName": "MARIA ELENA",
    "lastName": "LOPEZ GARCIA",
    "fullName": "MARIA ELENA LOPEZ GARCIA"
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "July 27, 2026 3:00 PM"}
}
```

  
  

```json
{
  "data": {
    "documentType": "CCCR",
    "documentNumber": "020000002",
    "status": "requires_renewal",
    "expired": true,
    "message": {
      "es": "La fecha de vencimiento de su última solicitud, es menor a doce meses, por lo que debe renovar su documento en las oficinas del TSE",
      "en": "The expiration date on file for this citizen's last request is less than twelve months away, so the document must be renewed in person at a TSE office."
    }
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "July 27, 2026 3:00 PM"}
}
```

  
  

```json
{
  "message": "Invalid document number",
  "code": "INVALID_DOCUMENT"
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
