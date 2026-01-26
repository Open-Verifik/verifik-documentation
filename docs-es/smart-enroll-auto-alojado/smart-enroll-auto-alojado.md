---
id: smart-enroll-self-hosted
title: "SmartEnroll: Auto-alojado"
description: Acceso programático a la funcionalidad de SmartEnroll para flujos personalizados de KYC e incorporación
slug: /smart-enroll-auto-alojado
---

import { ClipboardList, Workflow, Palette, Link as LinkIcon, BarChart3, Shield } from 'lucide-react';
import CodeExamples from '@site/src/components/CodeExamples';
import ThemeToggle from '@site/src/components/ThemeToggle';

# SmartEnroll: Auto-alojado

La **API de SmartEnroll** proporciona acceso programático a toda la funcionalidad de SmartEnroll, permitiéndote construir flujos personalizados de KYC e incorporación que se integran perfectamente con tus sistemas existentes. Esta solución es perfecta para empresas que necesitan más control sobre la experiencia del usuario o desean integrar la incorporación en sus aplicaciones existentes.

## Descripción General

La API de SmartEnroll te permite crear y gestionar proyectos de KYC (Conozca a su Cliente) de forma programática, ofreciendo las mismas potentes capacidades de verificación que la interfaz de SmartEnroll pero con control total de la API. La versión 3 introduce un proceso de configuración paso a paso simplificado que facilita la construcción de flujos de incorporación personalizados mientras mantiene la flexibilidad y el control.

Ya sea que estés incorporando individuos (KYC personal) o empresas (KYB empresarial), la API de SmartEnroll proporciona un enfoque estructurado para recopilar información de usuarios, verificar documentos, realizar verificaciones biométricas e integrar con tus sistemas existentes.

## Características Clave

<div className="features-grid">
  <div className="feature-card">
    <div className="card">
      <div className="card__header">
        <h3><ClipboardList size={20} style={{display: 'inline', marginRight: '8px'}} />Gestión de Proyectos</h3>
      </div>
      <div className="card__body">
        <p>Crea y gestiona proyectos KYC con control total sobre la configuración, marca y pasos de verificación.</p>
      </div>
    </div>
  </div>
  <div className="feature-card">
    <div className="card">
      <div className="card__header">
        <h3><Workflow size={20} style={{display: 'inline', marginRight: '8px'}} />Flujos de Proyecto</h3>
      </div>
      <div className="card__body">
        <p>Configura flujos de verificación con escaneo de documentos, verificación biométrica y verificaciones de antecedentes.</p>
      </div>
    </div>
  </div>
  <div className="feature-card">
    <div className="card">
      <div className="card__header">
        <h3><Palette size={20} style={{display: 'inline', marginRight: '8px'}} />Marca Personalizada</h3>
      </div>
      <div className="card__body">
        <p>Marca de proyecto totalmente personalizable para coincidir con tu identidad de marca y requisitos de experiencia de usuario.</p>
      </div>
    </div>
  </div>
  <div className="feature-card">
    <div className="card">
      <div className="card__header">
        <h3><LinkIcon size={20} style={{display: 'inline', marginRight: '8px'}} />Integración de API</h3>
      </div>
      <div className="card__body">
        <p>Integración perfecta con tus sistemas existentes a través de APIs RESTful y notificaciones webhook.</p>
      </div>
    </div>
  </div>
  <div className="feature-card">
    <div className="card">
      <div className="card__header">
        <h3><BarChart3 size={20} style={{display: 'inline', marginRight: '8px'}} />Actualizaciones en Tiempo Real</h3>
      </div>
      <div className="card__body">
        <p>Configuración de proyecto paso a paso con actualizaciones en tiempo real y retroalimentación de validación.</p>
      </div>
    </div>
  </div>
  <div className="feature-card">
    <div className="card">
      <div className="card__header">
        <h3><Shield size={20} style={{display: 'inline', marginRight: '8px'}} />Seguridad Primero</h3>
      </div>
      <div className="card__body">
        <p>Seguridad de nivel empresarial con autenticación JWT y cumplimiento integral de protección de datos.</p>
      </div>
    </div>
  </div>
</div>

---

## Comenzando

### Autenticación

Todas las solicitudes de API requieren un token JWT válido. Incluye el token en el encabezado de Autorización:

```http
Authorization: Bearer <your_jwt_token>
```

### URLs Base

-   **Producción**: `https://api.verifik.co/v3`
-   **Staging**: `https://staging-api.verifik.co/v3`
-   **Desarrollo**: `https://dev-api.verifik.co/v3`

:::tip Mejores Prácticas de Webhook
Para conectar webhooks, primero crea objetos de webhook a través del endpoint de Webhooks, luego vincula sus IDs al flujo de tu proyecto. Esto te permite reutilizar configuraciones de webhook en múltiples proyectos.
:::

---

## Paso 6: Personalización de UI

Personaliza el aspecto del flujo de SmartEnroll para que coincida con tu marca. Este paso configura elementos visuales y personalización.

### Lo que Configurarás

-   **Colores Primarios** - Colores principales de la marca para el tema (púrpura predeterminado)
-   **Colores de Foco** - Colores de hover/interacción (amarillo predeterminado)
-   **Carga de Logo** - Logo de tu marca para elementos de la UI
-   **Imágenes de Documentos** - Imágenes personalizadas para guiar las cargas de documentos
-   **Textos Personalizados** - Mensajes y etiquetas personalizados

### Ejemplo: Configurar Personalización de UI

### Ejemplo de Inicio Rápido

Aquí hay un ejemplo simple de cómo listar todos los proyectos usando la API:

<CodeExamples
url="/v3/projects"
method="GET"
query={{
  page: 1,
  limit: 10
}}
/>

### Recursos de la API

La API de SmartEnroll proporciona dos recursos principales:

#### Proyectos

Gestiona tus proyectos KYC con control completo sobre configuración, marca y ajustes de verificación.

-   **[Listar Proyectos](/verifik-es/resources/proyectos/listar-todos-los-proyectos)** - Recupera todos los proyectos
-   **[Obtener Proyecto](/verifik-es/resources/proyectos/recuperar-un-proyecto)** - Obtiene detalles del proyecto
-   **[Crear Proyecto](/verifik-es/resources/proyectos/crear-un-proyecto)** - Crea nuevos proyectos
-   **[Actualizar Proyecto](/verifik-es/resources/proyectos/actualizar-un-proyecto)** - Actualiza la configuración del proyecto
-   **[Eliminar Proyecto](/verifik-es/resources/proyectos/eliminar-un-proyecto)** - Elimina proyectos

#### Flujos de Proyecto

Configura flujos de verificación y gestiona ajustes específicos del proyecto.

-   **[Actualizar Flujo de Proyecto](/verifik-es/resources/flujos-de-proyecto/actualizar-un-flujo-de-proyecto)** - Actualiza la configuración del flujo de verificación
-   **[Eliminar Flujo de Proyecto](/verifik-es/resources/flujos-de-proyecto/eliminar-un-flujo-de-proyecto)** - Elimina flujos de proyecto

---

## Formato de Respuesta

Todas las respuestas de la API siguen un formato consistente:

### Respuesta Exitosa

```json
{
    "data": {
        // Datos de respuesta
    },
    "total": 0,
    "limit": 0,
    "page": 0,
    "pages": 0
}
```

### Respuesta de Error

```json
{
    "message": "Descripción del error",
    "code": "CÓDIGO_ERROR"
}
```

---

## Límites de Tasa

-   **Operaciones de Proyecto**: 100 solicitudes por minuto por usuario
-   **Operaciones de Flujo de Proyecto**: 50 solicitudes por minuto por usuario
-   **Verificación de Documentos**: 20 solicitudes por minuto por usuario
-   **Verificación Biométrica**: 10 solicitudes por minuto por usuario
-   **Verificaciones de Antecedentes**: 5 solicitudes por minuto por usuario

---

## Construcción de un Proyecto KYC

SmartEnroll Versión 3 proporciona un flujo de trabajo estructurado de 6 pasos para crear proyectos KYC personales (Conozca a su Cliente). Cada paso se construye sobre el anterior, permitiéndote configurar tu flujo de incorporación progresivamente.

### Entendiendo los Objetivos del Proyecto

Antes de comenzar, es importante entender los dos tipos de proyectos:

-   **Personal (KYC)** - Para incorporar usuarios individuales
-   **Empresarial (KYB)** - Para incorporar empresas y sus representantes legales _(cubierto en documentación separada)_

Esta guía se centra en **proyectos KYC Personales**.

---

## Paso 1: Configuración Básica

El primer paso establece la base de tu proyecto KYC. Esto incluye información básica del proyecto, detalles de cumplimiento y configuraciones de protección de datos requeridas por las regulaciones de privacidad.

### Lo que Configurarás

-   **Nombre del Proyecto** - Un nombre descriptivo para tu proyecto KYC
-   **Países Permitidos** - Países donde los usuarios pueden completar la incorporación
-   **Correo de Contacto** - Dirección de correo electrónico para comunicaciones relacionadas con el proyecto
-   **URLs de Privacidad y Términos** - Enlaces a tu política de privacidad y términos de servicio
-   **Información de Protección de Datos** - Detalles sobre tu Oficial de Protección de Datos (requerido para cumplimiento GDPR)

### Ejemplo: Crear un Proyecto Básico

<CodeExamples
url="/v3/projects"
method="POST"
body={{
    name: "Customer Onboarding - North America",
    allowedCountries: ["United States", "Canada", "Mexico"],
    contactEmail: "compliance@example.com",
    privacyUrl: "https://example.com/privacy",
    termsAndConditionsUrl: "https://example.com/terms",
    dataProtection: {
      name: "Jane Smith",
      email: "dpo@example.com",
      address: "123 Business Plaza",
      city: "New York",
      country: "United States",
      postalCode: "10001"
    },
    target: "personal"
  }}
/>

:::tip Información de Protección de Datos
El campo `dataProtection` es requerido para cumplimiento con regulaciones de privacidad como GDPR. Asegúrate de proporcionar información precisa sobre tu Oficial de Protección de Datos o contacto de privacidad.
:::

---

## Paso 2: Formulario de Registro

Configura qué información recopilar de los usuarios cuando comiencen el proceso de incorporación. Este paso determina la recopilación de datos inicial antes de la verificación de documentos.

### Lo que Configurarás

-   **Recopilación de Nombre Completo** - Si recopilar el nombre completo del usuario (requerido)
-   **Formato de Nombre** - Recopilar el nombre como un campo o campos separados de nombre/apellido
-   **Recopilación de Email** - Si recopilar y verificar direcciones de correo electrónico
-   **Pasarela de Email** - Cómo enviar emails de verificación (Mailgun o ninguno)
-   **Recopilación de Teléfono** - Si recopilar y verificar números de teléfono
-   **Pasarela de Teléfono** - Cómo enviar códigos de verificación (SMS, WhatsApp, ambos, o ninguno)
-   **Campos Adicionales** - Campos personalizados específicos para las necesidades de tu negocio
-   **Visualización de Privacidad y Términos** - Si mostrar casillas de consentimiento

### Ejemplo: Configurar Formulario de Registro

<CodeExamples
url="/v3/projects/{id}"
method="PUT"
params={{ id: "64a1b2c3d4e5f6789012345" }}
body={{
    projectFlow: {
      target: "personal",
      type: "onboarding",
      signUpForm: {
        fullName: true,
        fullNameStyle: "together",
        email: true,
        emailGateway: "mailgun",
        phone: true,
        phoneGateway: "sms",
        allowAdditionalFields: false,
        additionalFields: [],
        showPrivacyNotice: true,
        showTermsAndConditions: true
      }
    },
    projectFlowType: "onboarding"
  }}
/>

:::info Opciones de Formato de Nombre

-   **together** - Campo único para nombre completo (ej., "Juan Pérez")
-   **separate** - Campos separados para nombre y apellido

Elige según tus requisitos regionales y preferencias de experiencia de usuario.
:::

---

## Paso 3: Verificación de Documentos

Configura cómo los usuarios verificarán sus documentos de identidad. Este paso es crucial para el cumplimiento KYC y la verificación de identidad.

### Lo que Configurarás

-   **Requisito del Paso de Documento** - Si la verificación de documentos es obligatoria, opcional u omitida
-   **Límite de Intentos** - Número máximo de intentos de carga (1-5)
-   **Tipos de Documentos** - Qué documentos aceptar por país (ID gubernamental, pasaporte, licencia de conducir)
-   **Métodos de Verificación** - Cómo se validarán los documentos (escaneo, carga, o ambos)
-   **Verificación Avanzada** - Verificaciones adicionales como verificación de información, screening o historial criminal

### Categorías de Documentos

Para KYC personal, puedes configurar estos tipos de documentos:

-   **government_id** - Tarjetas de identificación emitidas por el gobierno
-   **passport** - Pasaportes internacionales
-   **license** - Licencias de conducir

### Ejemplo: Configurar Verificación de Documentos

<CodeExamples
url="/v3/projects/{id}"
method="PUT"
params={{ id: "64a1b2c3d4e5f6789012345" }}
body={{
    projectFlow: {
      target: "personal",
      type: "onboarding",
      steps: {
        document: "mandatory"
      },
      documents: {
        attemptLimit: 3,
        verificationMethods: ["scan", "upload"],
        documentTypes: [
          {
            country: "United States",
            configurations: [
              {
                active: true,
                documentCategory: "government_id",
                documentTemplates: []
              },
              {
                active: true,
                documentCategory: "license",
                documentTemplates: []
              }
            ]
          },
          {
            country: "Canada",
            configurations: [
              {
                active: true,
                documentCategory: "government_id",
                documentTemplates: []
              }
            ]
          }
        ],
        screening: false,
        informationVerification: false,
        criminalHistoryVerification: false
      }
    },
    projectFlowType: "onboarding"
  }}
/>

:::warning Tipos de Documentos por País
Cada país debe tener al menos una configuración de documento activa cuando el paso de documento no se omite. Configura los tipos de documentos según lo que se usa comúnmente en cada país.
:::

### Requisitos de Paso

-   **mandatory** - Los usuarios deben completar la verificación de documentos para proceder
-   **optional** - Los usuarios pueden optar por omitir la verificación de documentos
-   **skip** - La verificación de documentos no se incluye en el flujo

---

## Paso 4: Detección de Vivacidad

Configura la verificación biométrica para asegurar que los usuarios estén físicamente presentes durante la incorporación. Este paso utiliza reconocimiento facial y detección de vivacidad para prevenir fraude.

### Lo que Configurarás

-   **Requisito del Paso de Vivacidad** - Si la verificación biométrica es obligatoria, opcional u omitida
-   **Límite de Intentos** - Número máximo de intentos de verificación de vivacidad (1-5)
-   **Puntuación de Vivacidad** - Puntuación mínima para confirmar que el usuario está vivo (0.52 - 0.90)
-   **Puntuación de Comparación** - Puntuación mínima para hacer coincidir el rostro con la foto del documento (0.70 - 0.95)
-   **Modo de Búsqueda** - Equilibrio entre velocidad y precisión (FAST o ACCURATE)

### Ejemplo: Configurar Detección de Vivacidad

<CodeExamples
url="/v3/projects/{id}"
method="PUT"
params={{ id: "64a1b2c3d4e5f6789012345" }}
body={{
    projectFlow: {
      target: "personal",
      type: "onboarding",
      steps: {
        liveness: "mandatory"
      },
      liveness: {
        attemptLimit: 3,
        minScore: 0.65,
        searchMinScore: 0.80,
        searchMode: "FAST"
      }
    },
    projectFlowType: "onboarding"
  }}
/>

:::tip Puntuaciones de Vivacidad

-   **minScore (0.65 recomendado)** - Puntuaciones más bajas funcionan con cámaras de baja calidad pero pueden aumentar falsos positivos
-   **searchMinScore (0.80 recomendado)** - Puntuaciones más altas proporcionan mejor coincidencia rostro-a-documento pero requieren mejor calidad de imagen

Comienza con valores recomendados y ajusta según tus requisitos de seguridad y retroalimentación de experiencia de usuario.
:::

### Modos de Búsqueda

-   **FAST** - Optimizado para velocidad, adecuado para la mayoría de los casos de uso
-   **ACCURATE** - Más lento pero más preciso, recomendado para aplicaciones de alta seguridad

---

## Paso 5: Integraciones

Conecta tu proyecto KYC a sistemas externos, configura webhooks para notificaciones en tiempo real y establece redirecciones post-incorporación.

### Lo que Configurarás

-   **URL de Redirección** - Hacia dónde enviar a los usuarios después de completar la incorporación (requerido)
-   **Webhook** - Endpoint para recibir eventos de incorporación en tiempo real
-   **Integración de Lista Negra** - Conectar a bases de datos externas para prevenir inscripción
-   **Integración de API** - Enlazar a tu base de datos de clientes para validación de datos

### Ejemplo: Configurar Integraciones

<CodeExamples
url="/v3/projects/{id}"
method="PUT"
params={{ id: "64a1b2c3d4e5f6789012345" }}
body={{
    projectFlow: {
      target: "personal",
      type: "onboarding",
      integrations: {
        redirectUrl: "https://example.com/onboarding-complete",
        webhook: "64b2c3d4e5f678901234567",
        source: "NONE",
        strategy: "none",
        apiUrl: "",
        apiTestType: "email",
        apiTestValue: ""
      }
    },
    projectFlowType: "onboarding"
  }}
/>

:::info Integración de Lista Negra
La función de lista negra te permite conectar una base de datos externa. Los usuarios encontrados en esta base de datos serán prevenidos de completar la incorporación. Establece `source` en "API" o "CSV" y configura los detalles de conexión apropiados.
:::

### Fuentes de Integración

-   **NONE** - Sin integración externa
-   **API** - Conectar a un endpoint de API RESTful
-   **CSV** - Cargar un archivo CSV (próximamente)

### Estrategias de Integración

-   **none** - Permitir que todos los usuarios se inscriban
-   **blacklist** - Prevenir que usuarios encontrados en la base de datos externa se inscriban

---

## Paso 6: Personalización de Interfaz de Usuario

Personaliza la apariencia visual de tu flujo de incorporación para que coincida con la identidad de tu marca. Este paso es opcional pero recomendado para una experiencia de usuario fluida.

### Lo que Configurarás

-   **Logo** - El logo de tu empresa (mostrado en la parte superior)
-   **Color de Fondo** - Color de fondo principal
-   **Color de Botón** - Color del botón principal
-   **Color de Texto del Botón** - Color del texto para los botones
-   **Color del Título** - Color para encabezados y títulos
-   **Color del Texto** - Color para el texto del cuerpo
-   **Imagen** - Imagen de fondo o decorativa
-   **Color de Fondo de Imagen** - Color de fondo para el área de la imagen

### Ejemplo: Configurar Personalización de Marca

<CodeExamples
url="/v3/projects/{id}"
method="PUT"
params={{ id: "64a1b2c3d4e5f6789012345" }}
body={{
    branding: {
      backgroundColor: "#ffffff",
      buttonColor: "#2563eb",
      buttonTextColor: "#ffffff",
      titleColor: "#1e293b",
      textColor: "#475569",
      imageBackgroundColor: "#f1f5f9",
      logo: "https://example.com/logo.png",
      image: "https://example.com/background.jpg"
    }
  }}
/>

:::tip Guías de Color

-   Usa alto contraste entre texto y fondos para accesibilidad
-   Prueba tu esquema de colores tanto en dispositivos de escritorio como móviles
-   Asegúrate de que los colores de los botones destaquen del fondo
-   Considera tus guías de marca al elegir colores
    :::

---

## Ejemplo de Proyecto Completo

Aquí hay un ejemplo completo que muestra cómo crear un proyecto KYC completamente configurado en una sola solicitud:

<CodeExamples
url="/v3/projects"
method="POST"
body={{
    name: "Customer Onboarding - North America",
    allowedCountries: ["United States", "Canada"],
    contactEmail: "compliance@example.com",
    privacyUrl: "https://example.com/privacy",
    termsAndConditionsUrl: "https://example.com/terms",
    target: "personal",
    dataProtection: {
      name: "Jane Smith",
      email: "dpo@example.com",
      address: "123 Business Plaza",
      city: "New York",
      country: "United States",
      postalCode: "10001"
    },
    branding: {
      backgroundColor: "#ffffff",
      buttonColor: "#2563eb",
      buttonTextColor: "#ffffff",
      titleColor: "#1e293b",
      textColor: "#475569",
      imageBackgroundColor: "#f1f5f9",
      logo: "https://example.com/logo.png",
      image: ""
    },
    projectFlow: {
      target: "personal",
      type: "onboarding",
      status: "draft",
      version: 3,
      signUpForm: {
        fullName: true,
        fullNameStyle: "together",
        email: true,
        emailGateway: "mailgun",
        phone: true,
        phoneGateway: "sms",
        allowAdditionalFields: false,
        additionalFields: [],
        showPrivacyNotice: true,
        showTermsAndConditions: true
      },
      steps: {
        document: "mandatory",
        liveness: "mandatory"
      },
      documents: {
        attemptLimit: 3,
        verificationMethods: ["scan", "upload"],
        documentTypes: [
          {
            country: "United States",
            configurations: [
              {
                active: true,
                documentCategory: "government_id",
                documentTemplates: []
              }
            ]
          }
        ],
        screening: false,
        informationVerification: false,
        criminalHistoryVerification: false
      },
      liveness: {
        attemptLimit: 3,
        minScore: 0.65,
        searchMinScore: 0.80,
        searchMode: "FAST"
      },
      integrations: {
        redirectUrl: "https://example.com/onboarding-complete",
        webhook: null,
        source: "NONE",
        strategy: "none",
        apiUrl: "",
        apiTestType: "email",
        apiTestValue: ""
      }
    },
    projectFlowType: "onboarding"
  }}
/>

---

## Gestión del Ciclo de Vida del Proyecto

### Activando tu Proyecto

Una vez que hayas configurado todos los pasos, cambia el estado del proyecto para que esté activo:

<CodeExamples
url="/v3/projects/{id}"
method="PUT"
params={{ id: "64a1b2c3d4e5f6789012345" }}
body={{
    status: "active",
    projectFlow: {
      status: "active"
    }
  }}
/>

### Valores de Estado del Proyecto

-   **draft** - El proyecto se está configurando, no accesible para usuarios finales
-   **active** - El proyecto está activo y aceptando inscripciones de usuarios
-   **paused** - El proyecto está temporalmente deshabilitado, no se aceptan nuevas inscripciones

:::warning Antes de Activar
Asegúrate de que todos los pasos requeridos estén configurados y probados correctamente antes de establecer el estado en "active". Los usuarios no podrán completar la incorporación si faltan pasos requeridos o están mal configurados.
:::

---

## Patrones de Integración

### Configuración Progresiva

Construye tu proyecto paso a paso, siguiendo el flujo de trabajo de la interfaz de SmartEnroll:

1. **Crear** el proyecto con información básica
2. **Configurar** campos del formulario de registro
3. **Establecer** verificación de documentos
4. **Habilitar** detección de vivacidad
5. **Conectar** integraciones y webhooks
6. **Personalizar** marca y apariencia
7. **Activar** el proyecto

Este enfoque proporciona mejor manejo de errores y validación en cada paso.

### Configuración de Solicitud Única

Crea un proyecto completo en una sola llamada a la API si tienes todos los detalles de configuración preparados. Esto es ideal para:

-   Creación automatizada de proyectos
-   Despliegues basados en plantillas
-   Migración desde otros sistemas

:::tip Mejor Práctica
Usa el enfoque progresivo al construir proyectos manualmente o a través de una interfaz de usuario. Usa el enfoque de solicitud única para automatización y plantillas.
:::

---

## Soporte

Para soporte técnico y asistencia con documentación de la API:

-   **Documentación**: Visita nuestro [portal de desarrolladores](https://docs.verifik.co)
-   **Soporte**: Contacta a nuestro equipo de soporte
-   **Estado**: Revisa nuestra [página de estado de API](https://status.verifik.co)

:::tip Obtener Ayuda
Al contactar a soporte, incluye tu ID de proyecto, endpoint de API y detalles de solicitud/respuesta para asistencia más rápida.
:::

:::warning Importante
Siempre prueba tu integración completamente en el ambiente de desarrollo antes de desplegar a producción.
:::
