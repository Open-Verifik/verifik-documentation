#!/usr/bin/env python3
"""
Script to blur document number in the document scanning image.
Usage: python3 blur_document_number.py [x y width height]
If no coordinates provided, will show the image for manual selection.
"""

from PIL import Image, ImageFilter
import sys
import os

# Image path
image_path = "static/img/smartEnroll-admin-kyc-review/3-document-scanning.png"
output_path = "static/img/smartEnroll-admin-kyc-review/3-document-scanning.png"

def blur_region(image, x, y, width, height):
    """Blur a specific region of the image"""
    # Create a copy of the image
    blurred_image = image.copy()
    
    # Crop the region to blur
    region = image.crop((x, y, x + width, y + height))
    
    # Apply blur filter (you can adjust the radius)
    blurred_region = region.filter(ImageFilter.GaussianBlur(radius=10))
    
    # Paste the blurred region back
    blurred_image.paste(blurred_region, (x, y, x + width, y + height))
    
    return blurred_image

def main():
    if not os.path.exists(image_path):
        print(f"Error: Image not found at {image_path}")
        sys.exit(1)
    
    # Open the image
    image = Image.open(image_path)
    print(f"Image size: {image.size[0]}x{image.size[1]}")
    
    # If coordinates provided via command line
    if len(sys.argv) == 5:
        x = int(sys.argv[1])
        y = int(sys.argv[2])
        width = int(sys.argv[3])
        height = int(sys.argv[4])
        
        print(f"Blurring region: x={x}, y={y}, width={width}, height={height}")
        blurred_image = blur_region(image, x, y, width, height)
        blurred_image.save(output_path)
        print(f"Image saved to {output_path}")
    else:
        print("\nTo blur the document number, you need to provide coordinates:")
        print("Usage: python3 blur_document_number.py <x> <y> <width> <height>")
        print("\nExample: python3 blur_document_number.py 100 200 300 50")
        print("\nTo find coordinates:")
        print("1. Open the image in an image viewer")
        print("2. Note the top-left corner (x, y) of the document number")
        print("3. Note the width and height of the document number area")
        print("\nOr you can open the image and manually edit it with an image editor.")

if __name__ == "__main__":
    main()
