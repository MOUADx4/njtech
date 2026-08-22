"use client";

import { useEffect, useState } from "react";
import { Calendar, ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";

export interface LegalSection {
  id:    string;
  title: string;
}

interface Props {
  title:       string;
  lastUpdated: string;
  sections:    LegalSection[];
  children:    React.ReactNode;
}

export default function LegalLayout({ title, lastUpdated, sections, children }: Props) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  /* Highlight active TOC entry as user scrolls */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-15% 0px -70% 0px" },
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 pb-14 pt-40 text-white">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[28rem] w-[56rem] rounded-full bg-signal-600/[0.07] blur-[120px]" />
        <Container className="relative">
          <div className="section-label text-signal-400 mb-6">Informations légales</div>
          <h1 className="text-[2.2rem] font-semibold tracking-[-0.033em] text-white md:text-[3rem]">
            {title}
          </h1>
          <div className="mt-4 flex items-center gap-2 text-[0.75rem] text-white/38">
            <Calendar className="size-3.5" />
            Dernière mise à jour : <strong className="font-semibold text-white/55">{lastUpdated}</strong>
          </div>
          <div className="mt-10 h-px bg-gradient-to-r from-signal-500/40 via-signal-500/10 to-transparent" />
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[200px_1fr] xl:grid-cols-[220px_1fr]">

            {/* Sticky TOC sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="mb-4 text-[0.58rem] font-bold uppercase tracking-[0.24em] text-navy-400/70">
                  Sommaire
                </p>
                <nav className="space-y-0.5">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className={[
                        "flex items-center gap-2 rounded-lg px-3 py-2 text-[0.76rem] font-medium leading-snug transition-all duration-200",
                        active === s.id
                          ? "bg-signal-50 text-signal-600"
                          : "text-navy-400 hover:bg-navy-50 hover:text-navy-800",
                      ].join(" ")}
                    >
                      {active === s.id && (
                        <ChevronRight className="size-3 shrink-0 text-signal-500" />
                      )}
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Prose */}
            <div className="legal-prose min-w-0 max-w-3xl">
              {children}
            </div>
          </div>
        </Container>
      </section>

      <style>{`
        .legal-prose h2 {
          font-family: var(--font-space-grotesk), system-ui, sans-serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: #04091a;
          letter-spacing: -0.02em;
          margin-top: 2.75rem;
          margin-bottom: 0.9rem;
          padding-top: 2rem;
          border-top: 1px solid #e5eaf5;
          scroll-margin-top: 6rem;
        }
        .legal-prose h2:first-of-type {
          margin-top: 0;
          padding-top: 0;
          border-top: none;
        }
        .legal-prose h3 {
          font-family: var(--font-space-grotesk), system-ui, sans-serif;
          font-size: 0.98rem;
          font-weight: 600;
          color: #163182;
          margin-top: 1.6rem;
          margin-bottom: 0.5rem;
          scroll-margin-top: 6rem;
        }
        .legal-prose p {
          font-size: 0.9rem;
          line-height: 1.85;
          color: #2e3f62;
          margin-bottom: 0.9rem;
        }
        .legal-prose ul, .legal-prose ol {
          margin: 0.6rem 0 1rem 1.4rem;
        }
        .legal-prose ul { list-style: disc; }
        .legal-prose ol { list-style: decimal; }
        .legal-prose li {
          font-size: 0.9rem;
          line-height: 1.78;
          color: #2e3f62;
          margin-bottom: 0.3rem;
        }
        .legal-prose a {
          color: #0397e7;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .legal-prose a:hover { color: #0076c2; }
        .legal-prose strong {
          font-weight: 600;
          color: #04091a;
        }
        .legal-prose .note {
          background: #f0f7ff;
          border-left: 3px solid #0397e7;
          border-radius: 0 8px 8px 0;
          padding: 0.9rem 1.1rem;
          margin: 1.2rem 0;
          font-size: 0.86rem;
          color: #0369a1;
          line-height: 1.72;
        }
        .legal-prose .warn {
          background: #fffbeb;
          border-left: 3px solid #f59e0b;
          border-radius: 0 8px 8px 0;
          padding: 0.9rem 1.1rem;
          margin: 1.2rem 0;
          font-size: 0.86rem;
          color: #78350f;
          line-height: 1.72;
        }
        .legal-prose table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.87rem;
          margin: 1.2rem 0;
        }
        .legal-prose th {
          background: #f5f8ff;
          font-weight: 600;
          color: #04091a;
          text-align: left;
          padding: 0.6rem 0.9rem;
          border: 1px solid #e0e8f5;
        }
        .legal-prose td {
          padding: 0.55rem 0.9rem;
          border: 1px solid #e0e8f5;
          color: #2e3f62;
          vertical-align: top;
        }
        .legal-prose tr:nth-child(even) td { background: #f9fbff; }
      `}</style>
    </>
  );
}
