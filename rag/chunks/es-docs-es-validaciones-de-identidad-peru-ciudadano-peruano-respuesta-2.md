---
id: "es-docs-es-validaciones-de-identidad-peru-ciudadano-peruano-respuesta-2"
title: "Ciudadano Peruano v3 — Respuesta"
sourcePath: "docs-es/validaciones-de-identidad/peru/ciudadano-peruano.mdx"
locale: "es"
category: "validaciones-de-identidad"
tags:
  - "pe"
  - "validaciones-de-identidad"
endpoint: "/v3/pe/cedula"
sourceAnchor: "Respuesta"
slug: "/validaciones-de-identidad/peru/ciudadano-peruano"
url: "https://docs.verifik.co/verifik-es/validaciones-de-identidad/peru/ciudadano-peruano"
---

# Ciudadano Peruano v3
**API path(s):** /v3/pe/cedula

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos peruanos usando el Documento Nacional de Identidad (DNI). Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.
Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## Respuesta

```json
{
  "data": {
    "address": "CARACALLA",
    "arrayName": [
      "FELIPE",
      "TRUJILLO",
      "HERNANDEZ"
    ],
    "civilStatus": "SOLTERO",
    "dateOfBirth": "19-12-1995",
    "documentNumber": "71647369",
    "documentType": "DNI",
    "firstName": "FELIPE",
    "fullName": "FELIPE TRUJILLO HERNANDEZ",
    "lastName": "TRUJILLO HERNANDEZ",
    "sex": "M",
    "ubigeoReniec": "070101",
    "verificationDigit": "2"
  },
  "signature": {
    "dateTime": "April 16, 2025 2:43 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "FHBCC"
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

  
  

```json
{
  "code": "MissingParameter",
  "message": "documentNumber maximum length: 8\n"
}
```

  

---

## Casos de Uso Comunes

-   **Fintech y Banca**: Verifica identidades al instante durante la apertura de cuentas o solicitudes de crédito.
-   **E-commerce y Delivery**: Autentica usuarios y repartidores antes de que se activen en tu plataforma.
-   **Recursos Humanos y Reclutamiento**: Valida documentos de candidatos como parte de tu proceso de contratación.
-   **Seguros y Salud**: Confirma identidades antes de emitir pólizas o proporcionar beneficios médicos.

## Fuentes Oficiales y Confiabilidad

Nos conectamos directamente con fuentes oficiales del gobierno peruano (RENIEC) para asegurar que recibas información verificada y actualizada al minuto.
Cada consulta se maneja con estricto cumplimiento de estándares de seguridad y regulatorios.
