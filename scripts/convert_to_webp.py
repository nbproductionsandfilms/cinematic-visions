import os
import glob
from PIL import Image

def convert_to_webp(folder_path):
    print(f"Scanning {folder_path} for images...")
    
    # Supported input formats
    formats = ('*.png', '*.jpg', '*.jpeg')
    files_to_convert = []
    
    for fmt in formats:
        files_to_convert.extend(glob.glob(os.path.join(folder_path, '**', fmt), recursive=True))

    for file_path in files_to_convert:
        # Skip if already webp (though glob shouldn't catch it)
        if file_path.lower().endswith('.webp'):
            continue
            
        try:
            with Image.open(file_path) as img:
                # Convert RGBA to RGB for JPEG if needed, but webp supports RGBA
                webp_path = os.path.splitext(file_path)[0] + '.webp'
                
                # Only convert if webp doesn't already exist
                if not os.path.exists(webp_path):
                    print(f"Converting: {file_path} -> {webp_path}")
                    # Save as webp with 85% quality (good balance of size and visual fidelity)
                    img.save(webp_path, 'webp', quality=85)
        except Exception as e:
            print(f"Error converting {file_path}: {e}")

if __name__ == "__main__":
    # Target directories
    public_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'public')
    assets_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'src', 'assets')
    
    convert_to_webp(public_dir)
    convert_to_webp(assets_dir)
    print("Conversion complete!")
