---
id: "es-docs-es-verificacion-antecendentes-tipos-documento"
title: "Tipos de Documento y Parámetros - Registros Criminales — Parámetros Obligatorios por Tipo de Documento"
sourcePath: "docs-es/verificacion-antecendentes/tipos-documento.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "verificacion-antecendentes"
sourceAnchor: "Parámetros Obligatorios por Tipo de Documento"
slug: "/verificacion-antecendentes/tipos-documento"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/tipos-documento"
---

# Tipos de Documento y Parámetros - Registros Criminales

## Parámetros Obligatorios por Tipo de Documento

A continuación se detallan los tipos de documento soportados (`documentType`) para la consulta de **registros criminales** y los parámetros obligatorios adicionales según el tipo de documento.

## Parámetros Obligatorios por Tipo de Documento

Para realizar la consulta, se requiere generalmente el `documentType` y `documentNumber` (o el `fullName`). Sin embargo, ciertos tipos de documento exigen parámetros adicionales como `dateOfBirth` o `expeditionDate`.

| Tipo de Documento (`documentType`) | Descripción / País | Parámetros Adicionales Requeridos |
| :--- | :--- | :--- |
| **Generales**  `CC`, `NIT`, `CCVE`, `CCEC`,  `DNI`, `DNIAR`, `DNIHN`, `CCCR`,  `CIC`, `CIE`, `RUN`, `CURP`, `CUI`,  `CUIT`, `RUCEC`, `FME`, `RUC`,  `RUT`, `CNPJ` | Varios (Colombia, Argentina, México, Chile, Ecuador, etc.) | **Ninguno**  Solicitud: `documentType` + `documentNumber` |
| **Con Fecha de Nacimiento**  `CCPA`, `CI`, `CPF`, `DUI`, `CCUY` | Panamá, Uruguay, Brasil, El Salvador, Paraguay | **`dateOfBirth`**  Solicitud: `documentType` + `documentNumber` + `dateOfBirth` |
| **Con Fecha de Expedición**  `CE`, `PPT`, `PEP` | Colombia (Cédula Extranjería, PPT, PEP) | **`expeditionDate`**  Solicitud: `documentType` + `documentNumber` + `expeditionDate` |

:::info
Si se proporciona el `fullName` (Nombre Completo), la validación de `documentType` y `documentNumber` podría omitirse dependiendo del endpoint específico, pero para una búsqueda precisa por documento, respete las reglas anteriores.
:::

## Lista Completa de Tipos Soportados

* **CC**: Cédula de Ciudadanía (Colombia)
* **CE**: Cédula de Extranjería (Colombia)
* **PEP**: Permiso Especial de Permanencia (Colombia)
* **NIT**: Número de Identificación Tributaria (Colombia)
* **CCVE**: Cédula de Identidad (Venezuela)
* **CCEC**: Cédula de Ciudadanía (Ecuador)
* **DNI**: Documento Nacional de Identidad
* **DNIAR**: DNI (Argentina)
* **DNIHN**: DNI (Honduras)
* **CCCR**: Cédula de Identidad (Costa Rica)
* **CIC**: Cédula de Identidad (Costa Rica)
* **CIE**: Cédula de Identidad (Extranjero)
* **RUN**: Rol Único Nacional (Chile)
* **CURP**: Clave Única de Registro de Población (México)
* **CUI**: Código Único de Identificación (Guatemala)
* **CCPA**: Cédula de Identidad (Panamá) - *Requiere Fecha de Nacimiento*
* **CI**: Cédula de Identidad (Varios) - *Requiere Fecha de Nacimiento*
* **CPF**: Cadastro de Pessoas Físicas (Brasil) - *Requiere Fecha de Nacimiento*
* **DUI**: Documento Único de Identidad (El Salvador) - *Requiere Fecha de Nacimiento*
* **CCUY**: Cédula de Identidad (Uruguay) - *Requiere Fecha de Nacimiento*
* **CUIT**: Clave Única de Identificación Tributaria (Argentina)
* **RUCEC**: RUC (Ecuador)
* **FME**: Folio Mercantil Electrónico
* **RUC**: Registro Único de Contribuyentes
* **RUT**: Rol Único Tributario
* **CNPJ**: Cadastro Nacional da Pessoa Jurídica (Brasil)
* **PPT**: Permiso por Protección Temporal (Colombia) - *Requiere Fecha de Expedición*
