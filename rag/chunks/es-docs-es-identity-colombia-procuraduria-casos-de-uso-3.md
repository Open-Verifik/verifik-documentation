---
id: "es-docs-es-identity-colombia-procuraduria-casos-de-uso-3"
title: "Colombia — Consulta de ciudadano vía Procuraduría — Casos de uso"
sourcePath: "docs-es/identity/colombia-procuraduria.mdx"
locale: "es"
category: "identity"
tags:
  - "co"
  - "identity"
endpoint: "/v2/co/procuraduria"
sourceAnchor: "Casos de uso"
slug: "/identity/colombia-procuraduria"
url: "https://docs.verifik.co/verifik-es/identity/colombia-procuraduria"
---

# Colombia — Consulta de ciudadano vía Procuraduría
**API path(s):** /v2/co/procuraduria

Valida un número de documento colombiano y extrae **nombres** de la **Procuraduría General de la Nación**. Esta fuente oficial soporta *Cédula de ciudadanía* (**CC**), *Cédula de extranjería* (**CE**), *Permiso Especial de Permanencia* (**PEP**), *NIT* y *Permiso por Protección Temporal* (**PPT**).
A diferencia de [ciudadano por documento](/identity-validation/colombia/colombian-citizen) (`/v2/co/cedula`), este endpoint usa **solo Procuraduría** — **no** intenta DIAN, ADRES ni Registraduría. A diferencia de [antecedentes disciplinarios](/background-check/colombia-disciplinary-records-attorneys-office) (`/v2/co/procuraduria/antecedentes`), **no** devuelve `antecedentes` ni `legend`.

## Casos de uso

- Validar una cédula de extranjería o un NIT cuando solo necesitas el nombre registrado
- Aislar Procuraduría de la consolidación multi-fuente de `/cedula`
- Preferir un producto dedicado cuando no quieres facturar antecedentes por separado

### Notes

- Solo extracción de nombres — la respuesta **no** incluye `antecedentes` ni `legend`.
- Para antecedentes disciplinarios usa [antecedentes en Colombia](/verifik-es/verificacion-antecendentes/verificacion-antecendentes-colombia-procuraduria).
- `/v2/co/cedula` sigue consolidando Procuraduría con otras fuentes para los mismos tipos de documento.
- El documento sandbox reservado `90040401` devuelve **404**.
- Relacionado: [Ciudadano por documento](/verifik-es/validacion-identidad/colombia/ciudadano-colombiano), [Guía de documentos](/verifik-es/validacion-identidad/colombia/guia-documentos-identidad-colombia).
