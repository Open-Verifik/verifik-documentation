---
id: "es-docs-es-validacion-vehiculos-chile-vehicle-stolen-notes-3"
title: "🇨🇱 Chile - Vehículo Robado — Notes"
sourcePath: "docs-es/validacion-vehiculos/chile/vehicle-stolen.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "cl"
  - "validacion-vehiculos"
endpoint: "/v2/cl/vehicle-stolen"
sourceAnchor: "Notes"
slug: "/validacion-vehiculos/chile/vehicle-stolen"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/chile/vehicle-stolen"
---

# 🇨🇱 Chile - Vehículo Robado
**API path(s):** /v2/cl/vehicle-stolen

Consulta si un vehículo chileno tiene un **encargo vigente por robo o hurto**.
Devuelve un payload firmado cuando la consulta responde:
- **`plate`** — patente chilena, **4–7** caracteres alfanuméricos
- **`hasTheftReport`** — `true` cuando hay un encargo vigente; `false` en caso contrario
- **`description`** — texto de estado (p. ej. `NO REGISTRA ENCARGO Vigentes`)
- **`theftReport`** — objeto del reporte: **`typeCode`**, **`plateOriginal`**, **`plateFormatted`**, **`reportDate`**, **`partiallyResolved`**, **`items`**
- **`items[]`** — especies robadas: **`name`**, **`description`**, **`serial`**, **`resolvedDate`**, **`delivered`**, **`deliveryDate`**, **`type`**
- Respuesta **firmada** por Verifik
Útil para **suscripción de seguros**, **onboarding de flotas** y **due diligence** antes de registrar o financiar un vehículo chileno.

## Notes

- **Sin encargo vigente** devuelve **HTTP 200** con **`hasTheftReport: false`** — no es un 404.
- **Modo sandbox:** la placa **`PTKX93`** devuelve un perfil estable sin encargo; **`NG8245`** devuelve un encargo por robo.
- Formato de patente inválido devuelve **409** `invalid_plate_format`.
- La **disponibilidad** del registro depende del entorno; caídas pueden devolver **409** por timeout.
