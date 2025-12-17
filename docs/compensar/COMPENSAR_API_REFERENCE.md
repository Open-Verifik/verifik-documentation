---
id: COMPENSAR_API_REFERENCE
title: Referencia de APIs
sidebar_label: 🔌 APIs
sidebar_position: 5
---


---

## 🔑 Autenticación

Todas las APIs requieren autenticación mediante **API Key** o **JWT Token**.

### Headers Requeridos

```http
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json
```

### Obtener API Key

Contactar a: soporte@verifik.co

---

## 📋 APIs por Caso de Uso COMPENSAR

### 🏋️ Caso 1: Acceso a Gimnasios

#### Flujo Completo

```
1. Registro Inicial → Document Validation + Biometric Validation
2. Acceso Diario → Biometric Validation (búsqueda 1:N)
```

#### APIs Necesarias

| API                      | Endpoint                               | Uso                                          |
| ------------------------ | -------------------------------------- | -------------------------------------------- |
| **Document Validation**  | `POST /document-validations`           | Registro inicial - validar documento         |
| **Citizen Lookup**       | `POST /colombian-citizens`             | Registro inicial - validar con Registraduría |
| **Biometric Validation** | `POST /biometric-validations`          | Registro inicial - crear sesión liveness     |
| **Biometric Validation** | `POST /biometric-validations/validate` | Acceso diario - reconocimiento facial        |

---

### 💳 Caso 2: Validación de Identidad en Créditos

#### Flujo Completo

```
1. Captura de Documento → Document Validation
2. Validación Oficial → Citizen Lookup
3. Captura Biométrica → Biometric Validation
4. Decisión Automática → Webhook
```

#### APIs Necesarias

| API                      | Endpoint                      | Uso                          |
| ------------------------ | ----------------------------- | ---------------------------- |
| **Document Validation**  | `POST /document-validations`  | OCR + extracción de datos    |
| **Citizen Lookup**       | `POST /colombian-citizens`    | Validación con Registraduría |
| **Biometric Validation** | `POST /biometric-validations` | Liveness + facial match      |
| **Webhooks**             | `POST /webhooks`              | Configurar notificaciones    |

---

### 🏢 Caso 3: Control de Acceso a Sedes

#### Flujo Completo

```
1. Registro de Empleado → Document + Biometric + Email/Phone
2. Acceso Diario → Biometric Validation
3. Registro de Asistencia → Webhook
```

#### APIs Necesarias

| API                      | Endpoint                      | Uso                           |
| ------------------------ | ----------------------------- | ----------------------------- |
| **Document Validation**  | `POST /document-validations`  | Validar documento de empleado |
| **Biometric Validation** | `POST /biometric-validations` | Registro facial + acceso      |
| **Email Validation**     | `POST /email-validations`     | Validar email corporativo     |
| **Phone Validation**     | `POST /phone-validations`     | Validar teléfono              |

---

### 📱 Caso 4: Trámites Digitales

#### Flujo Completo

```
1. Validación de Documento → Document Validation
2. Validación de Email → Email Validation (OTP)
3. Validación de Teléfono → Phone Validation (OTP)
4. Validación Biométrica → Biometric Validation
```

#### APIs Necesarias

| API                      | Endpoint                      | Uso                            |
| ------------------------ | ----------------------------- | ------------------------------ |
| **Document Validation**  | `POST /document-validations`  | Validar documento              |
| **Email Validation**     | `POST /email-validations`     | Enviar y validar OTP por email |
| **Phone Validation**     | `POST /phone-validations`     | Enviar y validar OTP por SMS   |
| **WhatsApp Validation**  | `POST /whatsapp/send-otp`     | Enviar OTP por WhatsApp        |
| **Biometric Validation** | `POST /biometric-validations` | Validación facial              |

---

## 🔐 APIs de Validación de Documentos

### 1. Document Validation (OCR + Validación)

**Endpoint:** `POST /document-validations`  
**Documentación:** https://docs.verifik.co/api/document-validations

**Descripción:**  
Extrae datos de documentos de identidad usando OCR con IA (Google Gemini) y valida su autenticidad.

**Request:**

```json
{
	"image": "base64_encoded_image",
	"backImage": "base64_encoded_image_back",
	"country": "CO",
	"documentType": "CC",
	"inputMethod": "SCAN"
}
```

**Response:**

```json
{
	"status": "ACTIVE",
	"documentType": "CC",
	"documentNumber": "1058843805",
	"OCRExtraction": {
		"fullName": "JUAN PEREZ GOMEZ",
		"firstName": "JUAN",
		"lastName": "PEREZ GOMEZ",
		"dateOfBirth": "1990-01-15",
		"expirationDate": "2030-01-15",
		"documentNumber": "1058843805"
	},
	"imageValidated": false,
	"namesMatch": false
}
```

**Características:**

-   ✅ OCR con IA (precisión >95%)
-   ✅ Soporte para 18+ países
-   ✅ Detección de documentos falsos
-   ✅ Extracción de datos estructurados

**Países Soportados:**

-   🇨🇴 Colombia (CC, CE, PEP, PPT)
-   🇧🇷 Brasil (CPF)
-   🇵🇪 Perú (DNI)
-   🇦🇷 Argentina (DNI)
-   🇨🇱 Chile (RUN)
-   🇲🇽 México (CURP)
-   Y 12+ países más

---

### 2. Document Validation - Name Validation

**Endpoint:** `POST /document-validations/:id/name-validation`  
**Documentación:** https://docs.verifik.co/api/document-validations/name-validation

**Descripción:**  
Valida los datos extraídos del documento contra fuentes oficiales (Registraduría, etc.).

**Request:**

```json
{
	"force": false
}
```

**Response:**

```json
{
	"documentType": "CC",
	"documentNumber": "1058843805",
	"imageValidated": true,
	"namesMatch": true,
	"fullNameMatchPercentage": 95,
	"firstNameMatchPercentage": 100,
	"lastNameMatchPercentage": 92,
	"scoreValidation": {
		"fullName": "JUAN PEREZ GOMEZ",
		"firstName": "JUAN",
		"lastName": "PEREZ GOMEZ",
		"dateOfBirth": "1990-01-15",
		"validatedAt": "2024-12-16T13:00:00Z"
	}
}
```

**Características:**

-   ✅ Validación con fuentes oficiales
-   ✅ Matching score de nombres
-   ✅ Detección de discrepancias
-   ✅ Trazabilidad completa

---

## 👤 APIs de Validación de Identidad (Bases de Datos Oficiales)

### 3. Colombian Citizens (Registraduría)

**Endpoint:** `POST /colombian-citizens`  
**Documentación:** https://docs.verifik.co/api/colombian-citizens

**Descripción:**  
Consulta la base de datos de la Registraduría Nacional de Colombia para validar cédulas de ciudadanía.

**Request:**

```json
{
	"documentType": "CC",
	"documentNumber": "1058843805"
}
```

**Response:**

```json
{
	"fullName": "JUAN PEREZ GOMEZ",
	"firstName": "JUAN",
	"lastName": "PEREZ GOMEZ",
	"documentType": "CC",
	"documentNumber": "1058843805",
	"dateOfBirth": "1990-01-15",
	"placeOfBirth": "BOGOTA",
	"validated": true,
	"source": "REGISTRADURIA_NACIONAL"
}
```

**Características:**

-   ✅ Consulta directa a Registraduría
-   ✅ Datos oficiales verificados
-   ✅ Tiempo de respuesta: 2-5 segundos
-   ✅ Disponibilidad: 99.5%

---

### 4. Colombian Foreigners (Migración Colombia)

**Endpoints:**

-   `POST /colombian-citizens/ce` - Cédula de Extranjería
-   `POST /colombian-citizens/pep` - Permiso Especial de Permanencia
-   `POST /colombian-citizens/ppt` - Permiso por Protección Temporal

**Documentación:** https://docs.verifik.co/api/colombian-citizens/foreigners

**Request (CE):**

```json
{
	"documentType": "CE",
	"documentNumber": "123456789",
	"expirationDate": "2025-12-31"
}
```

**Response:**

```json
{
	"fullName": "MARIA RODRIGUEZ",
	"firstName": "MARIA",
	"lastName": "RODRIGUEZ",
	"documentType": "CE",
	"documentNumber": "123456789",
	"expirationDate": "2025-12-31",
	"nationality": "VENEZUELA",
	"validated": true,
	"source": "MIGRACION_COLOMBIA"
}
```

---

### 5. Other Countries Citizens

**Endpoints:**

-   `POST /brazil-citizens` - Brasil (CPF)
-   `POST /peruvian-citizens` - Perú (DNI)
-   `POST /chilean-citizens` - Chile (RUN)
-   `POST /argentina-citizens` - Argentina (DNI)
-   `POST /mexican-citizens` - México (CURP)
-   `POST /ecuadorian-citizens` - Ecuador (CC)
-   `POST /panama-citizens` - Panamá (CC)
-   Y 11+ países más

**Documentación:** https://docs.verifik.co/api/citizen-lookups

**Request (Generic):**

```json
{
	"documentType": "DNI",
	"documentNumber": "12345678",
	"dateOfBirth": "1990-01-15"
}
```

---

## 🎭 APIs de Validación Biométrica

### 6. Biometric Validation - Create Session

**Endpoint:** `POST /biometric-validations`  
**Documentación:** https://docs.verifik.co/api/biometric-validations

**Descripción:**  
Crea una sesión de validación biométrica con liveness detection.

**Request:**

```json
{
	"type": "login",
	"identifier": "user@example.com",
	"project": "PROJECT_ID",
	"projectFlow": "PROJECT_FLOW_ID"
}
```

**Response:**

```json
{
	"livenessSession": {
		"_id": "SESSION_ID",
		"identifier": "user@example.com",
		"status": "active",
		"expiresAt": "2024-12-16T13:04:00Z"
	},
	"biometricValidation": {
		"_id": "VALIDATION_ID",
		"status": "new",
		"type": "login",
		"url": "https://access.verifik.co/stand-alone/PROJECT_ID?type=liveness"
	},
	"token": "JWT_TOKEN"
}
```

**Características:**

-   ✅ Liveness detection integrado
-   ✅ Sesión con expiración (4 minutos)
-   ✅ URL para captura de selfie
-   ✅ Token JWT para autenticación

---

### 7. Biometric Validation - Validate

**Endpoint:** `POST /biometric-validations/validate`  
**Documentación:** https://docs.verifik.co/api/biometric-validations/validate

**Descripción:**  
Valida una imagen facial contra una colección (1:1 o 1:N) con liveness detection.

**Request:**

```json
{
	"image": "base64_encoded_selfie",
	"livenessMinScore": 0.6,
	"searchMinScore": 0.85,
	"searchMode": "ACCURATE"
}
```

**Response:**

```json
{
	"status": "validated",
	"livenessScore": 0.85,
	"person": {
		"id": "PERSON_ID",
		"name": "JUAN PEREZ",
		"email": "juan@example.com",
		"similarity": 0.92
	},
	"liveness": {
		"score": 0.85,
		"isLive": true,
		"antiSpoofing": true
	}
}
```

**Características:**

-   ✅ Liveness detection (anti-spoofing)
-   ✅ Reconocimiento facial 1:1 o 1:N
-   ✅ Precisión &gt;99%
-   ✅ Tiempo de respuesta &lt;2 segundos

**Configuración de Scores:**

-   **livenessMinScore:** 0.55-0.7 (recomendado: 0.6)
-   **searchMinScore:** 0.8-0.95 (recomendado: 0.85)
-   **searchMode:** "FAST" o "ACCURATE"

---

### 8. Face Verification (1:1)

**Endpoint:** `POST /face-verification`  
**Documentación:** https://docs.verifik.co/api/face-verification

**Descripción:**  
Compara dos imágenes faciales para verificar si pertenecen a la misma persona.

**Request:**

```json
{
	"image1": "base64_encoded_image_1",
	"image2": "base64_encoded_image_2",
	"minScore": 0.85
}
```

**Response:**

```json
{
	"match": true,
	"similarity": 0.92,
	"confidence": "high",
	"liveness": {
		"image1": 0.87,
		"image2": 0.91
	}
}
```

**Casos de Uso:**

-   Comparar selfie con foto del documento
-   Validar identidad sin colección
-   Verificación rápida 1:1

---

## 📧 APIs de Validación de Email

### 9. Email Validation - Send OTP

**Endpoint:** `POST /email-validations`  
**Documentación:** https://docs.verifik.co/api/email-validations

**Descripción:**  
Envía un código OTP al email del usuario para validación.

**Request:**

```json
{
	"email": "user@example.com",
	"language": "es",
	"projectName": "COMPENSAR"
}
```

**Response:**

```json
{
	"_id": "VALIDATION_ID",
	"email": "user@example.com",
	"status": "pending",
	"otpSent": true,
	"expiresAt": "2024-12-16T13:05:00Z"
}
```

**Características:**

-   ✅ Templates personalizables con branding
-   ✅ Códigos de 6 dígitos
-   ✅ Expiración configurable (5 minutos)
-   ✅ Detección de emails temporales

---

### 10. Email Validation - Verify OTP

**Endpoint:** `POST /email-validations/:id/verify`  
**Documentación:** https://docs.verifik.co/api/email-validations/verify

**Request:**

```json
{
	"code": "123456"
}
```

**Response:**

```json
{
	"_id": "VALIDATION_ID",
	"email": "user@example.com",
	"status": "validated",
	"validated": true,
	"validatedAt": "2024-12-16T13:01:00Z"
}
```

---

## 📱 APIs de Validación de Teléfono

### 11. Phone Validation - Send OTP (SMS)

**Endpoint:** `POST /phone-validations`  
**Documentación:** https://docs.verifik.co/api/phone-validations

**Descripción:**  
Envía un código OTP por SMS al teléfono del usuario.

**Request:**

```json
{
	"phone": "+573001234567",
	"countryCode": "+57",
	"method": "SMS"
}
```

**Response:**

```json
{
	"_id": "VALIDATION_ID",
	"phone": "+573001234567",
	"status": "pending",
	"otpSent": true,
	"method": "SMS",
	"expiresAt": "2024-12-16T13:05:00Z"
}
```

**Características:**

-   ✅ Envío vía Twilio (alta confiabilidad)
-   ✅ Cobertura global
-   ✅ Códigos de 4-6 dígitos
-   ✅ Reintentos limitados

---

### 12. Phone Validation - Verify OTP

**Endpoint:** `POST /phone-validations/:id/verify`  
**Documentación:** https://docs.verifik.co/api/phone-validations/verify

**Request:**

```json
{
	"code": "1234"
}
```

**Response:**

```json
{
	"_id": "VALIDATION_ID",
	"phone": "+573001234567",
	"status": "validated",
	"validated": true,
	"validatedAt": "2024-12-16T13:01:00Z"
}
```

---

### 13. WhatsApp Validation - Send OTP

**Endpoint:** `POST /whatsapp/send-otp`  
**Documentación:** https://docs.verifik.co/api/whatsapp

**Descripción:**  
Envía un código OTP por WhatsApp Business API.

**Request:**

```json
{
	"phone": "+573001234567",
	"countryCode": "+57",
	"language": "es"
}
```

**Response:**

```json
{
	"_id": "VALIDATION_ID",
	"phone": "+573001234567",
	"status": "pending",
	"otpSent": true,
	"method": "WHATSAPP",
	"expiresAt": "2024-12-16T13:05:00Z"
}
```

**Ventajas vs SMS:**

-   ✅ Mayor tasa de entrega
-   ✅ Menor costo
-   ✅ Confirmación de lectura
-   ✅ Soporte multimedia

---

## 🚗 APIs de Validación de Vehículos (Colombia)

### 14. RUNT - Vehicle Lookup

**Endpoint:** `POST /runt`  
**Documentación:** https://docs.verifik.co/api/runt

**Descripción:**  
Consulta información de vehículos en el RUNT (Registro Único Nacional de Tránsito).

**Request:**

```json
{
	"plate": "ABC123"
}
```

**Response:**

```json
{
	"plate": "ABC123",
	"brand": "CHEVROLET",
	"model": "SPARK",
	"year": 2020,
	"color": "BLANCO",
	"owner": {
		"name": "JUAN PEREZ",
		"documentType": "CC",
		"documentNumber": "1058843805"
	},
	"status": "ACTIVE",
	"validated": true
}
```

---

### 15. Fasecolda - Stolen Vehicles

**Endpoint:** `POST /fasecolda`  
**Documentación:** https://docs.verifik.co/api/fasecolda

**Descripción:**  
Consulta si un vehículo está reportado como robado en Fasecolda.

**Request:**

```json
{
	"plate": "ABC123"
}
```

**Response:**

```json
{
	"plate": "ABC123",
	"stolen": false,
	"reportDate": null,
	"validated": true
}
```

---

## 🏢 APIs de Validación de Empresas (Colombia)

### 16. RUES - Company Lookup

**Endpoint:** `POST /rues`  
**Documentación:** https://docs.verifik.co/api/rues

**Descripción:**  
Consulta información de empresas en el RUES (Registro Único Empresarial y Social).

**Request:**

```json
{
	"nit": "900123456-1"
}
```

**Response:**

```json
{
	"nit": "900123456-1",
	"businessName": "EMPRESA EJEMPLO SAS",
	"legalRepresentative": "JUAN PEREZ",
	"status": "ACTIVE",
	"registrationDate": "2015-01-15",
	"economicActivity": "Servicios de consultoría",
	"validated": true
}
```

---

## 🔍 APIs de Antecedentes (Colombia)

### 17. Contraloría - Fiscal Background

**Endpoint:** `POST /contraloria`  
**Documentación:** https://docs.verifik.co/api/contraloria

**Request:**

```json
{
	"documentType": "CC",
	"documentNumber": "1058843805"
}
```

**Response:**

```json
{
	"fullName": "JUAN PEREZ GOMEZ",
	"documentNumber": "1058843805",
	"hasFiscalBackground": false,
	"validated": true
}
```

---

### 18. INPEC - Criminal Background

**Endpoint:** `POST /inpec`  
**Documentación:** https://docs.verifik.co/api/inpec

**Request:**

```json
{
	"documentType": "CC",
	"documentNumber": "1058843805"
}
```

**Response:**

```json
{
	"fullName": "JUAN PEREZ GOMEZ",
	"documentNumber": "1058843805",
	"hasCriminalBackground": false,
	"validated": true
}
```

---

### 19. Procuraduría - Disciplinary Background

**Endpoint:** `POST /procuraduria`  
**Documentación:** https://docs.verifik.co/api/procuraduria

**Request:**

```json
{
	"documentType": "CC",
	"documentNumber": "1058843805"
}
```

**Response:**

```json
{
	"fullName": "JUAN PEREZ GOMEZ",
	"documentNumber": "1058843805",
	"hasDisciplinaryBackground": false,
	"validated": true
}
```

---

## 🔔 Webhooks

### 20. Configure Webhook

**Endpoint:** `POST /webhooks`  
**Documentación:** https://docs.verifik.co/api/webhooks

**Descripción:**  
Configura webhooks para recibir notificaciones de eventos.

**Request:**

```json
{
	"url": "https://compensar.com/webhooks/verifik",
	"events": ["document_validation_created", "document_validation_completed", "biometric_validation_validated", "biometric_validation_failed"],
	"secret": "YOUR_WEBHOOK_SECRET"
}
```

**Response:**

```json
{
  "_id": "WEBHOOK_ID",
  "url": "https://compensar.com/webhooks/verifik",
  "events": [...],
  "status": "active"
}
```

**Eventos Disponibles:**

-   `document_validation_created`
-   `document_validation_completed`
-   `document_validation_source_lookup`
-   `biometric_validation_created`
-   `biometric_validation_validated`
-   `biometric_validation_failed`
-   `email_validation_completed`
-   `phone_validation_completed`

**Webhook Payload Example:**

```json
{
  "event": "biometric_validation_validated",
  "timestamp": "2024-12-16T13:00:00Z",
  "data": {
    "_id": "VALIDATION_ID",
    "status": "validated",
    "livenessScore": 0.85,
    "person": {...}
  },
  "signature": "HMAC_SHA256_SIGNATURE"
}
```

---

## 📊 Resumen de APIs por Categoría

### Validación de Documentos (2 APIs)

1. ✅ `POST /document-validations` - OCR + extracción
2. ✅ `POST /document-validations/:id/name-validation` - Validación oficial

### Validación de Identidad - Colombia (4 APIs)

3. ✅ `POST /colombian-citizens` - Registraduría (CC)
4. ✅ `POST /colombian-citizens/ce` - Migración (CE)
5. ✅ `POST /colombian-citizens/pep` - Migración (PEP)
6. ✅ `POST /colombian-citizens/ppt` - Migración (PPT)

### Validación de Identidad - Internacional (15+ APIs)

-   ✅ `POST /brazil-citizens` - Brasil
-   ✅ `POST /peruvian-citizens` - Perú
-   ✅ `POST /chilean-citizens` - Chile
-   ✅ `POST /argentina-citizens` - Argentina
-   ✅ Y 11+ países más

### Validación Biométrica (3 APIs)

7. ✅ `POST /biometric-validations` - Crear sesión
8. ✅ `POST /biometric-validations/validate` - Validar facial
9. ✅ `POST /face-verification` - Comparación 1:1

### Validación de Email (2 APIs)

10. ✅ `POST /email-validations` - Enviar OTP
11. ✅ `POST /email-validations/:id/verify` - Verificar OTP

### Validación de Teléfono (3 APIs)

12. ✅ `POST /phone-validations` - Enviar OTP (SMS)
13. ✅ `POST /phone-validations/:id/verify` - Verificar OTP
14. ✅ `POST /whatsapp/send-otp` - Enviar OTP (WhatsApp)

### Validación de Vehículos - Colombia (2 APIs)

15. ✅ `POST /runt` - Consulta RUNT
16. ✅ `POST /fasecolda` - Vehículos robados

### Validación de Empresas - Colombia (1 API)

17. ✅ `POST /rues` - Consulta RUES

### Antecedentes - Colombia (3 APIs)

18. ✅ `POST /contraloria` - Antecedentes fiscales
19. ✅ `POST /inpec` - Antecedentes penales
20. ✅ `POST /procuraduria` - Antecedentes disciplinarios

### Webhooks (1 API)

21. ✅ `POST /webhooks` - Configurar webhooks

**Total: 35+ APIs disponibles**

---

## 🔗 Links de Documentación Completa

### Documentación General

-   **Portal Principal:** https://docs.verifik.co
-   **API Reference:** https://docs.verifik.co/api
-   **Guías de Inicio:** https://docs.verifik.co/getting-started
-   **Ejemplos de Código:** https://docs.verifik.co/examples

### Documentación por Categoría

-   **Document Validation:** https://docs.verifik.co/api/document-validations
-   **Biometric Validation:** https://docs.verifik.co/api/biometric-validations
-   **Email Validation:** https://docs.verifik.co/api/email-validations
-   **Phone Validation:** https://docs.verifik.co/api/phone-validations
-   **Citizen Lookups:** https://docs.verifik.co/api/citizen-lookups
-   **Vehicle Lookups:** https://docs.verifik.co/api/vehicle-lookups
-   **Company Lookups:** https://docs.verifik.co/api/company-lookups
-   **Background Checks:** https://docs.verifik.co/api/background-checks
-   **Webhooks:** https://docs.verifik.co/api/webhooks

### SDKs y Herramientas

-   **JavaScript SDK:** https://docs.verifik.co/sdk/javascript
-   **Postman Collection:** https://docs.verifik.co/tools/postman
-   **OpenAPI Spec:** https://docs.verifik.co/openapi.json

---

## 💻 Ejemplos de Código

### JavaScript (Node.js)

```javascript
const axios = require("axios");

const API_KEY = "YOUR_API_KEY";
const BASE_URL = "https://verifik.co/v2";

// Ejemplo 1: Validar documento
async function validateDocument(image) {
	const response = await axios.post(
		`${BASE_URL}/document-validations`,
		{
			image: image,
			country: "CO",
			documentType: "CC",
			inputMethod: "SCAN",
		},
		{
			headers: {
				Authorization: `Bearer ${API_KEY}`,
				"Content-Type": "application/json",
			},
		}
	);
	return response.data;
}

// Ejemplo 2: Validar con Registraduría
async function validateCitizen(documentNumber) {
	const response = await axios.post(
		`${BASE_URL}/colombian-citizens`,
		{
			documentType: "CC",
			documentNumber: documentNumber,
		},
		{
			headers: {
				Authorization: `Bearer ${API_KEY}`,
				"Content-Type": "application/json",
			},
		}
	);
	return response.data;
}

// Ejemplo 3: Validación biométrica
async function validateBiometric(image) {
	const response = await axios.post(
		`${BASE_URL}/biometric-validations/validate`,
		{
			image: image,
			livenessMinScore: 0.6,
			searchMinScore: 0.85,
			searchMode: "ACCURATE",
		},
		{
			headers: {
				Authorization: `Bearer ${API_KEY}`,
				"Content-Type": "application/json",
			},
		}
	);
	return response.data;
}

// Ejemplo 4: Enviar OTP por email
async function sendEmailOTP(email) {
	const response = await axios.post(
		`${BASE_URL}/email-validations`,
		{
			email: email,
			language: "es",
			projectName: "COMPENSAR",
		},
		{
			headers: {
				Authorization: `Bearer ${API_KEY}`,
				"Content-Type": "application/json",
			},
		}
	);
	return response.data;
}
```

### Python

```python
import requests
import base64

API_KEY = 'YOUR_API_KEY'
BASE_URL = 'https://verifik.co/v2'

headers = {
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
}

# Ejemplo 1: Validar documento
def validate_document(image_path):
    with open(image_path, 'rb') as image_file:
        image_base64 = base64.b64encode(image_file.read()).decode('utf-8')

    response = requests.post(
        f'{BASE_URL}/document-validations',
        json={
            'image': image_base64,
            'country': 'CO',
            'documentType': 'CC',
            'inputMethod': 'SCAN'
        },
        headers=headers
    )
    return response.json()

# Ejemplo 2: Validar ciudadano
def validate_citizen(document_number):
    response = requests.post(
        f'{BASE_URL}/colombian-citizens',
        json={
            'documentType': 'CC',
            'documentNumber': document_number
        },
        headers=headers
    )
    return response.json()

# Ejemplo 3: Enviar OTP por SMS
def send_sms_otp(phone):
    response = requests.post(
        f'{BASE_URL}/phone-validations',
        json={
            'phone': phone,
            'countryCode': '+57',
            'method': 'SMS'
        },
        headers=headers
    )
    return response.json()
```

### cURL

```bash
# Ejemplo 1: Validar documento
curl -X POST https://verifik.co/v2/document-validations \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "image": "BASE64_IMAGE",
    "country": "CO",
    "documentType": "CC",
    "inputMethod": "SCAN"
  }'

# Ejemplo 2: Validar ciudadano
curl -X POST https://verifik.co/v2/colombian-citizens \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "documentType": "CC",
    "documentNumber": "1058843805"
  }'

# Ejemplo 3: Validación biométrica
curl -X POST https://verifik.co/v2/biometric-validations/validate \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "image": "BASE64_SELFIE",
    "livenessMinScore": 0.6,
    "searchMinScore": 0.85,
    "searchMode": "ACCURATE"
  }'
```

---

## 🚨 Manejo de Errores

### Códigos de Estado HTTP

| Código | Significado           | Acción                                |
| ------ | --------------------- | ------------------------------------- |
| 200    | OK                    | Solicitud exitosa                     |
| 201    | Created               | Recurso creado exitosamente           |
| 400    | Bad Request           | Verificar parámetros de la solicitud  |
| 401    | Unauthorized          | Verificar API Key                     |
| 404    | Not Found             | Recurso no encontrado                 |
| 409    | Conflict              | Conflicto (ej: documento ya validado) |
| 429    | Too Many Requests     | Rate limit excedido                   |
| 500    | Internal Server Error | Error del servidor                    |

### Formato de Error

```json
{
	"error": true,
	"statusCode": 400,
	"message": "document_number_required",
	"details": {
		"field": "documentNumber",
		"reason": "Field is required"
	}
}
```

---

## 📈 Rate Limits

| Plan             | Requests/Minuto | Requests/Día |
| ---------------- | --------------- | ------------ |
| **Starter**      | 60              | 10,000       |
| **Professional** | 300             | 100,000      |
| **Enterprise**   | Ilimitado       | Ilimitado    |

**Headers de Rate Limit:**

```
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 45
X-RateLimit-Reset: 1702742400
```

---

## 🔒 Seguridad

### Best Practices

1. **Nunca exponer API Keys en frontend**

    - Usar proxy backend
    - Variables de entorno

2. **Validar webhooks con HMAC**

    ```javascript
    const crypto = require("crypto");

    function validateWebhook(payload, signature, secret) {
    	const hmac = crypto.createHmac("sha256", secret);
    	const digest = hmac.update(JSON.stringify(payload)).digest("hex");
    	return digest === signature;
    }
    ```

3. **Usar HTTPS siempre**

    - Todas las APIs requieren HTTPS
    - Certificados TLS 1.3

4. **Implementar retry logic**
    - Exponential backoff
    - Máximo 3 reintentos

---

## 📞 Soporte

### Contacto Técnico

-   **Email:** soporte@verifik.co
-   **Documentación:** https://docs.verifik.co
-   **Status Page:** https://status.verifik.co

### Horarios de Soporte

-   **Estándar:** Lunes a Viernes 8am-6pm COT
-   **Premium:** Lunes a Viernes 7am-10pm COT
-   **Enterprise:** 24/7/365

---

_Documento preparado por Verifik - Diciembre 2024_  
_Versión 1.0_
