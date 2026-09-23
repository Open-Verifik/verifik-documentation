---
id: "es-docs-es-validacion-empresarial-brazil-respuesta-2"
title: "Verificación empresarial (CNPJ) — Respuesta"
sourcePath: "docs-es/validacion-empresarial/brazil.mdx"
locale: "es"
category: "validacion-empresarial"
tags:
  - "br"
  - "validacion-empresarial"
endpoint: "/v2/br/company"
sourceAnchor: "Respuesta"
---

# Verificación empresarial (CNPJ)
**API path(s):** /v2/br/company

## Respuesta

```json
{
    "data": {
        "address": {
            "city": "CAMPINAS",
            "complement": "KM 98",
            "district": "JARDIM EULINA",
            "state": "SP",
            "street": "ROD ANHANGUERA KM 98",
            "zipCode": "SN"
        },
        "businessName": "ROBERT BOSCH LIMITADA",
        "documentNumber": "45990181000189",
        "documentType": "CNPJ",
        "legalNature": "206-2 - Sociedade Empresária Limitada",
        "mainActivity": [
            {
                "code": "29.41-7-00",
                "description": "Fabricação de peças e acessórios para o sistema motor de veículos automotores"
            }
        ],
        "openingDate": "21/07/1966",
        "secondaryActivities": [
            {
                "code": "18.30-0-03",
                "description": "Reprodução de software em qualquer suporte"
            },
            {
                "code": "23.99-1-02",
                "description": "Fabricação de abrasivos"
            },
            {
                "code": "25.39-0-02",
                "description": "Serviços de tratamento e revestimento em metais"
            },
            {
                "code": "26.10-8-00",
                "description": "Fabricação de componentes eletrônicos"
            },
            {
                "code": "26.40-0-00",
                "description": "Fabricação de aparelhos de recepção, reprodução, gravação e amplificação de áudio e vídeo"
            },
            {
                "code": "82.99-7-99",
                "description": "Outras atividades de serviços prestados principalmente às empresas não especificadas anteriormente"
            },
            {
                "code": "85.99-6-04",
                "description": "Treinamento em desenvolvimento profissional e gerencial"
            }
        ],
        "status": "ATIVA",
        "taxId": "45.990.181/0001-89",
        "tradeName": "",
        "type": "MATRIZ"
    },
    "signature": {
        "dateTime": "October 10, 2025 11:02 AM",
        "message": "Certified by Verifik.co"
    },
    "id": "2EM87"
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
