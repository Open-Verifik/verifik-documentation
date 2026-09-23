---
id: "es-docs-es-validaciones-de-identidad-estados-unidos-respuesta-3"
title: "Verificación de SSN en Estados Unidos — Respuesta"
sourcePath: "docs-es/validaciones-de-identidad/estados-unidos.mdx"
locale: "es"
category: "validaciones-de-identidad"
tags:
  - "usa"
  - "validaciones-de-identidad"
endpoints:
  - "/v2/usa/ssn"
  - "/v2/usa/ssn?documentnumber=123-45-678"
sourceAnchor: "Respuesta"
slug: "/validaciones-de-identidad/estados-unidos"
url: "https://docs.verifik.co/verifik-es/validaciones-de-identidad/estados-unidos"
---

# Verificación de SSN en Estados Unidos
**API path(s):** /v2/usa/ssn, /v2/usa/ssn?documentnumber=123-45-678

La API de Verificación de SSN de Verifik te ayuda a autenticar Números de Seguro Social (SSN) emitidos en Estados Unidos usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.
Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la validez de Números de Seguro Social.

## Respuesta

```json
{
  "data": {
    "firstYearIssued": "1936",
    "issuingState": "Oklahoma (OK)",
    "SSN": "123-45-678",
    "valid": true
  },
  "signature": {
    "dateTime": "April 11, 2023 3:42 PM",
    "message": "Certified by Verifik.co"
  }
}
```

  
  

```json
{
  "message": "Authentication required",
  "code": "UNAUTHORIZED"
}
```

  
  

```json
{
  "message": "Access forbidden",
  "code": "FORBIDDEN"
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
  "message": "missing documentNumber\n"
}
```

## Casos de Uso Comunes

-   **Fintech y Banca**: Verifica SSNs al instante durante la apertura de cuentas o solicitudes de crédito.
-   **Empleo y Verificaciones de Antecedentes**: Autentica SSNs como parte de tu proceso de contratación y verificación.
-   **Seguros y Salud**: Confirma la validez de SSNs antes de emitir pólizas o proporcionar beneficios médicos.
-   **Servicios Gubernamentales**: Valida SSNs para cumplimiento y requisitos regulatorios.

## Fuentes Oficiales y Confiabilidad

Nos conectamos directamente con fuentes oficiales de datos de la Administración del Seguro Social de Estados Unidos para asegurar que recibas información verificada y actualizada al minuto.
Cada consulta se maneja con estricto cumplimiento de estándares de seguridad y regulatorios.

## Beneficios Clave

-   **Cumplimiento Automatizado**: Agiliza tus verificaciones para prevenir fraudes sin agregar fricción a tus usuarios.
-   **Resultados Instantáneos**: Procesa verificaciones en segundos, perfecto para onboarding digital en tiempo real.
-   **Datos Confiables**: Confía en datos obtenidos directamente de registros oficiales de la Administración del Seguro Social.
-   **Integración Sencilla**: Conéctate fácilmente vía nuestra API REST o usa nuestros SDKs compatibles.
