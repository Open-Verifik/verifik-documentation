---
id: acuerdo-de-niveles-de-servicio
title: Acuerdo de Niveles de Servicio
description: Acuerdo de niveles de servicio de Verifik
slug: /acuerdo-de-niveles-de-servicio
---

# Acuerdo de Niveles de Servicio

### **Acuerdo de Niveles de Servicio**

#### **1. Canales de Atención. El usuario tendrá acceso a los siguientes canales de atención de Verifik:**

1. Chat disponible en la pagina [Verifik.co](http://verifik.co)
2. Correo electrónico: support@verifik.co
3. Canal de Whatsapp de servicio al cliente.
4. Canal de Discord de servicio al cliente.

#### **2. Horarios de Atención**

El Usuario podrá acceder al soporte brindado por Verifik, de lunes a viernes (días hábiles) en horario de 8:00 AM a 5:00 PM hora Colombia.

#### **3. Niveles de criticidad**

Las solicitudes o requerimientos elevados por los usuarios al equipo de soporte, serán clasificados en función del impacto que tienen en la operación del usuario, de la siguiente manera:

| **Crítico:** | Total indisponibilidad del servicio.                                               |
| ------------ | ---------------------------------------------------------------------------------- |
| **Urgente:** | Pérdida de funcionalidad específica para todos los casos de uso.                   |
| **Medio:**   | Pérdida de funcionalidad en casos específicos.                                     |
| **Normal:**  | Otras solicitudes o dudas generales que no afectan la Disponibilidad del Servicio. |

#### **4. Tiempos de respuesta**

1. **Definiciones:** Los términos que se usan en esta sección, tendrán los siguientes significados:

```
i. Atención: Tiempo que transcurre entre la solicitud o requerimiento y la asignación de un agente de servicio.
ii. Revisión: Tiempo que transcurre entre el saludo del agente y la primera respuesta con respecto a la solicitud o requerimiento.
iii. Escalamiento: Tiempo que transcurre entre el escalamiento por parte del agente y la revisión del caso por parte de la persona a la cual fue escalado. Este tiempo solo aplica en los eventos en que sea necesario escalar la solicitud o requerimiento del Usuario.
iv. Solución: Tiempo que transcurre entre el saludo del agente y el momento en el cual el caso queda resuelto.
```

El tiempo de respuesta varía según la criticidad del requerimiento, de la siguiente forma:

| **CRITICIDAD/TIEMPO** | **ATENCIÓN** | **REVISIÓN** | **ESCALAMIENTO** | **SOLUCIÓN** |
| --------------------- | ------------ | ------------ | ---------------- | ------------ |
| **Crítico**           | 0.5 hr       | 0.5 hr       | 15 mins          | 48 hrs       |
| **Urgente**           | 0.5 hr       | 0.5 hr       | 15 mins          | 48 hrs       |
| **Medio**             | 1 hr         | 1 hr         | 0.5 hr           | 96 hrs       |
| **Normal**            | 1 hr         | 1 hr         | 0.5 hr           | 96 hrs       |

**Nota:** 48 hrs refiere a que tomamos hasta 48 horas para solucionar el incidente dependiendo de la complejidad que esta presenta.

Los tiempos de respuesta contarán a partir del último mensaje enviado por el usuario.

##### **4.1. Tickets críticos en el panel de cliente**

Los usuarios pueden abrir un ticket con prioridad **Crítica** desde el panel de cliente cuando el tráfico de producción está bloqueado. Para estos tickets:

- Verifik envía una primera respuesta dentro de las **24 horas** siguientes al envío.
- Verifik busca resolver el ticket dentro de las **48 horas** siguientes al envío.
- Ambos plazos corren en horas reloj desde que se envía el ticket, y el panel los muestra en la zona horaria de soporte del usuario.
- Los tickets críticos sin respuesta del equipo se escalan internamente antes de que venza el plazo de primera respuesta.

Estos plazos aplican a los tickets abiertos desde el panel de cliente. Los tiempos de atención, revisión y escalamiento de la tabla anterior aplican a las conversaciones en los canales de la Sección 1.

#### **5. Disponibilidad de la Plataforma**

La Plataforma estará disponible al menos:

| **Producto** | **Disponibilidad**                                                                          | **Notas**                                                       |
| ------------ | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| SmartCHECK   | 90.0% > Data API                                                                            | Data API, depende de las conexiones con Fuentes Gubernamentales |
| smartACCESS  | 99.0% > Email/Tel<br/>98.0% > Biometrics                                          |                                                                 |
| smartENROLL  | 99.0% > Email/Tel<br/>98.0% > Biometrics<br/>98.0% > Scaneo de Docs<br/>90.0% > Data API | Data API, depende de las conexiones con Fuentes Gubernamentales |

##### **5.1. Exclusiones de disponibilidad específicas para puntos finales de Verifik**

Debido a la imprevisibilidad histórica de la disponibilidad operativa de ciertas fuentes de datos externas, algunos endpoints quedan excluidos de los compromisos de disponibilidad de la plataforma y de las disposiciones de compensación por tiempo de inactividad de este Acuerdo.

Los siguientes endpoints quedan excluidos:

- México: Validación del INE
- México: Validación de placas vehiculares

Las interrupciones, los periodos de mantenimiento, el rendimiento degradado, las demoras en la respuesta o la indisponibilidad temporal que afecten a estos endpoint no:

- se considerarán tiempo de inactividad de la plataforma;
- se incluirán en los cálculos de disponibilidad de la plataforma;
- darán derecho a créditos de servicio ni a ninguna otra compensación en virtud de este Acuerdo.

Verifik seguirá realizando esfuerzos comercialmente razonables para mantener la conectividad y restablecer el servicio siempre que sea posible; sin embargo, no se ofrece ninguna garantía de tiempo de actividad para los puntos finales mencionados anteriormente.

##### **5.2. Cómo se mide la disponibilidad**

La disponibilidad se calcula por cuenta para cada mes calendario en UTC:

```
disponibilidad = solicitudes exitosas / (solicitudes exitosas + fallas del servicio)
```

- **Fallas del servicio** son las solicitudes que agotan el tiempo, devuelven un error `5xx` o una respuesta `408` o `504`, o indican que el endpoint está fuera de servicio.
- **Errores del cliente** quedan fuera del cálculo. Incluyen parámetros inválidos o faltantes, registros no encontrados en la fuente, errores de autenticación y permisos, y otras respuestas `4xx`.

Los usuarios ven su disponibilidad mensual en el panel de cliente, en **Estado de servicios**, y en la [API de uso](/verifik-es/resources/uso#consultar-la-disponibilidad-mensual). Ambos incluyen el detalle por servicio, así que las solicitudes a los endpoints de la Sección 5.1 se pueden separar del resto. Esos endpoints siguen fuera de los compromisos de este Acuerdo.

##### **5.3. Objetivos por contrato**

El panel de cliente y la API de uso comparan cada mes con un objetivo de SmartCHECK de **95%**. Ese objetivo aplica a las cuentas cuyo acuerdo comercial lo incluye. Para las demás cuentas, la cifra es informativa y aplican los compromisos de la Sección 5. Un objetivo por contrato no agrega compensación en créditos más allá de la Sección 6, salvo que el acuerdo lo indique.

#### **6. Compensación por Tiempos de Inactividad**

La Compensación en Crédito adjudicado para el mes afectado se proporcionará en forma de un crédito equivalente al costo de la llamada de inefectiva del servicio . Si la indisponibilidad del servicio es causado por **Problemas Internos** de Verifik (base de datos, servidores, problemas internos de las API) y no es solucionada efectivamente por la Compañía, Verifik compensará de la siguiente manera:

| **Disponibilidad de Servicio**                                                           | **Compensación en Crédito**               | **Producto**                      |
| ---------------------------------------------------------------------------------------- | ----------------------------------------- | --------------------------------- |
| **Data API (Consulta de Datos)**<br/>90.00% o mayor<br/>89.99% o Menos | No Credito<br/>Compensación | smartCHECK                        |
| **Email/Tel**<br/>99.00% o mayor<br/>98.99% o Menos                    | No Credito<br/>Compensación     | smartACCESS<br/>smartENROLL |
| **Biometrics**<br/>98.00% o mayor<br/>97.99% o Menos                  | No Credito<br/>Compensación    | smartACCESS<br/>smartENROLL |
| **Escaneo de Documentos**<br/>98.00% o mayor<br/>97.99% o Menos        | No Credito<br/>Compensación | smartENROLL<br/>smartACCESS |

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

b) Los tiempos de respuesta podrán variar y, en ciertos casos, podrán ser mayores que los de una consulta estándar a una sola fuente, debido a la naturaleza escalonada o en cascada de las consultas a múltiples fuentes;

c) La efectividad y disponibilidad de la Consulta Dinámica estarán sujetas a la disponibilidad, accesibilidad y calidad de los datos de las fuentes gubernamentales o de terceros subyacentes; y

d) Verifik se reserva el derecho de modificar, priorizar o sustituir las fuentes de datos dentro de la arquitectura de Consulta Dinámica, a su entera discreción, con el fin de mantener la continuidad del servicio, optimizar la cobertura y mejorar el rendimiento de las verificaciones.

La Consulta Dinámica será considerada una funcionalidad inherente del servicio smartCHECK y aplicará automáticamente a todos los Clientes que utilicen endpoints elegibles, salvo que Verifik disponga lo contrario por escrito.

#### **8.1 Precio dinámico (facturación)** {#dynamic-pricing-billing}

Cuando la Consulta Dinámica utiliza una ruta de verificación extendida en un endpoint elegible y devuelve una coincidencia exitosa (**HTTP 200**), puede aplicar **precio dinámico**. En ese caso, los créditos se deducen en el **nivel premium** de esa familia de endpoints, no en el nivel estándar asociado a la ruta base.

El precio dinámico aplica hoy al endpoint estándar de cédula colombiana (**`GET/POST /v2/co/cedula`**) cuando una ruta de verificación extendida se completa con éxito después de que las rutas estándar no devuelven coincidencia. Los montos de crédito dependen de la **tarificación configurada para el Cliente** (tarifa estándar vs. tarifa premium para esa familia de endpoints).

El precio dinámico **no** modifica las reglas de cobro de la sección **7**: los errores de validación y del servidor (**403**, **409**, **412**, **422**, **500**) no se cobran; las respuestas **404** se cobran a tarifa estándar cuando no se obtiene coincidencia exitosa en las rutas aplicables.

Para transparencia, el Cliente puede enviar **`includeCost=true`** en solicitudes elegibles para recibir un objeto **`billing`** cuando se cobren créditos (incluido cuando aplica precio dinámico). El historial de solicitudes API registra metadatos del ajuste (por ejemplo, montos estándar vs. cobrados).

Llamar directamente a **`/v2/co/cedula/premium`** siempre usa tarificación premium; el precio dinámico describe la escalada automática desde la ruta estándar **`/v2/co/cedula`**.

Consulte [Cédula colombiana (básica)](/verifik-es/validacion-identidad/colombia/ciudadano-colombiano#dynamic-pricing) para detalles de la API.

#### **9. No disponibilidad de la Plataforma**

Los tiempos de Mantenimiento programado se realizarán en las noches y/o fines de semana, con previa comunicación vía e-mail a los usuarios.

#### **10. Adaptaciones o desarrollos nuevos**

Los tiempos para el desarrollo de adaptaciones nuevas, por cambios inesperados por parte de los sistemas de los Usuarios que se integran vía API con la Plataforma, serán variables de acuerdo a los cambios requeridos por el Usuario y no contarán como Tiempos de Inactividad de la Plataforma.
