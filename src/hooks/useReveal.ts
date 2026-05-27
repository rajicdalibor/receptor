import { useEffect } from "react";

/**
 * Adds `.is-visible` to `.reveal` elements once they scroll into view.
 * Uses a scroll/resize bounding-box check (not IntersectionObserver) so it
 * degrades gracefully and never leaves content stuck at opacity:0.
 * Above-the-fold elements are revealed immediately on mount.
 */
export function useReveal(deps: unknown[] = []) {
  useEffect(() => {
    document.documentElement.classList.add("js-reveal");
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    let raf = 0;

    const check = () => {
      raf = 0;
      const trigger = window.innerHeight * 0.9;
      let remaining = false;
      for (const el of els) {
        if (el.classList.contains("is-visible")) continue;
        if (el.getBoundingClientRect().top < trigger) el.classList.add("is-visible");
        else remaining = true;
      }
      if (!remaining) detach();
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };

    function detach() {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    }

    check(); // reveal above-the-fold immediately
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      detach();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
