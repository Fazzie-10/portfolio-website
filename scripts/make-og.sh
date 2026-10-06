#!/usr/bin/env bash
# Makes the 1200×630 link-preview image (og.jpg) for each site: headline + photo in the site's colours.
# Shown when a page is shared on WhatsApp, LinkedIn, X or Facebook. Uses Windows' Segoe UI font.
#   bash scripts/make-og.sh
set -euo pipefail
cd "$(dirname "$0")/.."
ROOT=$(pwd)
WORK=$(mktemp -d)
trap 'rm -rf "$WORK"' EXIT
cp /c/Windows/Fonts/segoeui.ttf /c/Windows/Fonts/segoeuib.ttf "$WORK/"
cp apps/hub/public/media/joshua-cutout.webp "$WORK/photo.webp"
cd "$WORK" # relative paths: ffmpeg's filter syntax trips over "C:" in Windows paths

og() { # app bg accent eyebrow line1 line2
  printf '%s' "$4" > e.txt; printf '%s' "$5" > l1.txt; printf '%s' "$6" > l2.txt; printf '%s' "Joshua Akintayo" > n.txt
  ffmpeg -v error -y -f lavfi -i "color=c=$2:s=1200x630" -i photo.webp -filter_complex "\
[1:v]scale=-1:520[p];\
[0:v]drawbox=x=820:y=150:w=380:h=480:color=$3@1:t=fill,drawbox=x=70:y=455:w=90:h=8:color=$3:t=fill[bg];\
[bg][p]overlay=x=800:y=110[c];\
[c]drawtext=fontfile=segoeui.ttf:textfile=e.txt:x=70:y=120:fontsize=30:fontcolor=$3,\
drawtext=fontfile=segoeuib.ttf:textfile=l1.txt:x=70:y=200:fontsize=64:fontcolor=white,\
drawtext=fontfile=segoeuib.ttf:textfile=l2.txt:x=70:y=285:fontsize=64:fontcolor=white,\
drawtext=fontfile=segoeui.ttf:textfile=n.txt:x=70:y=490:fontsize=30:fontcolor=white@0.85" -frames:v 1 -q:v 3 "$ROOT/apps/$1/public/media/og.jpg"
  echo "apps/$1/public/media/og.jpg"
}

og hub         0x14110d 0xff8a3d "Data Analyst and Data Engineer" "Finding the story" "in data."
og analystfemi 0x0c1416 0x2dd4bf "AnalystFemi · Live mentorship"  "Zero to Data Analyst" "in 12 weeks."
og automation  0x0a0a0b 0xa3e635 "AI tools & automation"          "AI tools that do" "the boring work."
og insightshub 0x0b1020 0x93b4ff "InsightsHub · Chapter 4 help"   "Stuck at Chapter 4?" "Let's make it clear."
