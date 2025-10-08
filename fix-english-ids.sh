#!/bin/bash

cd /Users/miguel/verifik-documentation

# Update all English identity file IDs
find docs/identity/ -name "*.mdx" -exec sed -i '' \
  -e 's|^id: argentina$|id: legal-verification-for-argentinian-id|g' \
  -e 's|^id: bolivia$|id: legal-verification-for-bolivian-id|g' \
  -e 's|^id: brazil$|id: legal-verification-for-brazilian-id|g' \
  -e 's|^id: canada$|id: legal-verification-for-canadian-id|g' \
  -e 's|^id: chile$|id: legal-verification-for-chilean-id|g' \
  -e 's|^id: colombia$|id: legal-verification-for-colombian-id|g' \
  -e 's|^id: costa-rica$|id: legal-verification-for-costa-rican-id|g' \
  -e 's|^id: dominican-republic$|id: legal-verification-for-dominican-id|g' \
  -e 's|^id: ecuador$|id: legal-verification-for-ecuadorian-id|g' \
  -e 's|^id: el-salvador$|id: legal-verification-for-salvadoran-id|g' \
  -e 's|^id: guatemala$|id: legal-verification-for-guatemalan-id|g' \
  -e 's|^id: honduras$|id: legal-verification-for-honduran-id|g' \
  -e 's|^id: mexico$|id: legal-verification-for-mexican-id|g' \
  -e 's|^id: panama$|id: legal-verification-for-panamanian-id|g' \
  -e 's|^id: paraguay$|id: legal-verification-for-paraguayan-id|g' \
  -e 's|^id: peru$|id: legal-verification-for-peruvian-id|g' \
  -e 's|^id: spain-citizen$|id: legal-verification-for-spanish-id|g' \
  -e 's|^id: united-states$|id: legal-verification-for-us-id|g' \
  -e 's|^id: uruguay$|id: legal-verification-for-uruguayan-id|g' \
  -e 's|^id: venezuela$|id: legal-verification-for-venezuelan-id|g' \
  {} \;

echo "Updated all English identity file IDs"
