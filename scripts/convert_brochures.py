import os
import io
import fitz  # PyMuPDF
from PIL import Image

def convert_pdf_to_webp(pdf_path, output_webp_path):
    print(f"Opening: {pdf_path}")
    doc = fitz.open(pdf_path)
    if len(doc) == 0:
        print(f"Error: {pdf_path} has no pages.")
        return False
    
    # Load first page
    page = doc.load_page(0)
    
    # Render page to pixmap
    pix = page.get_pixmap(dpi=150)
    png_data = pix.tobytes("png")
    
    # Convert to PIL Image and save as WebP
    img = Image.open(io.BytesIO(png_data))
    img.save(output_webp_path, "WEBP", quality=85)
    print(f"Saved: {output_webp_path}")
    return True

def main():
    brochures_dir = r"c:\ASUS\Portfolio\n-b-productions\cinematic-visions\public\broshures"
    if not os.path.exists(brochures_dir):
        print(f"Error: Directory {brochures_dir} does not exist.")
        return
    
    for filename in os.listdir(brochures_dir):
        if filename.lower().endswith(".pdf"):
            pdf_path = os.path.join(brochures_dir, filename)
            base_name = os.path.splitext(filename)[0]
            webp_filename = f"{base_name}.webp"
            webp_path = os.path.join(brochures_dir, webp_filename)
            
            try:
                convert_pdf_to_webp(pdf_path, webp_path)
            except Exception as e:
                print(f"Failed to convert {filename}: {e}")

if __name__ == "__main__":
    main()
