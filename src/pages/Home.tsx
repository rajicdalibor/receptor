import { Link } from "react-router-dom";
import { useI18n } from "../i18n/context";
import { useReveal } from "../hooks/useReveal";
import { img } from "../lib/img";
import {
  IconBriefcase,
  IconRiver,
  IconWine,
  IconUsers,
  IconPin,
  IconClock,
  IconPhone,
} from "../components/icons";

const valueIcons = [IconBriefcase, IconRiver, IconWine, IconUsers];

export default function Home() {
  const { t, lang } = useI18n();
  useReveal([lang]);
  const h = t.home;
  const k = t.kontakt;
  const tel = `tel:${k.phone.value.replace(/\s/g, "")}`;

  return (
    <>
      {/* HERO — split: text panel + photo */}
      <section className="home-hero">
        <div className="home-hero-text">
          <h1 className="home-hero-title">{t.brand.name}</h1>
          <p className="home-hero-script">{h.hero.script}</p>
          <p className="home-hero-sub">{h.hero.sub}</p>
          <div className="home-hero-actions">
            <Link to="/kontakt" className="btn btn-gold">
              {h.hero.ctaPrimary}
            </Link>
            <Link to="/meni" className="btn btn-outline">
              {h.hero.ctaSecondary}
            </Link>
            <a href={tel} className="btn-link">
              <IconPhone className="btn-link-ico" />
              {h.hero.ctaCall}
            </a>
          </div>
          <div className="home-hero-info">
            <div className="hhi">
              <IconPin className="hhi-ico" />
              <div>
                <strong>{h.hero.info.addr1}</strong>
                <span>{h.hero.info.addr2}</span>
              </div>
            </div>
            <div className="hhi">
              <IconClock className="hhi-ico" />
              <div>
                <strong>{h.hero.info.hoursTitle}</strong>
                <span>{h.hero.info.hours1}</span>
                <span>{h.hero.info.hours2}</span>
              </div>
            </div>
            <div className="hhi hhi-note">
              <span>{h.hero.info.reserve}</span>
            </div>
          </div>
        </div>
        <div
          className="home-hero-media"
          style={{ backgroundImage: `url(${img("hero-riverside")})` }}
        />
      </section>

      {/* VALUES */}
      <section className="section surface-deep">
        <div className="container">
          <h2 className="home-h center">{h.valuesTitle}</h2>
          <div className="values" style={{ marginTop: "clamp(36px,4vw,56px)" }}>
            {h.values.map((v, i) => {
              const Ico = valueIcons[i];
              return (
                <div className="value reveal" key={v.title}>
                  <Ico className="value-ico" />
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              );
            })}
          </div>
          <div className="center" style={{ marginTop: "clamp(36px,4vw,52px)" }}>
            <Link to="/meni" className="btn btn-gold">
              {h.valuesCta}
            </Link>
          </div>
        </div>
      </section>

      {/* 3 EDITORIAL BLOCKS */}
      <section className="section">
        <div className="container">
          <div className="home-blocks">
            <article className="hblock reveal">
              <h3 className="hblock-title">{h.blocks.food.title}</h3>
              <p className="hblock-text">{h.blocks.food.text}</p>
              <div className="hblock-media">
                <img src={img("food-sharing")} alt="" loading="lazy" />
              </div>
              <Link to="/meni" className="btn btn-outline hblock-btn">
                {h.blocks.food.cta}
              </Link>
            </article>

            <article className="hblock reveal">
              <h3 className="hblock-title">{h.blocks.drink.title}</h3>
              <p className="hblock-text">{h.blocks.drink.text}</p>
              <div className="hblock-media">
                <img src={img("cocktail-2")} alt="" loading="lazy" />
              </div>
              <div className="hblock-btn hblock-actions">
                <Link to="/vinska-karta" className="btn btn-outline">
                  {h.blocks.drink.ctaWine}
                </Link>
                <Link to="/karta-pica" className="btn btn-outline">
                  {h.blocks.drink.ctaDrinks}
                </Link>
              </div>
            </article>

            <article className="hblock reveal">
              <h3 className="hblock-title">{h.blocks.business.title}</h3>
              <p className="hblock-text">{h.blocks.business.text}</p>
              <ul className="hblock-bullets">
                {h.blocks.business.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="hblock-media">
                <img src={img("food-brunch")} alt="" loading="lazy" />
              </div>
              <Link to="/business-lunch" className="btn btn-outline hblock-btn">
                {h.blocks.business.cta}
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* PROSLAVE + EVENING (2 columns) */}
      <section className="home-duo">
        <div className="home-duo-light reveal">
          <h2 className="home-h">{h.proslaveBlock.title}</h2>
          <p className="lead">{h.proslaveBlock.text}</p>
          <div className="chips">
            {h.proslaveBlock.chips.map((c) => (
              <span className="chip" key={c}>
                {c}
              </span>
            ))}
          </div>
          <Link to="/proslave" className="btn btn-gold">
            {h.proslaveBlock.cta}
          </Link>
        </div>
        <div
          className="home-duo-dark"
          style={{ backgroundImage: `url(${img("bar-moody")})` }}
        >
          <div className="home-duo-dark-inner">
            <h2 className="home-h">{h.eveningBlock.title}</h2>
            <p className="lead">{h.eveningBlock.text}</p>
            <Link to="/karta-pica" className="btn btn-outline">
              {h.eveningBlock.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY TEASER */}
      <section className="section surface-deep">
        <div className="container">
          <h2 className="home-h center" style={{ marginBottom: "clamp(28px,4vw,46px)" }}>
            {h.galleryTeaser.title}
          </h2>
          <div className="home-gal-row reveal">
            {["interior-brasserie", "table-detail", "food-main", "wine-flight", "cocktail-2", "hall"].map(
              (g) => (
                <img key={g} src={img(g)} alt="" loading="lazy" />
              )
            )}
          </div>
          <div className="center" style={{ marginTop: 34 }}>
            <Link to="/galerija" className="btn btn-outline">
              {h.galleryTeaser.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* LOCATION + MAP */}
      <section className="home-location">
        <div className="home-location-text reveal">
          <h2 className="home-h">{h.location.title}</h2>
          <p className="lead">{h.location.text}</p>
          <div className="home-loc-meta">
            <p>
              <strong>{k.address.value}</strong>
            </p>
            <p>
              {h.hero.info.hoursTitle} · {h.hero.info.hours1}
            </p>
            <p>{h.hero.info.hours2}</p>
          </div>
          <p className="home-loc-parking">{h.location.parking}</p>
          <div className="home-hero-actions">
            <Link to="/kontakt" className="btn btn-gold">
              {h.hero.ctaPrimary}
            </Link>
            <a href={tel} className="btn btn-outline">
              {t.cta.callNow}
            </a>
          </div>
        </div>
        <iframe
          className="home-map"
          title="Mapa — Receptor"
          src="https://www.google.com/maps?q=44.81657,20.44984&z=17&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* FINAL CTA — dark photo */}
      <section
        className="home-final"
        style={{ backgroundImage: `url(${img("dining-evening")})` }}
      >
        <div className="home-final-inner container">
          <h2 className="home-h">{h.finalCta.title}</h2>
          <p className="lead">{h.finalCta.text}</p>
          <div className="home-hero-actions center-actions">
            <Link to="/kontakt" className="btn btn-gold">
              {h.finalCta.ctaReserve}
            </Link>
            <a href={tel} className="btn btn-outline">
              {h.finalCta.ctaCall}
            </a>
            <Link to="/kontakt" className="btn btn-outline">
              {h.finalCta.ctaInquiry}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
