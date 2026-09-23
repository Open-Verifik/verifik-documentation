---
id: "es-docs-es-validacion-vehiculos-brazil-notas-3"
title: "Información de vehículos — Notas"
sourcePath: "docs-es/validacion-vehiculos/brazil.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "br"
  - "validacion-vehiculos"
endpoint: "/v2/br/vehicle"
sourceAnchor: "Notas"
slug: "/validacion-vehiculos/brazil"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/brazil"
---

# Información de vehículos
**API path(s):** /v2/br/vehicle

## Notas

- Solo **`plate`** es obligatorio en la cadena de consulta.
- Los registros obtenidos desde la fuente registral pueden devolver **`transmission`** o **`denatranWarning`** como cadena vacía.
- **`doors`** puede ser `"0"` cuando la fuente registral no devuelve capacidad de pasajeros.
- **`fipeCodes`** puede ser un arreglo vacío cuando no hay coincidencia FIPE.
- Los proveedores de respaldo pueden devolver una cobertura de campos ligeramente diferente cuando la fuente primaria no encuentra datos.
- Algunas cuentas habilitan una **ficha técnica ampliada por placa**; usa la URL indicada en tu catálogo de AppFeature cuando corresponda.
