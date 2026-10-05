---
id: "es-docs-es-smartenroll-smartenroll-5-conectar-base-de-datos-5"
title: "SmartEnroll — 5. Conectar Base de Datos"
sourcePath: "docs-es/smartenroll/smartenroll.md"
locale: "es"
category: "smartenroll"
tags:
  - "smartenroll"
sourceAnchor: "5. Conectar Base de Datos"
---

# SmartEnroll

**SmartEnroll** es una solución sin código diseñada para proporcionar incorporaciones seguras y fluidas para los usuarios. Esta plataforma permite a las empresas ofrecer diversas verificaciones de incorporación, incluyendo verificación de correo electrónico, teléfono y biométrica, validaciones de documentos, verificaciones AML, verificaciones de manipulación y más. Todas estas características están integradas en nuestro proyecto asegurando una experiencia fácil de usar y segura. Con SmartEnroll, las empresas pueden integrar fácilmente estas soluciones KYC sin la necesidad de codificación compleja o desarrollo de infraestructura.

## 5. Conectar Base de Datos

Este paso es crítico para integrar tu proceso KYC con bases de datos externas o usar archivos CSV para listas, como listas negras. Este paso ofrece flexibilidad según el tamaño, tipo y frecuencia de actualizaciones de tus datos.

#### Gestión de Listas Negras: Cargar un CSV o Conectar vía API

##### 1. Cargar una Lista Negra (CSV)

-   **Cuándo Usar un CSV**:

    -   **Listas Estáticas o Pequeñas**: Los archivos CSV son ideales cuando tienes una lista negra fija, más pequeña, que no cambia con frecuencia. Esto puede incluir casos donde tu lista negra está compuesta de unos pocos cientos de entradas, como individuos fraudulentos conocidos o entidades bloqueadas, cuyos datos no cambiarán con el tiempo.
    -   **Sin Base de Datos o Sistema Simple**: Si tu organización no mantiene una base de datos dinámica o prefiere no lidiar con la complejidad de la integración de bases de datos, una carga de CSV proporciona una alternativa fácil de usar. Esto es especialmente útil para pequeñas empresas o aquellas con recursos técnicos limitados.
    -   **Mantenimiento Fuera de Línea**: En entornos donde el acceso a internet puede ser limitado, o para empresas que rastrean manualmente sus listas (por ejemplo, usando Excel u otras herramientas fuera de línea), cargar un CSV permite actualizaciones periódicas sin la necesidad de una solución conectada y siempre en línea.

-   **Cómo Funciona**:

    -   Los usuarios pueden cargar un archivo CSV que contenga hasta **500 entradas por carga**. Estas entradas representan a los individuos o entidades que deseas bloquear del acceso a tu sistema.
    -   Una vez cargado, la plataforma usa esta lista negra para **restringir el acceso** a cualquier persona en la lista, impidiéndoles completar el proceso KYC.

-   **Beneficios Clave**:
    -   **Simplicidad**: No se necesita configuración de API ni una base de datos constantemente actualizada. Los usuarios pueden gestionar y cargar CSV según sea necesario.
    -   **Bajo Mantenimiento**: Adecuado para organizaciones que no esperan cambios o actualizaciones frecuentes en sus listas negras.
    -   **Costo-Efectivo**: No se necesita invertir en infraestructura o servicios adicionales para gestionar bases de datos dinámicamente.

##### 2. Conectar con API: Gestión Dinámica de Listas Negras

-   **Cuándo Usar una API**:

    -   **Listas Dinámicas y Frecuentemente Actualizadas**: Las APIs son ideales para listas negras más grandes y dinámicas que están cambiando constantemente o necesitan actualizaciones en tiempo real. Este podría ser el caso de organizaciones que manejan un gran volumen de datos de clientes o desean sincronizar automáticamente con sistemas de terceros para asegurar que su lista negra esté siempre actualizada.
    -   **Base de Datos Centralizada**: Para empresas que ya mantienen una base de datos centralizada o desean conectar sus sistemas para validación en tiempo real, la integración de API asegura que los datos de la lista negra se extraigan y apliquen en tiempo real durante el proceso KYC.
    -   **Múltiples Fuentes**: Si la lista negra necesita compilarse desde múltiples fuentes externas o bases de datos, una API te permite integrar esos sistemas sin problemas.

-   **Cómo Funciona**:

    -   Los usuarios proporcionan un **endpoint de API** que el sistema usará para extraer dinámicamente datos de la lista negra.
    -   Esto asegura que cada vez que un usuario intente registrarse o completar el proceso KYC, el sistema consulte la API para verificar si ese individuo está en la lista negra.
    -   La conexión de API asegura que cualquier cambio hecho a tu lista negra (adiciones o eliminaciones) se refleje inmediatamente en el proceso KYC sin requerir intervención manual.

-   **Beneficios Clave**:
    -   **Actualizaciones en Tiempo Real**: Las conexiones de API aseguran que tu lista negra esté siempre actualizada, reflejando cualquier cambio o nueva entrada tan pronto como ocurra.
    -   **Eficiencia**: Para empresas que necesitan gestionar listas negras a gran escala o que cambian frecuentemente, las APIs agilizan el proceso, reduciendo el trabajo manual y posibles errores.
    -   **Escalabilidad**: A medida que tu negocio crece, la conexión de API puede escalar para acomodar conjuntos de datos más grandes e integrarse con otros sistemas, haciéndola ideal para entornos más complejos.

#### Integraciones

**Integración de Webhook:**

-   Los usuarios también pueden configurar un **Webhook** para recibir notificaciones cada vez que se agregue una nueva entrada, o alguien intente acceder al sistema que esté en la lista negra. Esto mejora la capacidad del sistema para alertas y monitoreo en tiempo real.

**URL de Redirección:**
