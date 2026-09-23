---
id: "es-docs-es-validacion-vehiculos-colombia-runt-soat-rtm-que-informacion-devuelve-la-api"
title: "SOAT y RTM — ¿Qué información devuelve la API?"
sourcePath: "docs-es/validacion-vehiculos/colombia/runt-soat-rtm.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoints:
  - "/v2/co/runt/vehiculo"
  - "/v2/co/runt/vehiculo?documenttype=cc&documentnumber=123456789&plate=abc123"
sourceAnchor: "¿Qué información devuelve la API?"
slug: "/validacion-vehiculos/colombia/runt-soat-rtm"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/runt-soat-rtm"
---

# SOAT y RTM
**API path(s):** /v2/co/runt/vehiculo, /v2/co/runt/vehiculo?documenttype=cc&documentnumber=123456789&plate=abc123

## ¿Qué información devuelve la API?

La API de Validación de SOAT y RTM de Verifik proporciona acceso en tiempo real al estado de los documentos obligatorios para vehículos registrados en Colombia: el Seguro Obligatorio de Accidentes de Tránsito (SOAT) y la Revisión Técnico-Mecánica (RTM).

Este servicio es crítico para asegurar que los vehículos cumplan con la normativa de tránsito colombiana, ayudando a prevenir multas y problemas legales.

## ¿Qué información devuelve la API?

Al realizar una consulta utilizando la placa y el documento del propietario, la API retorna:

-   **Estado del SOAT**: Vigencia, número de póliza, aseguradora, fechas de expedición y vencimiento.
-   **Estado de la RTM**: Vigencia, número de certificado, centro de diagnóstico, fechas de expedición y vencimiento.
-   **Detalles del Vehículo**: Marca, línea, modelo, color y estado del registro.
-   **Verificación del Propietario**: Confirmación del número de documento asociado al vehículo.

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/co/runt/vehiculo
```

El servicio de Información de Vehículos Colombianos proporciona acceso en tiempo real a detalles sobre un vehículo registrado en Colombia. Utilizando este servicio, puedes obtener información como el nombre e identificación del propietario, color del vehículo, marca y modelo, estado de registro, y fechas de vencimiento del SOAT (seguro obligatorio de accidentes de tránsito) y revisión técnica.

Este servicio es ideal para empresas de la industria automotriz, compañías de seguros y agencias gubernamentales que necesitan verificar información de vehículos y asegurar el cumplimiento de regulaciones.
