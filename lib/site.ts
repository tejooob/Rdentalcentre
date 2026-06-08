/**
 * Single source of truth for clinic contact details and outbound links.
 * Edit these values and the whole site (header, footer, floating buttons,
 * booking + contact forms, metadata) updates.
 */

export const clinic = {
  name: "R Dental Centre",
  tagline: "Complete Dental Care. One Trusted Address.",
  // Phone shown to users and the dial-able version.
  phoneDisplay: "+91 93248 74151",
  phoneDial: "+919324874151",
  // WhatsApp number: country code + number, digits only, no "+".
  whatsapp: "919324874151",
  email: "info@rdentalcentre.in",
  addressLine1: "Plot No. 98, Sector 16A, Ganpati Mandir Road",
  addressLine2: "Opp. N.R. Bhagat School, Nerul (W), Navi Mumbai – 400 706",
  area: "Nerul",
  hours: [
    { days: "Tue – Sat", time: "12:00 PM – 8:00 PM" },
    { days: "Mon & Sun", time: "Closed" },
  ],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=R+Dental+Centre+Sector+16A+Nerul+West+Navi+Mumbai",
};

/** tel: link for call buttons. */
export const telLink = `tel:${clinic.phoneDial}`;

/** Build a WhatsApp deep link with a prefilled message. */
export function waLink(message: string): string {
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Default "book an appointment" WhatsApp message used by simple CTAs. */
export const bookWaLink = waLink(
  `Hi ${clinic.name}, I'd like to book an appointment at your Nerul clinic. My name is `
);
