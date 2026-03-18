import { useState, useEffect } from "react";

/**
 * useCMS — fetch data from Payload CMS with a hardcoded fallback.
 *
 * @param {string}   endpoint  - Payload REST path, e.g. "/api/projects?limit=10"
 * @param {Array}    fallback  - Hardcoded array used while the CMS is unreachable or not yet set up
 * @param {Function} [transform] - Optional fn(doc, index) → component-shaped object
 *
 * Usage:
 *   const { data, loading } = useCMS("/api/testimonials", FALLBACK_TESTIMONIALS);
 *   const { data: tours }   = useCMS(ENDPOINT, FALLBACK_TOURS, toTour);
 */
export function useCMS(endpoint, fallback = [], transform = null) {
  const [data, setData]       = useState(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const base = import.meta.env.VITE_CMS_URL;
    // If no CMS URL is configured, keep fallback silently
    if (!base) { setLoading(false); return; }

    fetch(`${base}${endpoint}`)
      .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(json => {
        const docs = json.docs ?? json;
        setData(transform ? docs.map(transform) : docs);
      })
      .catch(() => { /* silently keep fallback data */ })
      .finally(() => setLoading(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint]);

  return { data, loading };
}

export function useScrolled(threshold = 50) {
  /* Initialise with current scroll — handles SPA navigation where scroll persists */
  const [scrolled, setScrolled] = useState(() => typeof window !== "undefined" && window.scrollY > threshold);

  useEffect(() => {
    /* Re-check on mount (catches navigations that don't fire scroll events) */
    setScrolled(window.scrollY > threshold);
    const fn = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, [threshold]);

  return scrolled;
}

export function useAutoCycle(length, ms = 3000) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % length), ms);
    return () => clearInterval(t);
  }, [length, ms]);
  return [active, setActive];
}
