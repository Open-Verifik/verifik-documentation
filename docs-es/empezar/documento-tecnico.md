# Documento Técnico

## Confianza Cero, Almacenamiento Cero: Nunca pierdas tus frases semilla con Pruebas Faciales de Conocimiento Cero

### Resumen

La rápida digitalización de los servicios financieros y personales ha transformado cómo los individuos interactúan con organizaciones, gobiernos y ecosistemas descentralizados. Sin embargo, este cambio ha amplificado los riesgos de ciberseguridad, incluyendo violaciones de datos, robo de identidad y fraude, que amenazan la seguridad de la información sensible. Los métodos tradicionales de autenticación, como contraseñas, PINs o datos biométricos almacenados, dependen de sistemas centralizados como bancos, servidores o servicios de custodia, introduciendo vulnerabilidades como puntos únicos de falla y dependencia de la confianza de terceros. En el espacio de las criptomonedas, estos desafíos son particularmente agudos: las claves privadas, una vez comprometidas, conducen a pérdidas de activos irreversibles, socavando la promesa de las finanzas sin permisos. Además, muchos usuarios de cripto carecen de la experiencia técnica para gestionar claves de forma segura, dejándolos vulnerables al robo o mala gestión.

Zelf introduce una solución revolucionaria con Pruebas Faciales de Conocimiento Cero (ZelfProofs), una tecnología de cifrado de vanguardia que redefine la identidad digital y la seguridad de activos. Al integrar técnicas criptográficas avanzadas con autenticación biométrica, Zelf permite a los usuarios cifrar y descifrar claves privadas—como frases semilla para billeteras de criptomonedas—usando solo su rostro. A diferencia de los sistemas biométricos convencionales o soluciones como PassKeys, Zelf no almacena datos biométricos, eliminando la necesidad de servidores, bases de datos, blockchains o conectividad a internet. Cada ZelfProof (clave pública) contiene metadatos cifrados, accesibles únicamente a través del rostro del usuario (clave privada), que se regenera y destruye por sesión, asegurando máxima seguridad y privacidad.

Este enfoque descentralizado empodera a los usuarios con control, resistencia y accesibilidad sin precedentes, incluso en escenarios offline como cortes de energía. Al eliminar intermediarios y aprovechar protocolos de código abierto, incluyendo soluciones de almacenamiento descentralizado como Arweave e IPFS, Zelf fomenta la transparencia y la confianza sin supervisión centralizada. La arquitectura escalable y de costo cero de Zelf la hace accesible a millones, desde entusiastas de cripto hasta usuarios cotidianos, allanando el camino para un futuro donde los individuos gestionen sus activos digitales con confianza y simplicidad. Este documento técnico explora cómo Zelf entrega verdadera soberanía financiera a través de tecnología innovadora centrada en el usuario.

### Introducción

#### Las Amenazas Crecientes Superan los Métodos Tradicionales de Autenticación

Los métodos tradicionales de autenticación, que dependen principalmente de contraseñas y tokens, son cada vez más vulnerables a amenazas cibernéticas sofisticadas como phishing, ingeniería social y ataques de fuerza bruta. Las contraseñas suelen ser débiles debido a la negligencia del usuario, y los tokens pueden perderse o ser robados, haciendo que estos métodos sean insuficientes para las demandas de seguridad actuales.

#### Los Sistemas Biométricos Convencionales Almacenan Datos Biométricos

La autenticación biométrica aprovecha características fisiológicas únicas como huellas dactilares y rasgos faciales para la identificación. Aunque ofrece mayor seguridad, los sistemas biométricos tradicionales requieren almacenar datos biométricos sensibles, generando preocupaciones significativas de privacidad. Las violaciones de datos que involucran información biométrica son particularmente dañinas ya que los rasgos biométricos no pueden cambiarse como las contraseñas.

#### **Los Algoritmos Cuánticos Rompen Métodos Criptográficos Ampliamente Utilizados**

La computación cuántica representa una amenaza significativa para los sistemas criptográficos existentes como RSA y ECC. Los algoritmos cuánticos podrían potencialmente romper estos métodos ampliamente utilizados, comprometiendo la seguridad de datos y comunicaciones cifradas. Esto requiere una transición a algoritmos criptográficos resistentes a cuánticos para asegurar la protección de datos a largo plazo.

### **Introduciendo las Pruebas Faciales de Conocimiento Cero**

En el mundo cada vez más digital de hoy, la necesidad de verificación de identidad segura y que preserve la privacidad es más crítica que nunca. Las amenazas de ciberseguridad están evolucionando constantemente, y el surgimiento de la computación cuántica introduce nuevos desafíos para los sistemas criptográficos tradicionales.

Zelf aborda estos problemas multifacéticos combinando autenticación biométrica con técnicas criptográficas avanzadas, incluyendo criptografía post-cuántica a través de sus ZK-Face Proofs **pendientes de patente**. Al introducir una Infraestructura de Clave Pública basada en Rostro (PKI) y un sistema de Identidad Electrónica (eID), Zelf mejora la seguridad mientras preserva la *privacidad del usuario*, *ya que elimina la necesidad de almacenar datos biométricos*. El enfoque innovador y pionero de ZelfProofs para la autenticación biométrica a través de dos mecanismos criptográficos diferentes garantiza la privacidad del usuario y el cumplimiento del GDPR a través de sus tecnologías centrales. Al integrar Criptografía Post-Cuántica (PQC) con tecnología SSL confiable, Zelf satisface la creciente demanda de verificación de identidad robusta y el cifrado de información sensible. Este enfoque innovador redefine la verificación de identidad digital, haciendo las interacciones en línea más seguras, privadas y a prueba de futuro. Zelf también aborda el problema apremiante de cómo integrar la verificación biométrica en aplicaciones blockchain y resuelve el problema de confiar en la aplicación.

#### **Privacidad**

La privacidad es un **derecho** fundamental en el mundo de las finanzas descentralizadas, nadie debería poder quitarte tu dinero. El **avance** tecnológico revolucionario de Zelf permite verificación facial *centrada en la privacidad* **sin almacenar ningún dato biométrico** o imágenes faciales **en ningún lugar**. Esta tecnología compatible con GDPR pone a los usuarios en control de su identidad y datos, eliminando riesgos de privacidad y asegurando seguridad completa.

La solución de Pruebas Faciales de Conocimiento Cero genera ZelfProofs, que son estructuras de datos binarias cifradas que preservan la privacidad y sirven como Credenciales Verificables. Estos ZelfProof no contienen datos biométricos pero son verificables biométricamente usando solo el rostro en vivo del titular de la eID. Son aproximadamente cinco veces más pequeños que las plantillas biométricas tradicionales y pueden almacenarse como códigos QR, en chips NFC o en bases de datos.

A diferencia de los sistemas biométricos tradicionales que almacenan imágenes faciales o plantillas, los ZelfProofs no contienen datos biométricos. En su lugar, funcionan como "Cajas Fuertes Bloqueadas" que solo pueden desbloquearse usando el rostro en vivo del usuario, alineándose con el principio de minimización de datos del GDPR ya que no se almacenan ni procesan datos biométricos más allá del evento de autenticación.

Una característica clave de Zelf - Pruebas Faciales de Conocimiento Cero, permite verificación facial sin revelar o almacenar datos faciales reales. Esto transforma el reconocimiento facial de un problema de aprendizaje automático en uno criptográfico, creando biometría tokenizada. A través de las pruebas ZK-Face, los verificadores pueden autenticar usuarios sin nunca acceder o procesar sus datos biométricos, cumpliendo completamente con la protección de datos del GDPR por diseño y por defecto.

Como sabemos actualmente, el **Reconocimiento Facial Tradicional** depende de generar y almacenar una plantilla biométrica durante el registro y luego generar y comparar una nueva plantilla durante la verificación. Dado que dos vectores de características/plantillas generados pueden compararse, si uno se almacena en una base de datos operada por la empresa A y el otro se almacena en una base de datos operada por la empresa B, se puede hacer una comparación entre ellos para determinar si es la misma persona. Esto es a pesar del hecho de que la empresa A y la empresa B pueden no estar relacionadas entre sí. Esto viola el principio de No Vinculabilidad en un marco de Privacidad por Diseño.

#### **Preservación de la privacidad**

La capacidad de comparar vectores de características/plantillas entre sí en la biometría tradicional es lo que hace que los datos almacenados sean biométricos por naturaleza. Para permitir la preservación de la privacidad, un sistema debería poder generar cualquier número de estructuras de datos diferentes (similares a vectores de características/plantillas) a partir de una sola imagen. Si lo hace, las estructuras de datos generadas no pueden compararse entre sí. Dado que no hay forma de comparar las estructuras de datos generadas por un marco que preserva la privacidad, si se almacenaran en bases de datos separadas, no habría forma de determinar que las estructuras de datos corresponden a la misma persona. Esto satisface el principio de No Vinculabilidad en un marco de Privacidad por Diseño y hace que las estructuras de datos sean no biométricas por naturaleza.

#### Verificabilidad biométrica

Hemos visto cómo dos estructuras de datos que preservan la privacidad generadas a partir de los mismos datos no pueden compararse para determinar cualquier tipo de similitud. Pero, dado una Muestra Biométrica (como una imagen facial), ¿se puede determinar que la estructura de datos que preserva la privacidad fue generada a partir de una muestra biométrica similar? Aquí es donde entra el algoritmo de Zelf. Hace posible la verificación de estructuras de datos que preservan la privacidad sin comprometer la privacidad del usuario. Aunque los ZelfProofs, las estructuras de datos producidas por el algoritmo ZelfEncrypt, son no biométricos por naturaleza, aún pueden usarse para Verificación Biométrica.

#### **No Vinculable**

La No Vinculabilidad es una propiedad criptográfica central que asegura que dos o más estructuras de datos—como las Pruebas Faciales de Conocimiento Cero de Zelf (ZelfProofs)—no pueden correlacionarse para determinar si fueron generadas a partir de los mismos datos de entrada (por ejemplo, la biometría facial de un usuario y metadatos asociados) o entradas distintas. Esta propiedad garantiza que cada ZelfProof es criptográficamente independiente, preservando la privacidad del usuario al prevenir que observadores externos vinculen múltiples pruebas a un solo usuario o conjunto de datos.

En la arquitectura de Zelf, la no vinculabilidad se logra a través de técnicas criptográficas avanzadas de conocimiento cero. Cuando un usuario genera un ZelfProof, el sistema emplea una combinación única de datos biométricos (el rostro del usuario) y metadatos (por ejemplo, frases semilla o claves privadas) para crear una salida cifrada. Cada ZelfProof se genera con parámetros criptográficos frescos, asegurando que no existan patrones identificables o elementos compartidos entre pruebas, incluso si se derivan de la misma entrada biométrica. Este proceso elimina la posibilidad de referenciar cruzadamente ZelfProofs para inferir la identidad o actividad del usuario, proporcionando una defensa robusta contra el seguimiento o perfilado.

En el contexto de billeteras de criptomonedas, la no vinculabilidad es crítica para mejorar la privacidad y seguridad del usuario. Zelf permite a los usuarios generar ZelfProofs distintos para múltiples billeteras o servicios, cada uno vinculado a la misma biometría facial como clave privada. A pesar de usar el mismo rostro, cada ZelfProof permanece criptográficamente único, haciendo computacionalmente inviable vincular pruebas a través de diferentes billeteras o transacciones. Por ejemplo, un usuario que gestiona activos en Ethereum y Solana puede crear ZelfProofs separados para cada blockchain, y ningún observador—ya sea un actor malicioso o un proveedor de servicios—puede correlacionar estas pruebas para rastrear la actividad del usuario a través de cadenas. Esto asegura que las transacciones del usuario permanezcan privadas e imposibles de rastrear, alineándose con el ethos de las finanzas descentralizadas.

La no vinculabilidad es una piedra angular de la misión de Zelf de entregar verdadera soberanía financiera. Al asegurar que las interacciones del usuario con billeteras de cripto permanezcan privadas y no vinculables, Zelf aborda un punto de dolor crítico en las finanzas descentralizadas: *la vulnerabilidad de los datos del usuario al seguimiento y explotación*. Combinada con la arquitectura de costo cero y capacidad offline de Zelf y la integración con soluciones de almacenamiento descentralizado como Arweave e IPFS, la no vinculabilidad empodera a los usuarios para controlar sus activos digitales con seguridad y autonomía sin igual. Esta propiedad posiciona a Zelf como una solución transformadora para individuos que buscan navegar la economía descentralizada sin comprometer la privacidad.

#### Irreversibilidad

La Irreversibilidad es una propiedad criptográfica fundamental que asegura que una Prueba Facial de Conocimiento Cero (ZelfProof) no puede ser ingeniería inversa para reconstruir la biometría facial original usada para generarla. A diferencia de los sistemas tradicionales de verificación facial, que dependen de puntuaciones de similitud entre plantillas biométricas almacenadas y son vulnerables a ataques de escalada de colina; la arquitectura de Zelf elimina tales riesgos al nunca almacenar datos faciales o exponer métricas comparables.

En billeteras de criptomonedas, la irreversibilidad salvaguarda la privacidad y seguridad del usuario. Incluso si un atacante intercepta un ZelfProof (clave pública), no pueden extraer la biometría facial del usuario o metadatos relacionados, como frases semilla. Esto asegura que el acceso a la billetera permanezca seguro, protegiendo a los usuarios del robo de identidad o transacciones no autorizadas. Al generar y destruir la clave privada (derivada del rostro del usuario) por sesión, Zelf previene la filtración biométrica, reforzando su diseño descentralizado y sin servidor.

### 1. Resumen de la Aplicación

Zelf introduce un enfoque revolucionario al cifrado que redefine cómo los usuarios aseguran y acceden a sus activos digitales. Los métodos tradicionales de cifrado a menudo dependen de almacenar datos biométricos sensibles o claves privadas, creando vulnerabilidades como violaciones de datos o claves perdidas. Zelf elimina estos riesgos aprovechando las Pruebas Faciales de Conocimiento Cero (ZelfProofs), un sistema de cifrado novedoso basado en biometría que genera y destruye claves privadas por sesión, asegurando seguridad sin precedentes y autonomía del usuario.

Imagina una bóveda protegiendo tus posesiones más valiosas. Tradicionalmente, necesitarías una clave física o PIN digital para desbloquearla, que debes proteger para prevenir robo o pérdida. Esto crea un punto único de falla—si la clave se pierde o es robada, tus activos están en riesgo. Zelf trasciende esta limitación usando tu rostro como la clave. Cada vez que accedes a tu bóveda, Zelf regenera la clave privada usando tus datos biométricos y la destruye después de la sesión. Esto significa sin claves almacenadas, sin dependencia de dispositivos de terceros, y sin necesidad de memorizar contraseñas complejas—solo tu rostro, empoderándote con acceso fluido y seguro a tus activos digitales.

#### Descentralización

En Zelf, creemos que la verdadera libertad financiera proviene de la descentralización—la distribución del control, activos y autoridad a través de una red de participantes independientes, eliminando la dependencia de entidades centralizadas como gobiernos, corporaciones o servidores. A diferencia de los sistemas tradicionales con puntos únicos de falla, los sistemas descentralizados fomentan autonomía, resistencia e inclusividad al permitir que los participantes mantengan y validen colectivamente la red.

Zelf logra la descentralización eliminando la necesidad de bases de datos y servidores centralizados, un desafío central en la criptografía moderna. Nuestro algoritmo propietario opera completamente en tu dispositivo, asegurando que tus datos sensibles—como frases semilla o claves privadas—nunca salgan de tu control. Al aprovechar herramientas de código abierto y protocolos públicos, Zelf asegura transparencia y auditabilidad, fomentando confianza sin requerir una autoridad central. Nuestra tecnología se licencia como una aplicación independiente, operable localmente por el usuario final, asegurando que el usuario tenga propiedad completa del proceso de cifrado y datos sensibles, sin dependencia de un proveedor de servicios de terceros.

Por ejemplo, el Servicio de Nombres Zelf (ZNS) permite a los usuarios cifrar frases semilla en un ZelfProof, un formato binario seguro que puede almacenarse como un código QR. Este ZelfProof contiene tanto datos públicos (por ejemplo, direcciones de billetera) como metadatos privados, accesibles solo escaneando tu rostro. A diferencia de las billeteras tradicionales que requieren tarjetas físicas o dispositivos de hardware para firmar transacciones, Zelf es agnóstico al hardware e incluso opera en escenarios offline, como cortes de energía, siempre que tu dispositivo tenga batería. Los usuarios pueden optar por almacenar su ZelfProof localmente, en cualquier solución de almacenamiento centralizada (es decir, Nube) o descentralizada (es decir, Blockchain Arweave o IPFS) asegurando acceso fácil sin comprometer la seguridad.

#### **Interoperabilidad y Apertura**

Zelf abraza el ethos de Web3 integrando con protocolos de código abierto y ecosistemas blockchain interoperables. Ya sea conectando activos entre Ethereum, Solana o Polygon, el Servicio de Nombres Zelf permite interacción fluida a través de cadenas sin depender de infraestructura centralizada. Esta apertura empodera a los usuarios para gestionar sus activos a través de múltiples plataformas mientras mantiene el principio central de descentralización: dependes solo de ti mismo, no de blockchains, servidores o servicios de terceros.

#### Escalabilidad y Economías de Escala

La escalabilidad es una preocupación crítica en sistemas blockchain y criptográficos. Desde redes tradicionales como Bitcoin que incurren en costos significativos debido a minería intensiva en energía u operaciones de nodos, hasta sistemas criptográficos centralizados que dependen de servidores y bases de datos, ambos dependen de economías de escala variables. Zelf puede garantizar escalabilidad predecible debido a su arquitectura inherente que permite economías de escala de costo fijo.

### 2. Arquitectura

La arquitectura de Zelf está diseñada para simplicidad y seguridad, con tres funciones centrales que hacen el cifrado intuitivo para los usuarios finales:

#### **Cifrado**:

![Proceso de Cifrado](https://1734807472-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FpZcqM4Fiw6bW4Zvc28S3%2Fuploads%2FXUHzsIA78nHdmua5rYah%2Fimage.png?alt=media&token=1725fe5e-c3ea-417d-9536-8a24dc6c77b2)

* Los usuarios crean un ZelfProof en dos formatos: un ZelfProof crudo o un código QR que contiene su representación binaria.
* Las entradas incluyen una contraseña opcional, una Clave de Autenticación de Aplicación (para uso B2B), y un FaceBase64 requerido (datos biométricos). Los usuarios pueden personalizar configuraciones, como requerir un escaneo facial en vivo o ajustar niveles de tolerancia (Suave, Regular, Duro).
* El ZelfProof contiene datos públicos (por ejemplo, direcciones de billetera, visibles vía vista previa) y metadatos privados (cifrados, accesibles solo con tu rostro).

La tecnología de cifrado de Zelf aborda una limitación crítica en los sistemas actuales de verificación de identidad basados en biometría ofrecidos por proveedores como FaceTec, Jumio, Onfido, Sumsub, Shufti Pro, Trulioo, ComplyCube, Fractal ID, AuthenticID e iProov. Estos sistemas están construidos centrados en web2, típicamente requiriendo almacenar datos biométricos en bases de datos, lo que introduce riesgos de privacidad y seguridad. En contraste, Zelf es un pionero en cifrado biométrico sin retener datos biométricos, una capacidad que lo distingue de los competidores. Mientras que los primeros proveedores entregan servicios robustos y mantienen una participación significativa en el mercado web2, sus tecnologías a menudo carecen del mismo nivel de innovación necesario en soluciones descentralizadas y operan a costos magnitudes más altos que la solución de Zelf.

#### Entradas

<table><thead><tr><th width="252.2890625">Propiedad</th><th width="202.984375">Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td>identifier</td><td>String * </td><td>identificador que se guardará en la Prueba ZK-Face</td></tr><tr><td>faceBase64</td><td>Base64 Blob *</td><td>El selfie en formato base64 que se usará para cifrar la Prueba ZK-Face</td></tr><tr><td>requireLiveness</td><td>Boolean *</td><td>cuando se establece como verdadero, realizamos todas las validaciones de vitalidad para asegurarnos de que no es IA, deep fakes o cualquier otra forma de hack.</td></tr><tr><td>livenessLevel</td><td>String *</td><td>Tenemos diferentes niveles de tolerancia cuando se trata de la detección de vitalidad: SUAVE, REGULAR, DURO.</td></tr><tr><td>livenessDetectionPriorCreation</td><td>Boolean</td><td>Si se establece como <code>true</code> entonces la detección de vitalidad ocurre antes del cifrado. si esto se establece como <code>false</code>, se hará durante el proceso de cifrado.</td></tr><tr><td>publicData</td><td>Object </td><td>Información pública que quieres agregar a la Prueba ZK-Face y cualquiera puede previsualizarla sin el rostro que la cifró.</td></tr><tr><td>metadata</td><td>Object *</td><td>Información privada que quieres cifrar dentro de la Prueba ZK-Face y solo tú puedes ver/descifrar.</td></tr><tr><td>os</td><td>String [DESKTOP, ANDROID, IOS]</td><td>Origen de la solicitud, guardamos esto solo para saber si esto fue generado desde el SDK en dispositivos móviles o el Contenedor Docker.</td></tr><tr><td>password</td><td>String (optional)</td><td>la contraseña se usa para reforzar el cifrado aún más, funciona como la segunda capa de seguridad.</td></tr><tr><td>referenceFaceBase64</td><td>Base64 Blob (optional)</td><td>Cuando los sistemas o aplicaciones tienen los selfies almacenados en algún lugar, podemos ayudarlos a hacer una comparación 1:1 de dos selfies antes del cifrado de la Prueba ZK-Face.</td></tr><tr><td>verifierKey</td><td>String (optional)</td><td>Esta es una contraseña de custodia, funciona como una tercera capa de seguridad donde el servidor o SDK tiene control sobre ciertas Pruebas ZK-Face para que no pueda ser descifrada sin la autorización del verificador.</td></tr></tbody></table>

#### Salida:

Una vez que el cifrado se realiza correctamente y la detección de vitalidad pasa los filtros requeridos, las Pruebas ZK-Face se entregan en dos formatos: el formato crudo y el Código QR. En el caso del código QR, esto funciona mejor para el Servicio de Nombres Zelf porque puede guardarse fácilmente en cualquier sistema de almacenamiento descentralizado (es decir, blockchain, IPFS, Nostr próximamente) y también proporciona a los usuarios una solución de respaldo distribuido al permitirles almacenar y protegerlo localmente o en forma física.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="raw" label="Prueba ZK-Face Cruda">

```json
A4tRJRHFjfFvapODaKRQn7EWdjcfqpCYJya0Lbk/o4iGniVYI/jcKe28v/L4S19Ggn/VLvXW346EB0Gd2QjxshvXYdTx2AS2qWiVcZuyNQul0+d9lPnP++JrBwfhstU3V+qAD1XPqoYuTZJKJXtFdMdUo/bfqhQWfs91p+xQ+inLhr0EDjD6hNmfCwDTjEEvGqHrJV+FaHhqUkJ/xgsapsBpSZUDwXtH+Cybq/gtnMmdRNPSJvTa1dxLDyL6Hmc4goVtn4FF+iMje2DQkaUIw1bti/qYNKnoJhQD9BDqnNDr48X6A2d2mBGam/IKsM7x8pVmOV02JSIdWO9gjRURbD3haWl9LjhIEo35ei5H/mjmrynKbcZJG3PDW7/WmenclEyl4eEq+m3VCLZSaUwnXYawN/A/3GXPGJ7PosFAtnq8fpnkyclaJx9SY4yfN0T3Re3Nd5sdRB94qrCQa/vXX1vx/lYXjTzZ5nw39EHrFwYW8/fV+AGyvu4LNW1dFQ+AxWhlPsHbqJqw56HtqTJ8LC45jJl2Ds8FKgDwYwRPSzPmS98W/hbmJKYEN28CC2X4tLn8CcL9ZnlK/1PfaNc1vnxd+cCIX7zEihCFIk7VeLzRt0Nfy98ob6iyGDuOVO9KZeB/Kz2QX51H63yxSzQBoKVXhyLQeg9O4fXbuMUDh7Vs2z7OcUKflidLW8Vjv6BiF2fQ75NQBshRddWlAPQ+OSbbuSHDvRI6bdgYBWsJW6oyhI8STp6umPzcAmW2IMmHYXVl/V6fApXmYUEzvfiXxYyvXkQ7EBDV0OSDKM4HFvGdiPkt97n/Tw6ujFdm/aKSjIwrSQeiPH2hSa2NnBVNT/sDTpOi22yoFZMq0e6P1l0tgWjvbk78gITr9t1zKwZ63SX1T0k0khjyy3P5p5rLjKQsVve+8yWAnw9hKxA2GjXcE/u8Z0wS4z306oZnfphfp+f/7WAzQVT+LD/Qch8BQl+U95XPS6mS0kVE/SoccrjX2lCfMbXlPLUAS421ZvXzrVfuID7mlyjp8O7kCcg6lHf5nHxK4bAp6Xmdgg==
```

</TabItem>
<TabItem value="qr" label="Código QR Prueba ZK-Face">

![Código QR Prueba ZK-Face](https://1734807472-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FpZcqM4Fiw6bW4Zvc28S3%2Fuploads%2FGJKWfsvFQqohw2a7LY4h%2Fimage.png?alt=media&token=376fff95-75e6-4b05-aaaf-fc481639699e)

</TabItem>
</Tabs>

#### Detección de vitalidad:

La prueba de vitalidad es uno de los aspectos cruciales de la tecnología, necesitamos asegurarnos de que la IA y todos los deep fakes no puedan eludir el aspecto biométrico, por lo que para esto implementamos diferentes factores que son cruciales para mantenerlo seguro contra cualquier ataque.

:::success
El Foro Económico Mundial dice que ahora es el momento para que las empresas en todas partes comiencen la transición hacia un futuro sin contraseñas y miren la autenticación biométrica como la solución. Ya sea que estés listo para abrazar completamente un enfoque de inicio de sesión sin contraseñas o quieras introducirte gradualmente, las tecnologías biométricas ofrecen una forma de mejorar la seguridad y la experiencia del usuario.
:::

El Informe de Investigaciones de Violaciones de Datos de Verizon 2019 revela que el 80% de las violaciones relacionadas con hacking provienen de contraseñas comprometidas, débiles o reutilizadas, exponiendo las vastas vulnerabilidades de la autenticación tradicional. En la era Web3, donde las amenazas cibernéticas y el fraude están aumentando, la biometría de voz y rostro ofrece una solución de inicio de sesión segura y fluida. A diferencia de las contraseñas, PINs o preguntas "secretas", la biometría elimina la necesidad de memorizar cualquier cosa, asegurando que las credenciales no puedan ser robadas, suplantadas o comercializadas en la web oscura, alineándose perfectamente con el ethos descentralizado y centrado en el usuario de Web3.

#### **¿Es el cifrado biométrico lo suficientemente seguro para frases semilla/claves privadas de Web3?**

En el ecosistema Web3, donde las frases semilla son críticas para asegurar billeteras descentralizadas, la autenticación biométrica ofrece una alternativa robusta. Las modalidades biométricas maduras, como el reconocimiento facial y la autenticación por voz, entregan precisión de coincidencia probada para casos de uso de alto riesgo como gestionar activos de cripto. La biometría, combinada con la detección de vitalidad, minimiza el riesgo de acceso no autorizado y frustra los ataques de suplantación, asegurando que solo el propietario legítimo pueda acceder a la billetera.

El cifrado biométrico ofrece una capa de seguridad para frases semilla expuestas, que son vulnerables a pérdida, robo o phishing. Con las Pruebas ZK-Face de Zelf, los usuarios disfrutan de protección robusta para finanzas descentralizadas sin memorización. A diferencia de las frases semilla o códigos de acceso únicos, la biometría permite acceso rápido y sin fricción a la billetera y no puede ser comercializada en la web oscura. Zelf mejora la seguridad al no almacenar datos biométricos, posicionándose como líder en cifrado biométrico.

Para entender la seguridad de la biometría en billeteras Web3, considera los resultados potenciales de cada intento de verificar una identidad reclamada usando biometría. Excluyendo intentos de suplantación, cada esfuerzo de verificación biométrica para una billetera Web3 resulta en uno de cuatro resultados posibles:

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

En el ecosistema de criptomonedas, proteger frases semilla contra fraude y acceso no autorizado se ha vuelto cada vez más desafiante. Los métodos tradicionales de autenticación, como contraseñas y sistemas basados en conocimiento no solo son inconvenientes sino también altamente vulnerables a violaciones. Los usuarios de cripto, encargados de salvaguardar frases semilla complejas para acceso a billeteras, a menudo enfrentan credenciales olvidadas, cuentas comprometidas y procesos de recuperación engorrosos. Un estudio de PYMNTS revela que el 59% de los consumidores reutilizan contraseñas en cuentas, un hábito que se extiende a la gestión de frases semilla, *amplificando riesgos cuando una sola frase es expuesta.*

Zelf redefine este panorama con Pruebas Faciales de Conocimiento Cero (ZelfProofs), una solución biométrica que elimina la necesidad de memorizar o almacenar frases semilla. Al regenerar claves privadas en el dispositivo usando reconocimiento facial—**sin servidores, bases de datos o almacenamiento de datos biométricos**—Zelf asegura que las frases semilla sean imposibles de perder y seguras. Este enfoque sin servidor y offline no solo previene el hacking sino que también empodera a los usuarios con acceso fluido que preserva la privacidad, estableciendo un nuevo estándar para la seguridad de billeteras de criptomonedas.

**Vista Previa**:

![](https://1734807472-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FpZcqM4Fiw6bW4Zvc28S3%2Fuploads%2FDJOFtjkssa4l2tBO6G0h%2Fimage.png?alt=media&#x26;token=93604d28-6dc0-419a-a8a8-2674b6a6dfef)

1. La función de vista previa permite a los usuarios ver los datos públicos dentro de un ZelfProof, como direcciones de billetera (por ejemplo, Ethereum, Solana, Bitcoin), para confirmar su contenido antes del descifrado.
2. Esto asegura que los usuarios puedan identificar fácilmente el ZelfProof correcto sin comprometer la seguridad.

La función de vista previa es muy útil por muchas razones, una de ellas es que podemos recuperar los datos públicos almacenados dentro de la Prueba ZK-Face sin realmente pasar por el proceso de descifrado para los metadatos que han sido almacenados de forma segura con tu rostro y una contraseña opcional.

Cada ZelfProof se ve diferente aunque contengan exactamente el mismo contenido, datos públicos, metadatos, autenticación facial y contraseña. Para identificar Pruebas ZK-Face únicas sin bases de datos o servidores centralizados, Zelf aprovecha soluciones de almacenamiento descentralizado como Arweave, IPFS y Walrus. Subimos Pruebas ZK-Face como códigos QR, cada uno bajo 70kb, con pares clave-valor sirviendo como identificadores. Una clave, el `ZelfName`, permite consultas eficientes a través de estas redes descentralizadas.

***

La tecnología de Zelf desbloquea un mundo de posibilidades para aplicaciones seguras y descentralizadas:

1. **Gestión Segura de Frases Semilla:** Cifra frases semilla con el Servicio de Nombres Zelf y accede a ellas usando solo tu rostro, eliminando la necesidad de billeteras de hardware o custodios de terceros.
2. **Resistencia Offline:** Opera en entornos de recursos limitados, como durante cortes de energía, siempre que tu dispositivo tenga energía.
3. **Privacidad y Control:** Almacena ZelfProofs localmente o en redes descentralizadas como Arweave o IPFS, asegurando que retengas propiedad completa de tus datos.
4. **Compatibilidad Multi-Cadena:** Gestiona activos a través de múltiples blockchains con una sola solución fácil de usar.

Al eliminar intermediarios, reducir costos y priorizar el control del usuario, Zelf entrega una experiencia verdaderamente descentralizada que empodera a individuos para tomar control de sus vidas digitales.

### 3. Technical overview

Biometric authentication, exemplified by Zelf’s Zero Knowledge Face Proofs (ZelfProofs), is revolutionizing cryptocurrency wallet security, offering a seamless alternative to traditional seed phrase management. While this technology enhances usability and protects digital assets, it raises privacy concerns, as biometric data are classified as sensitive personal information under regulations like the GDPR (General Data Protection Regulation). This is especially critical in systems where biometric references are centrally stored, exposing users to risks if compromised. Should an attacker access a subject’s biometric signal representation, the associated reference becomes vulnerable to impersonation, jeopardizing wallet security.

Zelf tackles these risks effectively by regenerating private keys on-device using facial recognition, without storing biometric data. This serverless, offline approach ensures seed phrases remain secure and with permanent access, eliminating the need for centralized databases. By leveraging zero-knowledge proofs, Zelf ensures unlinkability and irreversibility, protecting users from impersonation and advancing its mission of decentralized financial sovereignty.

Zelf’s Zero Knowledge Face Proofs (ZelfProofs) represent a groundbreaking advancement in cryptocurrency wallet security, leveraging cutting-edge biometric authentication to eliminate the vulnerabilities of traditional self-custody wallets and seed phrase management architectures. At the core of this system is the integration of IDLive Face, a passive facial liveness detection technology developed by ID R\&D. IDLive Face employs a single selfie to perform real-time spoofing detection, countering threats such as deepfakes, digitally manipulated images, and AI-generated content without requiring user interaction (e.g., no blinking or head-turning). This is achieved through two synergistic components:

* **IDLive Face Presentation Attack Detection:** Identifies and mitigates physical spoofing attempts, ensuring the authenticity of the facial input.
* **IDLive Face Deepfake Detection:** Protects against advanced digital manipulations, including AI faceswaps, synthetics (e.g., Midjourney, Stable Diffusion), and altered images (e.g., watermarks, screenshots), enhancing resilience against fraudulent access.

Zelf enhances this foundation by combining IDLive Face’s liveness verification with zero-knowledge proofs (ZKPs) to regenerate private keys on-device using facial biometrics. Unlike conventional systems, ZelfProofs do not store biometric data, relying instead on a serverless, offline architecture to encrypt seed phrases into secure, in permanent access formats (e.g., QR codes for storage on Arweave/IPFS).  This technical synergy not only fortifies security against impersonation but also aligns with Zelf’s mission to deliver financial sovereignty, offering a robust, privacy-preserving alternative to hardware wallets and cloud-dependent authentication systems.

IDLive Face’s superiority is further evidenced by its iBeta Level 1 and 2 ISO 30107-3 compliance, achieving a 0% Attack Presentation Classification Error Rate (APCER) in testing, outperforming many rivals like OCR Labs or Facia, which rely on similar certifications but lack the same passive precision. Its ability to detect deepfakes, AI synthetics, and manipulated images using a single selfie, without specialized hardware, surpasses solutions like FaceTec’s 3D FaceMaps, which require complex 3D modeling, or Oz Forensics, which focuses on active challenges. Additionally, IDLive Face’s on-device option reduces latency and enhances privacy, aligning with Zelf’s serverless, offline design and eliminating biometric storage risks inherent in cloud-dependent competitors like Sumsub.

Our liveness detection middleware robustly safeguards users by securing each ZK-Face Proof, ensuring it is uniquely linked to an individual's face and protected against targeted attacks. With IDLive Face integrated into the encryption/decryption process we can safely say that each ZK-Face Proof is highly protected. This ensures that only genuine facial inputs are used to generate/regenerate private keys, protecting seed phrases from spoofing attempts.&#x20;

When we perform a liveness check we get the following criteria considered in the process:

* **probability**: Indicates liveness likelihood (range: \[0,1]); a value ≥ 0.5 confirms a live image.
* **quality**: Assesses image suitability (range: \[0,1]); images below 0.5 are typically rejected.
* **score**: A raw liveness metric (unbound); higher values suggest greater liveness, useful for tuning attack presentation and bona fide presentation classification error rates (APCER/BPCER).
* **OS:** Specifies the environment where the image was captured, with options including IOS, ANDROID, DESKTOP, or UNKNOWN (default). DESKTOP applies to desktop webcams or IP cameras. Specifying the source—encouraged for best results—allows the software to adjust internal settings, improving liveness detection. If unspecified, IDLive Face automatically infers the source from image characteristics, ensuring flexibility.
* **CALIBRATION:** Balances Attack Presentation Classification Error Rate (APCER) and Bona Fide Presentation Classification Error Rate (BPCER):
  * *REGULAR (default):* Prioritizes low APCER for robust spoof protection.
  * *SOFT:* Reduces BPCER for fewer valid user rejections, maintaining acceptable APCER.
  * *HARDENED:* Targets ultra-low APCER with higher BPCER, ideal for high-security needs.

:::info
**APCER** and **BPCER**. These metrics evaluate the system's capability to differentiate authentic users from spoof attempts within Zelf's serverless, offline framework.

* *APCER* (Attack Presentation Classification Error Rate): Represents the rate at which spoofing attacks (e.g., deepfakes, manipulated images) are incorrectly accepted as live. A lower APCER ensures robust protection against unauthorized access, aligning with Zelf's commitment to eliminating seed phrase vulnerabilities.
* *BPCER* (Bona Fide Presentation Classification Error Rate): Indicates the rate at which legitimate users are incorrectly rejected. A lower BPCER enhances user experience, ensuring seamless access to permanent seed phrases without compromising security.

Zelf optimizes these metrics through configurable calibration settings (e.g., REGULAR, SOFT, HARDENED), balancing security and convenience.
:::

### 4. Related work

The convergence of biometric authentication and decentralized cold wallet technology represents a transformative frontier in cryptocurrency security and user experience. **Zelf pioneers** this space by integrating Zero Knowledge Face Proofs (**ZelfProofs**)—a privacy-preserving, serverless solution that leverages *facial recognition* to regenerate *private keys on-device without storing sensitive biometric data*. This approach ensures true decentralization, enhances security, and eliminates reliance on external systems or hardware. To contextualize Zelf’s position, this section examines competitors in two key areas: *biometric authentication for cryptocurrency wallets* and *decentralized cold wallets with advanced security features*. Each competitor is evaluated based on its technology, features, and differentiation from Zelf.\
\
The demand for secure, user-friendly cryptocurrency wallets has spurred innovation in biometric authentication and cold storage solutions. While traditional wallets rely on storing seed phrases or hardware devices, emerging projects are exploring biometrics and zero-knowledge proofs (ZKPs) to streamline access and enhance privacy. Zelf’s unique combination of facial biometrics and ZKPs positions it as a leader in this niche, though several competitors offer comparable features or overlapping technologies. The following analysis highlights the most relevant players in the field.

#### Zengo

* **Technology:** Zengo is a mobile-first cryptocurrency wallet that employs multi-party computation (MPC) and facial recognition (FaceTec is their biometrics provider) for secure key management. It replaces seed phrases by distributing private keys across multiple devices, using biometrics for access authentication. However, this centralized approach stores biometric data as face vectors for decryption comparisons, risking fund loss if hacked. Additionally, if the service provider ceases operations, users could lose access to their recovery method for seed phrases.
* **Key Features:**
  * Facial recognition for user authentication (Provided by Facetec > KYC Biometric provider).
  * MPC-based key distribution, removing the need for seed phrases.
  * Supports major cryptocurrencies
  * *Cloud-based* recovery tied to biometric data.
* **Comparison to Zelf:** Zengo shares Zelf’s use of biometrics but diverges in its reliance on MPC and **cloud infrastructure**. While Zengo offers a seamless experience, its dependence on external systems contrasts with Zelf’s fully decentralized, serverless approach. ZelfProofs regenerate keys offline and locally on-device without storing biometric data, providing superior privacy and autonomy.

#### Dfns

* **Technology:** Dfns provides a decentralized wallet solution with biometric authentication and zero-knowledge credentials. It leverages the **WebAuthn** protocol (supporting facial or fingerprint recognition) and delegated signing to secure transactions without requiring users to manage private keys directly. WebAuthn now is known as **PassKeys.**
* **Key Features:**
  * WebAuthn-based biometric authentication.
  * Zero-knowledge credentials for identity verification.
  * Delegated signing for transaction security.
* **Comparison to Zelf**: Dfns incorporates ZKPs and biometrics, aligning with Zelf’s privacy focus. However, it relies on external protocols and services, whereas ZelfProofs operate entirely offline on the user’s device. This makes Zelf censorship resistance, more decentralized and less vulnerable to third-party risks.\\

#### **AuthenTrend AT.Wallet**

* **Technology:** AuthenTrend’s AT.Wallet is a hardware-based cold wallet that uses fingerprint authentication for access. It remains offline, employing Bluetooth Low Energy for secure pairing with mobile devices.
* **Key Features:**
  * Fingerprint biometric authentication.
  * Air-gapped cold storage.
  * Multi-currency support (e.g., Bitcoin, Ethereum).
* **Comparison to Zelf:** AT.Wallet uses biometrics for security but requires a physical device and stores fingerprint data on the hardware. Zelf’s software-based solution avoids hardware dependencies and regenerates keys per session without retaining biometric data, offering greater flexibility and privacy.

#### **NGrave Zero**

* **Technology:** NGrave Zero is a premium hardware wallet featuring air-gapped operation and fingerprint authentication. It uses a secure element chip and QR code-based signing to ensure transactions remain offline.
* **Key Features:**
  * Air-gapped with no internet connectivity.
  * Fingerprint biometric authentication.
  * EAL7-certified secure element (highest industry standard).
  * Supports multiple cryptocurrencies and NFTs.
* **Comparison to Zelf:** NGrave Zero offers robust security and biometric access, but its hardware-centric design contrasts with Zelf’s device-agnostic approach. Additionally, NGrave stores biometric data on the device, while ZelfProofs prioritize privacy by not retaining such information.

#### **ELLIPAL Titan 2.0**

* **Technology:** ELLIPAL Titan 2.0 is an air-gapped hardware wallet that uses QR codes for transaction signing, ensuring complete isolation from the internet. It supports a broad ecosystem of cryptocurrencies and decentralized applications (dApps).
* **Key Features:**
  * Fully air-gapped with QR code signing.
  * Supports over 10,000 cryptocurrencies and dApps.
  * Tamper-proof with self-destruct mechanism.
* **Comparison to Zelf:** ELLIPAL Titan 2.0 excels in offline security but lacks biometric authentication. Zelf integrates facial recognition with ZK-Face Proofss, providing a user-friendly alternative that doesn’t require physical hardware, making it more accessible and versatile.

#### **SafePal S1**

* **Technology:** SafePal S1 is an air-gapped hardware wallet that uses QR codes for transaction signing and supports a wide range of cryptocurrencies. It integrates with the SafePal app for asset management and dApp interaction.
* **Key Features:**
  * Air-gapped with no Bluetooth, Wi-Fi, or USB connectivity.
  * Supports over 10,000 cryptocurrencies.
  * Self-destruct mechanism for tampering attempts.
* **Comparison to Zelf:** SafePal S1 prioritizes security through isolation but does not offer biometric features. Zelf’s combination of biometric key regeneration and decentralized operation provides a distinct advantage in usability and privacy without hardware constraints.

#### Emerging Projects and Trends

Several nascent projects are exploring the intersection of biometrics, ZKPs, and decentralized wallets, though *they fall short* of Zelf’s specific implementation:

* Polygon ID: Utilizes ZKPs for decentralized identity verification but focuses on credentials rather than biometric wallet authentication.
* zkSafe Wallet: Employs ZKPs and account abstraction for confidential multisig wallets, targeting institutional users like DAOs, without biometric integration.

#### PassKeys (WebAuthn) vs. Zero Knowledge Face Proofs

PassKeys, built on the WebAuthn standard, is a passwordless authentication protocol developed by the FIDO Alliance to enhance security and user experience. It enables biometric (e.g., facial or fingerprint recognition) or device-based authentication (e.g., security keys) to generate public-private key pairs for secure login to websites and applications. PassKeys relies on a trusted authenticator (e.g., a smartphone or hardware token) t**o store private keys and biometric templates**, often **syncing** them across devices via **cloud services like iCloud or Google**. While PassKeys improves security over passwords, it **depends on centralized or semi-centralized infrastructure**, such as relying parties (servers) and cloud storage, which introduces potential vulnerabilities and privacy concerns.\
\
While PassKeys enhances web authentication, its reliance on centralized infrastructure and stored biometrics limits its privacy and autonomy. Zelf’s decentralized, serverless design and Zero Knowledge Face Proofs deliver unmatched security, making seed phrase loss impossible and empowering users with true financial sovereignty.

#### How Zelf Surpasses PassKeys

*Zelf’s Zero Knowledge Face Proofs (ZelfProofs) redefine secure authentication for cryptocurrency wallets by offering a fully decentralized, privacy-first alternative:*

* **No Biometric Storage**: Unlike PassKeys, which stores biometric templates on devices or cloud services, ZelfProofs regenerate private keys on-device using facial biometrics and destroy them post-session, eliminating data leakage risks.
* **Serverless and Offline**: Zelf operates without servers, databases, or internet connectivity, unlike PassKeys’ reliance on relying parties and cloud syncing, ensuring true decentralization and offline functionality.
* **Unlosable Seed Phrases**: Zelf encrypts seed phrases into ZelfProofs, accessible solely via the user’s face, preventing loss without external recovery mechanisms, unlike PassKeys’ device-dependent model.
* **Enhanced Privacy with ZKPs:** Zelf’s zero-knowledge proofs ensure unlinkability and irreversibility, preventing tracking or reverse-engineering of biometric data, a vulnerability in PassKeys’ template-based approach.

### 5. Inheritance

Zelf Proofs offer a robust, privacy-centric solution for cryptocurrency inheritance, enabling family members to recover funds after a loved one’s passing without the risks associated with lost or inaccessible seed phrases. This innovative feature allows users to pre-authorize recovery by encrypting their seed phrases with the facial biometrics of trusted individuals, such as a spouse, children, or other designated heirs, at any point of time inside the Zelf Name Service app or via our SDKs or APIs. Unlike traditional methods that rely on physical seed phrase backups or *third-party custodians*, Zelf empowers users to embed these authorizations secretly within the Zelf Name record stored in the decentralized storage options we provide to the end user, ensuring a seamless and secure contingency plan.

#### **Encryption process: pre-authorizing family members**

The encryption process begins when the wallet owner uses the Zelf mobile app to generate a ZelfProof. During this phase, the owner can opt to include additional authorized faces beyond their own. Using the app’s multi-face encryption feature, the owner captures facial images of family members (e.g., a high-resolution selfie for each). These images are processed *without a liveness test*, allowing flexibility in setup—images can be taken at different times or locations. The ZelfProof encrypts the seed phrase and private key metadata, using the biometric data of all authorized individuals into the cryptographic structure using zero-knowledge proofs (ZKPs). The resulting encrypted data can be stored as a QR code and linked to a Zelf Name, securely archived on decentralized platforms like Arweave or IPFS, or kept locally on the owner’s device. *No biometric data is stored at all*; instead, ZKPs ensure the information is obfuscated and unusable without proper decryption. Your face is your private key, and in this case, your spouse/son/daughter/mother/father face is the private key as well!

#### Decryption and recovery process: ensuring authenticity

Upon the owner’s passing, family members initiate recovery by accessing the Zelf app with their own device. They present their face to the app, triggering the decryption process. Here, IDLive Face’s passive liveness detection is *activated*, requiring a live facial scan to verify the individual’s presence and prevent spoofing attempts (e.g., deepfakes, printed photos). The app generates a private key using the ZK-FaceProof as the public key. If the liveness detection passes successfully, indicated by a probability score ≥ 0.51 | 0.70 | 0.85 \[depending on the configuration in the calibration] from the liveness check, the system regenerates the private key on-device. This key unlocks the encrypted seed phrase, granting access to the wallet and its funds. The liveness check, configurable with settings like REGULAR or HARDENED calibration, balances security (low APCER) and usability (low BPCER), ensuring only authorized heirs can proceed.

Zelf’s serverless, offline architecture ensures the entire process occurs locally, *eliminating reliance on centralized servers or databases.* The use of ZKPs guarantees unlinkability; preventing correlation of authentication attempts, and irreversibility; prohibiting reverse-engineering of biometric data. This protects against unauthorized access even if the QR code is intercepted or seen by other people inspecting the blockchain transactions. Additionally, the one-time key regeneration per session prevents reuse, enhancing security. Family members can repeat the process as needed, with no stored biometric data retained, aligning with GDPR compliance and Zelf’s privacy-first ethos.

To prepare for inheritance, users should document the storage location of the ZelfProof (e.g., a physical QR code copy or purchase a life-time license for the Zelf Name record) and inform trusted family members of their authorized status. While Zelf simplifies recovery, users are encouraged to consult legal advisors to ensure compliance with local inheritance laws, as digital asset transfer rules vary by jurisdiction. This proactive approach ensures a smooth access of funds, preserving the owner’s digital legacy with confidence.

### 6. Enterprise solution

Zelf’s Zero Knowledge Face Proofs (ZelfProofs) technology is positioned to become a primary tool for enterprises seeking robust, privacy-preserving authentication and data security solutions. By leveraging advanced biometric encryption, serverless architecture, and reducing costs to the bare minimum, Zelf offers a transformative platform that addresses the complex demands of organizations across finance, healthcare, government, and beyond. This section explores how Zelf can be integrated as a foundational technology to enhance enterprise operations.

#### Seamless integration into enterprise workflows

Enterprises can deploy ZelfProofs to secure sensitive data, such as cryptographic keys or proprietary metadata, without relying on centralized servers or databases. The technology’s offline capability, powered by on-device key regeneration, allows organizations to implement secure authentication across distributed teams, even in disconnected environments. For instance, financial institutions can use Zelf to encrypt customer seed phrases or transaction data, ensuring compliance with regulations like GDPR while eliminating single points of failure. The integration of IDLive Face’s passive liveness detection further fortifies this process, countering spoofing attempts with real-time verification, making it ideal for high-stakes applications like digital banking or payment processing.

#### Scalability and customization for large organizations

Zelf’s volume-based licensing model enables enterprises to scale deployment according to user base or transaction volume, offering flexibility for global operations. Customizable calibration settings (e.g., REGULAR, SOFT, HARDENED) allow organizations to tune Attack Presentation Classification Error Rate (APCER) and Bona Fide Presentation Classification Error Rate (BPCER) to meet specific security needs—low APCER for maximum fraud protection or low BPCER for user convenience. This adaptability supports diverse use cases, from securing employee access in healthcare to authenticating multi-party transactions in DeFi platforms.

By offering tailored B2B licenses, Zelf can collaborate with fintechs, healthcare providers, and government agencies, providing a competitive edge over hardware-based or cloud-dependent solutions. Educational programs and dedicated support ensure smooth adoption, while premium features like inheritance planning attract large-scale clients. As enterprises prioritize data sovereignty, Zelf’s serverless design positions it as a market leader, driving innovation and securing digital assets at scale.

#### Zelf MPC: Multi-face encryption for succession planning

A standout feature for enterprises is Zelf’s multi-face encryption, enabling organizations to pre-authorize multiple biometric profiles (e.g., executives, IT administrators) for access control or recovery. During setup, authorized personnel can encrypt sensitive systems or wallets with their faces, bypassing liveness checks at this stage. Decryption requires a live scan, ensuring only verified individuals regain access, critical for succession planning or emergency recovery. This feature, combined with secure storage via Arweave/IPFS, provides a resilient backup strategy without compromising privacy.

Zelf’s Multi-Party Computation (MPC) enhanced with multi-face encryption represents a groundbreaking feature, positioning ZelfProofs as a premier solution for enterprise succession planning and access recovery. This capability allows organizations to pre-authorize multiple biometric profiles, such as executives, IT administrators, or designated successors, for secure access to sensitive systems or cryptocurrency wallets.

In traditional crypto wallets, MPC is a cryptographic technique that distributes the private key across multiple parties, ensuring no single entity holds the complete key. For transaction signing, MPC wallets (e.g., ZenGo, Fireblocks) split the key into shares, computed using secure algorithms like Shamir’s Secret Sharing. Each party contributes its share during a signing ceremony, typically over a network, where a trusted computation protocol (e.g., threshold signatures) reconstructs the key temporarily for signing without ever exposing it fully. This enhances security against single-point failures but requires online coordination and trusted infrastructure, limiting offline usability.

Zelf adapts MPC to integrate multiple biometric faces within each ZelfProof, enabling collaborative signing without centralized dependencies. During setup, authorized individuals (e.g., a CEO and CFO) enroll their facial biometrics via the Zelf app, bypassing liveness checks to allow flexible registration. The system encrypts the wallet’s seed phrase and metadata, distributing biometric-derived key shares across the enrolled faces using ZKPs. These shares are embedded in the ZelfProof, stored securely as a QR code on Arweave/IPFS.

For signing transactions, all authorized faces must participate in a decentralized signing ceremony. Each user presents a live facial scan, verified by IDLive Face’s liveness detection, to regenerate their key share. The Zelf app orchestrates the MPC protocol on-device, combining shares via a threshold mechanism (e.g., 2-of-3 faces required) to reconstruct the private key temporarily for signing. The key is then destroyed, ensuring no persistent storage. This offline process, free from servers or internet reliance, guarantees privacy through unlinkability and irreversibility.

This multi-face MPC approach is critical for succession planning, allowing seamless key recovery if an authorized individual is unavailable. Enterprises can configure threshold policies (e.g., 50% of enrolled faces), enhancing resilience. Combined with Zelf’s serverless design, it mitigates risks of data breaches, aligning with GDPR compliance and offering a robust, privacy-preserving alternative to traditional MPC wallets.

#### P2P Identity validation with decentralized KYC using ZelfProofs

Zelf’s Zero Knowledge Face Proofs (ZelfProofs) introduces a transformative use case for Peer-to-Peer (P2P) transactions, offering a decentralized Know Your Customer (KYC) solution that validates identities without storing biometric data. In P2P ecosystems, such as cryptocurrency exchanges, NFT marketplaces, or decentralized lending platforms, trust between parties is paramount. Traditional KYC processes rely on centralized entities that collect and retain sensitive biometric or personal data, exposing users to privacy risks and data breaches. Zelf redefines this paradigm by enabling secure, privacy-preserving identity verification directly between peers.

The process begins when a user enrolls their facial biometric via the Zelf app. IDLive Face’s passive liveness detection verifies the authenticity of the input, countering spoofing attempts without requiring active user actions. The biometric data is then processed using zero-knowledge proofs (ZKPs) to generate a unique, anonymized identity token—embedded within a ZelfProof—without retaining raw biometric information. This token is shared with the P2P counterparty during a transaction, either via a secure QR code or peer-to-peer communication channel.

For validation, the receiving party uses their Zelf app to initiate a liveness check, prompting the sender to provide a live facial scan. The app compares the live scan against the ZKP-derived token, regenerating a temporary verification key on-device. If the liveness probability (e.g., ≥ 0.5) and quality score meet thresholds, the identity is confirmed, enabling the transaction. This process occurs offline, leveraging Zelf’s serverless architecture, with no data stored on centralized servers or databases.

This decentralized KYC approach ensures privacy through unlinkability, preventing correlation of transactions, and irreversibility, preventing reverse-engineering of biometric data. It eliminates the need for third-party KYC providers, reducing costs and compliance burdens while enhancing user trust. Enterprises can integrate this into P2P platforms, offering volume-based licenses, while individuals benefit from a seamless, secure experience. By avoiding biometric storage, Zelf complies with regulations like GDPR, positioning it as a leader in privacy-focused P2P ecosystems.

### 7. Monetization&#x20;

Zelf’s monetization strategy leverages the innovative capabilities of Zero Knowledge Face Proofs (ZelfProofs) to generate sustainable revenue while empowering users with secure cryptocurrency management. The approach is built on a multi-tiered model tailored to diverse market segments, ensuring scalability and long-term growth.

1. **Individual licenses for Zelf Names (B2C):** Users can purchase individual licenses tied to their Zelf Name, granting access to the encryption and decryption of seed phrases. This B2C offering provides a straightforward, affordable way for individuals to secure their crypto wallets, eliminating the risk of seed phrase loss with a one-time or recurring fee per Zelf Name.
2. **B2B Licensing for crypto projects:** Zelf extends its technology to cryptocurrency firms, offering licenses to encrypt metadata and seed phrases based on transaction volume. This allows exchanges, wallets, and DeFi platforms to integrate ZelfProofs’ serverless, privacy-preserving encryption, generating revenue through tiered licensing agreements that scale with usage, enhancing their security offerings.
3. **B2B licensing for web2 applications:** Beyond crypto, Zelf licenses its technology to Web2 businesses for non-crypto use cases—such as secure data encryption for identity verification or customer authentication. Volume-based agreements enable enterprises to adopt ZelfProofs across industries, tapping into a broader market while maintaining the same high-security standards.
4. **Premium inheritance licenses (B2C):** For users seeking advanced features, Zelf offers lifetime licenses for Zelf Names with inheritance capabilities. This premium tier allows pre-authorization of family members’ faces for fund recovery post-mortem, requiring a liveness check for decryption. The higher cost reflects the added value of ensuring a digital legacy, appealing to privacy-conscious crypto holders.

This diversified strategy maximizes revenue potential while aligning with Zelf’s mission of financial sovereignty, offering flexible, secure solutions across consumer and enterprise markets.
