import os
import shutil
import io
import fitz  # PyMuPDF
from PIL import Image

def convert_pdf_to_webp(pdf_path, output_webp_path):
    print(f"Opening PDF: {pdf_path}")
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
    print(f"Successfully generated WebP thumbnail: {output_webp_path}")
    return True

def copy_file(src, dst):
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    shutil.copy2(src, dst)
    print(f"Copied: {src} -> {dst}")

def copy_dir_contents(src_dir, dst_dir):
    if not os.path.exists(src_dir):
        print(f"Warning: Source directory {src_dir} does not exist.")
        return
    for root, dirs, files in os.walk(src_dir):
        for file in files:
            src_file = os.path.join(root, file)
            rel_path = os.path.relpath(src_file, src_dir)
            dst_file = os.path.join(dst_dir, rel_path)
            copy_file(src_file, dst_file)

def main():
    src_base = r"c:\ASUS\Portfolio\n-b-productions\new content"
    dst_base = r"c:\ASUS\Portfolio\n-b-productions\cinematic-visions\public"
    
    # 1. Pitch Decks
    pitch_deck_src = os.path.join(src_base, "Pitch Deck")
    pitch_deck_dst = os.path.join(dst_base, "pitch-decks")
    os.makedirs(pitch_deck_dst, exist_ok=True)
    for f in os.listdir(pitch_deck_src):
        if f.lower().endswith(".pdf"):
            src_pdf = os.path.join(pitch_deck_src, f)
            dst_pdf = os.path.join(pitch_deck_dst, f)
            copy_file(src_pdf, dst_pdf)
            
            # Convert cover to WebP
            webp_name = os.path.splitext(f)[0] + ".webp"
            webp_dst = os.path.join(pitch_deck_dst, webp_name)
            try:
                convert_pdf_to_webp(dst_pdf, webp_dst)
            except Exception as e:
                print(f"Failed to convert pitch deck {f}: {e}")
                
    # 2. Brochures
    brochure_src = os.path.join(src_base, "broshures")
    brochure_dst = os.path.join(dst_base, "broshures")
    os.makedirs(brochure_dst, exist_ok=True)
    for f in os.listdir(brochure_src):
        if f.lower().endswith(".pdf"):
            src_pdf = os.path.join(brochure_src, f)
            dst_pdf = os.path.join(brochure_dst, f)
            copy_file(src_pdf, dst_pdf)
            
            # Convert cover to WebP
            webp_name = os.path.splitext(f)[0] + ".webp"
            webp_dst = os.path.join(brochure_dst, webp_name)
            try:
                convert_pdf_to_webp(dst_pdf, webp_dst)
            except Exception as e:
                print(f"Failed to convert brochure {f}: {e}")
                
    # 3. TBT badges
    tbt_src = os.path.join(src_base, "TBT badges")
    logos_dst = os.path.join(dst_base, "logos")
    for f in os.listdir(tbt_src):
        copy_file(os.path.join(tbt_src, f), os.path.join(logos_dst, f))
        
    # 4. Cafe Blue Lagoon
    cafe_src = os.path.join(src_base, "cafe blue lagoon")
    cafe_dst = os.path.join(dst_base, "cafe-blue-lagoon")
    copy_dir_contents(cafe_src, cafe_dst)
    
    # 5. Event Flyers
    flyers_src = os.path.join(src_base, "event flyers")
    flyers_dst = os.path.join(dst_base, "event-flyers")
    copy_dir_contents(flyers_src, flyers_dst)
    
    # 6. Mototrek - Stores Logo
    copy_file(
        os.path.join(src_base, "mototrek", "MotoTrek Stores Logo.jpg.jpeg"),
        os.path.join(logos_dst, "MotoTrek Stores Logo.jpeg")
    )
    
    # 7. Mototrek - Boost Marketing Flyer
    copy_file(
        os.path.join(src_base, "mototrek", "mototrek-boost-marketing.png"),
        os.path.join(dst_base, "posters-flyers", "mototrek-boost-marketing.png")
    )
    
    # 8. Mototrek - Reel thumbnails
    copy_dir_contents(
        os.path.join(src_base, "mototrek", "Mototrek - Reel thumbnails"),
        os.path.join(dst_base, "reel-thumbnails")
    )
    
    # 9. Mototrek - Event Flyers
    copy_dir_contents(
        os.path.join(src_base, "mototrek", "Mototrek Event Flyers"),
        os.path.join(dst_base, "posters-flyers")
    )
    
    # 10. Mototrek - Reels (Videos)
    copy_dir_contents(
        os.path.join(src_base, "mototrek", "mototrek - reels"),
        os.path.join(dst_base, "videos")
    )
    
    # 11. Mototrek - Product Showcase Carousels
    copy_dir_contents(
        os.path.join(src_base, "mototrek", "Mototrek - product showcase carousels"),
        os.path.join(dst_base, "product-carousels")
    )

if __name__ == "__main__":
    main()
