import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "../lib/analytics";

// HashRouter doesn't trigger gtag's automatic page_view on route change, so
// fire it manually whenever the location changes.
export function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname + location.search;
    trackPageView(path);
  }, [location.pathname, location.search]);

  return null;
}
