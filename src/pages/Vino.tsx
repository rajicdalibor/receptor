import { useMemo } from "react";
import { useI18n } from "../i18n/context";
import { useReveal } from "../hooks/useReveal";
import { img } from "../lib/img";
import { Ornament } from "../components/ui";
import { ContactBand } from "../components/ContactBand";
import { IconBottle, IconLeaf } from "../components/icons";
import { useData } from "../lib/data";
import type { Wine } from "../lib/api";
import type { Lang } from "../i18n/translations";

function splitPrice(raw: string): { bottle?: string; glass?: string } {
  // Backend stores price as either "3100 / 620" (bottle / glass) or "8800.00".
  if (!raw) return {};
  const parts = raw.split("/").map((s) => s.trim()).filter(Boolean);
  if (parts.length === 0) return {};
  if (parts.length === 1) return { bottle: parts[0] };
  return { bottle: parts[0], glass: parts[1] };
}

function formatPrice(p: string): string {
  // "8800.00" → "8.800"; "3100" → "3.100"; "620" → "620"
  if (!p) return "";
  const n = Number(p.replace(/[^\d.]/g, ""));
  if (!Number.isFinite(n) || n <= 0) return p;
  const rounded = Math.round(n);
  return rounded.toLocaleString("sr-RS");
}

function categoryFor(w: Wine, lang: Lang): string {
  if (lang === "en") return (w.tipvinaeng || "").trim();
  if (lang === "ru") return (w.tipvinarus || "").trim();
  return (w.tipvina || "").trim();
}

function WineRow({
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
  const { bottle, glass } = splitPrice(w.price);
  return (
    <div className="wine">
      <div className="wine-bottle">
        <IconBottle className="wine-bottle-ico" />
      </div>
      <div className="wine-body">
        <div className="wine-name">{w.name}</div>
        {w.description && <p className="wine-desc">{w.description}</p>}
        <div className="wine-prices">
          {glass && (
            <span>
              <em>{glassLabel}</em> {formatPrice(glass)} {cur}
            </span>
          )}
          {bottle && (
            <span>
              <em>{bottleLabel}</em> {formatPrice(bottle)} {cur}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

type Section = { title: string; wines: Wine[] };

function groupByCategory(wines: Wine[], lang: Lang): Section[] {
  const order: string[] = [];
  const map = new Map<string, Wine[]>();
  for (const w of wines) {
    const key = categoryFor(w, lang) || "—";
    if (!map.has(key)) {
      order.push(key);
      map.set(key, []);
    }
    map.get(key)!.push(w);
  }
  return order.map((title) => ({ title, wines: map.get(title)! }));
}

export default function Vino() {
  const { t, lang } = useI18n();
  const v = t.vino;
  const cur = t.common.currency;
  const cardProps = { glassLabel: v.glassLabel, bottleLabel: v.bottleLabel, cur };

  const { wines, loading, error } = useData();

  const { domace, strana } = useMemo(() => {
    return {
      domace: groupByCategory(
        wines.filter((w) => String(w.type) === "1"),
        lang,
      ),
      strana: groupByCategory(
        wines.filter((w) => String(w.type) !== "1"),
        lang,
      ),
    };
  }, [wines, lang]);

  const domaceLabel = lang === "en" ? "Domestic" : lang === "ru" ? "Местные" : "Domaća vina";
  const stranaLabel = lang === "en" ? "International" : lang === "ru" ? "Импортные" : "Strana vina";

  useReveal([lang, wines]);

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

      <section className="section tight">
        <div className="container narrow" style={{ textAlign: "center" }}>
          <Ornament>{v.philosophyTitle}</Ornament>
          <p className="lead reveal" style={{ margin: "22px auto 0", maxWidth: 720 }}>
            {v.philosophyText}
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {loading.wines && wines.length === 0 && (
            <p className="menu-note reveal">…</p>
          )}
          {error.wines && (
            <p className="menu-note reveal" style={{ color: "var(--c-rust, #c44)" }}>
              {error.wines}
            </p>
          )}

          {wines.length > 0 && (
            <>
              {domace.length > 0 && (
                <>
                  <h2 className="wine-cat wine-cat-wide reveal">
                    <IconLeaf className="msec-ico" />
                    {domaceLabel}
                  </h2>
                  <div className="wine-groups">
                    {domace.map((g) => (
                      <div className="wine-col reveal" key={"d-" + g.title}>
                        <h3 className="wine-cat">
                          <IconLeaf className="msec-ico" />
                          {g.title}
                        </h3>
                        {g.wines.map((w) => (
                          <WineRow key={"d-" + w.id} w={w} {...cardProps} />
                        ))}
                      </div>
                    ))}
                  </div>
                </>
              )}

              {strana.length > 0 && (
                <>
                  <h2
                    className="wine-cat wine-cat-wide reveal"
                    style={{ marginTop: "clamp(36px,4vw,56px)" }}
                  >
                    <IconLeaf className="msec-ico" />
                    {stranaLabel}
                  </h2>
                  <div className="wine-groups">
                    {strana.map((g) => (
                      <div className="wine-col reveal" key={"s-" + g.title}>
                        <h3 className="wine-cat">
                          <IconLeaf className="msec-ico" />
                          {g.title}
                        </h3>
                        {g.wines.map((w) => (
                          <WineRow key={"s-" + w.id} w={w} {...cardProps} />
                        ))}
                      </div>
                    ))}
                  </div>
                </>
              )}

              <p className="menu-smallprint">{v.smallprint}</p>
            </>
          )}
        </div>
      </section>

      <ContactBand />
    </>
  );
}
