import { useI18n } from "../i18n/context";
import { useReveal } from "../hooks/useReveal";
import { img } from "../lib/img";
import { Ornament } from "../components/ui";
import { ContactBand } from "../components/ContactBand";
import { IconBottle, IconLeaf } from "../components/icons";
import type { Dict } from "../i18n/translations";

type Wine = Dict["vino"]["groups"][number]["wines"][number];

function WineCard({
  w,
  glassLabel,
  bottleLabel,
  cur,
}: {
  w: Wine;
  glassLabel: string;
  bottleLabel: string;
  cur: string;
}) {
  return (
    <div className="wine">
      <div className="wine-bottle">
        <IconBottle className="wine-bottle-ico" />
      </div>
      <div className="wine-body">
        <div className="wine-name">
          {w.name}
          {w.house && <span className="wine-house">{w.house}</span>}
        </div>
        {w.desc && <p className="wine-desc">{w.desc}</p>}
        <div className="wine-prices">
          {w.glass && (
            <span>
              <em>{glassLabel}</em> {w.glass} {cur}
            </span>
          )}
          <span>
            <em>{bottleLabel}</em> {w.bottle} {cur}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Vino() {
  const { t, lang } = useI18n();
  useReveal([lang]);
  const v = t.vino;
  const cur = t.common.currency;
  const cardProps = { glassLabel: v.glassLabel, bottleLabel: v.bottleLabel, cur };

  return (
    <>
      <section
        className="phero phero-split is-dark phero-dark"
        style={{ ["--media" as string]: `url(${img("wine-flight")})` }}
      >
        <div className="phero-text">
          <h1 className="phero-title">{v.hero.title}</h1>
          <p className="phero-tagline">{v.hero.sub}</p>
        </div>
        <div
          className="phero-media"
          style={{ backgroundImage: `url(${img("wine-flight")})` }}
        />
      </section>

      {/* Philosophy */}
      <section className="section tight">
        <div className="container narrow" style={{ textAlign: "center" }}>
          <Ornament>{v.philosophyTitle}</Ornament>
          <p className="lead reveal" style={{ margin: "22px auto 0", maxWidth: 720 }}>
            {v.philosophyText}
          </p>
        </div>
      </section>

      {/* Groups: Penušavo / Belo / Roze */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="wine-groups">
            {v.groups.map((g) => (
              <div className="wine-col reveal" key={g.title}>
                <h2 className="wine-cat">
                  <IconLeaf className="msec-ico" />
                  {g.title}
                </h2>
                {g.wines.map((w) => (
                  <WineCard key={w.name} w={w} {...cardProps} />
                ))}
              </div>
            ))}
          </div>

          {/* Red — full width header + row */}
          <h2 className="wine-cat wine-cat-wide reveal">
            <IconLeaf className="msec-ico" />
            {v.red.title}
          </h2>
          <div className="wine-row reveal">
            {v.red.wines.map((w) => (
              <WineCard key={w.name} w={w} {...cardProps} />
            ))}
          </div>

          {/* Cellar */}
          <div className="wine-cellar reveal">
            <h2 className="wine-cat wine-cat-wide">
              <IconLeaf className="msec-ico" />
              {v.cellar.title}
            </h2>
            <p className="lead" style={{ maxWidth: 760, marginBottom: 28 }}>
              {v.cellar.intro}
            </p>
            <div className="wine-row wine-row-2">
              {v.cellar.wines.map((w) => (
                <WineCard key={w.name} w={w} {...cardProps} />
              ))}
            </div>
          </div>

          <p className="menu-smallprint">{v.smallprint}</p>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
