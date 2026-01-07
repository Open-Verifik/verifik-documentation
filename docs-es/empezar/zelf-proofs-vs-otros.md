# Zelf Proofs vs Otros

En la última década, muchas soluciones de pruebas ZK han nacido con aplicaciones en la industria blockchain. Algunos desarrolladores pueden preguntarse, ¿cuál es la diferencia entre Zelf Proof y las soluciones ZK convencionales de código abierto? Aquí presentamos un desglose para cada tecnología, señalando sus diferencias, aplicaciones y límites.

### Desglose

<details>

<summary>Zelf Proof (ZK- Face Proofs™)</summary>

**Definición**\
No interactivo, altamente escalable, tamaño de prueba pequeño, configuración confiable a través de mecanismo de licencias.

La tecnología **ZelfProof** (ZK- Face Proofs™) no depende de pruebas de conocimiento cero convencionales (ZKPs). Sin embargo, logra el mismo objetivo: verificar la autenticidad de un rostro sin revelar ninguna información biométrica. Al generar un ZelfProof único, esto permite a alguien cifrar información con su rostro sin divulgar el rostro a ningún tercero. El **ZelfProof** no divulga los datos del rostro en ningún momento. Esto asegura verificación de identidad que preserva la privacidad y es segura sin necesidad de exponer o almacenar datos biométricos.

**Configuración Confiable**

Configuración confiable a través de un mecanismo de licencias

**Interactividad**

No interactivo, puede verificarse offline

**Tamaño de Prueba**

\~ 2- 3kb y 60 kb en formato QR

**Tiempo de Verificación**

Rápido, también funciona en móvil

**Escalabilidad**

Altamente escalable ya que puede ejecutarse en el móvil directamente sin ningún cómputo de servidor

**Suposiciones de Seguridad**

Los ZelfQRs están basados en criptografía de Curva Elíptica. Los Certificados Faciales pronto serán cuántico-seguros.

**Seguridad Post-Cuántica**

La versión PQC de Certificados Faciales es cuántico-segura.

**Complejidad**

SDK simple

**Transparencia**

Configuración confiable a través de un mecanismo de licencias (no completamente transparente).

**Casos de Uso**

Verificación de atributos eID funcionales (eKYC) \
Prueba de presencia y humanidad única \
Autenticación de transacciones basada en rostro \
Registro basado en rostro \
Inicio de sesión basado en rostro \
Cifrado de documento/archivo/disco basado en rostro \
Firma de documento/archivo basada en rostro \
IDs Nacionales/eID con Verificación Offline/Online \
Seguridad de Billetera

**Idoneidad para Blockchain**

Los **ZelfProofs** pueden integrarse en una blockchain de identidad, como HyperLedger Indy, vía el protocolo ZelfEncrypt de Tecnología de Libro Distribuido (DLT). Esto permite verificación de identidad segura y que preserva la privacidad en la blockchain sin exponer o almacenar datos biométricos sensibles.

</details>

<details>

<summary>zk Proof</summary>

Una clase general de pruebas de conocimiento cero donde una parte prueba la validez de una declaración sin revelar información.

**Configuración Confiable**

Depende del protocolo específico, típicamente interactivo.

**Interactividad**

A menudo interactivo (múltiples rondas de comunicación entre probador y verificador).

**Tamaño de Prueba**

Puede ser grande dependiendo de la complejidad de la prueba.

**Tiempo de Verificación**

Puede ser lento y depende del tamaño de la prueba y cómputo.

**Escalabilidad**

Limitada, especialmente para cómputos grandes.

**Suposiciones de Seguridad**

Varía, a menudo se basan en suposiciones criptográficas estándar.

**Seguridad Post-Cuántica**

Depende de las primitivas criptográficas utilizadas (la mayoría no son cuántico-seguras).

**Complejidad**

Generalmente simple, pero requiere múltiples rondas de interacción.

**Transparencia**

Varía según el protocolo.

**Casos de Uso**

Autenticación que preserva la privacidad, intercambio de datos, etc.

**Idoneidad para Blockchain**

Limitada; típicamente no se usa directamente en blockchains debido a tamaños de prueba más grandes e interactividad.

</details>

<details>

<summary>zk SNARK</summary>

Pruebas de conocimiento cero sucintas y no interactivas con tamaños de prueba pequeños y verificación rápida.

**Configuración Confiable**

Sí (requiere configuración confiable).

**Interactividad**

No interactivo (una vez que se genera la prueba, no se necesita más interacción).

**Tamaño de Prueba**

Pequeño (unos pocos cientos de bytes).

**Tiempo de Verificación**

Verificación muy rápida.

**Escalabilidad**

Menos escalable para cómputos muy grandes.

**Suposiciones de Seguridad**

Basado en criptografía de curva elíptica (ECDLP), no cuántico-seguro.

**Seguridad Post-Cuántica**

No (vulnerable a ataques cuánticos debido a la dependencia en criptografía de curva elíptica).

**Complejidad**

Más complejo debido a matemáticas de curva elíptica y configuración confiable.

**Transparencia**

Requiere configuración confiable (no completamente transparente).

**Casos de Uso**

Sistemas enfocados en privacidad como Zcash, y pruebas de identidad.

**Idoneidad para Blockchain**

Ampliamente usado para privacidad en aplicaciones blockchain (ej., Zcash).

</details>

<details>

<summary>zk STARK</summary>

Pruebas de conocimiento cero escalables y transparentes diseñadas para cómputos grandes, sin configuración confiable.

**Configuración Confiable**

No (transparente, sin configuración confiable).

**Interactividad**

No interactivo (como ZK-SNARKs).

**Tamaño de Prueba**

Grande (kilobytes a megabytes).

**Tiempo de Verificación**

Verificación rápida, pero ligeramente más lenta que SNARKs para pruebas pequeñas.

**Escalabilidad**

Altamente escalable, maneja cómputos grandes eficientemente.

**Suposiciones de Seguridad**

Basado en funciones hash (cuántico-seguro).

**Seguridad Post-Cuántica**

Sí (resistente a ataques cuánticos).

**Complejidad**

Más simple que SNARKs, no necesita configuración, usa funciones hash básicas.

**Transparencia**

Completamente transparente (no requiere configuración confiable).

**Casos de Uso**

Escalamiento de blockchain, cómputos a gran escala (ej., StarkWare).

**Idoneidad para Blockchain**

Mejor adaptado para escalamiento de blockchain y DApps de alto rendimiento (ej., soluciones de capa 2).

</details>
