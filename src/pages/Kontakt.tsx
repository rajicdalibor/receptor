import { useEffect, useState, type FormEvent } from "react";
import { useLocation } from "react-router-dom";
import { useI18n } from "../i18n/context";
import { useReveal } from "../hooks/useReveal";
import { PageHero, ReserveBand } from "../components/ui";
import { postReservation } from "../lib/api";
import { trackLead, trackPhoneClick, trackEmailClick } from "../lib/analytics";

// Google directions to Karađorđeva 21
const MAP_URL =
  "https://www.google.com/maps/place/Karađorđeva+21,+Beograd/@44.81657,20.44984,17z";

const scrollToForm = () => {
  document.getElementById("forma")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Kontakt() {
  const { t, lang } = useI18n();
  useReveal([lang]);
  const k = t.kontakt;
  const location = useLocation();
  const tel = (n: string) => `tel:${n.replace(/\s/g, "")}`;

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const s = location.state as { scrollToForm?: boolean } | null;
    if (!s?.scrollToForm) return;
    const id = window.setTimeout(scrollToForm, 120);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setError(null);
    setSending(true);
    try {
      const data = new FormData(form);
      const payload = {
        name: String(data.get("name") || ""),
        email: String(data.get("email") || ""),
        phone: String(data.get("phone") || ""),
        date: String(data.get("date") || ""),
        persons: Number(data.get("persons") || 0),
        message: String(data.get("message") || ""),
      };
      const result = await postReservation(payload);
      if (result.success) {
        trackLead({ form_id: "reservation", persons: payload.persons });
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
      <PageHero eyebrow={k.hero.eyebrow} tag={k.hero.tag} title={k.hero.title} sub={k.hero.sub} />

      {/* INFO ROW */}
      <section className="section tight">
        <div className="container contact-info">
          <div className="reveal">
            <span className="eyebrow">{k.info.left.eyebrow}</span>
            <h2 className="contact-info-title">{k.info.left.title}</h2>
            <p className="contact-info-text">{k.info.left.text}</p>
          </div>
          <div className="reveal">
            <span className="eyebrow">{k.info.right.eyebrow}</span>
            <p className="contact-info-phone">
              <a href={tel(k.info.right.phone)} onClick={() => trackPhoneClick(k.info.right.phone)}>
                {k.info.right.phone}
              </a>
            </p>
            <p className="contact-info-mail">
              <a
                href={`mailto:${k.info.right.email}`}
                onClick={() => trackEmailClick(k.info.right.email)}
              >
                {k.info.right.email}
              </a>
            </p>
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ marginTop: 6, display: "inline-block" }}
            >
              {k.info.right.mapCta}
            </a>
          </div>
        </div>
      </section>

      {/* PRE DOLASKA + FORM */}
      <section className="section tight surface-deep" id="forma" style={{ scrollMarginTop: 90 }}>
        <div className="container contact-grid">
          <div className="reveal">
            <span className="eyebrow">{k.pre.eyebrow}</span>
            <h2 className="contact-col-title">{k.pre.title}</h2>
            <div className="contact-cards">
              {k.pre.cards.map((c) => (
                <div className="contact-card" key={c.title}>
                  <span className="eyebrow">{c.title}</span>
                  <p>{c.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal">
            <span className="eyebrow">{k.form.eyebrow}</span>
            <h2 className="contact-col-title">{k.form.title}</h2>
            <p className="contact-form-intro">{k.form.text}</p>

            <form className="cform" onSubmit={onSubmit}>
              {sent && <div className="form-success">{k.form.success}</div>}
              {error && <div className="form-error">{error}</div>}

              <div className="cfield">
                <label htmlFor="c-name">{k.form.name}</label>
                <input id="c-name" name="name" type="text" placeholder={k.form.placeholder} required />
              </div>
              <div className="cfield-row">
                <div className="cfield">
                  <label htmlFor="c-email">{k.form.email}</label>
                  <input id="c-email" name="email" type="email" placeholder={k.form.placeholder} required />
                </div>
                <div className="cfield">
                  <label htmlFor="c-phone">{k.form.phone}</label>
                  <input id="c-phone" name="phone" type="tel" placeholder={k.form.placeholder} />
                </div>
              </div>
              <div className="cfield-row">
                <div className="cfield">
                  <label htmlFor="c-date">{k.form.date}</label>
                  <input id="c-date" name="date" type="date" />
                </div>
                <div className="cfield">
                  <label htmlFor="c-persons">{k.form.persons}</label>
                  <input id="c-persons" name="persons" type="number" min={1} max={60} />
                </div>
              </div>
              <div className="cfield">
                <label htmlFor="c-message">{k.form.message}</label>
                <textarea id="c-message" name="message" rows={4} placeholder={k.form.messagePlaceholder} />
              </div>
              <button type="submit" className="btn btn-primary" disabled={sending}>
                {sending ? k.form.sending : k.form.submit}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* NOTE */}
      <section className="section tight">
        <div className="container">
          <div className="info-block reveal">
            <span className="eyebrow">{k.note.eyebrow}</span>
            <h3 className="info-block-title">{k.note.title}</h3>
            <p className="info-block-text">{k.note.text}</p>
          </div>
        </div>
      </section>

      <ReserveBand
        eyebrow={k.footerCta.eyebrow}
        title={k.footerCta.title}
        text={k.footerCta.text}
        actions={[
          {
            label: t.cta.callNow,
            href: tel(k.info.right.phone),
            variant: "solid",
            onClick: () => trackPhoneClick(k.info.right.phone),
          },
          { label: t.cta.map, href: MAP_URL, variant: "outline" },
        ]}
      />
    </>
  );
}
