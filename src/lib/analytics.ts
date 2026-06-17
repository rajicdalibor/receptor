// Google Analytics 4 + Google Ads tracking helpers.
// gtag is loaded from index.html. These helpers add type-safety and a no-op
// fallback when gtag is missing (dev or blocked by adblock).

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA4_ID = "G-6B97629BNB";
const ADS_ID = "AW-17038743492";
const ADS_CONTACT_LABEL = "zv5PCNmVwb4aEMSv2rw_";

function call(...args: unknown[]) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag(...args);
}

export function trackPageView(path: string, title?: string) {
  call("event", "page_view", {
    send_to: GA4_ID,
    page_path: path,
    page_location: window.location.origin + path,
    page_title: title ?? document.title,
  });
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  call("event", name, { send_to: GA4_ID, ...params });
}

// Fire a Google Ads conversion. If a label is provided, sends to AW-id/label;
// otherwise sends only to AW-id (useful for remarketing audiences).
export function trackAdsConversion(label?: string, params: Record<string, unknown> = {}) {
  const sendTo = label ? `${ADS_ID}/${label}` : ADS_ID;
  call("event", "conversion", { send_to: sendTo, ...params });
}

// Reservation form success: fires both the GA4 standard lead event and the
// specific Google Ads "Contact" conversion.
export function trackLead(params: Record<string, unknown> = {}) {
  trackEvent("generate_lead", params);
  trackAdsConversion(ADS_CONTACT_LABEL, params);
}

export function trackPhoneClick(number: string) {
  trackEvent("phone_click", { phone_number: number });
}

export function trackEmailClick(email: string) {
  trackEvent("email_click", { email_address: email });
}

export function trackOutboundClick(url: string, label?: string) {
  trackEvent("click", { link_url: url, link_label: label, outbound: true });
}
