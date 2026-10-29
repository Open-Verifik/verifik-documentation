---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-dea-referencia-de-api"
title: "Verificación de Antecedentes DEA — Referencia de API"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-dea.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "dea"
  - "verificacion-antecendentes"
endpoint: "/v2/dea"
sourceAnchor: "Referencia de API"
slug: "/verificacion-antecendentes/verificacion-antecendentes-dea"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-dea"
---

# Verificación de Antecedentes DEA
**API path(s):** /v2/dea

## Referencia de API

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/dea
```

El servicio de verificación de antecedentes de DEA permite a los desarrolladores verificar si una persona o entidad aparece en la lista de vigilancia de la Administración de Control de Drogas de Estados Unidos (DEA). Al proporcionar el tipo de documento y número de documento, o el nombre completo, los usuarios pueden determinar rápidamente si el individuo u organización ha sido marcado por la DEA.

**Nota:** Las fechas (fecha de nacimiento o fecha de expedición) deben ir en formato dd/mm/yyyy.

El servicio retorna un indicador booleano que muestra si existe una coincidencia y, si es aplicable, incluye una URL que enlaza al registro oficial de la DEA.

Esta herramienta es esencial para el cumplimiento regulatorio y la mitigación de riesgos en industrias donde individuos o entidades pueden estar involucrados con sustancias controladas.

### Casos de Uso

- **Cumplimiento Regulatorio:** Asegurar que las operaciones comerciales cumplan con las regulaciones federales de Estados Unidos mediante la verificación de individuos o entidades por banderas relacionadas con la DEA.
- **Prevención de Fraude:** Identificar riesgos potenciales asociados con individuos u organizaciones involucradas en sustancias controladas.
- **Cumplimiento KYC y AML:** Esencial para industrias como salud, farmacéutica, logística y finanzas para cumplir con las regulaciones de Conoce a tu Cliente (KYC) y Anti-Lavado de Dinero (AML).

### Headers

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |
