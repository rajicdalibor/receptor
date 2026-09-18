import type { ReactNode } from "react";
import { Link } from "react-router-dom";

/**
 * Slug for in-page anchor ids. Strips Latin diacritics but keeps other
 * scripts (e.g. Cyrillic) so anchors work in every language.
 */
export function slug(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/(^-|-$)/g, "");
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={"eyebrow" + (className ? " " + className : "")}>{children}</span>;
}

/** Burgundy full-width hero band used on all inner pages. */
export function PageHero({
  eyebrow,
  tag,
  title,
  sub,
}: {
  eyebrow: string;
  tag?: string;
  title: string;
  sub?: string;
}) {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <div className="page-hero-top">
          <span className="page-hero-eyebrow">{eyebrow}</span>
          {tag && <span className="page-hero-tag">{tag}</span>}
        </div>
        <h1 className="page-hero-title">{title}</h1>
        {sub && <p className="page-hero-sub">{sub}</p>}
      </div>
    </section>
  );
}

/** Cream category anchor bar under a page hero. Each item links to the
 *  section whose heading equals `target` (label may be shorter). */
export function CategoryNav({ items }: { items: { label: string; target: string }[] }) {
  return (
    <nav className="cat-nav" aria-label="Kategorije">
      <div className="container cat-nav-inner">
        {items.map((it) => (
          <a key={it.label} href={`#${slug(it.target)}`} className="cat-nav-link">
            {it.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export interface BandAction {
  label: string;
  to?: string;
  href?: string;
  scrollToForm?: boolean;
  variant?: "solid" | "outline";
  onClick?: () => void;
}

/** Dark reservation / inquiry band that sits above the footer. */
export function ReserveBand({
  eyebrow,
  title,
  text,
  actions,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  actions: BandAction[];
}) {
  return (
    <section className="reserve-band">
      <div className="container reserve-band-inner">
        <div className="reserve-band-text">
          <span className="eyebrow reserve-band-eyebrow">{eyebrow}</span>
          <h2 className="reserve-band-title">{title}</h2>
          {text && <p className="reserve-band-sub">{text}</p>}
        </div>
        <div className="reserve-band-actions">
          {actions.map((a) => {
            const cls = "btn " + (a.variant === "outline" ? "btn-outline-light" : "btn-primary");
            if (a.to) {
              return (
                <Link
                  key={a.label}
                  to={a.to}
                  state={a.scrollToForm ? { scrollToForm: true } : undefined}
                  className={cls}
                  onClick={a.onClick}
                >
                  {a.label}
                </Link>
              );
            }
            return (
              <a key={a.label} href={a.href} className={cls} onClick={a.onClick}>
                {a.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
