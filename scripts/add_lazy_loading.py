import os
import re

def update_files(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.tsx'):
                filepath = os.path.join(root, file)
                
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()

                original_content = content
                
                # Add loading="lazy" to <img> tags if not already present
                # Skip if it already has loading attribute
                content = re.sub(r'<img(?![^>]*loading=)([^>]+)>', r'<img loading="lazy"\1>', content)
                
                # Add preload="none" to <video> tags if not already present, except in Hero.tsx
                if "Hero.tsx" not in filepath:
                    content = re.sub(r'<video(?![^>]*preload=)([^>]+)>', r'<video preload="none"\1>', content)

                if content != original_content:
                    print(f"Updated: {filepath}")
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(content)

if __name__ == "__main__":
    src_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'src')
    update_files(src_dir)
    print("Lazy loading attributes added!")
