import { images } from "./images";

/* ------------------------------------------------------------------ *
 * Navigation
 * ------------------------------------------------------------------ */
export const nav = [
  { label: "About", href: "/about" },
  { label: "Treatments", href: "/treatments" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

/* ------------------------------------------------------------------ *
 * Hero
 * ------------------------------------------------------------------ */
export const heroPills = [
  "Root Canal",
  "Laser Dentistry",
  "Smile Design",
  "Teeth Whitening",
];

/* ------------------------------------------------------------------ *
 * Doctor
 * ------------------------------------------------------------------ */
export const doctor = {
  name: "Dr. Radhika Ujjankar",
  title: "Cosmetic & Laser Surgeon",
  credentials: "BDS, PGDHCM",
  experienceYears: 10,
  reviewCount: 251,
  image: images.dentistFeatured,
  rating: 4.9,
  note: "10+ yrs practice",
  bio: [
    "Dr. Radhika Ujjankar is a BDS-qualified cosmetic & laser surgeon with a Post Graduation in Health Care Management (PGDHCM). With over a decade of experience in cosmetic, laser, and family dentistry, she has built R Dental Centre into one of Nerul's most trusted dental practices.",
    "She has worked at reputable Mumbai hospitals including Hinduja Hospital, and trained under some of India's top celebrity dentists, experience she brings to every smile design, laser treatment and complex restorative case. Known for painless procedures and a patient-first approach, her biggest recognition is the trust of the families who keep coming back, and who send their loved ones our way.",
    "Beyond Dr. Radhika, R Dental Centre brings together a panel of specialist doctors for every treatment — including a dedicated kids' specialist team — so whatever your family needs, the right expert is already under one roof.",
  ],
  qualifications: [
    "BDS — Bachelor of Dental Surgery",
    "PGDHCM — Post Graduation in Health Care Management",
    "Cosmetic & Laser Surgeon",
    "Registered Dental Surgeon (Reg. No. A-35407)",
  ],
  certifications: [
    "Root canal treatment",
    "Third molar (wisdom tooth) surgery",
    "Children's dentistry",
    "Cosmetic smile design",
  ],
  education: [
    "Cosmetic & laser dentistry",
    "Painless, patient-first procedures",
    "Full-mouth rehabilitation",
  ],
  awards: [
    "Experience at Hinduja Hospital, Mumbai",
    "Trained under leading celebrity dentists in India",
    "4.9★ on Google (251+ reviews)",
    "Trusted by Nerul families for over a decade",
  ],
};

/** Compact version used by the hero card. */
export const featuredDentist = {
  name: doctor.name,
  role: doctor.title,
  rating: doctor.rating,
  note: doctor.note,
  image: doctor.image,
};

/* ------------------------------------------------------------------ *
 * Treatments  (home preview = `services`, full list = `treatments`)
 * ------------------------------------------------------------------ */
export const services = [
  { tag: "Surgical", title: "Dental Implants", blurb: "Permanent, natural-feeling replacements for missing teeth, planned and placed with precision.", image: images.treatmentImplants },
  { tag: "Restorative", title: "Full-Mouth Rehabilitation", blurb: "Rebuild a complete, functional smile — combining implants, crowns and bridges to restore every tooth, your bite and your confidence.", image: images.treatmentFullMouth },
  { tag: "Implants", title: "Fixed Teeth in 3–5 Days", blurb: "Walk in without teeth and leave with a fixed, full-arch smile in just 3–5 days — no long wait, no removable dentures.", image: images.treatmentSameDay },
  { tag: "Cosmetic", title: "Dental Veneers", blurb: "Ultra-thin, custom shells that mask chips, gaps and stains for a flawless, natural-looking smile.", image: images.serviceVeneers },
  { tag: "Orthodontics", title: "Clear Aligners", blurb: "Straighten your teeth discreetly with comfortable, removable clear aligners — barely visible and easy to live with.", image: images.treatmentAligners },
  { tag: "Cosmetic", title: "Smile Makeovers", blurb: "A tailored plan combining whitening, veneers and bonding to redesign your whole smile.", image: images.treatmentSmileMakeover },
];

export const treatments = [
  { tag: "Surgical", title: "Dental Implants", blurb: "Permanent, natural-feeling replacements for one or more missing teeth, planned and placed with precision.", image: images.treatmentImplants, priceFrom: "On consult" },
  { tag: "Restorative", title: "Full-Mouth Rehabilitation", blurb: "A complete plan combining implants, crowns and bridges to rebuild every tooth, restore your bite and renew your confidence.", image: images.treatmentFullMouth, priceFrom: "On consult" },
  { tag: "Implants", title: "Fixed Teeth in 3–5 Days", blurb: "Walk in without teeth and leave with a fixed, full-arch smile in just 3–5 days — no long wait and no removable dentures.", image: images.treatmentSameDay, priceFrom: "On consult" },
  { tag: "Cosmetic", title: "Dental Veneers & Crowns", blurb: "Ultra-thin veneers and tooth-coloured crowns and bridges that mask chips, gaps and stains and restore a flawless, natural look.", image: images.serviceVeneers, priceFrom: "On consult" },
  { tag: "Orthodontics", title: "Clear Aligners", blurb: "Discreet, removable aligners — and traditional braces too — to straighten teeth and correct the bite, for kids and adults.", image: images.treatmentAligners, priceFrom: "On consult" },
  { tag: "Cosmetic", title: "Smile Makeover", blurb: "A tailored plan combining whitening, veneers and bonding to redesign your whole smile.", image: images.treatmentSmileMakeover, priceFrom: "On consult" },
  { tag: "Cosmetic", title: "Teeth Whitening", blurb: "Safe, even whitening that lifts stains and brightens your shade in one session.", image: images.serviceWhitening, priceFrom: "On consult" },
  { tag: "Endodontics", title: "Root Canal Treatment", blurb: "Pain-free root canals that save the natural tooth and stop the ache.", image: images.treatmentRootCanal, priceFrom: "On consult" },
  { tag: "Advanced", title: "Laser Dentistry", blurb: "Laser-assisted treatment for faster healing, less bleeding and minimal discomfort.", image: images.serviceCheckup, priceFrom: "On consult" },
  { tag: "Preventive", title: "Teeth Cleaning & Polishing", blurb: "Thorough scaling and polishing that keeps gums healthy and catches problems early.", image: images.serviceCleaning, priceFrom: "On consult" },
  { tag: "Restorative", title: "Cavity Fillings", blurb: "Tooth-coloured fillings that restore the bite and blend in seamlessly.", image: images.serviceFilling, priceFrom: "On consult" },
  { tag: "Surgical", title: "Wisdom Tooth Removal", blurb: "Specialist removal of impacted third molars, gentle and carefully managed.", image: images.treatmentGum, priceFrom: "On consult" },
  { tag: "Kids", title: "Children's Dentistry", blurb: "A dedicated kids' specialist panel for all children's dental treatments, plus diet counselling and parent–teacher counselling to build healthy habits early.", image: images.treatmentKids, priceFrom: "On consult" },
  { tag: "Cosmetic", title: "Dental Jewellery", blurb: "A little sparkle for your smile — a safe, painless tooth gem bonded to the tooth surface. No drilling, no damage to enamel, and removable whenever you like.", image: images.treatmentJewellery, priceFrom: "On consult" },
];

/* ------------------------------------------------------------------ *
 * Stats
 * ------------------------------------------------------------------ */
export const stats = [
  { value: 4.9, suffix: "", decimals: 1, label: "Google rating", star: true },
  { value: 251, suffix: "+", decimals: 0, label: "Patient reviews" },
  { value: 10, suffix: "+", decimals: 0, label: "Years of care" },
  { value: 15, suffix: "+", decimals: 0, label: "Treatments offered" },
];

/* ------------------------------------------------------------------ *
 * Pricing + Membership  (kept for the calculators; not shown on the
 * live site at the moment — no public prices in the clinic brief)
 * ------------------------------------------------------------------ */
export const pricing = [
  { treatment: "Consultation & exam", price: "On consult", note: "By appointment" },
];

export const membership = {
  name: "Annual Dental Care Plan",
  price: "Ask us",
  per: "",
  blurb: "Speak to us about a plan that keeps your whole family's smiles healthy.",
  perks: [
    "Routine cleanings & checkups",
    "Priority appointment booking",
    "Family-friendly care",
  ],
};

export const emiPresets = [
  { label: "Dental Implant", amount: 25000 },
  { label: "Braces", amount: 30000 },
  { label: "Smile Makeover", amount: 40000 },
];

export const estimatorItems = [
  { label: "Consultation & exam", amount: 0 },
  { label: "Teeth cleaning", amount: 0 },
];

/* ------------------------------------------------------------------ *
 * Reviews + Video testimonials
 * (Real 5★ Google reviews from patients.)
 * ------------------------------------------------------------------ */
export const testimonials = [
  {
    quote:
      "Loved my experience here! The doctor is super gentle and makes you feel comfortable instantly. The staff is helpful, the clinic is hygienic, and the whole process was smooth. If you're scared of dentists, this place will change your mind!",
    name: "Shravani Sarvankar",
    detail: "Google review · Nerul",
    initials: "SS",
  },
  {
    quote:
      "I did my complete teeth fixing — caps, bridges, root canals and dental implants — at R Dental Centre, Nerul. The quality of treatment was the best so far, and Dr. Radhika and her team are experts and experienced in their work. She is ethical, has good knowledge and explains patiently. The clinic has the latest technology and their service is extremely seamless, with timely appointments. I highly recommend this dental clinic in Nerul to all.",
    name: "Hastimal Jain",
    detail: "Caps, bridges, RCT & implants · Google review",
    initials: "HJ",
  },
  {
    quote:
      "I came to R Dental Centre, Nerul for my smile — I had no teeth in my mouth. Dr. Radhika and her team of doctors are experts and gave me a smile to flaunt. The latest scanning was done and the best quality dentures were given to me. I recommend this dental clinic in Nerul to all.",
    name: "Shashikant Dhumal",
    detail: "Full dentures · Google review",
    initials: "SD",
  },
];

export const videoTestimonials = [
  {
    name: "Patient story",
    treatment: "In their words · R Dental Centre",
    poster: {
      src: "/clinic/testimonials/testimonial-1-poster.jpg",
      alt: "Patient sharing their experience at R Dental Centre",
    },
    video: "/clinic/testimonials/testimonial-1.mp4",
  },
  {
    name: "Patient story",
    treatment: "In their words · R Dental Centre",
    poster: {
      src: "/clinic/testimonials/testimonial-2-poster.jpg",
      alt: "Patient sharing their experience at R Dental Centre",
    },
    video: "/clinic/testimonials/testimonial-2.mp4",
  },
  {
    name: "Patient story",
    treatment: "In their words · R Dental Centre",
    poster: {
      src: "/clinic/testimonials/testimonial-3-poster.jpg",
      alt: "Patient sharing their experience at R Dental Centre",
    },
    video: "/clinic/testimonials/testimonial-3.mp4",
  },
];

/* ------------------------------------------------------------------ *
 * Before & After gallery  (stock stand-ins — replace with consented
 * real patient photos)
 * ------------------------------------------------------------------ */
export const gallery = [
  { category: "Braces", title: "Crowded teeth, aligned", treatment: "Braces", before: images.galleryBefore1, after: images.galleryAfter1 },
  { category: "Whitening", title: "Stains lifted, shade brightened", treatment: "Teeth Whitening", before: images.galleryBefore2, after: images.galleryAfter2 },
  { category: "Smile Design", title: "Gap closed, smile restored", treatment: "Cosmetic Smile Design", before: images.galleryBefore3, after: images.galleryAfter3 },
];

/* ------------------------------------------------------------------ *
 * Virtual clinic tour  (stock stand-ins — replace with real photos)
 * ------------------------------------------------------------------ */
export const clinicTour = [
  { title: "The treatment room", note: "Where your care happens, calm and private.", image: images.tourReception },
  { title: "Modern equipment", note: "An up-to-date chair, laser & digital imaging.", image: images.tourEquipment },
  { title: "Clean & sterilised", note: "Strict hygiene before every single patient.", image: images.tourSterilization },
  { title: "Comfortable & calm", note: "A relaxed space to settle into.", image: images.tourRoom },
];

/* ------------------------------------------------------------------ *
 * Technology video  (self-hosted clip — intraoral camera / digital imaging)
 * ------------------------------------------------------------------ */
export const technology = {
  eyebrow: "Technology",
  title: "Digital dentistry — no more messy impressions",
  text: "We've gone fully digital. A quick intraoral scan replaces the old, uncomfortable impression trays, and our intraoral camera shows you exactly what we see, magnified on screen. The result: clearer diagnosis, faster treatment, and care you can actually understand.",
  points: [
    "Digital intraoral scanning — no more messy manual impressions",
    "Live intraoral camera — your teeth, magnified on screen",
    "Laser-assisted treatment for faster, gentler healing",
  ],
  clips: [
    {
      src: "/clinic/digital-scan.mp4",
      poster: "/clinic/digital-scan-poster.jpg",
      label: "Digital intraoral scanning",
    },
    {
      src: "/clinic/technology.mp4",
      poster: "/clinic/technology-poster.jpg",
      label: "Intraoral camera",
    },
  ],
  equipmentHeading: "State-of-the-art equipment & machines",
  equipmentIntro:
    "We invest in advanced, precision machines so every procedure is faster, safer and more comfortable.",
  equipment: [
    { src: "/clinic/equipment-1.jpg", label: "Advanced endodontic technology" },
    { src: "/clinic/equipment-2.jpg", label: "Cordless obturation system" },
    { src: "/clinic/equipment-3.jpg", label: "Cordless endo motor" },
    { src: "/clinic/equipment-4.jpg", label: "Implant Physiodispenser" },
    { src: "/clinic/equipment-5.jpg", label: "Dental Laser Machine" },
  ],
};

/* ------------------------------------------------------------------ *
 * FAQs
 * ------------------------------------------------------------------ */
export const faqs = [
  { q: "Does the treatment hurt?", a: "We focus on painless dentistry. Most procedures use gentle local anaesthesia and laser techniques, and patients regularly tell us even root canals and gum surgery were comfortable." },
  { q: "How do I book an appointment?", a: "Tap any “Chat on WhatsApp” button or use the booking form, it opens WhatsApp with your details ready to send. You can also call us on +91 93248 74151. We work by appointment, so your time is respected." },
  { q: "What are your timings?", a: "We're open Monday to Saturday, 10:00 AM to 9:00 PM. On Sundays we're open by appointment. Appointments are preferred, and emergency cases are accommodated." },
  { q: "Where are you located?", a: "R Dental Centre is at Plot No. 98, Sector 16A, opposite N.R. Bhagat School (Ganpati Mandir Road), Nerul (West), Navi Mumbai – 400 706. See the Contact page for the map and directions." },
  { q: "Do you treat children?", a: "Yes — we have a dedicated kids' specialist panel for all children's dental treatments. Alongside gentle, reassuring care, we also offer diet counselling and parent–teacher counselling to help children build healthy habits early." },
  { q: "Do you offer laser treatments?", a: "Yes. We use advanced laser dentistry for many procedures, which often means faster healing, less bleeding and minimal discomfort." },
  { q: "Can I get all my treatment in one place?", a: "Yes. We have a panel of specialist doctors for all treatments, so everything is under one roof — from cleanings and fillings to root canals, implants, braces and full-mouth rehabilitation. You rarely need a referral elsewhere." },
  { q: "What safety and hygiene measures do you follow?", a: "We maintain strict, clinic-grade sterilisation protocols for every instrument and keep the clinic clean and sanitised at every visit." },
  { q: "Do you offer EMI or payment plans?", a: "Yes — we offer easy EMI and financing options to make treatment comfortable on your budget. Ask us and we'll help you find a plan that suits you." },
];

/* ------------------------------------------------------------------ *
 * Blog
 * ------------------------------------------------------------------ */
export const posts = [
  {
    slug: "daily-oral-care-routine",
    title: "The 4-step daily routine that prevents most dental problems",
    excerpt: "Most cavities and gum issues are preventable. Here's the simple routine our dentists recommend for healthy teeth between visits.",
    date: "2026-05-20",
    category: "Prevention",
    readMins: 4,
    image: images.blog1,
    body: [
      { h: "Why routine beats treatment" },
      { p: "The best dental work is the work you never need. A consistent daily routine removes the plaque that causes cavities and gum disease before it can do damage, and it costs almost nothing." },
      { h: "1. Brush twice, gently" },
      { p: "Use a soft brush and fluoride toothpaste for two minutes, morning and night. Angle the brush towards the gumline and let the bristles do the work, scrubbing hard wears enamel and irritates gums." },
      { h: "2. Clean between your teeth" },
      { p: "Floss or use interdental brushes once a day. A toothbrush only reaches about 60% of each tooth's surface; the spaces in between are where many cavities quietly start." },
      { h: "3. Rinse and hydrate" },
      { p: "Water after meals helps wash away food and acids. A fluoride mouthwash can add extra protection, especially if you're prone to cavities." },
      { h: "4. See us twice a year" },
      { p: "A professional cleaning removes hardened tartar that brushing can't, and a checkup catches problems while they're still small. Book a visit and we'll keep you on track." },
    ],
  },
  {
    slug: "is-teeth-whitening-safe",
    title: "Is teeth whitening safe? What actually works",
    excerpt: "Whitening is one of the most popular cosmetic treatments, and one of the most misunderstood. Here's the honest version.",
    date: "2026-04-28",
    category: "Cosmetic",
    readMins: 5,
    image: images.blog2,
    body: [
      { h: "Professional vs. DIY" },
      { p: "In-clinic whitening uses controlled, higher-strength agents applied safely by a dentist, with your gums protected. It's faster and more even than over-the-counter kits, and far safer than charcoal or DIY trends that can strip enamel." },
      { h: "Will it hurt my teeth?" },
      { p: "Done professionally, whitening doesn't damage enamel. Some people feel temporary sensitivity for a day or two, which we manage with shade-matched, gentle formulas." },
      { h: "How long does it last?" },
      { p: "Typically 6–18 months depending on your diet and habits. Coffee, tea, red wine and smoking shorten it; a quick touch-up keeps the shade bright." },
      { h: "The bottom line" },
      { p: "If you want a brighter smile, an in-clinic session is the safe, predictable route. Book a consultation and we'll check your teeth are a good fit first." },
    ],
  },
  {
    slug: "childs-first-dental-visit",
    title: "Your child's first dental visit: how to make it easy",
    excerpt: "A calm first visit sets up a lifetime of good habits. Here's how to prepare your child (and yourself).",
    date: "2026-03-15",
    category: "Kids",
    readMins: 3,
    image: images.blog3,
    body: [
      { h: "When should the first visit be?" },
      { p: "Around their first birthday, or when the first teeth appear. Early visits are short and friendly, more about comfort than treatment." },
      { h: "Keep it positive" },
      { p: "Avoid words like “pain” or “needle”. Frame the visit as meeting a friendly dentist who counts their teeth. Children pick up on calm, confident parents." },
      { h: "What we do" },
      { p: "We go slowly, explain everything in kid-friendly terms, and let them explore the chair. The goal of the first visit is simple: that they want to come back." },
    ],
  },
];

/* ------------------------------------------------------------------ *
 * Smile Assessment Quiz
 * ------------------------------------------------------------------ */
export const quizQuestions = [
  {
    id: "concern",
    q: "What would you most like to improve?",
    options: [
      { label: "Missing teeth", value: "implants" },
      { label: "Yellow or stained teeth", value: "whitening" },
      { label: "Crooked or gapped teeth", value: "braces" },
      { label: "Chipped or uneven teeth", value: "smile" },
      { label: "Bleeding or sore gums", value: "gum" },
      { label: "Pain or sensitivity", value: "rootcanal" },
    ],
  },
  {
    id: "when",
    q: "How soon would you like to start?",
    options: [
      { label: "As soon as possible", value: "now" },
      { label: "Within a month", value: "month" },
      { label: "Just exploring options", value: "explore" },
    ],
  },
  {
    id: "visited",
    q: "When did you last see a dentist?",
    options: [
      { label: "Within the last year", value: "recent" },
      { label: "1–3 years ago", value: "mid" },
      { label: "More than 3 years", value: "long" },
    ],
  },
];

export const quizResults: Record<
  string,
  { title: string; blurb: string }
> = {
  implants: { title: "Dental Implants", blurb: "Implants are the gold standard for replacing missing teeth, permanent, natural-feeling, and they protect your jawbone." },
  whitening: { title: "Teeth Whitening", blurb: "A professional whitening session is the safe, fast way to lift stains and brighten your shade evenly." },
  braces: { title: "Braces", blurb: "Braces straighten crooked or gapped teeth and correct the bite, for both children and adults." },
  smile: { title: "Cosmetic Smile Design", blurb: "A smile makeover resurfaces chipped or uneven teeth for a flawless, even smile that still looks like you." },
  gum: { title: "Gum Treatment", blurb: "Bleeding or sore gums need gentle, prompt care to restore a healthy foundation for your teeth." },
  rootcanal: { title: "Root Canal / Exam", blurb: "Pain and sensitivity should be checked quickly. A gentle exam will pinpoint the cause and stop the ache." },
};

/* ------------------------------------------------------------------ *
 * Footer
 * ------------------------------------------------------------------ */
export const footerLinks = {
  quick: [
    { label: "About the Doctor", href: "/about" },
    { label: "Treatments", href: "/treatments" },
    { label: "Before & After", href: "/gallery" },
    { label: "Blog", href: "/blog" },
  ],
  more: [
    { label: "Reviews", href: "/#reviews" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact", href: "/contact" },
    { label: "Book Appointment", href: "/booking" },
    { label: "Smile Quiz", href: "/booking#quiz" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Accessibility", href: "#" },
  ],
};
