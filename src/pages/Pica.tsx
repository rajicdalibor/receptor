import { useI18n } from "../i18n/context";
import { useReveal } from "../hooks/useReveal";
import { PageHero, CategoryNav, ReserveBand, slug } from "../components/ui";

export default function Pica() {
  const { t, lang } = useI18n();
  useReveal([lang]);
  const p = t.pica;
  const cur = t.common.currency;
  const f = t.footer.reserveBand;

  const categories = p.columns.flat().map((g) => g.title);

  return (
    <>
      <PageHero eyebrow={p.hero.eyebrow} tag={p.hero.tag} title={p.hero.title} sub={p.hero.sub} />
      <CategoryNav items={categories} />

      <section className="section tight">
        <div className="container">
          <div className="drink-cols">
            {p.columns.map((col, ci) => (
              <div className="drink-col" key={ci}>
                {col.map((g) => (
                  <div className="drink-group reveal" id={slug(g.title)} key={g.title}>
                    <h2 className="drink-group-title">{g.title}</h2>
                    <ul className="drink-list">
                      {g.items.map((it) => (
                        <li className="drink-item" key={it.name}>
                          <span className="drink-name">{it.name}</span>
                          <span className="drink-dots" aria-hidden="true" />
                          <span className="drink-price">
                            {it.price} <span className="cur">{cur}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <p className="menu-smallprint">{p.smallprint}</p>
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
