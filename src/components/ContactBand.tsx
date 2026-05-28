import { Link } from "react-router-dom";
import { useI18n } from "../i18n/context";
import { IconPin, IconClock, IconPhone } from "./icons";
import "./contactband.css";

export function ContactBand() {
  const { t } = useI18n();
  const info = t.home.hero.info;
  const k = t.kontakt;
  const tel = (n: string) => `tel:${n.replace(/\s/g, "")}`;

  return (
    <section className="contact-band surface-dark">
      <div className="container contact-band-inner">
        <div className="cb-item">
          <IconPin className="cb-ico" />
          <div>
            <strong>{info.addr1}</strong>
            <span>{info.addr2}</span>
          </div>
        </div>
        <div className="cb-item">
          <IconClock className="cb-ico" />
          <div>
            <strong>{info.hoursTitle}</strong>
            <span>{info.hours1}</span>
            <span>{info.hours2}</span>
          </div>
        </div>
        <div className="cb-item">
          <IconPhone className="cb-ico" />
          <div>
            <a href={tel(k.phone.value)}>{k.phone.value}</a>
            {k.phone2 && <a href={tel(k.phone2)}>{k.phone2}</a>}
          </div>
        </div>
        <Link to="/kontakt" state={{ scrollToForm: true }} className="btn btn-gold">
          {t.cta.reserve}
        </Link>
      </div>
    </section>
  );
}
