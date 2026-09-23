---
id: "en-docs-background-check-colombia-public-contracts-response-2"
title: "Colombia - Public Contracts — Response"
sourcePath: "docs/background-check/colombia-public-contracts.mdx"
locale: "en"
category: "background-check"
tags:
  - "co"
  - "background-check"
endpoints:
  - "/v2/co/contracts"
  - "/v2/co/contracts?documenttype=cc&documentnumber=63535790"
sourceAnchor: "Response"
slug: "/background-check/colombia-public-contracts"
url: "https://docs.verifik.co/background-check/colombia-public-contracts"
---

# Colombia - Public Contracts
**API path(s):** /v2/co/contracts, /v2/co/contracts?documenttype=cc&documentnumber=63535790

## Response

```json
{
  "value": {
    "data": {
      "contractor": [
        {
          "contractor": "123456789",
          "contractor_name": "MATEO VERIFIK",
          "count": 19
        }
      ],
      "contracts": [
        {
          "contractor_reference": "18486325807904513",
          "contractor_id": "63535790",
          "contractor": "DIANA ROCIO GARCIA PEÑARANDA",
          "entity_id": "824002672",
          "entity": "CESAR ESE HOSPITAL CAMILO VILLAZON PUMAREJO PUEBLO BELLO",
          "url": "https://www.contratos.gov.co/consultas/detalleProceso.do?numConstancia=18-4-8632580",
          "value": 1250000,
          "object": "PRESTACION DE SERVICIOS PARA EL MANTENIMIENTO PREVENTIVO PLANIFICADO Y CORRECTIVO DE LOS EQUIPOS BIOMEDICOS DE LAS DISTINTAS AREAS DE LA ESE HOSPITAL CAMILO VILLAZON PUMAREJO DE PUEBLO BELLO  CESAR",
          "process_id": "4",
          "department": "CESAR",
          "contract_start_date": "2018-11-01",
          "contract_end_date": "2018-11-16"
        }
      ]
    },
    "signature": {
      "dateTime": "May 24, 2023 4:41 PM",
      "message": "Certified by Verifik.co"
    }
  }
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
"message": "missing documentType\n. missing documentNumber\n"
}
```

```json
{
"code": "MissingParameter",
"message": "documentType must be one of: [CC,NIT]"
}
```
