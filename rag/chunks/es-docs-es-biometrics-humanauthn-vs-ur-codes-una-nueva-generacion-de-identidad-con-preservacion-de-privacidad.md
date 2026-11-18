---
id: "es-docs-es-biometrics-humanauthn-vs-ur-codes-una-nueva-generacion-de-identidad-con-preservacion-de-privacidad"
title: "HumanAuthn vs UR Codes — Una Nueva Generación de Identidad con Preservación de Privacidad"
sourcePath: "docs-es/biometrics/humanauthn-vs-ur-codes.md"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
sourceAnchor: "Una Nueva Generación de Identidad con Preservación de Privacidad"
slug: "/biometrics/humanauthn-vs-ur-codes"
url: "https://docs.verifik.co/verifik-es/biometrics/humanauthn-vs-ur-codes"
---

# HumanAuthn vs UR Codes

## Una Nueva Generación de Identidad con Preservación de Privacidad

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
