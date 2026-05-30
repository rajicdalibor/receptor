import { useMemo } from "react";
import { useI18n } from "../i18n/context";
import { useReveal } from "../hooks/useReveal";
import { img } from "../lib/img";
import { MenuSection, type MItem } from "../components/ui";
import { ContactBand } from "../components/ContactBand";
import { useData } from "../lib/data";
import type { Food } from "../lib/api";

type Group = { title: string; items: MItem[] };

function groupByTipjela(foods: Food[]): Group[] {
  const order: string[] = [];
  const map = new Map<string, MItem[]>();
  for (const f of foods) {
    const key = (f.tipjela || "").trim();
    if (!map.has(key)) {
      order.push(key);
      map.set(key, []);
    }
    map.get(key)!.push({
      name: f.naziv,
      price: f.cena,
      desc: "",
      unit: "",
      tag: "",
    });
  }
  return order.map((title) => ({ title, items: map.get(title)! }));
}

export default function Meni() {
  const { t, lang } = useI18n();
  const m = t.meni;
  const cur = t.common.currency;
  const { foods, loading, error } = useData();

  const groups = useMemo(() => groupByTipjela(foods), [foods]);
  const mid = Math.ceil(groups.length / 2);
  const colLeft = groups.slice(0, mid);
  const colRight = groups.slice(mid);

  useReveal([lang, foods]);

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
          {loading.foods && groups.length === 0 && (
            <p className="menu-note reveal">…</p>
          )}
          {error.foods && (
            <p className="menu-note reveal" style={{ color: "var(--c-rust, #c44)" }}>
              {error.foods}
            </p>
          )}
          {groups.length > 0 && (
            <>
              <div className="menu-2col">
                <div className="menu-col">
                  {colLeft.map((s) => (
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
                  {colRight.map((s) => (
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
            </>
          )}
        </div>
      </section>

      <ContactBand />
    </>
  );
}
