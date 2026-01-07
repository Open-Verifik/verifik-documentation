# Cómo funciona

<iframe 
  width="100%" 
  height="400" 
  src="https://www.youtube.com/embed/BdPJbX_Ku_U?start=4" 
  title="Cómo funciona - Recuperación Biométrica Zelf" 
  frameBorder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowFullScreen>
</iframe>

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

### **2. Verificación (Descifrado)**

* **Escaneo Facial en Vivo**: Durante el cifrado, el usuario realiza un escaneo facial en vivo. Este escaneo no se almacena pero se utiliza como clave criptográfica para iniciar el proceso de verificación. ***Es importante notar que el sistema no compara el rostro con ningún dato biométrico almacenado.*** En su lugar, el escaneo facial actúa como una entrada dinámica para *regenerar* la estructura criptográfica (**ZelfProof**) que fue creada durante el registro.
* **Coincidencia de ZelfProof**: El ZelfProof generado durante el registro (cuando el usuario cifró inicialmente sus datos usando su rostro) se recrea dinámicamente durante el proceso de descifrado. Sin embargo, dado que el ZelfProof es **no biométrico** y único para cada sesión, el sistema no recupera ni almacena los datos faciales del usuario. Simplemente verifica que la estructura criptográfica coincida con la generada durante la sesión sin retener información biométrica.
* **Descifrado de Información Privada**: Si el ZelfProof regenerado del escaneo en vivo coincide con la estructura cifrada, cualquier información sensible opcional (como la frase mnemónica) que fue asegurada durante el registro se **descifra**. Esto permite al usuario acceder a su billetera para que pueda ver la frase mnemónica para respaldarla o firmar una transacción dentro de nuestra aplicación del Servicio de Nombres Zelf.

### 1. Cifrado *No Biométrico*

![](https://1734807472-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FpZcqM4Fiw6bW4Zvc28S3%2Fuploads%2F77yriQFUAYOpMwR5XSRQ%2FImg%20KICKSTARTER-49.png?alt=media&#x26;token=fe025f01-a301-46b4-a7f7-4cf7e571d4bf)

El uso de biometría facial como componente central del proceso de creación de **ZelfProof** introduce una capa poderosa de seguridad que está únicamente ligada al individuo. Como clave de cifrado requerida y clave privada, el rostro proporciona un método seguro y no replicable para proteger datos sensibles, mientras asegura que solo el propietario legítimo pueda acceder o descifrar la información. Aquí tienes un desglose detallado de cómo la capa biométrica mejora la seguridad:

#### 1. **Clave Única y No Replicable**

* **Unicidad Biométrica**: Cada rostro individual es único, con características distintivas como la distancia entre los ojos, la forma de la nariz y el contorno de la mandíbula. Esta unicidad hace del rostro una clave de cifrado ideal porque no puede ser fácilmente replicado o imitado por otros. A diferencia de las contraseñas, que pueden ser compartidas o adivinadas, la biometría facial está inherentemente ligada al individuo, convirtiéndola en un método robusto y seguro para el cifrado.
* **Funcionalidad de Clave Privada**: En el contexto del **ZelfProof**, el rostro funciona como una clave privada, lo que significa que es el elemento esencial requerido para desbloquear o descifrar los datos cifrados. Dado que la clave privada (es decir, el rostro) es única para cada persona y no puede ser fácilmente duplicada, asegura que solo el individuo que creó el ZelfProof pueda descifrar o acceder a los datos asociados.

#### 2. **Detección de Vitalidad: Asegurando Autenticidad**

* **Protección Contra Suplantación**: La detección de vitalidad es una característica crítica que asegura que el rostro presentado durante el proceso de creación o verificación de **ZelfProof** no sea solo una imagen estática o una reproducción de video, sino una representación en vivo y auténtica del individuo. Esto es crucial para prevenir ataques de suplantación donde un atacante podría usar una fotografía, máscara o video para engañar al sistema.
* **Verificación en Tiempo Real**: La detección de vitalidad prueba movimientos sutiles, como parpadear, expresiones faciales y otros micro-movimientos, para confirmar que el rostro es real y pertenece a una persona viva. Esto añade una capa extra de seguridad, asegurando que solo un individuo legítimo y vivo pueda generar o verificar un **ZelfProof**. Esto hace que el sistema sea altamente resistente contra ataques sofisticados que intentan eludir el reconocimiento facial.

#### 3. **Seguridad Inmutable e Inalienable**

* **No Puede Ser Robado o Perdido**: A diferencia de las contraseñas o tokens físicos, tu rostro siempre está contigo y no puede ser olvidado, perdido o robado. Esta inmutabilidad asegura que la clave de cifrado siempre esté segura, ya que no puede ser fácilmente separada de su propietario. Incluso si un atacante obtiene acceso a otros datos, sin la biometría facial específica, no pueden recrear o acceder al **ZelfProof**.
* **Identidad Inalienable**: El rostro, siendo una parte integral de la identidad de uno, es inherentemente inalienable. No es algo que pueda ser transferido o duplicado de la misma manera que una contraseña o token podría serlo. Esto asegura que la seguridad proporcionada por la biometría facial es profundamente personal y está estrechamente acoplada a la identidad del individuo.

#### 4. **Altamente Resistente a Ataques de Fuerza Bruta**

* **Complejidad Más Allá de Métodos Convencionales**: Los ataques de fuerza bruta dependen de probar sistemáticamente todas las combinaciones posibles hasta encontrar la correcta. Sin embargo, replicar un rostro con la precisión necesaria es virtualmente imposible, especialmente cuando se combina con la detección de vitalidad. La pura complejidad de imitar con precisión las características únicas de un rostro, en tiempo real, hace que los ataques de fuerza bruta sean ineficaces.
* **Inviolabilidad Biométrica**: Debido a que el rostro está biológicamente ligado al individuo y no puede ser fácilmente reproducido por partes no autorizadas, ofrece un nivel de inviolabilidad que las contraseñas o tokens solos no pueden. Esta inviolabilidad se ve aún más mejorada por la detección de vitalidad, que asegura que solo un rostro real y vivo pueda ser usado para la verificación.

#### 5. **Cifrado que Preserva la Privacidad**

* **Sin Almacenamiento de Datos Biométricos**: Uno de los **aspectos críticos** del sistema **ZelfProof** es que **no almacena** los datos biométricos reales (es decir, el rostro). En su lugar, el rostro se usa para generar una representación binaria no biométrica que preserva la privacidad y se usa para el cifrado. Esto significa que incluso si el ZelfProof es comprometido, no expone los datos biométricos originales, manteniendo la privacidad del usuario.
* **Transmisión Segura de Datos**: Cuando el rostro se usa como clave de cifrado, los datos se cifran de tal manera que solo pueden ser descifrados con la misma entrada biométrica. Esto asegura que los datos permanezcan seguros tanto en reposo como durante la transmisión, proporcionando seguridad de extremo a extremo que está estrechamente acoplada con la identidad biométrica del usuario.

### Contraseña tradicional&#x20;

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

* **Empoderando a los Usuarios**: Al permitir a los usuarios agregar una contraseña, la seguridad del ZelfProof se coloca parcialmente en sus manos. Los usuarios pueden elegir una contraseña de complejidad apropiada y son responsables de su confidencialidad, empoderándolos para tomar un papel activo en proteger su información sensible.
