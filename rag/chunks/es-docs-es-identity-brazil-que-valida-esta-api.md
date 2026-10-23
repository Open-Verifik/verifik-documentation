---
id: "es-docs-es-identity-brazil-que-valida-esta-api"
title: "Ciudadano Brasileño — ¿Qué valida esta API?"
sourcePath: "docs-es/identity/brazil.mdx"
locale: "es"
category: "identity"
tags:
  - "br"
  - "identity"
endpoint: "/v2/br/cedula"
sourceAnchor: "¿Qué valida esta API?"
slug: "/identidad/brasil"
url: "https://docs.verifik.co/verifik-es/identidad/brasil"
---

# Ciudadano Brasileño
**API path(s):** /v2/br/cedula

## ¿Qué valida esta API?

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos brasileños usando el Cadastro de Pessoas Físicas (CPF). Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.

Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## ¿Qué valida esta API?

Nuestra API se conecta directamente con registros oficiales para validar:

-   **Nombre Completo y Número CPF**: Soporta *Cadastro de Pessoas Físicas* (CPF).
-   **Coincidencia de Identidad**: Verifica que el nombre proporcionado coincida con el número CPF.
-   **Verificación de Fecha de Nacimiento**: Valida que la fecha de nacimiento coincida con los registros oficiales.

Al verificar estos detalles, puedes tener la certeza de que la persona con la que tratas es real y posee un documento válido, reduciendo significativamente el riesgo de suplantación y fraude.

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/br/cedula
```

Confirma el **CPF** de una persona física en Brasil contra fuentes oficiales. Envía **CPF**, **fecha de nacimiento** en `DD/MM/YYYY` y el número de documento con o sin separadores; si los datos coinciden, la respuesta devuelve nombres e identificadores normalizados. Pensado para **KYC**, **prevención de fraude** y **onboarding regulado**.

### Encabezados

| Nombre          | Valor              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |
