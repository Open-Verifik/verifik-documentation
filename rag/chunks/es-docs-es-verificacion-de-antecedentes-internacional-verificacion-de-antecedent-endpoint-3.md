---
id: "es-docs-es-verificacion-de-antecedentes-internacional-verificacion-de-antecedent-endpoint-3"
title: "Verificación de Antecedentes OFAC — Endpoint"
sourcePath: "docs-es/verificacion-de-antecedentes/internacional/verificacion-de-antecedentes-ofac.mdx"
locale: "es"
category: "verificacion-de-antecedentes"
tags:
  - "ofac"
  - "verificacion-de-antecedentes"
endpoint: "/v2/ofac"
sourceAnchor: "Endpoint"
slug: "/verificacion-de-antecedentes/internacional/verificacion-de-antecedentes-ofac"
url: "https://docs.verifik.co/verifik-es/verificacion-de-antecedentes/internacional/verificacion-de-antecedentes-ofac"
---

# Verificación de Antecedentes OFAC
**API path(s):** /v2/ofac

## Endpoint

### Endpoint

```
https://api.verifik.co/v2/ofac
```

El servicio de verificación de antecedentes de OFAC proporciona una forma simple de verificar si una persona o entidad aparece en la Lista de Nacionales Especialmente Designados (SDN) y Personas Bloqueadas de la Oficina de Control de Activos Extranjeros del Departamento del Tesoro de Estados Unidos. Al usar este servicio, puede verificar si el individuo o entidad está sujeto a sanciones o restricciones aplicadas por OFAC.

### Casos de Uso

- **Cumplimiento de Sanciones:** Esencial para instituciones financieras, exportadores y corporaciones multinacionales para asegurar que no están tratando con individuos o entidades sancionadas.
- **Mitigación de Riesgos:** Ayuda a las empresas a evitar penalizaciones asegurando el cumplimiento con las regulaciones comerciales de Estados Unidos e internacionales.
- **KYC y AML:** Una herramienta crítica para los procesos de Conoce a tu Cliente (KYC) y Anti-Lavado de Dinero (AML) en industrias como banca, seguros y bienes raíces.

### Headers

| Nombre         | Valor              |
| -------------- | ------------------ |
| Content-Type   | `application/json` |
| Authorization  | `Bearer `   |

### Parámetros

#### Consulta por Documento

| Nombre             | Tipo   | Requerido | Descripción                                                                 |
| ------------------ | ------ | --------- | --------------------------------------------------------------------------- |
| `documentType`     | string | No        | El tipo de documento que desea solicitar.                                   |
| `documentNumber`   | string | No        | Número de documento a consultar, sin espacios ni puntos.                     |

#### Consulta por Nombre Completo

| Nombre       | Tipo   | Requerido | Descripción                                                                 |
| ------------ | ------ | --------- | --------------------------------------------------------------------------- |
| `fullName`   | string | No        | En lugar de documentType y documentNumber, puede pasar el nombre directamente de la persona/empresa. |
