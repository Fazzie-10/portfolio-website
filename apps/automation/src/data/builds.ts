// The builds shown on the automation site. Copy lives here so the layout stays clean.

export const SOCIALS = {
  tiktok: "https://www.tiktok.com/@femi_codes",
  instagram: "https://www.instagram.com/femi_codes/",
};

// logo = file name in packages/ui/src/logos (null = text only, no official mark available)
export const STACK: { name: string; logo: string | null }[] = [
  { name: "Python", logo: "python" }, { name: "FastAPI", logo: "fastapi" }, { name: "Supabase", logo: "supabase" },
  { name: "Gemini", logo: "gemini" }, { name: "Claude", logo: "claude" }, { name: "Deepgram", logo: "deepgram" },
  { name: "faster-whisper", logo: null }, { name: "Railway", logo: "railway" }, { name: "WhatsApp", logo: "whatsapp" },
  { name: "React", logo: "react" }, { name: "Next.js", logo: "nextjs" }, { name: "Streamlit", logo: "streamlit" },
  { name: "OpenCV", logo: "opencv" }, { name: "MediaPipe", logo: null }, { name: "FFmpeg", logo: "ffmpeg" }, { name: "Vercel", logo: "vercel" },
];

export const VENDORIQ = {
  name: "VendorIQ",
  status: "Paused · iDICE Founders Lab Stage 2",
  problem: "Nigerian vendors keep their sales, debts and stock in their heads or in notebooks, so they never really know what they made.",
  built: "A WhatsApp-native bookkeeper. Vendors log sales, expenses and debts in plain English or a voice note, ask \"How much did I make last week?\", and get receipts and daily summaries back.",
  stack: ["FastAPI", "Supabase", "Gemini", "Green API", "Railway"],
};

export const SNIPPY = {
  name: "Snippy",
  status: "Desktop app · in use",
  problem: "Turning a long YouTube video into short clips takes hours of watching, cutting, cropping and captioning.",
  built: "Paste a YouTube link and Snippy transcribes it, suggests the strongest clips, crops them to 9:16 with face tracking, burns in subtitles and renders them, ready to post.",
  stack: ["Python", "faster-whisper", "OpenCV", "ffmpeg"],
};

export const SMALL_BUILDS = [
  {
    name: "AF Studio",
    status: "Windows app · personal tool",
    body: "My own FocuSee-style screen recorder. It follows the cursor with smooth auto-zoom, frames the video for vertical or landscape, and adds captions. Packaged as an .exe.",
    stack: ["Python", "ffmpeg", "OpenCV", "MediaPipe", "Deepgram"],
    href: null as string | null,
  },
  {
    name: "SpeechMate",
    status: "Live",
    body: "Speech to text and text to speech in the browser, with no limit on audio length. Upload or record, get a clean or timestamped transcript, and download it.",
    stack: ["Deepgram", "Vercel"],
    href: "https://speechmate-seven.vercel.app",
  },
  {
    name: "PaletteIQ",
    status: "Live",
    body: "AI colour intelligence for data visualisation. Extract a professional palette and apply it to any dashboard or chart.",
    stack: ["AI", "Data viz"],
    href: "https://paletteiq.vercel.app",
  },
];

export const PROCESS = [
  { title: "Audit", body: "We look at where your time goes and find the repetitive work worth automating." },
  { title: "Map", body: "I sketch the flow: what triggers it, what the AI decides, where data lands." },
  { title: "Build", body: "I build it with AI-assisted coding, then test it against your real data." },
  { title: "Hand over", body: "You get a working tool, a short walkthrough, and support while it beds in." },
];
