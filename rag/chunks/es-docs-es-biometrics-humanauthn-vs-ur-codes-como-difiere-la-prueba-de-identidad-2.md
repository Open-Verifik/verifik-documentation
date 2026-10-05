---
id: "es-docs-es-biometrics-humanauthn-vs-ur-codes-como-difiere-la-prueba-de-identidad-2"
title: "HumanAuthn vs UR Codes — Cómo Difiere la Prueba de Identidad"
sourcePath: "docs-es/biometrics/humanauthn-vs-ur-codes.md"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
sourceAnchor: "Cómo Difiere la Prueba de Identidad"
slug: "/biometrics/humanauthn-vs-ur-codes"
url: "https://docs.verifik.co/verifik-es/biometrics/humanauthn-vs-ur-codes"
---

# HumanAuthn vs UR Codes

## Cómo Difiere la Prueba de Identidad

| | **UR Codes** | **HumanAuthn** |
|---|---|---|
| **Modelo** | Coincidencia facial | Regeneración de clave |
| **Almacenamiento biométrico** | Almacenado en QR | Nunca almacenado |
| **Ancla de confianza** | Emisor | Presencia humana |
| **Autenticación** | Comparar rostro | Descifrar con clave regenerada |
| **Claves** | Firmadas por emisor | Efímeras |
| **Base de datos de coincidencias** | No requerida | No requerida |
| **Prueba de identidad** | Firma + coincidencia | Descifrado exitoso |

---

## Arquitectura de Preservación de Privacidad

Los UR Codes mejoran sobre el KYC tradicional al mover la verificación de identidad fuera de línea, pero aún **almacenan datos biométricos dentro del contenedor QR**.

HumanAuthn elimina por completo el almacenamiento biométrico.

### UR Codes
- Almacenan datos faciales
- Almacenan atributos de identidad
- Firmados por emisor
- Artefacto de identidad reutilizable

### HumanAuthn
- Sin almacenamiento biométrico
- No requiere atributos de identidad
- Sin dependencia de emisor
- Artefactos de identidad no comparables

HumanAuthn minimiza la exposición de datos y reduce los riesgos de filtración de identidad.

---

## Comparación de Arquitectura de Seguridad

| **Característica** | **UR Codes** | **HumanAuthn** |
|---|---|---|
| Almacenamiento Biométrico | Sí | No |
| Claves Privadas Almacenadas | Emisor | No |
| Claves Efímeras | No | Sí |
| Verificación Sin Conexión | Sí | Sí |
| Independencia de Dispositivo | Sí | Sí |
| Correlación de Credenciales | Posible | Ninguna |
| Autoridad Central | Requerida | Opcional |
| Metadatos Encriptados | Opcional | Nativo |
| Propiedad de Conocimiento Cero | No | A nivel de sistema |
| Ancla de Confianza | Emisor | Humano |
| Criptografía | Verificación de firma | ECDSA secp256k1 + entropía |
| Riesgo de Repetición | Posible | Ninguno |
| Coincidencia Requerida | Sí | No |

---
