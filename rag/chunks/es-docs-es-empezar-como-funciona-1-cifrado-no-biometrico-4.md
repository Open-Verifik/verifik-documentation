---
id: "es-docs-es-empezar-como-funciona-1-cifrado-no-biometrico-4"
title: "Cómo funciona — 1. Cifrado *No Biométrico*"
sourcePath: "docs-es/empezar/como-funciona.md"
locale: "es"
category: "empezar"
tags:
  - "empezar"
sourceAnchor: "1. Cifrado *No Biométrico*"
---

# Cómo funciona

## 1. Cifrado *No Biométrico*

* **Sin Almacenamiento de Datos Biométricos**: Uno de los **aspectos críticos** del sistema **ZelfProof** es que **no almacena** los datos biométricos reales (es decir, el rostro). En su lugar, el rostro se usa para generar una representación binaria no biométrica que preserva la privacidad y se usa para el cifrado. Esto significa que incluso si el ZelfProof es comprometido, no expone los datos biométricos originales, manteniendo la privacidad del usuario.
* **Transmisión Segura de Datos**: Cuando el rostro se usa como clave de cifrado, los datos se cifran de tal manera que solo pueden ser descifrados con la misma entrada biométrica. Esto asegura que los datos permanezcan seguros tanto en reposo como durante la transmisión, proporcionando seguridad de extremo a extremo que está estrechamente acoplada con la identidad biométrica del usuario.
