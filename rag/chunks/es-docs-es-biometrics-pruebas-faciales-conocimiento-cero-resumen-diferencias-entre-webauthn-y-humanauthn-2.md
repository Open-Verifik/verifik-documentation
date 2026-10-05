---
id: "es-docs-es-biometrics-pruebas-faciales-conocimiento-cero-resumen-diferencias-entre-webauthn-y-humanauthn-2"
title: "HumanAuthn Resumen — Diferencias entre WebAuthn y HumanAuthn"
sourcePath: "docs-es/biometrics/pruebas-faciales-conocimiento-cero-resumen.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
sourceAnchor: "Diferencias entre WebAuthn y HumanAuthn"
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

## Diferencias entre WebAuthn y HumanAuthn

### WebAuthn

-   El usuario demuestra posesión de un **dispositivo, donde reside la clave privada**
-   El biométrico / PIN desbloquea el autenticador del dispositivo
-   La firma demuestra autenticidad
-   Confianza centrada en el dispositivo o RoT de Hardware

### HumanAuthn

-   El usuario demuestra **presencia biométrica en vivo = reconstrucción de clave**
-   El biométrico + aleatoriedad almacenada reconstruye una **clave efímera**
-   La desencriptación exitosa demuestra autenticidad
-   Confianza centrada en el humano o RoT Biométrica

---

## Comparación de Arquitectura de Contrato

  
    
      Contrato WebAuthn
      {'Browser → Authenticator → Yes / No'}
      
        El desarrollador nunca maneja claves privadas
        El navegador abstrae hardware y criptografía
        La salida es una aserción criptográfica
      
    
    
      Contrato HumanAuthn
      {'System → Human → Yes / No'}
      
        El desarrollador nunca maneja datos biométricos
        El sistema abstrae reconocimiento facial y criptografía
        La salida es una desencriptación exitosa (o falla)
      
    
  
  
    &#x1F4CC;
    
      En ambos casos:
      
        El secreto nunca sale de su límite
        El desarrollador solo obtiene un resultado verificable
      
    
  

---

## Tabla Comparativa

| Seguridad | WebAuthn | HumanAuthn |
| --- | --- | --- |
| Base de confianza | Hardware | Biométrico/Humano |
| Elemento almacenado | Claves privadas | Aleatoriedad |
| Vida útil de la clave privada | A largo plazo | Efímero |
| Almacenamiento de claves privadas | Enclave seguro / TPM | Nunca se ha almacenado |
| Reutilización de claves privadas | Yes | No |
| Datos biométricos almacenados | No | No |
| Plantillas biométricas | No | No |
| Metadatos cifrados | No | ✅ |
| Correlación de credenciales | A veces (según el ID de RP) | No (no se puede vincular estructuralmente) |
| Verificación sin conexión | Limitado | Nativo |

---
