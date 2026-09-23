---
id: "es-docs-es-biometrics-pruebas-faciales-conocimiento-cero-resumen-overview"
title: "HumanAuthn Resumen"
sourcePath: "docs-es/biometrics/pruebas-faciales-conocimiento-cero-resumen.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
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
