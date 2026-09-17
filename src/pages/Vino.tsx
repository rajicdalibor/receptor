import { useI18n } from "../i18n/context";
import { useReveal } from "../hooks/useReveal";
import { PageHero, CategoryNav, ReserveBand, slug } from "../components/ui";

export default function Vino() {
  const { t, lang } = useI18n();
  useReveal([lang]);
  const v = t.vino;
  const cur = t.common.currency;
  const f = t.footer.reserveBand;

  const categories = v.columns.flat().map((g) => g.title);

  return (
    <>
      <PageHero eyebrow={v.hero.eyebrow} tag={v.hero.tag} title={v.hero.title} sub={v.hero.sub} />
      <CategoryNav items={categories} />

      <section className="section tight">
        <div className="container">
          <div className="wine-cols">
            {v.columns.map((col, ci) => (
              <div className="wine-col" key={ci}>
                {col.map((g) => (
                  <div className="wine-group reveal" id={slug(g.title)} key={g.title}>
                    <h2 className="wine-group-title">{g.title}</h2>
                    <ul className="wine-list">
                      {g.wines.map((w) => (
                        <li className="wine-item" key={w.name}>
                          <span className="wine-name">{w.name}</span>
                          {w.glass && (
                            <div className="wine-price-row">
                              <span className="wine-measure">{v.glassLabel}</span>
                              <span className="wine-price">
                                {w.glass} <span className="cur">{cur}</span>
                              </span>
                            </div>
                          )}
                          {w.bottle && (
                            <div className="wine-price-row">
                              <span className="wine-measure">{v.bottleLabel}</span>
                              <span className="wine-price">
                                {w.bottle} <span className="cur">{cur}</span>
                              </span>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="info-block reveal">
            <span className="eyebrow">{v.info.eyebrow}</span>
            <h3 className="info-block-title">{v.info.title}</h3>
            <p className="info-block-text">{v.info.text}</p>
          </div>

          <p className="menu-smallprint">{v.smallprint}</p>
        </div>
      </section>

      <ReserveBand
        eyebrow={f.eyebrow}
        title={f.title}
        text={f.text}
        actions={[
          { label: f.ctaReserve, to: "/kontakt", scrollToForm: true, variant: "solid" },
          { label: f.ctaEvents, to: "/proslave", variant: "outline" },
        ]}
      />
    </>
  );
}
