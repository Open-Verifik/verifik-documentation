---
id: "es-docs-es-validacion-vehiculos-peru-seguro-vehiculo-respuesta-2"
title: "Perú - Seguro de Vehículo — Respuesta"
sourcePath: "docs-es/validacion-vehiculos/peru/seguro-vehiculo.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "pe"
  - "validacion-vehiculos"
endpoints:
  - "/v2/pe/vehiculo/soat"
  - "/v2/pe/vehiculo/soat?plate=abc123"
sourceAnchor: "Respuesta"
slug: "/validacion-de-vehiculo/peru/seguro-de-vehiculos-en-peru"
url: "https://docs.verifik.co/verifik-es/validacion-de-vehiculo/peru/seguro-de-vehiculos-en-peru"
---

# Perú - Seguro de Vehículo
**API path(s):** /v2/pe/vehiculo/soat, /v2/pe/vehiculo/soat?plate=abc123

## Respuesta

```json
{
  "data": {
    "plate": "ABC123",
    "soat": {
      "ConsultarSoatResult": {
        "NombreCompania": "Interseguro",
        "FechaInicio": "27/04/2022",
        "FechaFin": "27/04/2023",
        "Placa": "ABC123",
        "NúmeroPoliza": "000000000000000000001",
        "NombreUsovehiculo": "PARTICULAR",
        "NombreClasevehiculo": "AUTOMOVIL",
        "Estado": "VIGENTE",
        "CodigoUnicoPoliza": "0000000000000000000000008",
        "CodigoSBSAseguradora": "001",
        "FechaControlPolicial": "26/04/2022"
      }
    }
  },
  "signature": {
    "dateTime": "July 19, 2022 3:08 PM",
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

## Casos de Uso

- **Verificación de SOAT**: Validar el estado actual del seguro obligatorio de accidentes de tránsito
- **Servicios de Seguros**: Verificar pólizas activas y fechas de vencimiento
- **Control de Tránsito**: Validar cumplimiento del seguro obligatorio
- **Empresas de Transporte**: Verificar seguros de flotas vehiculares
- **Verificación de Cumplimiento**: Confirmar vigencia de pólizas de seguros

## Características

- ✅ Consulta por número de placa
- ✅ Información completa de la póliza SOAT
- ✅ Nombre de la compañía aseguradora
- ✅ Fechas de inicio y fin de vigencia
- ✅ Estado de la póliza (VIGENTE/NO VIGENTE)
- ✅ Código único de póliza
- ✅ Código SBS de la aseguradora
- ✅ Fecha de control policial
- ✅ Respuesta certificada por Verifik.co
