---
id: smart-enroll-alojado
title: "SmartEnroll: Auto Alojado"
description: Acceso programático a la funcionalidad de SmartEnroll para flujos personalizados de KYC y onboarding
---

import { ClipboardList, Workflow, Palette, Link, BarChart3, Shield } from 'lucide-react';
import CodeExamples from '@site/src/components/CodeExamples';

# SmartEnroll: Auto Alojado

La **API de SmartEnroll** proporciona acceso programático a toda la funcionalidad de SmartEnroll, permitiéndote construir flujos personalizados de KYC y onboarding que se integren perfectamente con tus sistemas existentes. Esta solución es perfecta para empresas que necesitan más control sobre la experiencia del usuario o quieren integrar el onboarding en sus aplicaciones existentes.

## Descripción General

La API de SmartEnroll te permite crear y gestionar proyectos de KYC de forma programática, ofreciendo las mismas capacidades de verificación potentes que SmartEnroll pero con control completo de la API. Puedes construir interfaces de usuario personalizadas, integrar con tus sistemas existentes y crear experiencias de onboarding personalizadas mientras aprovechas la robusta infraestructura de verificación de Verifik.

## Características Principales

<div className="features-grid">
  <div className="feature-card">
    <div className="card">
      <div className="card__header">
        <h3><ClipboardList size={20} style={{display: 'inline', marginRight: '8px'}} />Gestión de Proyectos</h3>
      </div>
      <div className="card__body">
        <p>Crea y gestiona proyectos de KYC con control total sobre la configuración, branding y pasos de verificación.</p>
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
        <h3><Palette size={20} style={{display: 'inline', marginRight: '8px'}} />Branding Personalizado</h3>
      </div>
      <div className="card__body">
        <p>Branding de proyecto completamente personalizable para coincidir con tu identidad de marca y requisitos de experiencia del usuario.</p>
      </div>
    </div>
  </div>
  <div className="feature-card">
    <div className="card">
      <div className="card__header">
        <h3><Link size={20} style={{display: 'inline', marginRight: '8px'}} />Integración Flexible</h3>
      </div>
      <div className="card__body">
        <p>Integra fácilmente con tus sistemas existentes usando webhooks, APIs REST y SDKs para múltiples lenguajes.</p>
      </div>
    </div>
  </div>
  <div className="feature-card">
    <div className="card">
      <div className="card__header">
        <h3><BarChart3 size={20} style={{display: 'inline', marginRight: '8px'}} />Analytics Avanzados</h3>
      </div>
      <div className="card__body">
        <p>Obtén insights detallados sobre el rendimiento de verificación y métricas de conversión en tiempo real.</p>
      </div>
    </div>
  </div>
  <div className="feature-card">
    <div className="card">
      <div className="card__header">
        <h3><Shield size={20} style={{display: 'inline', marginRight: '8px'}} />Seguridad Empresarial</h3>
      </div>
      <div className="card__body">
        <p>Cumple con regulaciones de cumplimiento con verificación de identidad, verificación de documentos y verificaciones de antecedentes.</p>
      </div>
    </div>
  </div>
</div>

## Modo Demo

SmartEnroll incluye un **modo demo** que te permite probar la funcionalidad completa sin usar servicios reales:

-   **Auto-generación de OTP**: Cuando `demoMode: true`, el sistema genera automáticamente un OTP de 6 dígitos
-   **OTP personalizado**: Puedes especificar tu propio OTP usando `demoMode: true, demoOTP: 123456`
-   **Respuestas simuladas**: Todas las verificaciones devuelven respuestas simuladas para pruebas
-   **Sin costos**: No se cobran créditos durante el modo demo

### Ejemplo de Modo Demo

<CodeExamples
url="/v3/projects"
method="POST"
body={{
    name: "Proyecto Demo KYC",
    demoMode: true,
    allowedCountries: ["Estados Unidos"],
    contactEmail: "demo@ejemplo.com",
    privacyUrl: "https://ejemplo.com/privacidad",
    termsAndConditionsUrl: "https://ejemplo.com/terminos",
    dataProtection: {
      name: "DPO Demo",
      email: "dpo@ejemplo.com",
      address: "123 Calle Demo",
      city: "Ciudad Demo",
      country: "Estados Unidos",
      postalCode: "12345"
    }
  }}
/>

## Arquitectura de la API

La API de SmartEnroll está organizada en dos recursos principales:

### Proyectos

Los **Proyectos** representan configuraciones de KYC completas que incluyen:

-   Configuración de branding y personalización
-   Configuración de protección de datos
-   Países permitidos y configuraciones regionales
-   URLs de términos y condiciones
-   Configuración de flujo de proyecto (opcional)

### Flujos de Proyecto

Los **Flujos de Proyecto** definen los pasos específicos de verificación:

-   **Formulario de registro**: Campos requeridos y opcionales
-   **Verificación de documentos**: Tipos de documentos y configuraciones
-   **Verificación biométrica**: Configuración de liveness y comparación facial
-   **Integraciones**: Webhooks, APIs externas y estrategias de validación

## Flujo de Trabajo Típico

1. **Crear Proyecto**: Configura la información básica del proyecto y branding
2. **Configurar Flujo**: Define los pasos de verificación específicos
3. **Integrar Frontend**: Implementa la interfaz de usuario usando los SDKs
4. **Procesar Verificaciones**: Maneja las respuestas y webhooks
5. **Monitorear Resultados**: Usa analytics para optimizar el rendimiento

## Autenticación

Todas las llamadas a la API requieren autenticación usando un token JWT:

```bash
curl -X GET "https://api.verifik.co/v3/projects" \
  -H "Authorization: Bearer tu_token_jwt"
```

## Respuestas de Error

Todas las respuestas de error incluyen información detallada:

```json
{
	"error": {
		"message": "Descripción del error",
		"code": "ERROR_CODE",
		"details": "Información adicional del error"
	},
	"timestamp": "2024-01-15T10:30:00Z",
	"status": 400
}
```

## Próximos Pasos

-   [Crear tu primer proyecto](/docs/api/proyectos/crear-proyecto)
-   [Configurar flujos de verificación](/docs/api/flujos-proyecto/actualizar-flujo-proyecto)
-   [Integrar con tu aplicación](/docs/smart-enroll-alojado/smart-enroll-alojado)

## Recursos Adicionales

-   [Documentación de la API de Proyectos](/docs/api/proyectos)
-   [Documentación de la API de Flujos de Proyecto](/docs/api/flujos-proyecto)
-   [Guías de integración](/docs/empezar)
-   [Soporte técnico](https://verifik.co/support)
