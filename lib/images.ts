/**
 * Central image registry. URLs are fetched from Pexels (see
 * scripts/fetch-images.mjs) and pasted here, so the API key never ships to the
 * browser. Photos provided by Pexels (https://pexels.com). Each image carries
 * descriptive alt text (part of the voice).
 *
 * Regenerate:  $env:PEXELS_API_KEY="key"; node scripts/fetch-images.mjs
 */

export type Img = { src: string; alt: string };

export const images = {
  hero: {
    src: "/clinic/clinic-4.jpg",
    alt: "A modern, fully-equipped treatment room at R Dental Centre, Nerul",
  },
  serviceCleaning: {
    src: "https://images.pexels.com/photos/5622010/pexels-photo-5622010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Hygienist performing a gentle professional teeth cleaning",
  },
  serviceCheckup: {
    src: "https://images.pexels.com/photos/6528850/pexels-photo-6528850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Dentist examining a patient during a routine checkup",
  },
  serviceVeneers: {
    src: "https://images.pexels.com/photos/3762402/pexels-photo-3762402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Close-up of a bright, even smile after veneer treatment",
  },
  serviceFilling: {
    src: "https://images.pexels.com/photos/5622028/pexels-photo-5622028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Dentist preparing a tooth-coloured filling",
  },
  serviceWhitening: {
    src: "https://images.pexels.com/photos/5355899/pexels-photo-5355899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Patient's teeth being shade-matched for whitening",
  },
  about: {
    src: "/clinic/doctor/dr-radhika.jpg",
    alt: "Dr. Radhika Ujjankar, founder of R Dental Centre",
  },
  dentistFeatured: {
    src: "/clinic/doctor/dr-radhika.jpg",
    alt: "Dr. Radhika Ujjankar, Cosmetic & Laser Dentist",
  },
  teamReed: {
    src: "https://images.pexels.com/photos/9951388/pexels-photo-9951388.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Dr. Evelyn Reed, Lead Orthodontist",
  },
  teamChen: {
    src: "https://images.pexels.com/photos/19601385/pexels-photo-19601385.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Dr. Michael Chen, Oral Surgeon",
  },
  patientSarah: {
    src: "https://images.pexels.com/photos/10426587/pexels-photo-10426587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Sarah Jenkins",
  },
  patientMichael: {
    src: "https://images.pexels.com/photos/5514779/pexels-photo-5514779.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Michael Torres",
  },
  patientEmily: {
    src: "https://images.pexels.com/photos/18671527/pexels-photo-18671527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Emily Larson",
  },
  treatmentImplants: {
    src: "https://images.pexels.com/photos/6502305/pexels-photo-6502305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "A dental implant restoring a missing tooth",
  },
  treatmentAligners: {
    src: "https://images.pexels.com/photos/11887613/pexels-photo-11887613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "A clear, removable aligner for straightening teeth",
  },
  treatmentRootCanal: {
    src: "https://images.pexels.com/photos/4971512/pexels-photo-4971512.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Careful root canal treatment in progress",
  },
  treatmentSmileMakeover: {
    src: "https://images.pexels.com/photos/14465430/pexels-photo-14465430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "A complete smile makeover result",
  },
  treatmentKids: {
    src: "https://images.pexels.com/photos/6502541/pexels-photo-6502541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "A child at a gentle, friendly dental checkup",
  },
  treatmentGum: {
    src: "https://images.pexels.com/photos/12148417/pexels-photo-12148417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Examination and treatment for healthy gums",
  },
  treatmentJewellery: {
    src: "https://images.pexels.com/photos/3762468/pexels-photo-3762468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "A bright, glamorous smile with a touch of sparkle",
  },
  treatmentFullMouth: {
    src: "https://images.pexels.com/photos/6627606/pexels-photo-6627606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "A full-arch dental prosthesis being finished by the dentist",
  },
  treatmentSameDay: {
    src: "https://images.pexels.com/photos/4687905/pexels-photo-4687905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "A dental implant securing fixed replacement teeth",
  },
  galleryBefore1: {
    src: "https://images.pexels.com/photos/12474261/pexels-photo-12474261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Before: crowded, uneven teeth",
  },
  galleryAfter1: {
    src: "https://images.pexels.com/photos/12474261/pexels-photo-12474261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "After: straight, even smile",
  },
  galleryBefore2: {
    src: "https://images.pexels.com/photos/14624608/pexels-photo-14624608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Before: stained, discoloured teeth",
  },
  galleryAfter2: {
    src: "https://images.pexels.com/photos/41208/fun-cold-elegance-face-41208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "After: brighter, whiter smile",
  },
  galleryBefore3: {
    src: "https://images.pexels.com/photos/8806087/pexels-photo-8806087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Before: gap between front teeth",
  },
  galleryAfter3: {
    src: "https://images.pexels.com/photos/6812494/pexels-photo-6812494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "After: seamless veneer result",
  },
  tourReception: {
    src: "/clinic/clinic-1.jpg",
    alt: "The treatment room at R Dental Centre",
  },
  tourEquipment: {
    src: "/clinic/clinic-2.jpg",
    alt: "Modern dental chair and equipment",
  },
  tourSterilization: {
    src: "/clinic/clinic-3.jpg",
    alt: "Clean, sterilised instruments and surfaces",
  },
  tourRoom: {
    src: "/clinic/clinic-4.jpg",
    alt: "A calm, private space for treatment",
  },
  blog1: {
    src: "https://images.pexels.com/photos/27177607/pexels-photo-27177607.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Daily oral hygiene routine",
  },
  blog2: {
    src: "https://images.pexels.com/photos/6627574/pexels-photo-6627574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Teeth whitening for a brighter smile",
  },
  blog3: {
    src: "https://images.pexels.com/photos/7086231/pexels-photo-7086231.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Helping children build healthy dental habits",
  },
} satisfies Record<string, Img>;
