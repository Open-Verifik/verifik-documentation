---
id: data-retention
title: Retención de datos
description: Cómo Verifik conserva, enmascara y purga imágenes de documentos, campos extraídos e imágenes faciales.
slug: /getting-started/data-retention
---

# Retención de datos

La configuración de la cuenta, del proyecto y del flujo de proyecto decide cuánto tiempo Verifik conserva las imágenes del documento, los campos extraídos guardados con una validación de documento, las imágenes faciales y las imágenes de prueba de vida del documento. La política se sella en cada registro nuevo. Un cambio posterior deja como están los registros que ya existen.

Los registros de facturación, los cargos de créditos y el historial de uso permanecen cuando se purgan las imágenes.

## Modos

| Modo | Efecto |
| --- | --- |
| `store` | El registro se conserva. Define `retentionHours` con un número mayor que 0 para que sea elegible de purga después de esas horas. Omite `retentionHours` para conservarlo sin límite de tiempo. `retentionHours` se respeta, también en SmartEnroll. |
| `ephemeral` | El registro se conserva durante la retención del webhook cuando hay un webhook, y después queda elegible de purga. |
| `none` | El registro no se conserva después de la retención del webhook. Una imagen facial en este modo se conserva hasta que termina la retención, para que la comparación del documento con el selfie pueda ejecutarse, y después se elimina. Una imagen de prueba de vida del documento en este modo no se guarda. |

`webhookHoldHours` aplica cuando hay un webhook.

## Tipos que esta política aplica

| Clave | Qué cubre |
| --- | --- |
| `documentImages` | Fotos frontal y reverso de una validación de documento. |
| `ocrExtraction` | La extracción guardada en esa validación. |
| `faceImages` | Selfies e imágenes del rostro del documento para un registro o un inicio de sesión. |
| `documentLiveness` | La imagen de una prueba de vida del documento. `none` significa que esa imagen no se guarda. |

Un modo en la política se aplica a cada tipo vigente que no define el suyo. Un modo en un tipo reemplaza el modo de la política solo para ese tipo.

`livenessResults` y `apiResponseLogs` no son tipos de retención. La API los rechaza.

## Qué queda fuera de esta política

Estos registros siguen sus propias reglas de almacenamiento:

- Plantillas biométricas y colecciones de rostros que Smart Access usa para reconocer a una persona que regresa
- Credenciales cifradas de Human Auth, artefactos de conocimiento cero y el video de prueba de vida
- La ubicación de almacenamiento elegida para una credencial de Human Auth
- Validaciones de documento e imágenes de identidad creadas antes de que existiera un sello de retención

Las imágenes de documento alojadas son privadas. `url` y `backUrl` son enlaces `https` que caducan al cabo de una hora. Nunca son URI `data:`. Trata cada enlace de imagen como sensible.

## Precedencia

La política efectiva se resuelve en este orden. Un ajuste más estricto no puede aflojarse en un nivel inferior. `none` es más estricto que `ephemeral`, y `ephemeral` es más estricto que `store`.

1. **Cuenta.** La política guardada en la configuración del cliente. Es el valor predeterminado. Sin nada configurado, cada tipo aplicado es `store` sin límite de tiempo, y la retención del webhook es de 24 horas.
2. **Proyecto.** `dataRetention` en el proyecto reemplaza los campos de la cuenta que define, cuando el modo nuevo es igual o más estricto.
3. **Flujo de proyecto.** `dataRetention` en el flujo reemplaza los campos del proyecto que define, con la misma regla.

Un escaneo que no está ligado a un proyecto usa la política de la cuenta. El valor predeterminado es `store`.

## Retención del webhook

`webhookHoldHours` es un entero de 24 a 72. El valor predeterminado es 24.

En SmartEnroll, las imágenes `none` y `ephemeral` quedan elegibles de purga solo después de que se entrega el webhook terminal del onboarding. Ese evento es `onboarding_app_registration_completed` o `onboarding_app_registration_completed_without_kyc`. El momento de la purga es el más tardío entre esa entrega y el fin de la retención. Los webhooks anteriores del mismo registro no inician la purga.

Copia cualquier imagen que todavía necesites mientras procesas esa entrega. El enlace puede estar ya dentro de su hora de vida.

Los cuerpos de webhook guardados se redactan después de la entrega. Consulta [Webhooks de Smart Enroll (KYC)](/verifik-es/resources/smart-enroll-kyc-webhooks).

## Qué elimina, enmascara y conserva una purga

Cuando se purga una validación de documento:

| Acción | Campos |
| --- | --- |
| Eliminado | Archivos de imagen alojados. Se limpian `url`, `backUrl` y la lista de archivos. |
| Enmascarado | Los campos personales que permanecen en la fila, incluida la extracción guardada. El enmascarado conserva los últimos 4 caracteres. |
| Conservado | La fila de validación, con estado, tipo y `createdAt`, así los conteos de uso que leen la fila siguen incluyéndola. |

La purga de una imagen facial borra los bytes de la imagen guardada después de la retención.

La respuesta HTTP de un escaneo incluye la extracción completa. Solo los valores guardados en el registro están enmascarados.

Los cargos de créditos se registran cuando un escaneo tiene éxito. Una purga deja en su sitio los registros de facturación y el historial de uso, y no revierte un cargo.

## Borrado manual

Cuando `allowManualDelete` es true en la política que aplica, estas llamadas eliminan las imágenes guardadas y los datos personales guardados de ese registro:

```
DELETE https://api.verifik.co/v2/document-validations/{id}/files
DELETE https://api.verifik.co/v2/app-registrations/{id}/data
POST https://api.verifik.co/v2/data-retention/erase
```

Usa el id de la validación de documento, el id del registro de aplicación, o la llamada de borrado del registro que quieras quitar. Hace falta el mismo encabezado de autorización que en el resto de la API. Cuando `allowManualDelete` es false, las llamadas se rechazan.

## Cuándo corre la purga

Un registro queda elegible en `retention.purgeAfter`. Para una imagen `none` o `ephemeral` de SmartEnroll, ese momento es el más tardío entre la entrega del webhook terminal y el fin de `webhookHoldHours`. Una purga programada elimina los registros elegibles aproximadamente cada 15 minutos. La eliminación ocurre en la siguiente ejecución exitosa, así que el archivo puede permanecer un corto tiempo después de quedar elegible. Cada ejecución procesa un lote limitado. Una cola grande toma más de una ejecución.

## Las políticas aplican a registros nuevos

El sello se escribe cuando se crea el registro. Los registros que ya están en la cuenta conservan el sello que tienen. Los registros sin sello permanecen como están. Pasar una cuenta a `none` deja el historial que se guardó antes de ese cambio.

## Escaneos sin proyecto

`POST /v2/ocr/scan-prompt` y `POST /v2/ocr/scan-agent` usan la política de la cuenta cuando la llamada no está ligada a un proyecto. El valor predeterminado es `store`.

- `url` y `backUrl` son enlaces `https` a las imágenes guardadas. Caducan al cabo de una hora. Nunca son URI `data:`.
- El cuerpo de la respuesta incluye la extracción completa.
- Los valores guardados en la validación están enmascarados. Después de una purga, los campos personales que permanecen se enmascaran dejando los últimos 4 caracteres.

Un escaneo de documento de SmartEnroll está ligado a un registro de aplicación y usa la política de cuenta, proyecto y flujo, incluida la regla del padre más estricto.

El detalle está en [Escaneo Prompt](/verifik-es/escaneo-prompt) y [Escaneo Agent](/verifik-es/ocr-engines/escaneo-agente).

## Smart Access

Los flujos de inicio de sesión de Smart Access (flujos de proyecto `login`) aplican esta política al selfie de acceso.

`faceImages` en `none` conserva el selfie hasta que termina la retención del webhook, para que la comparación del documento con el selfie pueda ejecutarse, y después lo elimina. `store` lo conserva, durante `retentionHours` cuando ese número está definido. `ephemeral` lo conserva durante la retención.

Reconocer a una persona que regresa usa plantillas biométricas y colecciones de rostros. Esas plantillas permanecen cuando cambias esta política. `livenessResults` no es un tipo de retención. Los cuerpos de webhook de acceso que se guardaron se redactan después de la entrega.

## Human Auth

Las validaciones de documento creadas durante el onboarding de Human Auth usan las reglas de arriba, incluida la precedencia y la purga del webhook terminal.

`faceImages` en `none` conserva el selfie del onboarding hasta que termina la retención, para que la comparación del documento con el selfie pueda ejecutarse. `documentLiveness` en `none` significa que la imagen de prueba de vida del documento no se guarda.

El video de prueba de vida, los artefactos de conocimiento cero y la credencial cifrada que produce el paso de almacenamiento siguen sus propias reglas. Elegir una ubicación para esa credencial es independiente de esta política. Consulta [HumanAuthn](/verifik-es/biometrics/humanauthn).

## El objeto `dataRetention`

Envía este objeto en [Actualizar un proyecto](/verifik-es/resources/proyectos/actualizar-un-proyecto) (`PUT /v3/projects/{id}`). Envía `null` para volver a heredar la política de la cuenta. Un proyecto no puede definir un modo más laxo que la cuenta.

La misma forma en un flujo de proyecto reemplaza al proyecto para los registros creados en ese flujo, cuando el modo del flujo es igual o más estricto. Consulta [Crear un flujo de proyecto](/verifik-es/resources/project-flows/create-a-project-flow).

```json
{
  "dataRetention": {
    "mode": "none",
    "webhookHoldHours": 24,
    "allowManualDelete": true,
    "types": {
      "documentImages": { "mode": "none" },
      "ocrExtraction": { "mode": "none" },
      "faceImages": { "mode": "store", "retentionHours": 72 },
      "documentLiveness": { "mode": "none" }
    }
  }
}
```

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `mode` | `store`, `ephemeral` o `none` | Línea base. Se aplica a cada tipo vigente que no define el suyo. |
| `webhookHoldHours` | entero, 24–72 | Retención mínima cuando hay un webhook. Predeterminado 24. |
| `allowManualDelete` | boolean | En true, las llamadas de borrado manual están permitidas. |
| `types.documentImages` | modo y `retentionHours` opcional | Fotos del documento. |
| `types.ocrExtraction` | la misma forma | Extracción guardada. |
| `types.faceImages` | la misma forma | Selfie e imágenes del rostro del documento. `none` conserva el selfie hasta la retención para que la comparación pueda ejecutarse. |
| `types.documentLiveness` | la misma forma | Imagen de prueba de vida del documento. `none` significa que no se guarda. |

`livenessResults` y `apiResponseLogs` se rechazan.
