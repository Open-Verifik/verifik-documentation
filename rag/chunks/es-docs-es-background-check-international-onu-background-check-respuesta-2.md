---
id: "es-docs-es-background-check-international-onu-background-check-respuesta-2"
title: "Verificación de Antecedentes ONU — Respuesta"
sourcePath: "docs-es/background-check/international/onu-background-check.mdx"
locale: "es"
category: "background-check"
tags:
  - "onu"
  - "onu?fullname="
  - "background-check"
endpoints:
  - "/v2/onu"
  - "/v2/onu?fullname="
sourceAnchor: "Respuesta"
slug: "/background-check/international/onu-background-check"
url: "https://docs.verifik.co/verifik-es/background-check/international/onu-background-check"
---

# Verificación de Antecedentes ONU
**API path(s):** /v2/onu, /v2/onu?fullname=

## Respuesta

```json
{
  "data": {
    "documentType": "CC",
    "documentNumber": "1234567894",
    "fullName": "MATEO VERIFIK",
    "firstName": "MATEO",
    "lastName": "VERIFIK",
    "arrayName": [
      "MATEO",
      "VERIFIK"
    ],
    "foundInONU": true
  },
  "signature": {
    "dateTime": "August 4, 2022 3:57 PM",
    "message": "Certified by Verifik.co"
  }
}
```

  
  

```json
{
    "code": "NotFound",
    "message": "Record not found."
}
```

  
  

```json
{
    "code": "MissingParameter",
    "message": "missing documentType\n. missing documentNumber\n"
}
```

### Características

-   **Verificación de Sanciones de la ONU**: Verificar si personas o entidades están listadas en las listas de sanciones de la ONU
-   **Cumplimiento Internacional**: Asegurar el cumplimiento con regulaciones globales
-   **Evaluación de Riesgos**: Reducir riesgos financieros y reputacionales
-   **Requisitos Regulatorios**: Esencial para estándares regulatorios de KYC y AML
-   **Respuesta Estructurada**: Formato de datos organizado para fácil integración
-   **Múltiples Lenguajes de Programación**: Soporte para JavaScript, Python, PHP y Swift
-   **Manejo de Errores**: Respuestas de error completas para varios escenarios

## Casos de Uso

- **Cumplimiento Internacional**: Asegurar que las operaciones de su negocio cumplan con las sanciones de las Naciones Unidas verificando la identidad de individuos y entidades
- **Evaluación de Riesgos**: Reducir riesgos financieros y reputacionales identificando personas u organizaciones sancionadas antes de realizar transacciones
- **Requisitos Regulatorios**: Esencial para industrias como banca, finanzas y seguros para cumplir con estándares regulatorios globales de KYC y AML
