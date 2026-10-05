---
id: "es-docs-es-empezar-como-funciona-resumen"
title: "Cómo funciona — Resumen"
sourcePath: "docs-es/empezar/como-funciona.md"
locale: "es"
category: "empezar"
tags:
  - "empezar"
sourceAnchor: "Resumen"
---

# Cómo funciona

## Resumen

## Resumen

La Prueba Facial de Conocimiento Cero utiliza el rostro del usuario como entrada principal, opcionalmente combinado con metadatos y/o una contraseña. Un algoritmo criptográfico de IA genera una clave pública efímera aleatoria a partir del rostro del usuario, que luego se utiliza para cifrar metadatos, produciendo bytes cifrados llamados **ZelfProof**. Estos **ZelfProofs**, que típicamente contienen metadatos cifrados mínimos y tienen aproximadamente 350 bytes de tamaño, pueden convertirse fácilmente en códigos QR para varios medios de identificación.

En lugar de comparar plantillas faciales, la verificación de Zelf implica descifrar un ZelfProof dado utilizando la clave privada correspondiente correcta generada mediante un escaneo facial en vivo. Un descifrado exitoso verifica a la persona, mientras que el fallo indica una discrepancia.

## Cómo funciona el Servicio de Nombres Zelf

Zelf está construido sobre una base de criptografía que preserva la privacidad. Aquí tienes una mirada profunda al proceso:

### **1. Registro (Cifrado)**

* **Captura de Rostro y Metadatos**: El usuario proporciona un escaneo facial en vivo junto con información sensible como la frase mnemónica.
* **Procesamiento Zelf**: Los datos faciales capturados se utilizan como entrada para generar una clave privada a través de algoritmos criptográficos propietarios. Es importante destacar que los datos faciales no se almacenan ni se utilizan más allá de este paso, asegurando el cumplimiento de las regulaciones de privacidad más estrictas. El sistema solo utiliza el rostro en la sesión actual para generar un ZelfProof.
  * **Procesamiento ZelfProof**: Se genera un **ZelfProof**, que es una estructura binaria que preserva la privacidad y no es biométrica. A diferencia de una plantilla biométrica, el ZelfProof es:
    * Cifrado
    * Único para cada sesión
    * Verificable biométricamente pero **no biométrico** en **naturaleza**
* **Salida**: Se crea un nuevo ZelfProof cada vez que cifras metadatos con tu rostro y contraseña (opcional). Este ZelfProof se guarda posteriormente en IPFS, Arweave, Walrus, Nostr.
  * **Sin Riesgo de Reutilización**: Incluso si alguien captura tu rostro y contraseña, sin el ZelfProof correcto para esa sesión, no pueden recuperar los metadatos cifrados inicialmente. De manera similar, sin el rostro o contraseña correctos, un ZelfProof antiguo o diferente no funcionará.
