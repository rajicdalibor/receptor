import { useI18n } from "../i18n/context";
import { useReveal } from "../hooks/useReveal";
import { PageHero, ReserveBand } from "../components/ui";

export default function Business() {
  const { t, lang } = useI18n();
  useReveal([lang]);
  const b = t.business;

  return (
    <>
      <PageHero eyebrow={b.hero.eyebrow} tag={b.hero.tag} title={b.hero.title} sub={b.hero.sub} />

      {/* INTRO */}
      <section className="section tight">
        <div className="container hsplit">
          <div className="hsplit-left reveal">
            <span className="eyebrow">{b.intro.eyebrow}</span>
            <h2 className="hsplit-title">{b.intro.title}</h2>
          </div>
          <div className="hsplit-right reveal">
            <p>{b.intro.text}</p>
          </div>
        </div>
      </section>

      {/* 3 NUMBERED CARDS */}
      <section className="section tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="num-cards num-cards-3">
            {b.cards.map((c) => (
              <div className="num-card reveal" key={c.num}>
                <span className="num-card-num">{c.num}</span>
                <h3 className="num-card-title">{c.title}</h3>
                <p className="num-card-text">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICAL — 4 mini cards */}
      <section className="section tight">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">{b.practical.eyebrow}</span>
            <h2 className="sec-title">{b.practical.title}</h2>
          </div>
          <div className="mini-cards">
            {b.mini.map((m) => (
              <div className="mini-card reveal" key={m.title}>
                <h3 className="mini-card-title">{m.title}</h3>
                <p className="mini-card-text">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTE */}
      <section className="section tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="info-block reveal">
            <span className="eyebrow">{b.note.eyebrow}</span>
            <h3 className="info-block-title">{b.note.title}</h3>
            <p className="info-block-text">{b.note.text}</p>
          </div>
        </div>
      </section>

      <ReserveBand
        eyebrow={b.band.eyebrow}
        title={b.band.title}
        text={b.band.text}
        actions={[
          { label: b.band.ctaInquiry, to: "/kontakt", scrollToForm: true, variant: "solid" },
          { label: b.band.ctaEvents, to: "/proslave", variant: "outline" },
        ]}
      />
    </>
  );
}
