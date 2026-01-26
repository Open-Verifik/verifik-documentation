---
id: smartenroll-admin-revision-kyc
title: SmartEnroll Admin - Revisión y Gestión KYC
description: Guía completa para revisar y gestionar verificaciones KYC de usuarios registrados en proyectos SmartEnroll
---

import { Users, FileText, CheckCircle, XCircle, AlertCircle, Search, Filter, Eye, Send } from 'lucide-react';

# SmartEnroll Admin - Revisión y Gestión KYC

La interfaz de **Revisión KYC de SmartEnroll Admin** proporciona a los administradores herramientas integrales para revisar, gestionar y tomar decisiones sobre las verificaciones KYC de usuarios. Este poderoso panel de control te permite monitorear todo el proceso de incorporación, revisar resultados de verificación y tomar acciones apropiadas basadas en requisitos de cumplimiento.

## Resumen

La interfaz de Revisión KYC Admin está diseñada para dar a los administradores visibilidad y control completos sobre el proceso de verificación de SmartEnroll. Desde ver usuarios registrados hasta revisar resultados detallados de verificación, esta interfaz asegura que puedas tomar decisiones informadas sobre la incorporación de usuarios mientras mantienes estándares de cumplimiento y seguridad.

## Características Clave

<div className="row">
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Users size={20} style={{display: 'inline', marginRight: '8px'}} />Gestión de Usuarios</h3>
      </div>
      <div className="card__body">
        <p>Ver y gestionar todos los usuarios registrados en tus proyectos SmartEnroll con capacidades integrales de filtrado y búsqueda.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><FileText size={20} style={{display: 'inline', marginRight: '8px'}} />Revisión de Documentos</h3>
      </div>
      <div className="card__body">
        <p>Revisar documentos cargados, resultados de extracción OCR y estado de validación de documentos para cada usuario.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><CheckCircle size={20} style={{display: 'inline', marginRight: '8px'}} />Decisiones de Verificación</h3>
      </div>
      <div className="card__body">
        <p>Tomar decisiones informadas sobre verificaciones de usuarios con puntuaciones detalladas, resultados de comparación e información de verificación de antecedentes.</p>
      </div>
    </div>
  </div>
</div>

---

## Resumen de Lista de Usuarios

<img src="/img/smartEnroll-admin-kyc-review/0-list-of-users-for-smart-enroll.png" alt="Lista de Usuarios para Smart Enroll" />

El panel principal muestra una lista integral de todos los usuarios que se han registrado o intentado registrarse en tu proyecto SmartEnroll.

### Características de la Lista

La lista de usuarios proporciona la siguiente información y capacidades:

- **Información del Usuario**:
  - Nombre e identificación del usuario
  - Fecha y hora de registro
  - Estado actual de verificación
  - Indicador de progreso de incorporación

- **Indicadores de Estado**:
  - **Pendiente**: El usuario ha comenzado pero no completado el proceso de incorporación
  - **En Progreso**: El usuario está actualmente pasando por pasos de verificación
  - **Aprobado**: El usuario ha completado exitosamente todos los requisitos de verificación
  - **Rechazado**: El usuario ha sido rechazado basado en resultados de verificación
  - **En Revisión**: Se requiere o está en progreso una revisión manual

- **Búsqueda y Filtrado**:
  - Buscar por nombre de usuario, correo electrónico o número de documento
  - Filtrar por estado de verificación
  - Filtrar por rango de fecha de registro
  - Filtrar por proyecto o tipo de incorporación

- **Acciones Rápidas**:
  - Ver perfil detallado del usuario
  - Acceder a resultados de verificación
  - Reenviar enlace de incorporación
  - Exportar datos de usuario

:::tip Consejo Profesional
Usa las funciones de búsqueda y filtrado para encontrar rápidamente usuarios específicos o revisar usuarios por estado. Esto es especialmente útil al gestionar grandes números de incorporaciones.
:::

---

## Detalles de Registro de Usuario

### Información del Formulario de Registro

<img src="/img/smartEnroll-admin-kyc-review/1.-sign-up-form.png" alt="Detalles del Formulario de Registro" />

Al ver el perfil de un usuario, puedes ver toda la información que proporcionaron durante el proceso de registro inicial.

#### Datos de Registro Disponibles

- **Información Personal**:
  - Nombre y apellido
  - Nombre completo como fue ingresado
  - Fecha de nacimiento (si se recopiló)

- **Información de Contacto**:
  - Dirección de correo electrónico
  - Número de teléfono con código de país
  - Estado de verificación para correo electrónico y teléfono

- **Información Adicional** (si está configurada):
  - Nombre de la empresa
  - Rol o posición
  - Cualquier campo personalizado configurado para tu proyecto

- **Metadatos de Registro**:
  - Marca de tiempo de registro
  - Dirección IP (si se registró)
  - Información del dispositivo
  - Fuente de referencia (si aplica)

#### Indicadores de Estado de Verificación

Cada pieza de información muestra su estado de verificación:

- ✓ **Verificado**: Verificado exitosamente (OTP de correo electrónico, OTP de teléfono, etc.)
- ⏳ **Pendiente**: Verificación en progreso o aún no completada
- ✗ **Fallido**: Verificación falló o expiró
- ⚠️ **Advertencia**: Verificación completada pero con problemas

:::important Importante
Toda la información de registro se muestra exactamente como el usuario la ingresó. Compara esto con la información del documento para identificar cualquier discrepancia que pueda requerir atención.
:::

---

## Reenviar Enlace de Incorporación

<img src="/img/smartEnroll-admin-kyc-review/2-resend-enrollment-link.png" alt="Reenviar Enlace de Incorporación" />

Los administradores pueden reenviar enlaces de incorporación a usuarios que pueden no haber completado el proceso o necesitan reiniciar su verificación.

### Cuándo Reenviar Enlaces de Incorporación

Escenarios comunes para reenviar enlaces de incorporación:

- **Incorporación Incompleta**: El usuario comenzó pero no terminó el proceso
- **Enlace Expirado**: El enlace de incorporación original ha expirado
- **Solicitud del Usuario**: El usuario contactó soporte solicitando un nuevo enlace
- **Problemas Técnicos**: El usuario experimentó problemas técnicos durante la incorporación
- **Re-incorporación**: El usuario necesita completar el proceso nuevamente después del rechazo

### Proceso de Reenvío

1. **Seleccionar Usuario**: Navega al perfil del usuario desde la lista de usuarios
2. **Acceder a Opción de Reenvío**: Haz clic en "Reenviar Enlace de Incorporación" o botón de acción similar
3. **Confirmar Acción**: Confirma que deseas enviar un nuevo enlace de incorporación
4. **Enlace Enviado**: El sistema envía un nuevo enlace de incorporación a la dirección de correo electrónico registrada del usuario

### Configuración del Enlace

- **Expiración**: Los nuevos enlaces típicamente tienen la misma configuración de expiración configurada para tu proyecto
- **Uso Único**: Los enlaces son típicamente de un solo uso para mantener la seguridad
- **Notificación**: Los usuarios reciben una notificación por correo electrónico con el nuevo enlace

:::warning Nota de Seguridad
Solo reenvía enlaces de incorporación cuando sea necesario y verifica la identidad del usuario antes de enviar. Reenvíos no autorizados de enlaces podrían plantear riesgos de seguridad.
:::

---

## Revisión de Escaneo de Documentos

<img src="/img/smartEnroll-admin-kyc-review/3-document-scanning.png" alt="Revisión de Escaneo de Documentos" />

La sección de escaneo de documentos proporciona a los administradores una vista detallada de todos los documentos cargados por el usuario durante el proceso KYC.

### Información de Documentos Disponible

- **Tipo de Documento**: 
  - ID Gubernamental
  - Pasaporte
  - Licencia de Conducir
  - Otros tipos de documentos aceptados

- **Imágenes del Documento**:
  - Anverso del documento (vista de alta resolución)
  - Reverso del documento (si se requiere)
  - Indicadores de calidad y estado de validación

- **Metadatos de Carga**:
  - Marca de tiempo de carga
  - Método de captura (cámara o carga de archivo)
  - Puntuación de calidad de imagen
  - Tamaño y formato de archivo

### Estado de Validación del Documento

Cada documento muestra su estado de validación:

- **✓ Válido**: El documento pasó todas las verificaciones de validación
- **⚠️ Advertencia**: El documento tiene problemas menores pero aún puede ser aceptable
- **✗ Inválido**: El documento falló la validación (expirado, manipulado, etc.)
- **⏳ Procesando**: El documento aún se está procesando

### Indicadores de Calidad del Documento

- **Puntuación de Claridad**: Qué tan claro y legible es el documento
- **Completitud**: Si todas las partes requeridas son visibles
- **Autenticidad**: Resultados de detección de manipulación
- **Estado de Expiración**: Si el documento es actualmente válido

:::tip Consejo de Revisión
Siempre revisa tanto el anverso como el reverso de los documentos cuando estén disponibles. Algunas características de seguridad o información importante pueden estar en el reverso.
:::

---

## Resultados de Extracción OCR

<img src="/img/smartEnroll-admin-kyc-review/4-ocr-extraction.png" alt="Resultados de Extracción OCR" />

La sección de extracción OCR (Reconocimiento Óptico de Caracteres) muestra todos los datos extraídos automáticamente del documento de identidad del usuario.

### Información Extraída

El sistema extrae y muestra la siguiente información de los documentos:

- **Información Personal**:
  - Nombre completo (como aparece en el documento)
  - Fecha de nacimiento
  - Lugar de nacimiento
  - Nacionalidad
  - Género

- **Detalles del Documento**:
  - Número de documento
  - Tipo de documento
  - Fecha de emisión
  - Fecha de expiración
  - Autoridad emisora
  - Ubicación de emisión

- **Información Adicional** (dependiente del documento):
  - Dirección
  - Tipo de sangre
  - Altura
  - Otros campos específicos del documento

### Indicadores de Calidad OCR

- **Puntuación de Confianza**: Qué tan confiado está el sistema en los datos extraídos (porcentaje)
- **Confianza a Nivel de Campo**: Puntuaciones de confianza individuales para cada campo extraído
- **Estado de Extracción**: Si la extracción fue exitosa para todos los campos requeridos

### Comparación de Datos

La interfaz resalta:

- **Coincidencias**: Campos que coinciden entre datos de registro y datos del documento
- **No Coincidencias**: Campos que no coinciden (pueden requerir atención)
- **Datos Faltantes**: Campos requeridos que no pudieron ser extraídos

:::important Importante
Revisa los resultados de extracción OCR cuidadosamente. Aunque el sistema es muy preciso, puede ser necesaria una verificación manual para campos críticos, especialmente cuando las puntuaciones de confianza son más bajas.
:::

---

## Puntuaciones de Incorporación y Comparaciones

<img src="/img/smartEnroll-admin-kyc-review/5-enrollment-scores-comparisons.png" alt="Puntuaciones y Comparaciones de Incorporación" />

Esta sección proporciona resultados integrales de puntuación y comparación del proceso de verificación biométrica.

### Puntuaciones Biométricas

- **Puntuación de Vivacidad**: 
  - Indica qué tan confiado está el sistema de que el usuario es una persona viva
  - Típicamente mostrado como un porcentaje (ej: 85%)
  - Puntuaciones más altas indican detección de vivacidad más fuerte

- **Puntuación de Comparación Facial**:
  - Puntuación de similitud entre la selfie y la foto del documento
  - Típicamente mostrado como un porcentaje (ej: 92%)
  - Indica qué tan bien coinciden las caras
  - Los umbrales son configurables por proyecto

### Desglose de Puntuaciones

La interfaz puede mostrar:

- **Puntuación General**: Puntuación combinada o ponderada de todos los pasos de verificación
- **Puntuaciones Paso a Paso**: Puntuaciones individuales para cada componente de verificación
- **Comparación de Umbral**: Si las puntuaciones cumplen con los umbrales configurados
- **Nivel de Riesgo**: Evaluación de riesgo general basada en las puntuaciones

### Resultados de Comparación

- **Coincidencia de Nombres**: 
  - Comparación entre nombre de registro y nombre del documento
  - Resalta coincidencias exactas y variaciones
  - Puede tener en cuenta variaciones comunes de nombres

- **Coincidencia Facial**:
  - Indicadores de comparación visual
  - Vista lado a lado de foto del documento y selfie
  - Porcentaje de confianza de coincidencia

- **Consistencia de Datos**:
  - Resultados de validación cruzada de campos
  - Verificaciones de consistencia en toda la información proporcionada

### Interpretación de Puntuaciones

- **Puntuaciones Altas (85%+)**: Coincidencia fuerte, típicamente auto-aprobada
- **Puntuaciones Medias (70-84%)**: Puede requerir revisión manual
- **Puntuaciones Bajas (menos de 70%)**: Probable rechazo o requiere investigación

:::warning Guías de Revisión
Las puntuaciones por debajo del umbral configurado deben ser cuidadosamente revisadas. Considera el contexto, calidad del documento y otros factores antes de tomar una decisión final.
:::

---

## Verificaciones de Antecedentes Penales

<img src="/img/smartEnroll-admin-kyc-review/6-criminal-record-checks.png" alt="Verificaciones de Antecedentes Penales" />

Si tu proyecto SmartEnroll está configurado con screening de base de datos, esta sección muestra los resultados de verificaciones de antecedentes penales y verificación de antecedentes.

### Resultados de Verificación de Antecedentes

- **Estado de Antecedentes Penales**:
  - Indicador de registro limpio
  - Indicador de registro encontrado
  - Estado de verificación (pendiente, completado, fallido)

- **Resultados de Screening de Base de Datos**:
  - Verificaciones de base de datos gubernamental
  - Verificación de lista negra
  - Screening de lista de vigilancia
  - Verificaciones de lista de sanciones

### Detalles de Verificación

Para cada verificación de antecedentes realizada:

- **Tipo de Verificación**: Tipo de verificación de antecedentes (antecedentes penales, sanciones, etc.)
- **Fuente de Base de Datos**: Qué base de datos fue consultada
- **Resultado**: Aprobado, Fallido o No se Encontró Coincidencia
- **Fecha Realizada**: Cuándo se ejecutó la verificación
- **Detalles**: Información adicional si se encontraron registros

### Indicadores de Riesgo

- **✓ Limpio**: No se encontraron registros en ninguna base de datos verificada
- **⚠️ Advertencia**: Problemas menores o registros encontrados que pueden requerir revisión
- **✗ Alerta**: Registros significativos encontrados que pueden requerir rechazo

### Información de Cumplimiento

- **Cumplimiento Regulatorio**: Si las verificaciones cumplen con requisitos regulatorios
- **Cobertura de Verificación**: Qué bases de datos se incluyeron en el screening
- **Frecuencia de Actualización**: Qué tan actualizada está la información de la base de datos

:::important Nota de Cumplimiento
Las verificaciones de antecedentes penales y verificaciones de antecedentes deben cumplir con regulaciones locales. Asegura que la configuración de tu proyecto cumpla con todos los requisitos legales aplicables para tu jurisdicción.
:::

---

## Veredicto de Resultado y Acciones

<img src="/img/smartEnroll-admin-kyc-review/7-result-veredict-and-action-to-change-it.png" alt="Veredicto de Resultado y Acciones" />

La sección final permite a los administradores revisar el resultado general de verificación y tomar acciones apropiadas.

### Estado de Verificación

El sistema muestra el estado actual de verificación:

- **✓ Aprobado**: El usuario ha pasado todos los requisitos de verificación
- **✗ Rechazado**: El usuario ha sido rechazado basado en resultados de verificación
- **⏳ Pendiente**: La verificación aún está en progreso
- **⚠️ En Revisión**: Se requiere revisión manual

### Decisión Automatizada

Si la toma de decisiones automatizada está habilitada:

- **Auto-Aprobado**: El sistema aprobó automáticamente basado en puntuaciones y verificaciones
- **Auto-Rechazado**: El sistema rechazó automáticamente basado en criterios fallidos
- **Marcado para Revisión**: El sistema marcó para revisión manual debido a puntuaciones límite o problemas

### Anulación Manual

Los administradores pueden cambiar manualmente el resultado de verificación:

#### Aprobar Usuario

- **Cuándo Usar**: 
  - Las puntuaciones son límite pero aceptables
  - Problemas de calidad de documento que no afectan la validez
  - Falsos positivos en verificaciones de antecedentes
  - Otras circunstancias atenuantes

- **Proceso**:
  1. Revisar todos los datos de verificación
  2. Haz clic en "Aprobar" o "Anular para Aprobar"
  3. Agregar notas opcionales explicando la decisión
  4. Confirmar la acción

#### Rechazar Usuario

- **Cuándo Usar**:
  - Requisitos de verificación fallidos
  - Preocupaciones de autenticidad del documento
  - Problemas de verificación de antecedentes
  - Violaciones de política

- **Proceso**:
  1. Revisar todos los datos de verificación
  2. Haz clic en "Rechazar" o "Anular para Rechazar"
  3. Seleccionar razón de rechazo de lista predefinida
  4. Agregar notas detalladas explicando el rechazo
  5. Confirmar la acción

#### Solicitar Información Adicional

- **Cuándo Usar**:
  - Información faltante o poco clara
  - Necesidad de documentación adicional
  - Aclaración requerida

- **Proceso**:
  1. Haz clic en "Solicitar Información"
  2. Especificar qué información se necesita
  3. Enviar notificación al usuario
  4. El usuario puede proporcionar información adicional y volver a enviar

### Historial de Decisiones

La interfaz mantiene un rastro de auditoría completo:

- **Todos los Cambios de Estado**: Historial de todos los cambios de estado
- **Tomadores de Decisión**: Quién tomó cada decisión
- **Marcas de Tiempo**: Cuándo se tomó cada decisión
- **Notas**: Comentarios y notas agregadas con cada decisión
- **Códigos de Razón**: Razones categorizadas para rechazos o aprobaciones

### Configuración de Notificaciones

- **Notificaciones de Usuario**: Si los usuarios son notificados de cambios de estado
- **Plantillas de Correo Electrónico**: Plantillas de correo electrónico personalizables para aprobaciones/rechazos
- **Integración de Webhook**: Notificaciones automáticas a tus sistemas

:::warning Importante
Las anulaciones manuales deben usarse con juicio y documentarse completamente. Todas las decisiones deben basarse en políticas claras y requisitos de cumplimiento.
:::

---

## Mejores Prácticas para Revisión Admin

### Flujo de Trabajo de Revisión

1. **Comenzar con Resumen**: Revisar la lista de usuarios e identificar usuarios que requieren atención
2. **Verificar Datos de Registro**: Verificar toda la información proporcionada durante el registro
3. **Revisar Documentos**: Examinar imágenes de documentos para calidad y autenticidad
4. **Verificar Extracción OCR**: Asegurar que los datos extraídos sean precisos y completos
5. **Analizar Puntuaciones**: Revisar puntuaciones biométricas y resultados de comparación
6. **Verificar Antecedentes**: Revisar cualquier resultado de verificación de antecedentes
7. **Tomar Decisión**: Basado en toda la información, tomar una decisión informada
8. **Documentar Acciones**: Agregar notas explicando cualquier decisión manual

### Señales de Alerta a Observar

- **Problemas de Documentos**:
  - Documentos expirados
  - Calidad de imagen deficiente
  - Signos de manipulación
  - Información no coincidente

- **Preocupaciones Biométricas**:
  - Puntuaciones de vivacidad bajas
  - Coincidencia facial deficiente
  - Múltiples intentos fallidos

- **Inconsistencias de Datos**:
  - Nombres no coincidentes
  - Discrepancias de fechas
  - Inconsistencias de direcciones

- **Alertas de Verificación de Antecedentes**:
  - Antecedentes penales
  - Coincidencias de lista de sanciones
  - Coincidencias de lista negra

### Consideraciones de Cumplimiento

- **Privacidad de Datos**: Asegurar que todo el manejo de datos cumpla con regulaciones de privacidad
- **Rastros de Auditoría**: Mantener registros completos de todas las decisiones
- **Consistencia**: Aplicar políticas consistentemente en todas las revisiones
- **Documentación**: Documentar todas las anulaciones manuales y excepciones

---

## Capacidades de Búsqueda y Filtrado

### Opciones de Búsqueda

- **Por Nombre**: Buscar usuarios por nombre, apellido o nombre completo
- **Por Correo Electrónico**: Encontrar usuarios por dirección de correo electrónico
- **Por Número de Documento**: Buscar usando números de identificación de documentos
- **Por Teléfono**: Encontrar usuarios por número de teléfono

### Opciones de Filtrado

- **Filtro de Estado**: Filtrar por estado de verificación (Pendiente, Aprobado, Rechazado, etc.)
- **Rango de Fechas**: Filtrar por fecha de registro o fecha de verificación
- **Rango de Puntuaciones**: Filtrar usuarios por puntuaciones biométricas
- **Tipo de Documento**: Filtrar por tipo de documento enviado
- **País**: Filtrar por país del usuario
- **Proyecto**: Filtrar por proyecto SmartEnroll específico

### Capacidades de Exportación

- **Exportación CSV**: Exportar listas de usuarios con campos de datos seleccionados
- **Informes PDF**: Generar informes detallados para usuarios específicos
- **Acciones Masivas**: Realizar acciones en múltiples usuarios a la vez

---

## Seguridad y Control de Acceso

### Acceso Basado en Roles

- **Admin**: Acceso completo a todas las funciones de revisión y anulaciones manuales
- **Revisor**: Puede revisar y hacer recomendaciones pero puede tener capacidades de anulación limitadas
- **Visualizador**: Acceso de solo lectura a información de revisión

### Registro de Auditoría

Todas las acciones se registran:

- **Acceso de Usuario**: Quién accedió a la información de qué usuario
- **Cambios de Decisión**: Todos los cambios de estado y quién los hizo
- **Exportaciones de Datos**: Cuándo y por quién se exportaron los datos
- **Reenvíos de Enlaces**: Cuándo se reenviaron enlaces de incorporación

### Protección de Datos

- **Encriptación**: Todos los datos están encriptados en tránsito y en reposo
- **Controles de Acceso**: El acceso basado en roles asegura que solo personal autorizado pueda ver información sensible
- **Políticas de Retención**: La retención de datos sigue políticas configuradas y requisitos regulatorios

---

## Soporte y Solución de Problemas

### Problemas Comunes

**Problema**: No puedo ver usuario en la lista
- **Solución**: Verificar filtros, asegurar que el usuario ha completado el registro, verificar asignación de proyecto

**Problema**: Documentos no se muestran
- **Solución**: Verificar formato de imagen, verificar que la carga fue exitosa, verificar compatibilidad del navegador

**Problema**: Puntuaciones no se actualizan
- **Solución**: Esperar a que el procesamiento se complete, actualizar la página, verificar estado del sistema

### Obtener Ayuda

- **Documentación**: Referirse a esta guía y otra documentación de SmartEnroll
- **Equipo de Soporte**: Contactar soporte de Verifik para asistencia técnica
- **Capacitación**: Solicitar sesiones de capacitación de administrador para tu equipo

---

## Preguntas Frecuentes

### ¿Cuánto tiempo toma para que aparezcan los resultados de verificación?

Los resultados típicamente aparecen en minutos después de la finalización del usuario, aunque verificaciones complejas de antecedentes pueden tomar más tiempo.

### ¿Puedo aprobar o rechazar usuarios en masa?

Sí, las acciones masivas están disponibles para usuarios que cumplen criterios específicos. Usa filtros para seleccionar grupos de usuarios.

### ¿Qué pasa cuando anulo una decisión automatizada?

La anulación se registra en el rastro de auditoría, y el estado del usuario se actualiza inmediatamente. Las notificaciones se envían basadas en tu configuración.

### ¿Cómo exporto datos de usuario para informes de cumplimiento?

Usa la función de exportación para generar informes CSV o PDF con campos de datos seleccionados.

### ¿Puedo personalizar la interfaz de revisión?

Algunas opciones de personalización están disponibles. Contacta soporte para necesidades de personalización avanzadas.

---

:::tip Consejo Profesional
Configura horarios de revisión regulares para asegurar procesamiento oportuno de verificaciones pendientes. Esto mejora la experiencia del usuario y mantiene el cumplimiento.
:::

:::warning Importante
Siempre revisa toda la información disponible antes de tomar decisiones manuales. Revisiones incompletas pueden llevar a problemas de cumplimiento o riesgos de seguridad.
:::
