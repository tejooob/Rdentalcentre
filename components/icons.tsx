import type { SVGProps } from "react";

export const ArrowRight = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden {...p}>
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowLeft = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden {...p}>
    <path
      d="M19 12H5M11 6l-6 6 6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Star = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...p}>
    <path
      d="M12 2.5l2.9 6.06 6.6.79-4.9 4.55 1.3 6.6L12 17.9 6.1 21.1l1.3-6.6L2.5 9.95l6.6-.79L12 2.5z"
      fill="currentColor"
    />
  </svg>
);

export const Check = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" width="20" height="20" aria-hidden {...p}>
    <path
      d="M20 6L9 17l-5-5"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Tooth = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" width="22" height="22" aria-hidden {...p}>
    <path
      d="M12 3C9.5 3 8.5 4 6.8 4 5 4 3.5 5.4 3.5 8.2c0 2.2.7 3.6 1.3 6 .5 2 .7 5.3 2 5.3 1.5 0 1.2-3.4 2.4-5.4.4-.7.9-1.1 1.8-1.1s1.4.4 1.8 1.1c1.2 2 .9 5.4 2.4 5.4 1.3 0 1.5-3.3 2-5.3.6-2.4 1.3-3.8 1.3-6C20.5 5.4 19 4 17.2 4 15.5 4 14.5 3 12 3z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

export const Plus = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" width="20" height="20" aria-hidden {...p}>
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const Quote = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden {...p}>
    <path
      d="M9.5 6C6.5 7.2 5 9.6 5 13v5h6v-6H8.2c.1-1.8.9-3 2.6-3.7L9.5 6zm9 0c-3 1.2-4.5 3.6-4.5 7v5h6v-6h-2.8c.1-1.8.9-3 2.6-3.7L18.5 6z"
      fill="currentColor"
    />
  </svg>
);

export const MapPin = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden {...p}>
    <path
      d="M12 21s7-5.6 7-11a7 7 0 10-14 0c0 5.4 7 11 7 11z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.7" />
  </svg>
);

export const WhatsApp = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden {...p}>
    <path
      fill="currentColor"
      d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.13h-.01a8.2 8.2 0 01-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 01-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.82c0 4.54-3.69 8.24-8.23 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z"
    />
  </svg>
);

export const CalendarPlus = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" width="22" height="22" aria-hidden {...p}>
    <rect x="3.5" y="5" width="17" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
    <path d="M3.5 9.5h17M8 3v3M16 3v3M12 13v4M10 15h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

export const Phone = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden {...p}>
    <path
      d="M6.5 4h3l1.5 4-2 1.5a12 12 0 005.5 5.5l1.5-2 4 1.5v3a2 2 0 01-2.2 2A16 16 0 014.5 6.2 2 2 0 016.5 4z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
  </svg>
);
