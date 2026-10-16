---
id: "es-docs-es-validacion-vehiculos-bolivia-respuesta-2"
title: "🇧🇴 Bolivia - Información de Vehículos — Respuesta"
sourcePath: "docs-es/validacion-vehiculos/bolivia.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "bo"
  - "validacion-vehiculos"
endpoint: "/v2/bo/vehicle"
sourceAnchor: "Respuesta"
slug: "/validacion-vehiculos/bolivia"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/bolivia"
---

# 🇧🇴 Bolivia - Información de Vehículos
**API path(s):** /v2/bo/vehicle

El Servicio de Información de Vehículos en Bolivia te permite recuperar detalles precisos sobre un vehículo registrado en el país. Al proporcionar el número de placa de matrícula, el servicio devuelve información como el número de póliza del vehículo, marca, clase (ej. motocicleta de trabajo), ubicación de registro, tipo de servicio (ej. particular) y modelo.

## Respuesta

```json
{
  "data": {
    "Policy": "180680443",
    "brand": "BAJAJ",
    "clase": "MOTOCICLETA - TRABAJO",
    "declaratory": "GRAL. SAAVEDRA",
    "plate": "1234ZYL",
    "service": "PARTICULAR",
    "type": "BOXER 150"
  },
  "signature": {
    "dateTime": "July 26, 2024 4:55 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "ZX35K"
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

  
  

```json
{
  "code": "InternalServerError",
  "message": "Server error."
}
```

## Características

- **Recuperación de Información de Vehículos**: Obtener detalles completos de vehículos del registro vehicular boliviano
- **Validación de Placa de Matrícula**: Verificar placas de matrícula de vehículos registradas en Bolivia
- **Información de Póliza**: Recuperar números de póliza de seguro del vehículo
- **Clasificación de Vehículos**: Obtener información detallada de clase de vehículo (ej. motocicleta de trabajo)
- **Ubicación de Registro**: Acceder a detalles de ubicación de registro del vehículo
- **Tipo de Servicio**: Determinar si el vehículo es particular, comercial u otro tipo de servicio
- **Marca y Modelo**: Obtener información del fabricante y modelo del vehículo
- **Múltiples Lenguajes de Programación**: Soporte para JavaScript, Python, PHP y Swift
- **Datos en Tiempo Real**: Acceder a información vehicular actual y actualizada
- **Manejo Completo de Errores**: Respuestas de error detalladas para varios escenarios
