import { Link } from "react-router-dom";
import { useI18n } from "../i18n/context";
import { useReveal } from "../hooks/useReveal";
import { img, GALLERY } from "../lib/img";
import { Ornament } from "../components/ui";
import { IconPin } from "../components/icons";

const tall = new Set([1, 6, 9]);

export default function Galerija() {
  const { t, lang } = useI18n();
  useReveal([lang]);
  const g = t.galerija;

  return (
    <div className="surface-dark page-fill">
      <section className="section tight" style={{ paddingBottom: 0 }}>
        <div className="container center">
          <Ornament>{g.hero.title}</Ornament>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {GALLERY.map((name, i) => (
              <span className={"ph reveal" + (tall.has(i) ? " gal-tall" : "")} key={name}>
                <img src={img(name)} alt="" loading="lazy" />
              </span>
            ))}
          </div>

          <div className="gal-cta">
            <div className="gal-parking">
              <IconPin className="gal-parking-ico" />
              <span>{t.kontakt.parking.note}</span>
            </div>
            <Link to="/kontakt" className="btn btn-gold">
              {t.cta.reserve}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
