import type { ReactNode } from "react";
import { IconLeaf } from "./icons";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

export function Ornament({ children }: { children?: ReactNode }) {
  return (
    <div className="ornament" aria-hidden="true">
      {children ? <span>{children}</span> : <span>✦</span>}
    </div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  lead,
  center = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  center?: boolean;
}) {
  return (
    <div className={"section-head" + (center ? " is-center" : "")}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="section-title">{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}

export interface MenuItemT {
  name: string;
  desc: string;
  price: string;
}

export interface MItem {
  name: string;
  desc: string;
  price: string;
  unit: string;
  tag: string;
}

export function MenuSection({
  title,
  items,
  currency,
}: {
  title: string;
  items: readonly MItem[];
  currency: string;
}) {
  return (
    <div className="msec reveal">
      <h3 className="msec-title">
        <IconLeaf className="msec-ico" />
        {title}
      </h3>
      <ul className="msec-list">
        {items.map((it) => (
          <li className="mrow" key={it.name}>
            <div className="mrow-head">
              <span className="mrow-name">
                {it.name}
                {it.tag && <em className="mrow-tag"> {it.tag}</em>}
              </span>
              {it.price && (
                <span className="mrow-price">
                  {it.price} {currency}
                  {it.unit && <span className="mrow-unit"> / {it.unit}</span>}
                </span>
              )}
            </div>
            {it.desc && <p className="mrow-desc">{it.desc}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MenuGroup({
  title,
  note,
  items,
  currency,
}: {
  title: string;
  note?: string;
  items: readonly MenuItemT[];
  currency: string;
}) {
  return (
    <div className="menu-group reveal">
      <h3 className="menu-group-title">{title}</h3>
      {note && <p className="menu-group-note">{note}</p>}
      <ul className="menu-list">
        {items.map((it) => (
          <li className="menu-item" key={it.name}>
            <div className="menu-item-main">
              <span className="menu-item-name">{it.name}</span>
              <span className="menu-item-dots" aria-hidden="true" />
              <span className="menu-item-price">
                {it.price} <span className="cur">{currency}</span>
              </span>
            </div>
            {it.desc && <span className="menu-item-desc">{it.desc}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
