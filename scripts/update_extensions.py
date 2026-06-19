import os
import re

def update_extensions(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(('.tsx', '.ts', '.css', '.html')):
                filepath = os.path.join(root, file)
                
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()

                original_content = content
                
                # Replace .png, .jpg, .jpeg with .webp
                # This assumes we converted all images to .webp
                content = re.sub(r'\.png(?=["\'`])', '.webp', content)
                content = re.sub(r'\.jpg(?=["\'`])', '.webp', content)
                content = re.sub(r'\.jpeg(?=["\'`])', '.webp', content)

                if content != original_content:
                    print(f"Updated extensions in: {filepath}")
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(content)

if __name__ == "__main__":
    src_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'src')
    public_dir = os.path.dirname(os.path.dirname(__file__))
    
    update_extensions(src_dir)
    # also run on index.html
    update_extensions(public_dir)
    print("Extensions updated to .webp!")
