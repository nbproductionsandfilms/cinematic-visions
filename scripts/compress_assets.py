import os
import subprocess
from PIL import Image

FFMPEG_PATH = r"C:\ASUS\Portfolio\n-b-productions\cinematic-visions\scripts\node_modules\@ffmpeg-installer\win32-x64\ffmpeg.exe"

videos = [
    r"public\videos\Mototrek - HJG Fog Light Installation.mp4",
    r"public\videos\montage - bobo phone stand installation.mp4",
    r"public\videos\Mototrek - Stock Refill Montage 2.mp4",
    r"public\videos\Mototrek - Stock Refill Montage.mp4"
]

pngs = [
    r"public\event-flyers\SDCSA - Standy - Nasiklub.png"
]

pdf_to_delete = r"public\pitch-decks\Mototrek adventures pitch deck.pdf"

# Delete PDF
if os.path.exists(pdf_to_delete):
    print(f"Deleting huge PDF: {pdf_to_delete}")
    os.remove(pdf_to_delete)

# Compress PNG
for png in pngs:
    if os.path.exists(png):
        print(f"Compressing {png}...")
        img = Image.open(png)
        # Convert RGBA to RGB for JPEG compatibility, but we can just save it as optimized PNG or Webp
        img.save(png, optimize=True, quality=60)
        print(f"Compressed {png}. Size is now {os.path.getsize(png) / 1024 / 1024:.2f} MB")

# Compress Videos
for vid in videos:
    if os.path.exists(vid):
        print(f"Compressing {vid}...")
        tmp_vid = vid + ".tmp.mp4"
        # Compress using ffmpeg with crf 28 (high compression) and downscale to 720p to save space
        cmd = [FFMPEG_PATH, "-y", "-i", vid, "-vcodec", "libx264", "-crf", "30", "-vf", "scale=-2:720", "-acodec", "aac", "-b:a", "96k", tmp_vid]
        try:
            subprocess.run(cmd, check=True)
            if os.path.exists(tmp_vid) and os.path.getsize(tmp_vid) > 0:
                os.remove(vid)
                os.rename(tmp_vid, vid)
                print(f"Successfully compressed {vid}. Size is now {os.path.getsize(vid) / 1024 / 1024:.2f} MB")
        except Exception as e:
            print(f"Failed to compress {vid}: {e}")

print("Compression script finished.")
