---
id: "es-docs-es-empezar-preservacion-privacidad-principios-de-verificacion-facial-que-preserva-la-privacidad-3"
title: "Preservación de Privacidad — Principios de verificación facial que preserva la privacidad"
sourcePath: "docs-es/empezar/preservacion-privacidad.md"
locale: "es"
category: "empezar"
tags:
  - "empezar"
sourceAnchor: "Principios de verificación facial que preserva la privacidad"
---

# Preservación de Privacidad

## Principios de verificación facial que preserva la privacidad

En la sección anterior, exploramos cómo los **ZelfProofs** son estructuras de datos que preservan la privacidad. Es imposible determinar que dos **ZelfProofs**, cuando se comparan entre sí, fueron generados del rostro o datos de la misma persona.

También destacamos cómo los **ZelfProofs** tienen la propiedad de **Verificabilidad Biométrica**. Dado el rostro de una persona y un **ZelfProof**, es posible verificar que el **ZelfProof** fue efectivamente generado del rostro de esa persona, sin almacenar o transmitir ninguna información biométrica.

En esta sección, delineamos los principios de **Privacidad por Diseño** que deberían estar incorporados en cualquier sistema robusto, especialmente en contextos como billeteras de cripto donde la privacidad y seguridad son primordiales.

### **No Vinculable**

**Definición:** Dadas dos estructuras de datos (ej., **ZelfProofs**), debería ser imposible determinar si fueron generadas de los mismos datos (rostro + metadatos) o de datos diferentes.

**Aplicación en Billeteras de Cripto:** En el contexto de billeteras de cripto, la **no vinculabilidad** asegura que dos **ZelfProofs** generados para diferentes billeteras o servicios no puedan correlacionarse. Incluso si un usuario accede a múltiples billeteras usando la misma imagen facial, cada **ZelfProof** generado es único. Esto garantiza que la actividad del usuario a través de billeteras no pueda rastrearse o vincularse, proporcionando privacidad y seguridad mejoradas para transacciones de cripto.

### Irreversibilidad

**Definición:** Dado un **ZelfProof**, debería ser imposible reconstruir o hacer ingeniería inversa del rostro original usado para generarlo. Los sistemas tradicionales de verificación facial no satisfacen esta propiedad, ya que dependen de una puntuación de similitud entre dos plantillas biométricas, lo que los expone a **Ataques de Escalada de Colina**.

**Aplicación en Billeteras de Cripto:** Para billeteras de cripto, la irreversibilidad significa que incluso si un atacante obtiene acceso al **ZelfProof**, no puede extraer los datos faciales del usuario. La imagen facial nunca se almacena, y ninguna puntuación de similitud se expone, previniendo que el sistema sea comprometido a través de filtración biométrica o ingeniería inversa. Esto asegura que el acceso a la billetera permanezca seguro, y los usuarios estén protegidos del robo de identidad.
