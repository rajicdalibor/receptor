import { Link } from "react-router-dom";
import { useI18n } from "../i18n/context";
import { IconPhone, IconMail, IconGoogle } from "./icons";
import { SOCIAL } from "../lib/site";
import "./footer.css";

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M14 9h2.5V6H14c-1.93 0-3.5 1.57-3.5 3.5V11H8.5v3h2V21h3v-7H16l.5-3h-2.5V9.5c0-.28.22-.5.5-.5z" />
    </svg>
  );
}

export function Footer() {
  const { t } = useI18n();
  const k = t.kontakt;
  const tel = (n: string) => `tel:${n.replace(/\s/g, "")}`;

  return (
    <footer className="footer surface-dark">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="footer-logo">{t.brand.name}</span>
          <span className="footer-logo-sub">{t.brand.tagline}</span>
          <p className="footer-tagline">{t.footer.tagline}</p>
          <div className="footer-social">
            <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><IconInstagram /></a>
            <a href={SOCIAL.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><IconFacebook /></a>
            <a href={SOCIAL.google} target="_blank" rel="noreferrer" aria-label="Google"><IconGoogle /></a>
          </div>
        </div>

        <nav className="footer-col footer-links">
          <Link to="/meni">{t.nav.meni}</Link>
          <Link to="/vinska-karta">{t.nav.vinska}</Link>
          <Link to="/karta-pica">{t.nav.pica}</Link>
        </nav>

        <nav className="footer-col footer-links">
          <Link to="/business-lunch">{t.nav.business}</Link>
          <Link to="/proslave">{t.nav.proslave}</Link>
          <Link to="/galerija">{t.nav.galerija}</Link>
        </nav>

        <div className="footer-col footer-links">
          <h4 className="footer-h">{t.nav.kontakt}</h4>
          <Link to="/kontakt">{t.footer.reservations}</Link>
          <a href={tel(k.phone.value)}>{t.cta.callNow}</a>
        </div>

        <div className="footer-col footer-contact">
          <p><IconPhone /> <a href={tel(k.phone.value)}>{k.phone.value}</a></p>
          {k.phone2 && <p><IconPhone /> <a href={tel(k.phone2)}>{k.phone2}</a></p>}
          <p><IconMail /> <a href={`mailto:${k.email.value}`}>{k.email.value}</a></p>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>{t.footer.copy}</span>
      </div>
    </footer>
  );
}
