import os
import subprocess

FFMPEG_PATH = r"C:\ASUS\Portfolio\n-b-productions\cinematic-visions\scripts\node_modules\@ffmpeg-installer\win32-x64\ffmpeg.exe"

videos = [
    r"public\events\apnawalaclick\IMG_1568.MOV",
    r"public\events\apnawalaclick\IMG_5464.MOV"
]

for vid in videos:
    if os.path.exists(vid):
        print(f"Compressing {vid}...")
        tmp_vid = vid + ".tmp.mp4"
        cmd = [FFMPEG_PATH, "-y", "-i", vid, "-vcodec", "libx264", "-crf", "30", "-vf", "scale=-2:720", "-acodec", "aac", "-b:a", "96k", tmp_vid]
        try:
            subprocess.run(cmd, check=True)
            if os.path.exists(tmp_vid) and os.path.getsize(tmp_vid) > 0:
                os.remove(vid)
                os.rename(tmp_vid, vid)
                print(f"Successfully compressed {vid}. Size is now {os.path.getsize(vid) / 1024 / 1024:.2f} MB")
        except Exception as e:
            print(f"Failed to compress {vid}: {e}")

print("Compression finished.")
