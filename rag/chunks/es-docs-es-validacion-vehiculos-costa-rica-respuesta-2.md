---
id: "es-docs-es-validacion-vehiculos-costa-rica-respuesta-2"
title: "🇨🇷 Costa Rica - Información de Vehículos — Respuesta"
sourcePath: "docs-es/validacion-vehiculos/costa-rica.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "cr"
  - "validacion-vehiculos"
endpoints:
  - "/v2/cr/vehicle"
  - "/v2/cr/vehicle?plate=aa123ba"
sourceAnchor: "Respuesta"
slug: "/validacion-vehiculos/costa-rica"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/costa-rica"
---

# 🇨🇷 Costa Rica - Información de Vehículos
**API path(s):** /v2/cr/vehicle, /v2/cr/vehicle?plate=aa123ba

Este servicio devuelve información detallada de un vehículo inscrito en Costa Rica mediante su **placa de matrícula**. Suele incluir titular actual, datos técnicos del vehículo, **infracciones** e **historial de propietarios** cuando la fuente los provee.
Útil para flotas, seguros y cumplimiento.

## Respuesta

```json
{
  "data": {
    "currentOwner": "MARIA ELENA LOPEZ GARCIA",
    "dataVehicle": {
      "engineDisplacement": "1600",
      "estateValue": "$15000000",
      "grossWeight": "1850 kg",
      "netWeight": "1420 kg",
      "noVin": "JTD00000001",
      "occupants": "5",
      "power": "120 HP",
      "traction": "4x2"
    },
    "infractions": [],
    "ownerHistory": [
      {
        "date": "15/01/2020",
        "fullName": "MARIA ELENA LOPEZ GARCIA"
      },
      {
        "date": "10/06/2015",
        "fullName": "JOSE ANTONIO PEREZ RODRIGUEZ"
      }
    ],
    "plate": "AA123BA",
    "vehicle": "TOYOTA COROLLA XLI"
  },
  "signature": {
    "dateTime": "July 27, 2026 3:00 PM",
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

## Características

- **Recuperación de Información de Vehículos**: Obtener detalles completos de vehículos del registro vehicular costarricense
- **Validación de Placa de Matrícula**: Verificar placas de matrícula de vehículos registradas en Costa Rica
- **Información del Propietario Actual**: Recuperar detalles del propietario actual del vehículo
- **Especificaciones del Vehículo**: Obtener cilindrada del motor, valor fiscal, peso, capacidad, potencia y tracción
- **Historial de Infracciones**: Acceder al historial completo de violaciones de tránsito e infracciones
- **Historial de Propietarios**: Ver lista cronológica de todos los propietarios anteriores del vehículo
- **Autoridad Judicial**: Obtener información sobre autoridades judiciales que manejan infracciones
- **Información de Multas**: Acceder a números de multas y números de resumen para infracciones
- **Múltiples Lenguajes de Programación**: Soporte para JavaScript, Python, PHP y Swift
- **Datos en Tiempo Real**: Acceder a información vehicular actual y actualizada
- **Manejo Completo de Errores**: Respuestas de error detalladas para varios escenarios
- **Integración con Registro Costarricense**: Acceso directo a base de datos oficial de vehículos de Costa Rica
