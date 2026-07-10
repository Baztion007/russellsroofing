#!/bin/bash
# Generate all roofing website images SEQUENTIALLY (API rate-limits parallel calls).
set -u
OUT=/home/z/my-project/public/images
mkdir -p "$OUT"

echo "[$(date +%T)] Starting sequential image generation…"

run() {
  local name="$1"; shift
  local prompt="$1"; shift
  local size="$1"; shift
  local file="$OUT/$name.jpg"
  if [ -f "$file" ] && [ "$(stat -c%s "$file")" -gt 10000 ]; then
    echo "[$(date +%T)] ✓ $name already exists, skip"
    return
  fi
  echo "[$(date +%T)] generating $name ($size)…"
  # retry up to 3 times on 429
  for attempt in 1 2 3; do
    z-ai image -p "$prompt" -o "$file" -s "$size" > /tmp/zai-out.log 2>&1
    if [ -f "$file" ] && [ "$(stat -c%s "$file")" -gt 10000 ]; then
      echo "[$(date +%T)] ✓ $name ($(stat -c%s "$file") bytes)"
      return
    fi
    echo "[$(date +%T)] attempt $attempt failed, waiting 8s…"
    tail -1 /tmp/zai-out.log
    sleep 8
  done
  echo "[$(date +%T)] ✗ $name FAILED after 3 attempts"
}

run hero "Professional British roofer in safety harness and hard hat installing slate tiles on the pitched roof of a Kent terraced house, golden hour side light, dramatic moody sky, photorealistic, shallow depth of field, premium commercial photography, deep slate grey tones with warm orange safety vest accent" 1344x768

run about-team "Two friendly professional British roofers in high-vis workwear and hard hats standing confidently beside a white roofing van on a suburban Kent street, natural daylight, photorealistic, approachable tradesmen, premium commercial photography" 1344x768

run gallery-1 "Brand new concrete interlocking tile roof on a 1930s British semi-detached house, neat rows of tiles, fresh ridge mortar, blue sky, photorealistic, before and after roofing photography, professional" 1024x1024

run gallery-2 "Completed GRP fibreglass flat garage roof in slate grey, clean edge trims, neat finish, British suburban garden, photorealistic, professional roofing portfolio shot" 1024x1024

run gallery-3 "Repointed Victorian red brick chimney stack with new lead flashing on a Kent slate roof, crisp mortar joints, photorealistic, professional roofing portfolio close-up" 1024x1024

run gallery-4 "Modern insulated panel garage roof replacement after asbestos removal, clean corrugated steel panels in slate grey, British suburban driveway, photorealistic, professional roofing portfolio" 1024x1024

run gallery-5 "Mechanically fixed dry ridge system on a tiled roof, neat ridge tiles with visible dry-fix components, blue sky, photorealistic, professional roofing portfolio detail shot" 1024x1024

run gallery-6 "Two newly installed Velux roof windows fitted into a slate pitched roof with flashing kits, clean installation, blue sky reflection, photorealistic, professional roofing portfolio" 1024x1024

echo "[$(date +%T)] ALL DONE"
ls -la "$OUT"
