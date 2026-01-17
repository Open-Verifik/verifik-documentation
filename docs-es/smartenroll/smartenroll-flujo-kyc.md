---
id: smartenroll-flujo-kyc
title: Flujo KYC de SmartEnroll - Guía para Usuarios Finales
description: Guía completa paso a paso del proceso de verificación KYC de SmartEnroll desde la perspectiva del usuario final
---

import { User, Mail, Phone, FileText, ScanFace, CheckCircle, AlertCircle } from 'lucide-react';

# Flujo KYC de SmartEnroll - Guía para Usuarios Finales

El **Flujo KYC de SmartEnroll** es un proceso integral de verificación de identidad que guía a los usuarios finales a través de una experiencia de incorporación segura. Este flujo combina múltiples métodos de verificación incluyendo validación de correo electrónico, verificación telefónica, escaneo de documentos y autenticación biométrica para asegurar el más alto nivel de seguridad y cumplimiento.

## Resumen

El Flujo KYC de SmartEnroll está diseñado para ser intuitivo y fácil de usar mientras mantiene estándares de seguridad estrictos. El proceso típicamente toma unos pocos minutos para completarse y guía a los usuarios a través de cada paso de verificación con instrucciones claras y retroalimentación visual.

## Resumen del Flujo

El proceso completo de verificación KYC consiste en los siguientes pasos:

1. **Registro de Cuenta** - Crear una cuenta con información personal
2. **Verificación de Correo Electrónico** - Verificar dirección de correo electrónico con código OTP
3. **Verificación de Teléfono** - Verificar número de teléfono vía SMS o WhatsApp
4. **Instrucciones KYC** - Revisar instrucciones para verificación de documentos y biométrica
5. **Selección de Documento** - Elegir el tipo de documento de identidad a verificar
6. **Carga de Documento** - Capturar y cargar el anverso y reverso del documento de identidad
7. **Procesamiento de Documento** - Extracción OCR y validación de datos del documento
8. **Verificación Biométrica** - Completar detección de vivacidad y reconocimiento facial
9. **Finalización** - Confirmación de verificación KYC exitosa

---

## Guía Paso a Paso

### Paso 1: Registro de Cuenta

<img src="/img/smartEnroll-end-user/1-sign-up-form.png" alt="Formulario de Registro" />

El proceso de incorporación comienza con la creación de una cuenta. Los usuarios deben proporcionar información esencial:

#### Información Requerida

- **Campos de Nombre**:
  - **Nombre**: Nombre del usuario (ej: "Sofia")
  - **Apellido**: Apellido del usuario (ej: "Davis")
  - :::important Importante
    Los usuarios deben ingresar su nombre exactamente como aparece en su documento de identidad para asegurar una verificación exitosa.
    :::

- **Información de Contacto**:
  - **Dirección de Correo Electrónico**: Una dirección de correo electrónico válida que se usará para verificación (ej: "sofia_554@verifik.co")
  - **Número de Teléfono**: Número de teléfono con selección de código de país (ej: +1 para Estados Unidos)
  - El número de teléfono será verificado en un paso posterior

- **Campos Opcionales** (si están habilitados por la organización):
  - **Empresa**: Nombre de la empresa del usuario
  - **Rol**: Rol o posición del trabajo del usuario (seleccionado de un menú desplegable)

#### Acuerdos Legales

Antes de continuar, los usuarios deben:

- **Aceptar Términos y Condiciones**: Casilla para aceptar los Términos y Condiciones
- **Aceptar Política de Privacidad**: Casilla para aceptar la Política de Privacidad

Ambos acuerdos son accesibles mediante enlaces clicables, permitiendo a los usuarios revisar los documentos legales completos antes de aceptar.

:::tip Consejo para el Usuario
Asegúrate de que toda la información sea precisa y coincida con tus documentos oficiales. Cualquier discrepancia puede causar retrasos en el proceso de verificación.
:::

Una vez que todos los campos requeridos estén completados y los acuerdos aceptados, los usuarios pueden hacer clic en el botón **Continuar** para proceder a la verificación de correo electrónico.

---

### Paso 2: Verificación de Correo Electrónico

<img src="/img/smartEnroll-end-user/2-verify-email.png" alt="Verificación de Correo Electrónico" />

Después del registro de cuenta, los usuarios deben verificar su dirección de correo electrónico para asegurar que sea válida y accesible.

#### Proceso de Verificación de Correo Electrónico

1. **Código de Verificación Enviado**: Un código de contraseña de un solo uso (OTP) se envía automáticamente a la dirección de correo electrónico proporcionada durante el registro.

2. **Ingresar Código de Verificación**: Se solicita a los usuarios ingresar el código de verificación de 6 dígitos recibido en su bandeja de entrada de correo electrónico.

3. **Validación del Código**: 
   - El código típicamente es válido por un tiempo limitado (generalmente 5-10 minutos)
   - Los usuarios pueden solicitar un nuevo código si el actual expira
   - Se pueden permitir múltiples intentos, pero intentos fallidos excesivos pueden bloquear temporalmente la cuenta

4. **Reenviar Código**: Si el código no ha llegado o ha expirado, los usuarios pueden hacer clic en "Reenviar Código" para recibir un nuevo código de verificación.

:::warning Importante
Revisa tu carpeta de spam o correo no deseado si no recibes el correo de verificación en unos minutos.
:::

Una vez que el correo electrónico es verificado, los usuarios proceden a la verificación telefónica.

---

### Paso 3: Verificación de Teléfono

<img src="/img/smartEnroll-end-user/3-verify-phone.png" alt="Verificación de Teléfono" />

La verificación telefónica asegura que el usuario tenga acceso al número de teléfono que proporcionó y agrega una capa adicional de seguridad.

#### Métodos de Verificación Telefónica

El método de verificación depende de la configuración de la organización:

- **Verificación SMS**: Un código de verificación se envía vía SMS al número de teléfono proporcionado
- **Verificación WhatsApp**: Un código de verificación se envía vía WhatsApp (si está habilitado)
- **Ambos Métodos**: Los usuarios pueden tener la opción de elegir entre SMS o WhatsApp

#### Proceso de Verificación Telefónica

1. **Seleccionar Método de Verificación**: Si hay múltiples métodos disponibles, los usuarios seleccionan su opción preferida (SMS o WhatsApp).

2. **Código Enviado**: Un código de verificación se envía al número de teléfono seleccionado.

3. **Ingresar Código de Verificación**: Los usuarios ingresan el código recibido en su teléfono.

4. **Reenviar Código**: Similar a la verificación de correo electrónico, los usuarios pueden solicitar un nuevo código si es necesario.

:::tip Consejo para el Usuario
Asegúrate de que tu teléfono tenga buena conectividad de red y pueda recibir mensajes SMS o WhatsApp antes de comenzar este paso.
:::

Después de una verificación telefónica exitosa, los usuarios proceden a la pantalla de instrucciones KYC.

---

### Paso 4: Instrucciones KYC

<img src="/img/smartEnroll-end-user/4-instructions-kyc.png" alt="Instrucciones KYC" />

Antes de comenzar el proceso de verificación de documentos y biométrica, se presentan a los usuarios instrucciones claras sobre qué esperar y cómo prepararse.

#### Lo que los Usuarios Necesitan Saber

La pantalla de instrucciones típicamente incluye:

- **Documentos Requeridos**: Información sobre qué documentos de identidad son aceptables (ej: ID Gubernamental, Pasaporte, Licencia de Conducir)
- **Requisitos de Documentos**: 
  - Los documentos deben ser válidos y no expirados
  - Los documentos deben ser claros y legibles
  - Puede requerirse el anverso y reverso
- **Requisitos Biométricos**:
  - Los usuarios necesitarán tomar una selfie para reconocimiento facial
  - Se recomienda buena iluminación
  - La cara debe ser claramente visible
- **Duración del Proceso**: Tiempo estimado para completar la verificación
- **Garantía de Privacidad**: Información sobre cómo se protegen sus datos

#### Opcional: Omitir Instrucciones

<img src="/img/smartEnroll-end-user/4.2-skip-kyc-instructions.png" alt="Omitir Instrucciones KYC" />

Algunas implementaciones pueden permitir a los usuarios omitir las instrucciones si ya están familiarizados con el proceso. Sin embargo, se recomienda revisar las instrucciones para usuarios primerizos.

:::tip Consejo para el Usuario
Tómate un momento para leer las instrucciones cuidadosamente. Estar preparado te ayudará a completar la verificación más rápido y evitar errores comunes.
:::

Una vez que los usuarios estén listos, proceden a la selección de documentos.

---

### Paso 5: Selección de Documentos

<img src="/img/smartEnroll-end-user/5-documents-initial-selection.png" alt="Selección de Documentos" />

Los usuarios deben seleccionar el tipo de documento de identidad que usarán para la verificación. Las opciones disponibles dependen de la configuración de la organización y el país del usuario.

#### Tipos de Documentos Disponibles

Los tipos de documentos comunes incluyen:

- **Documento de Identidad Gubernamental**: Tarjeta de identidad nacional, cédula de ciudadanía o identificación similar emitida por el gobierno
- **Pasaporte**: Pasaporte válido del país del usuario
- **Licencia de Conducir**: Licencia de conducir válida

#### Proceso de Selección de Documentos

1. **Ver Opciones**: Los usuarios ven una lista o cuadrícula de tipos de documentos disponibles con iconos o imágenes representando cada opción.

2. **Seleccionar Tipo de Documento**: Los usuarios tocan o hacen clic en su tipo de documento preferido.

3. **Confirmación**: Después de la selección, el sistema confirma el tipo de documento elegido y proporciona instrucciones específicas para ese documento.

<img src="/img/smartEnroll-end-user/6-document-type-option-selected.png" alt="Tipo de Documento Seleccionado" />

:::important Importante
Solo selecciona un tipo de documento que tengas disponible y que coincida con los documentos aceptados por la organización. Usar un tipo de documento no soportado resultará en falla de verificación.
:::

Después de seleccionar el tipo de documento, los usuarios proceden a la captura del documento.

---

### Paso 6: Carga de Documento - Anverso

<img src="/img/smartEnroll-end-user/7-upload-scanned-document-photo.png" alt="Opciones de Carga de Documento" />

Los usuarios tienen dos opciones para capturar su documento de identidad:

#### Métodos de Carga

1. **Captura con Cámara**: Usar la cámara del dispositivo para tomar una foto del documento físico en tiempo real
   - Proporciona mejor calidad y validación en tiempo real
   - Recomendado para la mayoría de los usuarios
   - Puede incluir guías superpuestas para ayudar a posicionar el documento correctamente

2. **Carga de Archivo**: Cargar una copia digital del documento desde el almacenamiento del dispositivo
   - Útil si el documento ya está digitalizado
   - Debe cumplir con los requisitos de calidad (claro, legible, no editado)

#### Guías para Captura de Documentos

Al usar la cámara:

- **Iluminación**: Asegura buena iluminación sin reflejos o sombras
- **Posición**: Coloca el documento en una superficie plana y contrastante
- **Enfoque**: Asegúrate de que el documento esté enfocado y todo el texto sea legible
- **Bordes**: Captura todo el documento dentro del marco
- **Sin Obstáculos**: Asegúrate de que nada esté cubriendo ninguna parte del documento

<img src="/img/smartEnroll-end-user/8-uploading-frontside-document.png" alt="Cargando Anverso" />

El sistema proporciona retroalimentación en tiempo real durante la captura:

- **Guías de Posicionamiento**: Guías visuales ayudan a los usuarios a alinear el documento correctamente
- **Verificación de Calidad**: Validación automática de calidad asegura que la imagen cumpla con los requisitos
- **Opción de Reintentar**: Los usuarios pueden volver a tomar la foto si la calidad es insuficiente

<img src="/img/smartEnroll-end-user/9-document-front-uploaded-preview.png" alt="Vista Previa del Anverso" />

Después de capturar el anverso, los usuarios ven una vista previa y pueden:
- **Confirmar**: Proceder si la imagen es clara y correcta
- **Volver a Tomar**: Capturar una nueva imagen si la actual no es satisfactoria

---

### Paso 7: Carga de Documento - Reverso

<img src="/img/smartEnroll-end-user/10-document-back-added-preview.png" alt="Vista Previa del Reverso" />

Muchos documentos de identidad requieren que se verifiquen tanto el anverso como el reverso. Después de capturar exitosamente el anverso, los usuarios proceden a capturar el reverso.

#### Proceso de Captura del Reverso

El proceso es similar a la captura del anverso:

1. **Seguir las Mismas Guías**: Usar los mismos requisitos de iluminación, posicionamiento y calidad
2. **Capturar Reverso**: Tomar una foto o cargar el reverso del documento
3. **Vista Previa**: Revisar la imagen capturada
4. **Confirmar o Volver a Tomar**: Proceder si está satisfecho, o volver a tomar si es necesario

:::important Importante
Algunos documentos pueden tener información importante en el reverso (como características de seguridad adicionales o fechas de expiración). Asegúrate de que ambos lados sean claramente visibles y legibles.
:::

Después de que ambos lados sean capturados, el sistema procesa los documentos.

---

### Paso 8: Procesamiento de Documento - Extracción OCR

<img src="/img/smartEnroll-end-user/11-ocr-extraction-for-document.png" alt="Extracción OCR" />

Una vez que ambos lados del documento están cargados, el sistema procesa automáticamente las imágenes usando tecnología de Reconocimiento Óptico de Caracteres (OCR).

#### Procesamiento OCR

El sistema extrae información clave del documento:

- **Información Personal**:
  - Nombre completo
  - Fecha de nacimiento
  - Número de documento
  - Nacionalidad
- **Detalles del Documento**:
  - Tipo de documento
  - Fecha de emisión
  - Fecha de expiración
  - Autoridad emisora
- **Características de Seguridad**:
  - Verificación de elementos de seguridad
  - Detección de manipulación
  - Verificaciones de autenticidad

#### Indicadores de Procesamiento

Durante el procesamiento, los usuarios típicamente ven:

- **Indicador de Carga**: Animación de progreso mostrando que el sistema está trabajando
- **Mensajes de Estado**: Actualizaciones sobre qué está verificando el sistema
- **Tiempo Estimado**: Cuánto tiempo podría tomar el procesamiento

:::tip Consejo para el Usuario
El procesamiento generalmente toma 10-30 segundos. Por favor sé paciente y no cierres el navegador o la aplicación durante este tiempo.
:::

Después de la extracción OCR, el sistema valida los datos extraídos.

---

### Paso 9: Validación de Documento

<img src="/img/smartEnroll-end-user/12-validations-for-document.png" alt="Validación de Documento" />

El sistema realiza verificaciones exhaustivas de validación en el documento y los datos extraídos.

#### Verificaciones de Validación

El sistema verifica:

1. **Autenticidad del Documento**:
   - Verificación de características de seguridad
   - Detección de manipulación
   - Validación de formato
   - Estado de expiración

2. **Consistencia de Datos**:
   - Comparación con información de registro (coincidencia de nombres)
   - Validación cruzada de campos
   - Validación de formato (fechas, números, etc.)

3. **Screening de Base de Datos** (si está habilitado):
   - Verificación de base de datos gubernamental
   - Verificaciones de listas negras
   - Verificaciones de antecedentes penales (si está configurado)

4. **Verificaciones de Calidad**:
   - Claridad de imagen
   - Legibilidad del texto extraído
   - Completitud de la información

#### Resultados de Validación

- **Éxito**: Si todas las validaciones pasan, los usuarios proceden a la verificación biométrica
- **Problemas Encontrados**: Si se detectan problemas, los usuarios pueden ver:
  - Mensajes de error específicos
  - Guía sobre cómo corregir problemas
  - Opción de reintentar la captura del documento

:::warning Importante
Si la validación falla, revisa cuidadosamente el mensaje de error. Problemas comunes incluyen:
- Documento expirado o aún no válido
- Nombre no coincide con la información de registro
- Calidad de imagen deficiente
- Documento no completamente visible en la foto
:::

Después de una validación exitosa del documento, los usuarios proceden a la verificación biométrica.

---

### Paso 10: Instrucciones Biométricas

<img src="/img/smartEnroll-end-user/13-biometric-instructions-for-liveness-biometric-validation.png" alt="Instrucciones Biométricas" />

Antes de comenzar la verificación biométrica, los usuarios reciben instrucciones sobre cómo completar el proceso de reconocimiento facial exitosamente.

#### Guías de Preparación

Las instrucciones típicamente incluyen:

- **Requisitos del Entorno**:
  - Buena iluminación (luz natural preferida)
  - Fondo liso
  - Sin cubiertas faciales (a menos que sea requerido por razones médicas/religiosas)
  - Quitarse las gafas si es posible (o asegurar que no haya reflejos)

- **Posicionamiento**:
  - Mirar la cámara directamente
  - Mantener la cara centrada en el marco
  - Mantener distancia apropiada (no muy cerca ni muy lejos)
  - Mantener la cabeza recta, no inclinada

- **Detección de Vivacidad**:
  - Los usuarios pueden necesitar realizar acciones específicas:
    - Parpadear los ojos
    - Girar la cabeza izquierda/derecha
    - Sonreír
    - Seguir indicaciones en pantalla
  - Estas acciones prueban que el usuario es una persona viva, no una foto o video

- **Qué Esperar**:
  - Duración del proceso
  - Número de intentos permitidos
  - Qué sucede si la verificación falla

:::tip Consejo para el Usuario
Encuentra un espacio tranquilo y bien iluminado antes de comenzar la verificación biométrica. Sigue las instrucciones en pantalla cuidadosamente para los mejores resultados.
:::

Después de revisar las instrucciones, los usuarios proceden a la captura biométrica real.

---

### Paso 11: Verificación Biométrica

<img src="/img/smartEnroll-end-user/14-biometric-validation-selfie-registration.png" alt="Verificación Biométrica" />

Este es el paso final de verificación donde los usuarios completan el reconocimiento facial y la detección de vivacidad.

#### Proceso de Verificación Biométrica

1. **Acceso a la Cámara**: El sistema solicita permiso para acceder a la cámara del dispositivo (si aún no se ha otorgado).

2. **Detección Facial**: 
   - El sistema detecta la cara del usuario en tiempo real
   - Las guías visuales ayudan a posicionar la cara correctamente
   - Los usuarios ven retroalimentación sobre posicionamiento e iluminación

3. **Detección de Vivacidad**:
   - Los usuarios realizan acciones específicas según se les indique:
     - Parpadear los ojos cuando se les indique
     - Girar la cabeza en direcciones especificadas
     - Sonreír o hacer expresiones faciales
   - Estas acciones prueban que el usuario está físicamente presente

4. **Coincidencia Facial**:
   - El sistema compara la selfie capturada con:
     - La foto del documento de identidad
     - La información de registro
   - Se calcula un puntaje de similitud (debe cumplir con el umbral configurado)

5. **Retroalimentación en Tiempo Real**:
   - Los usuarios ven retroalimentación inmediata sobre:
     - Posicionamiento facial
     - Calidad de iluminación
     - Completitud de acciones
     - Progreso general

#### Límites de Intentos

Los usuarios típicamente tienen 3-10 intentos (dependiendo de la configuración) para completar la verificación biométrica exitosamente. Si todos los intentos fallan, los usuarios pueden necesitar:
- Contactar soporte
- Reintentar todo el proceso
- Usar métodos de verificación alternativos (si están disponibles)

:::warning Importante
- Asegura buena iluminación y una vista clara de tu cara
- Sigue todas las instrucciones en pantalla cuidadosamente
- No uses fotos, videos o máscaras
- Mantén tu cara quieta durante la captura a menos que se te indique moverte
:::

Después de una verificación biométrica exitosa, los usuarios ven la pantalla de finalización.

---

### Paso 12: Finalización Exitosa del KYC

<img src="/img/smartEnroll-end-user/15-successful-kyc-completion.png" alt="Finalización del KYC" />

¡Felicitaciones! Al completar exitosamente todos los pasos de verificación, los usuarios ven una pantalla de confirmación.

#### Información de la Pantalla de Finalización

La pantalla de finalización típicamente muestra:

- **Mensaje de Éxito**: Confirmación de que la verificación KYC está completa
- **Estado de Verificación**: Resumen de pasos completados:
  - ✓ Correo electrónico verificado
  - ✓ Teléfono verificado
  - ✓ Documento verificado
  - ✓ Biométrica verificada
- **Próximos Pasos**: Información sobre qué sucede a continuación:
  - Activación de cuenta
  - Acceso a servicios
  - Redirección al panel de control o aplicación
- **Número de Referencia**: Un número de referencia de verificación único (si se proporciona)
- **Información de Soporte**: Detalles de contacto para soporte si es necesario

#### Qué Sucede a Continuación

Después de la finalización:

1. **Activación de Cuenta**: La cuenta del usuario típicamente se activa inmediatamente o dentro de un tiempo de procesamiento corto
2. **Redirección**: Los usuarios son redirigidos automáticamente a:
   - La aplicación de la organización
   - Un panel de bienvenida
   - Una URL personalizada configurada por la organización
3. **Notificación**: Los usuarios pueden recibir confirmación vía correo electrónico o SMS
4. **Acceso**: Los usuarios ahora pueden acceder a los servicios para los que se registraron

:::tip Éxito
¡Has completado exitosamente el proceso de verificación KYC! Tu cuenta ahora debería estar completamente activada y lista para usar.
:::

---

## Problemas Comunes y Soluciones

### Problemas de Verificación de Correo Electrónico

**Problema**: No recibir código de verificación
- **Solución**: Revisa la carpeta de spam/correo no deseado, espera unos minutos, o solicita un nuevo código

**Problema**: Código expirado
- **Solución**: Haz clic en "Reenviar Código" para recibir un nuevo código de verificación

### Problemas de Verificación Telefónica

**Problema**: No recibir código SMS
- **Solución**: Verifica la conectividad de red, asegura el número de teléfono correcto, intenta la opción de WhatsApp si está disponible

**Problema**: Código no funciona
- **Solución**: Asegúrate de estar ingresando el código correctamente, solicita un nuevo código si es necesario

### Problemas de Carga de Documentos

**Problema**: Documento no reconocido
- **Solución**: Asegúrate de que el documento sea válido, no expirado, y claramente visible en la foto

**Problema**: Calidad de imagen deficiente
- **Solución**: Mejora la iluminación, asegura que el documento esté plano y enfocado, vuelve a tomar la foto

**Problema**: Nombre no coincide
- **Solución**: Asegúrate de que el nombre en el documento coincida exactamente con el nombre ingresado durante el registro

### Problemas de Verificación Biométrica

**Problema**: Cara no detectada
- **Solución**: Mejora la iluminación, elimina obstáculos, asegura que la cara esté centrada y claramente visible

**Problema**: Detección de vivacidad falla
- **Solución**: Sigue las instrucciones cuidadosamente, realiza las acciones según se indique, asegura buena iluminación

**Problema**: Coincidencia facial falla
- **Solución**: Asegúrate de estar usando el documento y la selfie de la misma persona, verifica iluminación y posicionamiento

---

## Mejores Prácticas para Usuarios

### Antes de Comenzar

1. **Preparar Documentos**: Ten tu documento de identidad válido listo
2. **Verificar Entorno**: Asegura buena iluminación y un espacio tranquilo
3. **Conexión Estable**: Usa una conexión a internet estable
4. **Tiempo**: Reserva 10-15 minutos para completar el proceso

### Durante la Verificación

1. **Seguir Instrucciones**: Lee y sigue todas las instrucciones en pantalla cuidadosamente
2. **Tomar tu Tiempo**: No te apresures a través de los pasos
3. **La Calidad Importa**: Asegura que las fotos sean claras y los documentos sean completamente visibles
4. **Ser Paciente**: El procesamiento puede tomar unos momentos

### Si Encuentras Problemas

1. **Leer Mensajes de Error**: Los mensajes de error proporcionan guía específica
2. **Reintentar**: Muchos problemas pueden resolverse reintentando el paso
3. **Contactar Soporte**: Si los problemas persisten, contacta al equipo de soporte de la organización
4. **Verificar Requisitos**: Asegura que cumples con todos los requisitos (documentos válidos, información correcta)

---

## Privacidad y Seguridad

### Protección de Datos

- Toda la información personal está encriptada y almacenada de forma segura
- Los documentos se procesan de forma segura y no se comparten con partes no autorizadas
- Los datos biométricos se procesan de acuerdo con estándares de seguridad estrictos
- Tus datos están protegidos en cumplimiento con regulaciones de privacidad

### Qué Información se Recopila

- Información de registro (nombre, correo electrónico, teléfono)
- Imágenes de documentos de identidad y datos extraídos
- Datos biométricos (reconocimiento facial)
- Estado de verificación y resultados

### Cómo se Usa la Información

- Verificación de identidad y cumplimiento KYC
- Seguridad de cuenta y prevención de fraude
- Acceso a servicios y gestión de cuenta
- Cumplimiento con requisitos legales y regulatorios

---

## Soporte

Si necesitas asistencia durante el proceso de verificación KYC:

1. **Revisar Esta Guía**: Revisa la sección relevante para tu problema
2. **Contactar Soporte**: Comunícate con el equipo de soporte de la organización
3. **Problemas Técnicos**: Reporta problemas técnicos inmediatamente

:::tip ¿Necesitas Ayuda?
No dudes en contactar soporte si encuentras algún problema. El equipo de soporte está ahí para ayudarte a completar el proceso de verificación exitosamente.
:::

---

## Preguntas Frecuentes

### ¿Cuánto tiempo toma el proceso KYC?

El proceso completo típicamente toma 10-15 minutos, dependiendo de qué tan rápido puedas completar cada paso y el tiempo de procesamiento para la verificación de documentos y biométrica.

### ¿Qué pasa si mi documento está expirado?

Los documentos expirados generalmente no son aceptados. Necesitarás usar un documento de identidad válido y no expirado.

### ¿Puedo usar un pasaporte en lugar de una identificación nacional?

Sí, si los pasaportes están habilitados como tipo de documento aceptable por la organización. Revisa la pantalla de selección de documentos para opciones disponibles.

### ¿Qué pasa si fallo la verificación biométrica?

Típicamente tienes múltiples intentos (3-10 dependiendo de la configuración). Si todos los intentos fallan, contacta soporte para asistencia.

### ¿Mis datos están seguros?

Sí, todos los datos están encriptados y procesados de acuerdo con estándares estrictos de seguridad y privacidad. Tu información está protegida y solo se usa para propósitos de verificación.

### ¿Puedo completar el proceso en móvil?

Sí, el Flujo KYC de SmartEnroll está diseñado para funcionar tanto en escritorio como en dispositivos móviles. Los dispositivos móviles con buenas cámaras son en realidad preferidos para la captura de documentos y biométrica.

---

:::tip Consejo Profesional
Completa el proceso en una sesión para evitar tener que reiniciar. Asegúrate de tener todos los documentos requeridos y una buena conexión a internet antes de comenzar.
:::

:::warning Importante
Nunca compartas tus códigos de verificación o permitas que otros completen el proceso de verificación en tu nombre. Esto es un riesgo de seguridad y puede resultar en suspensión de cuenta.
:::
