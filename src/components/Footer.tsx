import { Link } from "react-router-dom";
import { useI18n } from "../i18n/context";
import { trackPhoneClick } from "../lib/analytics";
import "./footer.css";

export function Footer() {
  const { t } = useI18n();
  const f = t.footer;
  const tel = (n: string) => `tel:${n.replace(/\s/g, "")}`;

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="footer-logo">{t.brand.name}</span>
          <span className="footer-logo-sub">{t.brand.tagline}</span>
          <div className="footer-brand-lines">
            {f.brandLines.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </div>

        <nav className="footer-col">
          <h4 className="footer-h">{f.colOffer.title}</h4>
          {f.colOffer.links.map((l) => (
            <Link key={l.label} to={l.to}>
              {l.label}
            </Link>
          ))}
        </nav>

        <nav className="footer-col">
          <h4 className="footer-h">{f.colEvents.title}</h4>
          {f.colEvents.links.map((l) => (
            <Link key={l.label} to={l.to}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="footer-col">
          <h4 className="footer-h">{f.colContact.title}</h4>
          <span className="footer-contact-line">{f.colContact.address}</span>
          <a
            className="footer-contact-line"
            href={tel(f.colContact.phone)}
            onClick={() => trackPhoneClick(f.colContact.phone)}
          >
            {f.colContact.phone}
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>{f.copy}</span>
      </div>
    </footer>
  );
}
