---
id: "es-docs-es-validacion-vehiculos-ecuador-respuesta-2"
title: "🇪🇨 Ecuador - Multas de Vehículos — Respuesta"
sourcePath: "docs-es/validacion-vehiculos/ecuador.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "ec"
  - "validacion-vehiculos"
endpoints:
  - "/v2/ec/vehiculo/placa/multas"
  - "/v2/ec/vehiculo/placa/multas?plate=abc1234"
sourceAnchor: "Respuesta"
slug: "/validacion-de-vehiculo/ecuador/consulta-de-informacion-de-vehiculo"
url: "https://docs.verifik.co/verifik-es/validacion-de-vehiculo/ecuador/consulta-de-informacion-de-vehiculo"
---

# 🇪🇨 Ecuador - Multas de Vehículos
**API path(s):** /v2/ec/vehiculo/placa/multas, /v2/ec/vehiculo/placa/multas?plate=abc1234

El servicio de Multas de Placa de Vehículos de Ecuador te permite recuperar información sobre multas asociadas con la placa de matrícula de un vehículo en Ecuador. Puedes acceder a detalles como la información de registro del vehículo, incluyendo el número de placa, clase y modelo. El servicio también proporciona el estado actual, tipo de servicio y fecha de vencimiento del registro, junto con cualquier multa pendiente vinculada a la placa de matrícula.
Este servicio es útil para individuos y empresas que buscan mantenerse informados sobre las multas asociadas con sus vehículos y asegurar el cumplimiento de las leyes de tránsito ecuatorianas.

## Respuesta

```json
{
  "data": {
    "camvCpn": "T00950479",
    "class": "AUTOMOVIL",
    "cylinderCapacity": "1600",
    "information": null,
    "lastCheckUpDate": "2023/08/31",
    "lastPaymentYear": "2023",
    "lastRegistrationDate": "2019/03/21",
    "manufactureCountry": "MEXICO",
    "model": "SENTRA 1.6 M/T",
    "plate": "ABC1234",
    "purchaseDate": "2010/06/09",
    "reasonMessage": null,
    "registrationCanton": "IBARRA",
    "registrationExpirationDate": "2024/03/19",
    "remission": null,
    "service": "PARTICULAR",
    "status": "ASIGNADO",
    "total": "76.72",
    "usageType": "NO APLICA",
    "year": "2010",
    "multas": [
      {
        "id": "1",
        "infraccion": "92507343",
        "entidad": "MNO-MANCOMUNIDAD DEL NORTE",
        "citacion": "N-ACT0349-00184",
        "placa": "ABC1234",
        "documento": "VEH - 1801442417",
        "fechaDeEmision": "2024-03-11 09:43:26.0",
        "fechaNotificacion": "2024-03-11 09:43:26.0",
        "fechaLimiteDePago": "21-03-2024 09:43:26",
        "puntos": "0",
        "pag": "N",
        "anu": "N",
        "imp": "N",
        "sancion": "46",
        "multa": "0",
        "remision": "0",
        "totalAPagar": "23",
        "articuloliteral": "Art. 391 - Lit. 05.  COND. ESTACIONE EN SITIOS PROHIBIDOS POR LA LEY Y REGLAM",
        "tamanoImagen": "0",
        "bloqueo": "N"
      }
    ]
  },
  "signature": {
    "dateTime": "March 12, 2024 7:50 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "OB2YV"
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
