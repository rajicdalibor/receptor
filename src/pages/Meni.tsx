import { useI18n } from "../i18n/context";
import { useReveal } from "../hooks/useReveal";
import { PageHero, CategoryNav, ReserveBand, slug } from "../components/ui";

export default function Meni() {
  const { t, lang } = useI18n();
  useReveal([lang]);
  const m = t.meni;
  const cur = t.common.currency;
  const f = t.footer.reserveBand;

  const categories = m.columns.flat().map((g) => g.title);

  return (
    <>
      <PageHero eyebrow={m.hero.eyebrow} tag={m.hero.tag} title={m.hero.title} sub={m.hero.sub} />
      <CategoryNav items={categories} />

      <section className="section tight">
        <div className="container">
          <div className="menu-cols">
            {m.columns.map((col, ci) => (
              <div className="menu-col" key={ci}>
                {col.map((g) => (
                  <div className="menu-group reveal" id={slug(g.title)} key={g.title}>
                    <h2 className="menu-group-title">{g.title}</h2>
                    <ul className="menu-list">
                      {g.items.map((it) => (
                        <li className="menu-item" key={it.name}>
                          <div className="menu-item-head">
                            <span className="menu-item-name">{it.name}</span>
                            <span className="menu-item-dots" aria-hidden="true" />
                            <span className="menu-item-price">
                              {it.price} <span className="cur">{cur}</span>
                            </span>
                          </div>
                          {it.desc && <p className="menu-item-desc">{it.desc}</p>}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {ci === m.columns.length - 1 && (
                  <div className="menu-note reveal">
                    <span className="eyebrow">{m.note.title}</span>
                    <p>{m.note.text}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
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
