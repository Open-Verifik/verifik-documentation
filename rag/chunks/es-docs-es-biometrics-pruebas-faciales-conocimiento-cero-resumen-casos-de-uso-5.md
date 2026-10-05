---
id: "es-docs-es-biometrics-pruebas-faciales-conocimiento-cero-resumen-casos-de-uso-5"
title: "HumanAuthn Resumen — Casos de Uso"
sourcePath: "docs-es/biometrics/pruebas-faciales-conocimiento-cero-resumen.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
sourceAnchor: "Casos de Uso"
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

## Casos de Uso

### **Identidad Digital**

-   Sistemas de inicio de sesión seguros
-   Verificación de identidad para servicios
-   Cumplimiento KYC (Conoce a Tu Cliente)

### **Control de Acceso**

-   Gestión de acceso físico y digital
-   Verificación de asistencia a eventos
-   Acceso seguro a documentos

### **Servicios Financieros**

-   Autenticación bancaria
-   Verificación de pagos
-   Prevención de fraude

### **Salud**

-   Verificación de identidad del paciente
-   Acceso a registros médicos
-   Verificación de recetas

---

## Comenzar

Para comenzar a usar HumanAuthn:

1. **Crear un HumanID**: Usa el endpoint `/encrypt` para generar tu primer HumanID
2. **Verificar Identidad**: Usa el endpoint `/decrypt` para verificar contra HumanIDs almacenados
3. **Vista Previa de Contenidos**: Usa el endpoint `/preview` para examinar metadatos del HumanID
4. **Integración de Código QR**: Usa `/encrypt-qr-code` para generación de HumanID QR

---

## Requisitos Técnicos

-   **Autenticación**: Token de API válido requerido
-   **Formato de Imagen**: Imágenes codificadas en Base64
-   **Soporte de Plataforma**: Escritorio, iOS, Android
-   **Detección de Vitalidad**: Opcional pero recomendada para seguridad
-   **Protección con Contraseña**: Capa adicional de seguridad opcional

## Próximos Pasos

Explora los endpoints individuales para entender cómo implementar HumanAuthn en tu aplicación:

-   [Encriptar HumanID](/verifik-es/biometrics/humanID-encriptar)
-   [Encriptar HumanID Código QR](/verifik-es/biometrics/humanID-encriptar-codigo-qr)
-   [Desencriptar HumanID](/verifik-es/biometrics/humanID-desencriptar)
-   [Vista Previa HumanID](/verifik-es/biometrics/humanID-vista-previa)
