---
id: "es-docs-es-identity-panama-formatos-aceptados-para-documentnumber-2"
title: "Ciudadano Panameño — Formatos aceptados para `documentNumber`"
sourcePath: "docs-es/identity/panama.mdx"
locale: "es"
category: "identity"
tags:
  - "pa"
  - "identity"
endpoint: "/v2/pa/cedula"
sourceAnchor: "Formatos aceptados para `documentNumber`"
slug: "/identidad/panama"
url: "https://docs.verifik.co/verifik-es/identidad/panama"
---

# Ciudadano Panameño
**API path(s):** /v2/pa/cedula

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos panameños. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.
Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## Formatos aceptados para `documentNumber`

La API acepta una cédula **completa**. Los valores se **normalizan** en el servidor: se recortan, pasan a mayúsculas y los separadores repetidos se colapsan a un solo guión. Espacios, `/`, `_`, `.` y caracteres tipo guión Unicode se tratan como separadores. Si el código de provincia y el sufijo `AV` o `PI` se ingresaron con un guión extra entre ellos (p. ej. `10-AV-1234-12345`), se fusionan a `10AV-1234-12345` antes de validar.

**Estructura:** `primerSegmento-libro-tomo`

- **Libro (segmento central):** 1–4 dígitos  
- **Tomo (último segmento):** 1–6 dígitos  

**Primer segmento (una de estas opciones):**

1. **Nacido en Panamá** — Código de provincia `1`, `2`–`9` o `10`–`13`, luego libro y tomo. Ejemplos: `8-1234-12345`, `4-56-789`, `12-12-12345`
2. **Panameño nacido en el extranjero** — Prefijo `PE`. Ejemplo: `PE-1234-12345`
3. **Extranjero con cédula** — Prefijo `E`. Ejemplos: `E-1234-12345`, `E-8-102017`
4. **Naturalizado** — Prefijo `N`. Ejemplo: `N-1234-12345`
5. **Pre vigencia ley 2006 (AV)** — Provincia seguida inmediatamente de `AV`. Ejemplo: `10AV-1234-12345`
6. **Población indígena (PI)** — Provincia seguida inmediatamente de `PI`. Ejemplo: `1PI-1234-12345`

Los códigos de provincia van del **1 al 13**. Códigos inválidos (p. ej. `14`) se rechazan.

**Query strings:** Envíe `documentNumber` de forma que se **conserven los guiones**. Algunos clientes o analizadores alteran valores como `E-8-197698` (p. ej. notación científica); use query string cruda, codificación adecuada o una librería que mantenga el valor como cadena.

**Error de validación:** Si `documentNumber` no es una cédula completa válida tras la normalización, la API responde **409** con un mensaje de formato incorrecto (p. ej. `Format incorrect: documentNumber`).

Las reglas siguen el validador abierto [cedula-panama](https://github.com/merlos/cedula-panama) (MIT).
