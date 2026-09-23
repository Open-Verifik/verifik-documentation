---
id: "es-docs-es-validacion-vehiculos-colombia-registros-vehiculos-por-vin-runt-notas-6"
title: "Registros de Vehículos por VIN en RUNT — Notas"
sourcePath: "docs-es/validacion-vehiculos/colombia/registros-vehiculos-por-vin-runt.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoints:
  - "/v2/co/runt/vehicle-by-vin"
  - "/v2/co/runt/vehicle-by-vin?vin=3mvdm2wlaml234946"
sourceAnchor: "Notas"
slug: "/validacion-vehiculos/colombia/registros-vehiculos-por-vin-runt"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/registros-vehiculos-por-vin-runt"
---

# Registros de Vehículos por VIN en RUNT
**API path(s):** /v2/co/runt/vehicle-by-vin, /v2/co/runt/vehicle-by-vin?vin=3mvdm2wlaml234946

La API de Validación Vehicular por VIN de Verifik permite consultar el historial completo y las especificaciones técnicas de un vehículo registrado en Colombia utilizando su Número de Identificación Vehicular (VIN).
Este método es particularmente útil cuando no se dispone de la placa o para verificar la autenticidad de la identidad de un vehículo durante inspecciones, ya que el VIN es un identificador único y difícil de alterar.

## Notas

-   VIN (Número de Identificación del Vehículo) es un identificador único de 17 caracteres para vehículos.
-   Este servicio proporciona la misma información completa que el servicio basado en placa.
-   El estado del vehículo "ACTIVO" significa que el vehículo está actualmente registrado y operativo.
-   La información del seguro SOAT se incluye cuando está disponible.

---

## Casos de Uso Empresariales

La API de consulta vehicular por VIN en RUNT es esencial para:

-   **Inspecciones y Avalúos Vehiculares**: Para verificar que los identificadores físicos coincidan con los registros oficiales.
-   **Cumplimiento en Importación/Exportación**: Para validar orígenes y características técnicas.
-   **Reclamaciones de Seguros**: Para confirmar la identidad del vehículo y la cobertura de la póliza.
-   **Concesionarios de Usados**: Para prevenir fraudes detectando alteraciones o clonación de VIN.

## Cumplimiento y Calidad de Datos

### Cumplimiento, disponibilidad y precisión

La API se conecta directamente con fuentes oficiales como el RUNT, garantizando:

-   Información verificada y actualizada.
-   Alta disponibilidad y tiempos de respuesta óptimos.
-   Cumplimiento normativo con leyes de transporte y protección de datos.

### Información técnica adicional

-   **Método**: GET
-   **Formato de respuesta**: JSON
-   **Frecuencia de actualización**: Tiempo real
-   **Fuente oficial**: RUNT Colombia
-   **Cobertura**: Nacional

## Sobre Verifik

Verifik es una plataforma de verificación de identidad y cumplimiento que conecta empresas con fuentes oficiales en toda América Latina.
