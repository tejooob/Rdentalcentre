// Fetch curated stock photos from Pexels and write them into lib/images.ts.
// The API key is read from the environment and never written to disk, so it
// never ships to the browser.
//
// Usage (PowerShell):  $env:PEXELS_API_KEY="your_key"; node scripts/fetch-images.mjs
// Usage (bash):        PEXELS_API_KEY=your_key node scripts/fetch-images.mjs

import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const KEY = process.env.PEXELS_API_KEY;
if (!KEY) {
  console.error("Missing PEXELS_API_KEY environment variable.");
  process.exit(1);
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "lib", "images.ts");

// Each slot: search query, orientation, which Pexels size to use, the index of
// the result to pick (lets us avoid duplicate faces), and curated alt text.
const SLOTS = [
  { key: "hero", q: "modern dental clinic chair interior", orientation: "portrait", size: "large2x", i: 0, alt: "A calm, modern dental treatment room" },
  { key: "serviceCleaning", q: "dental hygienist cleaning teeth", orientation: "landscape", size: "large2x", i: 0, alt: "Hygienist performing a gentle professional teeth cleaning" },
  { key: "serviceCheckup", q: "dentist examining patient mouth", orientation: "landscape", size: "large2x", i: 0, alt: "Dentist examining a patient during a routine checkup" },
  { key: "serviceVeneers", q: "woman bright white smile teeth", orientation: "landscape", size: "large2x", i: 0, alt: "Close-up of a bright, even smile after veneer treatment" },
  { key: "serviceFilling", q: "dentist dental tools treatment", orientation: "landscape", size: "large2x", i: 1, alt: "Dentist preparing a tooth-coloured filling" },
  { key: "serviceWhitening", q: "dentist teeth whitening shade", orientation: "landscape", size: "large2x", i: 0, alt: "Patient's teeth being shade-matched for whitening" },
  { key: "about", q: "dentist talking with happy patient", orientation: "portrait", size: "large2x", i: 0, alt: "A dental team member reassuring a relaxed patient in the chair" },
  { key: "dentistFeatured", q: "professional male dentist portrait", orientation: "square", size: "large", i: 0, alt: "Dr. James Richardson" },
  { key: "teamReed", q: "female dentist professional headshot", orientation: "square", size: "large", i: 0, alt: "Dr. Evelyn Reed, Lead Orthodontist" },
  { key: "teamChen", q: "asian male doctor headshot", orientation: "square", size: "large", i: 0, alt: "Dr. Michael Chen, Oral Surgeon" },
  { key: "patientSarah", q: "happy woman portrait smiling", orientation: "square", size: "large", i: 2, alt: "Sarah Jenkins" },
  { key: "patientMichael", q: "confident man portrait", orientation: "square", size: "large", i: 1, alt: "Michael Torres" },
  { key: "patientEmily", q: "young woman smiling portrait", orientation: "square", size: "large", i: 4, alt: "Emily Larson" },

  // Treatments
  { key: "treatmentImplants", q: "dental implant model tooth", orientation: "landscape", size: "large2x", i: 0, alt: "A dental implant restoring a missing tooth" },
  { key: "treatmentAligners", q: "clear dental aligner invisible braces", orientation: "landscape", size: "large2x", i: 0, alt: "A clear, removable aligner for straightening teeth" },
  { key: "treatmentRootCanal", q: "dentist treating patient tooth", orientation: "landscape", size: "large2x", i: 2, alt: "Careful root canal treatment in progress" },
  { key: "treatmentSmileMakeover", q: "beautiful smile teeth woman", orientation: "landscape", size: "large2x", i: 1, alt: "A complete smile makeover result" },
  { key: "treatmentKids", q: "child at dentist checkup", orientation: "landscape", size: "large2x", i: 0, alt: "A child at a gentle, friendly dental checkup" },
  { key: "treatmentGum", q: "dentist examining patient gums", orientation: "landscape", size: "large2x", i: 1, alt: "Examination and treatment for healthy gums" },

  // Before / After gallery (stock stand-ins; swap for real patient photos)
  { key: "galleryBefore1", q: "crooked teeth close up mouth", orientation: "landscape", size: "large2x", i: 0, alt: "Before: crowded, uneven teeth" },
  { key: "galleryAfter1", q: "straight white teeth perfect smile", orientation: "landscape", size: "large2x", i: 0, alt: "After: straight, even smile" },
  { key: "galleryBefore2", q: "stained yellow teeth mouth", orientation: "landscape", size: "large2x", i: 0, alt: "Before: stained, discoloured teeth" },
  { key: "galleryAfter2", q: "white teeth bright smile woman", orientation: "landscape", size: "large2x", i: 2, alt: "After: brighter, whiter smile" },
  { key: "galleryBefore3", q: "teeth gap close up", orientation: "landscape", size: "large2x", i: 1, alt: "Before: gap between front teeth" },
  { key: "galleryAfter3", q: "veneers perfect teeth smile", orientation: "landscape", size: "large2x", i: 0, alt: "After: seamless veneer result" },

  // Virtual clinic tour
  { key: "tourReception", q: "modern clinic reception waiting area", orientation: "landscape", size: "large2x", i: 0, alt: "Bright, welcoming reception area" },
  { key: "tourEquipment", q: "modern dental chair equipment", orientation: "landscape", size: "large2x", i: 0, alt: "Modern dental chair and imaging equipment" },
  { key: "tourSterilization", q: "medical sterilization instruments tray", orientation: "landscape", size: "large2x", i: 0, alt: "Strict instrument sterilisation process" },
  { key: "tourRoom", q: "clean dental treatment room", orientation: "landscape", size: "large2x", i: 1, alt: "A calm, private treatment room" },

  // Blog
  { key: "blog1", q: "woman brushing teeth oral hygiene", orientation: "landscape", size: "large2x", i: 0, alt: "Daily oral hygiene routine" },
  { key: "blog2", q: "dental teeth whitening bright smile", orientation: "landscape", size: "large2x", i: 3, alt: "Teeth whitening for a brighter smile" },
  { key: "blog3", q: "child brushing teeth toothbrush", orientation: "landscape", size: "large2x", i: 0, alt: "Helping children build healthy dental habits" },
];

async function fetchSlot(slot) {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(
    slot.q
  )}&orientation=${slot.orientation}&per_page=15`;
  const res = await fetch(url, { headers: { Authorization: KEY } });
  if (!res.ok) throw new Error(`${slot.key}: HTTP ${res.status}`);
  const data = await res.json();
  const photos = data.photos ?? [];
  if (photos.length === 0) throw new Error(`${slot.key}: no results for "${slot.q}"`);
  const photo = photos[Math.min(slot.i, photos.length - 1)];
  const src = photo.src[slot.size] ?? photo.src.large;
  return { key: slot.key, src, alt: slot.alt };
}

const entries = [];
for (const slot of SLOTS) {
  try {
    const r = await fetchSlot(slot);
    entries.push(r);
    console.log(`✓ ${r.key}`);
  } catch (err) {
    console.error(`✗ ${err.message}`);
    process.exit(1);
  }
}

const body = entries
  .map(
    (e) =>
      `  ${e.key}: {\n    src: "${e.src}",\n    alt: ${JSON.stringify(e.alt)},\n  },`
  )
  .join("\n");

const file = `/**
 * Central image registry. URLs are fetched from Pexels (see
 * scripts/fetch-images.mjs) and pasted here, so the API key never ships to the
 * browser. Photos provided by Pexels (https://pexels.com). Each image carries
 * descriptive alt text (part of the voice).
 *
 * Regenerate:  $env:PEXELS_API_KEY="key"; node scripts/fetch-images.mjs
 */

export type Img = { src: string; alt: string };

export const images = {
${body}
} satisfies Record<string, Img>;
`;

await writeFile(OUT, file, "utf8");
console.log(`\nWrote ${entries.length} images to lib/images.ts`);
