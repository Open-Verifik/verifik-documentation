---
id: "es-docs-es-empezar-documento-tecnico-2-arquitectura-7"
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

La arquitectura de Zelf está diseñada para simplicidad y seguridad, con tres funciones centrales que hacen el cifrado intuitivo para los usuarios finales:

#### **Cifrado**:

![Proceso de Cifrado](https://1734807472-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FpZcqM4Fiw6bW4Zvc28S3%2Fuploads%2FXUHzsIA78nHdmua5rYah%2Fimage.png?alt=media&token=1725fe5e-c3ea-417d-9536-8a24dc6c77b2)

* Los usuarios crean un ZelfProof en dos formatos: un ZelfProof crudo o un código QR que contiene su representación binaria.
* Las entradas incluyen una contraseña opcional, una Clave de Autenticación de Aplicación (para uso B2B), y un FaceBase64 requerido (datos biométricos). Los usuarios pueden personalizar configuraciones, como requerir un escaneo facial en vivo o ajustar niveles de tolerancia (Suave, Regular, Duro).
* El ZelfProof contiene datos públicos (por ejemplo, direcciones de billetera, visibles vía vista previa) y metadatos privados (cifrados, accesibles solo con tu rostro).

La tecnología de cifrado de Zelf aborda una limitación crítica en los sistemas actuales de verificación de identidad basados en biometría ofrecidos por proveedores como FaceTec, Jumio, Onfido, Sumsub, Shufti Pro, Trulioo, ComplyCube, Fractal ID, AuthenticID e iProov. Estos sistemas están construidos centrados en web2, típicamente requiriendo almacenar datos biométricos en bases de datos, lo que introduce riesgos de privacidad y seguridad. En contraste, Zelf es un pionero en cifrado biométrico sin retener datos biométricos, una capacidad que lo distingue de los competidores. Mientras que los primeros proveedores entregan servicios robustos y mantienen una participación significativa en el mercado web2, sus tecnologías a menudo carecen del mismo nivel de innovación necesario en soluciones descentralizadas y operan a costos magnitudes más altos que la solución de Zelf.

#### Entradas

PropiedadTipoDescripciónidentifierString * identificador que se guardará en la Prueba ZK-FacefaceBase64Base64 Blob *El selfie en formato base64 que se usará para cifrar la Prueba ZK-FacerequireLivenessBoolean *cuando se establece como verdadero, realizamos todas las validaciones de vitalidad para asegurarnos de que no es IA, deep fakes o cualquier otra forma de hack.livenessLevelString *Tenemos diferentes niveles de tolerancia cuando se trata de la detección de vitalidad: SUAVE, REGULAR, DURO.livenessDetectionPriorCreationBooleanSi se establece como true entonces la detección de vitalidad ocurre antes del cifrado. si esto se establece como false, se hará durante el proceso de cifrado.publicDataObject Información pública que quieres agregar a la Prueba ZK-Face y cualquiera puede previsualizarla sin el rostro que la cifró.metadataObject *Información privada que quieres cifrar dentro de la Prueba ZK-Face y solo tú puedes ver/descifrar.osString [DESKTOP, ANDROID, IOS]Origen de la solicitud, guardamos esto solo para saber si esto fue generado desde el SDK en dispositivos móviles o el Contenedor Docker.passwordString (optional)la contraseña se usa para reforzar el cifrado aún más, funciona como la segunda capa de seguridad.referenceFaceBase64Base64 Blob (optional)Cuando los sistemas o aplicaciones tienen los selfies almacenados en algún lugar, podemos ayudarlos a hacer una comparación 1:1 de dos selfies antes del cifrado de la Prueba ZK-Face.verifierKeyString (optional)Esta es una contraseña de custodia, funciona como una tercera capa de seguridad donde el servidor o SDK tiene control sobre ciertas Pruebas ZK-Face para que no pueda ser descifrada sin la autorización del verificador.

#### Salida:

Una vez que el cifrado se realiza correctamente y la detección de vitalidad pasa los filtros requeridos, las Pruebas ZK-Face se entregan en dos formatos: el formato crudo y el Código QR. En el caso del código QR, esto funciona mejor para el Servicio de Nombres Zelf porque puede guardarse fácilmente en cualquier sistema de almacenamiento descentralizado (es decir, blockchain, IPFS, Nostr próximamente) y también proporciona a los usuarios una solución de respaldo distribuido al permitirles almacenar y protegerlo localmente o en forma física.
