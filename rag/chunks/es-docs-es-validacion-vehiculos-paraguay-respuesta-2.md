---
id: "es-docs-es-validacion-vehiculos-paraguay-respuesta-2"
title: "🇵🇾 Paraguay - Información de Vehículos — Respuesta"
sourcePath: "docs-es/validacion-vehiculos/paraguay.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "py"
  - "validacion-vehiculos"
endpoints:
  - "/v2/py/vehicle"
  - "/v2/py/vehicle?plate=abc123"
sourceAnchor: "Respuesta"
slug: "/validacion-vehiculos/paraguay"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/paraguay"
---

# 🇵🇾 Paraguay - Información de Vehículos
**API path(s):** /v2/py/vehicle, /v2/py/vehicle?plate=abc123

Este servicio proporciona información detallada sobre un vehículo en Paraguay usando su número de placa de matrícula. La respuesta incluye detalles del vehículo como la marca, chasis, tipo, año, número de ejes, el nombre del propietario, el tipo de servicio, el estado actual del vehículo y el número de placa de matrícula.
Esta información es útil para varios propósitos, incluyendo verificación de vehículos, verificaciones de propiedad y monitoreo de cumplimiento.

## Respuesta

```json
{
  "data": {
    "axles": "3",
    "brand": "MERCEDES BENZ",
    "chassis": "9BM958207GB012345",
    "owner": "CI086-COOPERATIVA CHORTITZER LTDA.",
    "plate": "ABC123",
    "service": "CARGA NACIONAL",
    "situation": "VENCIDA",
    "type": "CAMION CISTERNA",
    "year": "2023"
  },
  "signature": {
    "dateTime": "June 24, 2024 7:34 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "Z4ALR"
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

- **Recuperación de Información de Vehículos**: Obtener detalles completos de vehículos del registro vehicular paraguayo
- **Validación de Placa de Matrícula**: Verificar placas de matrícula de vehículos registradas en Paraguay
- **Especificaciones del Vehículo**: Acceder a especificaciones detalladas del vehículo incluyendo:
  - Información de marca y fabricante
  - Número de chasis para identificación del vehículo
  - Tipo y clasificación del vehículo
  - Año de fabricación y detalles del modelo
  - Número de ejes para configuración del vehículo
- **Información de Propiedad**: Recuperar detalles del propietario actual del vehículo
- **Clasificación de Tipo de Servicio**: Obtener información sobre el tipo de servicio del vehículo (ej. CARGA NACIONAL)
- **Monitoreo de Estado del Vehículo**: Acceder a la situación y estado actual del vehículo
- **Verificación de Cumplimiento**: Verificar cumplimiento y estado de registro del vehículo
- **Múltiples Lenguajes de Programación**: Soporte para JavaScript, Python, PHP y Swift
- **Datos en Tiempo Real**: Acceder a información vehicular actual y actualizada
- **Manejo Completo de Errores**: Respuestas de error detalladas para varios escenarios
- **Integración con Registro Paraguayo**: Acceso directo a base de datos oficial de vehículos de Paraguay
- **Clasificación de Tipo de Vehículo**: Soporte para varios tipos de vehículos incluyendo camiones, cisternas y vehículos comerciales
- **Verificación de Propiedad**: Verificar propiedad del vehículo para propósitos legales y comerciales
