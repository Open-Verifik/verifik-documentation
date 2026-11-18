---
id: "es-docs-es-validacion-empresarial-mexico-endpoint"
title: "Verificación Empresarial Mexicana — Endpoint"
sourcePath: "docs-es/validacion-empresarial/mexico.mdx"
locale: "es"
category: "validacion-empresarial"
tags:
  - "mx"
  - "validacion-empresarial"
endpoint: "/v2/mx/company"
sourceAnchor: "Endpoint"
---

# Verificación Empresarial Mexicana
**API path(s):** /v2/mx/company

## Endpoint

```
https://api.verifik.co/v2/mx/company
```

Este punto de acceso consulta una persona moral mexicana por su identificador **FME** (*Folio Mercantil Electrónico*). Usa GET con `documentType=FME` y `documentNumber` para obtener datos oficiales de registro, como la razón social y la ciudad, desde fuentes del registro mercantil gubernamental.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `documentType` | string | Yes | Permitido: `FME`. |
| `documentNumber` | string | Yes | Identificador FME (ej: `N-2021007002`). |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/mx/company", {
  params: { documentType: "FME", documentNumber: "N-2021007002" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/mx/company"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "FME", "documentNumber": "N-2021007002"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

```json
{
  "data": {
    "business": "AMASIJO INSUMOS",
    "city": "CHIHUAHUA",
    "detail": {
      "acts": [
        {
          "act": "Constitución de Sociedad por Acciones Simplificada",
          "documentNumber": "",
          "entryDate": "09/02/2021",
          "modality": "Inscripción vía web inmediata",
          "nci": "202100022232",
          "preCodedForm": "M47 - Constitución de Sociedad por Acciones Simplificada",
          "registrationDate": "09/02/2021"
        }
      ],
      "businessLine": "",
      "companyDuration": "INDEFINIDA",
      "corporatePurpose": "Comercio al por mayor de pan y pasteles y otros productos de panadería",
      "curp": "",
      "federalEntity": "Chihuahua",
      "fme": "N-2021007002",
      "fmeStatus": "Open",
      "legalName": "AMASIJO INSUMOS",
      "legalRegime": "Sociedad por Acciones Simplificada",
      "mainPartner": "LYDIA ESPARZA VARELA",
      "municipality": "Chihuahua",
      "nationality": "Mexican",
      "personType": "Legal entity",
      "registrationBackground": "",
      "registrationDate": "09/02/2021",
      "registrationOffice": "Chihuahua",
      "rfc": "",
      "socialAddress": "COLEGIO SAN MARCOS  1631,  , MISIONES UNIVERSIDAD, CHIHUAHUA, C. P. 31124"
    },
    "documentNumber": "N-2021007002",
    "documentType": "FME"
  },
  "signature": {
    "dateTime": "June 2, 2026 5:11 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "DG5PL"
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
  "message": "documentType must be one of: [FME]"
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
  "code": "MissingParameter",
  "message": "missing documentType\n"
}
```

  
  

```json
{
  "code": "InternalServerError",
  "message": "Server error."
}
```
