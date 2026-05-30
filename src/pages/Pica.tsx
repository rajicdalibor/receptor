import { useI18n } from "../i18n/context";
import { useReveal } from "../hooks/useReveal";
import { img } from "../lib/img";
import { ContactBand } from "../components/ContactBand";
import type { Dict } from "../i18n/translations";

type Group = Dict["pica"]["groups"][number];

// Index-based layout mapping from mockup:
//  Row 1 (3 wide):    [0]=Aperitif, [1]=Cocktails, [2]=Pivo
//  Row 2 (4 cols):    [3]=Whiskey  | stack [4,5,6] | stack [7,8,9,10] | [11]=Rakija
//  Row 3 (4 cols):    [12]=Voda    | [13]=Bezalk   | [14]=Sokovi      | stack [15,16]
const SPIRITS_VOL = "(0,03 l)";
// Indices that should display the "(0,03 l)" pour suffix.
const SPIRITS_INDICES = new Set([3, 4, 5, 6, 7, 8, 9, 10, 11]);

function CatGroup({
  group,
  showPour,
  cur,
}: {
  group: Group;
  showPour: boolean;
  cur: string;
}) {
  return (
    <div className="drink-group reveal">
      <h3 className="drink-cat">
        {group.title}
        {showPour && <span className="drink-cat-vol"> {SPIRITS_VOL}</span>}
      </h3>
      <ul className="drink-list">
        {group.items.map((it, idx) => (
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
  );
}

export default function Pica() {
  const { t, lang } = useI18n();
  useReveal([lang]);
  const p = t.pica;
  const cur = t.common.currency;
  const g = p.groups;

  const renderCat = (idx: number) => (
    <CatGroup key={idx} group={g[idx]} showPour={SPIRITS_INDICES.has(idx)} cur={cur} />
  );

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
          {/* Row 1: 3 wide groups */}
          <div className="drink-row-3 reveal">
            {renderCat(0)}
            {renderCat(1)}
            {renderCat(2)}
          </div>

          {/* Row 2: Whiskey | Martini+Gin+Vodka stack | Rum+Tequila+Cognac+Digestifs stack | Rakija */}
          <div className="drink-row-4">
            {renderCat(3)}
            <div className="drink-stack">
              {renderCat(4)}
              {renderCat(5)}
              {renderCat(6)}
            </div>
            <div className="drink-stack">
              {renderCat(7)}
              {renderCat(8)}
              {renderCat(9)}
              {renderCat(10)}
            </div>
            {renderCat(11)}
          </div>

          {/* Row 3: Voda Rosa | Bezalkoholna | Sokovi | Kafa+Čaj */}
          <div className="drink-row-4">
            {renderCat(12)}
            {renderCat(13)}
            {renderCat(14)}
            <div className="drink-stack">
              {renderCat(15)}
              {renderCat(16)}
            </div>
          </div>

          <p className="menu-smallprint">{p.smallprint}</p>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
