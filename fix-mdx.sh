#!/bin/bash

# Fix all MDX issues in COMPENSAR docs
for file in docs/compensar/*.md; do
    echo "Fixing $file..."
    
    # Escape < and > in text (but not in code blocks or HTML tags)
    # Replace standalone < and > with &lt; and &gt;
    sed -i '' 's/\([^`]\)<\([0-9]\)/\1\&lt;\2/g' "$file"
    sed -i '' 's/\([0-9]\)>\([^`]\)/\1\&gt;\2/g' "$file"
    sed -i '' 's/score >\([0-9]\)/score \&gt;\1/g' "$file"
    sed -i '' 's/score <\([0-9]\)/score \&lt;\1/g' "$file"
    sed -i '' 's/Precisión >\([0-9]\)/Precisión \&gt;\1/g' "$file"
    sed -i '' 's/Matching >\([0-9]\)/Matching \&gt;\1/g' "$file"
    sed -i '' 's/Similitud >\([0-9]\)/Similitud \&gt;\1/g' "$file"
    sed -i '' 's/error >\([0-9]\)/error \&gt;\1/g' "$file"
    sed -i '' 's/respuesta <\([0-9]\)/respuesta \&lt;\1/g' "$file"
    sed -i '' 's/Tiempo <\([0-9]\)/Tiempo \&lt;\1/g' "$file"
    sed -i '' 's/Disponibilidad <\([0-9]\)/Disponibilidad \&lt;\1/g' "$file"
done

echo "All files fixed!"
