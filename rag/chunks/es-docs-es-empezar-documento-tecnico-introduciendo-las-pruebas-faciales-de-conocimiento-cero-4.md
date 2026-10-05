---
id: "es-docs-es-empezar-documento-tecnico-introduciendo-las-pruebas-faciales-de-conocimiento-cero-4"
title: "Documento Técnico — **Introduciendo las Pruebas Faciales de Conocimiento Cero**"
sourcePath: "docs-es/empezar/documento-tecnico.md"
locale: "es"
category: "empezar"
tags:
  - "empezar"
sourceAnchor: "**Introduciendo las Pruebas Faciales de Conocimiento Cero**"
---

# Documento Técnico

## **Introduciendo las Pruebas Faciales de Conocimiento Cero**

La capacidad de comparar vectores de características/plantillas entre sí en la biometría tradicional es lo que hace que los datos almacenados sean biométricos por naturaleza. Para permitir la preservación de la privacidad, un sistema debería poder generar cualquier número de estructuras de datos diferentes (similares a vectores de características/plantillas) a partir de una sola imagen. Si lo hace, las estructuras de datos generadas no pueden compararse entre sí. Dado que no hay forma de comparar las estructuras de datos generadas por un marco que preserva la privacidad, si se almacenaran en bases de datos separadas, no habría forma de determinar que las estructuras de datos corresponden a la misma persona. Esto satisface el principio de No Vinculabilidad en un marco de Privacidad por Diseño y hace que las estructuras de datos sean no biométricas por naturaleza.

#### Verificabilidad biométrica

Hemos visto cómo dos estructuras de datos que preservan la privacidad generadas a partir de los mismos datos no pueden compararse para determinar cualquier tipo de similitud. Pero, dado una Muestra Biométrica (como una imagen facial), ¿se puede determinar que la estructura de datos que preserva la privacidad fue generada a partir de una muestra biométrica similar? Aquí es donde entra el algoritmo de Zelf. Hace posible la verificación de estructuras de datos que preservan la privacidad sin comprometer la privacidad del usuario. Aunque los ZelfProofs, las estructuras de datos producidas por el algoritmo ZelfEncrypt, son no biométricos por naturaleza, aún pueden usarse para Verificación Biométrica.

#### **No Vinculable**

La No Vinculabilidad es una propiedad criptográfica central que asegura que dos o más estructuras de datos—como las Pruebas Faciales de Conocimiento Cero de Zelf (ZelfProofs)—no pueden correlacionarse para determinar si fueron generadas a partir de los mismos datos de entrada (por ejemplo, la biometría facial de un usuario y metadatos asociados) o entradas distintas. Esta propiedad garantiza que cada ZelfProof es criptográficamente independiente, preservando la privacidad del usuario al prevenir que observadores externos vinculen múltiples pruebas a un solo usuario o conjunto de datos.

En la arquitectura de Zelf, la no vinculabilidad se logra a través de técnicas criptográficas avanzadas de conocimiento cero. Cuando un usuario genera un ZelfProof, el sistema emplea una combinación única de datos biométricos (el rostro del usuario) y metadatos (por ejemplo, frases semilla o claves privadas) para crear una salida cifrada. Cada ZelfProof se genera con parámetros criptográficos frescos, asegurando que no existan patrones identificables o elementos compartidos entre pruebas, incluso si se derivan de la misma entrada biométrica. Este proceso elimina la posibilidad de referenciar cruzadamente ZelfProofs para inferir la identidad o actividad del usuario, proporcionando una defensa robusta contra el seguimiento o perfilado.

En el contexto de billeteras de criptomonedas, la no vinculabilidad es crítica para mejorar la privacidad y seguridad del usuario. Zelf permite a los usuarios generar ZelfProofs distintos para múltiples billeteras o servicios, cada uno vinculado a la misma biometría facial como clave privada. A pesar de usar el mismo rostro, cada ZelfProof permanece criptográficamente único, haciendo computacionalmente inviable vincular pruebas a través de diferentes billeteras o transacciones. Por ejemplo, un usuario que gestiona activos en Ethereum y Solana puede crear ZelfProofs separados para cada blockchain, y ningún observador—ya sea un actor malicioso o un proveedor de servicios—puede correlacionar estas pruebas para rastrear la actividad del usuario a través de cadenas. Esto asegura que las transacciones del usuario permanezcan privadas e imposibles de rastrear, alineándose con el ethos de las finanzas descentralizadas.

La no vinculabilidad es una piedra angular de la misión de Zelf de entregar verdadera soberanía financiera. Al asegurar que las interacciones del usuario con billeteras de cripto permanezcan privadas y no vinculables, Zelf aborda un punto de dolor crítico en las finanzas descentralizadas: *la vulnerabilidad de los datos del usuario al seguimiento y explotación*. Combinada con la arquitectura de costo cero y capacidad offline de Zelf y la integración con soluciones de almacenamiento descentralizado como Arweave e IPFS, la no vinculabilidad empodera a los usuarios para controlar sus activos digitales con seguridad y autonomía sin igual. Esta propiedad posiciona a Zelf como una solución transformadora para individuos que buscan navegar la economía descentralizada sin comprometer la privacidad.

#### Irreversibilidad
