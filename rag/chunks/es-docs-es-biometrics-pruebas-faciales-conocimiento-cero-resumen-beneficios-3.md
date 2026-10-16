---
id: "es-docs-es-biometrics-pruebas-faciales-conocimiento-cero-resumen-beneficios-3"
title: "HumanAuthn Resumen — Beneficios"
sourcePath: "docs-es/biometrics/pruebas-faciales-conocimiento-cero-resumen.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
sourceAnchor: "Beneficios"
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

## Beneficios

Cifrado Robusto
    Utilizamos criptografía de curva elíptica para cifrar metadatos sin almacenar rasgos biométricos faciales.
  
  
    
      
    
    Autenticación facial
    HumanAuthn autentican al usuario sin almacenar datos biométricos.
  
  
    
      
    
    Funcionalidad offline/online
    HumanAuthn funcionan con o sin conexión a internet, brindando flexibilidad y seguridad.
  
  
    
      
    
    Descentralización
    HumanAuthn funciona P2P, permitiendo verificaciones de forma distribuida, sin depender de servidores centrales.
  

---

## Propiedades

  
    
      
    
    Irreversibilidad
    Los datos biométricos no se pueden reconstruir a partir de la información almacenada. Sin plantilla, no hay riesgo para la base de datos biométrica.
  
  
    
      
    
    Desvinculabilidad
    Los eventos de autenticación no pueden correlacionarse entre servicios. Cada interacción genera nuevo material criptográfico.
  
  
    
      
    
    Renovabilidad (Revocabilidad)
    ¿Aleatoriedad comprometida? Genera nueva aleatoriedad. Tu identidad biométrica permanece intacta.
  

A diferencia de las claves privadas estáticas, HumanAuthn genera claves efímeras

---

## Cómo Funciona

### Fase de Cifrado

Durante el cifrado, también conocido como la fase de registro, HumanAuthn recibe una muestra biométrica en vivo del usuario y genera de forma independiente material aleatorio de alta entropía que no contiene características biométricas, claves ni vectores de características. Esta entropía aleatoria se almacena. Usando la muestra biométrica y la entropía almacenada, HumanAuthn deriva material de clave criptográfica efímera para cifrar metadatos de identidad y generar una credencial verificable (VC) que llamamos HumanID, frecuentemente codificada como código QR. Todas las claves efímeras se descartan inmediatamente después de la creación del HumanID.

**Resumen:**

-   Capturar muestra biométrica (imagen facial) con detección de vitalidad opcional
-   Generación de clave efímera
-   Generación de HumanID (credencial verificable)
-   Almacenamiento de HumanID en la nube/IPFS
-   Retorno del token HumanID para verificación futura
