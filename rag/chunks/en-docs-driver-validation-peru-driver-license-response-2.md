---
id: "en-docs-driver-validation-peru-driver-license-response-2"
title: "Peru - Driver License — Response"
sourcePath: "docs/driver-validation/peru-driver-license.mdx"
locale: "en"
category: "driver-validation"
tags:
  - "pe"
  - "driver-validation"
endpoints:
  - "/v2/pe/driver-license"
  - "/v2/pe/driver-license?documenttype=dni&documentnumber=10000001"
sourceAnchor: "Response"
slug: "/driver-validation/peru-driver-license"
url: "https://docs.verifik.co/driver-validation/peru-driver-license"
---

# Peru - Driver License
**API path(s):** /v2/pe/driver-license, /v2/pe/driver-license?documenttype=dni&documentnumber=10000001

## Response

```json
{
  "data": {
    "bloodType": "O+",
    "departmentCode": "15",
    "documentNumber": "10000001",
    "documentType": "DNI",
    "firstName": "MARIA ELENA",
    "fullName": "MARIA ELENA LOPEZ GARCIA",
    "hasLicensesA": true,
    "hasLicensesAIV": false,
    "hasLicensesB": false,
    "hasProvisionalPermit": false,
    "hasRegulatoryCourses": true,
    "hasSexualHarassmentCourse": false,
    "lastName": "LOPEZ GARCIA",
    "licenses": [
      {
        "licenseNumber": "R10000001",
        "correlation": "10",
        "licenseCategory": "A IIb",
        "expirationDate": "14/12/2027",
        "licenseStatus": "Vigente",
        "electronicLicense": 0,
        "restrictions": "SIN RESTRICCIONES",
        "issuanceCenter": "Direc. Reg. Transporte - Lima",
        "issueDate": "10/05/2005"
      }
    ],
    "maternalLastName": "GARCIA",
    "organDonation": "NO",
    "paternalLastName": "LOPEZ",
    "procedures": [
      {
        "licenseNumber": "R10000001",
        "correlation": 10,
        "procedure": "Revalidación",
        "category": "A IIb",
        "issueDate": "14/12/2022",
        "expeditionDate": "10/05/2005",
        "revalidationDate": "14/12/2027",
        "status": "Vigente",
        "electronicLicense": 0,
        "restriction1": "SIN RESTRICCIONES",
        "restriction2": null,
        "issuanceCenter": "Direc. Reg. Transporte - Lima"
      }
    ],
    "proceduresAIV": null,
    "proceduresB": null,
    "provisionalPermit": null,
    "regulatoryCourses": [
      {
        "certificateStatus": "001316",
        "serviceType": "Personas",
        "enrollmentDate": "05/12/2025",
        "startDate": "05/12/2025",
        "endDate": "05/12/2025",
        "hours": 6
      }
    ],
    "sanctions": null,
    "sexualHarassmentCourses": [],
    "tickets": []
  },
  "signature": {
    "dateTime": "June 23, 2026 10:00 AM",
    "message": "Certified by Verifik.co"
  }
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
  "message": "missing documentType\n. missing documentNumber\n"
}
```

```json
{
  "code": "MissingParameter",
  "message": "documentType must be one of: [DNI]"
}
```
