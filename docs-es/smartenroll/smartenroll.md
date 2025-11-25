---
id: smartenroll
title: SmartEnroll
description: Una solución sin código diseñada para proporcionar incorporaciones seguras y fluidas para los usuarios
---

import { Mail, Phone, ScanFace, FileText, Database, Palette } from 'lucide-react';

# SmartEnroll

**SmartEnroll** es una solución sin código diseñada para proporcionar incorporaciones seguras y fluidas para los usuarios. Esta plataforma permite a las empresas ofrecer diversas verificaciones de incorporación, incluyendo verificación de correo electrónico, teléfono y biométrica, validaciones de documentos, verificaciones AML, verificaciones de manipulación y más. Todas estas características están integradas en nuestro proyecto asegurando una experiencia fácil de usar y segura. Con SmartEnroll, las empresas pueden integrar fácilmente estas soluciones KYC sin la necesidad de codificación compleja o desarrollo de infraestructura.

## Resumen

SmartEnroll proporciona una solución KYC (Know Your Customer) integral que agiliza el proceso de incorporación de usuarios mientras mantiene los más altos estándares de seguridad. La plataforma ofrece un conjunto completo de herramientas de verificación que pueden personalizarse para satisfacer tus requisitos comerciales específicos.

## Características Clave

<div className="row">
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Mail size={20} style={{display: 'inline', marginRight: '8px'}} />Verificación de Correo Electrónico</h3>
      </div>
      <div className="card__body">
        <p>Valida direcciones de correo electrónico con verificación OTP para asegurar un registro de usuario auténtico.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Phone size={20} style={{display: 'inline', marginRight: '8px'}} />Verificación de Teléfono</h3>
      </div>
      <div className="card__body">
        <p>Verifica números de teléfono vía SMS y WhatsApp para autenticación segura de usuarios.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><ScanFace size={20} style={{display: 'inline', marginRight: '8px'}} />Verificación Biométrica</h3>
      </div>
      <div className="card__body">
        <p>Reconocimiento facial avanzado y detección de vivacidad para verificación de identidad segura.</p>
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><FileText size={20} style={{display: 'inline', marginRight: '8px'}} />Escaneo de Documentos</h3>
      </div>
      <div className="card__body">
        <p>Escanea y verifica documentos emitidos por el gobierno con detección de manipulación.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Database size={20} style={{display: 'inline', marginRight: '8px'}} />Screening de Bases de Datos</h3>
      </div>
      <div className="card__body">
        <p>Verificaciones exhaustivas de antecedentes contra bases de datos gubernamentales y listas negras.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Palette size={20} style={{display: 'inline', marginRight: '8px'}} />Personalización de Marca</h3>
      </div>
      <div className="card__body">
        <p>Interfaz completamente personalizable para que coincida con la identidad y requisitos de tu marca.</p>
      </div>
    </div>
  </div>
</div>

---

## Guía de Configuración

Sigue estos 7 pasos para configurar tu proyecto SmartEnroll:

### 1. Configuración Básica

<img src="/img/smartenroll/smart-enroll-basic-setup.png" alt="Configuración Básica" />

#### Información del Proyecto

Esta sección es donde se configuran los ajustes principales del proyecto. Cada campo tiene un propósito específico:

-   **Nombre del Proyecto**: Este es un campo requerido donde el usuario ingresa el nombre de su proyecto. Se usará en todas las referencias al proyecto dentro del ecosistema Verifik.
-   **Países Permitidos**: Aquí los usuarios especifican a qué países aplicará su proceso KYC. Pueden seleccionar de una lista predefinida (Canadá, Colombia, México, Panamá y Estados Unidos). Se pueden agregar países adicionales escribiendo el nombre del país en el campo de entrada.
-   **Correo Electrónico**: La dirección de correo electrónico asociada con el proyecto. Este es el punto de contacto para toda la correspondencia relacionada con este proyecto.
-   **Política de Privacidad (URL)**: Un campo obligatorio donde los usuarios proporcionan un enlace a su documento de Política de Privacidad. Esto asegura el cumplimiento con las leyes locales e internacionales de protección de datos.
-   **Términos y Condiciones (URL)**: Un campo donde el usuario proporciona una URL a sus Términos y Condiciones, que se mostrarán a los usuarios finales durante el proceso KYC.

#### Información de Contacto del Oficial de Protección de Datos (DPO):

-   **Nombre del Propietario**: El representante legal del proyecto o el nombre del Oficial de Protección de Datos designado.
-   **Correo Electrónico**: La dirección de correo electrónico de la persona responsable de la protección de datos y el cumplimiento.
-   **Dirección**: La dirección principal (opcional).
-   **País, Ciudad, Código Postal**: Detalles de ubicación para el Oficial de Protección de Datos, que pueden ser requeridos para propósitos regulatorios.

:::tip Nota Clave
Esta fase de configuración asegura que todas las configuraciones legales y básicas estén alineadas antes de que el proyecto pueda proceder al siguiente paso.
:::

---

### 2. Formulario de Registro

<img src="/img/smartenroll/smart-enroll-signup.png" alt="Configuración del Formulario de Registro" />

En este paso, los usuarios configuran los campos que desean recopilar de los usuarios finales durante el proceso de registro.

-   **Nombre Completo**: El sistema permite flexibilidad en cómo se capturan los nombres. Los usuarios pueden elegir entre:
    -   Nombre y apellido juntos (un solo campo de entrada).
    -   Nombre y apellido separados (dos campos de entrada distintos para cada parte del nombre).
-   **Correo Electrónico**: Puedes optar por validar la dirección de correo electrónico alternando entre "Validar" o "No validar".
-   **Teléfono**: Los usuarios pueden decidir si la verificación de teléfono se realizará mediante:
    -   WhatsApp
    -   SMS
    -   Ambos (WhatsApp y SMS)
    -   No validar (omitir la validación del número de teléfono).
-   **Mostrar Términos y Condiciones**: Un interruptor para mostrar Términos y Condiciones a los usuarios finales durante el proceso de registro.
-   **Mostrar Políticas de Privacidad**: Similar a los Términos y Condiciones, este interruptor mostrará las políticas de privacidad en la etapa de registro.
-   **Rol y Empresa**: La plataforma permite a los usuarios solicitar campos opcionales adicionales como información de Rol y Empresa. Estos campos se activan o desactivan según las necesidades del negocio.

:::tip Nota Clave
Este paso proporciona flexibilidad en la recopilación de datos mientras asegura que los acuerdos legales necesarios (Términos y Políticas de Privacidad) se presenten al usuario.
:::

---

### 3. Escaneo de Documentos

<img src="/img/smartenroll/smart-enroll-documents.png" alt="Configuración de Escaneo de Documentos" />

En este paso, el usuario puede configurar la verificación de documentos para validación de identidad.

-   **Documentos Válidos**: La plataforma admite el escaneo y verificación de varios documentos emitidos por el gobierno. Los usuarios pueden seleccionar qué tipos de documentos son aceptables para su proceso KYC. Las opciones típicamente incluyen:
    -   Documento de Identidad Gubernamental
    -   Pasaporte
    -   Licencia de Conducir
-   **Establecer un Límite de Intentos**: Esto permite a los usuarios definir cuántos escaneos de documentos fallidos se permiten antes de que el proceso se bloquee. El rango es personalizable, desde 3 hasta 10 intentos. Esto es crítico para controlar potenciales intentos fraudulentos y asegurar un uso eficiente de recursos.

<img src="/img/smartenroll/smart-enroll-documents-verification-methods.png" alt="Métodos de Verificación de Documentos" />

-   **Métodos de Verificación de ID**:
    -   **Opción 1**: Cargar una copia digital de un documento de identidad.
    -   **Opción 2**: Usar la cámara del dispositivo para escanear la identificación física para verificación en tiempo real.
-   **Screening de Bases de Datos**: Se pueden realizar verificaciones adicionales contra bases de datos gubernamentales. Los usuarios pueden agregar:
    -   **Verificación de ID con Fuentes Gubernamentales**: Compara la información extraída con registros oficiales para verificar la autenticidad del documento.
    -   **Verificación de Antecedentes Penales**: Consulta bases de datos para ver si el individuo tiene antecedentes penales.

:::tip Nota Clave
Este paso es donde el usuario configura métodos de verificación para autenticar documentos con una capa adicional de seguridad mediante verificaciones externas.
:::

---

### 4. Registro Biométrico

<img src="/img/smartenroll/smart-enroll-liveness.png" alt="Configuración de Registro Biométrico" />

**Registro Biométrico:** Esta es la parte de verificación biométrica del flujo, donde se verifica el rostro del usuario para confirmar su presencia durante el proceso de incorporación.

-   **Establecer un Límite de Intentos**: Especifica cuántas veces un usuario puede fallar la detección de vivacidad antes de ser bloqueado de continuar. Los intentos permitidos se pueden personalizar de 3 a 10.
-   **Puntuación de Vivacidad:** Personaliza el umbral para la detección de vivacidad. Esta puntuación determina qué tan estricto es el sistema al verificar que la entrada biométrica proviene de una persona viva, no de una imagen o video estático. La recomendación predeterminada es del 50%, lo que asegura que la verificación de vivacidad funcione óptimamente en la mayoría de los dispositivos.
-   **Puntuación de Comparación:** Esta puntuación establece la precisión de comparar (1:1) el rostro del usuario final con el documento proporcionado. Una puntuación más alta significa más seguridad, criterios de coincidencia más estrictos y exige un mayor parecido con el usuario para obtener acceso. La puntuación recomendada para un rendimiento óptimo es del 85%.

:::warning Aviso de Seguridad
Las puntuaciones más altas proporcionan mejor seguridad pero pueden aumentar las tasas de rechazo falso. Prueba con tu base de usuarios para encontrar el equilibrio óptimo.
:::

---

### 5. Conectar Base de Datos

Este paso es crítico para integrar tu proceso KYC con bases de datos externas o usar archivos CSV para listas, como listas negras. Este paso ofrece flexibilidad según el tamaño, tipo y frecuencia de actualizaciones de tus datos.

#### Gestión de Listas Negras: Cargar un CSV o Conectar vía API

##### 1. Cargar una Lista Negra (CSV)

<img src="/img/smartenroll/csv-blacklist.png" alt="Carga de Lista Negra CSV" />

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

<img src="/img/smartenroll/api-blacklist.png" alt="Conexión de Lista Negra API" />

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

<img src="/img/smartenroll/smart-enroll-integrations.png" alt="Configuración de Conexiones del Proyecto" />

**Integración de Webhook:**

-   Los usuarios también pueden configurar un **Webhook** para recibir notificaciones cada vez que se agregue una nueva entrada, o alguien intente acceder al sistema que esté en la lista negra. Esto mejora la capacidad del sistema para alertas y monitoreo en tiempo real.

**URL de Redirección:**

-   Después de completar el proceso KYC, los usuarios serán redirigidos a una URL específica que configures. Esta URL puede personalizarse según tu flujo (por ejemplo, redirección a un panel de control, acciones adicionales o simplemente una página de agradecimiento).

---

### 6. Personalizar el Estilo

<img src="/img/smartenroll/smart-enroll-user-interface.png" alt="Personalización de Estilo" />

Esta sección permite la personalización completa de los elementos visuales del flujo KYC:

-   **Logo**: Los usuarios pueden cargar el logo de su empresa, que se mostrará durante todo el proceso KYC.
-   **Imagen**: Los usuarios pueden cargar imágenes adicionales para acompañar el flujo KYC y proporcionar una experiencia más personalizada.
-   **Colores**: La interfaz permite a los usuarios seleccionar un esquema de colores para que coincida con la identidad de su marca. Las personalizaciones incluyen:
    -   Color del Título
    -   Color del Texto
    -   Color del Botón
    -   Color de Fondo
    -   Color de Fondo Derecho (para componentes específicos de la UI).

:::tip Nota Clave
La personalización asegura que la Aplicación Cliente de Verifik se alinee perfectamente con las directrices de marca del usuario.
:::

---

### 7. Invitar a tu Personal

<img src="/img/smartenroll/smart-enroll-invite-members.png" alt="Invitación de Personal" />

-   **Miembros del Proyecto**: Los usuarios pueden gestionar su equipo invitando a miembros del equipo a colaborar en el proyecto. A cada miembro se le puede asignar un rol específico, como "editor", permitiéndoles ciertos permisos dentro del proyecto.
-   **Invitar Miembros**: Este campo permite a los usuarios buscar e invitar nuevos miembros de su espacio de trabajo para unirse al proyecto.

:::tip Nota Clave
Esta característica proporciona colaboración en equipo y gestión de roles para mejorar la eficiencia del proyecto.
:::

---

## Mejores Prácticas

### Recomendaciones de Seguridad

1. **Establecer Límites de Intentos Apropiados**: Configura límites de intentos según tus requisitos de seguridad y necesidades de experiencia de usuario.
2. **Usar Puntuaciones Recomendadas**: Comienza con las puntuaciones biométricas recomendadas y ajusta según tus resultados de prueba.
3. **Actualizaciones Regulares de Listas Negras**: Mantén tus listas negras actualizadas para mantener la efectividad de seguridad.
4. **Monitorear Alertas de Webhook**: Configura un monitoreo adecuado para notificaciones de webhook para responder rápidamente a eventos de seguridad.

### Consejos de Experiencia de Usuario

1. **Instrucciones Claras**: Proporciona instrucciones claras a los usuarios sobre qué documentos son aceptables.
2. **Optimización Móvil**: Asegúrate de que tu flujo KYC funcione bien en dispositivos móviles ya que muchos usuarios completan la incorporación en sus teléfonos.
3. **Consistencia de Marca**: Usa las opciones de personalización para mantener la identidad de tu marca durante todo el proceso.
4. **Probar Exhaustivamente**: Prueba el flujo completo con diferentes escenarios de usuario antes de ponerlo en producción.

### Consideraciones de Cumplimiento

1. **Protección de Datos**: Asegúrate de que tu política de privacidad y términos sean comprensivos y cumplan con las regulaciones locales.
2. **Documentación**: Mantén registros de la configuración de tu proceso KYC para fines de auditoría.
3. **Revisiones Regulares**: Revisa y actualiza periódicamente tu proceso KYC para mantener el cumplimiento.

---

## Soporte

Para soporte técnico y asistencia de implementación, contacta a nuestro equipo de soporte o visita nuestro portal de desarrolladores.

:::tip Consejo Profesional
Comienza con la configuración básica y gradualmente agrega más pasos de verificación a medida que te familiarices con la plataforma.
:::

:::warning Importante
Siempre prueba tu flujo KYC completamente en un ambiente de pruebas antes de desplegar a producción.
:::
