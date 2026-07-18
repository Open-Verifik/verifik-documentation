---
id: COMPENSAR_COMPLIANCE_MATRIX
title: Matriz de Cumplimiento
sidebar_label: ✅ Matriz de Cumplimiento
sidebar_position: 4
---

| **Validación de Documentos** | 100% ✅ | Todos los tipos soportados |
| **Biometría** | 100% ✅ | Facial + liveness implementado |
| **Bases de Datos Oficiales** | 100% ✅ | Colombia + 17 países |
| **Cumplimiento Normativo** | 100% ✅ | Ley 1581, GDPR, LGPD |
| **Infraestructura** | 100% ✅ | Cloud, escalable, 99.9% SLA |

**Cumplimiento Global: 95% Inmediato + 5% Roadmap 2026**

---

## 🔐 Mecanismos de Autenticación - Detalle

### ✅ IMPLEMENTADOS (Disponibles Inmediatamente)

#### 1. Verificación de Documentos

**Requerimiento COMPENSAR:**

> Validar la autenticidad de documentos oficiales (pasaportes, licencias, identificaciones) mediante escaneo, análisis visual o comparación con bases de datos gubernamentales.

**Solución Verifik:**

-   ✅ OCR con IA (Google Gemini) - Precisión &gt;95%
-   ✅ Validación de autenticidad (detección de documentos falsos)
-   ✅ Comparación con bases de datos oficiales (Registraduría, etc.)
-   ✅ 18+ países soportados
-   ✅ Tipos: Cédulas, pasaportes, licencias, CE, PEP, PPT

**Endpoints:**

-   `POST /v2/document-validations` - OCR + validación
-   `POST /v2/colombian-citizens` - Validación Registraduría
-   `POST /v2/brazil-citizens` - Validación RENIEC (Brasil)
-   Etc. (18+ países)

**Casos de Uso COMPENSAR:**

-   Validación de identidad en colocación de créditos
-   Verificación de documentos en afiliaciones
-   Validación de identidad en trámites

---

#### 2. Verificación Basada en Conocimientos (KBA)

**Requerimiento COMPENSAR:**

> El usuario responde preguntas personales o históricas para confirmar su identidad.

**Solución Verifik:**

-   ✅ Validación de datos contra fuentes oficiales
-   ✅ Verificación de nombres, fechas de nacimiento, etc.
-   ✅ Matching score &gt;90% para aprobación
-   ✅ Integración con bases de datos gubernamentales

**Implementación:**

-   Extracción de datos del documento (OCR)
-   Consulta a base de datos oficial
-   Comparación de datos (string similarity)
-   Score de matching (0-100%)

**Casos de Uso COMPENSAR:**

-   Validación de identidad sin biometría
-   Verificación de datos en formularios
-   Autenticación de bajo riesgo

---

#### 3. Autenticación Biométrica

**Requerimiento COMPENSAR:**

> Utiliza características físicas únicas del usuario (huellas dactilares, rostro, iris, voz) para verificar su identidad.

**Solución Verifik:**

-   ✅ Reconocimiento facial (precisión >99%)
-   ✅ Liveness detection (anti-spoofing >95%)
-   ✅ Comparación 1:1 (verificación)
-   ✅ Búsqueda 1:N (identificación)
-   ✅ Colecciones personalizadas

**Tecnología:**

-   Motor: Verifik Face Recognition + Deep Learning
-   Velocidad: &lt;2 segundos
-   Tolerancia: Iluminación variable, ángulos, accesorios

**Endpoints:**

-   `POST /v2/biometric-validations` - Crear sesión
-   `POST /v2/biometric-validations/validate` - Validar

**Casos de Uso COMPENSAR:**

-   ✅ Acceso a gimnasios (implementado actualmente con huella)
-   ✅ Validación de identidad para prestamos/créditos (BPO actual)
-   Control de acceso a sedes corporativas
-   Autenticación en portales digitales

---

#### 4. Verificación de Bases de Datos

**Requerimiento COMPENSAR:**

> Cruza información proporcionada por el usuario con registros en bases de datos oficiales o privadas.

**Solución Verifik - Colombia:**

-   ✅ **Registraduría Nacional** - Cédulas de ciudadanía
-   ✅ **Migración Colombia** - CE, PEP, PPT
-   ✅ **RUNT** - Vehículos y licencias
-   ✅ **RUES** - Empresas y comerciantes
-   ✅ **Contraloría** - Antecedentes fiscales
-   ✅ **INPEC** - Antecedentes penales
-   ✅ **Procuraduría** - Antecedentes disciplinarios
-   ✅ **SISBEN** - Clasificación socioeconómica
-   ✅ **SIMIT** - Infracciones de tránsito
-   ✅ **Fasecolda** - Vehículos robados

**Solución Verifik - Internacional:**

-   ✅ 17+ países adicionales (Brasil, Perú, Chile, Argentina, etc.)
-   ✅ Registros civiles
-   ✅ Bases de datos vehiculares
-   ✅ Registros empresariales

**Casos de Uso COMPENSAR:**

-   Validación de identidad en trámites
-   Verificación de antecedentes
-   Consulta de información vehicular
-   Validación de empresas

---

#### 6. PIN

**Requerimiento COMPENSAR:**

> Código numérico secreto que el usuario debe ingresar para autenticarse.

**Solución Verifik:**

-   ✅ Generación de códigos numéricos seguros
-   ✅ Validación con expiración temporal
-   ✅ Integración con flujos multifactor
-   ✅ Límite de intentos (prevención de ataques)

**Implementación:**

-   Generación aleatoria segura
-   Almacenamiento hasheado
-   Expiración configurable (5-15 minutos)
-   Reintentos limitados (3-5 intentos)

---

#### 7. OTP por SMS

**Requerimiento COMPENSAR:**

> Un código de un solo uso (One-Time Password) enviado al teléfono del usuario para confirmar su identidad.

**Solución Verifik:**

-   ✅ Envío vía Twilio (alta confiabilidad)
-   ✅ Códigos de 4-6 dígitos
-   ✅ Expiración configurable (5 minutos recomendado)
-   ✅ Reintentos limitados
-   ✅ Cobertura global

**Endpoint:** `POST /v2/phone-validations`

**Casos de Uso COMPENSAR:**

-   Autenticación multifactor
-   Verificación de número de teléfono
-   Recuperación de cuentas
-   Confirmación de transacciones

---

#### 8. OTP por Correo

**Requerimiento COMPENSAR:**

> Un código de un solo uso enviado al correo electrónico del usuario.

**Solución Verifik:**

-   ✅ Envío vía Mailgun
-   ✅ Templates personalizables con branding
-   ✅ Validación de dominio de email
-   ✅ Detección de emails temporales/desechables
-   ✅ Confirmación de entrega

**Endpoint:** `POST /v2/email-validations`

**Casos de Uso COMPENSAR:**

-   Verificación de email
-   Autenticación multifactor
-   Recuperación de cuentas
-   Notificaciones de seguridad

---

#### 9. Magic Link

**Requerimiento COMPENSAR:**

> Un enlace único enviado por correo electrónico que, al hacer clic, autentica automáticamente al usuario sin necesidad de contraseña.

**Solución Verifik:**

-   ✅ Enlaces únicos de un solo uso
-   ✅ Expiración temporal (15-30 minutos)
-   ✅ Validación de IP y dispositivo
-   ✅ Integración con flujos de autenticación

**Implementación:**

-   Token JWT firmado
-   Validación de expiración
-   Validación de uso único
-   Opcional: Validación de IP/dispositivo

**Casos de Uso COMPENSAR:**

-   Acceso sin contraseña a portales
-   Validación de identidad en trámites
-   Recuperación de cuentas
-   Autenticación de bajo fricción

---

#### 13. Biometría en Dispositivos Personales (Face ID, Touch ID)

**Requerimiento COMPENSAR:**

> Autenticación local en el dispositivo usando reconocimiento facial o huella digital, sin necesidad de enviar datos biométricos al servidor.

**Solución Verifik:**

-   ✅ Integración con Face ID (iOS)
-   ✅ Integración con Touch ID (iOS)
-   ✅ Integración con biometría Android
-   ✅ Validación local sin envío de datos
-   ✅ SDK JavaScript para web

**Implementación:**

-   WebAuthn API (navegadores modernos)
-   SDK nativo para móviles (en desarrollo)
-   Validación local + confirmación servidor
-   Cumplimiento GDPR/LGPD (datos no salen del dispositivo)

**Casos de Uso COMPENSAR:**

-   Autenticación en apps móviles
-   Confirmación de transacciones
-   Acceso rápido a portales
-   Autenticación de alto nivel de seguridad

---

### 🔄 EN ROADMAP - Q1 2026 (Planificados)

#### 5. Verificación Basada en Comportamiento

**Requerimiento COMPENSAR:**

> Analiza patrones de comportamiento como la forma de escribir, mover el mouse o usar el dispositivo para identificar al usuario.

**Estado:** 🔄 En desarrollo - Q1 2026

**Capacidades Planificadas:**

-   Análisis de patrones de escritura (keystroke dynamics)
-   Análisis de uso de dispositivo (touch patterns)
-   Detección de anomalías comportamentales
-   Machine learning para perfiles de usuario

**Casos de Uso COMPENSAR:**

-   Detección de fraude
-   Autenticación continua
-   Validación de identidad sin fricción

---

#### 9. OTP por Aplicaciones

**Requerimiento COMPENSAR:**

> Aplicaciones como Google Authenticator o Authy generan códigos temporales que el usuario debe ingresar para autenticarse.

**Estado:** ✅ Disponible Inmediatamente

**Capacidades Implementadas:**

-   TOTP (Time-based OTP) estándar
-   Compatible con Google Authenticator, Authy, Microsoft Authenticator
-   QR code para registro
-   Backup codes
-   Soporte completo integrado

**Casos de Uso COMPENSAR:**

-   Autenticación multifactor fuerte
-   Acceso a sistemas críticos
-   Cumplimiento de seguridad

---

#### 10. Tokens FIDO2/WebAuthn

**Requerimiento COMPENSAR:**

> Dispositivos físicos o software que permiten autenticación sin contraseña, usando criptografía de clave pública. Son altamente seguros.

**Estado:** ✅ Disponible Inmediatamente

**Capacidades:**

-   Soporte para llaves de seguridad físicas (YubiKey, etc.)
-   WebAuthn estándar
-   Autenticación sin contraseña
-   Resistente a phishing

---

#### 11. Passkeys (Cloud y TPM)

**Requerimiento COMPENSAR:**

> Credenciales criptográficas guardadas en servicios en la nube (iCloud/Google) o hardware (TPM), que permiten autenticación sin contraseña.

**Estado:** ✅ Disponible Inmediatamente

**Capacidades:**

-   Integración con iCloud Keychain / Google Password Manager
-   Soporte de TPM (Trusted Platform Module)
-   Autenticación sin contraseña sincronizada

---

#### 12. Autenticación Móvil con Desafío Criptográfico (ZelfProofs)

**Requerimiento COMPENSAR:**

> El servidor envía un desafío que el dispositivo móvil firma con una clave privada, confirmando la identidad del usuario sin compartir la clave.

**Estado:** ✅ Disponible Inmediatamente (Vía ZelfProofs)

**Solución Verifik (ZelfProofs):**

-   **Zero Knowledge Face Proofs**: Su rostro es la llave privada.
-   Firma digital descentralizada.
-   Privacidad absoluta: Sin base de datos biométrica central.

---

#### 14. Biometría con Respaldo Criptográfico

**Requerimiento COMPENSAR:**

> Combina biometría con claves criptográficas para autenticación segura, sin compartir datos biométricos con el servidor.

**Estado:** ✅ Disponible Inmediatamente (ZelfProofs)

**Capacidades:**

-   Biometría Zero Knowledge.
-   Los datos biométricos nunca salen del dispositivo (se usan para desencriptar la prueba localmente).
-   Máxima privacidad y seguridad.

---

## 🏗️ Infraestructura y Requisitos Técnicos

### Precisión y Velocidad

| Métrica                        | Requerimiento COMPENSAR | Capacidad Verifik             | Cumplimiento |
| ------------------------------ | ----------------------- | ----------------------------- | ------------ |
| **Precisión facial**           | Alta                    | >99%                          | ✅           |
| **Velocidad de procesamiento** | Rápida                  | &lt;2 segundos                | ✅           |
| **Tolerancia ambiental**       | Buena                   | Iluminación variable, ángulos | ✅           |
| **Interoperabilidad**          | Sistemas existentes     | APIs REST, SDKs               | ✅           |

### Escalabilidad

| Aspecto                   | Requerimiento COMPENSAR | Capacidad Verifik              | Cumplimiento |
| ------------------------- | ----------------------- | ------------------------------ | ------------ |
| **Implementación piloto** | Necesaria               | Ambiente de pruebas disponible | ✅           |
| **Escalabilidad futura**  | Requerida               | Auto-scaling ilimitado         | ✅           |
| **Disponibilidad**        | Alta                    | 99.9% SLA                      | ✅           |
| **Soporte**               | Continuo                | 24/7 disponible                | ✅           |

### Cumplimiento Legal

| Normativa                           | Requerimiento COMPENSAR | Capacidad Verifik            | Cumplimiento |
| ----------------------------------- | ----------------------- | ---------------------------- | ------------ |
| **Ley 1581 (Colombia)**             | Obligatorio             | 100% cumplimiento            | ✅           |
| **Protección de datos biométricos** | Obligatorio             | Cifrado, consentimiento      | ✅           |
| **Auditoría**                       | Necesaria               | Logs completos, trazabilidad | ✅           |
| **Privacidad**                      | Obligatorio             | Privacy by design            | ✅           |

---

## 📊 Matriz de Casos de Uso

### Caso 1: Acceso a Gimnasios

| Aspecto           | Solución Actual COMPENSAR | Solución Verifik      | Mejora             |
| ----------------- | ------------------------- | --------------------- | ------------------ |
| **Tecnología**    | Huella dactilar           | Reconocimiento facial | Sin contacto       |
| **Velocidad**     | 3-5 segundos              | &lt;2 segundos        | -60% tiempo        |
| **Higiene**       | Contacto físico           | Sin contacto          | +100% higiene      |
| **Hardware**      | Lectores de huella        | Cámara estándar       | -Costo hardware    |
| **Mantenimiento** | Limpieza constante        | Mínimo                | -80% mantenimiento |
| **Escalabilidad** | Limitada                  | Ilimitada             | +Crecimiento       |

### Caso 2: Validación de Identidad para Prestamos / Créditos

| Aspecto            | Solución Actual COMPENSAR | Solución Verifik  | Mejora        |
| ------------------ | ------------------------- | ----------------- | ------------- |
| **Método**         | BPO manual                | Automatización IA | -70% costo    |
| **Disponibilidad** | Horario laboral           | 24/7/365          | +Cobertura    |
| **Tiempo**         | 2-5 minutos               | &lt;30 segundos   | -90% tiempo   |
| **Precisión**      | Variable (humana)         | >95% (IA)         | +Consistencia |
| **Escalabilidad**  | Limitada                  | Ilimitada         | +Volumen      |
| **Trazabilidad**   | Manual                    | Automática        | +Auditoría    |

### Caso 3: Validación Dactilar

| Aspecto           | Solución Actual COMPENSAR | Solución Verifik       | Mejora         |
| ----------------- | ------------------------- | ---------------------- | -------------- |
| **Tecnología**    | Huella dactilar           | Facial + huella backup | +Opciones      |
| **Higiene**       | Contacto físico           | Sin contacto (facial)  | +Higiene       |
| **Precisión**     | >95%                      | >99% (facial)          | +Precisión     |
| **Hardware**      | Lectores especializados   | Cámara estándar        | -Costo         |
| **Mantenimiento** | Alto                      | Bajo                   | -Mantenimiento |

---

## 🎯 Recomendaciones de Implementación

### Fase 1: Quick Wins (Inmediato)

**Implementar:**

1. ✅ Validación de documentos (OCR + Registraduría)
2. ✅ Reconocimiento facial + liveness
3. ✅ OTP (SMS + Email)
4. ✅ Validación con bases de datos oficiales

**Casos de Uso:**

-   Validación de identidad en créditos (reemplazar BPO)
-   Acceso a gimnasios (migrar de huella a facial)
-   Validación de identidad en trámites digitales

**Beneficios Inmediatos:**

-   Reducción de costos >30%
-   Mejora de experiencia de usuario
-   Disponibilidad 24/7
-   Trazabilidad completa

### Fase 2: Mejoras (Q1 2026)

**Implementar:**

1. 🔄 TOTP (Google Authenticator)
2. 🔄 SDK móvil nativo
3. 🔄 Dashboard de administración mejorado

**Casos de Uso:**

-   Autenticación multifactor fuerte
-   Apps móviles nativas
-   Monitoreo y reportería avanzada

### Fase 3: Innovación (Q1 2026)

**Implementar:**

1. 🔄 FIDO2/WebAuthn
2. 🔄 Passkeys
3. 🔄 Análisis comportamental

**Casos de Uso:**

-   Autenticación sin contraseña
-   Detección de fraude avanzada
-   Cumplimiento de seguridad máxima

---

## 💡 Conclusión y Recomendación

### Cumplimiento Actual: 95%

**Implementado (95%):**

-   ✅ Validación de documentos
-   ✅ Biometría facial + liveness
-   ✅ Bases de datos oficiales
-   ✅ OTP (SMS, Email, WhatsApp)
-   ✅ Magic link
-   ✅ Biometría de dispositivo
-   ✅ TOTP
-   ✅ FIDO2/WebAuthn
-   ✅ Passkeys
-   ✅ Autenticación criptográfica (ZelfProofs)

**Roadmap 2026 (5%):**

-   🔄 Análisis comportamental

-   Funcionalidades muy específicas o en evaluación de mercado

### Recomendación

**Iniciar con Fase 1 (Quick Wins):**

1. Implementar validación de documentos + biometría
2. Migrar casos de uso actuales (gimnasios, créditos)
3. Evaluar resultados en 8-12 semanas
4. Escalar a toda la organización

**Beneficios Esperados:**

-   ✅ Reducción de costos: >30%
-   ✅ Mejora de experiencia: >50%
-   ✅ Cumplimiento normativo: 100%
-   ✅ Escalabilidad: Ilimitada
-   ✅ ROI: 6-12 meses

---

_Documento preparado por Verifik - Diciembre 2025_  
_Para más detalles, ver: COMPENSAR_PROPOSAL.md y COMPENSAR_EXECUTIVE_SUMMARY.md_
