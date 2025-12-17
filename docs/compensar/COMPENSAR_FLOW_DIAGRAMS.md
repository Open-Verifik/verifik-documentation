---
id: COMPENSAR_FLOW_DIAGRAMS
title: Diagramas de Flujo
sidebar_label: 📊 Diagramas
sidebar_position: 6
---

## 🏋️ Caso 1: Acceso a Gimnasios

### Flujo de Registro Inicial

```mermaid
sequenceDiagram
    participant U as Usuario
    participant A as App COMPENSAR
    participant V as Verifik API
    participant R as Registraduría
    participant DB as Base de Datos

    U->>A: Llega al gimnasio por primera vez
    A->>U: Solicita documento de identidad
    U->>A: Toma foto de cédula

    A->>V: POST /document-validations
    V->>V: OCR con IA (extrae datos)
    V-->>A: Datos extraídos

    A->>V: POST /colombian-citizens
    V->>R: Consulta Registraduría
    R-->>V: Datos oficiales
    V->>V: Valida matching (>90%)
    V-->>A: Validación exitosa

    A->>U: Solicita selfie para liveness
    U->>A: Toma selfie

    A->>V: POST /biometric-validations
    V->>V: Liveness detection (score &gt;0.6)
    V->>V: Crea perfil facial
    V->>DB: Guarda en colección gimnasio
    V-->>A: Registro exitoso

    A->>U: ✅ Registro completado
```

**Diagrama Renderizado:**

![Flujo de Registro Inicial - Gimnasio](/img/compensar/gym_registration_flow_1765922181146.png)

### Flujo de Acceso Diario

```mermaid
sequenceDiagram
    participant U as Usuario
    participant K as Kiosco/Tablet
    participant V as Verifik API
    participant DB as Base de Datos
    participant T as Torniquete

    U->>K: Se acerca al punto de acceso
    K->>K: Captura facial automática

    K->>V: POST /biometric-validations/validate
    Note over V: Búsqueda 1:N en colección
    V->>DB: Busca en colección gimnasio
    DB-->>V: Coincidencias encontradas

    V->>V: Valida liveness (>0.6)
    V->>V: Valida similitud (>0.85)

    alt Usuario encontrado y validado
        V-->>K: ✅ Usuario: Juan Pérez (92% match)
        K->>DB: Registra asistencia
        K->>T: Abre torniquete
        K->>U: ✅ Acceso permitido
    else Usuario no encontrado
        V-->>K: ❌ Usuario no registrado
        K->>U: ❌ Debe registrarse primero
    else Liveness fallido
        V-->>K: ⚠️ Liveness score bajo
        K->>U: ⚠️ Intente de nuevo
    end
```

**Diagrama Renderizado:**

![Flujo de Acceso Diario - Gimnasio](/img/compensar/gym_daily_access_flow_1765922202412.png)

---

## 💳 Caso 2: Validación de Identidad en Créditos

### Flujo Completo de Validación

```mermaid
sequenceDiagram
    participant U as Usuario
    participant W as Portal Web
    participant V as Verifik API
    participant R as Registraduría
    participant WH as Webhook COMPENSAR
    participant S as Sistema Créditos

    U->>W: Solicita crédito
    W->>U: Solicita documento

    rect rgb(200, 220, 250)
        Note over U,R: Paso 1: Validación de Documento
        U->>W: Toma foto cédula (frente/reverso)
        W->>V: POST /document-validations
        V->>V: OCR con IA
        V-->>W: Datos extraídos

        W->>V: POST /document-validations/:id/name-validation
        V->>R: Consulta Registraduría
        R-->>V: Datos oficiales
        V->>V: Matching de nombres (>90%)
        V->>WH: Webhook: document_validation_completed
        V-->>W: ✅ Documento validado
    end

    rect rgb(200, 250, 220)
        Note over U,WH: Paso 2: Validación Biométrica
        W->>U: Solicita selfie
        U->>W: Toma selfie

        W->>V: POST /biometric-validations
        V->>V: Liveness detection
        V->>V: Compara con foto documento

        alt Validación exitosa
            V->>WH: Webhook: biometric_validation_validated
            V-->>W: ✅ Biometría validada (score: 0.87)
            W->>S: Aprobación automática
            S-->>U: ✅ Crédito aprobado
        else Validación fallida
            V->>WH: Webhook: biometric_validation_failed
            V-->>W: ❌ Validación fallida
            W->>S: Requiere revisión manual
            S-->>U: ⏳ En revisión
        end
    end
```

**Diagrama Renderizado:**

![Flujo Completo de Validación - Créditos](/img/compensar/credit_validation_flow_1765922230297.png)

### Comparación: BPO Actual vs Verifik Automatizado

```mermaid
graph TB
    subgraph "Solución Actual (BPO)"
        A1[Usuario envía documento] --> A2[Operador BPO recibe]
        A2 --> A3[Operador valida manualmente]
        A3 --> A4{¿Válido?}
        A4 -->|Sí| A5[Aprobación manual]
        A4 -->|No| A6[Rechazo manual]
        A5 --> A7[Tiempo: 2-5 min]
        A6 --> A7
        A7 --> A8[Costo: Alto]
        A8 --> A9[Disponibilidad: Horario laboral]
    end

    subgraph "Solución Verifik (Automatizada)"
        B1[Usuario envía documento] --> B2[OCR con IA]
        B2 --> B3[Validación Registraduría]
        B3 --> B4[Liveness + Facial]
        B4 --> B5{¿Válido?}
        B5 -->|Sí| B6[Aprobación automática]
        B5 -->|No| B7[Revisión manual solo si necesario]
        B6 --> B8[Tiempo: &lt;30 seg]
        B7 --> B8
        B8 --> B9[Costo: -70%]
        B9 --> B10[Disponibilidad: 24/7]
    end

    style A7 fill:#ffcccc
    style A8 fill:#ffcccc
    style A9 fill:#ffcccc
    style B8 fill:#ccffcc
    style B9 fill:#ccffcc
    style B10 fill:#ccffcc
```

---

## 🏢 Caso 3: Control de Acceso a Sedes

### Flujo de Registro de Empleado

```mermaid
flowchart TD
    Start([Nuevo Empleado]) --> A[Captura Documento]
    A --> B[POST /document-validations]
    B --> C{¿Documento válido?}

    C -->|No| D[❌ Rechazar]
    C -->|Sí| E[POST /colombian-citizens]

    E --> F{¿Validación oficial OK?}
    F -->|No| D
    F -->|Sí| G[POST /email-validations]

    G --> H[Envía OTP a email corporativo]
    H --> I{¿OTP verificado?}
    I -->|No| D
    I -->|Sí| J[POST /phone-validations]

    J --> K[Envía OTP a teléfono]
    K --> L{¿OTP verificado?}
    L -->|No| D
    L -->|Sí| M[POST /biometric-validations]

    M --> N[Captura facial + liveness]
    N --> O{¿Biometría OK?}
    O -->|No| D
    O -->|Sí| P[Asigna permisos de acceso]

    P --> Q[Guarda en colección empleados]
    Q --> End([✅ Empleado Registrado])

    style D fill:#ffcccc
    style End fill:#ccffcc
```

**Diagrama Renderizado:**

![Flujo de Registro de Empleado](/img/compensar/employee_registration_flow_1765922249997.png)

### Flujo de Acceso Diario a Sede

```mermaid
sequenceDiagram
    participant E as Empleado
    participant T as Torniquete
    participant V as Verifik API
    participant DB as Base de Datos
    participant S as Sistema COMPENSAR

    E->>T: Se acerca al torniquete
    T->>T: Captura facial

    T->>V: POST /biometric-validations/validate
    V->>DB: Búsqueda en colección empleados

    alt Empleado encontrado
        DB-->>V: Match encontrado (95%)
        V->>V: Valida liveness
        V->>V: Valida permisos

        alt Tiene permisos
            V-->>T: ✅ Acceso autorizado
            T->>S: Registra entrada (timestamp)
            T->>T: Abre torniquete
            T->>E: ✅ Bienvenido Juan Pérez
        else Sin permisos
            V-->>T: ❌ Sin permisos para esta área
            T->>S: Registra intento denegado
            T->>E: ❌ Acceso denegado
        end
    else Empleado no encontrado
        V-->>T: ❌ No registrado
        T->>S: Registra intento no autorizado
        T->>E: ❌ Contacte a RRHH
    end
```

**Diagrama Renderizado:**

![Flujo de Acceso Diario a Sede](/img/compensar/employee_daily_access_flow_1765922267739.png)

---

## 📱 Caso 4: Trámites Digitales

### Flujo de Validación Completa

```mermaid
flowchart LR
    Start([Usuario inicia trámite]) --> A[Validación Documento]

    subgraph "Validación de Documento"
        A --> A1[POST /document-validations]
        A1 --> A2[OCR + Extracción]
        A2 --> A3[POST /colombian-citizens]
        A3 --> A4{¿Válido?}
    end

    A4 -->|No| Reject[❌ Rechazar]
    A4 -->|Sí| B[Validación Email]

    subgraph "Validación de Email"
        B --> B1[POST /email-validations]
        B1 --> B2[Envía OTP]
        B2 --> B3[Usuario ingresa código]
        B3 --> B4{¿Correcto?}
    end

    B4 -->|No| Reject
    B4 -->|Sí| C[Validación Teléfono]

    subgraph "Validación de Teléfono"
        C --> C1[POST /phone-validations]
        C1 --> C2[Envía OTP SMS/WhatsApp]
        C2 --> C3[Usuario ingresa código]
        C3 --> C4{¿Correcto?}
    end

    C4 -->|No| Reject
    C4 -->|Sí| D[Validación Biométrica]

    subgraph "Validación Biométrica"
        D --> D1[POST /biometric-validations]
        D1 --> D2[Captura selfie]
        D2 --> D3[Liveness + Facial]
        D3 --> D4{¿Válido?}
    end

    D4 -->|No| Reject
    D4 -->|Sí| Success[✅ Trámite Aprobado]

    style Reject fill:#ffcccc
    style Success fill:#ccffcc
```

**Diagrama Renderizado:**

![Flujo de Trámites Digitales](/img/compensar/digital_procedures_flow_1765922290016.png)

---

## 🔄 Arquitectura del Sistema

### Vista de Alto Nivel

```mermaid
graph TB
    subgraph "COMPENSAR Frontend"
        WEB[Portal Web]
        MOBILE[App Móvil]
        KIOSK[Kioscos]
    end

    subgraph "Verifik API Gateway"
        GW[API Gateway]
        AUTH[Autenticación]
        RATE[Rate Limiting]
    end

    subgraph "Verifik Services"
        DOC[Document Validation<br/>OCR con IA]
        BIO[Biometric Validation<br/>Facial + Liveness]
        OTP[OTP Services<br/>SMS/Email/WhatsApp]
        LOOKUP[Citizen Lookup<br/>Bases de Datos]
    end

    subgraph "Fuentes Oficiales"
        REG[Registraduría]
        MIG[Migración Colombia]
        RUNT[RUNT]
        RUES[RUES]
    end

    subgraph "Storage"
        MONGO[(MongoDB)]
        CLOUD[Cloud Storage]
        REDIS[(Redis Cache)]
    end

    WEB --> GW
    MOBILE --> GW
    KIOSK --> GW

    GW --> AUTH
    AUTH --> RATE
    RATE --> DOC
    RATE --> BIO
    RATE --> OTP
    RATE --> LOOKUP

    DOC --> MONGO
    DOC --> CLOUD
    BIO --> MONGO
    BIO --> CLOUD
    OTP --> MONGO
    LOOKUP --> REDIS

    LOOKUP --> REG
    LOOKUP --> MIG
    LOOKUP --> RUNT
    LOOKUP --> RUES

    style WEB fill:#e1f5ff
    style MOBILE fill:#e1f5ff
    style KIOSK fill:#e1f5ff
    style DOC fill:#fff4e1
    style BIO fill:#fff4e1
    style OTP fill:#fff4e1
    style LOOKUP fill:#fff4e1
    style REG fill:#e8f5e9
    style MIG fill:#e8f5e9
    style RUNT fill:#e8f5e9
    style RUES fill:#e8f5e9
```

### Flujo de Datos - Validación de Documento

```mermaid
graph LR
    A[Usuario] -->|1. Foto documento| B[Frontend]
    B -->|2. Base64 image| C[Verifik API]
    C -->|3. OCR| D[Google Gemini AI]
    D -->|4. Datos extraídos| C
    C -->|5. Consulta| E[Registraduría]
    E -->|6. Datos oficiales| C
    C -->|7. Matching| F[String Similarity]
    F -->|8. Score| C
    C -->|9. Resultado| G[MongoDB]
    C -->|10. Imagen| H[Cloud Storage]
    C -->|11. Webhook| I[Sistema COMPENSAR]
    C -->|12. Response| B
    B -->|13. Resultado| A

    style A fill:#e1f5ff
    style D fill:#fff4e1
    style E fill:#e8f5e9
    style G fill:#f3e5f5
    style H fill:#f3e5f5
    style I fill:#ffe0b2
```

---

## 🔐 Flujo de Autenticación

### Autenticación con API Key

```mermaid
sequenceDiagram
    participant C as Cliente COMPENSAR
    participant V as Verifik API
    participant DB as Base de Datos

    Note over C,V: Configuración Inicial
    C->>V: Solicita API Key
    V->>DB: Crea cliente y API Key
    DB-->>V: API Key generada
    V-->>C: API Key: sk_live_xxxxx

    Note over C,V: Uso de la API
    C->>V: POST /document-validations<br/>Header: Authorization: Bearer sk_live_xxxxx
    V->>V: Valida API Key

    alt API Key válida
        V->>DB: Verifica permisos
        DB-->>V: Cliente autorizado
        V->>V: Procesa solicitud
        V-->>C: 200 OK + Resultado
    else API Key inválida
        V-->>C: 401 Unauthorized
    else Rate limit excedido
        V-->>C: 429 Too Many Requests
    end
```

---

## 📊 Flujo de Webhooks

### Configuración y Notificaciones

```mermaid
sequenceDiagram
    participant C as COMPENSAR
    participant V as Verifik API
    participant DB as Base de Datos
    participant W as Webhook Endpoint

    Note over C,V: Configuración de Webhook
    C->>V: POST /webhooks
    Note over C: URL: https://compensar.com/webhooks/verifik<br/>Events: [document_validation_completed, ...]
    V->>DB: Guarda configuración
    V-->>C: Webhook configurado

    Note over C,W: Evento de Validación
    C->>V: POST /document-validations
    V->>V: Procesa validación
    V->>DB: Guarda resultado

    V->>V: Genera payload
    V->>V: Firma HMAC-SHA256
    V->>W: POST https://compensar.com/webhooks/verifik
    Note over V,W: Headers:<br/>X-Webhook-Signature: sha256=...<br/>X-Event-Type: document_validation_completed

    alt Webhook exitoso
        W->>W: Valida firma HMAC
        W->>W: Procesa evento
        W-->>V: 200 OK
        V->>DB: Marca como entregado
    else Webhook falla
        W-->>V: 500 Error
        V->>V: Programa reintento
        Note over V: Reintentos: 1min, 5min, 15min
    end
```

---

## 🎯 Decisiones de Validación

### Árbol de Decisión - Validación de Documento

```mermaid
graph TD
    Start([Documento recibido]) --> OCR{OCR exitoso?}

    OCR -->|No| Fail1[❌ OCR fallido]
    OCR -->|Sí| Quality{Calidad imagen OK?}

    Quality -->|No| Fail2[❌ Imagen borrosa/oscura]
    Quality -->|Sí| Extract[Extrae datos]

    Extract --> Official{Consulta oficial OK?}
    Official -->|No| Fail3[❌ Error en consulta]
    Official -->|Sí| Match{Matching &gt;90%?}

    Match -->|No| Review[⚠️ Requiere revisión manual]
    Match -->|Sí| Expiry{Documento vigente?}

    Expiry -->|No| Fail4[❌ Documento vencido]
    Expiry -->|Sí| Success[✅ Documento validado]

    style Fail1 fill:#ffcccc
    style Fail2 fill:#ffcccc
    style Fail3 fill:#ffcccc
    style Fail4 fill:#ffcccc
    style Review fill:#fff4cc
    style Success fill:#ccffcc
```

### Árbol de Decisión - Validación Biométrica

```mermaid
graph TD
    Start([Selfie recibida]) --> Liveness{Liveness score &gt;0.6?}

    Liveness -->|No| Fail1[❌ Liveness fallido<br/>Posible foto/video]
    Liveness -->|Sí| Search{Búsqueda 1:N}

    Search --> Found{Usuario encontrado?}
    Found -->|No| Fail2[❌ Usuario no registrado]
    Found -->|Sí| Similarity{Similitud &gt;85%?}

    Similarity -->|No| Fail3[❌ Similitud baja]
    Similarity -->|Sí| Quality{Calidad imagen OK?}

    Quality -->|No| Retry[⚠️ Intente de nuevo]
    Quality -->|Sí| Permissions{Tiene permisos?}

    Permissions -->|No| Fail4[❌ Sin permisos]
    Permissions -->|Sí| Success[✅ Acceso autorizado]

    style Fail1 fill:#ffcccc
    style Fail2 fill:#ffcccc
    style Fail3 fill:#ffcccc
    style Fail4 fill:#ffcccc
    style Retry fill:#fff4cc
    style Success fill:#ccffcc
```

---

## 📈 Métricas y Monitoreo

### Dashboard de Métricas

```mermaid
graph TB
    subgraph "Métricas de Rendimiento"
        M1[Tiempo de Respuesta<br/>&lt;2 segundos]
        M2[Disponibilidad<br/>99.9%]
        M3[Tasa de Éxito<br/>>95%]
    end

    subgraph "Métricas de Uso"
        U1[Validaciones/día]
        U2[Usuarios activos]
        U3[Picos de uso]
    end

    subgraph "Métricas de Calidad"
        Q1[Precisión facial<br/>>99%]
        Q2[Liveness detection<br/>>95%]
        Q3[OCR accuracy<br/>>95%]
    end

    subgraph "Alertas"
        A1[Tasa de error &gt;1%]
        A2[Tiempo respuesta >3s]
        A3[Disponibilidad &lt;99%]
    end

    M1 --> Dashboard[Dashboard COMPENSAR]
    M2 --> Dashboard
    M3 --> Dashboard
    U1 --> Dashboard
    U2 --> Dashboard
    U3 --> Dashboard
    Q1 --> Dashboard
    Q2 --> Dashboard
    Q3 --> Dashboard

    Dashboard --> A1
    Dashboard --> A2
    Dashboard --> A3

    style Dashboard fill:#e1f5ff
    style A1 fill:#ffcccc
    style A2 fill:#ffcccc
    style A3 fill:#ffcccc
```

---

## 🔄 Plan de Implementación

### Timeline de 12 Semanas

```mermaid
gantt
    title Plan de Implementación Verifik para COMPENSAR
    dateFormat YYYY-MM-DD
    section Fase 1: Preparación
    Configuración ambiente     :2025-01-06, 1w
    Capacitación técnica      :2025-01-06, 1w
    Integración inicial       :2025-01-13, 1w

    section Fase 2: Pruebas
    Validación documentos     :2025-01-20, 2w
    Biometría y liveness      :2025-02-03, 2w

    section Fase 3: Integración
    Integración sistemas      :2025-02-17, 1w
    Pruebas de carga         :2025-02-24, 1w

    section Fase 4: Piloto
    Gimnasio piloto          :2025-03-03, 2w
    Validación créditos      :2025-03-17, 2w

    section Fase 5: Producción
    Análisis resultados      :2025-03-31, 1w
    Go-live producción       :2025-04-07, 1w
```

---

_Diagramas preparados por Verifik - Diciembre 2024_  
_Versión 1.0_

**Nota:** Estos diagramas están en formato Mermaid y se renderizan automáticamente en GitHub, GitLab, y la mayoría de visores de Markdown modernos.
