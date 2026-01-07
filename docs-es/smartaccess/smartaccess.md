---
id: acceso-inteligente
title: SmartAccess
description: Una solución sin código para gestionar el acceso a tu plataforma de forma segura y eficiente
slug: /acceso-inteligente
---

# SmartAccess

**Acceso Inteligente** es una solución sin código diseñada para proporcionar inicios de sesión seguros y sin contraseñas para los usuarios. Esta plataforma permite a las empresas ofrecer varios métodos de autenticación, incluyendo verificación por correo electrónico, teléfono y biométrica, asegurando una experiencia amigable y segura para el usuario. Con Acceso Inteligente, las empresas pueden integrar fácilmente estos métodos de autenticación sin la necesidad de codificación compleja o desarrollo de infraestructura.

<img src="/img/smartaccess/smartaccess-overview.png" alt="Acceso Inteligente Overview" />

## Características Principales

### 1. Autenticación Sin Contraseña

Acceso Inteligente soporta múltiples métodos de autenticación sin contraseña para mejorar la seguridad y experiencia del usuario:

* **Verificación por Correo Electrónico:** Una vez que se proporciona una dirección de correo electrónico, se envía una contraseña de un solo uso (OTP) al proveedor de correo para autenticar al usuario final.
* **Verificación por Teléfono:** Una vez que se proporciona un número de teléfono, se envía una contraseña de un solo uso (OTP) vía SMS o WhatsApp para autenticar al usuario final.
* **Autenticación Biométrica:** Combinando reconocimiento facial (RF) y detección de vida (DV), los usuarios pueden verificar de forma segura su identidad y dar prueba de humanidad.

### 2. Configuración Flexible

Acceso Inteligente permite a las empresas configurar el proceso de autenticación según sus necesidades específicas. Configura las puntuaciones mínimas de vida y búsqueda para verificación biométrica, elige entre opciones de búsqueda rápida o precisa, y también puede sugerir a los usuarios finales hacer **Autenticación Biométrica** para una experiencia más fluida.

### 3. Integración de Base de Datos

Integrar tu base de datos de clientes existente con Acceso Inteligente es sencillo. Las empresas pueden conectar sus bases de datos a través de APIs o cargar datos de clientes usando archivos CSV. La plataforma también proporciona una característica de prueba para asegurar que la conexión API esté configurada correctamente.

### 4. Opciones de Personalización

Acceso Inteligente ofrece opciones de personalización extensas para coincidir con los requisitos de tu marca:

* **Carga de Logo e Imágenes:** Personaliza el proyecto cargando el logo de tu empresa e imágenes relevantes.
* **Personalización de Colores:** Ajusta el esquema de colores de la interfaz de autenticación para alinearse con la identidad de tu marca.

### 5. Gestión de Equipo

Acceso Inteligente incluye un sistema de gestión de equipo simple pero efectivo, permitiendo a los propietarios del proyecto invitar y asignar roles a miembros del equipo dentro de la plataforma. Esto asegura que las personas correctas tengan los niveles de acceso correctos para gestionar y monitorear el proceso de autenticación.

### 6. Vista Previa en Tiempo Real

Las empresas pueden previsualizar cómo se verá su proceso de autenticación para los usuarios finales antes de finalizar la configuración, asegurando que todas las configuraciones y personalizaciones cumplan con sus expectativas.

## Comenzando

### 1. Configuración Básica

<img src="/img/smartaccess/basic-configuration.png" alt="Configuración Básica" />

En el paso de **Configuración Básica**, establecerás la base para tu proyecto de Acceso Inteligente. Este paso involucra ingresar información crucial del proyecto que dictará cómo se gestionan tus procesos de autenticación y qué pueden esperar los usuarios. Aquí está lo que puedes personalizar:

* **Nombre del Proyecto:** Comienza dando a tu proyecto un nombre único y descriptivo. Esto te ayudará a identificar y gestionar tus proyectos fácilmente, especialmente si planeas ejecutar múltiples proyectos a través de Acceso Inteligente.
* **Países Permitidos:** Acceso Inteligente te permite especificar qué países soportará tu proyecto. Puedes elegir de una amplia gama de países, asegurando que tus servicios de autenticación estén adaptados a las regiones geográficas donde se ubican tus usuarios. Esta característica es particularmente útil para empresas con presencia internacional, ya que te permite cumplir con regulaciones y estándares locales.
* **Información de Contacto:** Ingresa los detalles de tu Oficial de Protección de Datos (OPD). Esto incluye el nombre, correo electrónico y dirección. Esta información es crítica para mantener el cumplimiento con regulaciones de protección de datos, como GDPR, y asegura que tus usuarios tengan un punto de contacto para consultas relacionadas con privacidad.
* **URLs de Política de Privacidad y Términos y Condiciones:** Acceso Inteligente te da la flexibilidad de vincular a tu Política de Privacidad y Términos y Condiciones existentes. Este paso asegura que los usuarios estén completamente informados sobre cómo se usarán sus datos y los términos bajo los cuales pueden usar tus servicios. Puedes actualizar estos enlaces en cualquier momento, proporcionando agilidad para adaptarse a requisitos legales evolutivos o políticas de empresa.

Esta configuración inicial proporciona una base sólida, asegurando que todos los pasos subsecuentes se alineen con las necesidades específicas de tu proyecto y obligaciones regulatorias.

### 2. Configurar Métodos de Inicio de Sesión

<img src="/img/smartaccess/login-methods.png" alt="Configurar Métodos de Inicio de Sesión" />

El paso de **Métodos de Inicio de Sesión** es donde defines cómo tus usuarios se autenticarán. Acceso Inteligente ofrece una gama robusta de opciones que puedes personalizar extensamente para cumplir con los requisitos de tu empresa:

* **Verificación por Correo Electrónico:** Habilita o deshabilita la autenticación basada en correo electrónico. Si está habilitada, puedes personalizar cómo se generan y envían los OTPs (Contraseñas de Un Solo Uso) por correo electrónico. Esto incluye establecer el tiempo de expiración para OTPs, personalizar las plantillas de correo electrónico para reflejar tu marca, y decidir si requerir pasos de verificación adicionales, como autenticación de dos factores (2FA).
* **Verificación por Teléfono:** Acceso Inteligente soporta verificación basada en teléfono vía SMS y WhatsApp. Puedes elegir habilitar una o ambas opciones dependiendo de las preferencias de tu base de usuarios. Personaliza el formato de mensaje, idioma y tiempo de entrega para asegurar una experiencia fluida. Además, puedes configurar opciones de respaldo en caso de que el método primario falle, como enviar un segundo OTP a través de un canal diferente.

#### Autenticación Biométrica

<img src="/img/smartaccess/biometric-authentication.png" alt="Autenticación Biométrica" />

* **Autenticación Biométrica:** Las capacidades biométricas de la plataforma permiten a los usuarios iniciar sesión usando reconocimiento facial. Tienes control significativo sobre cómo funciona este proceso:
  * **Puntuación de Vida:** Personaliza el umbral para detección de vida. Esta puntuación determina qué tan estricto es el sistema en verificar que la entrada biométrica es de una persona viva, no de una imagen estática o video.
  * **Puntuación de Búsqueda:** Esta puntuación establece la precisión en criterios de búsqueda (1:N) de reconocimiento facial. Una puntuación más alta significa más seguridad, criterios de coincidencia más estrictos, y demanda una mayor semejanza al usuario para obtener acceso. La puntuación recomendada para rendimiento óptimo es 85%.

<img src="/img/smartaccess/biometric-scores.png" alt="Configuración de Puntuaciones Biométricas" />

Acceso Inteligente también incluye una opción para **Recomendar Registro Facial** cada vez que un usuario accede al proyecto sin registro biométrico previo. Esto asegura que los usuarios sean consistentemente alentados a inscribirse en el método de autenticación más seguro disponible.

### 3. Conectar a Tu Base de Datos

<img src="/img/smartaccess/connect-database.png" alt="Conectar a Tu Base de Datos" />

El paso de **Conectar Base de Datos** es crucial para integrar Acceso Inteligente con tus datos de usuario existentes. Este paso ofrece flexibilidad considerable, permitiéndote conectar tu proyecto a diferentes fuentes de datos y asegurar operación fluida:

* **Integración API:** Vincula tu base de datos de clientes con Acceso Inteligente vía una API. Necesitarás proporcionar la URL de la API y especificar el tipo de datos que deseas consultar (ej. correo electrónico, número de teléfono). Acceso Inteligente ofrece una característica de prueba integrada que te permite verificar si la API está correctamente vinculada. Esta función de prueba es altamente personalizable—puedes simular diferentes consultas de datos para asegurar que tu sistema esté preparado para uso del mundo real.
* **Carga CSV:** Para aquellos que lo prefieren o lo requieren, Acceso Inteligente también soporta la carga masiva de datos de clientes a través de archivos CSV. Este método es ideal para empresas que transicionan de sistemas más antiguos o aquellas sin una API fácilmente disponible. Una vez cargado, el sistema procesa los datos CSV, haciéndolos instantáneamente accesibles para propósitos de autenticación.

<img src="/img/smartaccess/csv-template.png" alt="Descarga de Plantilla CSV" />

**Descargar/Cargar Plantilla.** Después de descargar la plantilla, completa el archivo CSV con los criterios correctos y luego carga y haz ediciones finales.

<img src="/img/smartaccess/csv-upload.png" alt="Proceso de Carga CSV" />

<img src="/img/smartaccess/csv-data.png" alt="Procesamiento de Datos CSV" />

* **Configuración de Webhook:** Establece un webhook que manejará comunicación en tiempo real entre Acceso Inteligente y tu backend. Este paso es personalizable basado en los eventos específicos que deseas monitorear (ej. inicios de sesión exitosos, intentos fallidos, etc.). Puedes vincular el webhook a tu sistema de alertas, habilitando respuestas inmediatas a eventos críticos de seguridad.

<img src="/img/smartaccess/webhook-configuration.png" alt="Configuración de Webhook" />

* **URL de Redirección:** Establece una URL de redirección para tu proyecto que guiará a los usuarios a la página de destino apropiada después de que completen el proceso de autenticación. Ya sea que quieras que los usuarios vayan a un panel de control, página de inicio, o una página de aplicación específica, esta característica asegura una transición fluida y mejora la experiencia del usuario.

<img src="/img/smartaccess/redirect-url.png" alt="Configuración de URL de Redirección" />

### 4. Personalizar la Interfaz

En el paso de **Personalizar**, puedes ajustar finamente la apariencia de tu proyecto de Acceso Inteligente para asegurar que se alinee perfectamente con la identidad de tu marca. Este paso ofrece una amplia gama de opciones de personalización:

* **Carga de Logo:** Carga el logo de tu empresa para personalizar la interfaz del proyecto. Este logo será mostrado prominentemente a través de todas las páginas orientadas al usuario, reforzando el reconocimiento de marca. Acceso Inteligente acepta varios formatos de imagen, asegurando compatibilidad con tus activos de marca.

<img src="/img/smartaccess/logo-upload.png" alt="Carga de Logo" />

* **Personalización de Imágenes:** Además del logo, puedes cargar imágenes adicionales para mejorar aún más el atractivo visual de tus páginas de autenticación. Estas imágenes pueden usarse para proporcionar información contextual, mostrar tus productos, o crear una experiencia de usuario más atractiva.

<img src="/img/smartaccess/image-customization.png" alt="Personalización de Imágenes" />

* **Esquema de Colores:** Adapta el esquema de colores de tu proyecto para reflejar la identidad de tu marca. Puedes personalizar los colores para varios elementos, incluyendo títulos, texto, botones y fondos. Acceso Inteligente proporciona una paleta de colores predefinidos así como la opción de ingresar códigos HEX personalizados para coincidencia precisa de colores.

<img src="/img/smartaccess/color-scheme.png" alt="Personalización de Esquema de Colores" />

Este paso asegura que tu proceso de autenticación no solo sea seguro y eficiente, sino también visualmente atractivo y consistente con tu presentación general de marca.

### 5. Gestión de Equipo

En el paso de **Gestión de Equipo**, Acceso Inteligente proporciona una interfaz amigable para gestionar quién puede acceder y controlar varios aspectos de tu proyecto. Este paso es particularmente importante para asegurar que tu equipo esté alineado con sus roles y responsabilidades:

* **Invitar Miembros del Equipo:** Puedes fácilmente invitar miembros del equipo a unirse al proyecto. Acceso Inteligente te permite asignar roles específicos a cada miembro del equipo, como Administrador, Visualizador, o Editor. Cada rol viene con su propio conjunto de permisos, asegurando que los usuarios solo tengan acceso a las funcionalidades que necesitan.
* **Gestionar Roles:** Acceso Inteligente proporciona control granular sobre asignaciones de roles. Por ejemplo, puedes otorgar derechos de visualización a ciertos usuarios que solo necesitan monitorear el rendimiento del proyecto, mientras das derechos administrativos completos a aquellos que gestionarán configuraciones e integraciones.
* **Propiedad del Proyecto:** Define el propietario del proyecto, quien tendrá el nivel más alto de control sobre el proyecto. Esta persona puede tomar decisiones críticas, incluyendo agregar o remover miembros del equipo y cambiar configuraciones fundamentales del proyecto.

<img src="/img/smartaccess/team-management.png" alt="Gestión de Equipo" />

Este paso asegura que tu equipo esté empoderado para gestionar el proceso de autenticación efectivamente, mientras también mantiene control estricto sobre quién tiene acceso a configuraciones sensibles del proyecto.

### 6. Finalizar y Publicar

El paso de **Finalizar y Publicar** es donde todas tus configuraciones y personalizaciones se unen. Acceso Inteligente proporciona una característica de vista previa final, permitiéndote ver exactamente cómo se verá y funcionará el proyecto desde la perspectiva del usuario:

* **Vista Previa del Proyecto:** Antes de publicar, puedes recorrer todo el proceso de autenticación como lo experimentaría un usuario final. Esto ayuda a identificar cualquier cambio o ajuste de último minuto necesario para optimizar la experiencia del usuario.
* **Publicación:** Una vez satisfecho con la configuración, simplemente haz clic en el botón "Publicar" para hacer el proyecto en vivo. Acceso Inteligente despliega inmediatamente tus configuraciones, haciendo los servicios de autenticación disponibles para tus usuarios. Si es necesario, puedes despublicar el proyecto más tarde para ajustes adicionales.

Este paso final enfatiza la facilidad de uso y flexibilidad que Acceso Inteligente ofrece, permitiéndote lanzar una solución de autenticación completamente personalizada, segura y consistente con la marca con confianza.
