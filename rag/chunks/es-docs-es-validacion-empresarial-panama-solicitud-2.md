---
id: "es-docs-es-validacion-empresarial-panama-solicitud-2"
title: "Verificación empresarial en Panamá — Solicitud"
sourcePath: "docs-es/validacion-empresarial/panama.mdx"
locale: "es"
category: "validacion-empresarial"
tags:
  - "pa"
  - "validacion-empresarial"
endpoints:
  - "/v2/pa/company"
  - "/v2/pa/company?"
  - "/v2/pa/company?documenttype=ruc&documentnumber=155703400-2-2021&dv=39"
sourceAnchor: "Solicitud"
slug: "/validacion-empresarial/panama"
url: "https://docs.verifik.co/verifik-es/validacion-empresarial/panama"
---

# Verificación empresarial en Panamá
**API path(s):** /v2/pa/company, /v2/pa/company?, /v2/pa/company?documenttype=ruc&documentnumber=155703400-2-2021&dv=39

La API de Verifik te permite validar sociedades y personas jurídicas panameñas usando el **RUC** (*Registro Único de Contribuyente*) y datos oficiales del registro mercantil. Está pensada para **KYB** (Conozca a su Negocio), onboarding de proveedores y controles de cumplimiento.

## Solicitud

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/pa/company", {
  params: { documentType: "RUC", documentNumber: "155703400-2-2021", dv: "39" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```php
 "RUC",
    "documentNumber" => "155703400-2-2021",
    "dv" => "39"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/pa/company?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/pa/company"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "RUC", "documentNumber": "155703400-2-2021", "dv": "39"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```go
package main

    "fmt"
    "net/http"
)

func main() {
    url := "https://api.verifik.co/v2/pa/company?documentType=RUC&documentNumber=155703400-2-2021&dv=39"
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("Accept", "application/json")
    req.Header.Set("Authorization", "Bearer "+getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    fmt.Println(resp.Status)
}
```

### Respuesta

  

```json
{
  "data": {
    "address": "PROVINCIA PANAMÁ",
    "businessName": "MATA ENTERPRISES, S.A.",
    "capital": "1,000.00",
    "currencyType": "Dólares americanos",
    "currentStatus": "DISUELTO",
    "documentNumber": "155703400-2-2021",
    "documentType": "RUC",
    "dv": "39",
    "folioOrFincaOrFicha": "(MERCANTIL) Folio Nº 126965 (S)",
    "idFolio": "1183912",
    "organizationType": "SOCIEDAD ANONIMA",
    "recordType": "Mercantil",
    "registrationDate": "13/03/1984",
    "representatives": {
      "director": "ABDIEL NU#EZ",
      "president": "JOSE ALBERTO RUIZ",
      "representative": "EL PRESIDENTE, EN SU AUSENCIA EL TESORERO O EL SECRETARIO.",
      "residentAgent": "JURGEN MOSSACK",
      "secretary": "LETICIA MONTOYA",
      "subscriber": "DIVA ARGELIS PATINO DE DONADO",
      "secretarioAsistente": "ABDIEL NU#EZ",
      "tesoreroAsistente": "CORNELIO MCKAY",
      "treasurer": "FRANCIS PEREZ",
      "vicePresident": "ABDIEL NU#EZ"
    },
    "status": "",
    "validity": "PERPETUA"
  },
  "signature": {
    "dateTime": "October 10, 2025 5:25 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "1SPK4"
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
  "message": "documentType must be one of: [RUC]"
}
```
```json
{
  "code": "MissingParameter",
  "message": "missing documentNumber\n"
}
```
```json
{
  "code": "MissingParameter",
  "message": "missing documentType\n"
}
```
```json
{
  "code": "MissingParameter",
  "message": "missing dv\n"
}
```

  
  

```json
{
  "message": "Authentication required",
  "code": "UNAUTHORIZED"
}
```

  
  

```json
{
    "code": "InternalServerError",
    "message": "Server error."
}
```
