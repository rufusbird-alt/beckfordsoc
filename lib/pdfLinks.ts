// Journal and Newsletter PDFs are served from a Cloudflare R2 bucket on this
// subdomain, not from Vercel, so downloads never count against Vercel bandwidth.
export const PDF_BASE = "https://files.beckfordsociety.org";

export function journalPdfUrl(vol: number) {
  return `${PDF_BASE}/journal/beckford-journal-vol-${String(vol).padStart(2, "0")}.pdf`;
}

export function newsletterPdfUrl(issue: number) {
  return `${PDF_BASE}/newsletters/beckford-newsletter-${issue}.pdf`;
}

export const FONTHILL_FEVER_PDF = `${PDF_BASE}/publications/fonthill-fever-1822-1823.pdf`;
export const MEMBERSHIP_FORM_PDF = `${PDF_BASE}/forms/beckford-society-membership-form.pdf`;
