---
id: "es-docs-es-empezar-como-funciona-2-verificacion-descifrado-2"
title: "Cómo funciona — **2. Verificación (Descifrado)**"
sourcePath: "docs-es/empezar/como-funciona.md"
locale: "es"
category: "empezar"
tags:
  - "empezar"
sourceAnchor: "**2. Verificación (Descifrado)**"
---

# Cómo funciona

## **2. Verificación (Descifrado)**

* **Escaneo Facial en Vivo**: Durante el cifrado, el usuario realiza un escaneo facial en vivo. Este escaneo no se almacena pero se utiliza como clave criptográfica para iniciar el proceso de verificación. ***Es importante notar que el sistema no compara el rostro con ningún dato biométrico almacenado.*** En su lugar, el escaneo facial actúa como una entrada dinámica para *regenerar* la estructura criptográfica (**ZelfProof**) que fue creada durante el registro.
* **Coincidencia de ZelfProof**: El ZelfProof generado durante el registro (cuando el usuario cifró inicialmente sus datos usando su rostro) se recrea dinámicamente durante el proceso de descifrado. Sin embargo, dado que el ZelfProof es **no biométrico** y único para cada sesión, el sistema no recupera ni almacena los datos faciales del usuario. Simplemente verifica que la estructura criptográfica coincida con la generada durante la sesión sin retener información biométrica.
* **Descifrado de Información Privada**: Si el ZelfProof regenerado del escaneo en vivo coincide con la estructura cifrada, cualquier información sensible opcional (como la frase mnemónica) que fue asegurada durante el registro se **descifra**. Esto permite al usuario acceder a su billetera para que pueda ver la frase mnemónica para respaldarla o firmar una transacción dentro de nuestra aplicación del Servicio de Nombres Zelf.
