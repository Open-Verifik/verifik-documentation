---
id: "es-docs-es-validacion-identidad-colombia-guia-documentos-identidad-colombia-tabla-de-decision-rapida"
title: "Colombia — Guía de documentos de identidad — Tabla de decisión rápida"
sourcePath: "docs-es/validacion-identidad/colombia/guia-documentos-identidad-colombia.mdx"
locale: "es"
category: "validacion-identidad"
tags:
  - "co"
  - "validacion-identidad"
sourceAnchor: "Tabla de decisión rápida"
slug: "/validacion-identidad/colombia/guia-documentos-identidad-colombia"
url: "https://docs.verifik.co/verifik-es/validacion-identidad/colombia/guia-documentos-identidad-colombia"
---

# Colombia — Guía de documentos de identidad

## Tabla de decisión rápida

Usa esta página cuando no estés seguro de **qué tipo de documento** tiene tu usuario o **qué endpoint de Verifik** debes llamar. Cada documento colombiano tiene un emisor distinto y una ruta de API diferente.

## Tabla de decisión rápida

| Si la persona tiene… | Nombre común | Endpoint Verifik | Campos requeridos | Longitud típica | Lo que acepta esta API |
| --- | --- | --- | --- | --- | --- |
| **CC** | *Cédula de Ciudadanía* | `GET/POST /v2/co/cedula` | `documentType=CC`, `documentNumber` | **3–10** dígitos (hoy común: **8** o **10** NUIP) | **5–10** dígitos |
| **PPT** (nombres / datos civiles) | *Permiso de Protección Temporal* | `GET/POST /v2/co/cedula` | `documentType=PPT`, `documentNumber` | Hasta **7** dígitos (algunos sistemas rellenan a 15) | **5–10** dígitos en esta ruta |
| **PPT** (estado migratorio) | Mismo permiso, Migración Colombia | `GET/POST /v2/co/foreigner-id/ppt` | `documentNumber`, `expeditionDate` | Hasta **7** dígitos | Texto obligatorio + fecha **`DD/MM/YYYY`** |
| **CE** | *Cédula de Extranjería* | `GET/POST /v2/co/foreigner-id/ce` | `documentNumber`, `expeditionDate` | Normalmente **6–7** dígitos | Texto obligatorio + fecha **`DD/MM/YYYY`** |
| **PEP** | *Permiso Especial de Permanencia* | `GET/POST /v2/co/foreigner-id/pep` | `documentNumber`, `expeditionDate` | **15** dígitos (fijo) | Texto obligatorio + fecha **`DD/MM/YYYY`** |
| **PA** | *Pasaporte* — **no es PPT** | `GET /v2/co/runt/conductor` | `documentType=PA`, `documentNumber`, **`primerApellido`** | Variable | No se acepta en `/v2/co/cedula` ni Procuraduría |
