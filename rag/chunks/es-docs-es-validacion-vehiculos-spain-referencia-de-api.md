---
id: "es-docs-es-validacion-vehiculos-spain-referencia-de-api"
title: "🇪🇸 España — Vehículo por matrícula — Referencia de API"
sourcePath: "docs-es/validacion-vehiculos/spain.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "es"
  - "validacion-vehiculos"
endpoint: "/v2/es/vehicle"
sourceAnchor: "Referencia de API"
slug: "/validacion-vehiculos/espana"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/espana"
---

# 🇪🇸 España — Vehículo por matrícula
**API path(s):** /v2/es/vehicle

## Referencia de API

Este servicio te permite **consultar información asociada a una matrícula española** (formato habitual de placas nacionales) y recibir datos estructurados cuando la consulta encuentra coincidencia en la fuente integrada por Verifik.

**Qué obtienes:** normalmente datos útiles para identificar el vehículo en contexto de negocio: por ejemplo marca, modelo, año o tipo, según lo que devuelva la fuente en tu respuesta. La tabla de ejemplo en esta página ilustra la forma del payload; los campos concretos pueden variar según disponibilidad y versión del servicio.

**Casos de uso habituales:** suscripción de seguros o renovaciones donde hay que contrastar vehículo declarado vs. registro; marketplaces de vehículos usados; flotas y logística para validar altas de conductores; o procesos de riesgo donde una matrícula incorrecta implica fraude o error de datos.

**Qué no es:** no sustituye una inspección física ni un informe pericial; es una **consulta automatizada por matrícula**. Si la matrícula no existe, está mal formateada o no hay registro accesible, recibirás el error documentado (por ejemplo 404 o validación de parámetros). Normaliza siempre la matrícula (sin espacios, según las reglas de la API) antes de llamar.

**Privacidad y uso:** utiliza este endpoint solo para finalidades legítimas acordes con tu política de privacidad y la normativa aplicable; el titular del proceso debe saber para qué se consultan datos del vehículo cuando así lo exija la ley.

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/es/vehicle
```

Consulta por **matrícula** (sin espacios) los datos del vehículo disponibles en la fuente: habitualmente marca, modelo, año, tipo de vehículo u otros campos según disponibilidad. Útil para **seguros**, compraventa, flotas y antifraud: contrastas lo que declara el usuario con un registro coherente. No sustituye inspección física ni peritaje. Si la matrícula no existe o el formato es incorrecto, recibirás el error documentado (404 o validación).
