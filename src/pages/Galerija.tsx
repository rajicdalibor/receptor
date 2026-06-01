import { Link } from "react-router-dom";
import { useI18n } from "../i18n/context";
import { useReveal } from "../hooks/useReveal";
import { img, video, GALLERY, isVideo, isTall, videoName } from "../lib/img";
import { Ornament } from "../components/ui";
import { ContactBand } from "../components/ContactBand";
import { IconPin } from "../components/icons";

export default function Galerija() {
  const { t, lang } = useI18n();
  useReveal([lang]);
  const g = t.galerija;

  return (
    <>
      <section className="section tight" style={{ paddingBottom: 0 }}>
        <div className="container center">
          <Ornament>{g.hero.title}</Ornament>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {GALLERY.map((name) => {
              // Videos and portrait photos span 2 rows so they fit their
              // natural orientation without heavy cropping.
              const tall = isTall(name);
              return (
                <span
                  className={"ph reveal" + (tall ? " gal-tall" : "")}
                  key={name}
                >
                  {isVideo(name) ? (
                    <video
                      src={video(videoName(name))}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <img src={img(name)} alt="" loading="lazy" />
                  )}
                </span>
              );
            })}
          </div>

          <div className="gal-cta">
            <div className="gal-parking">
              <IconPin className="gal-parking-ico" />
              <span>{t.kontakt.parking.note}</span>
            </div>
            <Link to="/kontakt" state={{ scrollToForm: true }} className="btn btn-gold">
              {t.cta.reserve}
            </Link>
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
