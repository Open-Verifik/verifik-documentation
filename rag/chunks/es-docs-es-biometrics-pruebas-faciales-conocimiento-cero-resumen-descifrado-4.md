---
id: "es-docs-es-biometrics-pruebas-faciales-conocimiento-cero-resumen-descifrado-4"
title: "HumanAuthn Resumen — Descifrado"
sourcePath: "docs-es/biometrics/pruebas-faciales-conocimiento-cero-resumen.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
sourceAnchor: "Descifrado"
slug: "/biometrics/humanauthn"
url: "https://docs.verifik.co/verifik-es/biometrics/humanauthn"
---

# HumanAuthn Resumen

HumanAuthn representa un avance respecto a los estándares de autenticación como WebAuthn, creado por la FIDO Alliance.
Como su nombre lo indica, HumanAuthn depende de la presencia humana, un enfoque revolucionario al viejo estándar de raíz de confianza basada en hardware, que se basa en autenticar usuarios verificando el dispositivo que previamente registraron.
HumanAuthn es tanto una primitiva de autenticación como criptográfica que combina Biometría + Criptografía + Aleatoriedad (entropía almacenada), que permite la creación de IDs y estructuras de datos que preservan la privacidad, que funcionan como credenciales verificables. En lugar de almacenar plantillas biométricas, vectores de características o claves, HumanAuthn se basa en entropía aleatoria almacenada y operaciones criptográficas condicionadas por el rostro para realizar la autenticación.
Una propiedad central de HumanAuthn es la **divulgación de conocimiento cero a nivel de sistema**: el sistema no revela información biométrica más allá de un resultado binario de autenticación. Esta es una propiedad del sistema, no una primitiva criptográfica de prueba de conocimiento cero. Como resultado, los usuarios pueden ser autenticados usando reconocimiento facial sin que sus datos biométricos sean almacenados, reconstruidos o expuestos a los verificadores.
---
| Layer | FIDO Alliance | Verifik |
| --- | --- | --- |
| Framework | Framework FIDO | Framework privado |
| Primitiva | WebAuthn | HumanAuthn |
| Tipo de primitiva | Autenticación | Autenticación + Encriptación |
| Implementaciones | PassKeys | smartENROLL smartACCESS Control de Acceso |
| Producto de consumo | Productos construidos sobre Passkeys (integraciones con Apple, Google y Microsoft) | Productos construidos sobre las implementaciones de Verifik |
---

## Descifrado

Durante el descifrado, también conocido como la fase de autenticación, HumanAuthn recibe una muestra biométrica en vivo del individuo que busca acceso. El sistema combina la entrada biométrica con la entropía aleatoria almacenada para reconstruir material de clave criptográfica efímera. Si la muestra biométrica corresponde al individuo registrado, la clave correcta se reconstruye y el HumanID se descifra exitosamente, revelando los metadatos autorizados. El acto de descifrado exitoso en sí mismo constituye la autenticación. Si la muestra biométrica no coincide, la reconstrucción de la clave falla y el descifrado es imposible.

**Resumen:**

-   Presentar token HumanID con entrada biométrica (imagen facial)
-   HumanAuthn reconstruye la clave efímera
-   Retorna resultado de verificación con metadatos opcionales

### Vista Previa

En la fase de vista previa, cualquier persona, incluyendo usuario o desarrollador, puede visualizar la información pública del HumanID (credencial verificable), es decir, cualquier información puesta a disposición del público que no sea sensible y que fue configurada por el desarrollador.

**Resumen:**

-   Examinar contenido del HumanID sin verificación completa
-   Ver datos públicos y configuraciones
-   No se requiere verificación biométrica

---

## HumanID

Funcionalidad básica de identificación en HumanAuthn.

En esta sección, detallamos los principales componentes y características para crear y verificar un HumanID:

-   **HumanAuthn**: sistema de autenticación y cifrado con reconocimiento biométrico en tiempo real.
-   **HumanData**: bytes sin procesar generados y cifrados mediante HumanAuthn, que pueden almacenarse en una base de datos, tarjeta NFC o código QR de HumanID. Durante el descifrado, se utiliza el rostro del titular de HumanID para desbloquear los metadatos privados contenidos en HumanData.
-   **HumanID-QR**: Portabilidad de HumanID en formato de código QR que contiene HumanData, metadatos públicos y privados.
-   **Cifrado y descifrado**. HumanAuthn es el único software capaz de cifrar bytes sin procesar (metadatos privados) en HumanData y descifrarlos, revelando su contenido con el reconocimiento biométrico en tiempo real del titular de HumanID.

---
