---
id: "es-docs-es-identity-chile-que-valida-esta-api"
title: "Ciudadano Chileno — ¿Qué valida esta API?"
sourcePath: "docs-es/identity/chile.mdx"
locale: "es"
category: "identity"
tags:
  - "cl"
  - "identity"
endpoint: "/v2/cl/cedula"
sourceAnchor: "¿Qué valida esta API?"
slug: "/identidad/chile"
url: "https://docs.verifik.co/verifik-es/identidad/chile"
---

# Ciudadano Chileno
**API path(s):** /v2/cl/cedula

## ¿Qué valida esta API?

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos chilenos usando el Rol Único Nacional (RUN). Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.

Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## ¿Qué valida esta API?

Nuestra API se conecta directamente con registros oficiales para validar:

-   **Nombre Completo y RUN/RUT**: Soporta *Rol Único Nacional* (RUN) o *Rol Único Tributario* (RUT). Estos son dos términos para el mismo número de identificación utilizado en Chile.
-   **Coincidencia de Identidad**: Verifica que el nombre proporcionado coincida con el número RUN/RUT.

Al verificar estos detalles, puedes tener la certeza de que la persona con la que tratas es real y posee un documento válido, reduciendo significativamente el riesgo de suplantación y fraude.

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/cl/cedula
```

Verifica identidad en Chile con RUN/RUT: datos nominales frente a fuentes del registro civil oficial para KYC, onboarding y prevención de fraude.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `documentType` | string | Sí | Valores permitidos: `RUN` o `RUT`. Ambos se refieren al mismo número de identificación. |
| `documentNumber` | string | Sí | Valor RUN/RUT sin espacios ni separadores. |
