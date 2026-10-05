---
id: "en-docs-legal-epic-eci-request-2"
title: "India EPIC (Voter ID) — Person & Name Lookup | Verifik — Request"
sourcePath: "docs/legal/epic-eci.mdx"
locale: "en"
category: "legal"
tags:
  - "in"
  - "legal"
endpoint: "/v2/in/epic"
sourceAnchor: "Request"
slug: "/legal/epic-eci"
url: "https://docs.verifik.co/legal/epic-eci"
---

# India EPIC (Voter ID) — Person & Name Lookup | Verifik
**API path(s):** /v2/in/epic

Verifik exposes a single REST endpoint to look up **voter name** information tied to an Indian **EPIC** (*Elector's Photo Identity Card* number) from sources aligned with the **Electoral Commission of India (ECI)**. Use it to support identity checks, onboarding flows, and compliance workflows that require confirming that a Voter ID number returns consistent registered name data.

## Request

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/in/epic", {
  params: { documentNumber: "IHM2796746" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/in/epic"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentNumber": "IHM2796746"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
  "data": {
    "arrayName": ["SHREEYA", "JAISWAL"],
    "arrayNameLocal": ["শ্রিয়া", "জয়সোয়াল"],
    "documentNumber": "IHM2796746",
    "documentType": "EPIC",
    "firstName": "SHREEYA",
    "firstNameLocal": "শ্রিয়া",
    "fullName": "SHREEYA JAISWAL",
    "fullNameLocal": "শ্রিয়া জয়সোয়াল",
    "lastName": "JAISWAL",
    "lastNameLocal": "জয়সোয়াল",
    "relativeFullName": "AJAY JAISWAL",
    "relativeFullNameLocal": "অজয় জয়সোয়াল"
  },
  "signature": {
    "dateTime": "March 25, 2026 11:38 AM",
    "message": "Certified by Verifik.co"
  },
  "id": "D4QMS"
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
  "message": "missing documentNumber\n"
}
```

  
  

```json
{
  "code": "InternalServerError",
  "message": "Server error."
}
```

### Notes

- `documentNumber` must be **exactly 10 characters**; invalid length or format may return `409`.
- Data is obtained **through Verifik**; underlying coverage follows ECI availability for the given EPIC.
- For **polling-booth and constituency location** details, use the companion endpoint [**India — EPIC voting / polling information**](/legal/voting-eci-epic) (`GET /v2/in/epic/votacion`).

---
