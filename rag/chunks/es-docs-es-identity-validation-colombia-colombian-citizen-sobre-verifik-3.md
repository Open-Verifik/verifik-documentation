---
id: "es-docs-es-identity-validation-colombia-colombian-citizen-sobre-verifik-3"
title: "Ciudadano Colombiano — Sobre Verifik"
sourcePath: "docs-es/identity-validation/colombia/colombian-citizen.mdx"
locale: "es"
category: "identity-validation"
tags:
  - "co"
  - "identity-validation"
endpoints:
  - "/v2/co/cedula"
  - "/v2/co/foreigner-id/ce"
  - "/v2/co/foreigner-id/ppt"
  - "/v2/co/procuraduria"
sourceAnchor: "Sobre Verifik"
slug: "/validacion-identidad/colombia/ciudadano-colombiano"
url: "https://docs.verifik.co/verifik-es/validacion-identidad/colombia/ciudadano-colombiano"
---

# Ciudadano Colombiano
**API path(s):** /v2/co/cedula, /v2/co/foreigner-id/ce, /v2/co/foreigner-id/ppt, /v2/co/procuraduria

## Sobre Verifik

Verifik es una plataforma líder en verificación de identidad, cumplimiento y prevención de fraude en América Latina.
Nuestras APIs automatizan procesos de KYC, KYB, AML y validación biométrica, conectando empresas con fuentes oficiales de datos en Colombia, México, Perú, Chile, Uruguay y más allá.

### APIs Relacionadas

Explora otros servicios de verificación en el ecosistema colombiano:

-   [**Validación Vehicular RUNT**](/verifik-es/validacion-de-vehiculo/colombia/vehiculo-por-placa-y-cedula-unicamente): Consulta historial y propiedad de vehículos.

### Preguntas Frecuentes (FAQ)

  ¿Esta API cumple con las leyes colombianas de protección de datos?
  
    Sí, Verifik cumple con la Ley 1581 de 2012 (Habeas Data) y se adhiere a las regulaciones KYC/AML establecidas por la UIAF y la Superintendencia Financiera. Aseguramos que todos los datos se procesen de forma segura y con la debida autorización.
  

  ¿Qué tipos de documentos se pueden verificar?
  
    La API soporta CC, CE, PPT, PEP y NIT.
  

  ¿Los datos se obtienen en tiempo real?
  
    Sí, nuestra API se conecta directamente con fuentes oficiales del gobierno para proporcionar información en tiempo real y actualizada, asegurando que siempre tengas el estado más reciente de una identidad.
  

  ¿Por qué me cobraron más que el precio listado de la cédula?
  
    Cuando las rutas de verificación estándar en GET/POST /v2/co/cedula no devuelven coincidencia, Verifik puede intentar automáticamente una ruta de verificación extendida mediante Consulta Dinámica. Si esa ruta devuelve HTTP 200, aplica precio dinámico y se cobra el nivel premium de esa familia de endpoints. Envíe includeCost=true para ver un objeto billing en la respuesta, o revise su historial de solicitudes API.
