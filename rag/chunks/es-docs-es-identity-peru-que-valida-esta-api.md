---
id: "es-docs-es-identity-peru-que-valida-esta-api"
title: "Ciudadano Peruano v3 — ¿Qué valida esta API?"
sourcePath: "docs-es/identity/peru.mdx"
locale: "es"
category: "identity"
tags:
  - "pe"
  - "identity"
endpoint: "/v3/pe/cedula"
sourceAnchor: "¿Qué valida esta API?"
slug: "/identidad/peru"
url: "https://docs.verifik.co/verifik-es/identidad/peru"
---

# Ciudadano Peruano v3
**API path(s):** /v3/pe/cedula

## ¿Qué valida esta API?

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos peruanos usando el Documento Nacional de Identidad (DNI). Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.

Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## ¿Qué valida esta API?

Nuestra API se conecta directamente con registros oficiales para validar:

-   **Nombre Completo y DNI**: Soporta *Documento Nacional de Identidad* (DNI).
-   **Detalles Personales**: Retorna fecha de nacimiento, género, estado civil y dirección.
-   **Coincidencia de Identidad**: Verifica que el nombre proporcionado coincida con el número DNI.

Al verificar estos detalles, puedes tener la certeza de que la persona con la que tratas es real y posee un documento válido, reduciendo significativamente el riesgo de suplantación y fraude.

## Referencia de API

### Endpoint

```
https://api.verifik.co/v3/pe/cedula
```

Consulta estándar de **DNI peruano (v3)** ante RENIEC: valida el **número de documento** y devuelve datos básicos de identidad. Usa `documentType=DNI` y el `documentNumber` de 8 dígitos.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `documentType` | string | Sí | Valor permitido: `DNI`. |
| `documentNumber` | string | Sí | Número de documento de la persona a consultar. |
