---
id: acuerdo-de-niveles-de-servicio
title: Acuerdo de Niveles de Servicio
description: Acuerdo de niveles de servicio de Verifik
slug: /acuerdo-de-niveles-de-servicio
---

# Acuerdo de Niveles de Servicio

**Última actualización: 21 de octubre de 2026**

### **Acuerdo de Niveles de Servicio**

#### **1. Canales de Atención. El Usuario tendrá acceso a los siguientes canales de atención de Verifik:**

1. Chat disponible en [Verifik.co](http://verifik.co)
2. Correo electrónico: support@verifik.co
3. Canal de WhatsApp de servicio al cliente.
4. Canal de Discord de servicio al cliente.

#### **2. Horarios de Atención**

El Usuario podrá acceder al soporte brindado por Verifik, de lunes a viernes (días hábiles), en horario de 8:00 AM a 5:00 PM hora Colombia.

#### **3. Niveles de criticidad**

Las solicitudes o requerimientos elevados por los Usuarios al equipo de soporte serán clasificados en función del impacto que tienen en la operación del Usuario, de la siguiente manera:

| | |
| --- | --- |
| **Crítico:** | Indisponibilidad total del servicio. |
| **Urgente:** | Pérdida de funcionalidad específica para todos los casos de uso. |
| **Medio:** | Pérdida de funcionalidad en casos específicos. |
| **Normal:** | Otras solicitudes o consultas generales que no afectan la Disponibilidad del Servicio. |

#### **4. Tiempos de respuesta**

**Definiciones:** Los términos utilizados en esta sección tendrán los siguientes significados:

i. Atención: Tiempo transcurrido entre la solicitud o requerimiento y la asignación de un agente de servicio.

ii. Revisión: Tiempo transcurrido entre el saludo del agente y la primera respuesta respecto de la solicitud o requerimiento.

iii. Escalamiento: Tiempo transcurrido entre el escalamiento por parte del agente y la revisión del caso por la persona a quien fue escalado. Este tiempo solo aplica cuando sea necesario escalar la solicitud o requerimiento del Usuario.

iv. Resolución: Tiempo transcurrido entre el saludo del agente y el momento en que se resuelve el caso.

El tiempo de respuesta varía según la criticidad del requerimiento, de la siguiente manera:

| **GRAVEDAD/TIEMPO** | **ATENCIÓN** | **REVISIÓN** | **ESCALAMIENTO** | **RESOLUCIÓN** |
| ------------------- | ------------ | ------------ | ---------------- | -------------- |
| **Crítico** | 0.5 hr | 0.5 hr | 15 mins | 48 hrs |
| **Urgente** | 0.5 hr | 0.5 hr | 15 mins | 48 hrs |
| **Medio** | 1 hr | 1 hr | 0.5 hr | 96 hrs |
| **Normal** | 1 hr | 1 hr | 0.5 hr | 96 hrs |

**Nota:** 48 hrs significa que tomamos hasta 48 horas para resolver el incidente según su complejidad.

Los tiempos de respuesta se contarán desde el último mensaje enviado por el Usuario.

##### **4.1. Tickets críticos en el panel del cliente**

Los Usuarios pueden abrir un ticket con prioridad Crítica desde el panel del cliente cuando el tráfico de producción está bloqueado. Para estos tickets:

- Verifik envía una primera respuesta dentro de las 24 horas posteriores al envío.
- Verifik procura resolver el ticket dentro de las 48 horas posteriores al envío.
- Ambos plazos corren en horas de reloj desde el momento del envío del ticket, y el panel los muestra en la zona horaria de soporte del Usuario.
- Los tickets críticos sin respuesta del personal se escalan internamente antes del plazo de primera respuesta.

Estos plazos aplican a los tickets abiertos a través del panel del cliente. Los tiempos de atención, revisión y escalamiento de la tabla anterior aplican a las conversaciones en los canales de servicio de la Sección 1.

#### **5. Disponibilidad de la Plataforma**

La Plataforma estará disponible al menos:

| **Igual o superior a** | **Inferior a** | **Producto** | **Notas** |
| --- | --- | --- | --- |
| 90.00% | 89.99% | smartCHECK (DB Screening) | La API de DB Screening depende de las conexiones con Fuentes Gubernamentales |
| 99.00% | 98.99% | smartACCESS, smartENROLL (Email/Tel) | Sin compensación en créditos |
| 99.00% | 98.99% | smartACCESS, smartENROLL (Biometrics) | Sin compensación en créditos |
| 99.00% | 98.99% | smartENROLL, smartACCESS (Document Scanning) | Sin compensación en créditos |

##### **5.1. Exclusiones de disponibilidad por endpoint**

Debido a las características históricamente impredecibles de disponibilidad operativa de ciertas fuentes de datos externas, endpoints específicos quedan excluidos de los compromisos de Disponibilidad de la Plataforma y de las disposiciones de Compensación por Tiempos de Inactividad de este Acuerdo.

Los siguientes endpoints están excluidos:

- México – Validación INE
- México – Validación de placa vehicular

Las interrupciones, periodos de mantenimiento, rendimiento degradado, respuestas demoradas o indisponibilidad temporal que afecten estos endpoints no:

- se considerarán Tiempos de Inactividad de la Plataforma;
- se incluirán en los cálculos de Disponibilidad de la Plataforma;
- calificarán para Créditos de Servicio ni otra compensación bajo este Acuerdo.

Verifik continuará realizando esfuerzos comercialmente razonables para mantener la conectividad y restablecer el servicio cuando sea posible; sin embargo, no se ofrece garantía de tiempo activo para los endpoints enumerados.

##### **5.2. Cómo se mide la disponibilidad**

La disponibilidad se calcula por cuenta para cada mes calendario en UTC:

```
disponibilidad = solicitudes exitosas / (solicitudes exitosas + fallas del servicio)
```

- Las fallas del servicio son solicitudes que agotan el tiempo de espera, devuelven un error 5xx o una respuesta 408 o 504, o indican que el endpoint está fuera de servicio.
- Los errores del cliente quedan fuera del cálculo. Incluyen parámetros inválidos o faltantes, registros no encontrados en la fuente, errores de autenticación y permisos, y otras respuestas 4xx.

Los Usuarios pueden ver su disponibilidad mensual en el panel del cliente en Estado de servicios y a través de la [API de uso](/verifik-es/resources/uso#consultar-la-disponibilidad-mensual). Ambos incluyen el desglose por servicio, de modo que las solicitudes a los endpoints de la Sección 5.1 pueden separarse del resto. Esos endpoints permanecen fuera de los compromisos de este Acuerdo.

##### **5.3. Objetivos por contrato**

El panel del cliente y la API de uso comparan cada mes con un objetivo de SmartCHECK del 95%. Ese objetivo aplica a las cuentas cuyo acuerdo comercial lo incluye. Para las demás cuentas, la cifra es informativa y aplican los compromisos de la Sección 5. Un objetivo por contrato no agrega compensación en créditos más allá de la Sección 6, salvo que el acuerdo lo indique.

#### **6. Compensación por Tiempos de Inactividad**

La Compensación en Crédito otorgada para el mes afectado se proporcionará en forma de un crédito equivalente al costo de la llamada fallida del servicio. Si la indisponibilidad del servicio es causada por Problemas Internos de Verifik (base de datos, servidores, problemas internos de API) y no es resuelta efectivamente por la Compañía, Verifik compensará de la siguiente manera:

| **Igual o superior a** | **Inferior a** | **Compensación en créditos por nivel de servicio** | **Producto** |
| --- | --- | --- | --- |
| 90.00% | 89.99% | Sin compensación en créditos | smartCHECK (DB Screening / Consulta de Datos) |
| 99.00% | 98.99% | Sin compensación en créditos | smartACCESS, smartENROLL (Email/Tel) |
| 99.00% | 98.99% | Sin compensación en créditos | smartACCESS, smartENROLL (Biometrics) |
| 99.00% | 98.99% | Sin compensación en créditos | smartENROLL, smartACCESS (Document Scanning) |

Los Problemas Internos del servicio de API de Datos (Consulta de Datos) excluyen situaciones consideradas Fuerza Mayor (Casos Fortuitos), ya sea por migración, desconexión o intervención externa de los gobiernos que administran las bases de datos. Verifik es un intermediario y, por lo tanto, NO tiene control sobre las bases de datos consultadas.

#### **7. Esquema de cobro por smartCHECK**

El esquema de cobro aplica a la solución smartCHECK, que permite consultar bases de datos gubernamentales. Verifik no es propietaria, no gestiona ni asume responsabilidad (no controla ni actualiza) las bases de datos gubernamentales de los distintos países que atendemos; por lo tanto, Verifik se reserva el derecho de no ofrecer garantías respecto del Tiempo de Respuesta, Tiempo Promedio Activo o Precisión de los Datos.

**Regla general.** Una respuesta HTTP **200** se cobra. **No** se cobran: HTTP **403**, **412**, **422** y **500**; **tiempos de espera agotados**; y respuestas HTTP **409** (incluida indisponibilidad de la fuente y fallas de conexión). Una respuesta HTTP **404** **no** se cobra salvo que aplique la Sección **7.1** a esa solicitud.

| **Cobrado** | **No cobrado** |
| --- | --- |
| 200 | 404 (excepto lo indicado en la Sección 7.1) |
| | 403 |
| | 409 (incluidas fallas de fuente; nunca se cobra) |
| | 412 |
| | 422 |
| | 500 |
| | Tiempos de espera agotados (nunca se cobran) |

Ningún endpoint fuera de Colombia se cobra con HTTP **404**. Los endpoints que no figuren en la Sección **7.1** no se cobran con HTTP **404**, incluidas todas las rutas en países distintos de Colombia.

##### **7.1 Colombia: cobro por HTTP 404**

Esta sección es la única fuente de cargos por HTTP **404** bajo la Sección **7**. Todas las rutas siguientes son APIs smartCHECK de Colombia. Los **tiempos de espera agotados** y las fallas de fuente HTTP **409** **nunca** se cobran en ningún endpoint de Verifik.

**RUNT (solo HTTP 404 con código de respuesta `NotFound`).** Las respuestas HTTP **409** (por ejemplo, cuando la fuente está fuera de servicio o un worker RUNT no está disponible) **no** se cobran.

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

**Afiliaciones a seguridad social.** **Cualquier** HTTP **404** en la ruta siguiente es facturable, incluido cuando el mensaje indica una fecha de expedición incorrecta. Las fallas de conexión que devuelven HTTP **409** **no** se cobran.

| Nombre del producto | Ruta |
| --- | --- |
| Afiliaciones a seguridad social Colombia | `GET /v2/co/afiliaciones` |

**Valoración vehicular SIBGA (solo HTTP 404 con código de respuesta `NotFound`).**

| Nombre del producto | Ruta |
| --- | --- |
| Valoración vehicular SIBGA Colombia | `GET /v2/co/sibga/valuation` |

**Cédula de ciudadanía colombiana.** Solo se cobra un HTTP **404** cuyo mensaje sea **`CEDULA NO EXISTE`**, a la tarifa **vigencia**. Cualquier otro HTTP **404** en la ruta siguiente **no** se cobra. **`GET`/`POST /v2/co/cedula/vigencia`** **no** cobra sus propias respuestas HTTP **404**.

| Nombre del producto | Ruta |
| --- | --- |
| Consulta de cédula de ciudadanía colombiana | `GET` / `POST` `/v2/co/cedula` |

**No se cobra con HTTP 404:** Otras rutas RUNT de Colombia (incluidas consultas de propietarios), todo endpoint fuera de Colombia y toda ruta no listada en esta sección. La prueba de vida facial puede cobrar HTTP **409** por fallo de liveness; no se cobra con HTTP **404**. smartBatch usa HTTP **404** solo para marcar filas como exitosas y no cobra créditos por esas respuestas.

#### **8. Consulta Dinámica para el Servicio smartCHECK**

Como parte de la arquitectura estándar del Servicio smartCHECK, Verifik implementa un mecanismo de Consulta Dinámica diseñado para maximizar la disponibilidad, cobertura y confiabilidad del servicio en los endpoints soportados.

El mecanismo de Consulta Dinámica permite que smartCHECK y DB Screening consulten de manera automática y secuencial múltiples fuentes de datos autorizadas cuando la fuente primaria devuelve una respuesta no exitosa, incluyendo, entre otras, respuestas de tipo "No encontrado" o equivalentes a errores HTTP de nivel 400. Esta arquitectura tiene como finalidad mejorar la probabilidad de obtener un resultado de verificación exitoso mediante el uso de múltiples fuentes elegibles.

El Cliente reconoce y acepta que la calidad, integridad y disponibilidad de las bases de datos gubernamentales pueden variar significativamente según la jurisdicción, y que ciertas bases pueden presentar mayor probabilidad de respuestas no exitosas debido a registros incompletos, interrupciones del servicio o cobertura limitada de datos.

Para mitigar estas limitaciones, la Consulta Dinámica está habilitada por defecto en todos los endpoints aplicables de smartCHECK y forma parte integral de la estrategia de redundancia y conmutación por error de Verifik. Este mecanismo permite a Verifik mantener niveles de disponibilidad y cobertura cercanos al cien por ciento (100%) en determinados endpoints, enrutando dinámicamente las solicitudes hacia fuentes alternativas disponibles cuando sea necesario.

El Cliente reconoce y acepta además que:

a) La Consulta Dinámica tiene como finalidad aumentar la probabilidad de respuestas de verificación exitosas, pero no garantiza una coincidencia exitosa en todos los casos;

b) Los tiempos de respuesta pueden variar y, en algunos casos, ser mayores que en consultas estándar de una sola fuente, debido a la naturaleza en cascada de múltiples solicitudes;

c) La efectividad y disponibilidad de la Consulta Dinámica siguen sujetas al tiempo activo, accesibilidad y calidad de datos de las fuentes gubernamentales o de terceros subyacentes; y

d) Verifik se reserva el derecho de modificar, priorizar o sustituir fuentes de datos dentro de la arquitectura de Consulta Dinámica, a su entera discreción, para mantener la continuidad del servicio, optimizar la cobertura y mejorar el rendimiento de las verificaciones.

La Consulta Dinámica se considerará una funcionalidad inherente del Servicio smartCHECK y aplicará automáticamente a todos los Clientes que utilicen endpoints elegibles, salvo que Verifik disponga lo contrario por escrito.

##### **8.1 Precio dinámico (facturación)** {#dynamic-pricing-billing}

Cuando la Consulta Dinámica utiliza una ruta de verificación extendida en un endpoint elegible y devuelve una coincidencia exitosa (HTTP 200), puede aplicar precio dinámico. En ese caso, los créditos se deducen en el nivel premium de esa familia de endpoints, no en el nivel estándar asociado a la ruta base.

El precio dinámico aplica hoy al endpoint estándar de cédula nacional colombiana (GET/POST /v2/co/cedula) cuando una ruta de verificación extendida se completa con éxito después de que las rutas estándar no devuelven coincidencia. Los montos de crédito dependen de la tarificación configurada para el Cliente (tarifa estándar vs. tarifa premium para esa familia de endpoints).

El precio dinámico no modifica las reglas de cobro de la Sección **7** por códigos HTTP: los errores de validación y del servidor (**403**, **409**, **412**, **422**, **500**) y los **tiempos de espera agotados** no se cobran. Los cargos por HTTP **404** siguen **solo** la Sección **7.1** (incluido **`CEDULA NO EXISTE`** en **`/v2/co/cedula`**, cobrado a tarifa vigencia). Ningún otro HTTP **404** se cobra.

Para transparencia, el Cliente puede enviar includeCost=true en solicitudes elegibles para recibir un objeto billing cuando se cobren créditos (incluido cuando aplica precio dinámico). El historial de solicitudes API registra metadatos del ajuste (por ejemplo, montos estándar vs. cobrados).

Llamar directamente a /v2/co/cedula/premium siempre usa precio premium; el precio dinámico describe la escalada automática desde la ruta estándar /v2/co/cedula.

Consulte [Cédula colombiana (básica)](/verifik-es/validacion-identidad/colombia/ciudadano-colombiano#dynamic-pricing) para detalles de la API.

#### **9. Indisponibilidad de la Plataforma**

Las ventanas de mantenimiento programado se realizarán por la noche y/o los fines de semana, con notificación previa por correo electrónico a los Usuarios.

#### **10. Nuevas adaptaciones o desarrollos**

Los plazos para desarrollar nuevas adaptaciones debido a cambios imprevistos en los sistemas de los Usuarios que se integran vía API con la Plataforma variarán según los cambios requeridos por el Usuario y no contarán como Tiempos de Inactividad de la Plataforma.
