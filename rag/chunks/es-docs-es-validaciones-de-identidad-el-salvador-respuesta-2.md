---
id: "es-docs-es-validaciones-de-identidad-el-salvador-respuesta-2"
title: "Ciudadano Salvadoreño — Respuesta"
sourcePath: "docs-es/validaciones-de-identidad/el-salvador.mdx"
locale: "es"
category: "validaciones-de-identidad"
tags:
  - "sv"
  - "validaciones-de-identidad"
endpoints:
  - "/v2/sv/dui"
  - "/v2/sv/dui?"
  - "/v2/sv/dui?documentnumber=123456789&dateofbirth=01/12/1995"
sourceAnchor: "Respuesta"
slug: "/validaciones-de-identidad/el-salvador"
url: "https://docs.verifik.co/verifik-es/validaciones-de-identidad/el-salvador"
---

# Ciudadano Salvadoreño
**API path(s):** /v2/sv/dui, /v2/sv/dui?, /v2/sv/dui?documentnumber=123456789&dateofbirth=01/12/1995

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos salvadoreños usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.
Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## Respuesta

```json
{
  "data": {
    "documentNumber": "123456789",
    "fullName": "Juan Pérez"
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "January 16, 2024 3:44 PM"},
  "id": "SV001"
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing dateOfBirth"
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
    "code": "InternalServerError",
    "message": "Server error."
}
```

### Notas

- La fecha de nacimiento es obligatoria y debe estar en formato `DD/MM/YYYY`.

---

## Casos de Uso Comunes

-   **Fintech y Banca**: Verifica identidades al instante durante la apertura de cuentas o solicitudes de crédito.
-   **E-commerce y Delivery**: Autentica usuarios y repartidores antes de que se activen en tu plataforma.
-   **Recursos Humanos y Reclutamiento**: Valida documentos de candidatos como parte de tu proceso de contratación.
-   **Seguros y Salud**: Confirma identidades antes de emitir pólizas o proporcionar beneficios médicos.

## Fuentes Oficiales y Confiabilidad

Nos conectamos directamente con fuentes oficiales del gobierno salvadoreño para asegurar que recibas información verificada y actualizada al minuto.
Cada consulta se maneja con estricto cumplimiento de estándares de seguridad y regulatorios.

## Beneficios Clave

-   **Cumplimiento Automatizado**: Agiliza tus verificaciones KYC para prevenir fraudes sin agregar fricción a tus usuarios.
-   **Resultados Instantáneos**: Procesa verificaciones en segundos, perfecto para onboarding digital en tiempo real.
-   **Datos Confiables**: Confía en datos obtenidos directamente de registros oficiales.
-   **Integración Sencilla**: Conéctate fácilmente vía nuestra API REST o usa nuestros SDKs compatibles.
