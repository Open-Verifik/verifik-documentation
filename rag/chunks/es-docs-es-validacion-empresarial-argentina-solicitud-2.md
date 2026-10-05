---
id: "es-docs-es-validacion-empresarial-argentina-solicitud-2"
title: "Verificación Empresarial Argentina — Solicitud"
sourcePath: "docs-es/validacion-empresarial/argentina.mdx"
locale: "es"
category: "validacion-empresarial"
tags:
  - "ar"
  - "validacion-empresarial"
endpoint: "/v2/ar/company"
sourceAnchor: "Solicitud"
slug: "/validacion-empresarial/argentina"
url: "https://docs.verifik.co/verifik-es/validacion-empresarial/argentina"
---

# Verificación Empresarial Argentina
**API path(s):** /v2/ar/company

La API de Verificación Empresarial de Verifik te ayuda a autenticar empresas argentinas usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYB (Conozca a su Empresa), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.
Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la legitimidad de compañías, socios o proveedores.

## Solicitud

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/ar/company", {
  params: { documentType: "CUIT", documentNumber: "33516727409" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/ar/company"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CUIT", "documentNumber": "33516727409"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

```json
{
    "data": {
        "businessName": "MERCADOLIBRE S.R.L.",
        "contractDate": "15-07-1999",
        "documentNumber": "30703088534",
        "documentType": "CUIT",
        "economicActivities": {
            "mainActivity": [
                {
                    "code": "620900 (F-883)",
                    "description": "SERVICIOS DE INFORMÁTICA N.C.P.",
                    "startDate": "04/2015"
                }
            ],
            "secondaryActivity": [
                {
                    "code": "731009 (F-883)",
                    "description": "SERVICIOS DE PUBLICIDAD N.C.P.",
                    "startDate": "12/2014"
                },
                {
                    "code": "649999 (F-883)",
                    "description": "SERVICIOS DE FINANCIACIÓN Y ACTIVIDADES FINANCIERAS N.C.P.",
                    "startDate": "12/2014"
                },
                {
                    "code": "829900 (F-883)",
                    "description": "SERVICIOS EMPRESARIALES N.C.P.",
                    "startDate": "12/2014"
                },
                {
                    "code": "523090 (F-883)",
                    "description": "SERVICIOS DE GESTIÓN Y LOGÍSTICA PARA EL TRANSPORTE DE MERCADERÍAS N.C.P.",
                    "startDate": "08/2017"
                }
            ]
        },
        "legalForm": "S.R.L."
    },
    "signature": {
        "dateTime": "October 10, 2025 10:26 AM",
        "message": "Certified by Verifik.co"
    },
    "id": "AXR7A"
}
```

  
  

```json
{
    "code": "NotFound",
    "message": "Record not found."
}
```
