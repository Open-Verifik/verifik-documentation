---
id: "es-docs-es-smartenroll-smartenroll-2-formulario-de-registro-3"
title: "SmartEnroll — 2. Formulario de Registro"
sourcePath: "docs-es/smartenroll/smartenroll.md"
locale: "es"
category: "smartenroll"
tags:
  - "smartenroll"
sourceAnchor: "2. Formulario de Registro"
---

# SmartEnroll

**SmartEnroll** es una solución sin código diseñada para proporcionar incorporaciones seguras y fluidas para los usuarios. Esta plataforma permite a las empresas ofrecer diversas verificaciones de incorporación, incluyendo verificación de correo electrónico, teléfono y biométrica, validaciones de documentos, verificaciones AML, verificaciones de manipulación y más. Todas estas características están integradas en nuestro proyecto asegurando una experiencia fácil de usar y segura. Con SmartEnroll, las empresas pueden integrar fácilmente estas soluciones KYC sin la necesidad de codificación compleja o desarrollo de infraestructura.

## 2. Formulario de Registro

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

En este paso, el usuario puede configurar la verificación de documentos para validación de identidad.

-   **Documentos Válidos**: La plataforma admite el escaneo y verificación de varios documentos emitidos por el gobierno. Los usuarios pueden seleccionar qué tipos de documentos son aceptables para su proceso KYC. Las opciones típicamente incluyen:
    -   Documento de Identidad Gubernamental
    -   Pasaporte
    -   Licencia de Conducir
-   **Establecer un Límite de Intentos**: Esto permite a los usuarios definir cuántos escaneos de documentos fallidos se permiten antes de que el proceso se bloquee. El rango es personalizable, desde 3 hasta 10 intentos. Esto es crítico para controlar potenciales intentos fraudulentos y asegurar un uso eficiente de recursos.

-   **Métodos de Verificación de ID**:
    -   **Opción 1**: Cargar una copia digital de un documento de identidad.
    -   **Opción 2**: Usar la cámara del dispositivo para escanear la identificación física para verificación en tiempo real.
-   **Screening de Bases de Datos**: Se pueden realizar verificaciones adicionales contra bases de datos gubernamentales. Los usuarios pueden agregar:
    -   **Verificación de ID con Fuentes Gubernamentales**: Compara la información extraída con registros oficiales para verificar la autenticidad del documento.
    -   **Verificación de Antecedentes Penales**: Consulta bases de datos para ver si el individuo tiene antecedentes penales.

:::tip Nota Clave
Este paso es donde el usuario configura métodos de verificación para autenticar documentos con una capa adicional de seguridad mediante verificaciones externas.
:::

:::info Países permitidos vs países de documentos
**Países permitidos** (configuración básica) controlan quién puede registrarse. **Países de documentos** (este paso) controlan qué países y categorías de documentos aceptas. No hay un interruptor único que cree configuraciones de documentos para todos los países: agrega un bloque por país y activa solo las categorías que tengan plantillas en el catálogo.
:::

:::warning El catálogo vacío es por categoría
“No se encontraron documentos para este país en el catálogo” aplica a una **categoría específica** (Documento de identidad, Licencia o Pasaporte), no necesariamente a todo el país. Por ejemplo, **Estados Unidos** puede mostrar sin plantillas de identidad gubernamental, mientras que muchas **licencias de conducir estatales** están disponibles bajo **Licencia**. Deja inactivas las categorías vacías; activa Licencia (o Pasaporte) cuando aparezcan esas plantillas. Si una fila de país está incompleta o el país no está seleccionado, el formulario bloqueará el guardado hasta que elijas un país y mantengas al menos una categoría activa válida.
:::

---
