---
id: "es-docs-es-validacion-vehiculos-colombia-licencia-conducir-runt-notas-5"
title: "Consulta de Licencia de Conducción por Cédula en RUNT (Premium) | Verifik API Colombia — Notas"
sourcePath: "docs-es/validacion-vehiculos/colombia/licencia-conducir-runt.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoints:
  - "/v2/co/cedula"
  - "/v2/co/runt/conductor"
sourceAnchor: "Notas"
slug: "/validacion-vehiculos/colombia/licencia-conducir-runt"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/licencia-conducir-runt"
---

# Consulta de Licencia de Conducción por Cédula en RUNT (Premium) | Verifik API Colombia
**API path(s):** /v2/co/cedula, /v2/co/runt/conductor

La API de validación de licencias de Verifik permite consultar información oficial registrada en el Registro Único Nacional de Tránsito (RUNT) de Colombia, utilizando el número de documento de identidad del conductor.
Esta integración es esencial para empresas de transporte, agencias de alquiler de vehículos, aseguradoras y plataformas logísticas que necesitan verificar el estado legal y la idoneidad de los conductores antes de la contratación o autorización de uso de vehículos.
RUNT ahora autentica al conductor con el primer apellido (`primerApellido`) y puede devolver nombres enmascarados. Esta ruta **v2** sigue funcionando sin cambios de integración.
**Tarifa desde el 1 de septiembre de 2026 (America/Bogota):**
- Omita `primerApellido` — Verifik resuelve el apellido internamente — **Premium** (conductor + consulta de nombre). Una fila en el historial.
- Envíe `primerApellido` — se omite la consulta de nombre — tarifa **Básica** (igual que [`/v3/co/runt/conductor`](/verifik-es/validacion-vehiculos/colombia/licencia-conducir-runt-basico)). Una fila en el historial.
Use la ruta [Básica v3](/verifik-es/validacion-vehiculos/colombia/licencia-conducir-runt-basico) si siempre envía `primerApellido` y quiere que sea obligatorio.

## Notas

-   RUNT es el sistema de Registro Nacional de Tránsito de Colombia.
-   Las categorías de licencia incluyen B1 (autos), A2 (motocicletas), C1 (camiones), etc.
-   El estado "ACTIVA" indica que la licencia está actualmente válida.
-   Múltiples categorías de licencia pueden estar asociadas con un conductor.
-   `PA` es pasaporte, no PPT. Envíe `primerApellido` al consultar un pasaporte; RUNT autentica al conductor con el primer apellido y enmascara el nombre completo en la interfaz oficial.

---

## Casos de Uso Empresariales

La API de consulta de licencia de conducción en RUNT es utilizada por múltiples sectores:

-   **Transporte y Logística**: Para verificar la elegibilidad del conductor y la validez de la licencia durante la contratación.
-   **Alquiler de Vehículos**: Para asegurar que los clientes tengan una licencia válida antes de entregar un vehículo.
-   **Aseguradoras**: Para evaluación de riesgos y emisión de pólizas basadas en el historial del conductor.
-   **Apps de Movilidad y Domicilios**: Para validar las credenciales de los conductores en tiempo real.

## Cumplimiento y Calidad de Datos

### Cumplimiento, disponibilidad y precisión

La API se conecta directamente con fuentes oficiales como el RUNT, garantizando:

-   Información verificada y actualizada.
-   Alta disponibilidad y tiempos de respuesta óptimos.
-   Cumplimiento normativo con regulaciones de transporte y KYC.
-   Protección de datos conforme a la Ley 1581 de 2012.

### Información técnica adicional

-   **Método**: GET
-   **Formato de respuesta**: JSON
-   **Frecuencia de actualización**: Tiempo real según fuente RUNT
-   **Fuente oficial**: Registro Único Nacional de Tránsito (RUNT), Colombia
-   **Cobertura**: Nacional
