import { useI18n } from "../i18n/context";
import { useReveal } from "../hooks/useReveal";
import { img } from "../lib/img";
import { Ornament } from "../components/ui";
import {
  IconLeaf,
  IconCloche,
  IconCake,
  IconChat,
  IconUsers,
  IconBriefcase,
  IconCalendar,
  IconClock,
} from "../components/icons";

const stepIcons = [IconLeaf, IconCloche, IconCake];
const stepImages = ["food-flatbread", "food-main", "table-detail"];
const idealIcons = [IconChat, IconUsers, IconBriefcase, IconCalendar, IconClock];

export default function Business() {
  const { t, lang } = useI18n();
  useReveal([lang]);
  const b = t.business;

  return (
    <>
      {/* HERO — full-bleed photo + text + price card */}
      <section
        className="biz-hero"
        style={{ backgroundImage: `url(${img("dining-elegant")})` }}
      >
        <div className="biz-hero-inner container">
          <div className="biz-hero-text">
            <span className="leaf-ornament" aria-hidden="true">❧</span>
            <h1 className="biz-title">{b.hero.title}</h1>
            <p className="biz-sub">{b.hero.sub}</p>
            <p className="biz-intro">{b.hero.intro}</p>
          </div>
          <div className="biz-price">
            <span className="biz-price-label">{b.hero.setLabel}</span>
            <span className="biz-price-amt">
              {b.hero.price} <span className="cur">{b.hero.priceCur}</span>
            </span>
            <span className="biz-price-per">{b.hero.perPerson}</span>
            <span className="biz-price-rule" />
            <span className="biz-price-note">{b.hero.priceNote}</span>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="section">
        <div className="container">
          <div className="center">
            <Ornament>{b.stepsTitle}</Ornament>
          </div>
          <div className="biz-steps" style={{ marginTop: "clamp(36px,4vw,56px)" }}>
            {b.steps.map((s, i) => {
              const Ico = stepIcons[i];
              return (
                <div className="biz-step reveal" key={s.title}>
                  <Ico className="biz-step-ico" />
                  <h3 className="biz-step-title">{s.title}</h3>
                  <p className="biz-step-desc">{s.desc}</p>
                  <div className="biz-step-media">
                    <img src={img(stepImages[i])} alt="" loading="lazy" />
                  </div>
                  <ul className="biz-step-items">
                    {s.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IDEALAN ZA */}
      <section className="section tight surface-deep">
        <div className="container">
          <h2 className="home-h center" style={{ marginBottom: "clamp(32px,4vw,48px)" }}>
            {b.idealTitle}
          </h2>
          <div className="biz-ideal">
            {b.ideal.map((label, i) => {
              const Ico = idealIcons[i];
              return (
                <div className="biz-ideal-item reveal" key={label}>
                  <Ico className="biz-ideal-ico" />
                  <span>{label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
