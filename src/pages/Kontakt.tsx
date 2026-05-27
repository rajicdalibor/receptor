import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n/context";
import { useReveal } from "../hooks/useReveal";
import { img } from "../lib/img";
import { IconPin, IconPhone, IconMail, IconClock } from "../components/icons";

export default function Kontakt() {
  const { t, lang } = useI18n();
  useReveal([lang]);
  const k = t.kontakt;
  const [sent, setSent] = useState(false);
  const tel = (n: string) => `tel:${n.replace(/\s/g, "")}`;

  return (
    <>
      {/* HERO */}
      <section
        className="phero phero-full phero-dark"
        style={{ backgroundImage: `url(${img("dining-evening")})` }}
      >
        <div className="phero-inner container">
          <span className="leaf-ornament" aria-hidden="true">❧</span>
          <h1 className="phero-title pica-title">{k.hero.title}</h1>
          <span className="phero-script">{k.hero.script}</span>
        </div>
      </section>

      {/* INFO + MAP */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="reveal">
              <span className="eyebrow">{k.brandLine}</span>
              <div className="info-list" style={{ marginTop: 26 }}>
                <div className="info-row">
                  <IconPin className="info-ico" />
                  <div>
                    <span className="info-label">{k.address.label}</span>
                    <div className="info-val">{k.address.value}</div>
                    <div className="info-sub">{k.address.sub}</div>
                  </div>
                </div>
                <div className="info-row">
                  <IconPhone className="info-ico" />
                  <div>
                    <span className="info-label">{k.phone.label}</span>
                    <div className="info-val">
                      <a href={tel(k.phone.value)}>{k.phone.value}</a>
                    </div>
                    {k.phone2 && (
                      <div className="info-val">
                        <a href={tel(k.phone2)}>{k.phone2}</a>
                      </div>
                    )}
                  </div>
                </div>
                <div className="info-row">
                  <IconMail className="info-ico" />
                  <div>
                    <span className="info-label">{k.email.label}</span>
                    <div className="info-val">
                      <a href={`mailto:${k.email.value}`}>{k.email.value}</a>
                    </div>
                  </div>
                </div>
                <div className="info-row">
                  <IconClock className="info-ico" />
                  <div>
                    <span className="info-label">{k.hours.label}</span>
                    <div className="info-val">
                      {k.hours.value.map((h) => (
                        <p key={h}>{h}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/kontakt" className="btn btn-gold" style={{ marginTop: 28 }}>
                {t.cta.reserve}
              </Link>
            </div>

            <div className="reveal">
              <iframe
                className="map-embed"
                title="Mapa — Receptor"
                src="https://www.google.com/maps?q=Karadjordjeva%2021%20Beograd&z=15&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ minHeight: 460 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FORM + PARKING */}
      <section className="section tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="contact-grid">
            <form className="form reveal" onSubmit={(e: FormEvent) => { e.preventDefault(); setSent(true); }}>
              <h2 className="home-h" style={{ marginBottom: 8 }}>{k.form.title}</h2>
              {sent && <div className="form-success">{k.form.success}</div>}
              <div className="field full">
                <label htmlFor="name">{k.form.name}</label>
                <input id="name" type="text" required />
              </div>
              <div className="field full">
                <label htmlFor="email">{k.form.email}</label>
                <input id="email" type="email" required />
              </div>
              <div className="field full">
                <label htmlFor="phone">{k.form.phone}</label>
                <input id="phone" type="tel" />
              </div>
              <div className="field full">
                <label htmlFor="position">{k.form.position}</label>
                <select id="position">
                  {k.careers.positions.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </div>
              <div className="field full">
                <label htmlFor="message">{k.form.message}</label>
                <textarea id="message" />
              </div>
              <label className="consent">
                <input type="checkbox" /> <span>{k.form.consent}</span>
              </label>
              <div>
                <button type="submit" className="btn btn-gold">{k.form.submit}</button>
              </div>
            </form>

            <div className="parking-card reveal">
              <h2 className="parking-card-title">{k.parking.title}</h2>
              <p className="parking-card-note">{k.parking.note}</p>
              <ul className="parking-list">
                {k.parking.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <div
                className="parking-media"
                style={{ backgroundImage: `url(${img("interior-dark")})` }}
              >
                <span className="parking-media-label">{k.parking.label}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section className="section surface-dark">
        <div className="container">
          <div className="contact-grid careers-grid">
            <div className="reveal">
              <span className="eyebrow">{k.careers.eyebrow}</span>
              <h2 className="home-h" style={{ margin: "14px 0 6px" }}>{k.careers.title}</h2>
              <p className="phero-script" style={{ marginTop: 0 }}>{k.careers.script}</p>
              <p className="lead" style={{ marginTop: 16 }}>{k.careers.text}</p>
              <div className="careers-media" style={{ marginTop: 24 }}>
                <img src={img("chef-detail")} alt="" loading="lazy" />
              </div>
            </div>
            <div className="reveal">
              <h3 className="careers-pos-title">{k.careers.positionsTitle}</h3>
              <ul className="careers-positions">
                {k.careers.positions.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <a href={`mailto:${k.email.value}`} className="btn btn-gold" style={{ marginTop: 20 }}>
                {k.careers.button}
              </a>
              <p className="careers-note">{k.careers.note}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
