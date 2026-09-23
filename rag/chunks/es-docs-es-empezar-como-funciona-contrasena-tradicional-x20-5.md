---
id: "es-docs-es-empezar-como-funciona-contrasena-tradicional-x20-5"
title: "Cómo funciona — Contraseña tradicional&#x20;"
sourcePath: "docs-es/empezar/como-funciona.md"
locale: "es"
category: "empezar"
tags:
  - "empezar"
sourceAnchor: "Contraseña tradicional&#x20;"
---

# Cómo funciona

## Contraseña tradicional&#x20;

![](https://1734807472-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FpZcqM4Fiw6bW4Zvc28S3%2Fuploads%2FClwRmi1rv2MyacFhOFNX%2FImg%20KICKSTARTER-51.png?alt=media&#x26;token=ee3b865e-a6ee-4beb-9c12-33c0df3afc1b)

Agregar una contraseña durante la creación de un **ZelfProof** mejora significativamente la seguridad, creando un mecanismo de defensa multicapa que hace que el acceso no autorizado sea extremadamente difícil para los atacantes. Aquí tienes una explicación profunda de por qué agregar una contraseña aumenta la seguridad:

#### 1. **Seguridad Multi-Factor (Rostro + Contraseña)**

* **Factor Biométrico (Rostro)**: La primera capa de seguridad es el rostro mismo, que es único para cada individuo. Esto significa que para recrear el ZelfProof, un atacante necesitaría tener acceso a la imagen facial exacta que se usó durante la creación del ZelfProof. Sin embargo, sin la contraseña correspondiente, incluso teniendo acceso a esta imagen facial no sería suficiente.
* **Factor de Conocimiento (Contraseña)**: La adición de una contraseña introduce un segundo factor que no es inherente al individuo pero es conocido solo por ellos. Esto asegura que incluso si un atacante fuera de alguna manera capaz de obtener una imagen facial similar, aún necesitarían conocer la contraseña exacta que se usó durante la creación del ZelfProof. Este conocimiento es algo que solo el usuario posee, haciendo extremadamente difícil para un atacante violar el sistema.

#### 2. **Dificultad Exponencialmente Aumentada para Atacantes**

* **Combinaciones Impredecibles**: Cuando se agrega una contraseña, el ZelfProof ya no es solo un producto de la imagen facial; se convierte en una combinación única tanto del rostro como de la contraseña. Para que un atacante recrear exitosamente o irrumpir en el ZelfProof, no solo necesitarían replicar las características faciales exactas sino también adivinar o conocer la contraseña correcta. El número de combinaciones posibles de rostro-contraseña es virtualmente infinito, haciendo que los ataques de fuerza bruta sean imprácticos y casi imposibles de ejecutar dentro de un marco de tiempo razonable.
* **Requisito de Secretos Duales**: Los hackers necesitarían violar dos secretos distintos: la imagen facial (datos biométricos) y la contraseña (un secreto basado en conocimiento). Obtener uno sin el otro es inútil, y cada secreto está protegido de diferentes maneras, lo que añade complejidad y reduce la posibilidad de que ambos sean comprometidos simultáneamente.

#### 3. **Resistencia Contra Ataques de Reproducción y Suplantación**

* **Contraseña como Medida Anti-Suplantación**: Incluso si un atacante intenta usar un ataque de reproducción con una imagen capturada del rostro, la falta de la contraseña correspondiente hace que el ataque sea inútil. El algoritmo ZelfProof detectaría que la combinación no coincide con la original y rechazaría cualquier intento de usarla para autenticación o descifrado.
* **Seguridad Dinámica**: Las contraseñas pueden cambiarse regularmente o ser únicas para transacciones o instancias específicas, añadiendo una capa dinámica de seguridad que las imágenes faciales solas no pueden proporcionar. Esto significa que incluso si un atacante de alguna manera aprende una contraseña anterior, no sería útil para futuros ZelfProofs si la contraseña ha sido actualizada.

#### 4. **Privacidad y Protección de Datos Mejoradas**

* **Exposición Mínima de Datos Sensibles**: El uso de una contraseña significa que incluso si una base de datos que contiene ZelfProofs es comprometida, el atacante aún sería incapaz de descifrar los datos sin la contraseña correspondiente. Esto reduce enormemente el riesgo de que la información sensible sea expuesta o mal utilizada.
* **Cifrado en Capas**: La contraseña puede usarse como una clave adicional en el proceso de cifrado, lo que significa que el **ZelfProof** está **no solo** ligado al rostro del usuario sino también a su contraseña. Esto crea un marco de cifrado robusto donde ambos componentes son necesarios para descifrar y utilizar los datos.

#### 5. **Mitigación de Falsos Positivos**

* **Reduciendo el Riesgo de Identificación Errónea**: En algunos casos raros, los sistemas biométricos pueden producir falsos positivos, donde una persona no autorizada es incorrectamente identificada como el usuario autorizado. **Al requerir una contraseña**, el sistema añade una salvaguarda contra esto asegurando que solo la persona que conoce la contraseña pueda completar el proceso de autenticación, reduciendo así las posibilidades de que un falso positivo lleve a una violación de seguridad.

#### 6. **Seguridad Controlada por el Usuario**
