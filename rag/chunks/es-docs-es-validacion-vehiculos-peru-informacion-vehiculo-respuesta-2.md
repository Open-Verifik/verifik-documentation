---
id: "es-docs-es-validacion-vehiculos-peru-informacion-vehiculo-respuesta-2"
title: "Perú - Información de Vehículo — Respuesta"
sourcePath: "docs-es/validacion-vehiculos/peru/informacion-vehiculo.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "pe"
  - "validacion-vehiculos"
endpoints:
  - "/v2/pe/vehiculo/placa"
  - "/v2/pe/vehiculo/placa?plate=abc123"
sourceAnchor: "Respuesta"
slug: "/validacion-vehiculos/peru/informacion-vehiculo"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/peru/informacion-vehiculo"
---

# Perú - Información de Vehículo
**API path(s):** /v2/pe/vehiculo/placa, /v2/pe/vehiculo/placa?plate=abc123

## Respuesta

```json
{
  "data": {
    "plate": "ABC123",
    "use": "PARTICULAR",
    "type": "AUTOMOVIL",
    "brand": "NISSAN",
    "model": "VERSA",
    "year": "2014",
    "engineSerial": "HR123456789J",
    "chasisSerial": "1234567890",
    "seats": "5",
    "validFormat": true,
    "serial": "1234567890"
  },
  "signature": {
    "dateTime": "August 1, 2022 5:23 PM",
    "message": "Certified by [Verifik.co](http://verifik.co/)"
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

## Casos de Uso

- **Verificación de Vehículos**: Validar información básica de vehículos registrados en Perú
- **Servicios de Seguros**: Verificar datos del vehículo para procesos de aseguramiento
- **Agencias de Tránsito**: Consultar información oficial de vehículos
- **Empresas de Transporte**: Validar datos de vehículos comerciales
- **Verificación de Propiedad**: Confirmar detalles técnicos del vehículo

## Características

- ✅ Consulta por número de placa
- ✅ Información técnica completa (marca, modelo, año)
- ✅ Números de serie del motor y chasis
- ✅ Capacidad de asientos
- ✅ Tipo de uso del vehículo
- ✅ Validación de formato de placa
- ✅ Respuesta certificada por Verifik.co
