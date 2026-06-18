import os
from PIL import Image

def optimize_logo(src_path, dst_path, max_size=(600, 600)):
    print(f"Optimizing: {src_path} -> {dst_path}")
    os.makedirs(os.path.dirname(dst_path), exist_ok=True)
    
    with Image.open(src_path) as img:
        # Convert paletted or RGBA image to RGB if saving as JPG, 
        # but since we are saving as WebP we can preserve transparency (RGBA)
        if img.mode not in ("RGB", "RGBA"):
            img = img.convert("RGBA")
            
        # Resize if too large, maintaining aspect ratio
        img.thumbnail(max_size, Image.Resampling.LANCZOS)
        
        # Save as optimized WebP
        img.save(dst_path, "WEBP", quality=85)
        print(f"Saved optimized WebP, size: {os.path.getsize(dst_path)} bytes")

def main():
    src_base = r"c:\ASUS\Portfolio\n-b-productions\new content\logos"
    dst_base = r"c:\ASUS\Portfolio\n-b-productions\cinematic-visions\public\logos"
    
    logos = [
        ("AN Motion Pictures", "AN Motion Pictures logo.jpg", "an-motion-pictures.webp"),
        ("Unmapd", "UNMAPD-logo.jpeg", "unmapd-logo.webp"),
        ("apnawalaclick", "apnawalaclick-logo-white.PNG", "apnawalaclick-logo.webp"),
        ("sdcsa", "SDCSA-LOGO.png", "sdcsa-logo.webp")
    ]
    
    for folder, src_name, dst_name in logos:
        src_path = os.path.join(src_base, folder, src_name)
        dst_path = os.path.join(dst_base, dst_name)
        if os.path.exists(src_path):
            try:
                optimize_logo(src_path, dst_path)
            except Exception as e:
                print(f"Failed to optimize {src_name}: {e}")
        else:
            print(f"Error: Source file does not exist: {src_path}")

if __name__ == "__main__":
    main()
