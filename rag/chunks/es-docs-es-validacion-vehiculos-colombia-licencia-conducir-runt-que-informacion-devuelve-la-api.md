---
id: "es-docs-es-validacion-vehiculos-colombia-licencia-conducir-runt-que-informacion-devuelve-la-api"
title: "Consulta de Licencia de Conducción por Cédula en RUNT (Premium) | Verifik API Colombia — ¿Qué información devuelve la API?"
sourcePath: "docs-es/validacion-vehiculos/colombia/licencia-conducir-runt.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoints:
  - "/v2/co/cedula"
  - "/v2/co/runt/conductor"
sourceAnchor: "¿Qué información devuelve la API?"
slug: "/validacion-vehiculos/colombia/licencia-conducir-runt"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/licencia-conducir-runt"
---

# Consulta de Licencia de Conducción por Cédula en RUNT (Premium) | Verifik API Colombia
**API path(s):** /v2/co/cedula, /v2/co/runt/conductor

## ¿Qué información devuelve la API?

La API de validación de licencias de Verifik permite consultar información oficial registrada en el Registro Único Nacional de Tránsito (RUNT) de Colombia, utilizando el número de documento de identidad del conductor.

Esta integración es esencial para empresas de transporte, agencias de alquiler de vehículos, aseguradoras y plataformas logísticas que necesitan verificar el estado legal y la idoneidad de los conductores antes de la contratación o autorización de uso de vehículos.

RUNT ahora autentica al conductor con el primer apellido (`primerApellido`) y puede devolver nombres enmascarados. Esta ruta **v2** sigue funcionando sin cambios de integración.

**Tarifa desde el 1 de septiembre de 2026 (America/Bogota):**

- Omita `primerApellido` — Verifik resuelve el apellido internamente — **Premium** (conductor + consulta de nombre). Una fila en el historial.
- Envíe `primerApellido` — se omite la consulta de nombre — tarifa **Básica** (igual que [`/v3/co/runt/conductor`](/verifik-es/validacion-vehiculos/colombia/licencia-conducir-runt-basico)). Una fila en el historial.

Use la ruta [Básica v3](/verifik-es/validacion-vehiculos/colombia/licencia-conducir-runt-basico) si siempre envía `primerApellido` y quiere que sea obligatorio.

## ¿Qué información devuelve la API?

Al realizar una consulta por número de documento, la API retorna datos actualizados directamente del RUNT, incluyendo:

-   Nombre completo y datos del documento del conductor
-   Estado de la licencia (activa, suspendida, cancelada)
-   Categorías de la licencia (ej. B1, C1, A2)
-   Fechas de vencimiento por categoría
-   Estado de certificados médicos y de aptitud
-   Historial de multas e infracciones de tránsito

Estos datos permiten validar la capacidad y situación legal del conductor para operar vehículos.
