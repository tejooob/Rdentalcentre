// Compress all clinic videos to web-optimized MP4 for fast mobile streaming.
// - Caps the longest side to 1280px, H.264 + yuv420p (broad device support)
// - CRF 28 (good quality, small size), AAC 96k audio
// - +faststart so the video streams/plays before it's fully downloaded
// Originals are backed up to ./video-originals/ (gitignored) before replacing.
//
// Usage:  node scripts/optimize-videos.mjs

import { execFileSync } from "node:child_process";
import {
  readdirSync,
  statSync,
  mkdirSync,
  copyFileSync,
  renameSync,
  existsSync,
} from "node:fs";
import { join, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import ffmpegPath from "ffmpeg-static";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const videoDir = join(root, "public", "clinic");
const backupDir = join(root, "video-originals");

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (/\.mp4$/i.test(name)) out.push(p);
  }
  return out;
}

const mb = (bytes) => (bytes / 1048576).toFixed(2) + " MB";
const files = walk(videoDir);
console.log(`Found ${files.length} videos.\n`);

let before = 0;
let after = 0;

for (const file of files) {
  const rel = relative(videoDir, file);
  const beforeSize = statSync(file).size;
  before += beforeSize;

  // Back up the original once.
  const backup = join(backupDir, rel);
  if (!existsSync(backup)) {
    mkdirSync(dirname(backup), { recursive: true });
    copyFileSync(file, backup);
  }

  const tmp = file.replace(/\.mp4$/i, ".opt.mp4");
  try {
    execFileSync(
      ffmpegPath,
      [
        "-y",
        "-i", backup, // encode from the pristine backup
        "-vf",
        "scale=1280:1280:force_original_aspect_ratio=decrease,scale=trunc(iw/2)*2:trunc(ih/2)*2",
        "-c:v", "libx264",
        "-profile:v", "high",
        "-pix_fmt", "yuv420p",
        "-crf", "28",
        "-preset", "medium",
        "-movflags", "+faststart",
        "-c:a", "aac",
        "-b:a", "96k",
        "-ac", "2",
        tmp,
      ],
      { stdio: ["ignore", "ignore", "ignore"] }
    );
    renameSync(tmp, file);
    const afterSize = statSync(file).size;
    after += afterSize;
    console.log(`✓ ${rel.padEnd(40)} ${mb(beforeSize)} → ${mb(afterSize)}`);
  } catch (err) {
    console.error(`✗ ${rel}: ${err.message}`);
    process.exit(1);
  }
}

console.log(
  `\nTotal: ${mb(before)} → ${mb(after)} (${Math.round((1 - after / before) * 100)}% smaller)`
);
