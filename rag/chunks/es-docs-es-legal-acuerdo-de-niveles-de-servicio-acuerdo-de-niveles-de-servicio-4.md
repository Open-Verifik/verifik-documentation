---
id: "es-docs-es-legal-acuerdo-de-niveles-de-servicio-acuerdo-de-niveles-de-servicio-4"
title: "Acuerdo de Niveles de Servicio — **Acuerdo de Niveles de Servicio**"
sourcePath: "docs-es/legal/acuerdo-de-niveles-de-servicio.md"
locale: "es"
category: "legal"
tags:
  - "legal"
sourceAnchor: "**Acuerdo de Niveles de Servicio**"
slug: "/acuerdo-de-niveles-de-servicio"
url: "https://docs.verifik.co/verifik-es/acuerdo-de-niveles-de-servicio"
---

# Acuerdo de Niveles de Servicio

## **Acuerdo de Niveles de Servicio**

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
