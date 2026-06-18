import cv2
import os

def extract_frame(video_path, output_image_path):
    print(f"Opening video: {video_path}")
    vidcap = cv2.VideoCapture(video_path)
    if not vidcap.isOpened():
        print("Error: Could not open video file.")
        return False
        
    length = int(vidcap.get(cv2.CAP_PROP_FRAME_COUNT))
    fps = vidcap.get(cv2.CAP_PROP_FPS)
    print(f"Total frames: {length}, FPS: {fps}")
    
    # We want to extract a frame near the middle or around 2-3 seconds where the logo is fully animated/visible.
    # Let's save a few options or try to get frame at 40% of the video duration.
    target_frame = int(length * 0.4)
    if target_frame == 0:
        target_frame = 1
        
    vidcap.set(cv2.CAP_PROP_POS_FRAMES, target_frame)
    success, image = vidcap.read()
    if success:
        os.makedirs(os.path.dirname(output_image_path), exist_ok=True)
        cv2.imwrite(output_image_path, image)
        print(f"Successfully saved frame {target_frame} to {output_image_path}")
        return True
    else:
        print("Error: Could not read frame.")
        return False

if __name__ == "__main__":
    video_path = r"c:\ASUS\Portfolio\n-b-productions\cinematic-visions\public\videos\UNMAPD-logo-animation-epic.mp4"
    output_path = r"c:\ASUS\Portfolio\n-b-productions\cinematic-visions\public\reel-thumbnails\UNMAPD-logo-animation-epic.png"
    extract_frame(video_path, output_path)
