#!/bin/bash

# Update English identity links in smartcheck.md
cd /Users/miguel/verifik-documentation/docs/smartcheck

# Create a mapping of old to new slugs
declare -A slug_mapping=(
    ["/identity/argentina"]="/identity/legal-verification-for-argentinian-id"
    ["/identity/bolivia"]="/identity/legal-verification-for-bolivian-id"
    ["/identity/brazil"]="/identity/legal-verification-for-brazilian-id"
    ["/identity/canada"]="/identity/legal-verification-for-canadian-id"
    ["/identity/chile"]="/identity/legal-verification-for-chilean-id"
    ["/identity/colombia"]="/identity/legal-verification-for-colombian-id"
    ["/identity/costa-rica"]="/identity/legal-verification-for-costa-rican-id"
    ["/identity/dominican-republic"]="/identity/legal-verification-for-dominican-id"
    ["/identity/ecuador"]="/identity/legal-verification-for-ecuadorian-id"
    ["/identity/el-salvador"]="/identity/legal-verification-for-salvadoran-id"
    ["/identity/guatemala"]="/identity/legal-verification-for-guatemalan-id"
    ["/identity/honduras"]="/identity/legal-verification-for-honduran-id"
    ["/identity/mexico"]="/identity/legal-verification-for-mexican-id"
    ["/identity/panama"]="/identity/legal-verification-for-panamanian-id"
    ["/identity/paraguay"]="/identity/legal-verification-for-paraguayan-id"
    ["/identity/peru"]="/identity/legal-verification-for-peruvian-id"
    ["/identity/spain-citizen"]="/identity/legal-verification-for-spanish-id"
    ["/identity/united-states"]="/identity/legal-verification-for-us-id"
    ["/identity/uruguay"]="/identity/legal-verification-for-uruguayan-id"
    ["/identity/venezuela"]="/identity/legal-verification-for-venezuelan-id"
)

# Update the smartcheck.md file
for old_slug in "${!slug_mapping[@]}"; do
    new_slug="${slug_mapping[$old_slug]}"
    sed -i '' "s|$old_slug|$new_slug|g" smartcheck.md
done

echo "Updated English identity links in smartcheck.md"
