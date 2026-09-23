---
id: "es-docs-es-validacion-empresarial-ecuador-notas-3"
title: "Verificación Empresarial Ecuatoriana — Notas"
sourcePath: "docs-es/validacion-empresarial/ecuador.mdx"
locale: "es"
category: "validacion-empresarial"
tags:
  - "ec"
  - "validacion-empresarial"
endpoints:
  - "/v2/ec/company"
  - "/v3/ec/company"
  - "/v3/ec/company?"
  - "/v3/ec/company?documenttype=rucec&documentnumber=1793197955001"
sourceAnchor: "Notas"
slug: "/validacion-empresarial/ecuador"
url: "https://docs.verifik.co/verifik-es/validacion-empresarial/ecuador"
---

# Verificación Empresarial Ecuatoriana
**API path(s):** /v2/ec/company, /v3/ec/company, /v3/ec/company?, /v3/ec/company?documenttype=rucec&documentnumber=1793197955001

La API de Validación Empresarial de Verifik autentica empresas ecuatorianas con datos oficiales del gobierno. Está diseñada para agilizar procesos KYB (Know Your Business), prevenir fraude y cumplir requisitos regulatorios.
Construimos esta integración para negocios que necesitan confirmar de forma rápida, segura y automatizada la legitimidad de empresas, socios o proveedores.

## Notas

- `documentNumber` debe tener exactamente 13 dígitos sin separadores.
- RUC demo sandbox: `1790008959001` (ACERO COMERCIAL ECUATORIANO S.A.).
- Ejemplos en vivo: `1793197955001`, `1191795453001`.
- El endpoint legado `GET /v2/ec/company` sigue disponible con una respuesta más reducida.

---

## Casos de uso comunes

-   **Onboarding B2B**: verifica empresas al registrar socios o proveedores.
-   **Servicios financieros**: autentica negocios antes de abrir cuentas o procesar transacciones.
-   **Cumplimiento y debida diligencia**: valida información empresarial en flujos KYC/KYB.
-   **E-commerce y marketplaces**: confirma legitimidad antes de permitir ventas en tu plataforma.

## Fuentes oficiales y confiabilidad

Nos conectamos directamente con fuentes oficiales del gobierno ecuatoriano para entregar información verificada y actualizada.
Cada consulta se maneja con estrictos estándares de seguridad y cumplimiento.

## Beneficios clave

-   **Cumplimiento automatizado**: agiliza controles KYB sin fricción innecesaria.
-   **Resultados instantáneos**: verificaciones en segundos para onboarding en tiempo real.
-   **Datos confiables**: información proveniente de registros oficiales.
-   **Integración sencilla**: REST API y SDKs compatibles.

## Cumplimiento y seguridad

Priorizamos la seguridad de tus datos. Verifik usa cifrado avanzado (HTTPS/TLS 1.3) y estándares estrictos de privacidad.
El servicio se monitorea 24/7 y ofrece controles de acceso basados en roles.

## Sobre Verifik

Verifik es una plataforma líder en verificación de identidad, cumplimiento y prevención de fraude en Latinoamérica.
Nuestras APIs automatizan KYC, KYB, AML y biometría, conectando negocios con fuentes oficiales en Colombia, México, Perú, Chile, Ecuador, Argentina, Brasil y más.
