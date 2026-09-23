---
id: "es-docs-es-transito-bolivia-vehicle-soat-respuesta-2"
title: "Bolivia - SOAT de Vehículo — Respuesta"
sourcePath: "docs-es/transito/bolivia/vehicle-soat.mdx"
locale: "es"
category: "transito"
tags:
  - "bo"
  - "transito"
endpoint: "/v2/bo/vehicle-soat"
sourceAnchor: "Respuesta"
slug: "/transito/bolivia/vehicle-soat"
url: "https://docs.verifik.co/verifik-es/transito/bolivia/vehicle-soat"
---

# Bolivia - SOAT de Vehículo
**API path(s):** /v2/bo/vehicle-soat

Verifik consulta el registro oficial de **SOAT** (*Seguro Obligatorio de Accidentes de Tránsito*) en Bolivia por **placa de matrícula**. Usa este endpoint para **cumplimiento de flotas**, **verificación de seguros** y **controles de tránsito**.
Devuelve detalles de cobertura SOAT cuando la fuente los proporciona:
- **`plate`** — placa de matrícula (**5–8** caracteres), normalizada a mayúsculas
- **`managementYear`** — año de gestión o cobertura SOAT
- **`validFrom`** / **`validTo`** — fechas de vigencia (DD/MM/YYYY)
- **`vehicleType`** — categoría del vehículo (p. ej. AUTOMOVIL, VAGONETA, MOTOCICLETA)
- **`useType`** — clasificación de uso (PARTICULAR, COMERCIAL)
- **`department`** — departamento asociado a la póliza
- **`status`** — estado calculado: VIGENTE, VENCIDO o PENDIENTE
- Respuesta **firmada** por Verifik

## Respuesta

```json
{
  "data": {
    "plate": "1852PHD",
    "managementYear": "2026",
    "validFrom": "01/01/2026",
    "validTo": "31/12/2026",
    "vehicleType": "VAGONETA",
    "useType": "PARTICULAR",
    "department": "LA PAZ",
    "status": "VIGENTE"
  },
  "signature": {
    "dateTime": "July 2, 2026 3:00 PM",
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

### Notas

- **`plate`** es obligatoria; el middleware la normaliza a mayúsculas.
- **`status`** se calcula a partir de **`validFrom`** y **`validTo`** respecto a la fecha actual.
- Usa **`force=true`** cuando necesites omitir registros en caché de MongoDB.
- Trata las respuestas como **datos sensibles del vehículo**; cumple las leyes de privacidad aplicables.
