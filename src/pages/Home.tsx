import { Link } from "react-router-dom";
import { useI18n } from "../i18n/context";
import { useReveal } from "../hooks/useReveal";
import { img } from "../lib/img";
import { ReserveBand } from "../components/ui";

export default function Home() {
  const { t, lang } = useI18n();
  useReveal([lang]);
  const h = t.home;

  return (
    <>
      {/* HERO — split: dark text panel + photo */}
      <section className="hhero">
        <div className="hhero-text">
          <span className="hhero-eyebrow">{h.hero.eyebrow}</span>
          <h1 className="hhero-title">{h.hero.title}</h1>
          <span className="hhero-brandline">{h.hero.brandline}</span>
          <p className="hhero-sub">{h.hero.text}</p>
          <div className="hhero-actions">
            <Link to="/meni" className="btn btn-primary">
              {h.hero.ctaMenu}
            </Link>
            <Link to="/kontakt" state={{ scrollToForm: true }} className="btn btn-outline-light">
              {h.hero.ctaReserve}
            </Link>
          </div>
        </div>
        <div className="hhero-media" style={{ backgroundImage: `url(${img("hero-riverside")})` }} />
      </section>

      {/* BRAND STRIP */}
      <div className="brand-strip">
        <div className="container brand-strip-inner">
          {t.strip.map((s) => (
            <span key={s} className="brand-strip-item">
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* INTRO */}
      <section className="section tight">
        <div className="container hsplit">
          <div className="hsplit-left reveal">
            <span className="eyebrow">{h.intro.eyebrow}</span>
            <h2 className="hsplit-title">{h.intro.title}</h2>
          </div>
          <div className="hsplit-right reveal">
            <p>{h.intro.p1}</p>
            <p>{h.intro.p2}</p>
          </div>
        </div>
      </section>

      {/* OFFER — 4 numbered cards */}
      <section className="section surface-deep">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">{h.offer.eyebrow}</span>
            <h2 className="sec-title">{h.offer.title}</h2>
          </div>
          <div className="offer-grid">
            {h.offer.cards.map((c) => (
              <Link to={c.to} className="offer-card reveal" key={c.num}>
                <span className="offer-num">{c.num}</span>
                <span className="offer-label">{c.label}</span>
                <h3 className="offer-title">{c.title}</h3>
                <p className="offer-text">{c.text}</p>
                <span className="offer-arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS + price boxes */}
      <section className="section">
        <div className="container hevents">
          <div className="hevents-text reveal">
            <span className="eyebrow">{h.events.eyebrow}</span>
            <h2 className="hsplit-title">{h.events.title}</h2>
            <p className="lead" style={{ marginTop: 14 }}>
              {h.events.text}
            </p>
          </div>
          <div className="hevents-prices reveal">
            {h.events.prices.map((p) => (
              <div className="price-box" key={p.label}>
                <span className="price-box-label">{p.label}</span>
                <span className="price-box-value">{p.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReserveBand
        eyebrow={h.cta.eyebrow}
        title={h.cta.title}
        text={h.cta.text}
        actions={[
          { label: h.cta.ctaReserve, to: "/kontakt", scrollToForm: true, variant: "solid" },
          { label: h.cta.ctaContact, to: "/kontakt", variant: "outline" },
        ]}
      />
    </>
  );
}
