#!/bin/bash

# Fix encoding issues in all COMPENSAR docs
for file in docs/compensar/*.md; do
    echo "Fixing encoding in $file..."
    
    # Fix Q\u0026A to Q&A
    sed -i '' 's/Q\\u0026A/Q\&A/g' "$file"
    
    # Fix any other common encoding issues
    sed -i '' 's/\\u0026/\&/g' "$file"
    
    # Ensure proper UTF-8 encoding for Spanish characters
    # These should already be correct, but just in case
done

echo "All encoding issues fixed!"
