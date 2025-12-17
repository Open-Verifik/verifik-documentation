---
id: acuerdo-de-niveles-de-servicio
title: Acuerdo de Niveles de Servicio
description: Acuerdo de niveles de servicio de Verifik
slug: /acuerdo-de-niveles-de-servicio
---

# Acuerdo de Niveles de Servicio

### **Acuerdo de Niveles de Servicio**

#### **I. Canales de Atención. El usuario tendrá acceso a los siguientes canales de atención de Verifik:**

1. Chat disponible en la pagina [Verifik.co](http://verifik.co)
2. Correo electrónico: support@verifik.co
3. Canal de Whatsapp de servicio al cliente.
4. Canal de Discord de servicio al cliente.

#### **II. Horarios de Atención**

El Usuario podrá acceder al soporte brindado por Verifik, de lunes a viernes (días hábiles) en horario de 8:00 AM a 5:00 PM hora Colombia.

#### **III. Niveles de criticidad**

Las solicitudes o requerimientos elevados por los usuarios al equipo de soporte, serán clasificados en función del impacto que tienen en la operación del usuario, de la siguiente manera:

| **Crítico:** | Total indisponibilidad del servicio.                                               |
| ------------ | ---------------------------------------------------------------------------------- |
| **Urgente:** | Pérdida de funcionalidad específica para todos los casos de uso.                   |
| **Medio:**   | Pérdida de funcionalidad en casos específicos.                                     |
| **Normal:**  | Otras solicitudes o dudas generales que no afectan la Disponibilidad del Servicio. |

#### **IV. Tiempos de respuesta**

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

#### **V. Disponibilidad de la Plataforma**

La Plataforma estará disponible al menos:

| **Producto** | **Disponibilidad**                                                                          | **Notas**                                                       |
| ------------ | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| SmartCHECK   | 90.0% > Data API                                                                            | Base de datos, depende de las conexiones con Fuentes Gubernamentales |
| smartACCESS  | 99.9% > Email/Tel<br/>99.9% > Biometrics                                          |                                                                 |
| smartENROLL  | 99.9% > Email/Tel<br/>99.9% > Biometrics<br/>99.9% > Scaneo de Docs<br/>90.0% > Data API | Base de datos, depende de las conexiones con Fuentes Gubernamentales |

#### **VI. Compensación por Tiempos de Inactividad**

La Compensación en Crédito adjudicado para el mes afectado se proporcionará en forma de un crédito equivalente al costo de la llamada de inefectiva del servicio . Si la indisponibilidad del servicio es causado por **Problemas Internos** de Verifik (base de datos, servidores, problemas internos de las API) y no es solucionada efectivamente por la Compañía, Verifik compensará de la siguiente manera:

| **Disponibilidad de Servicio**                                                           | **Compensación en Crédito**               | **Producto**                      |
| ---------------------------------------------------------------------------------------- | ----------------------------------------- | --------------------------------- |
| **Base de datos (Consulta de Datos)**<br/>90.00% o mayor<br/>89.99% o Menos | No Credito<br/>Compensación | smartCHECK                        |
| **Email/Tel**<br/>99.9% o Mayor<br/>99.8% o Menos                    | No Credito<br/>Compensación     | smartACCESS<br/>smartENROLL |
| **Biometrics**<br/>99.9% o Mayor<br/>99.8% o Menos                  | No Credito<br/>Compensación    | smartACCESS<br/>smartENROLL |
| **Escaneo de Documentos**<br/>99.9% o Mayor<br/>99.8% o Menos        | No Credito<br/>Compensación | smartENROLL<br/>smartACCESS |

**Problemas Internos** del servicio de Data API (Consulta de Datos) excluye problemas considerados por Fuerza Mayor (Casos Fortuitos) ya sea por migración, desconexión, o intervención externa de los gobiernos que custodian las bases de datos. Verifik es un intermediario, por lo tanto, NO posee la potestad y control de las bases de datos consultadas.

#### VII. Esquema de Cobro por Servicio de smartCHECK

El esquema de cobro aplica para la solución de smartCHECK, el cual permite la consulta de bases de datos gubernamentales. Verifik no es dueña, gestora, o responsable (no controla o actualiza) de las bases de datos gubernamentales de los distintos paises que ofrecemos; por lo tanto Verifik se reserva ofrecer garantias respecto a "Tiempo de respuesta" (Reponse Time), "Tiempo promedio de disponibilidad" (Average Up Time), "Precisión de los datos" (Data Accuracy).

Si la consulta retorna un **200** o **404** esta se cobrará. De lo contrario, si la consulta retorna un **403**, **409**, **412**, **422** o **500** esta no se cobrará.

| **Cobro** | **Ausente de Cobro** |
| --------- | -------------------- |
| 200       | 403                  |
| 404       | 409                  |
|           | 412                  |
|           | 422                  |
|           | 500                  |

#### **VIII. No disponibilidad de la Plataforma**

Los tiempos de Mantenimiento programado se realizarán en las noches y/o fines de semana, con previa comunicación vía e-mail a los usuarios.

#### **IX. Adaptaciones o desarrollos nuevos**

Los tiempos para el desarrollo de adaptaciones nuevas, por cambios inesperados por parte de los sistemas de los Usuarios que se integran vía API con la Plataforma, serán variables de acuerdo a los cambios requeridos por el Usuario y no contarán como Tiempos de Inactividad de la Plataforma.
