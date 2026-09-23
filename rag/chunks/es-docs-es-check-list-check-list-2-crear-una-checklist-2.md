---
id: "es-docs-es-check-list-check-list-2-crear-una-checklist-2"
title: "Check List — 2. Crear una checklist"
sourcePath: "docs-es/check-list/check-list.mdx"
locale: "es"
category: "check-list"
tags:
  - "check-list"
sourceAnchor: "2. Crear una checklist"
slug: "/check-list"
url: "https://docs.verifik.co/verifik-es/check-list"
---

# Check List

Operas en uno o más países y vuelves a elegir los mismos servicios de SmartCheck. **Guarda esa mezcla como una Check List.** Prueba un servicio de la lista o envíala a SmartBatch.
Abre **Check List** en Smart-Agent en [ai.verifik.co/check-list](https://ai.verifik.co/check-list). Guardar la lista es gratis. Ejecutar un servicio gasta créditos como cualquier otra llamada a la API.
Guardar la lista es gratis. Ejecutar un servicio gasta créditos como cualquier otra llamada a la API.

## 2. Crear una checklist

Elige uno o más países y ponle un nombre (por ejemplo **KYC Colombia** o **Fleet Chile**).

Los países se fijan al crear la lista. No los cambias después en el espacio de trabajo.

---

### 3. Agregar servicios

Abre la lista. Los servicios guardados van arriba. Abajo, busca en el catálogo y filtra por **Personas**, **Vehículos** o **Empresas**. Las verificaciones internacionales de antecedentes quedan al final.

Usa **Seleccionar** para agregar. Usa **Abrir** para probarlo. Borrador y Activa son etiquetas para organizar — ambas funcionan igual.

---

### 4. Probar un servicio

Abre un servicio. El panel tiene **Acerca de**, **Petición** y **Resultado**. Llena los campos y pulsa **Ejecutar**.

El resultado es la misma respuesta de esa API del catálogo. El saldo de créditos se actualiza después de la llamada.

---

### 5. Enviar un SmartBatch

Cuando quieras un archivo o una cola con los mismos servicios, pulsa **Crear SmartBatch**. SmartBatch usa **un país**. Si la lista tiene más de uno, elige con cuál empezar.

SmartBatch se abre con ese país, el nombre de la lista y los servicios seleccionados. Sigue en el asistente de [SmartBatch](/verifik-es/smart-batch).

---

## Qué no es Check List

| Evita pensar | Realidad |
| --- | --- |
| Un motor de lotes | Check List **guarda** la mezcla. [SmartBatch](/verifik-es/smart-batch) corre el archivo o la cola. |
| KYC hospedado | [SmartEnroll](/verifik-es/smartenroll) es otro producto. |
| Un registro nuevo cada vez que pruebas | Ejecutar llama la API de catálogo de ese servicio. |

---

## Relacionado

- [Guía de API de Check List](/verifik-es/check-list/guia-api) — guardar y cargar listas desde tu backend
- [SmartCheck](/verifik-es/verificacion-inteligente) — catálogo de APIs de identidad y datos
- [SmartBatch](/verifik-es/smart-batch) — corre la mezcla como archivo o cola
