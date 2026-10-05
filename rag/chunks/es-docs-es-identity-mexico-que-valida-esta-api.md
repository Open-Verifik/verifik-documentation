---
id: "es-docs-es-identity-mexico-que-valida-esta-api"
title: "Ciudadano Mexicano — ¿Qué valida esta API?"
sourcePath: "docs-es/identity/mexico.mdx"
locale: "es"
category: "identity"
tags:
  - "mx"
  - "identity"
endpoint: "/v2/mx/curp"
sourceAnchor: "¿Qué valida esta API?"
slug: "/identidad/mexico"
url: "https://docs.verifik.co/verifik-es/identidad/mexico"
---

# Ciudadano Mexicano
**API path(s):** /v2/mx/curp

## ¿Qué valida esta API?

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos mexicanos usando la Clave Única de Registro de Población (CURP). Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.

Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## ¿Qué valida esta API?

Nuestra API se conecta directamente con registros oficiales para validar:

-   **Nombre Completo y CURP**: Soporta *Clave Única de Registro de Población* (CURP).
-   **Detalles Personales**: Retorna fecha de nacimiento, género y nacionalidad.
-   **Coincidencia de Identidad**: Verifica que el nombre proporcionado coincida con el número CURP.

Al verificar estos detalles, puedes tener la certeza de que la persona con la que tratas es real y posee un documento válido, reduciendo significativamente el riesgo de suplantación y fraude.

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/mx/curp
```

Este punto de acceso verifica el **CURP** (*Clave Única de Registro de Población*) frente a registros oficiales. Envía `documentType` y `documentNumber` en una solicitud GET; una respuesta exitosa confirma el registro de identidad y devuelve el nombre y datos biográficos validados cuando el CURP es reconocido.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `documentType` | string | Sí | Valor permitido: `CURP`. |
| `documentNumber` | string | Sí | El valor CURP a validar. |
