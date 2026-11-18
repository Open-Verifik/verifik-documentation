---
id: "es-docs-es-empezar-documento-tecnico-2-arquitectura-9"
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

1. &#x20;:white\_check\_mark:  La persona real es verificada como la persona reclamada.
2. &#x20;:white\_check\_mark:  Un impostor es rechazado como la persona reclamada.
3. &#x20;:x:  La persona real es rechazada incorrectamente como la persona reclamada. Esto es un Error de Rechazo Falso. La cantidad de estos errores es la Tasa de Rechazo Falso.
4. &#x20;:x:  Un impostor es verificado como la persona reclamada. Esto es un Error de Aceptación Falsa. La cantidad de estos errores es la Tasa de Aceptación Falsa.

![](https://1734807472-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FpZcqM4Fiw6bW4Zvc28S3%2Fuploads%2FFHUSZYkl9iwrPjKGJ3eI%2Fimage.png?alt=media&#x26;token=db71914f-7d6c-4eab-8d03-ce6c3ab201e1)

El gráfico anterior compara el rendimiento DET de sistemas biométricos faciales de última generación, sistemas biométricos de voz, y su fusión combinada, junto con el enfoque optimizado de Zelf. Por ejemplo, con biometría facial sola, se puede seleccionar un punto de operación donde la Tasa de Aceptación Falsa (FAR) es tan baja como 0.00001 (1 en 100,000), con una Tasa de Rechazo Falso (FRR) de aproximadamente 0.06 (6%). Esto refleja la precisión de un solo intento de autenticación usando ZelfProofs.

Mientras que la biometría de voz exhibe tasas de error individuales más altas, integrar biometría de voz y rostro aumenta significativamente la precisión, reduciendo rechazos falsos de usuarios válidos. Esta fusión se implementa sin esfuerzo dentro de la aplicación móvil de Zelf, mejorando la experiencia del usuario. Comparado con los estándares de Autenticación Fuerte de Android—permitiendo una Tasa de Rechazo Falso del 10% y una Tasa de Aceptación Falsa de 1 en 50,000—la fusión de Zelf de biometría facial con pruebas de conocimiento cero supera ampliamente estos puntos de referencia, logrando un FAR de 1 en 100,000 y un FRR por debajo del 6%.

El sistema de autenticación biométrica de Zelf, impulsado por Pruebas Faciales de Conocimiento Cero (ZelfProofs), genera una puntuación única para cada intento de autenticación usando reconocimiento facial. Estas puntuaciones forman un patrón distintivo, permitiendo al sistema determinar un resultado "verificado" o "no verificado". Este proceso de decisión resulta en un equilibrio entre dos tipos de error, visualizado como una Curva de Equilibrio de Error de Detección (DET) (ver figura abajo). La curva ilustra la relación entre Errores de Rechazo Falso (eje y, donde usuarios válidos son incorrectamente denegados) y Errores de Aceptación Falsa (eje x, donde impostores son incorrectamente permitidos). La tecnología de Zelf tiene como objetivo prevenir el acceso no autorizado a billeteras de cripto mientras asegura acceso fluido y sin errores para usuarios legítimos, sin almacenar datos biométricos.

:::success
La innovación de Zelf radica en su diseño descentralizado, donde la biometría facial regenera claves privadas en el dispositivo por sesión, eliminando la necesidad de datos almacenados o servidores externos. Esto asegura privacidad sin igual a través de no vinculabilidad e irreversibilidad, protegiendo a los usuarios de ataques de impostores sin comprometer el acceso. Al aprovechar esta autenticación avanzada, Zelf redefine la seguridad de billeteras de cripto, haciendo imposible la pérdida de frases semilla y empoderando a los usuarios con verdadera soberanía financiera.
:::

***

**Descifrado**:

![](https://1734807472-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FpZcqM4Fiw6bW4Zvc28S3%2Fuploads%2FSTIcwwfZp0WCzHpOOxVa%2Fimage.png?alt=media&#x26;token=509ecbff-0633-443c-9087-a45467d0a88d)

1. Para usuarios minoristas, el descifrado ocurre en el dispositivo del usuario; para uso empresarial, ocurre en un servidor auto-hospedado para aplicaciones web y extensiones.
2. Al escanear tu rostro, Zelf regenera la clave privada para desbloquear los metadatos cifrados, permitiendo acciones como ver datos privados o firmar transacciones.
3. El descifrado ilimitado está incluido en la licencia anual de Zelf, con uso rastreado localmente para transparencia.
