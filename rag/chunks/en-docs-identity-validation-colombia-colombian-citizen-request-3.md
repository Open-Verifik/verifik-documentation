---
id: "en-docs-identity-validation-colombia-colombian-citizen-request-3"
title: "Colombian Citizen — Request"
sourcePath: "docs/identity-validation/colombia/colombian-citizen.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "co"
  - "identity-validation"
endpoints:
  - "/v2/co/cedula"
  - "/v2/co/foreigner-id/ce"
  - "/v2/co/foreigner-id/ppt"
  - "/v2/co/procuraduria"
sourceAnchor: "Request"
slug: "/identity-validation/colombia/colombian-citizen"
url: "https://docs.verifik.co/identity-validation/colombia/colombian-citizen"
---

# Colombian Citizen
**API path(s):** /v2/co/cedula, /v2/co/foreigner-id/ce, /v2/co/foreigner-id/ppt, /v2/co/procuraduria

## Request

```javascript

const options = {
	method: "GET",
	url: "https://api.verifik.co/v2/co/cedula",
	params: { documentType: "CC", documentNumber: "123456789" },
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
};

const { data } = await axios.request(options);
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/cedula"
headers = {
    "Accept": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
params = {
    "documentType": "CC",
    "documentNumber": "123456789"
}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
	"data": {
		"documentType": "CC",
		"documentNumber": "123456789",
		"firstName": "Juan",
		"lastName": "Pérez",
		"fullName": "Juan Pérez"
	},
	"signature": {
		"message": "Certified by Verifik.co",
		"dateTime": "January 16, 2024 3:44 PM"
	},
	"id": "AB123"
}
```

  
  

```json
{
	"message": "Document not found",
	"code": "DOCUMENT_NOT_FOUND"
}
```

  
  

```json
{
	"message": "Authentication required",
	"code": "UNAUTHORIZED"
}
```

### Notes

- Use **`documentType=CC`**, **`CE`**, **`PPT`**, **`NIT`**, or **`PEP`**. **CE**, **PEP**, and **NIT** names typically come from Procuraduría. For immigration status (expiration / VIGENTE) use the dedicated [foreigner-id](/identity/colombia-ce) routes.
- For Procuraduría names only (no DIAN / ADRES / Registraduría), call [Colombia Procuraduría](/identity/colombia-procuraduria) (`/v2/co/procuraduria`).
- See the [Colombia identity documents guide](/identity-validation/colombia/colombia-identity-documents-guide) for digit-length details and endpoint routing.

---
