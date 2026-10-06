#!/usr/bin/env bash
# Turns the raw files in assets/ into small web-ready media inside each app's public/media.
# Re-run any time: bash scripts/process-media.sh
set -euo pipefail
cd "$(dirname "$0")/.."

A=assets
HUB=apps/hub/public/media
AF=apps/analystfemi/public/media
AUTO=apps/automation/public/media
mkdir -p "$HUB" "$AF" "$AUTO"

ff() { ffmpeg -v error -y "$@"; }
# Web mp4: H.264, no audio unless asked, fast start so it plays before fully downloaded
mp4() { ff "$@" -c:v libx264 -preset slow -crf 28 -pix_fmt yuv420p -movflags +faststart; }

echo "Photos"
ff -i "$A/IMG_8933.JPG" -vf "colorkey=0xFFFFFF:0.06:0.04,scale=720:-1" -c:v libwebp -pix_fmt yuva420p -quality 85 "$HUB/joshua-cutout.webp"
cp "$HUB/joshua-cutout.webp" "$AF/joshua-cutout.webp"
mkdir -p apps/insightshub/public/media && cp "$HUB/joshua-cutout.webp" apps/insightshub/public/media/joshua-cutout.webp
cp "$HUB/joshua-cutout.webp" "$AUTO/joshua-cutout.webp"
ff -i "$A/IMG_4369.PNG" -vf "scale=720:-1" -c:v libwebp -quality 82 "$AF/joshua-purple.webp"
ff -i "$A/IMG_4369.PNG" -vf "scale=1200:630:force_original_aspect_ratio=increase,crop=1200:630" -q:v 3 "$HUB/og.jpg"

echo "Dashboards"
for n in 6768:brightpark-executive 6769:brightpark-sales 6770:brightpark-marketing; do
  ff -i "$A/IMG_${n%%:*}.PNG" -vf "scale=1400:-1" -c:v libwebp -quality 82 "$AF/${n##*:}.webp"
done
cp "$AF/brightpark-executive.webp" "$HUB/brightpark-executive.webp"
# Weather: keep only the report canvas, drop Power BI menus and panels
ff -i "$A/IMG_3723.JPG" -vf "crop=1112:626:40:128,scale=1400:-1" -c:v libwebp -quality 82 "$AF/weather-dashboard.webp"
ff -i "$A/32fd7bc4-d6b5-4123-8285-0a54adf5b847.jpg" -vf "scale=1400:-1" -c:v libwebp -quality 82 "$AF/sales-calendar.webp"
# Calendar clip: trim the Power BI service bar, 720p, silent loop
mp4 -i "$A/Powerbi Calneder dashbaord.mp4" -vf "crop=1920:960:0:0,scale=1280:-2" -an "$AF/sales-calendar.mp4"

echo "Automation"
ff -i "$A/E4EC5AC2-080F-4458-A2BF-32EFCB49552E.png" -vf "crop=1180:300:200:360,scale=600:-1" -c:v libwebp -quality 90 "$AUTO/vendoriq-logo.webp"
# VendorIQ WhatsApp chat: 8s-68s at 2x speed, phone-sized. The top 17.5% (status bar, chat header and any notification banner) is cropped
# because other chats' notification banners pop up there; the page draws its own VendorIQ header instead.
mp4 -ss 8 -t 60 -i "$A/vendoriq chatbot demo.mp4" -vf "crop=iw:ih*0.825:0:ih*0.175,setpts=PTS/2,scale=540:-2,fps=30" -an "$AUTO/vendoriq-chat.mp4"
ff -ss 20 -i "$A/vendoriq chatbot demo.mp4" -frames:v 1 -vf "crop=iw:ih*0.825:0:ih*0.175,scale=540:-2" -c:v libwebp -quality 80 "$AUTO/vendoriq-chat.webp"
cp "$AUTO/vendoriq-chat.mp4" "$HUB/vendoriq-chat.mp4"; cp "$AUTO/vendoriq-chat.webp" "$HUB/vendoriq-chat.webp"
# VendorIQ website: only the first 17s (how-it-works + sign-up). The hero with unverified stats is excluded.
mp4 -t 17 -i "$A/vendoriq demo website video.mp4" -vf "scale=1280:-2" -an "$AUTO/vendoriq-site.mp4"
# Snippy: skip the other creator's intro (first 9s), keep narration, 1080p
mp4 -ss 9 -i "$A/my snipppy tool demo how it works.mp4" -vf "scale=1920:-2" -c:a aac -b:a 96k "$AUTO/snippy-demo.mp4"
ff -ss 40 -i "$A/my snipppy tool demo how it works.mp4" -frames:v 1 -vf "scale=1280:-2" -c:v libwebp -quality 80 "$AUTO/snippy-demo.webp"
# AF Studio output: ACLED part (2-9s) + Excel part (54s-end) only. No File Explorer.
mp4 -i "$A/afstudio_20260719_030538.mp4" -filter_complex \
  "[0:v]trim=2:9,setpts=PTS-STARTPTS[a];[0:v]trim=54,setpts=PTS-STARTPTS[b];[a][b]concat=n=2:v=1[c];[c]scale=540:-2[v]" \
  -map "[v]" -an "$AUTO/afstudio-output.mp4"
ff -ss 65 -i "$A/afstudio_20260719_030538.mp4" -frames:v 1 -vf "scale=540:-2" -c:v libwebp -quality 80 "$AUTO/afstudio-output.webp"

echo "Journalism (from the old portfolio)"
OLD=../portfolio-website-main/public
for f in "tinubu tracker.png:tinubu-tracker" "tinubu_2yrs.png:tinubu-2-years" "israel vs iran.png:israel-iran" "jailbreak.png:jailbreaks" "school kidnappings.png:school-kidnappings" "tax.png:tax" "school_killings.jpg:school-killings"; do
  ff -i "$OLD/${f%%:*}" -vf "scale='min(1200,iw)':-1" -c:v libwebp -quality 80 "$HUB/${f##*:}.webp"
done

du -sh "$HUB" "$AF" "$AUTO"

echo "Videos from Joshua's Videos/Downloads folders"
TT="$HOME/Videos/Tiktok contents"
# Teaching clips for analystfemi (full length, narrated, load only when played)
[ -f "$TT/Edited Videos/Vlookup vs Xloookup.mp4" ] && {
  mp4 -threads 2 -i "$TT/Edited Videos/Vlookup vs Xloookup.mp4" -vf "scale=1280:-2" -crf 30 -c:a aac -b:a 80k "$AF/vlookup-vs-xlookup.mp4"
  ff -ss 30 -i "$TT/Edited Videos/Vlookup vs Xloookup.mp4" -frames:v 1 -vf "scale=1280:-2" -c:v libwebp -quality 80 "$AF/vlookup-vs-xlookup.webp"
}
[ -f "$TT/Edited Videos/Data Cleaning with Power Query - IG ready.mp4" ] && {
  mp4 -threads 2 -i "$TT/Edited Videos/Data Cleaning with Power Query - IG ready.mp4" -vf "scale=1280:-2" -crf 30 -c:a aac -b:a 80k "$AF/power-query.mp4"
  ff -ss 40 -i "$TT/Edited Videos/Data Cleaning with Power Query - IG ready.mp4" -frames:v 1 -vf "scale=1280:-2" -c:v libwebp -quality 80 "$AF/power-query.webp"
}
# PaletteIQ demo: from 14s (after the file-picker dialog), 1.5x speed, silent loop
[ -f "$A/palletiq demo.mp4" ] && {
  mp4 -threads 2 -ss 14 -i "$A/palletiq demo.mp4" -vf "setpts=PTS/1.5,scale=1280:-2,fps=30" -an "$AUTO/paletteiq-demo.mp4"
  ff -ss 30 -i "$A/palletiq demo.mp4" -frames:v 1 -vf "scale=1280:-2" -c:v libwebp -quality 80 "$AUTO/paletteiq-demo.webp"
}
# SpeechMate on a phone: 1.5x speed, silent loop
SM="$A/speechmate demo.mp4"
[ -f "$SM" ] && {
  mp4 -threads 2 -i "$SM" -vf "setpts=PTS/1.5,scale=540:-2,fps=30" -an "$AUTO/speechmate-demo.mp4"
  ff -ss 30 -i "$SM" -frames:v 1 -vf "scale=540:-2" -c:v libwebp -quality 80 "$AUTO/speechmate-demo.webp"
}

echo "Posters for lazily loaded videos"
ff -ss 2 -i "$AUTO/vendoriq-site.mp4" -frames:v 1 -c:v libwebp -quality 80 "$AUTO/vendoriq-site.webp"
ff -ss 12 -i "$AUTO/afstudio-output.mp4" -frames:v 1 -c:v libwebp -quality 80 "$AUTO/afstudio-output.webp"
