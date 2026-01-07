# Preservación de Privacidad

### Reconocimiento facial tradicional

Como hemos visto en la sección anterior, el **Reconocimiento Facial tradicional** depende de generar y almacenar una plantilla biométrica durante el registro y luego generar y comparar una nueva plantilla durante la verificación.

Dado que dos vectores de características/plantillas generados pueden compararse, si uno se almacena en una base de datos operada por la empresa A y el otro se almacena en una base de datos operada por la empresa B, se puede hacer una comparación entre ellos para determinar si es la misma persona.

Esto es a pesar del hecho de que la empresa A y la empresa B pueden no estar relacionadas entre sí. Esto viola el principio de No Vinculabilidad en un marco de Privacidad por Diseño.

### Preservación de privacidad

La capacidad de comparar vectores de características/plantillas entre sí en la biometría tradicional es lo que hace que los datos almacenados sean biométricos por naturaleza.

Para permitir la preservación de la privacidad, un sistema debería poder generar cualquier número de estructuras de datos diferentes (similares a vectores de características/plantillas) a partir de una sola imagen. Si lo hace, las estructuras de datos generadas no pueden compararse entre sí.

Dado que no hay forma de comparar las estructuras de datos generadas por un marco que preserva la privacidad, si se almacenaran en bases de datos separadas, no habría forma de determinar que las estructuras de datos corresponden a la misma persona. Esto satisface el principio de No Vinculabilidad en un marco de Privacidad por Diseño y hace que las estructuras de datos sean no biométricas por naturaleza.

### Verificabilidad biométrica

Hemos visto cómo dos estructuras de datos que preservan la privacidad generadas a partir de los mismos datos no pueden compararse para determinar ningún tipo de similitud.

Pero, dada una Muestra Biométrica (como una imagen facial), ¿se puede determinar que la estructura de datos que preserva la privacidad fue generada a partir de una muestra biométrica similar?

Aquí es donde entra el algoritmo **ZelfEncrypt**. Hace posible la verificación de estructuras de datos que preservan la privacidad sin comprometer la privacidad del usuario.

Aunque las estructuras de datos, llamadas **ZelfProofs**, generadas por el algoritmo ZelfEncrypt son no biométricas por naturaleza, aún pueden usarse para **Verificación Biométrica**.

### Integración con billeteras de cripto

En el contexto de billeteras de cripto, los métodos tradicionales de verificación biométrica a menudo dependen del almacenamiento y comparación de plantillas biométricas, lo que expone a los usuarios a riesgos de privacidad si los datos se comparten o almacenan en múltiples plataformas.

Sin embargo, con **ZelfEncrypt** y **ZelfProofs**, las billeteras de cripto pueden ofrecer características de **Salvaguarda de tus activos** y **cifrado/descifrado** mientras preservan la privacidad del usuario. Cada **ZelfProof** es único, previniendo la correlación a través de diferentes billeteras o servicios. Esto asegura la privacidad de la identidad del usuario sin comprometer la seguridad.

Los usuarios pueden usar su imagen facial para generar un **ZelfProof**, que puede actuar como un token de autenticación seguro o una clave de cifrado sin almacenar ningún dato biométrico. Esto permite una forma segura y descentralizada de gestionar activos de cripto, cifrar datos sensibles y verificar la identidad del usuario sin el riesgo de filtración biométrica a través de plataformas.

El sistema **ZelfEncrypt** se alinea con los principios de Privacidad por Diseño, asegurando que la información privada de los usuarios permanezca no vinculable y no biométrica a través de todas las interacciones de billetera.

### Principios de verificación facial que preserva la privacidad

En la sección anterior, exploramos cómo los **ZelfProofs** son estructuras de datos que preservan la privacidad. Es imposible determinar que dos **ZelfProofs**, cuando se comparan entre sí, fueron generados del rostro o datos de la misma persona.

También destacamos cómo los **ZelfProofs** tienen la propiedad de **Verificabilidad Biométrica**. Dado el rostro de una persona y un **ZelfProof**, es posible verificar que el **ZelfProof** fue efectivamente generado del rostro de esa persona, sin almacenar o transmitir ninguna información biométrica.

En esta sección, delineamos los principios de **Privacidad por Diseño** que deberían estar incorporados en cualquier sistema robusto, especialmente en contextos como billeteras de cripto donde la privacidad y seguridad son primordiales.

### **No Vinculable**

**Definición:** Dadas dos estructuras de datos (ej., **ZelfProofs**), debería ser imposible determinar si fueron generadas de los mismos datos (rostro + metadatos) o de datos diferentes.

**Aplicación en Billeteras de Cripto:** En el contexto de billeteras de cripto, la **no vinculabilidad** asegura que dos **ZelfProofs** generados para diferentes billeteras o servicios no puedan correlacionarse. Incluso si un usuario accede a múltiples billeteras usando la misma imagen facial, cada **ZelfProof** generado es único. Esto garantiza que la actividad del usuario a través de billeteras no pueda rastrearse o vincularse, proporcionando privacidad y seguridad mejoradas para transacciones de cripto.

### Irreversibilidad

**Definición:** Dado un **ZelfProof**, debería ser imposible reconstruir o hacer ingeniería inversa del rostro original usado para generarlo. Los sistemas tradicionales de verificación facial no satisfacen esta propiedad, ya que dependen de una puntuación de similitud entre dos plantillas biométricas, lo que los expone a **Ataques de Escalada de Colina**.

**Aplicación en Billeteras de Cripto:** Para billeteras de cripto, la irreversibilidad significa que incluso si un atacante obtiene acceso al **ZelfProof**, no puede extraer los datos faciales del usuario. La imagen facial nunca se almacena, y ninguna puntuación de similitud se expone, previniendo que el sistema sea comprometido a través de filtración biométrica o ingeniería inversa. Esto asegura que el acceso a la billetera permanezca seguro, y los usuarios estén protegidos del robo de identidad.

### Revocabilidad y Renovabilidad en Zelf

**Definición:** En sistemas biométricos tradicionales, solo una plantilla o vector de características puede generarse de una imagen. Sin embargo, con **ZelfEncrypt**, múltiples **ZelfProofs** únicos pueden generarse de la misma imagen facial. Mientras que una persona no puede cambiar su rostro, puede generar nuevos **ZelfProofs** según sea necesario.

**Aplicación en Billeteras de Cripto:** La capacidad de generar múltiples **ZelfProofs** del mismo rostro proporciona una capa adicional de seguridad para billeteras de cripto. Si un **ZelfProof** se compromete o un usuario desea actualizar sus credenciales de billetera, un nuevo **ZelfProof** puede generarse del mismo rostro sin ninguna pérdida de funcionalidad o privacidad. Esta revocabilidad asegura que los usuarios puedan actualizar sus claves de acceso a billetera sin el riesgo de estar permanentemente comprometidos.

### Protección contra ataques de escalada de colina

Los sistemas tradicionales de verificación facial exponen a los usuarios a **Ataques de Escalada de Colina** donde los atacantes modifican incrementalmente las entradas para hacer ingeniería inversa de la imagen facial usada en la verificación. El enfoque **ZelfEncrypt**, al eliminar las puntuaciones de similitud y hacer que los **ZelfProofs** sean irreversibles, asegura que los usuarios estén protegidos contra estos ataques. No se proporcionan pistas que puedan permitir a los atacantes recrear los datos faciales originales, salvaguardando así el acceso a la billetera.

### Conclusión

La integración de **ZelfProofs** en billeteras de cripto ofrece una solución de preservación de privacidad de próxima generación. Al abrazar la **No Vinculabilidad**, **Irreversibilidad**, **Revocabilidad** y **Renovabilidad**, las billeteras de cripto pueden proporcionar a los usuarios acceso seguro y descentralizado sin los riesgos asociados con los sistemas tradicionales de verificación biométrica.

El resultado es un sistema altamente seguro y centrado en el usuario donde la privacidad no es solo una opción, sino un principio fundamental. **ZelfEncrypt** asegura que los usuarios puedan gestionar confiadamente sus activos de cripto, sabiendo que su información personal permanece segura, protegida y privada en todo momento.
