---
id: "en-docs-vehicle-validation-peru-peruvian-vehicle-insurance-response-2"
title: "Peru - Vehicle Insurance — Response"
sourcePath: "docs/vehicle-validation/peru/peruvian-vehicle-insurance.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "pe"
  - "vehicle-validation"
endpoints:
  - "/v2/pe/vehiculo/soat"
  - "/v2/pe/vehiculo/soat?plate="
sourceAnchor: "Response"
slug: "/vehicle-validation/peru/peruvian-vehicle-insurance"
url: "https://docs.verifik.co/vehicle-validation/peru/peruvian-vehicle-insurance"
---

# Peru - Vehicle Insurance
**API path(s):** /v2/pe/vehiculo/soat, /v2/pe/vehiculo/soat?plate=

## Response

```json
{
  "data": {
    "plate": "ABC123",
    "soat": {
      "ConsultarSoatResult": {
        "NombreCompania": "Interseguro",
        "FechaInicio": "27/04/2022",
        "FechaFin": "27/04/2023",
        "Placa": "ABC123",
        "NúmeroPoliza": "000000000000000000001",
        "NombreUsovehiculo": "PARTICULAR",
        "NombreClasevehiculo": "AUTOMOVIL",
        "Estado": "VIGENTE",
        "CodigoUnicoPoliza": "0000000000000000000000008",
        "CodigoSBSAseguradora": "001",
        "FechaControlPolicial": "26/04/2022"
      }
    }
  },
  "signature": {
    "dateTime": "July 19, 2022 3:08 PM",
    "message": "Certified by Verifik.co"
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
"message": "missing plate\n"
}
```

## Use Cases

- **SOAT Verification**: Validate the current status of mandatory traffic accident insurance
- **Insurance Services**: Verify active policies and expiration dates
- **Traffic Control**: Validate compliance with mandatory insurance
- **Transportation Companies**: Verify fleet vehicle insurance
- **Compliance Verification**: Confirm policy validity

## Features

- ✅ Query by license plate number
- ✅ Complete SOAT policy information
- ✅ Insurance company name
- ✅ Policy start and end dates
- ✅ Policy status (ACTIVE/INACTIVE)
- ✅ Unique policy code
- ✅ SBS insurer code
- ✅ Police control date
- ✅ Certified response by Verifik.co
