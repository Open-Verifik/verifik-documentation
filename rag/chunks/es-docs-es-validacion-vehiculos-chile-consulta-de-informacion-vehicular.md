---
id: "es-docs-es-validacion-vehiculos-chile-consulta-de-informacion-vehicular"
title: "🇨🇱 Chile - Información de Vehículos — Consulta de Información Vehicular"
sourcePath: "docs-es/validacion-vehiculos/chile.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "cl"
  - "validacion-vehiculos"
endpoints:
  - "/v2/cl/vehicle"
  - "/v2/cl/vehicle-soap"
  - "/v2/cl/vehicle/v3"
  - "/v2/cl/vehicle?plate=bbcc12"
sourceAnchor: "Consulta de Información Vehicular"
slug: "/validacion-vehiculos/chile"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/chile"
---

# 🇨🇱 Chile - Información de Vehículos
**API path(s):** /v2/cl/vehicle, /v2/cl/vehicle-soap, /v2/cl/vehicle/v3, /v2/cl/vehicle?plate=bbcc12

## Consulta de Información Vehicular

El servicio de validación de vehículos chilenos proporciona capacidades de verificación integrales para información vehicular. Este servicio te permite recuperar información detallada sobre vehículos registrados en Chile.

Endpoints vehiculares relacionados en Chile:

- **Información vehicular (`v2/cl/vehicle`)**: consulta comercial (Reale / getapi). Un **404** significa que la placa no está en esa fuente, no una caída del servicio.
- **Revisión técnica vehicular (`v3/cl/vehicle`)**: estado e historial de inspecciones técnicas. Ver [Chile - Revisión técnica vehicular](/verifik-es/validacion-vehiculos/chile/vehicle-technical-review). Usa esta ruta para ficha técnica / revisión (`GET /v3/cl/vehicle`, no `/v2/cl/vehicle/v3`).
- **SOAP vehicular (`v2/cl/vehicle-soap`)**: certificado de seguro obligatorio de accidentes personales. Ver [Chile - SOAP vehicular](/verifik-es/validacion-vehiculos/chile/vehicle-soap).

## Consulta de Información Vehicular

### Endpoint

```
GET https://api.verifik.co/v2/cl/vehicle
```

Consulta por **placa** (`plate`, sin espacios ni puntos). Suele devolver **marca**, **modelo**, **año**, **chasis/VIN**, **motor**, **color**, **tipo**, **resumen de multas** y **RUT del titular** si el proveedor lo expone—útil para **flotas**, **garantías** y **siniestros**. No es el permiso de circulación oficial; una placa válida puede responder 404 si no está en la fuente comercial.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |
