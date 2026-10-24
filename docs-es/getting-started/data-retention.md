---
id: data-retention
title: Retención de datos
description: Cómo Verifik conserva, enmascara y purga imágenes de documentos, campos extraídos e imágenes faciales.
slug: /getting-started/data-retention
---

# Retención de datos

La configuración de la cuenta, del proyecto y del flujo de proyecto decide cuánto tiempo Verifik conserva las imágenes del documento, los campos extraídos guardados con una validación de documento y las imágenes faciales. La política se sella en cada registro nuevo. Un cambio posterior no reescribe los registros que ya existen.

Los registros de facturación, los cargos de créditos y el historial de uso permanecen cuando se purgan las imágenes.

## Modos

| Modo | Efecto |
| --- | --- |
| `store` | El registro se conserva. Define `retentionHours` con un número mayor que 0 para que sea elegible de purga después de esas horas. Omite `retentionHours` para conservarlo sin límite de tiempo. |
| `ephemeral` | El registro queda elegible de purga al final de la retención del webhook cuando hay un webhook, y en la siguiente ejecución de purga cuando no hay webhook. `retentionHours` se ignora. |
| `none` | Las imágenes del documento y los campos de extracción guardados usan el mismo plazo que `ephemeral`. Una imagen facial en este modo no se escribe. Las respuestas de SmartEnroll omiten las URL alojadas y reportan `hasFrontImage` o `hasBackImage`. |

En un escaneo de documento de SmartEnroll, una regla `store` que incluye `retentionHours` usa igual la retención de 24 horas, o la retención del webhook cuando hay un webhook. `store` sin horas conserva esa imagen.

`ephemeral` y `none` comparten el plazo de purga. Se distinguen en las imágenes faciales y en si SmartEnroll devuelve URL alojadas.

## Tipos que esta política aplica

| Clave | Qué cubre |
| --- | --- |
| `documentImages` | Fotos frontal y reverso de una validación de documento, incluidos los archivos alojados de `url` y `backUrl`. |
| `ocrExtraction` | La extracción guardada en esa validación. |
| `faceImages` | Selfies e imágenes del rostro del documento guardadas para un registro o un inicio de sesión. |

Define `mode` en cada clave. Un `mode` de primer nivel `none` se copia a las claves que dejes sin definir. Un `store` o `ephemeral` de primer nivel no reemplaza esas claves. La petición fiable define cada clave que te importe.

## Qué queda fuera de esta política

Estos registros siguen sus propias reglas de almacenamiento. Guardar un modo de retención no los purga:

- Fotos de prueba de vida del documento
- Puntuaciones de prueba de vida y resultados de la sesión
- Cuerpos de webhook, incluida la extracción que viaja en el payload
- Registros de respuestas de la API
- Plantillas biométricas y colecciones de rostros que Smart Access usa para reconocer a una persona que regresa
- Credenciales cifradas de Human Auth, artefactos de conocimiento cero y el video de prueba de vida
- La ubicación de almacenamiento elegida para una credencial de Human Auth
- Validaciones de documento e imágenes de identidad creadas antes de que existiera un sello de retención

Las imágenes de documento alojadas usan URL ordinarias. Una URL sigue siendo válida hasta que ese archivo se purga. Trata cada URL de imagen como sensible.

## Precedencia

La política efectiva se resuelve en este orden:

1. **Cuenta.** La política guardada en la configuración del cliente.
2. **Proyecto.** `dataRetention` en el proyecto reemplaza los campos de la cuenta que define.
3. **Flujo de proyecto.** `dataRetention` en el flujo reemplaza los campos del proyecto que define.

Un nivel que omite un campo deja el valor más amplio. Sin nada configurado, cada tipo aplicado es `store` sin límite de tiempo, y la retención del webhook es de 24 horas.

Una política guardada puede tardar cerca de un minuto en aplicarse en cada instancia en ejecución.

## Retención del webhook

`webhookHoldHours` es un entero de 24 a 72. El valor predeterminado es 24.

Cuando hay un webhook, los registros `none` y `ephemeral` permanecen al menos ese tiempo para que la entrega pueda terminar. Después de que se entregó un webhook de ese registro, las imágenes en esos modos pueden eliminarse en una purga posterior. Las URL de imagen del payload pueden dejar de funcionar después de esa entrega. Copia cualquier imagen que todavía necesites mientras procesas el webhook.

Los eventos terminales de SmartEnroll son `onboarding_app_registration_completed`, `onboarding_app_registration_needs_manual_verification`, `onboarding_app_registration_completed_without_kyc` y `onboarding_app_registration_failed`. Consulta [Webhooks de Smart Enroll (KYC)](/verifik-es/resources/smart-enroll-kyc-webhooks).

La política de retención no redacta el cuerpo del webhook. El payload puede incluir la extracción completa.

## Qué elimina, enmascara y conserva una purga

Cuando se purga una validación de documento:

| Acción | Campos |
| --- | --- |
| Eliminado | Archivos de imagen alojados. Se limpian `url`, `backUrl` y la lista de archivos. |
| Enmascarado | La extracción guardada y `fullName`. |
| En claro | `documentNumber`, nombre, apellido, parámetros de la petición y resultados de screening guardados en la validación. |
| La fila permanece | Estado, tipo y `createdAt`, así los conteos de uso que leen la fila siguen incluyéndola. |

La purga de una imagen facial borra los bytes de la imagen guardada.

Una copia cifrada de la extracción completa se elimina 30 días después del escaneo, también cuando los campos visibles ya estaban enmascarados.

Los cargos de créditos se registran cuando un escaneo tiene éxito. Una purga deja en su sitio los registros de facturación y el historial de uso, y no revierte un cargo.

Eliminar una validación de documento o un registro de aplicación quita los archivos de imagen guardados y borra la fila de validación. El historial de uso construido a partir de esas filas se reduce con esa eliminación. El trabajo de purga deja la fila en su sitio.

## Cuándo corre la purga

Un registro queda elegible en `retention.purgeAfter`. Una purga programada elimina los registros elegibles aproximadamente cada 15 minutos. La eliminación ocurre en la siguiente ejecución exitosa, así que el archivo puede permanecer un corto tiempo después de `purgeAfter`. Cada ejecución procesa un lote limitado. Una cola grande toma más de una ejecución.

No hay un endpoint de borrado manual. `allowManualDelete` en un objeto de política se guarda con la política y no abre una llamada de borrado aparte.

## Las políticas aplican a registros nuevos

El sello se escribe cuando se crea el registro. Los registros que ya están en la cuenta conservan el sello que tienen. Los registros sin sello permanecen como están. Pasar una cuenta a `none` deja el historial que se guardó antes de ese cambio.

## Escaneos sin proyecto

`POST /v2/ocr/scan-prompt` y `POST /v2/ocr/scan-agent` siguen esta regla cuando la llamada no está ligada a un proyecto:

- La imagen no se sube a almacenamiento alojado.
- `url` y `backUrl` en la respuesta son URI `data:` de la imagen que enviaste. Pertenecen a esa respuesta. Persiste la extracción y guarda tu propia copia de la imagen si todavía necesitas la foto.
- El cuerpo de la respuesta incluye la extracción completa.
- La fila de validación que se guarda almacena una extracción enmascarada y un `fullName` enmascarado. `documentNumber` en esa fila permanece en claro.
- La copia cifrada de la extracción completa se elimina a los 30 días.

El detalle está en [Escaneo Prompt](/verifik-es/escaneo-prompt) y [Escaneo Agent](/verifik-es/ocr-engines/escaneo-agente).

Un escaneo de documento de SmartEnroll está ligado a un registro de aplicación y usa la política resuelta de cuenta, proyecto y flujo. La respuesta incluye la extracción sin enmascarar. La fila guardada se enmascara cuando `ocrExtraction` es `none`. En `none` y `ephemeral`, la respuesta omite las URL alojadas.

## Smart Access

Los flujos de inicio de sesión de Smart Access (flujos de proyecto `login`) sellan la retención en el selfie de acceso.

- `faceImages` en `none` significa que el selfie de acceso no se guarda.
- `ephemeral` guarda el selfie hasta la siguiente ejecución de purga. Los flujos de acceso se sellan sin retención de webhook.
- `store` conserva el selfie, durante `retentionHours` cuando ese número está definido.

El reconocimiento de una persona que regresa usa plantillas biométricas y colecciones de rostros. Esas plantillas permanecen cuando cambias esta política. Los resultados de prueba de vida del acceso y los cuerpos de webhook del acceso también permanecen.

## Human Auth

Las validaciones de documento creadas durante el onboarding de Human Auth usan las reglas de SmartEnroll de arriba.

Los proyectos de Human Auth pueden fijar `faceImages` en `none`. En ese modo el selfie no se guarda, y la comparación del documento con el selfie, que lee el selfie guardado, no se ejecuta.

El video de prueba de vida, los artefactos de conocimiento cero y la credencial cifrada que produce el paso de almacenamiento siguen sus propias reglas. Elegir una ubicación para esa credencial es independiente de esta política. Consulta [HumanAuthn](/verifik-es/biometrics/humanauthn).

## El objeto `dataRetention`

Envía este objeto en [Actualizar un proyecto](/verifik-es/resources/proyectos/actualizar-un-proyecto) (`PUT /v3/projects/{id}`). Envía `null` para volver a heredar la política de la cuenta.

La misma forma en un flujo de proyecto reemplaza al proyecto para los registros creados en ese flujo. Consulta [Crear un flujo de proyecto](/verifik-es/resources/project-flows/create-a-project-flow).

```json
{
  "dataRetention": {
    "mode": "none",
    "webhookHoldHours": 24,
    "types": {
      "documentImages": { "mode": "none" },
      "ocrExtraction": { "mode": "none" },
      "faceImages": { "mode": "store", "retentionHours": 72 }
    }
  }
}
```

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `mode` | `store`, `ephemeral` o `none` | Línea base de la cuenta o del reemplazo. Define también cada tipo. |
| `webhookHoldHours` | entero, 24–72 | Retención mínima cuando hay un webhook. Predeterminado 24. |
| `types.documentImages.mode` | modo | Fotos del documento. |
| `types.documentImages.retentionHours` | número u omitido | Se usa cuando ese tipo es `store` y el número es mayor que 0. Se ignora en las imágenes de documento de SmartEnroll. |
| `types.ocrExtraction` | la misma forma | Extracción guardada. |
| `types.faceImages` | la misma forma | Selfie e imágenes del rostro del documento. `none` significa que el selfie no se escribe. |

Otras claves de tipo pueden estar presentes en una política guardada. La purga no las aplica.
