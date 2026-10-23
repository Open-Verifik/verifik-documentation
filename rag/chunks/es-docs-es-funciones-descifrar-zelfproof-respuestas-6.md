---
id: "es-docs-es-funciones-descifrar-zelfproof-respuestas-6"
title: "Descifrar un ZelfProof — Respuestas"
sourcePath: "docs-es/funciones/descifrar-zelfproof.md"
locale: "es"
category: "funciones"
tags:
  - "funciones"
sourceAnchor: "Respuestas"
---

# Descifrar un ZelfProof

## Respuestas

```json
{
    "validationError": "missing zelfProof\n"
}
```

* **200 OK**: La solicitud fue exitosa, y los datos descifrados del **ZelfProof** se devuelven en formato JSON.

  ```json
  {
    "publicData": {
      "variable1": "string",
      "variable2": "string",
      "variable3": "string"
    },
    "difficulty": "EASY",
    "faceCropBase64": "string",
    "metadata": {
      "mnemonic": "string",
      "variable2": "string",
      "variable3": "string"
    },
    "identifier": "string"
  }
  ```
* **400 Solicitud Incorrecta**: Hubo un error con la solicitud. Los códigos de error posibles incluyen:

  ```json
  {
    "code": "ERR_INVALID_IMAGE",
    "message": "Invalid base64 string for the face image."
  }
  ```
* **401 No Autorizado**: La Clave API no está presente en el encabezado `X-api-key`.

  ```json
  {
    "code": "ERR_API_KEY_NOT_PRESENT",
    "message": "API Key must be present in the x-api-key header."
  }
  ```
* **403 Prohibido**: La Clave API es incorrecta o hay un problema con la licencia. Los códigos de error posibles incluyen:
  * `ERR_API_KEY_NOT_VALID`: The provided API Key is not valid.
  * `ERR_LICENSE_EXPIRED`: The Zelf SDK license has expired.
  * `ERR_CANNOT_CONNECT_TO_TIME_SERVER`: Cannot connect to the time server to verify license expiry.
  * `ERR_CANNOT_CONNECT_TO_HOME_SERVER`: Cannot connect to the home server to verify license expiry.
  * `ERR_NUMBER_OF_AVAILABLE_INSTANCES_EXCEEDED`: The number of available instances for this license has been exceeded.
* **413 Carga Útil Demasiado Grande**: La solicitud enviada es demasiado grande. Reduzca el tamaño de la imagen o datos.

  ```json
  {
    "code": "ERR_PAYLOAD_IS_TOO_LARGE",
    "message": "The request sent is too big. Please try reducing the size of image(s)/data."
  }
  ```
* **422 Entidad No Procesable**: La solicitud es inválida debido a un error específico relacionado con su contenido.

  ```json
  {
    "code": "ERR_UNPROCESSABLE_CONTENT",
    "message": "Invalid request: "
  }
  ```

#### Códigos de Error

Aquí están algunos códigos de error específicos que podrían devolverse durante la verificación:

* **ERR\_INVALID\_IMAGE**: Cadena base64 inválida para la imagen facial.
* **ERR\_NO\_FACE\_DETECTED**: No se detectó rostro en la imagen.
* **ERR\_MULTIPLE\_FACES\_DETECTED**: Múltiples rostros detectados en la imagen.
* **ERR\_INVALID\_ZELFPROOF\_BYTES**: Los bytes de hash proporcionados no pudieron interpretarse como una cadena base64 válida.
* **ERR\_PARSE\_FAILED**: El hash no pudo interpretarse como un hash válido.
* **ERR\_PASSWORD\_REQUIRED**: Se requiere una contraseña para descifrar el hash pero no se proporcionó.
* **ERR\_INVALID\_PASSWORD**: La contraseña proporcionada es inválida.
* **ERR\_LIVENESS\_FAILED**: La imagen facial del usuario en `face_base_64` se determinó que no está viva y `require_live_face` se estableció como verdadero durante la creación del hash.
* **ERR\_VERIFICATION\_FAILED**: El descifrado falló debido a que `face_base_64` no coincide con el rostro usado para crear el hash.

**Códigos de Error de Vida Adicionales:**

Si se determina que `face_base_64` no es adecuado para vida, se pueden devolver los siguientes códigos de error:

* **ERR\_LIVENESS\_FACE\_ANGLE\_TOO\_LARGE**: El ángulo facial es demasiado grande (el usuario no está mirando la cámara).
* **ERR\_LIVENESS\_FACE\_IS\_OCCLUDED**: El rostro está ocluido (ej., por una máscara).
* **ERR\_LIVENESS\_FACE\_CLOSE\_TO\_BORDER**: El rostro está demasiado cerca del borde de la imagen.
* **ERR\_LIVENESS\_FACE\_TOO\_SMALL**: El rostro es demasiado pequeño en la imagen.
* **ERR\_LIVENESS\_EYES\_CLOSED**: Los ojos están cerrados en la imagen.
