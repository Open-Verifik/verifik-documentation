---
id: "es-docs-es-legal-epic-eci-solicitud-2"
title: "India — EPIC (Votante) consulta de nombres | Verifik — Solicitud"
sourcePath: "docs-es/legal/epic-eci.mdx"
locale: "es"
category: "legal"
tags:
  - "in"
  - "legal"
endpoint: "/v2/in/epic"
sourceAnchor: "Solicitud"
slug: "/legal/epic-eci"
url: "https://docs.verifik.co/verifik-es/legal/epic-eci"
---

# India — EPIC (Votante) consulta de nombres | Verifik
**API path(s):** /v2/in/epic

Verifik ofrece un único **endpoint REST** para consultar la **información de nombre** vinculada a un **EPIC** (número de *Elector's Photo Identity Card* en India) a partir de datos alineados con la **Comisión Electoral de India (ECI)**. Úsalo en flujos de KYC, onboarding o cumplimiento que requieran comprobar que un número de Voter ID devuelve datos de nombre coherentes con el padrón.

## Solicitud

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

### Respuesta

  

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

### Notas

- `documentNumber` debe tener **exactamente 10 caracteres**; longitud o formato inválido pueden devolver `409`.
- Los datos se obtienen **a través de Verifik**; la cobertura depende de la disponibilidad ECI para el EPIC.
- Para **lugar de votación y circunscripción**, usa el endpoint complementario en [**India — Votación / mesa (EPIC)**](../votacion-eci-epic) (`GET /v2/in/epic/votacion`).

---
