---
id: "es-docs-es-london-stock-exchange-integration-colombia-25-informacion-de-ciudadano-colombiano-3"
title: "Colombia — API pública Verifik — 25. Información de Ciudadano Colombiano"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "25. Información de Ciudadano Colombiano"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 25. Información de Ciudadano Colombiano

**Ubicación en la colección:** v2 › co › PEPoliticamente › Información de Ciudadano Colombiano

**Qué hace (resumen):**

El endpoint de Identificación del Ciudadano Colombiano permite obtener información sobre el documento de identificación de un ciudadano colombiano, como su nombre completo y número de identificación. Esto puede ser útil para una variedad de propósitos, como verificación de identidad o verificación de antecedentes.

Para utilizar este servicio, deberás proporcionar el número de identificación y el tipo de documento de identificación del ciudadano colombiano. Tras una verificación exitosa, la respuesta contendrá el nombre completo, nombres, apellidos y número de identificación del ciudadano colombiano.

**Nota:** Ten en cuenta que este servicio está diseñado exclusivamente para documentos de identificación de ciudadanos colombianos. Para otros países y tipos de documentos de identificación, consulta la documentación correspondiente al servicio apropiado.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/politically-exposed-persons?documentType=CC&documentNumber=34503110
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | CC |  |
| documentNumber | 34503110 | CC 208079, 39773381, 34503110, 1026566862, 7185863 |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/politically-exposed-persons?documentType=CC&documentNumber=34503110" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "detail": [

            {

                "declarant": "FRANCIA ELENA MARQUEZ MINA                                                                                                                CEDULA DE CIUDADANIA -                                        34503110",

                "declaration": "2946958-01                                                                                                                                                            Declaración inicial",

                "declarationStatus": "FINALIZADO",

                "entity": "DEPARTAMENTO ADMINISTRATIVO DE LA PRESIDENCIA DE LA REPUBLICA",

                "positionContractor": "VICEPRESIDENTE DE LA REPÚBLICA",

                "publicationDate": "2025-09-18 14:53",

                "publicationType": "PERIÓDICO"

            },

            {

                "declarant": "FRANCIA ELENA MARQUEZ MINA                                                                                                                CEDULA DE CIUDADANIA -                                        34503110",

                "declaration": "1943956-02                                                                                                                                                            Corrección de 1943956-01",

                "declarationStatus": "FINALIZADO",

                "entity": "MINISTERIO DE IGUALDAD Y EQUIDAD",

                "positionContractor": "MINISTRO",

                "publicationDate": "2024-08-21 18:18",

                "publicationType": "PERIÓDICO"

            },

            {

                "declarant": "FRANCIA ELENA MARQUEZ MINA                                                                                                                CEDULA DE CIUDADANIA -                                        34503110",

                "declaration": "1943814-02                                                                              
… (respuesta recortada)
```

- **HTTP 404 (Not Found)**

```json
{

    "code": "NotFound",

    "message": "Record not found."

}
```

- **HTTP 409 (Conflict)**

```json
{

    "code": "MissingParameter",

    "message": "documentNumber maximum length exceeded.\n"

}
```

---
