---
id: "es-docs-es-identity-estados-unidos-que-valida-esta-api"
title: "Verificación de SSN en Estados Unidos — ¿Qué valida esta API?"
sourcePath: "docs-es/identity/estados-unidos.mdx"
locale: "es"
category: "identity"
tags:
  - "usa"
  - "identity"
endpoints:
  - "/v2/usa/ssn"
  - "/v2/usa/ssn?documentnumber=123-45-678"
sourceAnchor: "¿Qué valida esta API?"
slug: "/identidad/estados-unidos"
url: "https://docs.verifik.co/verifik-es/identidad/estados-unidos"
---

# Verificación de SSN en Estados Unidos
**API path(s):** /v2/usa/ssn, /v2/usa/ssn?documentnumber=123-45-678

## ¿Qué valida esta API?

La API de Verificación de SSN de Verifik te ayuda a autenticar Números de Seguro Social (SSN) emitidos en Estados Unidos usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.

Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la validez de Números de Seguro Social.

## ¿Qué valida esta API?

Nuestra API se conecta directamente con registros oficiales para validar:

-   **Número SSN**: Verifica la autenticidad de Números de Seguro Social.
-   **Estado Emisor**: Identifica qué estado emitió el SSN.
-   **Primer Año Emitido**: Retorna el año cuando el SSN fue emitido por primera vez.
-   **Estado de Validez**: Confirma si el SSN es válido y activo.

Al verificar estos detalles, puedes tener la certeza de que el Número de Seguro Social es auténtico y válido, reduciendo significativamente el riesgo de fraude.

El Servicio de Verificación de SSN es una herramienta robusta diseñada para verificar Números de Seguro Social (SSN) emitidos en Estados Unidos. Este servicio permite a los usuarios validar rápidamente un SSN proporcionando detalles como el estado emisor y el primer año de emisión. La respuesta incluye el SSN en sí, el año en que fue emitido por primera vez, el estado emisor y el estado de validez del SSN. Esta herramienta es esencial para asegurar la precisión y autenticidad de los Números de Seguro Social.

### Endpoint

```
GET https://api.verifik.co/v2/usa/ssn
```

Valida un Número de Seguro Social (SSN) de EE. UU. Pasando el SSN como parámetro de consulta `documentNumber` (tal como figura en el documento).
