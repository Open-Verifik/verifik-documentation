---
id: "es-docs-es-resources-proyectos-crear-un-proyecto-notas-4"
title: "Crear un proyecto — Notas"
sourcePath: "docs-es/resources/proyectos/crear-un-proyecto.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Notas"
slug: "/resources/proyectos/crear-un-proyecto"
url: "https://docs.verifik.co/verifik-es/resources/proyectos/crear-un-proyecto"
---

# Crear un proyecto

## Notas

- Modo demo: con `demoMode: true` y sin `demoOTP`, el sistema genera un OTP de 6 dígitos. En desarrollo, el modo demo se activa automáticamente.
- Flujo del proyecto: en producción, crea proyectos completos con `projectFlow` para consistencia.
- Validación: todos los campos se validan; errores retornan 4xx correspondientes.
- Data Protection: `postalCode` entre 3–12 caracteres, alfanumérico, espacios y guiones permitidos.
- Documentos: si `steps.document` no es "skip", `verificationMethods` y `documentTypes` son obligatorios.
- Liveness: `minScore` 0.52–0.9; `searchMinScore` 0.7–0.95.
