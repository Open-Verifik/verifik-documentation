---
id: "es-docs-es-access-access-resumen"
title: "Access — Resumen"
sourcePath: "docs-es/access/access.md"
locale: "es"
category: "access"
tags:
  - "access"
endpoint: "/v2/access"
sourceAnchor: "Resumen"
slug: "/acceso"
url: "https://docs.verifik.co/verifik-es/acceso"
---

# Access
**API path(s):** /v2/access

## Resumen

Todo lo que Acceso Inteligente tiene para ofrecer pero a nivel de API, dando la flexibilidad de codificar una solución personalizada basada en las necesidades de tu empresa.

## Resumen

La API de Acceso proporciona acceso programático a toda la funcionalidad de Acceso Inteligente, permitiéndote construir flujos de autenticación personalizados que se integren perfectamente con tus sistemas existentes. Esta solución es perfecta para empresas que necesitan más control sobre la experiencia del usuario o quieren integrar autenticación en sus aplicaciones existentes.

## Guía de Inicio Rápido

Empecemos diciendo que el camino **óptimo** es: Configurar todo en nuestra [aplicación web](https://app.verifik.co) (usando nuestra UI para guardar todo lo relacionado con la configuración ya que no hay necesidad de guardar todo vía API). Si aún quieres seguir todo vía API, listaré todos los endpoints que necesitan ser llamados para configurarlo manualmente o cambiar la información vía API también.

### Pasos de Configuración

  
    
      
        1. Crear un Proyecto
      
      
        Comienza creando un nuevo proyecto en la plataforma Verifik para organizar tus flujos de autenticación.
        Crear Proyecto
      
    
  
  
    
      
        2. Crear un Flujo de Proyecto
      
      
        Define el flujo de autenticación con type = "login" para tu proyecto.
        Crear Flujo
      
    
  

  
    
      
        3. Configurar Métodos de Inicio de Sesión
      
      
        Configura los métodos de autenticación que quieres soportar.
        Configurar Métodos
      
    
  
  
    
      
        4. Conexión de Base de Datos
      
      
        Conecta tu base de datos de usuarios existente al sistema de autenticación.
        Conectar BD
      
    
  

  
    
      
        5. Configurar Webhooks
      
      
        Configura webhooks para recibir notificaciones en tiempo real para eventos de autenticación.
        Configurar Webhooks
