import { useI18n } from "../i18n/context";
import { useReveal } from "../hooks/useReveal";
import { Link } from "react-router-dom";
import { PageHero, ReserveBand } from "../components/ui";

export default function Proslave() {
  const { t, lang } = useI18n();
  useReveal([lang]);
  const p = t.proslave;

  return (
    <>
      <PageHero eyebrow={p.hero.eyebrow} tag={p.hero.tag} title={p.hero.title} sub={p.hero.sub} />

      {/* INTRO */}
      <section className="section tight">
        <div className="container hsplit">
          <div className="hsplit-left reveal">
            <span className="eyebrow">{p.intro.eyebrow}</span>
            <h2 className="hsplit-title">{p.intro.title}</h2>
          </div>
          <div className="hsplit-right reveal">
            <p>{p.intro.text}</p>
          </div>
        </div>
      </section>

      {/* 3 PACKAGES */}
      <section className="section tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="pkg-grid">
            {p.packages.map((pk) => (
              <div className="pkg-card reveal" key={pk.name}>
                <span className="pkg-label">{pk.label}</span>
                <h3 className="pkg-name">{pk.name}</h3>
                <span className="pkg-price">{pk.price}</span>
                <ul className="pkg-list">
                  {pk.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM */}
      <section className="section tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="info-block info-block-cta reveal">
            <div>
              <span className="eyebrow">{p.custom.eyebrow}</span>
              <h3 className="info-block-title">{p.custom.title}</h3>
              <p className="info-block-text">{p.custom.text}</p>
            </div>
            <Link to="/kontakt" state={{ scrollToForm: true }} className="btn-ghost">
              {p.custom.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* IMPORTANT NOTES */}
      <section className="section tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <span className="eyebrow" style={{ display: "block", marginBottom: 20 }}>
            {p.important.eyebrow}
          </span>
          <div className="note-grid">
            {p.important.notes.map((n) => (
              <div className="note-cell reveal" key={n}>
                {n}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReserveBand
        eyebrow={p.band.eyebrow}
        title={p.band.title}
        text={p.band.text}
        actions={[
          { label: p.band.ctaInquiry, to: "/kontakt", scrollToForm: true, variant: "solid" },
          { label: p.band.ctaContact, to: "/kontakt", variant: "outline" },
        ]}
      />
    </>
  );
}
