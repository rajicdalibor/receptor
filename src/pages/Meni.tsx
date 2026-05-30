import { useI18n } from "../i18n/context";
import { useReveal } from "../hooks/useReveal";
import { img } from "../lib/img";
import { MenuSection } from "../components/ui";
import { ContactBand } from "../components/ContactBand";

export default function Meni() {
  const { t, lang } = useI18n();
  useReveal([lang]);
  const m = t.meni;
  const cur = t.common.currency;

  return (
    <>
      <section className="phero phero-split">
        <div className="phero-text">
          <span className="leaf-ornament" aria-hidden="true">❧</span>
          <h1 className="phero-title">{m.hero.title}</h1>
          <p className="phero-sub">{m.hero.sub}</p>
          <p className="phero-tagline">{m.hero.tagline}</p>
        </div>
        <div
          className="phero-media"
          style={{ backgroundImage: `url(${img("food-plate")})` }}
        />
      </section>

      <section className="section">
        <div className="container">
          <div className="menu-2col">
            <div className="menu-col">
              {m.colLeft.map((s) => (
                <MenuSection
                  key={s.title}
                  title={s.title}
                  items={s.items}
                  currency={cur}
                />
              ))}
              <p className="menu-note reveal">{m.note}</p>
            </div>
            <div className="menu-col">
              {m.colRight.map((s) => (
                <MenuSection
                  key={s.title}
                  title={s.title}
                  items={s.items}
                  currency={cur}
                />
              ))}
            </div>
          </div>
          <p className="menu-smallprint">{m.smallprint}</p>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
