import cv2
import os
from PIL import Image
import io

def generate_thumb(video_path, webp_path, max_height=1080):
    print(f"Opening video: {video_path}")
    vidcap = cv2.VideoCapture(video_path)
    if not vidcap.isOpened():
        print(f"Error: Could not open {video_path}")
        return False
        
    length = int(vidcap.get(cv2.CAP_PROP_FRAME_COUNT))
    if length <= 0:
        print(f"Error: Invalid frame count {length} for {video_path}")
        return False
        
    # Extract frame at ~30% of the video duration
    target_frame = int(length * 0.3)
    if target_frame == 0:
        target_frame = 1
        
    vidcap.set(cv2.CAP_PROP_POS_FRAMES, target_frame)
    success, frame = vidcap.read()
    if not success:
        # Fallback to first frame
        vidcap.set(cv2.CAP_PROP_POS_FRAMES, 0)
        success, frame = vidcap.read()
        
    if success:
        # OpenCV reads in BGR format, convert to RGB for PIL
        rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        img = Image.fromarray(rgb_frame)
        
        # Resize if height is too large
        w, h = img.size
        if h > max_height:
            new_w = int(w * (max_height / h))
            img = img.resize((new_w, max_height), Image.Resampling.LANCZOS)
            
        os.makedirs(os.path.dirname(webp_path), exist_ok=True)
        img.save(webp_path, "WEBP", quality=85)
        print(f"Saved optimized thumbnail to: {webp_path} ({os.path.getsize(webp_path)} bytes)")
        return True
    else:
        print(f"Error: Could not read frame from {video_path}")
        return False

def main():
    public_dir = r"c:\ASUS\Portfolio\n-b-productions\cinematic-visions\public"
    video_dir = os.path.join(public_dir, "videos")
    thumb_dir = os.path.join(public_dir, "reel-thumbnails")
    
    videos = [
        ("B20-sena-intercom.mp4", "video-thumb-130.webp"),
        ("Mototrek - Fog Light Installation.mp4", "video-thumb-131.webp"),
        ("Mototrek - HJG Fog Light Installation.mp4", "video-thumb-132.webp"),
        ("Mototrek - Stock Refill Montage.mp4", "video-thumb-133.webp"),
        ("Mototrek - Stock Refill Montage 2.mp4", "video-thumb-134.webp"),
        ("montage - bobo phone stand installation.mp4", "video-thumb-135.webp"),
        ("Studds-helios-asphalt-d1.mp4", "video-thumb-136.webp"),
        ("UNMAPD-logo-animation-epic.mp4", "video-thumb-137.webp"),
        ("WhatsApp Video 2026-01-13 at 11.19.21.mp4", "video-thumb-1001.webp"),
        ("WhatsApp Video 2026-01-13 at 11.19.25.mp4", "video-thumb-1002.webp"),
        ("WhatsApp Video 2026-01-13 at 11.19.32.mp4", "video-thumb-1003.webp"),
        ("WhatsApp Video 2026-01-15 at 11.39.39.mp4", "video-thumb-1004.webp"),
        ("WhatsApp Video 2026-01-15 at 11.39.40.mp4", "video-thumb-1005.webp")
    ]
    
    for video_file, thumb_file in videos:
        v_path = os.path.join(video_dir, video_file)
        t_path = os.path.join(thumb_dir, thumb_file)
        if os.path.exists(v_path):
            generate_thumb(v_path, t_path)
        else:
            print(f"Error: Video file not found: {v_path}")

if __name__ == "__main__":
    main()
