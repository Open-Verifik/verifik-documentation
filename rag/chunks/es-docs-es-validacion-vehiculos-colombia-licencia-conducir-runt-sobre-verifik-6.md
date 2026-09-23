---
id: "es-docs-es-validacion-vehiculos-colombia-licencia-conducir-runt-sobre-verifik-6"
title: "Consulta de Licencia de Conducción por Cédula en RUNT (Premium) | Verifik API Colombia — Sobre Verifik"
sourcePath: "docs-es/validacion-vehiculos/colombia/licencia-conducir-runt.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoints:
  - "/v2/co/cedula"
  - "/v2/co/runt/conductor"
sourceAnchor: "Sobre Verifik"
slug: "/validacion-vehiculos/colombia/licencia-conducir-runt"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/licencia-conducir-runt"
---

# Consulta de Licencia de Conducción por Cédula en RUNT (Premium) | Verifik API Colombia
**API path(s):** /v2/co/cedula, /v2/co/runt/conductor

La API de validación de licencias de Verifik permite consultar información oficial registrada en el Registro Único Nacional de Tránsito (RUNT) de Colombia, utilizando el número de documento de identidad del conductor.
Esta integración es esencial para empresas de transporte, agencias de alquiler de vehículos, aseguradoras y plataformas logísticas que necesitan verificar el estado legal y la idoneidad de los conductores antes de la contratación o autorización de uso de vehículos.
RUNT ahora autentica al conductor con el primer apellido (`primerApellido`) y puede devolver nombres enmascarados. Esta ruta **v2** sigue funcionando sin cambios de integración.
**Tarifa desde el 1 de septiembre de 2026 (America/Bogota):**
- Omita `primerApellido` — Verifik resuelve el apellido internamente — **Premium** (conductor + consulta de nombre). Una fila en el historial.
- Envíe `primerApellido` — se omite la consulta de nombre — tarifa **Básica** (igual que [`/v3/co/runt/conductor`](/verifik-es/validacion-vehiculos/colombia/licencia-conducir-runt-basico)). Una fila en el historial.
Use la ruta [Básica v3](/verifik-es/validacion-vehiculos/colombia/licencia-conducir-runt-basico) si siempre envía `primerApellido` y quiere que sea obligatorio.

## Sobre Verifik

Verifik es una plataforma de verificación de identidad y cumplimiento que conecta empresas con fuentes oficiales en toda América Latina.
Sus soluciones API automatizan procesos de KYC, KYB, AML y validación de antecedentes, reduciendo el riesgo de fraude y fortaleciendo la confianza digital.
