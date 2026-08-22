"use client";

import { useCallback, useEffect, useState } from "react";

export type ConsentStatus = "accepted" | "refused" | "partial" | null;

export interface ConsentState {
  status:    ConsentStatus;
  analytics: boolean;
  date:      string | null;
}

const STORAGE_KEY = "njtech-cookie-consent";

const DEFAULT: ConsentState = { status: null, analytics: false, date: null };

function readStorage(): ConsentState {
  if (typeof window === "undefined") return DEFAULT;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ConsentState) : DEFAULT;
  } catch {
    return DEFAULT;
  }
}

export function useConsent() {
  const [consent, setConsent] = useState<ConsentState>(DEFAULT);
  const [mounted,  setMounted] = useState(false);

  useEffect(() => {
    setConsent(readStorage());
    setMounted(true);
  }, []);

  const save = useCallback((next: Omit<ConsentState, "date">) => {
    const full: ConsentState = { ...next, date: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(full));
    setConsent(full);
  }, []);

  const accept    = useCallback(() => save({ status: "accepted", analytics: true  }), [save]);
  const refuse    = useCallback(() => save({ status: "refused",  analytics: false }), [save]);
  const customize = useCallback(
    (analytics: boolean) => save({ status: "partial", analytics }),
    [save],
  );
  const reset = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setConsent(DEFAULT);
  }, []);

  /* Allow any component to re-open the banner */
  const openBanner = useCallback(() => {
    window.dispatchEvent(new CustomEvent("njtech:open-cookies"));
  }, []);

  return { consent, mounted, accept, refuse, customize, reset, openBanner };
}
