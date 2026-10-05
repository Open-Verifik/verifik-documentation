---
id: "en-docs-business-validation-colombia-rues-business-information-response-7"
title: "RUES Complete Business Validation (v3) — Response"
sourcePath: "docs/business-validation/colombia-rues-business-information.mdx"
locale: "en"
category: "business-validation"
tags:
  - "business-validation"
endpoint: "/api/co/rues-complete"
sourceAnchor: "Response"
slug: "/business-validation/colombia-rues-business-information"
url: "https://docs.verifik.co/business-validation/colombia-rues-business-information"
---

# RUES Complete Business Validation (v3)
**API path(s):** /api/co/rues-complete

Verifik's RUES Complete Business Validation API helps you retrieve comprehensive business information from Colombia's RUES (Registro Único Empresarial y Social) registry. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to access complete business information for Colombian companies, partners, or vendors.

## Response

```json
{
    "data": {
        "commercialRegistry": {
            "NIT": "901140289",
            "acronym": null,
            "businessName": "PICO GRUP S.A.S",
            "chamberCommerce": "PIEDEMONTE ARAUCANO",
            "commercialAddress": null,
            "companyLocation": "PIEDEMONTE ARAUCANO",
            "companyType": "SOCIEDADES POR ACCIONES SIMPLIFICADAS SAS",
            "email": null,
            "enrollmentDate": "2017-12-14",
            "idRm": "560000026379",
            "lastRenewedYear": "2022",
            "lastUpdatedDate": "2025-06-03",
            "legalRepresentatives": {
                "faculty": "REPRESENTACION LEGAL (PRINCIPALES) ****1116870475 - PICO SANTAMARIA DAVINSON ANDRESFACULTADES ****GERENTE. ACTUARA COMO REPRESENTANTE LEGAL DE LA SOCIEDAD EL GERENTE GENERAL EN EJERCICIO DEL CARGO. EL GERENTE TENDRÁ LA ADMINISTRACIÓN Y GESTIÓN DE LOS NEGOCIOS SOCIALES CON SUJECIÓN A LA LEY, LOS ESTATUTOS SOCIALES, LOS REGLAMENTOS Y RESOLUCIONES DE LA ASAMBLEA GENERAL DE ACCIONISTAS. FUNCIONES Y ATRIBUCIONES DEL GERENTE GENERAL: EL GERENTE TENDRÁ LAS FUNCIONES DE SU CARGO Y LAS SIGUIENTES: 1. REPRESENTAR LEGALMENTE A LA SOCIEDAD, JUDICIAL O EXTRAJUDICIALMENTE, ANTE LOS ASOCIADOS, ANTE TERCEROS, Y ANTE CUALQUIER CLASE DE AUTORIDADES JUDICIALES Y ADMINISTRATIVAS, PERSONAS NATURALES O JURÍDICAS ETC. 2. EJECUTAR LOS ACUERDOS Y RESOLUCIONES DE LA ASAMBLEA GENERAL DE ACCIONISTAS. 3. REALIZAR LOS ACTOS Y CELEBRAR LOS CONTRATOS QUE TIENDAN A CUMPLIR LOS FINES DE LA SOCIEDAD. EN EJERCICIO DE ESTA FACULTAD PODRÁ: ENAJENAR, ADQUIRIR, MUDAR, GRAVAR, LIMITAR EN CUALQUIER FORMA Y A CUALQUIER TÍTULO LOS BIENES MUEBLES E INMUEBLES DE LA SOCIEDAD; TRANSIGIR, COMPROMETER, ARBITRAR, DESISTIR, NOVAR, RECIBIR E INTERPONER ACCIONES Y RECURSOS DE CUALQUIER GÉNERO DE TODOS LOS NEGOCIOS O ASUNTOS DE CUALQUIER ÍNDOLE QUE TENGA PENDIENTE LA SOCIEDAD; CONTRAER OBLIGACIONES CON GARANTÍA PERSONAL, PRENDARÍA O HIPOTECARIA; DAR O RECIBIR DINERO MUTUO, HACER DEPÓSITOS BANCARIOS; FIRMAR TODA CLASE DE TÍTULOS VALORES Y NEGOCIAR ESTA CLASE INSTRUMENTOS, FIRMARLOS, ACEPTARLOS, ENDOSARLOS, NEGOCIARLOS, PAGARLOS, PROTESTARLOS, DESCARGARLOS, TENERLOS O CANCELARLOS; INTERPONER TODA CLASE DE RECURSOS, COMPARECER EN JUICIOS E QUE SE DISCUTE EL DOMINIO DE LOS BIENES SOCIALES DE CUALQUIER CLASE; FORMAR NUEVAS SOCIEDADES O ENTRAR A FORMAR PARTE DE OTROS BIENES SOCIALES DE CUALQUIER CLASE; FORMAR NUEVAS SOCIEDADES O ENTRAR A FORMAR PARTE DE OTRAS YA EXISTENTES. 4. CONSTITUIR LOS APODERADOS JUDICIALES Y EXTRAJUDICIALES QUE JUZGUE NECESARIO PARA LA ADECUADA REPRESENTACIÓN DE LA SOCIEDAD DELEGÁNDOLES LAS FACULTADES QUE ESTIME CONVENIENTES, DE AQUELLAS QUE EL MISMO GOZA. 5. PRESENTAR LOS INFORMES Y DOCUMENTOS DE QUE TRATA EL ARTÍCULO 446 DE CÓDIGO DE COMERCIO A LA ASAMBLEA GENERAL. 6. DESIGNAR, PROMOVER Y REMOVER LOS EMPLEADOS DE LA SOCIEDAD SIEMPRE Y CUANDO ELLO NO DEPENDA DE OTRO ÓRGANO SOCIAL Y SEÑALAR EL GÉNERO DE SUS LABORES, REMUNERACIONES, ETC., Y HACER LOS RETIROS DE PERSONAL. 7. CONVOCAR A LA ASAMBLEA GENERAL DE ACCIONISTAS A SUS REUNIONES DE CUALQUIER ÍNDOLE. 8. DELEGAR DETERMINADAS FUNCIONES PROPIAS DE SU CARGO DENTRO DE LOS LÍMITES SEÑALADOS EN ESTOS ESTATUTOS. 9. CUIDAR LA RECAUDACIÓN E INVERSIÓN DE LOS FONDOS DE LA EMPRESA. 10. VELAR PORQUE TODOS LOS EMPLEADOS DE LA SOCIEDAD, CUMPLAN ESTRICTAMENTE SUS DEBERES Y PONER EN CONOCIMIENTO DE LA ASAMBLEA GENERAL DE ACCIONISTAS O FALTAS GRAVES QUE OCURRAN SOBRE ESTE EN PARTICULAR. 11. TODAS LAS DEMÁS FUNCIONES NO ATRIBUIDAS A LA ASAMBLEA GENERAL ACCIONISTAS Y TODAS LAS DEMÁS QUE LE DELEGUE LA LEY. 12. CONSTITUIR UNIONES TEMPORALES Y/O CONSORCIOS PREVIA AUTORIZACIÓN DE LA ASAMBLEA GENERAL DE ACCIONISTAS.",
                "legalRepresentatives": [
                    [
                        {
                            "documentNumber": "1116870475",
                            "documentType": "CC",
                            "name": "Davinson Andres Pico Santamaria",
                            "role": "Representante Legal"
                        }
                    ]
                ]
            },
            "organizationType": "SOCIEDAD ó PERSONA JURIDICA PRINCIPAL ó ESAL",
            "reasonForCancellation": "SOCIEDAD COMERCIAL",
            "registrationNumber": "0000026379",
            "registrationStatus": "ACTIVA",
            "renewalDate": "2022-05-31"
        },
        "economicActivities": [
            {
                "code": "4530",
                "description": "Comercio de partes, piezas (autopartes) y accesorios (lujos) para vehículos automotores",
                "name": "ciiu_act_econ_pri"
            },
            {
                "code": "4732",
                "description": "Comercio al por menor de lubricantes (aceites, grasas), aditivos y productos de limpieza para vehículos automotores",
                "name": "ciiu_act_econ_sec"
            },
            {
                "code": "4520",
                "description": "Mantenimiento y reparación de vehículos automotores",
                "name": "ciiu3"
            },
            {
                "code": "",
                "description": "",
                "name": "ciiu4"
            }
        ],
        "establishmentOwner": [
            {
                "abbreviation": "",
                "businessName": "CREDILLANTAS P G 2",
                "chamberCode": "48",
                "chamberDescription": "ARAUCA",
                "codeClassIdentification": "06",
                "companyTypeCode": "02",
                "companyTypeDescription": "SOCIEDAD COMERCIAL",
                "digitVerification": " ",
                "lastYearRenewed": "2018",
                "legalOrganizationCode": "02",
                "legalOrganizationDescription": "ESTABLECIMIENTOS DE COMERCIO",
                "numberIdentification": "00000000000000",
                "registration": "0000031696",
                "registrationCategory": "ESTABLECIMIENTO DE COMERCIO",
                "registrationCategoryCode": "04",
                "registrationDate": "2018-03-15",
                "registrationStatusCode": "03",
                "registrationStatusDescription": "CANCELADA",
                "renewalDate": "2018-03-15"
            },
            {
                "abbreviation": "",
                "businessName": "CREDILLANTAS P.G.1",
                "chamberCode": "56",
                "chamberDescription": "PIEDEMONTE ARAUCANO",
                "codeClassIdentification": "  ",
                "companyTypeCode": "02",
                "companyTypeDescription": "SOCIEDAD COMERCIAL",
                "digitVerification": " ",
                "lastYearRenewed": "2022",
                "legalOrganizationCode": "02",
                "legalOrganizationDescription": "ESTABLECIMIENTOS DE COMERCIO",
                "numberIdentification": "00000000000000",
                "registration": "0000026685",
                "registrationCategory": "ESTABLECIMIENTO DE COMERCIO",
                "registrationCategoryCode": "04",
                "registrationDate": "2018-02-12",
                "registrationStatusCode": "01",
                "registrationStatusDescription": "ACTIVA",
                "renewalDate": "2022-05-31"
            }
        ]
    },
    "signature": {
        "dateTime": "October 17, 2025 4:47 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "FD8T9"
}
```
