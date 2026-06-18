import os

def main():
    target_file = r"c:\ASUS\Portfolio\n-b-productions\cinematic-visions\src\data\portfolioData.ts"
    
    content = """export interface PortfolioItem {
  id: number;
  title: string;
  categories: string[]; // Inter-categorization array
  image?: string;       // Primary image / first slide of carousel
  images?: string[];    // Slides for carousel posts
  pdfUrl?: string;      // PDF brochure / deck
  isVideo?: boolean;    // Video item
  videoUrl?: string;    // Reel video path (optional, paired with image thumbnail)
  isCarousel?: boolean; // Carousel post item
  date: string;
}

export const categories = [
  "All Works",
  "Cinematic Photography",
  "Motion Picture & Videography",
  "Brand Identity & Insignia",
  "Digital Cover Art",
  "Editorial Posters & Visuals",
  "Short-Form Cinema & Reels",
  "Print Media & Brochures",
  "Presentations & Pitch Decks",
  "Product Showcases & Carousels",
  "Maternity & Childhood",
  "Fine Art & Aesthetic",
  "Couples & Romance",
  "Fashion & Editorial",
  "Heritage & Traditional"
];

export const portfolioItems: PortfolioItem[] = [
  // --- Kids & Baby Shoots (Maternity & Childhood + Cinematic Photography) ---
  { id: 53, title: "Kids Shoot 1", categories: ["Cinematic Photography", "Maternity & Childhood"], image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.17.15 (1).jpeg", date: "2025-06" },
  { id: 54, title: "Kids Shoot 2", categories: ["Cinematic Photography", "Maternity & Childhood"], image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.17.15 (2).jpeg", date: "2025-06" },
  { id: 55, title: "Kids Shoot 3", categories: ["Cinematic Photography", "Maternity & Childhood"], image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.17.15.jpeg", date: "2025-06" },
  { id: 56, title: "Kids Shoot 4", categories: ["Cinematic Photography", "Maternity & Childhood"], image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.17.19 (1).jpeg", date: "2025-06" },
  { id: 57, title: "Kids Shoot 5", categories: ["Cinematic Photography", "Maternity & Childhood"], image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.17.19 (2).jpeg", date: "2025-06" },
  { id: 58, title: "Kids Shoot 6", categories: ["Cinematic Photography", "Maternity & Childhood"], image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.17.19.jpeg", date: "2025-06" },
  { id: 59, title: "Kids Shoot 7", categories: ["Cinematic Photography", "Maternity & Childhood"], image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.17.20 (1).jpeg", date: "2025-06" },
  { id: 60, title: "Kids Shoot 8", categories: ["Cinematic Photography", "Maternity & Childhood"], image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.17.20 (2).jpeg", date: "2025-06" },
  { id: 61, title: "Kids Shoot 9", categories: ["Cinematic Photography", "Maternity & Childhood"], image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.17.20 (3).jpeg", date: "2025-06" },
  { id: 62, title: "Kids Shoot 10", categories: ["Cinematic Photography", "Maternity & Childhood"], image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.17.20.jpeg", date: "2025-06" },
  { id: 63, title: "Kids Shoot 11", categories: ["Cinematic Photography", "Maternity & Childhood"], image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.17.21 (1).jpeg", date: "2025-06" },
  { id: 64, title: "Kids Shoot 12", categories: ["Cinematic Photography", "Maternity & Childhood"], image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.17.21 (2).jpeg", date: "2025-06" },
  { id: 65, title: "Kids Shoot 13", categories: ["Cinematic Photography", "Maternity & Childhood"], image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.17.21 (3).jpeg", date: "2025-06" },
  { id: 66, title: "Kids Shoot 14", categories: ["Cinematic Photography", "Maternity & Childhood"], image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.17.21.jpeg", date: "2025-06" },
  { id: 67, title: "Kids Shoot 15", categories: ["Cinematic Photography", "Maternity & Childhood"], image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.19.18 (2).jpeg", date: "2025-06" },
  { id: 68, title: "Kids Shoot 16", categories: ["Cinematic Photography", "Maternity & Childhood"], image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.19.18 (3).jpeg", date: "2025-06" },
  { id: 69, title: "Kids Shoot 17", categories: ["Cinematic Photography", "Maternity & Childhood"], image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.19.19 (1).jpeg", date: "2025-06" },
  { id: 70, title: "Kids Shoot 18", categories: ["Cinematic Photography", "Maternity & Childhood"], image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.19.19 (2).jpeg", date: "2025-06" },
  { id: 71, title: "Kids Shoot 19", categories: ["Cinematic Photography", "Maternity & Childhood"], image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.19.19 (3).jpeg", date: "2025-06" },
  { id: 72, title: "Kids Shoot 20", categories: ["Cinematic Photography", "Maternity & Childhood"], image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.19.19.jpeg", date: "2025-06" },

  // --- Aesthetic Shoots (Fine Art & Aesthetic + Cinematic Photography) ---
  { id: 73, title: "Aesthetic Shoot 1", categories: ["Cinematic Photography", "Fine Art & Aesthetic"], image: "/new/aesthetic_shoots/WhatsApp Image 2026-01-13 at 11.17.16 (1).jpeg", date: "2025-05" },
  { id: 74, title: "Aesthetic Shoot 2", categories: ["Cinematic Photography", "Fine Art & Aesthetic"], image: "/new/aesthetic_shoots/WhatsApp Image 2026-01-13 at 11.17.16 (2).jpeg", date: "2025-05" },
  { id: 75, title: "Aesthetic Shoot 3", categories: ["Cinematic Photography", "Fine Art & Aesthetic"], image: "/new/aesthetic_shoots/WhatsApp Image 2026-01-13 at 11.17.16 (3).jpeg", date: "2025-05" },
  { id: 76, title: "Aesthetic Shoot 4", categories: ["Cinematic Photography", "Fine Art & Aesthetic"], image: "/new/aesthetic_shoots/WhatsApp Image 2026-01-13 at 11.17.17 (1).jpeg", date: "2025-05" },
  { id: 77, title: "Aesthetic Shoot 5", categories: ["Cinematic Photography", "Fine Art & Aesthetic"], image: "/new/aesthetic_shoots/WhatsApp Image 2026-01-13 at 11.17.17.jpeg", date: "2025-05" },
  { id: 78, title: "Aesthetic Shoot 6", categories: ["Cinematic Photography", "Fine Art & Aesthetic"], image: "/new/aesthetic_shoots/WhatsApp Image 2026-01-13 at 11.19.32.jpeg", date: "2025-05" },

  // --- Couple Shoots (Couples & Romance + Cinematic Photography) ---
  { id: 79, title: "Couple Shoot 1", categories: ["Cinematic Photography", "Couples & Romance"], image: "/new/couple_shoots/WhatsApp Image 2026-01-13 at 11.19.18 (1).jpeg", date: "2025-04" },
  { id: 80, title: "Couple Shoot 2", categories: ["Cinematic Photography", "Couples & Romance"], image: "/new/couple_shoots/WhatsApp Image 2026-01-13 at 11.19.18.jpeg", date: "2025-04" },

  // --- Model Shoots (Fashion & Editorial + Cinematic Photography) ---
  { id: 81, title: "Model Shoot 1", categories: ["Cinematic Photography", "Fashion & Editorial"], image: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.17.14 (1).jpeg", date: "2025-03" },
  { id: 82, title: "Model Shoot 2", categories: ["Cinematic Photography", "Fashion & Editorial"], image: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.17.14.jpeg", date: "2025-03" },
  { id: 83, title: "Model Shoot 3", categories: ["Cinematic Photography", "Fashion & Editorial"], image: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.17.17 (2).jpeg", date: "2025-03" },
  { id: 84, title: "Model Shoot 4", categories: ["Cinematic Photography", "Fashion & Editorial"], image: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.17.17 (3).jpeg", date: "2025-03" },
  { id: 85, title: "Model Shoot 5", categories: ["Cinematic Photography", "Fashion & Editorial"], image: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.17.18 (1).jpeg", date: "2025-03" },
  { id: 86, title: "Model Shoot 6", categories: ["Cinematic Photography", "Fashion & Editorial"], image: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.17.18 (2).jpeg", date: "2025-03" },
  { id: 87, title: "Model Shoot 7", categories: ["Cinematic Photography", "Fashion & Editorial"], image: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.17.18.jpeg", date: "2025-03" },
  { id: 88, title: "Model Shoot 8", categories: ["Cinematic Photography", "Fashion & Editorial"], image: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.19.17 (1).jpeg", date: "2025-03" },
  { id: 89, title: "Model Shoot 9", categories: ["Cinematic Photography", "Fashion & Editorial"], image: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.19.17 (2).jpeg", date: "2025-03" },
  { id: 90, title: "Model Shoot 10", categories: ["Cinematic Photography", "Fashion & Editorial"], image: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.19.17 (3).jpeg", date: "2025-03" },
  { id: 91, title: "Model Shoot 11", categories: ["Cinematic Photography", "Fashion & Editorial"], image: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.19.17.jpeg", date: "2025-03" },
  { id: 92, title: "Model Shoot 12", categories: ["Cinematic Photography", "Fashion & Editorial"], image: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.20.37.jpeg", date: "2025-03" },
  { id: 93, title: "Model Shoot 13", categories: ["Cinematic Photography", "Fashion & Editorial"], image: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.20.38.jpeg", date: "2025-03" },

  // --- Traditional Shoots (Heritage & Traditional + Cinematic Photography) ---
  { id: 94, title: "Traditional Shoot 1", categories: ["Cinematic Photography", "Heritage & Traditional"], image: "/new/traditional_shoots/WhatsApp Image 2026-01-13 at 11.17.15 (3).jpeg", date: "2025-02" },
  { id: 95, title: "Traditional Shoot 2", categories: ["Cinematic Photography", "Heritage & Traditional"], image: "/new/traditional_shoots/WhatsApp Image 2026-01-13 at 11.17.16.jpeg", date: "2025-02" },
  { id: 96, title: "Traditional Shoot 3", categories: ["Cinematic Photography", "Heritage & Traditional"], image: "/new/traditional_shoots/WhatsApp Image 2026-01-13 at 11.19.03 (1).jpeg", date: "2025-02" },
  { id: 97, title: "Traditional Shoot 4", categories: ["Cinematic Photography", "Heritage & Traditional"], image: "/new/traditional_shoots/WhatsApp Image 2026-01-13 at 11.19.03.jpeg", date: "2025-02" },
  { id: 98, title: "Traditional Shoot 5", categories: ["Cinematic Photography", "Heritage & Traditional"], image: "/new/traditional_shoots/WhatsApp Image 2026-01-13 at 11.19.04.jpeg", date: "2025-02" },

  // --- Logos & Badges (Brand Identity & Insignia) ---
  { id: 1, title: "Chairman Saheb Brandmark", categories: ["Brand Identity & Insignia"], image: "/logos/Chairman_saheb_logo_white.png", date: "2024-12" },
  { id: 2, title: "Infinite Waves Identity", categories: ["Brand Identity & Insignia"], image: "/logos/Infinite-Waves-logo.png", date: "2024-11" },
  { id: 3, title: "PN Computers Identity", categories: ["Brand Identity & Insignia"], image: "/logos/PN Computers without bg.png", date: "2024-10" },
  { id: 4, title: "Pranav Multi-purpose Society Logo", categories: ["Brand Identity & Insignia"], image: "/logos/Pranav Multi-purpose Society LOGO-transperent.png", date: "2024-09" },
  { id: 5, title: "Shinde Industrial Suppliers Identity", categories: ["Brand Identity & Insignia"], image: "/logos/Shinde Industrial Suppliers.png", date: "2024-08" },
  { id: 6, title: "Patidar Properties Logo", categories: ["Brand Identity & Insignia"], image: "/logos/patidar-properties-logo.png", date: "2024-07" },
  { id: 7, title: "The Bhartiya Trekkers Badge", categories: ["Brand Identity & Insignia"], image: "/logos/the-bhartiya-trekkers.png", date: "2024-06" },
  
  // New TBT badges
  { id: 110, title: "The Bhartiya Trekkers - K2S Gold Crest", categories: ["Brand Identity & Insignia"], image: "/logos/tbt-k2s-badge-1.png", date: "2026-04" },
  { id: 111, title: "The Bhartiya Trekkers - K2S Dark Shield", categories: ["Brand Identity & Insignia"], image: "/logos/tbt-k2s-badge-2.png", date: "2026-04" },
  
  // New MotoTrek logo
  { id: 112, title: "MotoTrek Stores Emblem", categories: ["Brand Identity & Insignia"], image: "/logos/MotoTrek Stores Logo.jpeg", date: "2026-01" },

  // --- YouTube Thumbnails (Digital Cover Art) ---
  { id: 8, title: "Digital Cover Art 1", categories: ["Digital Cover Art"], image: "/youtube-thumbnails/IMG-20260112-WA0037.jpg", date: "2026-01" },
  { id: 9, title: "Digital Cover Art 2", categories: ["Digital Cover Art"], image: "/youtube-thumbnails/IMG-20260112-WA0038.jpg", date: "2026-01" },
  { id: 10, title: "Digital Cover Art 3", categories: ["Digital Cover Art"], image: "/youtube-thumbnails/IMG-20260112-WA0039.jpg", date: "2026-01" },
  { id: 11, title: "Digital Cover Art 4", categories: ["Digital Cover Art"], image: "/youtube-thumbnails/IMG-20260112-WA0040.jpg", date: "2026-01" },
  { id: 12, title: "Digital Cover Art 5", categories: ["Digital Cover Art"], image: "/youtube-thumbnails/IMG-20260112-WA0041.jpg", date: "2026-01" },
  { id: 13, title: "Digital Cover Art 6", categories: ["Digital Cover Art"], image: "/youtube-thumbnails/IMG-20260112-WA0042.jpg", date: "2026-01" },
  { id: 14, title: "Digital Cover Art 7", categories: ["Digital Cover Art"], image: "/youtube-thumbnails/IMG-20260112-WA0043.jpg", date: "2026-01" },
  { id: 15, title: "Digital Cover Art 8", categories: ["Digital Cover Art"], image: "/youtube-thumbnails/IMG-20260112-WA0044.jpg", date: "2026-01" },
  { id: 16, title: "Digital Cover Art 9", categories: ["Digital Cover Art"], image: "/youtube-thumbnails/IMG-20260112-WA0045.jpg", date: "2026-01" },

  // --- Posters & Flyers (Editorial Posters & Visuals) ---
  { id: 17, title: "Editorial Design 1", categories: ["Editorial Posters & Visuals"], image: "/posters-flyers/IMG-20251219-WA0008.jpg", date: "2025-12" },
  { id: 18, title: "Editorial Design 2", categories: ["Editorial Posters & Visuals"], image: "/posters-flyers/IMG-20260108-WA0013.jpg", date: "2026-01" },
  { id: 19, title: "Editorial Design 3", categories: ["Editorial Posters & Visuals"], image: "/posters-flyers/IMG-20260108-WA0014.jpg", date: "2026-01" },
  { id: 20, title: "Editorial Design 4", categories: ["Editorial Posters & Visuals"], image: "/posters-flyers/IMG-20260108-WA0015.jpg", date: "2026-01" },
  { id: 21, title: "Editorial Design 5", categories: ["Editorial Posters & Visuals"], image: "/posters-flyers/IMG-20260108-WA0016.jpg", date: "2026-01" },
  { id: 22, title: "Editorial Design 6", categories: ["Editorial Posters & Visuals"], image: "/posters-flyers/IMG-20260109-WA0003.jpg", date: "2026-01" },
  { id: 23, title: "Editorial Design 7", categories: ["Editorial Posters & Visuals"], image: "/posters-flyers/IMG-20260109-WA0004.jpg", date: "2026-01" },
  { id: 24, title: "Editorial Design 8", categories: ["Editorial Posters & Visuals"], image: "/posters-flyers/IMG-20260109-WA0011.jpg", date: "2026-01" },
  { id: 25, title: "Editorial Design 9", categories: ["Editorial Posters & Visuals"], image: "/posters-flyers/IMG-20260109-WA0012.jpg", date: "2026-01" },
  { id: 26, title: "Editorial Design 10", categories: ["Editorial Posters & Visuals"], image: "/posters-flyers/IMG-20260109-WA0013.jpg", date: "2026-01" },
  { id: 27, title: "Editorial Design 11", categories: ["Editorial Posters & Visuals"], image: "/posters-flyers/IMG-20260109-WA0015.jpg", date: "2026-01" },
  { id: 28, title: "Editorial Design 12", categories: ["Editorial Posters & Visuals"], image: "/posters-flyers/IMG-20260109-WA0018.jpg", date: "2026-01" },
  { id: 29, title: "Editorial Design 13", categories: ["Editorial Posters & Visuals"], image: "/posters-flyers/IMG-20260109-WA0019.jpg", date: "2026-01" },
  { id: 30, title: "Editorial Design 14", categories: ["Editorial Posters & Visuals"], image: "/posters-flyers/IMG-20260110-WA0006.jpg", date: "2026-01" },
  { id: 31, title: "Editorial Design 15", categories: ["Editorial Posters & Visuals"], image: "/posters-flyers/IMG-20260110-WA0007.jpg", date: "2026-01" },
  { id: 32, title: "Editorial Design 16", categories: ["Editorial Posters & Visuals"], image: "/posters-flyers/IMG-20260110-WA0008.jpg", date: "2026-01" },
  { id: 33, title: "Editorial Design 17", categories: ["Editorial Posters & Visuals"], image: "/posters-flyers/IMG-20260110-WA0010.jpg", date: "2026-01" },
  { id: 34, title: "Editorial Design 18", categories: ["Editorial Posters & Visuals"], image: "/posters-flyers/IMG-20260110-WA0014.jpg", date: "2026-01" },
  { id: 35, title: "Editorial Design 19", categories: ["Editorial Posters & Visuals"], image: "/posters-flyers/IMG-20260110-WA0015.jpg", date: "2026-01" },
  
  // New Event Flyers
  { id: 120, title: "SDCSA Kickboxing Championship Visual", categories: ["Editorial Posters & Visuals"], image: "/event-flyers/3.png", date: "2026-05" },
  { id: 121, title: "Kickboxing League Promotional Visual", categories: ["Editorial Posters & Visuals"], image: "/event-flyers/4.png", date: "2026-05" },
  { id: 122, title: "SDCSA Standee - Nasiklub Edition", categories: ["Editorial Posters & Visuals", "Brand Identity & Insignia"], image: "/event-flyers/SDCSA - Standy - Nasiklub.png", date: "2026-05" },
  { id: 123, title: "5th Nashik District Kickboxing Championship", categories: ["Editorial Posters & Visuals"], image: "/event-flyers/post - 5th NASHIK DISTRICT KICKBOXING COMPETITION 2026.png", date: "2026-05" },

  // New Cafe Blue Lagoon Posters
  { id: 124, title: "Blue Lagoon Culinary - Non-Veg Feast", categories: ["Editorial Posters & Visuals", "Brand Identity & Insignia"], image: "/cafe-blue-lagoon/NON VEG MEAL.png", date: "2026-05" },
  { id: 125, title: "Blue Lagoon Culinary - Nutritional Specs", categories: ["Editorial Posters & Visuals", "Brand Identity & Insignia"], image: "/cafe-blue-lagoon/cafe-blue-lagoon-NON VEG MEAL - macros.png", date: "2026-05" },

  // New MotoTrek flyers & posters
  { id: 126, title: "MotoTrek Retail Boost Flyer", categories: ["Editorial Posters & Visuals", "Digital Cover Art"], image: "/posters-flyers/mototrek-boost-marketing.png", date: "2026-01" },
  { id: 127, title: "MotoTrek Duke's Nose Sunrise Trek", categories: ["Editorial Posters & Visuals"], image: "/posters-flyers/Duke's Nose Poster.png", date: "2026-01" },
  { id: 128, title: "MotoTrek Summer Adventure Camp", categories: ["Editorial Posters & Visuals"], image: "/posters-flyers/Mototrek - Summer Camp.png", date: "2026-01" },
  { id: 129, title: "MotoTrek Duke's Nose Sunrise Flyer", categories: ["Editorial Posters & Visuals"], image: "/posters-flyers/duke's nose camping and sunrise trek - mototrek.png", date: "2026-01" },

  // --- Reels & Shorts (Short-Form Cinema & Reels) ---
  { id: 36, title: "Short Film Reel 1", categories: ["Short-Form Cinema & Reels"], image: "/reel-thumbnails/IMG-20260112-WA0046.jpg", date: "2026-01" },
  { id: 37, title: "Short Film Reel 2", categories: ["Short-Form Cinema & Reels"], image: "/reel-thumbnails/IMG-20260112-WA0047.jpg", date: "2026-01" },
  { id: 38, title: "Short Film Reel 3", categories: ["Short-Form Cinema & Reels"], image: "/reel-thumbnails/IMG-20260112-WA0048.jpg", date: "2026-01" },
  { id: 39, title: "Short Film Reel 4", categories: ["Short-Form Cinema & Reels"], image: "/reel-thumbnails/IMG-20260112-WA0049.jpg", date: "2026-01" },
  { id: 40, title: "Short Film Reel 5", categories: ["Short-Form Cinema & Reels"], image: "/reel-thumbnails/IMG-20260112-WA0050.jpg", date: "2026-01" },
  { id: 41, title: "Short Film Reel 6", categories: ["Short-Form Cinema & Reels"], image: "/reel-thumbnails/IMG-20260112-WA0051.jpg", date: "2026-01" },
  { id: 42, title: "Short Film Reel 7", categories: ["Short-Form Cinema & Reels"], image: "/reel-thumbnails/IMG-20260112-WA0052.jpg", date: "2026-01" },
  { id: 43, title: "Short Film Reel 8", categories: ["Short-Form Cinema & Reels"], image: "/reel-thumbnails/IMG-20260112-WA0053.jpg", date: "2026-01" },
  { id: 44, title: "Short Film Reel 9", categories: ["Short-Form Cinema & Reels"], image: "/reel-thumbnails/IMG-20260112-WA0054.jpg", date: "2026-01" },
  { id: 45, title: "Short Film Reel 10", categories: ["Short-Form Cinema & Reels"], image: "/reel-thumbnails/IMG-20260112-WA0055.jpg", date: "2026-01" },
  
  // New MotoTrek Reels (Videos with Thumbnails)
  { id: 130, title: "MotoTrek Cine - B20 Sena Intercom Review", categories: ["Short-Form Cinema & Reels", "Brand Identity & Insignia"], image: "/reel-thumbnails/mototrek-reel-thumbnail-1.png", videoUrl: "/videos/B20-sena-intercom.mp4", isVideo: true, date: "2026-01" },
  { id: 131, title: "MotoTrek Cine - Fog Light Installation", categories: ["Short-Form Cinema & Reels", "Brand Identity & Insignia"], image: "/reel-thumbnails/mototrek-reel-thumbnail-2.png", videoUrl: "/videos/Mototrek - Fog Light Installation.mp4", isVideo: true, date: "2026-01" },
  { id: 132, title: "MotoTrek Cine - HJG Fog Light Setup", categories: ["Short-Form Cinema & Reels", "Brand Identity & Insignia"], image: "/reel-thumbnails/mototrek-reel-thumbnail-3.png", videoUrl: "/videos/Mototrek - HJG Fog Light Installation.mp4", isVideo: true, date: "2026-01" },
  { id: 133, title: "MotoTrek Cine - Stock Refill Montage", categories: ["Short-Form Cinema & Reels", "Brand Identity & Insignia"], image: "/reel-thumbnails/mototrek-reel-thumbnail-4.0.png", videoUrl: "/videos/Mototrek - Stock Refill Montage.mp4", isVideo: true, date: "2026-01" },
  { id: 134, title: "MotoTrek Cine - Stock Refill Montage 2", categories: ["Short-Form Cinema & Reels", "Brand Identity & Insignia"], image: "/reel-thumbnails/mototrek-reel-thumbnail-4.1.png", videoUrl: "/videos/Mototrek - Stock Refill Montage 2.mp4", isVideo: true, date: "2026-01" },
  { id: 135, title: "MotoTrek Cine - Bobo Phone Stand Installation", categories: ["Short-Form Cinema & Reels", "Brand Identity & Insignia"], image: "/reel-thumbnails/mototrek-meme-thumbnail.png", videoUrl: "/videos/montage - bobo phone stand installation.mp4", isVideo: true, date: "2026-01" },
  { id: 136, title: "MotoTrek Cine - Studds Helios Asphalt D1 Review", categories: ["Short-Form Cinema & Reels", "Brand Identity & Insignia"], image: "/reel-thumbnails/mototrek-reel-thumbnail-1.png", videoUrl: "/videos/Studds-helios-asphalt-d1.mp4", isVideo: true, date: "2026-01" },

  // --- Brochures & Publications (Print Media & Brochures) ---
  { id: 46, title: "Do Dham Trek Package Brochure", categories: ["Print Media & Brochures", "Brand Identity & Insignia"], image: "/broshures/Do dham Broshure alpine Trekkers.webp", pdfUrl: "/broshures/Do dham Broshure alpine Trekkers.pdf", date: "2025-11" },
  { id: 47, title: "Gokarna Package Brochure", categories: ["Print Media & Brochures", "Brand Identity & Insignia"], image: "/broshures/Gokarna Broshure.webp", pdfUrl: "/broshures/Gokarna Broshure.pdf", date: "2025-10" },
  { id: 48, title: "Manali Package Brochure", categories: ["Print Media & Brochures", "Brand Identity & Insignia"], image: "/broshures/Manali Broshure.webp", pdfUrl: "/broshures/Manali Broshure.pdf", date: "2025-09" },
  { id: 49, title: "Rajasthan Trek Package Brochure", categories: ["Print Media & Brochures", "Brand Identity & Insignia"], image: "/broshures/Rajasthan Broshure alpine Trekkers.webp", pdfUrl: "/broshures/Rajasthan Broshure alpine Trekkers.pdf", date: "2025-08" },
  
  // New Kedarnath brochures
  { id: 140, title: "Kedarnath Diaries - Dark Edition", categories: ["Print Media & Brochures", "Brand Identity & Insignia"], image: "/broshures/Kedarnath Diaries Broshure Dark.webp", pdfUrl: "/broshures/Kedarnath Diaries Broshure Dark.pdf", date: "2026-03" },
  { id: 141, title: "Kedarnath Diaries - Light Edition", categories: ["Print Media & Brochures", "Brand Identity & Insignia"], image: "/broshures/Kedarnath Diaries Broshure Light.webp", pdfUrl: "/broshures/Kedarnath Diaries Broshure Light.pdf", date: "2026-03" },

  // New Cafe Blue Lagoon Menus
  { id: 142, title: "Blue Lagoon Culinary - Breakfast Menu", categories: ["Print Media & Brochures", "Brand Identity & Insignia"], image: "/cafe-blue-lagoon/cafe-blue-lagoon-breakfast-menu.png", date: "2026-05" },
  { id: 143, title: "Blue Lagoon Culinary - Lunch Menu", categories: ["Print Media & Brochures", "Brand Identity & Insignia"], image: "/cafe-blue-lagoon/cafe-blue-lagoon-lunch-menu.png", date: "2026-05" },
  { id: 144, title: "Blue Lagoon Culinary - Comprehensive Menu", categories: ["Print Media & Brochures", "Brand Identity & Insignia"], image: "/cafe-blue-lagoon/cafe-blue-lagoon-menu.png", date: "2026-05" },

  // --- Presentations & Pitch Decks (Presentations & Pitch Decks) ---
  { id: 150, title: "Alpine Trekkers Brand Presentation", categories: ["Presentations & Pitch Decks", "Brand Identity & Insignia"], image: "/pitch-decks/Alpine Trekkers Presentation.webp", pdfUrl: "/pitch-decks/Alpine Trekkers Presentation.pdf", date: "2026-02" },
  { id: 151, title: "MotoTrek Adventures Venture Deck", categories: ["Presentations & Pitch Decks", "Brand Identity & Insignia"], image: "/pitch-decks/Mototrek adventures pitch deck.webp", pdfUrl: "/pitch-decks/Mototrek adventures pitch deck.pdf", date: "2026-02" },

  // --- Multi-Page Carousels (Product Showcases & Carousels) ---
  {
    id: 160,
    title: "MotoTrek Showcase - Raida Discover Riding Boots",
    categories: ["Product Showcases & Carousels", "Brand Identity & Insignia"],
    image: "/product-carousels/Mototrek - Raida Discover RIding Boots/1.png",
    images: [
      "/product-carousels/Mototrek - Raida Discover RIding Boots/1.png",
      "/product-carousels/Mototrek - Raida Discover RIding Boots/2.png",
      "/product-carousels/Mototrek - Raida Discover RIding Boots/3.png"
    ],
    isCarousel: true,
    date: "2026-01"
  },
  {
    id: 161,
    title: "MotoTrek Showcase - BluArmour C50 Plus Intercom",
    categories: ["Product Showcases & Carousels", "Brand Identity & Insignia"],
    image: "/product-carousels/Mototrek - BluArmour C50 Plus Bluetooth Intercom/1.png",
    images: [
      "/product-carousels/Mototrek - BluArmour C50 Plus Bluetooth Intercom/1.png",
      "/product-carousels/Mototrek - BluArmour C50 Plus Bluetooth Intercom/2.png",
      "/product-carousels/Mototrek - BluArmour C50 Plus Bluetooth Intercom/3.png"
    ],
    isCarousel: true,
    date: "2026-01"
  },
  {
    id: 162,
    title: "MotoTrek Showcase - Studds Trooper Modular Helmet",
    categories: ["Product Showcases & Carousels", "Brand Identity & Insignia"],
    image: "/product-carousels/Mototrek - STUDDS HELMET  TROOPER Modular Helmet/1.png",
    images: [
      "/product-carousels/Mototrek - STUDDS HELMET  TROOPER Modular Helmet/1.png",
      "/product-carousels/Mototrek - STUDDS HELMET  TROOPER Modular Helmet/2.png",
      "/product-carousels/Mototrek - STUDDS HELMET  TROOPER Modular Helmet/3.png"
    ],
    isCarousel: true,
    date: "2026-01"
  },
  {
    id: 163,
    title: "MotoTrek Showcase - Tripole Terra 50L Rucksack",
    categories: ["Product Showcases & Carousels", "Brand Identity & Insignia"],
    image: "/product-carousels/Mototrek - TRIPOLE TERRA 50L Rucksack/1.png",
    images: [
      "/product-carousels/Mototrek - TRIPOLE TERRA 50L Rucksack/1.png",
      "/product-carousels/Mototrek - TRIPOLE TERRA 50L Rucksack/2.png",
      "/product-carousels/Mototrek - TRIPOLE TERRA 50L Rucksack/3.png"
    ],
    isCarousel: true,
    date: "2026-01"
  },

  // --- Motion Pictures & Videography (Motion Picture & Videography) ---
  { id: 1001, title: "Cinematic Vision - Wanderlust Expedition", categories: ["Motion Picture & Videography"], image: "/videos/WhatsApp Video 2026-01-13 at 11.19.21.mp4", isVideo: true, date: "2025-07" },
  { id: 1002, title: "Cinematic Vision - Eternal Frames Montage", categories: ["Motion Picture & Videography"], image: "/videos/WhatsApp Video 2026-01-13 at 11.19.25.mp4", isVideo: true, date: "2025-07" },
  { id: 1003, title: "Cinematic Vision - Ethereal Sunset Chronicles", categories: ["Motion Picture & Videography"], image: "/videos/WhatsApp Video 2026-01-13 at 11.19.32.mp4", isVideo: true, date: "2025-07" },
  { id: 1004, title: "Cinematic Vision - Summit Conquest Documentary", categories: ["Motion Picture & Videography"], image: "/videos/WhatsApp Video 2026-01-15 at 11.39.39.mp4", isVideo: true, date: "2025-07" },
  { id: 1005, title: "Cinematic Vision - Wild Frontiers Narrative", categories: ["Motion Picture & Videography"], image: "/videos/WhatsApp Video 2026-01-15 at 11.39.40.mp4", isVideo: true, date: "2025-07" }
];
"""
    
    with open(target_file, "w", encoding="utf-8") as f:
        f.write(content)
        
    print("Successfully refactored and rewrote src/data/portfolioData.ts")

if __name__ == "__main__":
    main()
