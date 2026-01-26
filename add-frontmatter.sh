#!/bin/bash

# Add frontmatter to COMPENSAR_README.md
cat > docs/compensar/COMPENSAR_README.md.tmp << 'FRONT'
---
id: COMPENSAR_README
title: Propuesta COMPENSAR - Índice
sidebar_label: 📚 Índice
sidebar_position: 1
---

FRONT
tail -n +1 docs/compensar/COMPENSAR_README.md >> docs/compensar/COMPENSAR_README.md.tmp
mv docs/compensar/COMPENSAR_README.md.tmp docs/compensar/COMPENSAR_README.md

# Add frontmatter to COMPENSAR_EXECUTIVE_SUMMARY.md
cat > docs/compensar/COMPENSAR_EXECUTIVE_SUMMARY.md.tmp << 'FRONT'
---
id: COMPENSAR_EXECUTIVE_SUMMARY
title: Resumen Ejecutivo
sidebar_label: 📊 Resumen Ejecutivo
sidebar_position: 2
---

FRONT
tail -n +1 docs/compensar/COMPENSAR_EXECUTIVE_SUMMARY.md >> docs/compensar/COMPENSAR_EXECUTIVE_SUMMARY.md.tmp
mv docs/compensar/COMPENSAR_EXECUTIVE_SUMMARY.md.tmp docs/compensar/COMPENSAR_EXECUTIVE_SUMMARY.md

# Add frontmatter to COMPENSAR_PROPOSAL.md
cat > docs/compensar/COMPENSAR_PROPOSAL.md.tmp << 'FRONT'
---
id: COMPENSAR_PROPOSAL
title: Propuesta Técnica Completa
sidebar_label: 📋 Propuesta Completa
sidebar_position: 3
---

FRONT
tail -n +1 docs/compensar/COMPENSAR_PROPOSAL.md >> docs/compensar/COMPENSAR_PROPOSAL.md.tmp
mv docs/compensar/COMPENSAR_PROPOSAL.md.tmp docs/compensar/COMPENSAR_PROPOSAL.md

# Add frontmatter to COMPENSAR_COMPLIANCE_MATRIX.md
cat > docs/compensar/COMPENSAR_COMPLIANCE_MATRIX.md.tmp << 'FRONT'
---
id: COMPENSAR_COMPLIANCE_MATRIX
title: Matriz de Cumplimiento
sidebar_label: ✅ Matriz de Cumplimiento
sidebar_position: 4
---

FRONT
tail -n +1 docs/compensar/COMPENSAR_COMPLIANCE_MATRIX.md >> docs/compensar/COMPENSAR_COMPLIANCE_MATRIX.md.tmp
mv docs/compensar/COMPENSAR_COMPLIANCE_MATRIX.md.tmp docs/compensar/COMPENSAR_COMPLIANCE_MATRIX.md

# Add frontmatter to COMPENSAR_API_REFERENCE.md
cat > docs/compensar/COMPENSAR_API_REFERENCE.md.tmp << 'FRONT'
---
id: COMPENSAR_API_REFERENCE
title: Referencia de APIs
sidebar_label: 🔌 APIs
sidebar_position: 5
---

FRONT
tail -n +1 docs/compensar/COMPENSAR_API_REFERENCE.md >> docs/compensar/COMPENSAR_API_REFERENCE.md.tmp
mv docs/compensar/COMPENSAR_API_REFERENCE.md.tmp docs/compensar/COMPENSAR_API_REFERENCE.md

# Add frontmatter to COMPENSAR_FLOW_DIAGRAMS.md
cat > docs/compensar/COMPENSAR_FLOW_DIAGRAMS.md.tmp << 'FRONT'
---
id: COMPENSAR_FLOW_DIAGRAMS
title: Diagramas de Flujo
sidebar_label: 📊 Diagramas
sidebar_position: 6
---

FRONT
tail -n +1 docs/compensar/COMPENSAR_FLOW_DIAGRAMS.md >> docs/compensar/COMPENSAR_FLOW_DIAGRAMS.md.tmp
mv docs/compensar/COMPENSAR_FLOW_DIAGRAMS.md.tmp docs/compensar/COMPENSAR_FLOW_DIAGRAMS.md

echo "Frontmatter added to all COMPENSAR documents"
