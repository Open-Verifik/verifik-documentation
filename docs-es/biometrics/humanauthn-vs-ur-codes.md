---
id: humanauthn-vs-ur-codes
title: HumanAuthn vs UR Codes
description: Comparación entre HumanAuthn y UR Codes - una nueva generación de identidad con preservación de privacidad
slug: /biometrics/humanauthn-vs-ur-codes
---

# HumanAuthn vs UR Codes

## Una Nueva Generación de Identidad con Preservación de Privacidad

Los sistemas de identidad biométrica han evolucionado a lo largo de las últimas dos décadas. La primera implementación a gran escala apareció en los **pasaportes electrónicos biométricos (2005)**, que almacenaban datos faciales dentro de chips NFC firmados por las autoridades emisoras. Si bien seguros, estos sistemas eran costosos, dependientes del hardware y difíciles de desplegar a gran escala.

Para abordar estas limitaciones, los **UR Codes** introdujeron contenedores de identidad basados en QR con firma digital que almacenan datos faciales y atributos de identidad en un código de barras portátil. Esto redujo los requisitos de hardware y habilitó la verificación sin conexión.

**HumanAuthn representa la siguiente evolución.** En lugar de almacenar datos biométricos, HumanAuthn utiliza criptografía condicionada biométricamente para regenerar claves en tiempo real, permitiendo la verificación de identidad sin almacenar biometría, plantillas ni claves privadas.

---

## ¿Qué es HumanAuthn?

HumanAuthn es una primitiva criptográfica condicionada biométricamente que genera **contenedores de identidad basados en HumanData** sin almacenar datos biométricos.

En lugar de almacenar plantillas faciales, HumanAuthn:

- Genera aleatoriedad de alta entropía
- Utiliza entrada biométrica en vivo
- Reconstruye claves efímeras
- Descifra metadatos encriptados
- Autentica mediante descifrado exitoso

La autenticación se convierte en:

```
presencia humana → regeneración de clave → descifrado → prueba de identidad
```

No se almacenan datos biométricos. Sin plantillas. Sin claves persistentes.

Esta es la **identidad criptográfica anclada en el ser humano**.

---

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

## Ventajas de HumanAuthn sobre UR Codes

### Sin Almacenamiento Biométrico

Los UR Codes almacenan datos biométricos. HumanAuthn no almacena ninguno.

Esto elimina:
- Riesgos de bases de datos biométricas
- Filtración de plantillas
- Clonación de identidad

---

### Sin Dependencia de Emisor

Los UR Codes dependen de emisores de identidad. HumanAuthn funciona sin ellos.

Esto habilita:
- Identidad soberana
- Autenticación descentralizada
- Creación de identidad sin permisos

---

### Seguridad con Claves Efímeras

**UR Codes:**
- Contenedor de identidad estático
- Artefacto reutilizable

**HumanAuthn:**
- Regenera claves por sesión
- Sin claves en reposo
- Sin secretos persistentes

---

### Identidades No Vinculables

**UR Codes:**
- Misma identidad reutilizada

**HumanAuthn:**
- Identidad criptográfica nueva
- Credenciales no vinculables

---

### Autenticación Criptográfica vs Coincidencia

Los UR Codes se basan en **comparación biométrica**. HumanAuthn usa **reconstrucción criptográfica de claves**.

Esto elimina:
- Umbrales de coincidencia
- Falsos positivos
- Ataques de similitud de plantillas

---

## Evolución de la Identidad Biométrica

```
2005 — Pasaportes Electrónicos Biométricos
Almacenaban plantillas biométricas en chips NFC
↓
UR Codes
Almacenaban plantillas biométricas en códigos QR firmados
↓
HumanAuthn
Sin almacenamiento biométrico.
Identidad derivada de la presencia humana.
```

---

## El Cambio de Identidad Almacenada a Criptografía Condicionada por el Ser Humano

Los UR Codes mejoraron la portabilidad de la identidad. HumanAuthn elimina por completo la identidad almacenada.

- Los UR Codes **almacenan** la identidad.
- HumanAuthn **reconstruye** la identidad.
- Los UR Codes verifican **quién eres**.
- HumanAuthn prueba **que solo tú puedes descifrar**.

---

## Resumen

Los UR Codes modernizaron la identidad biométrica al moverla de chips NFC a contenedores QR. HumanAuthn va más allá al eliminar por completo el almacenamiento biométrico y reemplazar la coincidencia con regeneración criptográfica de claves.

HumanAuthn introduce:
- Confianza arraigada en el ser humano
- Sin almacenamiento biométrico
- Claves efímeras
- Verificación sin conexión
- Identidades no vinculables
- Criptografía ECDSA secp256k1
- Contenedores de identidad basados en SensePrint

Esto representa la próxima evolución de la identidad biométrica — de plantillas almacenadas a **autenticación criptográfica condicionada por el ser humano**.
