// The builds shown on the automation site. Copy lives here so the layout stays clean.

export const SOCIALS = {
  tiktok: "https://www.tiktok.com/@femi_codes",
  instagram: "https://www.instagram.com/femi_codes/",
};

// logo = file name in packages/ui/src/logos (null = text only, no official mark available)
export const STACK: { name: string; logo: string | null }[] = [
  { name: "Python", logo: "python" }, { name: "FastAPI", logo: "fastapi" }, { name: "Supabase", logo: "supabase" },
  { name: "Gemini", logo: "gemini" }, { name: "Claude", logo: "claude" }, { name: "Deepgram", logo: "deepgram" },
  { name: "WhatsApp", logo: "whatsapp" }, { name: "React", logo: "react" }, { name: "Next.js", logo: "nextjs" },
  { name: "OpenCV", logo: "opencv" }, { name: "FFmpeg", logo: "ffmpeg" }, { name: "Vercel", logo: "vercel" },
];

// What the products and custom builds do, shown in the scrolling strip under the hero
export const CAPABILITIES = [
  "Branded receipts with a QR check",
  "Questionnaire to Chapter 4",
  "Long video to 9:16 clips",
  "Speech to text, any length",
  "Colour palettes for charts",
  "Custom automations for your business",
];

// Live products. Facts here come from the products' own sites, repos and build notes.
// rcpt's numbers are read from the live counter on rcpt.rcpt.workers.dev; refresh them before each deploy.
export const RCPT = {
  name: "rcpt",
  status: "Live · early users",
  href: "https://rcpt.rcpt.workers.dev",
  problem: "Small vendors prove payment with screenshots and handwritten notes. Customers can't tell a genuine receipt from an edited one.",
  built: "Set up your logo and colours once, type what the customer bought, and a branded receipt reaches their WhatsApp in about 10 seconds. Every receipt carries a QR code anyone can scan to check it's real. Print on A4 or thermal paper, or keep every sale in a searchable record.",
  stack: ["Next.js", "Cloudflare Workers", "Supabase", "pdf-lib"],
  metrics: [
    { value: "16", label: "businesses using it" },
    { value: "27", label: "receipts & invoices sent" },
    { value: "₦2.52M", label: "in sales recorded" },
  ],
  metricsAsOf: "12 Nov 2026",
};

export const RSCH = {
  name: "rsch",
  status: "Live",
  href: "https://getrsch.pages.dev",
  problem: "Students can collect questionnaire responses, but cleaning the data, picking the right test and writing Chapter 4 means juggling form builders, spreadsheets, statistics software and AI chat tools.",
  built: "One guided workspace from questionnaire to results. It coaches you on weak questions before launch, collects responses on phones, flags rushed answers, runs the statistics in its own engine (not an AI model) and helps you write up Chapter 4.",
  steps: ["Build the questionnaire", "Collect on phones", "Clean the data", "Get Chapter 4"],
  stack: ["React", "Hono", "Custom stats engine", "Cloudflare Pages"],
};

export const TUCPAC = {
  name: "tucpac",
  tagline: "The AI Clipper engine",
  status: "Live · early",
  href: "https://tucpac.vercel.app",
  problem: "Turning a long video or podcast into short clips means watching all of it, finding the best moments, then cropping, captioning and exporting each clip by hand.",
  built: "Paste a YouTube link or drop in a long video and the AI Clipper finds the strongest moments, centres the speaker and exports 9:16 clips with a title banner and captions, ready to post.",
  steps: ["Paste a link or upload", "Transcribe", "AI picks the moments", "Export 9:16 clips"],
  stack: ["React", "FastAPI", "Modal", "FFmpeg", "OpenCV", "Deepgram", "Gemini"],
};

export const SMALL_BUILDS = [
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
  { title: "Find the repeat work", body: "We look at where your week goes and pick the one task worth automating first." },
  { title: "Sketch the flow", body: "Before any code: what starts it, what the AI decides, and where the result lands." },
  { title: "Build and test", body: "I build it and test it on your real data, not sample data." },
  { title: "Hand it over", body: "You get a working tool, a short walkthrough and support while it settles in." },
];
