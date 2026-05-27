import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useI18n } from "../i18n/context";
import { Logo } from "./Logo";
import "./nav.css";

const DARK_HERO_ROUTES = ["/karta-pica", "/proslave", "/galerija", "/kontakt"];

export function Nav() {
  const { t, lang, setLang } = useI18n();
  const langs = ["sr", "en", "ru"] as const;
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const dark = DARK_HERO_ROUTES.includes(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links: { to: string; label: string }[] = [
    { to: "/", label: t.nav.pocetna },
    { to: "/meni", label: t.nav.meni },
    { to: "/vinska-karta", label: t.nav.vinska },
    { to: "/karta-pica", label: t.nav.pica },
    { to: "/business-lunch", label: t.nav.business },
    { to: "/proslave", label: t.nav.proslave },
    { to: "/galerija", label: t.nav.galerija },
    { to: "/kontakt", label: t.nav.kontakt },
  ];

  return (
    <header
      className={[
        "nav",
        dark ? "nav-dark" : "nav-light",
        scrolled ? "nav-scrolled" : "",
        open ? "nav-open" : "",
      ].join(" ")}
    >
      <div className="nav-inner container">
        <NavLink to="/" className="nav-logo" aria-label="Receptor">
          <Logo />
        </NavLink>

        <nav className="nav-links" aria-label="Glavna navigacija">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => "nav-link" + (isActive ? " is-active" : "")}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <div className="lang-toggle" role="group" aria-label="Jezik">
            {langs.map((l, i) => (
              <span key={l} className="lang-grp">
                {i > 0 && <span className="sep">/</span>}
                <button
                  type="button"
                  className={"lang-opt" + (lang === l ? " on" : "")}
                  onClick={() => setLang(l)}
                >
                  {l.toUpperCase()}
                </button>
              </span>
            ))}
          </div>
          <NavLink to="/kontakt" className="btn btn-gold nav-reserve">
            {t.cta.reserve}
          </NavLink>
          <button
            className="nav-burger"
            aria-label="Meni"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div className="nav-mobile" aria-hidden={!open}>
        <nav className="nav-mobile-links">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => "nav-mobile-link" + (isActive ? " is-active" : "")}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="nav-mobile-actions">
          <div className="lang-toggle" role="group" aria-label="Jezik">
            {langs.map((l, i) => (
              <span key={l} className="lang-grp">
                {i > 0 && <span className="sep">/</span>}
                <button
                  type="button"
                  className={"lang-opt" + (lang === l ? " on" : "")}
                  onClick={() => setLang(l)}
                >
                  {l.toUpperCase()}
                </button>
              </span>
            ))}
          </div>
          <NavLink to="/kontakt" className="btn btn-gold">
            {t.cta.reserve}
          </NavLink>
        </div>
      </div>
    </header>
  );
}
