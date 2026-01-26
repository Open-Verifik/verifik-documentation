#!/usr/bin/env python3
"""
Interactive script to blur document number in the document scanning image.
This will open the image and allow you to click to select the region to blur.
"""

from PIL import Image, ImageFilter, ImageDraw, ImageTk
import tkinter as tk
from tkinter import messagebox
import sys
import os

# Image path
image_path = "static/img/smartEnroll-admin-kyc-review/3-document-scanning.png"
output_path = "static/img/smartEnroll-admin-kyc-review/3-document-scanning.png"

class ImageBlurApp:
    def __init__(self, root, image_path):
        self.root = root
        self.image_path = image_path
        self.start_x = None
        self.start_y = None
        self.end_x = None
        self.end_y = None
        self.rect_id = None
        
        # Load image
        self.original_image = Image.open(image_path)
        # Resize if too large for display
        max_width = 1200
        if self.original_image.width > max_width:
            ratio = max_width / self.original_image.width
            new_height = int(self.original_image.height * ratio)
            self.display_image = self.original_image.resize((max_width, new_height), Image.Resampling.LANCZOS)
            self.scale_factor = self.original_image.width / max_width
        else:
            self.display_image = self.original_image.copy()
            self.scale_factor = 1.0
        
        # Create canvas
        self.canvas = tk.Canvas(root, width=self.display_image.width, height=self.display_image.height)
        self.canvas.pack()
        
        # Display image
        self.photo = ImageTk.PhotoImage(self.display_image)
        self.canvas.create_image(0, 0, anchor=tk.NW, image=self.photo)
        
        # Bind mouse events
        self.canvas.bind("<Button-1>", self.on_click)
        self.canvas.bind("<B1-Motion>", self.on_drag)
        self.canvas.bind("<ButtonRelease-1>", self.on_release)
        
        # Instructions
        instructions = tk.Label(root, text="Click and drag to select the document number area to blur. Then click 'Blur Selected Area' button.", 
                               wraplength=600)
        instructions.pack(pady=10)
        
        # Blur button
        blur_btn = tk.Button(root, text="Blur Selected Area", command=self.apply_blur, bg="#4CAF50", fg="white", padx=20, pady=10)
        blur_btn.pack(pady=10)
        
        # Reset button
        reset_btn = tk.Button(root, text="Reset Selection", command=self.reset_selection)
        reset_btn.pack()
    
    def on_click(self, event):
        self.start_x = self.canvas.canvasx(event.x)
        self.start_y = self.canvas.canvasy(event.y)
        if self.rect_id:
            self.canvas.delete(self.rect_id)
    
    def on_drag(self, event):
        cur_x = self.canvas.canvasx(event.x)
        cur_y = self.canvas.canvasy(event.y)
        if self.start_x and self.start_y:
            if self.rect_id:
                self.canvas.delete(self.rect_id)
            self.rect_id = self.canvas.create_rectangle(self.start_x, self.start_y, cur_x, cur_y, outline="red", width=2)
    
    def on_release(self, event):
        self.end_x = self.canvas.canvasx(event.x)
        self.end_y = self.canvas.canvasy(event.y)
    
    def reset_selection(self):
        self.start_x = None
        self.start_y = None
        self.end_x = None
        self.end_y = None
        if self.rect_id:
            self.canvas.delete(self.rect_id)
            self.rect_id = None
    
    def apply_blur(self):
        if not (self.start_x and self.start_y and self.end_x and self.end_y):
            messagebox.showwarning("No Selection", "Please select an area first by clicking and dragging.")
            return
        
        # Convert display coordinates to original image coordinates
        x1 = int(min(self.start_x, self.end_x) * self.scale_factor)
        y1 = int(min(self.start_y, self.end_y) * self.scale_factor)
        x2 = int(max(self.start_x, self.end_x) * self.scale_factor)
        y2 = int(max(self.start_y, self.end_y) * self.scale_factor)
        
        # Ensure coordinates are within image bounds
        x1 = max(0, min(x1, self.original_image.width))
        y1 = max(0, min(y1, self.original_image.height))
        x2 = max(0, min(x2, self.original_image.width))
        y2 = max(0, min(y2, self.original_image.height))
        
        width = x2 - x1
        height = y2 - y1
        
        if width <= 0 or height <= 0:
            messagebox.showwarning("Invalid Selection", "Please select a valid area.")
            return
        
        # Apply blur
        blurred_image = self.original_image.copy()
        region = self.original_image.crop((x1, y1, x2, y2))
        blurred_region = region.filter(ImageFilter.GaussianBlur(radius=15))
        blurred_image.paste(blurred_region, (x1, y1, x2, y2))
        
        # Save
        blurred_image.save(output_path)
        messagebox.showinfo("Success", f"Image saved with blurred region!\nSaved to: {output_path}")
        
        # Update display
        if blurred_image.width > 1200:
            ratio = 1200 / blurred_image.width
            new_height = int(blurred_image.height * ratio)
            self.display_image = blurred_image.resize((1200, new_height), Image.Resampling.LANCZOS)
        else:
            self.display_image = blurred_image.copy()
        
        self.photo = ImageTk.PhotoImage(self.display_image)
        self.canvas.delete("all")
        self.canvas.create_image(0, 0, anchor=tk.NW, image=self.photo)
        self.reset_selection()

def main():
    if not os.path.exists(image_path):
        print(f"Error: Image not found at {image_path}")
        sys.exit(1)
    
    root = tk.Tk()
    root.title("Blur Document Number - Select Area to Blur")
    app = ImageBlurApp(root, image_path)
    root.mainloop()

if __name__ == "__main__":
    main()
