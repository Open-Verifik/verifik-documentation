---
id: "es-docs-es-validacion-de-vehiculo-colombia-consulta-completa-de-vehiculo-con-his-notas-3"
title: "Consulta Completa de Vehículo con Historial por Placa y Documento de Identificación RUNT — Notas"
sourcePath: "docs-es/validacion-de-vehiculo/colombia/consulta-completa-de-vehiculo-con-historial-por-placa-y-documento-de-identificacion-runt.mdx"
locale: "es"
category: "validacion-de-vehiculo"
tags:
  - "co"
  - "validacion-de-vehiculo"
endpoint: "/v2/co/runt/vehicle-by-plate"
sourceAnchor: "Notas"
slug: "/validacion-de-vehiculo/colombia/consulta-completa-de-vehiculo-con-historial-por-placa-y-documento-de-identificacion-runt"
url: "https://docs.verifik.co/verifik-es/validacion-de-vehiculo/colombia/consulta-completa-de-vehiculo-con-historial-por-placa-y-documento-de-identificacion-runt"
---

# Consulta Completa de Vehículo con Historial por Placa y Documento de Identificación RUNT
**API path(s):** /v2/co/runt/vehicle-by-plate

La API de validación vehicular de Verifik permite consultar información oficial registrada en el Registro Único Nacional de Tránsito (RUNT) de Colombia, utilizando el número de placa del vehículo como identificador principal.
Esta integración es ideal para empresas del sector automotriz, financiero, asegurador y de movilidad, que necesitan confirmar la autenticidad de los datos vehiculares antes de aprobar operaciones, emitir pólizas o realizar procesos de control y cumplimiento normativo.

## Notas

-   RUNT proporciona información completa del vehículo incluyendo especificaciones técnicas y estado legal.
-   SOAT (Seguro Obligatorio de Accidentes de Tránsito) es el seguro obligatorio de accidentes en Colombia.
-   El estado "VIGENTE" indica pólizas de seguros activas/actuales.
-   El estado del vehículo "ACTIVO" significa que el vehículo está actualmente registrado y operativo.

---

## Casos de Uso Empresariales

La API de consulta de vehículos por placa en RUNT es utilizada por múltiples sectores:

-   **Aseguradoras y financieras**: verificación de activos vehiculares antes de otorgar créditos o pólizas.
-   **Empresas de movilidad y transporte**: validación del estado legal y técnico de los vehículos asociados.
-   **Plataformas de compraventa de autos usados**: confirmación de registros para prevenir fraudes.
-   **Entidades gubernamentales o de control**: cruces automáticos para auditorías o procesos de fiscalización.

## Cumplimiento y Calidad de Datos

### Cumplimiento, disponibilidad y precisión

La API se conecta directamente con fuentes oficiales como el RUNT, garantizando:

-   Información verificada y actualizada.
-   Alta disponibilidad y tiempos de respuesta óptimos.
-   Cumplimiento normativo bajo estándares KYC, KYB y AML.
-   Protección de datos conforme a la Ley 1581 de 2012 y regulaciones de la Superintendencia de Transporte.

Verifik monitorea continuamente la disponibilidad de la fuente y actualiza su servicio para asegurar la continuidad operativa y la confiabilidad de los resultados.

### Información técnica adicional

-   **Método**: GET
-   **Formato de respuesta**: JSON
-   **Frecuencia de actualización**: Tiempo real según fuente RUNT
-   **Fuente oficial**: Registro Único Nacional de Tránsito (RUNT), Colombia
-   **Cobertura**: Nacional
