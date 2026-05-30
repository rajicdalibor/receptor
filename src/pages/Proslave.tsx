import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n/context";
import { useReveal } from "../hooks/useReveal";
import { img } from "../lib/img";
import { Ornament } from "../components/ui";
import { ContactBand } from "../components/ContactBand";
import { useData } from "../lib/data";
import { langCode } from "../lib/api";
import type { Lang } from "../i18n/translations";

const pkgImages = ["food-sharing", "food-main", "food-plate"];

// Titles per package slot, per language — matches the old Blade page.
const TITLES: Record<Lang, string[]> = {
  sr: ["SET MENI 1", "SET MENI 2", "ŠVEDSKI STO"],
  en: ["SET MENI 1", "SET MENI 2", "BUFFET"],
  ru: ["СЕТ-Меню 1", "СЕТ-Меню 2", "ШВЕДСКИЙ СТОЛ"],
};

export default function Proslave() {
  const { t, lang } = useI18n();
  const p = t.proslave;

  const { celebrations, loading, error } = useData();

  const packages = useMemo(() => {
    const code = langCode(lang);
    return celebrations
      .filter((c) => c.jezik === code)
      .sort((a, b) => a.id - b.id)
      .slice(0, TITLES[lang].length);
  }, [celebrations, lang]);

  const titles = TITLES[lang];

  useReveal([lang, celebrations]);

  return (
    <>
      <section
        className="phero phero-full phero-dark"
        style={{ backgroundImage: `url(${img("dining-evening")})` }}
      >
        <div className="phero-inner container">
          <span className="leaf-ornament" aria-hidden="true">❧</span>
          <h1 className="phero-title pica-title">{p.hero.title}</h1>
          <span className="phero-script">{p.hero.script}</span>
          <p className="phero-sub">{p.hero.intro1}</p>
          <p className="phero-sub" style={{ marginTop: 12 }}>{p.hero.intro2}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="center">
            <Ornament>{p.packagesTitle}</Ornament>
          </div>

          {loading.celebrations && packages.length === 0 && (
            <p className="menu-note reveal">…</p>
          )}
          {error.celebrations && (
            <p className="menu-note reveal" style={{ color: "var(--c-rust, #c44)" }}>
              {error.celebrations}
            </p>
          )}

          {packages.length > 0 && (
            <div className="packages" style={{ marginTop: "clamp(36px,4vw,56px)" }}>
              {packages.map((pk, i) => (
                <div className={"package reveal" + (i === 1 ? " feat" : "")} key={pk.id}>
                  <span className="package-name">{titles[i]}</span>
                  <div
                    className="package-content"
                    dangerouslySetInnerHTML={{ __html: (pk.hrana || "") + (pk.pice || "") }}
                  />
                  <div className="package-media">
                    <img src={img(pkgImages[i % pkgImages.length])} alt="" loading="lazy" />
                  </div>
                  <Link
                    to="/kontakt"
                    state={{ scrollToForm: true }}
                    className="btn-ghost package-cta"
                  >
                    {p.packageCta}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section tight surface-deep">
        <div className="container">
          <div className="two-col">
            <div className="reveal">
              <h2 className="home-h">{p.custom.title}</h2>
              <p className="lead" style={{ margin: "14px 0 18px" }}>{p.custom.intro}</p>
              <ul className="bullet-list">
                {p.custom.items.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <div className="reveal">
              <h2 className="home-h">{p.notesTitle}</h2>
              <ul className="bullet-list" style={{ marginTop: 18 }}>
                {p.notes.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container narrow center">
          <Ornament />
          <p className="philosophy reveal" style={{ marginTop: 22, fontSize: "clamp(1.5rem,3vw,2.2rem)" }}>
            {p.closing}
          </p>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
