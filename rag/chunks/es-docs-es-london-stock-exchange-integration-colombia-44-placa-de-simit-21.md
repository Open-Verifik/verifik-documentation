---
id: "es-docs-es-london-stock-exchange-integration-colombia-44-placa-de-simit-21"
title: "Colombia — API pública Verifik — 44. placa de SIMIT"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "44. placa de SIMIT"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 44. placa de SIMIT

**Ubicación en la colección:** v2 › co › simit › consultar › placa de SIMIT

**Qué hace (resumen):**

Este API permite a los usuarios obtener información sobre multas y comparendos de tráfico asociados a un número de placa de vehículo específico en Colombia. La respuesta proporciona información detallada sobre cada comparendo, incluyendo el tipo de infracción, el monto de la multa y el estado actual del comparendo.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/simit/consultar/placa?plate=YTW20G
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| plate | YTW20G | (Required) Plate |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/simit/consultar/placa?plate=YTW20G" \
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

        "cursos": [],

        "fechaDesdeCancelSuspen": null,

        "fechaHastaSuspencion": null,

        "mensajeValidacionPagoPlaca": "¿Está seguro que desea pagar?",

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

                "idTipoResolucion": "1",

                "impreso": false,

                "infracciones": [

                    {

                        "codigoInfraccion": "C24",

                        "descripcionInfraccion": "Conducir motocicleta sin observar las normas establecidas en el presente código.",

                        "valorInfraccion": "572520"

                    }

                ],

                "infractor": {

                    "apellido": "CAI**** VE*** ",

                    "idTipoDocumento": "1",

                    "nombre": "JU** CAR*** ",

                    "numeroDocumento": "
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

    "message": "plate format invalid."

}
```

---
