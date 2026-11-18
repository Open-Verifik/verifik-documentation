---
id: "es-docs-es-smartaccess-smartaccess-3-conectar-a-tu-base-de-datos-4"
title: "SmartAccess — 3. Conectar a Tu Base de Datos"
sourcePath: "docs-es/smartaccess/smartaccess.md"
locale: "es"
category: "smartaccess"
tags:
  - "smartaccess"
sourceAnchor: "3. Conectar a Tu Base de Datos"
slug: "/acceso-inteligente"
url: "https://docs.verifik.co/verifik-es/acceso-inteligente"
---

# SmartAccess

**Acceso Inteligente** es una solución sin código diseñada para proporcionar inicios de sesión seguros y sin contraseñas para los usuarios. Esta plataforma permite a las empresas ofrecer varios métodos de autenticación, incluyendo verificación por correo electrónico, teléfono y biométrica, asegurando una experiencia amigable y segura para el usuario. Con Acceso Inteligente, las empresas pueden integrar fácilmente estos métodos de autenticación sin la necesidad de codificación compleja o desarrollo de infraestructura.

## 3. Conectar a Tu Base de Datos

El paso de **Conectar Base de Datos** es crucial para integrar Acceso Inteligente con tus datos de usuario existentes. Este paso ofrece flexibilidad considerable, permitiéndote conectar tu proyecto a diferentes fuentes de datos y asegurar operación fluida:

* **Integración API:** Vincula tu base de datos de clientes con Acceso Inteligente vía una API. Necesitarás proporcionar la URL de la API y especificar el tipo de datos que deseas consultar (ej. correo electrónico, número de teléfono). Acceso Inteligente ofrece una característica de prueba integrada que te permite verificar si la API está correctamente vinculada. Esta función de prueba es altamente personalizable—puedes simular diferentes consultas de datos para asegurar que tu sistema esté preparado para uso del mundo real.
* **Carga CSV:** Para aquellos que lo prefieren o lo requieren, Acceso Inteligente también soporta la carga masiva de datos de clientes a través de archivos CSV. Este método es ideal para empresas que transicionan de sistemas más antiguos o aquellas sin una API fácilmente disponible. Una vez cargado, el sistema procesa los datos CSV, haciéndolos instantáneamente accesibles para propósitos de autenticación.

**Descargar/Cargar Plantilla.** Después de descargar la plantilla, completa el archivo CSV con los criterios correctos y luego carga y haz ediciones finales.

* **Configuración de Webhook:** Establece un webhook que manejará comunicación en tiempo real entre Acceso Inteligente y tu backend. Este paso es personalizable basado en los eventos específicos que deseas monitorear (ej. inicios de sesión exitosos, intentos fallidos, etc.). Puedes vincular el webhook a tu sistema de alertas, habilitando respuestas inmediatas a eventos críticos de seguridad.

* **URL de Redirección:** Establece una URL de redirección para tu proyecto que guiará a los usuarios a la página de destino apropiada después de que completen el proceso de autenticación. Ya sea que quieras que los usuarios vayan a un panel de control, página de inicio, o una página de aplicación específica, esta característica asegura una transición fluida y mejora la experiencia del usuario.
