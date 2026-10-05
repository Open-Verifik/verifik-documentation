---
id: "es-docs-es-empezar-preservacion-privacidad-verificabilidad-biometrica-2"
title: "Preservación de Privacidad — Verificabilidad biométrica"
sourcePath: "docs-es/empezar/preservacion-privacidad.md"
locale: "es"
category: "empezar"
tags:
  - "empezar"
sourceAnchor: "Verificabilidad biométrica"
---

# Preservación de Privacidad

## Verificabilidad biométrica

Hemos visto cómo dos estructuras de datos que preservan la privacidad generadas a partir de los mismos datos no pueden compararse para determinar ningún tipo de similitud.

Pero, dada una Muestra Biométrica (como una imagen facial), ¿se puede determinar que la estructura de datos que preserva la privacidad fue generada a partir de una muestra biométrica similar?

Aquí es donde entra el algoritmo **ZelfEncrypt**. Hace posible la verificación de estructuras de datos que preservan la privacidad sin comprometer la privacidad del usuario.

Aunque las estructuras de datos, llamadas **ZelfProofs**, generadas por el algoritmo ZelfEncrypt son no biométricas por naturaleza, aún pueden usarse para **Verificación Biométrica**.

### Integración con billeteras de cripto

En el contexto de billeteras de cripto, los métodos tradicionales de verificación biométrica a menudo dependen del almacenamiento y comparación de plantillas biométricas, lo que expone a los usuarios a riesgos de privacidad si los datos se comparten o almacenan en múltiples plataformas.

Sin embargo, con **ZelfEncrypt** y **ZelfProofs**, las billeteras de cripto pueden ofrecer características de **Salvaguarda de tus activos** y **cifrado/descifrado** mientras preservan la privacidad del usuario. Cada **ZelfProof** es único, previniendo la correlación a través de diferentes billeteras o servicios. Esto asegura la privacidad de la identidad del usuario sin comprometer la seguridad.

Los usuarios pueden usar su imagen facial para generar un **ZelfProof**, que puede actuar como un token de autenticación seguro o una clave de cifrado sin almacenar ningún dato biométrico. Esto permite una forma segura y descentralizada de gestionar activos de cripto, cifrar datos sensibles y verificar la identidad del usuario sin el riesgo de filtración biométrica a través de plataformas.

El sistema **ZelfEncrypt** se alinea con los principios de Privacidad por Diseño, asegurando que la información privada de los usuarios permanezca no vinculable y no biométrica a través de todas las interacciones de billetera.
