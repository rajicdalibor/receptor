import { useEffect, useState, type FormEvent } from "react";
import { useLocation } from "react-router-dom";
import { useI18n } from "../i18n/context";
import { useReveal } from "../hooks/useReveal";
import { img } from "../lib/img";
import { IconPin, IconPhone, IconMail, IconClock } from "../components/icons";
import { postReservation } from "../lib/api";

const scrollToForm = () => {
  document
    .getElementById("forma")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Kontakt() {
  const { t, lang } = useI18n();
  useReveal([lang]);
  const k = t.kontakt;
  const tel = (n: string) => `tel:${n.replace(/\s/g, "")}`;
  const location = useLocation();

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // When navigated here with { scrollToForm: true } (e.g. from a Rezerviši sto
  // button anywhere on the site), scroll smoothly down to the form.
  // Depend on location.key (stable per navigation) so React re-renders don't
  // cancel the pending scroll.
  useEffect(() => {
    const s = location.state as { scrollToForm?: boolean } | null;
    if (!s?.scrollToForm) return;
    const t = window.setTimeout(scrollToForm, 120);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setError(null);
    setSending(true);
    try {
      const data = new FormData(form);
      const date = String(data.get("date") || "");
      const time = String(data.get("time") || "");
      const payload = {
        name: String(data.get("name") || ""),
        email: String(data.get("email") || ""),
        phone: String(data.get("phone") || ""),
        date: time ? `${date} ${time}` : date,
        persons: Number(data.get("persons") || 0),
        message: String(data.get("message") || ""),
      };
      const result = await postReservation(payload);
      if (result.success) {
        setSent(true);
        form.reset();
      } else {
        setError(result.error || k.form.error);
      }
    } catch {
      setError(k.form.error);
    } finally {
      setSending(false);
    }
  };

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
              <button
                type="button"
                onClick={scrollToForm}
                className="btn btn-gold"
                style={{ marginTop: 28 }}
              >
                {t.cta.reserve}
              </button>
            </div>

            <div className="reveal">
              <iframe
                className="map-embed"
                title="Mapa — Receptor Riverside Brasserie"
                src="https://www.google.com/maps?q=44.81657,20.44984&z=17&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ minHeight: 460 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* RESERVATION FORM + PARKING */}
      <section id="forma" className="section tight" style={{ paddingTop: 0, scrollMarginTop: 100 }}>
        <div className="container">
          <div className="contact-grid">
            <form
              id="reservationForm"
              className="form reveal"
              onSubmit={onSubmit}
            >
              <h2 className="home-h" style={{ marginBottom: 8 }}>{k.form.title}</h2>
              {sent && <div className="form-success">{k.form.success}</div>}
              {error && <div className="form-error">{error}</div>}

              <div className="field full">
                <label htmlFor="r-name">{k.form.name}</label>
                <input id="r-name" name="name" type="text" required />
              </div>

              <div className="form-row">
                <div className="field">
                  <label htmlFor="r-email">{k.form.email}</label>
                  <input id="r-email" name="email" type="email" required />
                </div>
                <div className="field">
                  <label htmlFor="r-phone">{k.form.phone}</label>
                  <input id="r-phone" name="phone" type="tel" required />
                </div>
              </div>

              <div className="form-row form-row-3">
                <div className="field">
                  <label htmlFor="r-date">{k.form.date}</label>
                  <input id="r-date" name="date" type="date" required />
                </div>
                <div className="field">
                  <label htmlFor="r-time">{k.form.time}</label>
                  <input id="r-time" name="time" type="time" />
                </div>
                <div className="field">
                  <label htmlFor="r-persons">{k.form.persons}</label>
                  <input id="r-persons" name="persons" type="number" min={1} max={40} required />
                </div>
              </div>

              <div className="field full">
                <label htmlFor="r-message">{k.form.message}</label>
                <textarea id="r-message" name="message" rows={4} />
              </div>

              <label className="consent">
                <input type="checkbox" required /> <span>{k.form.consent}</span>
              </label>
              <div>
                <button type="submit" className="btn btn-gold" disabled={sending}>
                  {sending ? k.form.sending : k.form.submit}
                </button>
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
