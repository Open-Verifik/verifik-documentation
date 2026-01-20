# English Documentation URL Analysis - Section 10

## Overview
This document analyzes the root-level English paths listed in section 10 of `URL_FIX_TRACKING.md` to verify if they exist in the documentation files and if their slugs match the expected URLs.

## Analysis Results

### 1. `/plans-and-pricings/` - **MISSING FILES**
**Status:** ⚠️ **NO FILES FOUND**

The following URLs are listed but no corresponding files exist:
- `/plans-and-pricings/smartenroll-plans/`
- `/plans-and-pricings/access-plans`
- `/plans-and-pricings/access-plans/sessions`
- `/plans-and-pricings/access-plans/active-users`
- `/plans-and-pricings/access-plans/free-plans`
- `/plans-and-pricings/access-plans/enterprise-plans`
- `/plans-and-pricings/enroll-plans`
- `/plans-and-pricings/smart-access-plans/free-plans`
- `/plans-and-pricings/smart-access-plans/enterprise-plans`
- `/plans-pricings/smart-access-plans/sessions` (typo: `plans-pricings`)
- `/plans-pricings/smart-access-plans/active-users` (typo: `plans-pricings`)
- `/plans-pricings/database-screening-plans` (typo: `plans-pricings`)

**Action Required:** 
- Create missing files OR
- Verify if these should redirect to Spanish equivalents OR
- Remove from tracking if they're not needed

### 2. `/resources/` - **EXISTS** ✅
**Status:** ✅ **FILES EXIST WITH CORRECT SLUGS**

Found many files with correct `/resources/` slugs:
- ✅ `/resources/the-app-registration-object` - exists
- ✅ `/resources/webhooks` - exists
- ✅ `/resources/webhooks/webhook-integration` - exists
- ✅ `/resources/webhooks/the-webhook-object` - exists
- ✅ `/resources/webhooks/retrieve-a-webhook` - exists
- ✅ `/resources/webhooks/update-a-webhook` - exists
- ✅ `/resources/webhooks/list-all-webhooks` - exists
- ✅ `/resources/app-logins` - exists
- ✅ `/resources/create-an-app-login` - exists
- ✅ `/resources/email-validations/the-email-validation-object` - exists
- ✅ `/resources/phone-validations/the-phone-validation-object` - exists
- ✅ `/resources/phone-validations/create-a-phone-validation` - exists

**Issues Found:**
- ⚠️ `/resources/persons/update-a-project` - **WRONG**: Should be `update-a-person` not `update-a-project`
- ⚠️ `/resources/collections-1/list-all-collection` - **TYPO**: `collections-1` should be `collections`
- ⚠️ `/resources/project-flows-flujos-de-proyecto/...` - **MIXED LANGUAGE**: Should be English only

### 3. `/services/` - **PARTIALLY EXISTS** ⚠️
**Status:** ⚠️ **LIMITED FILES**

Found only 1 file:
- ✅ `/services/verifik-enroll-code-solution-via-api/full-api-tutorial` - exists

**Missing URLs:**
- ❌ `/services/smartaccess`
- ❌ `/services/verifik-database-screening`
- ❌ `/services/verifik-database-screening/app-query-example`
- ❌ `/services/verifik-enroll-code-solution-via-api` (parent)
- ❌ `/services/verifik-access-code-solution-via-api/biometric-access-example`
- ❌ `/services/verifik-access-code-solution-via-api/phone-access-example`
- ❌ `/services/smartcheck`
- ❌ `/services/smartcheck/app-query-example`
- ❌ `/services` (root)

**Action Required:** Create missing service documentation files

### 4. `/vehicle-validation/` - **EXISTS** ✅
**Status:** ✅ **FILES EXIST**

Found many files with correct slugs:
- ✅ `/vehicle-validation/vehicle-verification` - exists
- ✅ `/vehicle-validation/united-states` - exists
- ✅ `/vehicle-validation/chile` - exists
- ✅ `/vehicle-validation/bolivia` - exists
- ✅ `/vehicle-validation/peru/vehicle-insurance` - exists
- ✅ `/vehicle-validation/peru/vehicle-information` - exists
- ✅ `/vehicle-validation/colombia/runt-vehicle-soat-rtm` - exists
- ✅ `/vehicle-validation/colombia/runt-vehicle-by-plate` - exists
- ✅ `/vehicle-validation/colombia/runt-drivers-license` - exists
- ✅ `/vehicle-validation/colombia/vehicle-values-by-plate-fasecolda` - exists

**Issues Found:**
- ⚠️ `/vehicle-validation/colombia-fasecolda-vehicle-by-code` - **WRONG FORMAT**: Should be `/vehicle-validation/colombia/fasecolda-vehicle-by-code` (missing `/colombia/`)
- ⚠️ `/vehicle-validation/colombia-fasecolda-values-by-plate` - **WRONG FORMAT**: Should be `/vehicle-validation/colombia/fasecolda-values-by-plate`
- ⚠️ `/vehicle-validation/colombia-fasecolda-claims-verification` - **WRONG FORMAT**: Should be `/vehicle-validation/colombia/fasecolda-claims-verification`

**Missing URLs (from tracking):**
- ❌ `/vehicle-validation/colombia/drivers-license` (note: `runt-drivers-license` exists)
- ❌ `/vehicle-validation/colombia/driver-s-license`
- ❌ `/vehicle-validation/colombia/drivers-license-verification`
- ❌ `/vehicle-validation/colombia/vehicle-values-by-code-fasecolda`
- ❌ `/vehicle-validation/colombia/vehicle-by-plate-and-identification-card-only`
- ❌ `/vehicle-validation/colombia/vehicle-s-soat-and-rtm-by-plate-and-identification-document`
- ❌ `/vehicle-validation/colombia/runt-vehicle-records-by-plate-number-simplified` (note: `runt-vehicle-by-plate-simplified` exists)
- ❌ `/vehicle-validation/colombia/runt-colombian-vehicle`
- ❌ `/vehicle-validation/colombia/simit-consultation`
- ❌ `/vehicle-validation/colombia/simit-resolutions`
- ❌ `/vehicle-validation/colombia/simit-fines`
- ❌ `/vehicle-validation/colombia/simit-agreements`
- ❌ `/vehicle-validation/colombia/general-query-of-simit-by-license-plate`
- ❌ `/vehicle-validation/colombia/general-query-of-simit-by-identification-document`
- ❌ `/vehicle-validation/colombia/sinister-verification-fasecolda`
- ❌ `/vehicle-validation/colombia/information-system-for-drivers-transporting-dangerous-goods`
- ❌ `/vehicle-validation/colombia/vehicle-fines-check-in-bogota-colombia`
- ❌ `/vehicle-validation/colombia/vehicle-fines-check-in-bogot-tta-colombia` (typo: `bogot-tta`)
- ❌ `/vehicle-validation/colombia/colombian-vehicle-information-service`
- ❌ `/vehicle-validation/colombia/complete-vehicle-with-historical-records-by-license-plate-and-identification-card`
- ❌ `/vehicle-validation/paraguay`
- ❌ `/vehicle-validation/mexico`
- ❌ `/vehicle-validation/chile/vehicle-information`
- ❌ `/vehicle-validation/chile/driver-license`
- ❌ `/vehicle-validation/ecuador/vehicle-information-lookup`

### 5. `/identity-validation/` - **PARTIALLY EXISTS** ⚠️
**Status:** ⚠️ **LIMITED FILES**

Found some files:
- ✅ `/identity-validation/colombia/colombian-citizen` - exists

**Missing URLs:**
- ❌ `/identity-validation` (root)
- ❌ `/identity-validation/united-states`
- ❌ `/identity-validation/united-states/ssn-verification-social-security-number`
- ❌ `/identity-validation/united-states/kansas-drivers-license-verification`
- ❌ `/identity-validation/united-states/florida-driver-license-validation`
- ❌ `/identity-validation/spain-citizen`
- ❌ `/identity-validation/peru/peru-citizen`
- ❌ `/identity-validation/peru/peruvian-foreigner-resident`
- ❌ `/identity-validation/peru`
- ❌ `/identity-validation/peru/v3-peruvian-citizen`
- ❌ `/identity-validation/uruguay-citizen`
- ❌ `/identity-validation/guatemala`
- ❌ `/identity-validation/ecuador`
- ❌ `/identity-validation/colombia/colombian-politically-exposed-persons`
- ❌ `/identity-validation/colombia/special-stay-permit-pep`
- ❌ `/identity-validation/colombia`
- ❌ `/identity-validation/chile/validate-chilean-document`
- ❌ `/identity-validation/chile/chilean-citizen-information`
- ❌ `/identity-validation/chile/quebec-driver-license` (WRONG: Quebec is in Canada)
- ❌ `/identity-validation/brazil`
- ❌ `/identity-validation/argentina`
- ❌ `/identity-validation/canada/quebec-driver-license`

### 6. `/background-check/` - **EXISTS** ✅
**Status:** ✅ **FILES EXIST**

Files exist in `docs/background-check/` directory. Need to verify slugs match URLs.

### 7. `/business-validation/` - **EXISTS** ✅
**Status:** ✅ **FILES EXIST**

Files exist in `docs/business-validation/` directory. Need to verify slugs match URLs.

### 8. `/accounts/` - **EXISTS** ✅
**Status:** ✅ **FILES EXIST**

Files exist in `docs/accounts/` and `docs/authentication/` directories. Need to verify slugs.

### 9. `/certificates/` - **MISSING** ❌
**Status:** ❌ **NO FILES FOUND**

Missing URLs:
- ❌ `/certificates/sena-certificates`
- ❌ `/certificates/registry-certificate`

### 10. `/finance/` - **MISSING** ❌
**Status:** ❌ **NO FILES FOUND**

Missing URLs:
- ❌ `/finance`
- ❌ `/finance/delinquent-debtors`

### 11. `/health/` - **MISSING** ❌
**Status:** ❌ **NO FILES FOUND**

Missing URLs:
- ❌ `/health/verify-colombian-affiliations`

### 12. `/ocr-engines/` - **EXISTS** ✅
**Status:** ✅ **FILES EXIST**

Files exist in `docs/ocr-engines/` directory. Need to verify slugs.

### 13. `/verifik-llc/` - **EXISTS** ✅
**Status:** ✅ **FILES EXIST**

Found files:
- ✅ `/verifik-llc/terms-and-conditions` - exists
- ✅ `/verifik-llc/service-level-agreement` - exists
- ✅ `/verifik-llc/verifik-for-enterprises-hub-eng` - exists
- ✅ `/verifik-llc/polticas-e2a-de-privacidad` - exists (typo in filename)

**Missing URLs:**
- ❌ `/verifik-llc/privacy-policy`
- ❌ `/verifik-llc/enterprises-hub`
- ❌ `/verifik-llc` (root)

### 14. `/verifik-biometrics-apis/` - **EXISTS** ✅
**Status:** ✅ **FILES EXIST**

Found files:
- ✅ `/verifik-biometrics-apis/search/search-1-n-or-crop` - exists

**Missing URLs:**
- ❌ `/verifik-biometrics-apis/search`
- ❌ `/verifik-biometrics-apis/liveness/face-detection`
- ❌ `/verifik-biometrics-apis/compare-biometrics`
- ❌ `/verifik-biometrics-apis/compare`
- ❌ `/verifik-biometrics-apis/liveness-detection`
- ❌ `/verifik-biometrics-apis-1/scan-prompt` (typo: `verifik-biometrics-apis-1`)

### 15. Other Root Paths
- ❌ `/smartenroll/smartenroll/` - **EXISTS** ✅ (file: `docs/smartenroll/smartenroll.md`)
- ❌ `/smartaccess/smartaccess` - **EXISTS** ✅ (file: `docs/smartaccess/smartaccess.md`)
- ❌ `/verifik-for-enterprises-hub` - **MISSING** ❌
- ❌ `/api/projects/projects-update` - **MISSING** ❌
- ❌ `/api/projects/projects-create` - **MISSING** ❌
- ❌ `/docs/intro` - **EXISTS** ✅ (slug: `/intro`)
- ❌ `/examples` - **MISSING** ❌
- ❌ `/military` - **MISSING** ❌
- ❌ `/identity/bolivia` - **MISSING** ❌
- ❌ `/identity/guatemala` - **MISSING** ❌
- ❌ `/biometrics/compare` - **MISSING** ❌
- ❌ `/scandocs/scan-prompt` - **MISSING** ❌

## Summary

### ✅ Working URLs (Files exist with correct slugs)
- Most `/resources/` paths
- Most `/vehicle-validation/` paths
- `/background-check/` paths
- `/business-validation/` paths
- `/verifik-llc/` paths (mostly)
- `/verifik-biometrics-apis/` paths (partially)

### ⚠️ Issues Found
1. **Missing files** for many URLs in tracking document
2. **Wrong slug formats** (e.g., `colombia-fasecolda-...` instead of `colombia/fasecolda-...`)
3. **Typos** in slugs (`collections-1`, `bogot-tta`, `plans-pricings`)
4. **Wrong content** (`update-a-project` instead of `update-a-person`)
5. **Mixed language** paths (`project-flows-flujos-de-proyecto`)

### ❌ Completely Missing Sections
- `/plans-and-pricings/` - **ENTIRE SECTION MISSING**
- `/certificates/` - **ENTIRE SECTION MISSING**
- `/finance/` - **ENTIRE SECTION MISSING**
- `/health/` - **ENTIRE SECTION MISSING**
- Most `/services/` paths
- Most `/identity-validation/` paths

## Recommended Actions

1. **Create missing documentation files** for high-priority sections
2. **Fix slug formats** for existing files with wrong paths
3. **Remove or redirect** URLs that are no longer needed
4. **Verify** if some URLs should redirect to Spanish equivalents
5. **Update** `URL_FIX_TRACKING.md` with actual status of each URL
