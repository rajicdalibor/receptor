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

      {/* EVENT PACKAGES */}
      <section className="section tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="epkgs">
            {p.packages.map((pk) => (
              <article className="epkg reveal" key={pk.name}>
                <header className="epkg-head">
                  <div className="epkg-head-main">
                    <span className="epkg-format">{pk.format}</span>
                    <h3 className="epkg-name">{pk.name}</h3>
                    <p className="epkg-desc">{pk.desc}</p>
                  </div>
                  <div className="epkg-price-wrap">
                    <span className="epkg-price">{pk.price}</span>
                    <span className="epkg-per">{p.perPerson}</span>
                    <span className="epkg-meta">{pk.meta}</span>
                  </div>
                </header>
                <div className="epkg-groups">
                  {pk.groups.map((g) => (
                    <div className="epkg-group" key={g.title}>
                      <h4 className="epkg-group-title">{g.title}</h4>
                      <ul className="epkg-list">
                        {g.items.map((it) => (
                          <li key={it}>{it}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                {pk.alt.price && (
                  <p className="epkg-alt">
                    <strong>{p.altLabel} — {pk.alt.price} {p.perPerson}</strong> {pk.alt.text}
                  </p>
                )}
                <p className="epkg-note">{pk.note}</p>
              </article>
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
