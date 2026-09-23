---
id: "es-docs-es-legal-acuerdo-de-niveles-de-servicio-acuerdo-de-niveles-de-servicio-2"
title: "Acuerdo de Niveles de Servicio — **Acuerdo de Niveles de Servicio**"
sourcePath: "docs-es/legal/acuerdo-de-niveles-de-servicio.md"
locale: "es"
category: "legal"
tags:
  - "co"
  - "legal"
endpoints:
  - "/v2/co/cedula"
  - "/v2/co/cedula/premium"
sourceAnchor: "**Acuerdo de Niveles de Servicio**"
slug: "/acuerdo-de-niveles-de-servicio"
url: "https://docs.verifik.co/verifik-es/acuerdo-de-niveles-de-servicio"
---

# Acuerdo de Niveles de Servicio
**API path(s):** /v2/co/cedula, /v2/co/cedula/premium

## **Acuerdo de Niveles de Servicio**

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

#### **5. Disponibilidad de la Plataforma**

La Plataforma estará disponible al menos:

| **Producto** | **Disponibilidad**                                                                          | **Notas**                                                       |
| ------------ | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| SmartCHECK   | 90.0% > Data API                                                                            | Data API, depende de las conexiones con Fuentes Gubernamentales |
| smartACCESS  | 99.0% > Email/Tel98.0% > Biometrics                                          |                                                                 |
| smartENROLL  | 99.0% > Email/Tel98.0% > Biometrics98.0% > Scaneo de Docs90.0% > Data API | Data API, depende de las conexiones con Fuentes Gubernamentales |

##### **5.1. Exclusiones de disponibilidad específicas para puntos finales de Verifik**

Debido a la imprevisibilidad histórica de la disponibilidad operativa de ciertas fuentes de datos externas, algunos endpoints quedan excluidos de los compromisos de disponibilidad de la plataforma y de las disposiciones de compensación por tiempo de inactividad de este Acuerdo.

Los siguientes endpoints quedan excluidos:

- México: Validación del INE
- México: Validación de placas vehiculares

Las interrupciones, los periodos de mantenimiento, el rendimiento degradado, las demoras en la respuesta o la indisponibilidad temporal que afecten a estos endpoint no:

- se considerarán tiempo de inactividad de la plataforma;
- se incluirán en los cálculos de disponibilidad de la plataforma;
- darán derecho a créditos de servicio ni a ninguna otra compensación en virtud de este Acuerdo.
