---
id: "en-docs-identity-validation-colombia-colombia-identity-documents-guide-important-naming-distinction-4"
title: "Colombia — Identity documents guide — Important naming distinction"
sourcePath: "docs/identity-validation/colombia/colombia-identity-documents-guide.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "co"
  - "identity-validation"
sourceAnchor: "Important naming distinction"
slug: "/identity-validation/colombia/colombia-identity-documents-guide"
url: "https://docs.verifik.co/identity-validation/colombia/colombia-identity-documents-guide"
---

# Colombia — Identity documents guide

Use this page when you are not sure **which document type** your user has or **which Verifik endpoint** to call. Each Colombian ID has a different issuer and a different API path.

## Important naming distinction

| Term | Meaning | Verifik product |
| --- | --- | --- |
| **PEP** (document) | *Permiso Especial de Permanencia* — immigration permit | `/v2/co/foreigner-id/pep` |
| **Politically exposed persons (PEP)** | AML / compliance screening | `/v2/co/politically-exposed-persons` (CC or NIT) — see [Colombian PEP (AML)](/identity-validation/colombia/colombian-politically-exposed-persons) |
| **PA** | *Pasaporte* — passport. RUNT shows **`P.`** | `/v2/co/runt/conductor` (`primerApellido` required) |
| **PPT** | *Permiso por Protección Temporal* — Venezuelan permit, **not a passport**. RUNT shows **`Y.`** | `/v2/co/cedula` or `/v2/co/foreigner-id/ppt` |

Do not send an immigration **PEP** number to the AML politically-exposed-persons endpoint, or vice versa.

## Frequently asked questions

  Should I use CC or CE?
  
    CC if the person is a Colombian citizen (Cédula de Ciudadanía). CE if they are a foreign resident (Cédula de Extranjería). They use different government sources and different Verifik endpoints.
  

  Which PPT endpoint should I use?
  
    Use /v2/co/cedula with documentType=PPT when you need identity/name data similar to a cédula lookup. Use /v2/co/foreigner-id/ppt when you need immigration status from Migración Colombia — you must include expeditionDate.
  

  Why does my CC number fail with 409?
  
    On /v2/co/cedula, documentNumber must be 5–10 digits after normalization. Numbers shorter than 5 digits, or non-numeric formatting that leaves too few digits, will be rejected before the upstream lookup runs.

## Related API pages

- [Colombian Citizen (CC / CE / PPT / PEP / NIT names)](/identity-validation/colombia/colombian-citizen) — `/v2/co/cedula` consolidates Procuraduría and other sources
- [Colombia Procuraduría (names only)](/identity/colombia-procuraduria)
- [Colombia CE](/identity/colombia-ce)
- [Colombia PPT (Migración)](/identity/colombia-ppt)
- [Colombia PEP (immigration permit)](/identity/colombia-pep-id)
- [Colombia ADRES (BDUA affiliation)](/legal/colombia-adres) — standalone health affiliation product (`GET /v2/co/adres`), not the same as `/v2/co/afiliaciones`
