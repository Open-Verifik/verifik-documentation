---
id: "es-docs-es-empezar-documento-tecnico-2-arquitectura-10"
title: "Documento Técnico — 2. Arquitectura"
sourcePath: "docs-es/empezar/documento-tecnico.md"
locale: "es"
category: "empezar"
tags:
  - "empezar"
sourceAnchor: "2. Arquitectura"
---

# Documento Técnico

## 2. Arquitectura

En el ecosistema de criptomonedas, proteger frases semilla contra fraude y acceso no autorizado se ha vuelto cada vez más desafiante. Los métodos tradicionales de autenticación, como contraseñas y sistemas basados en conocimiento no solo son inconvenientes sino también altamente vulnerables a violaciones. Los usuarios de cripto, encargados de salvaguardar frases semilla complejas para acceso a billeteras, a menudo enfrentan credenciales olvidadas, cuentas comprometidas y procesos de recuperación engorrosos. Un estudio de PYMNTS revela que el 59% de los consumidores reutilizan contraseñas en cuentas, un hábito que se extiende a la gestión de frases semilla, *amplificando riesgos cuando una sola frase es expuesta.*

Zelf redefine este panorama con Pruebas Faciales de Conocimiento Cero (ZelfProofs), una solución biométrica que elimina la necesidad de memorizar o almacenar frases semilla. Al regenerar claves privadas en el dispositivo usando reconocimiento facial—**sin servidores, bases de datos o almacenamiento de datos biométricos**—Zelf asegura que las frases semilla sean imposibles de perder y seguras. Este enfoque sin servidor y offline no solo previene el hacking sino que también empodera a los usuarios con acceso fluido que preserva la privacidad, estableciendo un nuevo estándar para la seguridad de billeteras de criptomonedas.

**Vista Previa**:

![](https://1734807472-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FpZcqM4Fiw6bW4Zvc28S3%2Fuploads%2FDJOFtjkssa4l2tBO6G0h%2Fimage.png?alt=media&#x26;token=93604d28-6dc0-419a-a8a8-2674b6a6dfef)

1. La función de vista previa permite a los usuarios ver los datos públicos dentro de un ZelfProof, como direcciones de billetera (por ejemplo, Ethereum, Solana, Bitcoin), para confirmar su contenido antes del descifrado.
2. Esto asegura que los usuarios puedan identificar fácilmente el ZelfProof correcto sin comprometer la seguridad.

La función de vista previa es muy útil por muchas razones, una de ellas es que podemos recuperar los datos públicos almacenados dentro de la Prueba ZK-Face sin realmente pasar por el proceso de descifrado para los metadatos que han sido almacenados de forma segura con tu rostro y una contraseña opcional.

Cada ZelfProof se ve diferente aunque contengan exactamente el mismo contenido, datos públicos, metadatos, autenticación facial y contraseña. Para identificar Pruebas ZK-Face únicas sin bases de datos o servidores centralizados, Zelf aprovecha soluciones de almacenamiento descentralizado como Arweave, IPFS y Walrus. Subimos Pruebas ZK-Face como códigos QR, cada uno bajo 70kb, con pares clave-valor sirviendo como identificadores. Una clave, el `ZelfName`, permite consultas eficientes a través de estas redes descentralizadas.

***

La tecnología de Zelf desbloquea un mundo de posibilidades para aplicaciones seguras y descentralizadas:

1. **Gestión Segura de Frases Semilla:** Cifra frases semilla con el Servicio de Nombres Zelf y accede a ellas usando solo tu rostro, eliminando la necesidad de billeteras de hardware o custodios de terceros.
2. **Resistencia Offline:** Opera en entornos de recursos limitados, como durante cortes de energía, siempre que tu dispositivo tenga energía.
3. **Privacidad y Control:** Almacena ZelfProofs localmente o en redes descentralizadas como Arweave o IPFS, asegurando que retengas propiedad completa de tus datos.
4. **Compatibilidad Multi-Cadena:** Gestiona activos a través de múltiples blockchains con una sola solución fácil de usar.

Al eliminar intermediarios, reducir costos y priorizar el control del usuario, Zelf entrega una experiencia verdaderamente descentralizada que empodera a individuos para tomar control de sus vidas digitales.
