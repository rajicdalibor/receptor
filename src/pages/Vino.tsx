import { useState } from "react";
import type { ComponentType, SVGProps } from "react";
import { useI18n } from "../i18n/context";
import { useReveal } from "../hooks/useReveal";
import { img } from "../lib/img";
import { Ornament } from "../components/ui";
import { ContactBand } from "../components/ContactBand";
import {
  IconBottle,
  IconLeaf,
  IconSparkle,
  IconWine,
} from "../components/icons";
import type { Dict } from "../i18n/translations";

// Per-group ornament icon — distinct visual hint per wine type.
type IconC = ComponentType<{ className?: string } & SVGProps<SVGSVGElement>>;
const GROUP_ICON: Record<string, IconC> = {
  // SR
  "Penušavo": IconSparkle,
  "Belo": IconWine,
  "Roze": IconLeaf,
  "Crveno": IconBottle,
  "Iz našeg podruma": IconLeaf,
  // EN
  "Sparkling": IconSparkle,
  "White": IconWine,
  "Rosé": IconLeaf,
  "Red": IconBottle,
  "From our cellar": IconLeaf,
  // RU
  "Игристое": IconSparkle,
  "Белое": IconWine,
  "Розе": IconLeaf,
  "Красное": IconBottle,
  "Из нашего погреба": IconLeaf,
};
const iconFor = (title: string): IconC => GROUP_ICON[title] || IconLeaf;

type Wine = Dict["vino"]["groups"][number]["wines"][number];

// Maps wine name → image slug (file in /public/images/wines/<slug>.webp).
// Once user provides real bottle photos, add entries here. Missing entries
// render the IconBottle SVG as a clean fallback.
const WINE_IMG: Record<string, string> = {
  "Simonnet-Febvre Blanc de Blanc": "simonnet-febvre",
  "Château Marjosse Blanc": "chateau-marjosse-blanc",
  "Domaine L'Ostal Chardonnay": "lostal-chardonnay",
  "Michel Lynch Réserve Graves Blanc": "michel-lynch-graves",
  "LYV Rosé Pays d'Oc": "lyv-rose",
  "Château Marjosse Rouge": "chateau-marjosse-rouge",
  "Domaine Martin Rasteau": "domaine-martin-rasteau",
  "Michel Lynch Bordeaux Rouge": "michel-lynch-bordeaux",
  "Triptyque Silex": "triptyque-silex",
  "Syrah, Rhône": "syrah-rhone",
};

const base = import.meta.env.BASE_URL;

function WineBottlePic({ slug }: { slug?: string }) {
  const [errored, setErrored] = useState(false);
  if (!slug || errored) return <IconBottle className="wine-bottle-ico" />;
  return (
    <img
      className="wine-bottle-photo"
      src={`${base}images/wines/${slug}.webp`}
      alt=""
      loading="lazy"
      onError={() => setErrored(true)}
    />
  );
}

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
  const slug = WINE_IMG[w.name];
  return (
    <div className="wine">
      <div className="wine-bottle">
        <WineBottlePic slug={slug} />
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
          {w.bottle && (
            <span>
              <em>{bottleLabel}</em> {w.bottle} {cur}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Vino() {
  const { t, lang } = useI18n();
  const v = t.vino;
  const cur = t.common.currency;
  const cardProps = { glassLabel: v.glassLabel, bottleLabel: v.bottleLabel, cur };

  useReveal([lang]);

  return (
    <>
      {/* HERO */}
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

      {/* PHILOSOPHY */}
      <section className="section tight">
        <div className="container narrow" style={{ textAlign: "center" }}>
          <Ornament>{v.philosophyTitle}</Ornament>
          <p className="lead reveal" style={{ margin: "22px auto 0", maxWidth: 720 }}>
            {v.philosophyText}
          </p>
        </div>
      </section>

      {/* GROUPS: Penušavo / Belo / Roze */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="wine-groups">
            {v.groups.map((g) => {
              const Ico = iconFor(g.title);
              return (
                <div className="wine-col reveal" key={g.title}>
                  <h2 className="wine-cat">
                    <Ico className="msec-ico" />
                    {g.title}
                  </h2>
                  {g.wines.map((w) => (
                    <WineCard key={w.name} w={w} {...cardProps} />
                  ))}
                </div>
              );
            })}
          </div>

          {/* CRVENO — full-width row */}
          {(() => {
            const Ico = iconFor(v.red.title);
            return (
              <h2 className="wine-cat wine-cat-wide reveal">
                <Ico className="msec-ico" />
                {v.red.title}
              </h2>
            );
          })()}
          <div className="wine-row reveal">
            {v.red.wines.map((w) => (
              <WineCard key={w.name} w={w} {...cardProps} />
            ))}
          </div>

          {/* IZ NAŠEG PODRUMA */}
          <div className="wine-cellar reveal">
            {(() => {
              const Ico = iconFor(v.cellar.title);
              return (
                <h2 className="wine-cat wine-cat-wide">
                  <Ico className="msec-ico" />
                  {v.cellar.title}
                </h2>
              );
            })()}
            <p className="lead" style={{ maxWidth: 760, marginBottom: 28 }}>
              {v.cellar.intro}
            </p>
            <div className="wine-cellar-grid">
              <div className="wine-row wine-row-2">
                {v.cellar.wines.map((w) => (
                  <WineCard key={w.name} w={w} {...cardProps} />
                ))}
              </div>
              <div
                className="wine-cellar-photo"
                style={{ backgroundImage: `url(${img("cocktail-1")})` }}
                aria-hidden="true"
              />
            </div>
          </div>

          <p className="menu-smallprint">{v.smallprint}</p>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
