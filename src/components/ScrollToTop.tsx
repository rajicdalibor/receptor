import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname, state } = useLocation();
  useEffect(() => {
    // If navigation set { scrollToForm: true }, let the destination page
    // scroll to its target instead of snapping to the top.
    if ((state as { scrollToForm?: boolean } | null)?.scrollToForm) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, state]);
  return null;
}
