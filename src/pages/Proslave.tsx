import { Link } from "react-router-dom";
import { useI18n } from "../i18n/context";
import { useReveal } from "../hooks/useReveal";
import { img } from "../lib/img";
import { Ornament } from "../components/ui";
import { ContactBand } from "../components/ContactBand";

const pkgImages = ["food-sharing", "food-main", "food-plate"];

export default function Proslave() {
  const { t, lang } = useI18n();
  useReveal([lang]);
  const p = t.proslave;

  return (
    <>
      {/* HERO */}
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

      {/* PACKAGES */}
      <section className="section">
        <div className="container">
          <div className="center">
            <Ornament>{p.packagesTitle}</Ornament>
          </div>
          <div className="packages" style={{ marginTop: "clamp(36px,4vw,56px)" }}>
            {p.packages.map((pk, i) => (
              <div className={"package reveal" + (i === 1 ? " feat" : "")} key={pk.name}>
                <span className="package-name">{pk.name}</span>
                <span className="package-price">{pk.price}</span>
                <p className="package-desc">{pk.desc}</p>
                <ul>
                  {pk.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <div className="package-media">
                  <img src={img(pkgImages[i])} alt="" loading="lazy" />
                </div>
                <Link to="/kontakt" className="btn-ghost package-cta">
                  {p.packageCta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM + NOTES */}
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

      {/* CLOSING */}
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
