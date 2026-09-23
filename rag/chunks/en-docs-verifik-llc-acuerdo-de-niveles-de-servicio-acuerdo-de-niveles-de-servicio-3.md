---
id: "en-docs-verifik-llc-acuerdo-de-niveles-de-servicio-acuerdo-de-niveles-de-servicio-3"
title: "Acuerdo de Niveles de Servicio — **Acuerdo de Niveles de Servicio**"
sourcePath: "docs/verifik-llc/acuerdo-de-niveles-de-servicio.md"
locale: "en"
category: "verifik-llc"
tags:
  - "co"
  - "verifik-llc"
endpoints:
  - "/v2/co/cedula"
  - "/v2/co/cedula/premium"
sourceAnchor: "**Acuerdo de Niveles de Servicio**"
slug: "/verifik-llc/acuerdo-de-niveles-de-servicio"
url: "https://docs.verifik.co/verifik-llc/acuerdo-de-niveles-de-servicio"
---

# Acuerdo de Niveles de Servicio
**API path(s):** /v2/co/cedula, /v2/co/cedula/premium

## **Acuerdo de Niveles de Servicio**

Verifik seguirá realizando esfuerzos comercialmente razonables para mantener la conectividad y restablecer el servicio siempre que sea posible; sin embargo, no se ofrece ninguna garantía de tiempo de actividad para los puntos finales mencionados anteriormente.

#### **6. Compensación por Tiempos de Inactividad**

La Compensación en Crédito adjudicado para el mes afectado se proporcionará en forma de un crédito equivalente al costo de la llamada de inefectiva del servicio . Si la indisponibilidad del servicio es causado por **Problemas Internos** de Verifik (base de datos, servidores, problemas internos de las API) y no es solucionada efectivamente por la Compañía, Verifik compensará de la siguiente manera:

| **Disponibilidad de Servicio**                                                           | **Compensación en Crédito**               | **Producto**                      |
| ---------------------------------------------------------------------------------------- | ----------------------------------------- | --------------------------------- |
| **Data API (Consulta de Datos)**90.00% o mayor89.99% o Menos | No CreditoCompensación | smartCHECK                        |
| **Email/Tel**99.00% o mayor98.99% o Menos                    | No CreditoCompensación     | smartACCESSsmartENROLL |
| **Biometrics**98.00% o mayor97.99% o Menos                  | No CreditoCompensación    | smartACCESSsmartENROLL |
| **Escaneo de Documentos**98.00% o mayor97.99% o Menos        | No CreditoCompensación | smartENROLLsmartACCESS |

**Problemas Internos** del servicio de Data API (Consulta de Datos) excluye problemas considerados por Fuerza Mayor (Casos Fortuitos) ya sea por migración, desconexión, o intervención externa de los gobiernos que custodian las bases de datos. Verifik es un intermediario, por lo tanto, NO posee la potestad y control de las bases de datos consultadas.

#### **7. Esquema de Cobro por Servicio de smartCHECK**

El esquema de cobro aplica para la solución de smartCHECK, el cual permite la consulta de bases de datos gubernamentales. Verifik no es dueña, gestora, o responsable (no controla o actualiza) de las bases de datos gubernamentales de los distintos paises que ofrecemos; por lo tanto Verifik se reserva ofrecer garantias respecto a "Tiempo de respuesta" (Reponse Time), "Tiempo promedio de disponibilidad" (Average Up Time), "Precisión de los datos" (Data Accuracy).

Si la consulta retorna un **200** o **404** esta se cobrará. De lo contrario, si la consulta retorna un **403**, **409**, **412**, **422** o **500** esta no se cobrará.

| **Cobro** | **Ausente de Cobro** |
| --------- | -------------------- |
| 200       | 403                  |
| 404       | 409                  |
|           | 412                  |
|           | 422                  |
|           | 500                  |

#### **8. Consulta Dinámica para el Servicio smartCHECK**

Como parte de la arquitectura estándar del servicio smartCHECK, Verifik implementa un mecanismo de Consulta Dinámica (Dynamic Query) diseñado para maximizar la disponibilidad, cobertura y confiabilidad del servicio en los endpoints soportados.

El mecanismo de Consulta Dinámica permite que smartCHECK y DB Screening consulten de manera automática y secuencial múltiples fuentes de datos autorizadas en aquellos casos en que la fuente de datos primaria devuelva una respuesta no exitosa, incluyendo, entre otras, respuestas de tipo "No Encontrado" o equivalentes a errores HTTP de nivel 400. Esta arquitectura tiene como finalidad incrementar la probabilidad de obtener un resultado de verificación exitoso mediante el aprovechamiento de múltiples fuentes de datos elegibles.

El Cliente reconoce y acepta que la calidad, integridad y disponibilidad de las bases de datos gubernamentales pueden variar significativamente según la jurisdicción, y que ciertas bases de datos pueden presentar una mayor probabilidad de respuestas no exitosas debido a registros incompletos, interrupciones del servicio o cobertura limitada de datos.

Con el fin de mitigar dichas limitaciones, la Consulta Dinámica se encuentra habilitada por defecto en todos los endpoints aplicables de smartCHECK y constituye una parte integral de la estrategia de redundancia y failover de Verifik. Este mecanismo permite a Verifik mantener niveles de disponibilidad y cobertura cercanos al cien por ciento (100%) en determinados endpoints, mediante el enrutamiento dinámico de solicitudes hacia fuentes alternativas disponibles cuando sea necesario.

El Cliente reconoce y acepta además que:

a) La Consulta Dinámica tiene como finalidad incrementar la probabilidad de obtener respuestas de verificación exitosas, pero no garantiza una coincidencia o resultado exitoso en todos los casos;
