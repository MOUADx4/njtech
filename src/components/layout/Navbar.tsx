"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { cn } from "@/lib/cn";

const links = [
  { href: "/a-propos",     label: "À propos"     },
  { href: "/services",     label: "Prestations"  },
  { href: "/realisations", label: "Réalisations" },
  { href: "/contact",      label: "Contact"      },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const pathname                = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on navigation
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close menu on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isDark = !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/92 backdrop-blur-2xl border-b border-navy-100/45 py-3 shadow-[0_1px_12px_rgba(10,31,68,0.07)]"
            : "bg-transparent py-5",
        )}
      >
        <Container className="flex items-center justify-between">

          <Logo dark={isDark} priority />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0 lg:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "relative px-4 py-2 text-[0.82rem] font-medium tracking-[-0.005em] transition-colors duration-200",
                  isDark
                    ? "text-white/60 hover:text-white"
                    : "text-navy-600 hover:text-navy-900",
                  pathname === l.href && !isDark && "text-navy-900",
                  pathname === l.href && isDark  && "text-white",
                )}
              >
                {l.label}
                {pathname === l.href && (
                  <span className="absolute inset-x-4 bottom-0 h-px rounded-full bg-signal-500" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center lg:flex">
            <Link
              href="/contact"
              className={cn(
                "btn-shimmer inline-flex items-center gap-2 px-5 py-2.5 text-[0.82rem] font-semibold transition-all duration-200 active:scale-[0.98]",
                scrolled
                  ? "bg-navy-950 text-white hover:bg-navy-800"
                  : "border border-white/[0.18] text-white/80 hover:border-white/40 hover:text-white",
              )}
            >
              Nous contacter
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "grid size-9 cursor-pointer place-items-center rounded-lg transition-all duration-200 lg:hidden",
              isDark
                ? "border border-white/[0.18] text-white hover:bg-white/[0.09]"
                : "border border-navy-200 bg-white text-navy-900 hover:bg-navy-50",
            )}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0,   opacity: 1 }}
                exit={{   rotate:  90,  opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="flex"
              >
                {open ? <X className="size-4" /> : <Menu className="size-4" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </Container>
      </header>

      {/* ── Mobile menu — full-height slide-in from right ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-navy-950/60 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: [0.32, 0, 0.15, 1] }}
              className="noise fixed inset-y-0 right-0 z-50 flex w-full max-w-[18rem] flex-col bg-navy-950 px-6 pt-24 pb-10 lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navigation"
            >
              {/* Links */}
              <nav className="flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-3.5 text-[0.95rem] font-medium transition-colors",
                        pathname === l.href
                          ? "bg-white/[0.08] text-white"
                          : "text-white/55 hover:bg-white/[0.05] hover:text-white",
                      )}
                    >
                      {l.label}
                      {pathname === l.href && (
                        <span className="h-1.5 w-1.5 rounded-full bg-signal-400" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Divider */}
              <div className="my-6 h-px bg-white/[0.07]" />

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.35 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="btn-shimmer flex items-center justify-between bg-signal-500 px-5 py-3.5 text-[0.9rem] font-semibold text-white transition-colors hover:bg-signal-600 active:scale-[0.98]"
                >
                  Nous contacter
                  <ArrowRight className="size-4" />
                </Link>
              </motion.div>

              {/* Bottom contact info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.42 }}
                className="mt-auto"
              >
                <a href="tel:+33988504015" className="block text-[0.75rem] text-white/45 transition-colors hover:text-white/70">
                  09 88 50 40 15
                </a>
                <a href="mailto:contact@njtech-solution.fr" className="mt-1 block text-[0.75rem] text-white/45 transition-colors hover:text-white/70">
                  contact@njtech-solution.fr
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
