"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// Offset to clear the fixed navbar (~80px)
const NAV_OFFSET = -88;

function scrollToHash(hash: string, lenis: Lenis | null, delay = 0) {
  const run = () => {
    const el = document.querySelector(hash);
    if (!el) return;
    if (lenis) {
      lenis.scrollTo(el as HTMLElement, { duration: 1.2, offset: NAV_OFFSET });
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  if (delay > 0) {
    setTimeout(run, delay);
  } else {
    run();
  }
}

export default function SmoothScroll() {
  const reduced  = useReducedMotion();
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  // ── Initialise Lenis once ──────────────────────────────────────────────────
  useEffect(() => {
    if (reduced) return;

    const lenis = new Lenis({
      duration:    1.15,
      easing:      (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [reduced]);

  // ── Cross-page navigation: reset top OR scroll to anchor ──────────────────
  // Delay > PageTransition duration (220ms) so elements are laid out
  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      // 450ms: 220ms page transition exit + ~230ms render/layout settle
      scrollToHash(hash, lenisRef.current, 450);
    } else {
      // Immediate reset — the page just changed
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [pathname]);

  // ── Same-page hash navigation (pathname unchanged) ────────────────────────
  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash;
      if (hash) scrollToHash(hash, lenisRef.current, 60);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
}
