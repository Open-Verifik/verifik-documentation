---
id: "es-docs-es-validacion-vehiculos-colombia-verificacion-siniestros-fasecolda-solicitud-2"
title: "Verificación de Siniestros — Solicitud"
sourcePath: "docs-es/validacion-vehiculos/colombia/verificacion-siniestros-fasecolda.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoint: "/v2/co/fasecolda/sinister"
sourceAnchor: "Solicitud"
slug: "/validacion-vehiculos/colombia/verificacion-siniestros-fasecolda"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/verificacion-siniestros-fasecolda"
---

# Verificación de Siniestros
**API path(s):** /v2/co/fasecolda/sinister

La API de Verificación de Siniestros Fasecolda de Verifik te ayuda a verificar el historial de reclamos de seguros de vehículos en Colombia usando datos oficiales de Fasecolda. Está diseñada para agilizar tus procesos de verificación de vehículos, evaluar riesgos y asegurar que tengas información completa sobre el historial de seguros de un vehículo.
Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de verificar reclamos de seguros e historial de accidentes de vehículos.

## Solicitud

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/fasecolda/sinister", {
  params: { plate: "ABC123" },
  headers: { 
    Accept: "application/json", 
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` 
  },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/fasecolda/sinister"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"plate": "ABC123"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

```json
{
  "data": {
    "plate": "KDK605",
    "sinister": [
      {
        "id": "1",
        "accidentDate": "20/01/2015",
        "protection": "Pérdida Menor Cuantía"
      },
      {
        "id": "2",
        "accidentDate": "17/08/2012",
        "protection": "Pérdida Menor Cuantía"
      },
      {
        "id": "3",
        "accidentDate": "16/01/2017",
        "protection": "Pérdida Menor Cuantía"
      }
    ]
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "February 9, 2024 7:43 PM"},
  "id": "PFDB2"
}
```

  
  

```json
{
    "code": "NotFound",
    "message": "Record not found."
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing plate"
}
```

### Notas

- "Siniestro" se refiere a reclamos de seguros o accidentes en la terminología de seguros colombiana.
- "Pérdida Menor Cuantía" indica reclamos de pérdida menor.
- Este servicio es esencial para evaluar el historial de seguros de un vehículo y riesgos potenciales.
- Cada registro de reclamo incluye un ID único, fecha de accidente y tipo de protección.
