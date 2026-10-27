---
id: politica-de-facturacion
title: Política de Facturación y Consumo de Créditos
description: Reglas de cobro de consultas API y precios dinámicos
slug: /politica-de-facturacion
---

# Política de Facturación y Consumo de Créditos

**Reglas de cobro de consultas API y precios dinámicos**

**Versión 1.0 | Fecha de publicación: 26 de octubre de 2026**

Esta política describe las reglas generales de facturación y consumo de créditos aplicables a los servicios aquí identificados. Las tarifas y condiciones particulares serán las acordadas expresamente con cada cliente. La publicación de cambios a esta política no modificará unilateralmente los contratos vigentes.

## 1. Esquema de cobro de smartCHECK (DB Screening)

### 1.1. Regla general de cobro

El esquema de cobro aplica a la solución smartCHECK (DB Screening), que permite consultar bases de datos gubernamentales.

**Regla general.** Una respuesta HTTP 200 se cobra. No se cobran HTTP 403, 412, 422 y 500; los tiempos de espera agotados; ni HTTP 409 (incluidas la indisponibilidad de la fuente y las fallas de conexión). HTTP 404 solo se cobra en los casos expresamente indicados en la sección 1.2.

| Con cobro | Sin cobro |
| --- | --- |
| 200 | 403 |
|  | 404 |
|  | 409 |
|  | 412 |
|  | 422 |
|  | 500 |
|  | Tiempo de espera agotado |

Ningún endpoint fuera de Colombia se cobra con HTTP 404. Los endpoints no incluidos en la sección 1.2 tampoco se cobran con HTTP 404.

### 1.2. Colombia: excepciones de cobro por HTTP 404

Esta sección es la única fuente de cargos por HTTP 404 en smartCHECK. Todas las rutas siguientes corresponden a APIs de Colombia. Los tiempos de espera agotados y las fallas de fuente HTTP 409 no se cobran.

**RUNT** (solo HTTP 404 con código de respuesta `NotFound`). Las respuestas HTTP 409 (por ejemplo, cuando la fuente está fuera de servicio o un worker RUNT no está disponible) no se cobran.

| Nombre del producto | Ruta |
| --- | --- |
| Consulta de conductor RUNT Colombia | `GET /v2/co/runt/conductor` |
| Consulta de conductor RUNT Colombia (v3) | `GET /v3/co/runt/conductor` |
| Consulta de vehículo RUNT Colombia | `GET /v2/co/runt/vehiculo` |
| Registro vehicular completo RUNT Colombia | `GET /v2/co/runt/vehiculo-completo` |
| SOAT vehicular RUNT Colombia | `GET /v2/co/runt/vehiculo-soat` |
| Vehículo RUNT Colombia por placa | `GET /v2/co/runt/vehicle-by-plate` |
| Vehículo RUNT Colombia por VIN | `GET /v2/co/runt/vehicle-by-vin` |
| Vehículo RUNT Colombia por placa (simplificado) | `GET /v2/co/runt/vehicle-by-plate-simplified` |
| Vehículo RUNT Colombia solo por placa | `GET /v2/co/runt/vehicle-by-plate-only` |

**Afiliaciones a seguridad social.** Cualquier HTTP 404 en la ruta siguiente es facturable, incluido cuando el mensaje indica una fecha de expedición incorrecta. Las fallas de conexión que devuelven HTTP 409 no se cobran.

| Nombre del producto | Ruta |
| --- | --- |
| Afiliaciones a seguridad social Colombia | `GET /v2/co/afiliaciones` |

**Valoración vehicular SIBGA** (solo HTTP 404 con código de respuesta `NotFound`).

| Nombre del producto | Ruta |
| --- | --- |
| Valoración vehicular SIBGA Colombia | `GET /v2/co/sibga/valuation` |

**Cédula de ciudadanía colombiana.** Solo se cobra un HTTP 404 cuyo mensaje sea `CEDULA NO EXISTE`, a la tarifa de vigencia. Cualquier otro HTTP 404 en la ruta siguiente no se cobra. `GET`/`POST /v2/co/cedula/vigencia` no cobra sus propias respuestas HTTP 404.

| Nombre del producto | Ruta |
| --- | --- |
| Consulta de cédula de ciudadanía colombiana | `GET` / `POST /v2/co/cedula` |

**No se cobra con HTTP 404:** otras rutas RUNT de Colombia (incluidas las consultas de propietarios), todo endpoint fuera de Colombia y toda ruta no listada en esta sección. La prueba de vida facial puede cobrar HTTP 409 por fallo de liveness; no se cobra con HTTP 404. smartBatch usa HTTP 404 solo para marcar filas como exitosas y no cobra créditos por esas respuestas.

## 2. Consulta Dinámica para smartCHECK

La descripción técnica de la Consulta Dinámica está en la [sección 5 del Acuerdo de Niveles de Servicio](/verifik-es/acuerdo-de-niveles-de-servicio#consulta-dinamica). Esta Política no la reproduce.

A efectos de facturación, en los endpoints compatibles Verifik podrá consultar de forma automática y secuencial fuentes de información alternativas cuando la fuente principal no produzca un resultado satisfactorio. La Consulta Dinámica puede aumentar los tiempos de respuesta porque requiere consultas sucesivas. Verifik podrá modificar, priorizar o sustituir las fuentes utilizadas para optimizar el servicio, sin que ello autorice cambios unilaterales de las tarifas acordadas.

## 3. Precios dinámicos para la consulta de cédula de ciudadanía colombiana {#dynamic-pricing-billing}

El cliente reconoce y acepta que las consultas realizadas mediante los endpoints `GET`/`POST /v2/co/cedula` podrán estar sujetas a un esquema de precios dinámicos, en función de la fuente de información utilizada y del resultado obtenido mediante el mecanismo de Consulta Dinámica descrito en la [sección 5 del Acuerdo de Niveles de Servicio](/verifik-es/acuerdo-de-niveles-de-servicio#consulta-dinamica) y referido en la sección 2 de esta Política.

### 3.1. Aplicación de tarifas estándar y premium

Cuando la consulta se resuelva satisfactoriamente (HTTP 200) mediante las fuentes estándar, se aplicará la tarifa estándar correspondiente al servicio de consulta de cédula colombiana.

Cuando las fuentes estándar no produzcan una coincidencia satisfactoria y el mecanismo de Consulta Dinámica obtenga una respuesta satisfactoria (HTTP 200) mediante una fuente de verificación ampliada o premium, se aplicará la tarifa premium correspondiente, aunque el cliente haya utilizado el endpoint estándar.

Las tarifas estándar y premium serán las expresamente acordadas con cada cliente en su contrato o documento tarifario aceptado por ambas partes.

### 3.2. Relación con las tarifas contractuales

Para los endpoints `GET`/`POST /v2/co/cedula`, la categoría estándar o premium se determinará conforme a esta política, siempre que el contrato aplicable incorpore expresamente esta regla. En caso de conflicto con una tarifa general por consulta, prevalecerá la regla específica de selección de categoría únicamente cuando así lo establezca el contrato.

Esta regla no autoriza a Verifik a modificar unilateralmente los valores de las tarifas previamente acordadas.

### 3.3. Respuestas no satisfactorias y excepciones de cobro

Las respuestas HTTP 404 se cobrarán únicamente conforme a las excepciones de la sección 1.2 y a la tarifa allí definida.

Las demás respuestas no facturables se regirán por la sección 1.1.

### 3.4. Transparencia de facturación {#include-cost}

El cliente podrá utilizar el parámetro `includeCost=true` en las solicitudes elegibles para obtener información sobre los créditos facturados.

El historial de solicitudes API permitirá consultar los registros de consumo y los ajustes de facturación correspondientes, incluidos los casos en que se aplique la tarifa premium mediante Consulta Dinámica.

### 3.5. Consulta directa premium

Las consultas realizadas directamente mediante el endpoint `/v2/co/cedula/premium` estarán sujetas a la tarifa premium correspondiente, independientemente de que se haya utilizado o no el mecanismo de escalamiento automático.

Las disposiciones de esta sección se aplicarán exclusivamente a los endpoints aquí identificados y no modificarán las tarifas ni las condiciones de facturación de los demás servicios contratados.

Consulte la [consulta básica de cédula de ciudadanía colombiana](/verifik-es/validacion-identidad/colombia/ciudadano-colombiano) para obtener los detalles de la API.

**Vigencia y condiciones particulares.** En caso de discrepancia, prevalecerán las condiciones económicas expresamente aceptadas en el contrato comercial, salvo las excepciones de precios dinámicos que dicho contrato incorpore de manera específica.
