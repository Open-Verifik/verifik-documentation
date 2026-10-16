---
id: "es-docs-es-london-stock-exchange-integration-colombia-43-api-de-consulta-general-de-simit-20"
title: "Colombia — API pública Verifik — 43. API de Consulta General de SIMIT"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "43. API de Consulta General de SIMIT"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 43. API de Consulta General de SIMIT

**Ubicación en la colección:** v2 › co › simit › consultar › API de Consulta General de SIMIT

**Qué hace (resumen):**

Este API permite a los usuarios obtener información sobre multas y comparendos de tráfico asociados a un número de placa de vehículo específico en Colombia. La respuesta proporciona información detallada sobre cada comparendo, incluyendo el tipo de infracción, el monto de la multa y el estado actual del comparendo.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/simit/consultar?documentType=CC&documentNumber=6325871
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | CC | (Required) Tipo de documento. Parámetros válidos: CC, PA, CE, , RC, NIT. |
| documentNumber | 6325871 | 6325871 |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/simit/consultar?documentType=CC&documentNumber=6325871" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "acuerdosPago": [],

        "cancelada": false,

        "cantAcuerdosPagar": "0",

        "cantMultasPagar": "0",

        "comparendos": [],

        "cursos": [

            {

                "centroInstruccion": "CIA FORMAVIAL S.A.S",

                "certificado": "13359",

                "ciudadRealizacion": "Guacari",

                "estado": "Aplicado",

                "fechaCurso": "24/07/2023 00:00:00",

                "fechaReporte": "24/07/2023",

                "idTipoDocumento": "1",

                "numeroCurso": "13359",

                "numeroDoc": "6325871",

                "numeroMulta": "99999999000005653543",

                "secretaria": "76318000"

            }

        ],

        "documentNumber": "6325871",

        "documentType": "CC",

        "fechaDesdeCancelSuspen": null,

        "fechaHastaSuspencion": null,

        "mensajeValidacionPagoPlaca": null,

        "multas": [

            {

                "cisa": "N",

                "comparendo": false,

                "comparendoElectronico": false,

                "comparendosElectronicos": "N",

                "consecutivoComparendo": null,

                "contieneInfraccionesEmbriaguez": false,

                "contieneInfraccionesHG": false,

                "departamento": "Valle del Cauca",

                "estadoCartera": "Pendiente de pago",

                "estadoComparendo": null,

                "estadoPago": null,

                "fechaCoactivo": null,

                "fechaComparendo": "04/06/2024 00:00:00",

                "fechaHasta": "01/01/1900 00:00:00",

                "fechaNotificacion": null,

                "fechaResolucion": "27/11/2024 00:00:00",

                "idDepartamento": "140",

                "idEstadoCartera": "1",

                "idEstadoComparendo": "0",

                "idOrganismoTransito": "917",

                "idResolucion": "125584072",

                "idTipoResolucion": "1
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
