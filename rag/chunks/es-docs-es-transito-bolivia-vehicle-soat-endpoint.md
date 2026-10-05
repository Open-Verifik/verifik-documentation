---
id: "es-docs-es-transito-bolivia-vehicle-soat-endpoint"
title: "Bolivia - SOAT de Vehículo — Endpoint"
sourcePath: "docs-es/transito/bolivia/vehicle-soat.mdx"
locale: "es"
category: "transito"
tags:
  - "bo"
  - "transito"
endpoint: "/v2/bo/vehicle-soat"
sourceAnchor: "Endpoint"
slug: "/transito/bolivia/vehicle-soat"
url: "https://docs.verifik.co/verifik-es/transito/bolivia/vehicle-soat"
---

# Bolivia - SOAT de Vehículo
**API path(s):** /v2/bo/vehicle-soat

## Endpoint

Verifik consulta el registro oficial de **SOAT** (*Seguro Obligatorio de Accidentes de Tránsito*) en Bolivia por **placa de matrícula**. Usa este endpoint para **cumplimiento de flotas**, **verificación de seguros** y **controles de tránsito**.

Devuelve detalles de cobertura SOAT cuando la fuente los proporciona:

- **`plate`** — placa de matrícula (**5–8** caracteres), normalizada a mayúsculas
- **`managementYear`** — año de gestión o cobertura SOAT
- **`validFrom`** / **`validTo`** — fechas de vigencia (DD/MM/YYYY)
- **`vehicleType`** — categoría del vehículo (p. ej. AUTOMOVIL, VAGONETA, MOTOCICLETA)
- **`useType`** — clasificación de uso (PARTICULAR, COMERCIAL)
- **`department`** — departamento asociado a la póliza
- **`status`** — estado calculado: VIGENTE, VENCIDO o PENDIENTE
- Respuesta **firmada** por Verifik

### Endpoint

```
GET v2/bo/vehicle-soat
```

### Headers

| Header | Valor | Descripción |
| --- | --- | --- |
| Accept | application/json | Formato de respuesta |
| Authorization | Bearer \ | Tu JWT de Verifik |

### Parámetros

| Campo | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| plate | String | Sí | Placa de matrícula sin espacios (**5–8** caracteres). |
| force | String | No | Establecer en `true` para omitir caché y consultar la fuente. |

### Solicitud

```javascript
const { data } = await axios.get("https://api.verifik.co/v2/bo/vehicle-soat", {
  params: { plate: "1852PHD" },
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
  },
});
console.log(data);
```

```python
url = "https://api.verifik.co/v2/bo/vehicle-soat"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"plate": "1852PHD"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
