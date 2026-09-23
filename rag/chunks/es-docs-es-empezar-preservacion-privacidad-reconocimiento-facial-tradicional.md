---
id: "es-docs-es-empezar-preservacion-privacidad-reconocimiento-facial-tradicional"
title: "Preservación de Privacidad — Reconocimiento facial tradicional"
sourcePath: "docs-es/empezar/preservacion-privacidad.md"
locale: "es"
category: "empezar"
tags:
  - "empezar"
sourceAnchor: "Reconocimiento facial tradicional"
---

# Preservación de Privacidad

## Reconocimiento facial tradicional

### Reconocimiento facial tradicional

Como hemos visto en la sección anterior, el **Reconocimiento Facial tradicional** depende de generar y almacenar una plantilla biométrica durante el registro y luego generar y comparar una nueva plantilla durante la verificación.

Dado que dos vectores de características/plantillas generados pueden compararse, si uno se almacena en una base de datos operada por la empresa A y el otro se almacena en una base de datos operada por la empresa B, se puede hacer una comparación entre ellos para determinar si es la misma persona.

Esto es a pesar del hecho de que la empresa A y la empresa B pueden no estar relacionadas entre sí. Esto viola el principio de No Vinculabilidad en un marco de Privacidad por Diseño.

### Preservación de privacidad

La capacidad de comparar vectores de características/plantillas entre sí en la biometría tradicional es lo que hace que los datos almacenados sean biométricos por naturaleza.

Para permitir la preservación de la privacidad, un sistema debería poder generar cualquier número de estructuras de datos diferentes (similares a vectores de características/plantillas) a partir de una sola imagen. Si lo hace, las estructuras de datos generadas no pueden compararse entre sí.

Dado que no hay forma de comparar las estructuras de datos generadas por un marco que preserva la privacidad, si se almacenaran en bases de datos separadas, no habría forma de determinar que las estructuras de datos corresponden a la misma persona. Esto satisface el principio de No Vinculabilidad en un marco de Privacidad por Diseño y hace que las estructuras de datos sean no biométricas por naturaleza.
