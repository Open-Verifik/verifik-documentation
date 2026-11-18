---
id: "es-docs-es-validacion-vehiculos-colombia-registros-vehiculos-por-placa-simplific-notas-3"
title: "Validación Vehicular Simplificada por Placa en RUNT — Notas"
sourcePath: "docs-es/validacion-vehiculos/colombia/registros-vehiculos-por-placa-simplificado-runt.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoint: "/v2/co/runt/vehicle-by-plate-simplified"
sourceAnchor: "Notas"
slug: "/validacion-vehiculos/colombia/registros-vehiculos-por-placa-simplificado-runt"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/registros-vehiculos-por-placa-simplificado-runt"
---

# Validación Vehicular Simplificada por Placa en RUNT
**API path(s):** /v2/co/runt/vehicle-by-plate-simplified

La API de Validación Vehicular Simplificada de Verifik permite consultar información esencial del vehículo en el Registro Único Nacional de Tránsito (RUNT) utilizando la placa y el número de documento del propietario.
Esta versión ligera de la consulta vehicular está diseñada para aplicaciones que requieren una verificación rápida de la identidad del vehículo y sus características básicas, sin la carga de datos extensos como el historial de seguros y revisiones técnico-mecánicas.

## Notas

-   Esta versión simplificada proporciona información esencial del vehículo sin datos detallados de seguros e inspección técnica.
-   El estado del vehículo "ACTIVO" significa que el vehículo está actualmente registrado y operativo.
-   Se proporcionan números VIN (Número de Identificación del Vehículo) y chasis para identificación del vehículo.
-   Este servicio es ideal para necesidades básicas de verificación de vehículos.

### Más información

Las secciones siguientes son documentación de producto general (no forman parte del contrato de la API).

---

## Casos de Uso Empresariales

La API de consulta simplificada RUNT es ideal para:

-   **Gestión de Parqueaderos**: Para verificar detalles del vehículo en puntos de entrada/salida.
-   **Logística y Gestión de Flotas**: Registro rápido de vehículos en sistemas internos.
-   **Tiendas de Repuestos**: Para confirmar especificaciones del vehículo para compatibilidad de partes.
-   **Peajes y Control de Acceso**: Validación rápida de la categoría del vehículo.

## Cumplimiento y Calidad de Datos

### Cumplimiento, disponibilidad y precisión

La API se conecta directamente con fuentes oficiales como el RUNT, garantizando:

-   Información verificada y actualizada.
-   Alta disponibilidad y tiempos de respuesta óptimos.
-   Cumplimiento normativo con leyes de protección de datos.

### Información técnica adicional

-   **Método**: GET
-   **Formato de respuesta**: JSON
-   **Frecuencia de actualización**: Tiempo real
-   **Fuente oficial**: RUNT Colombia
-   **Cobertura**: Nacional

## Sobre Verifik

Verifik es una plataforma de verificación de identidad y cumplimiento que conecta empresas con fuentes oficiales en toda América Latina.
