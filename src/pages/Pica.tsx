import { useI18n } from "../i18n/context";
import { useReveal } from "../hooks/useReveal";
import { img } from "../lib/img";
import { ContactBand } from "../components/ContactBand";

export default function Pica() {
  const { t, lang } = useI18n();
  useReveal([lang]);
  const p = t.pica;
  const cur = t.common.currency;

  return (
    <>
      <section className="phero phero-split is-dark phero-dark">
        <div className="phero-text">
          <h1 className="phero-title pica-title">{p.hero.title}</h1>
          <p className="phero-tagline">{p.hero.sub}</p>
          <p className="phero-sub">{p.hero.intro}</p>
        </div>
        <div
          className="phero-media"
          style={{ backgroundImage: `url(${img("cocktail-1")})` }}
        />
      </section>

      <section className="section">
        <div className="container">
          <div className="drink-grid">
            {p.groups.map((g) => (
              <div className="drink-group reveal" key={g.title}>
                <h3 className="drink-cat">{g.title}</h3>
                <ul className="drink-list">
                  {g.items.map((it, idx) => (
                    <li className="drink-row" key={it.name + idx}>
                      <span className="drink-name">
                        {it.name}
                        {it.vol && <em className="drink-vol"> ({it.vol})</em>}
                      </span>
                      <span className="drink-price">
                        {it.price} {cur}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="menu-smallprint">{p.smallprint}</p>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
