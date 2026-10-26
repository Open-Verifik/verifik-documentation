---
id: acuerdo-de-niveles-de-servicio
title: Acuerdo de Niveles de Servicio
description: Soporte, disponibilidad y desempeño de los servicios de Verifik
slug: /acuerdo-de-niveles-de-servicio
---

# Acuerdo de Niveles de Servicio (ANS)

**Soporte, disponibilidad y desempeño de los servicios**

**Versión 1.0 | Fecha de publicación: 26 de octubre de 2026**

Este ANS describe los canales de soporte, los objetivos de atención y los compromisos de disponibilidad de los servicios de Verifik indicados a continuación. El soporte descrito está incluido sin costo adicional, salvo pacto comercial expreso en contrario.

**Ámbito y aplicación.** Este documento podrá incorporarse a los contratos que expresamente lo identifiquen. Las condiciones particulares firmadas por las partes prevalecerán en caso de conflicto. La publicación de versiones posteriores no modificará por sí sola los contratos vigentes.

## 1. Canales y horarios de atención

El cliente abrirá los incidentes y dará seguimiento a ellos mediante tiquetes de soporte en el [Panel de Cliente](https://ai.verifik.co/). Ese panel es el canal oficial de atención.

Si el cliente no puede acceder al Panel de Cliente, podrá escribir a [support@mg.verifik.co](mailto:support@mg.verifik.co) como contacto secundario.

El soporte estándar se presta de lunes a viernes, de 8:00 a. m. a 5:00 p. m. (UTC-5). El Horario Normal de Soporte excluye los festivos nacionales de Colombia, Estados Unidos y Canadá («Horario Normal de Soporte»).

Los incidentes de Nivel 1 (Crítico) cuentan con cobertura de guardia (on-call). Esa cobertura aplica de noche, en fines de semana y en festivos. El objetivo de resolución de veinticuatro (24) horas del Nivel 1 corre de forma continua, incluidas las noches, los fines de semana y los festivos, y no se limita al Horario Normal de Soporte.

Los clientes que pagan por Soporte Premium no están sujetos al Horario Normal de Soporte ni a las exclusiones por festivos. Para esos clientes, los tiempos de primera respuesta y de resolución corren las veinticuatro (24) horas del día, los siete (7) días de la semana.

## 2. Tiempos de respuesta y resolución de incidentes

Los incidentes reportados por el cliente serán clasificados por Verifik de acuerdo con su gravedad, impacto operativo y alcance, conforme a los siguientes niveles de atención:

| Gravedad del incidente | Descripción | Tiempo de primera respuesta | Objetivo de resolución |
| --- | --- | --- | --- |
| Nivel 1. Crítico | Incidentes que ocasionen la interrupción total de la plataforma, afecten gravemente sus funcionalidades esenciales o impliquen una vulnerabilidad crítica de seguridad. Cuentan con cobertura de guardia (on-call). | Dentro de una (1) hora, también fuera del Horario Normal de Soporte, con cobertura de guardia. | Dentro de veinticuatro (24) horas continuas, incluidas las noches, los fines de semana y los festivos. |
| Nivel 2. Alto | Incidentes que ocasionen degradación significativa del servicio o afecten funcionalidades importantes sin producir una interrupción total. | Dentro de cuatro (4) horas hábiles. | Dentro de dos (2) días hábiles. |
| Nivel 3. Bajo | Incidentes de impacto limitado, errores menores y consultas técnicas que no comprometan significativamente la operación del servicio. | Dentro de ocho (8) horas hábiles. | Dentro de cinco (5) días hábiles. |

### Condiciones de atención

a) Los tiempos de primera respuesta se calcularán exclusivamente dentro del Horario Normal de Soporte establecido en la sección 1, salvo los incidentes de Nivel 1 (Crítico), que cuentan con cobertura de guardia, y salvo los clientes que pagan por Soporte Premium. El objetivo de resolución de veinticuatro (24) horas del Nivel 1 se cuenta de forma continua, incluidas las noches, los fines de semana y los festivos. Para los clientes que pagan por Soporte Premium, los tiempos de primera respuesta y de resolución corren las veinticuatro (24) horas del día, los siete (7) días de la semana, conforme a la sección 1.

b) La primera respuesta consistirá en una comunicación de Verifik que confirme la recepción y la atención del incidente. Las respuestas automáticas de recepción no constituirán una primera respuesta para efectos de esta sección.

c) Los tiempos de resolución constituyen objetivos operativos sujetos a esfuerzos comercialmente razonables y no representan garantías de resolución dentro de un plazo determinado.

d) Verifik determinará la clasificación de los incidentes con base en su gravedad e impacto técnico, y podrá modificarla cuando existan circunstancias que lo justifiquen.

e) Los tiempos de resolución podrán verse afectados por circunstancias fuera del control razonable de Verifik, incluidas interrupciones, fallas o restricciones de acceso a fuentes gubernamentales o servicios de terceros.

f) Cuando un incidente no pueda resolverse dentro del plazo objetivo, Verifik continuará realizando esfuerzos comercialmente razonables para su resolución e informará al cliente sobre su estado y sus avances relevantes.

## 3. Disponibilidad del servicio y tiempos de respuesta

La disponibilidad de los servicios se evalúa mensualmente conforme a la Tabla 1, excluyendo el tiempo de inactividad programado. Este último comprende las ventanas de mantenimiento y actualización de la plataforma, previstas en horarios de menor demanda para minimizar interrupciones.

Verifik podrá publicar periódicamente ventanas recurrentes de tiempo de inactividad programado. «Tiempo de Inactividad Programado Recurrente» significa las ventanas de indisponibilidad que ocurren en horarios fijos conforme a calendarios recurrentes y que se publican como parte de la documentación de la API de Verifik.

Verifik notificará por escrito con al menos siete (7) días calendario de antelación los mantenimientos programados fuera de las ventanas recurrentes publicadas, salvo situaciones de emergencia que requieran intervención inmediata para preservar la seguridad o la continuidad del servicio. Las ventanas se realizarán preferentemente en horario nocturno o en fines de semana.

### Tabla 1. Disponibilidad del servicio

| Disponibilidad | Producto |
| --- | --- |
| Bases de datos: 90,00 % o mayor | smartCHECK, DB Screening |
| Email/Tel: 99,00 % o mayor | smartACCESS, smartENROLL |
| Biométricos: 99,00 % o mayor | smartACCESS, smartENROLL |
| Escaneo de documento: 99,00 % o mayor | smartENROLL, smartACCESS |

La API de verificación de bases de datos depende de conexiones con fuentes gubernamentales. Verifik no posee ni controla dichos puntos de acceso.

### 3.1. Exclusiones de disponibilidad para DB Screening / smartCHECK {#exclusiones-disponibilidad}

Debido a las características históricamente impredecibles de disponibilidad operativa de ciertas fuentes de datos externas, endpoints específicos quedan excluidos de los compromisos de disponibilidad de la plataforma y de las disposiciones de compensación por tiempos de inactividad de este Acuerdo.

Los siguientes endpoints están excluidos:

- México – Validación INE
- México – Validación de placa vehicular

Las interrupciones, los periodos de mantenimiento, el rendimiento degradado, las respuestas demoradas o la indisponibilidad temporal que afecten estos endpoints no:

- se considerarán tiempos de inactividad de la plataforma;
- se incluirán en los cálculos de disponibilidad de la plataforma;
- calificarán para créditos de servicio ni otra compensación bajo este Acuerdo.

Verifik continuará realizando esfuerzos comercialmente razonables para mantener la conectividad y restablecer el servicio cuando sea posible; sin embargo, no se ofrece garantía de tiempo activo para los endpoints enumerados.

### 3.2. Cómo se mide la disponibilidad

La disponibilidad se calcula por cuenta para cada mes calendario en UTC:

```
disponibilidad = solicitudes exitosas / (solicitudes exitosas + fallas del servicio)
```

Las fallas del servicio son solicitudes que agotan el tiempo de espera, devuelven un error 5xx o una respuesta 408 o 504, o indican que el endpoint está fuera de servicio.

Los errores del cliente quedan fuera del cálculo. Incluyen parámetros inválidos o faltantes, registros no encontrados en la fuente, errores de autenticación y permisos, y otras respuestas 4xx.

Los clientes podrán consultar la disponibilidad mensual en el Panel de Cliente y, cuando esté habilitada, mediante la API de uso, con desglose por servicio. Los endpoints de la sección 3.1 quedan excluidos de los compromisos de disponibilidad.

### 3.3. Objetivos operativos de tiempo de respuesta de las consultas

Los tiempos de respuesta de las consultas a bases de datos gubernamentales (DB Screening / smartCHECK) constituyen objetivos operativos de desempeño de Verifik, orientados a procurar una prestación eficiente de los servicios.

En condiciones normales de operación, Verifik procurará alcanzar los siguientes objetivos:

a) **Tiempo de respuesta objetivo:** realizar esfuerzos comercialmente razonables para responder las consultas dentro de un (1) segundo.

b) **Tiempo promedio objetivo:** mantener un tiempo promedio de respuesta no superior a tres (3) segundos por consulta, medido mensualmente.

c) **Tiempo máximo objetivo:** procurar que las consultas individuales no superen los diez (10) segundos de respuesta.

Los tiempos de respuesta podrán variar debido a la disponibilidad, la capacidad, el mantenimiento, la latencia y las demás condiciones técnicas de las fuentes de información gubernamentales o de terceros, así como por la utilización de mecanismos de Consulta Dinámica que requieran consultar secuencialmente múltiples fuentes de información, conforme a lo establecido en la [Política de Facturación y Consumo de Créditos](/verifik-es/politica-de-facturacion).

Los tiempos anteriores son objetivos operativos de referencia y no constituyen garantías de desempeño, obligaciones de resultado ni compromisos de tiempo máximo de respuesta.

El cliente reconoce que los tiempos de respuesta pueden variar debido a la disponibilidad, la capacidad, el mantenimiento, la latencia y las demás condiciones técnicas de las fuentes de información gubernamentales o de terceros, así como por la utilización de mecanismos de Consulta Dinámica que requieran acceder secuencialmente a múltiples fuentes.

Para efectos de medición, el tiempo de respuesta corresponde al procesamiento de una única solicitud API, excluyendo las demoras de transmisión por redes de Internet que se encuentren fuera del control de Verifik.

El incumplimiento de estos objetivos operativos no constituirá, por sí solo, un incumplimiento contractual ni dará lugar a compensaciones, créditos de servicio o penalidades. Lo anterior no exime a Verifik de cumplir las obligaciones expresamente asumidas respecto de su propia infraestructura, la disponibilidad de la plataforma y los demás compromisos aplicables conforme al presente Acuerdo.

Esta sección se interpretará conjuntamente con la [sección 6](#limitaciones-de-garantia) del presente ANS, relativa a las limitaciones de garantía de las fuentes gubernamentales.

### 3.4. Objetivos por contrato

El Panel de Cliente y la API de uso podrán comparar el desempeño mensual de smartCHECK con el objetivo de referencia del 90 %. Los objetivos contractuales específicos aplicarán únicamente cuando estén incluidos expresamente en las condiciones comerciales del cliente; en los demás casos, las cifras mostradas serán informativas. La visualización no genera compensaciones adicionales a las previstas en la sección 4.

## 4. Compensación por incumplimiento de los niveles de disponibilidad

Las compensaciones por incumplimiento de los niveles de disponibilidad establecidos en el presente ANS procederán exclusivamente cuando la indisponibilidad sea atribuible a fallas internas de Verifik y haya generado cargos efectivos al cliente por consultas API no procesadas satisfactoriamente.

En tales casos, la compensación consistirá en la restitución de los créditos efectivamente descontados por dichas consultas, sin que procedan créditos adicionales por solicitudes no facturadas.

Para smartCHECK (DB Screening), las interrupciones o limitaciones de las fuentes gubernamentales no generarán compensaciones, conforme a las exclusiones y limitaciones establecidas en las secciones [3.1](#exclusiones-disponibilidad) y [6](#limitaciones-de-garantia) de este ANS.

Los porcentajes de disponibilidad establecidos en la sección 3 constituyen los niveles de referencia para evaluar el desempeño de los servicios, pero su incumplimiento no generará automáticamente compensaciones económicas cuando no existan cargos efectivos susceptibles de restitución.

Las compensaciones previstas en esta sección se reconocerán mediante créditos de servicio aplicables a consumos futuros, no como devoluciones en efectivo, sin perjuicio de los derechos que correspondan a las partes por incumplimiento material conforme al contrato comercial aplicable.

| Servicio | Sin compensación | Con compensación |
| --- | --- | --- |
| Bases de datos (smartCHECK, DB Screening) | 90,00 % o mayor | 89,99 % o inferior |
| Email/Tel (smartACCESS, smartENROLL) | 99,00 % o mayor | 98,99 % o inferior |
| Biométricos (smartACCESS, smartENROLL) | 99,00 % o mayor | 98,99 % o inferior |
| Escaneo de documento (smartENROLL, smartACCESS) | 99,00 % o mayor | 98,99 % o inferior |

Los problemas internos del servicio de verificación en bases de datos (consulta de datos) excluyen los problemas considerados de fuerza mayor (caso fortuito) derivados de migraciones, desconexiones o intervención externa de los gobiernos que custodian las bases de datos. Verifik actúa como intermediario y, por lo tanto, no tiene poder ni control sobre las bases de datos consultadas.

## 5. Consulta Dinámica para el servicio smartCHECK {#consulta-dinamica}

Como parte de la arquitectura estándar del servicio smartCHECK, Verifik implementa un mecanismo de Consulta Dinámica diseñado para maximizar la disponibilidad, la cobertura y la confiabilidad del servicio en los endpoints compatibles.

El mecanismo de Consulta Dinámica permite que smartCHECK y DB Screening consulten de forma automática y secuencial múltiples fuentes de datos autorizadas cuando la fuente de datos principal devuelve una respuesta no satisfactoria, incluidas, sin limitarse a, respuestas «Not Found» o respuestas equivalentes de nivel HTTP 400. Esta arquitectura tiene por objeto aumentar la probabilidad de obtener un resultado de verificación satisfactorio mediante el aprovechamiento de múltiples fuentes de datos elegibles.

El cliente reconoce y acepta que la calidad, la integridad y la disponibilidad de las bases de datos gubernamentales pueden variar significativamente según la jurisdicción, y que determinadas bases de datos pueden presentar una mayor probabilidad de respuestas no satisfactorias debido a registros incompletos, interrupciones del servicio o cobertura limitada de datos.

Para mitigar estas limitaciones, la Consulta Dinámica se encuentra habilitada por defecto en todos los endpoints aplicables de smartCHECK y forma parte integral de la estrategia de redundancia y conmutación por error de Verifik. Este mecanismo permite a Verifik mantener, en determinados endpoints, una disponibilidad y cobertura del servicio cercanas al cien por ciento (100 %) mediante el enrutamiento dinámico de solicitudes hacia fuentes alternativas disponibles cuando sea necesario.

El cliente reconoce y acepta además que:

a) La Consulta Dinámica tiene por objeto aumentar la probabilidad de obtener respuestas de verificación satisfactorias, pero no garantiza una coincidencia satisfactoria en todos los casos.

b) Los tiempos de respuesta pueden variar y, en algunos casos, ser superiores a los de las consultas estándar de una sola fuente debido a la naturaleza en cascada de las solicitudes a múltiples fuentes.

c) La eficacia y la disponibilidad de la Consulta Dinámica seguirán sujetas al tiempo de actividad, la accesibilidad y la calidad de los datos de las fuentes subyacentes de terceros o gubernamentales.

d) Verifik se reserva el derecho de modificar, priorizar o sustituir fuentes de datos dentro de la arquitectura de Consulta Dinámica, a su exclusiva discreción, con el fin de mantener la continuidad del servicio, optimizar la cobertura y mejorar el desempeño de la verificación.

La Consulta Dinámica se considerará una característica inherente del servicio smartCHECK y se aplicará automáticamente a todos los clientes que utilicen endpoints elegibles, salvo que Verifik disponga lo contrario por escrito.

Las reglas de cobro asociadas a la Consulta Dinámica, incluidos los precios dinámicos de la cédula colombiana, están en la [Política de Facturación y Consumo de Créditos](/verifik-es/politica-de-facturacion).

## 6. Limitaciones de garantía de fuentes de información {#limitaciones-de-garantia}

Verifik no es propietario ni administrador de las bases de datos gubernamentales consultadas y no controla su actualización, disponibilidad ni exactitud. Por ello, no garantiza el tiempo de respuesta, el tiempo promedio de actividad ni la exactitud de los datos provenientes de dichas fuentes. Esta limitación aplica exclusivamente a los servicios smartCHECK (DB Screening) y no exime a Verifik de las obligaciones expresamente asumidas respecto de su propia infraestructura.

**Control de versiones.** Verifik identificará las nuevas versiones de este ANS mediante su fecha de publicación. Las modificaciones a contratos vigentes se sujetarán a las reglas de modificación pactadas en cada contrato.

<a id="dynamic-pricing-billing"></a>

**Documentos relacionados.** Las reglas de cobro y los precios dinámicos están en la [Política de Facturación y Consumo de Créditos](/verifik-es/politica-de-facturacion#dynamic-pricing-billing).
