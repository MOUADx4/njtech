"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { MessageSquare, X, RotateCcw } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Suggestion = { label: string; nextId: string };
type Node       = { message: string; suggestions: Suggestion[] };

const nodes: Record<string, Node> = {

  welcome: {
    message: "Bonjour, je suis l'assistant NJTECH.\nComment puis-je vous aider ?",
    suggestions: [
      { label: "Nos services",           nextId: "services"       },
      { label: "Nous contacter",         nextId: "contact"        },
      { label: "Nos partenaires",        nextId: "partners"       },
      { label: "Certifications",         nextId: "certifications" },
      { label: "À propos de NJTECH",     nextId: "about"          },
      { label: "Zone d'intervention",    nextId: "zone"           },
    ],
  },

  services: {
    message: "NJTECH couvre l'ensemble de la chaîne de valeur télécom 4G / 5G.\nQuel domaine vous intéresse ?",
    suggestions: [
      { label: "Aménagement de sites radio",       nextId: "s_amenagement" },
      { label: "Déploiement antennes & faisceaux", nextId: "s_antennes"    },
      { label: "Bureau d'étude",                   nextId: "s_bureau"      },
      { label: "Maintenance & SAV",                nextId: "s_maintenance" },
      { label: "← Accueil",                        nextId: "welcome"       },
    ],
  },
  s_amenagement: {
    message: "**Aménagement de sites radio**\n\nSites neufs ou existants — toits terrasses, pylônes, milieu urbain et rural.\nNous assurons la coordination complète : génie civil, installation des supports, mise en conformité.",
    suggestions: [
      { label: "Voir un autre service",   nextId: "services" },
      { label: "Nous contacter",          nextId: "contact"  },
      { label: "← Accueil",              nextId: "welcome"   },
    ],
  },
  s_antennes: {
    message: "**Déploiement antennes & faisceaux**\n\nInstallation et calage d'antennes sectorielles 4G / 5G, faisceaux hertziens PDH / SDH et équipements RAN (Nokia, Ericsson, Huawei).\nNos techniciens certifiés interviennent en hauteur avec tous les EPI.",
    suggestions: [
      { label: "Voir un autre service",   nextId: "services" },
      { label: "Nous contacter",          nextId: "contact"  },
      { label: "← Accueil",              nextId: "welcome"   },
    ],
  },
  s_bureau: {
    message: "**Bureau d'étude**\n\nProduction de l'ensemble des dossiers techniques : plans DP / DTB / DIM / APS / APD / DOE, photomontages, études de propagation et suivi de conformité réglementaire.",
    suggestions: [
      { label: "Voir un autre service",   nextId: "services" },
      { label: "Nous contacter",          nextId: "contact"  },
      { label: "← Accueil",              nextId: "welcome"   },
    ],
  },
  s_maintenance: {
    message: "**Maintenance & SAV**\n\nMaintenance préventive et corrective avec réactivité garantie sous 48h sur tout le territoire.\nDiagnostic, préparation matériel, vérification avant remise en service.",
    suggestions: [
      { label: "Voir un autre service",   nextId: "services" },
      { label: "Nous contacter",          nextId: "contact"  },
      { label: "← Accueil",              nextId: "welcome"   },
    ],
  },

  contact: {
    message: "Voici nos coordonnées :\n\n9 rue de l'Église, 93800 Épinay-sur-Seine\n\nStandard — 09 88 50 40 15\nDirection — 06 59 31 37 51\nEmail — contact@njtech.fr\n\nNous répondons sous 24h ouvrées.",
    suggestions: [
      { label: "Délais de réponse",       nextId: "contact_delais" },
      { label: "Envoyer un message",      nextId: "contact_form"   },
      { label: "← Accueil",              nextId: "welcome"         },
    ],
  },
  contact_delais: {
    message: "Notre équipe s'engage à répondre à toute demande sous **24h ouvrées**.\nPour les urgences SAV terrain, la réactivité est garantie sous **48h** sur l'ensemble du territoire.",
    suggestions: [
      { label: "← Retour contact",   nextId: "contact" },
      { label: "← Accueil",         nextId: "welcome"  },
    ],
  },
  contact_form: {
    message: "Pour nous soumettre votre projet en détail, utilisez notre formulaire de contact. Décrivez votre besoin — localisation, technologie, délais — et nous revenons vers vous rapidement.",
    suggestions: [
      { label: "← Retour contact",   nextId: "contact" },
      { label: "← Accueil",         nextId: "welcome"  },
    ],
  },

  partners: {
    message: "NJTECH intervient pour les grands opérateurs et intégrateurs nationaux :\n\nBouygues Telecom\nFree Mobile\nOrange\nSFR\nSogetrel\nCellnex\nTDF",
    suggestions: [
      { label: "Nos services pour ces opérateurs", nextId: "services" },
      { label: "Nous contacter",                   nextId: "contact"  },
      { label: "← Accueil",                        nextId: "welcome"  },
    ],
  },

  certifications: {
    message: "Nos équipes sont formées et certifiées pour garantir la sécurité et la qualité de chaque intervention : travaux en hauteur, habilitations électriques, conduite d'engins et dossiers techniques (DP · DIM · DOE).",
    suggestions: [
      { label: "Nos services",     nextId: "services" },
      { label: "Nous contacter",   nextId: "contact"  },
      { label: "← Accueil",       nextId: "welcome"   },
    ],
  },

  about: {
    message: "**NJTECH Solution** est spécialiste du déploiement, de l'intégration et de la maintenance des infrastructures télécom 4G et 5G en France.\n\nFondée en 2019, l'entreprise intervient pour les grands opérateurs nationaux avec plus de 7 ans d'expertise terrain.",
    suggestions: [
      { label: "Nos certifications",   nextId: "certifications" },
      { label: "Nos partenaires",      nextId: "partners"       },
      { label: "Chiffres clés",        nextId: "stats"          },
      { label: "← Accueil",           nextId: "welcome"         },
    ],
  },
  stats: {
    message: "NJTECH en chiffres :\n\n**7+** années d'expertise terrain\n**4G & 5G** réseaux déployés\n**24 / 7** disponibilité\n**100 %** couverture France métropolitaine",
    suggestions: [
      { label: "Nos services",     nextId: "services" },
      { label: "Nous contacter",   nextId: "contact"  },
      { label: "← Accueil",       nextId: "welcome"   },
    ],
  },

  zone: {
    message: "NJTECH intervient sur l'ensemble de la **France métropolitaine** — milieu urbain dense (Île-de-France, PACA, Grand Est…) comme en zones rurales et blanches nécessitant une couverture réseau.",
    suggestions: [
      { label: "Nous contacter pour un projet", nextId: "contact"  },
      { label: "Nos services",                  nextId: "services" },
      { label: "← Accueil",                     nextId: "welcome"  },
    ],
  },
};

function MessageText({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line, i, arr) => {
        const parts = line.split(/(\*\*.*?\*\*)/g);
        return (
          <span key={i}>
            {parts.map((part, j) =>
              part.startsWith("**") && part.endsWith("**")
                ? <strong key={j} className="font-semibold text-white">{part.slice(2, -2)}</strong>
                : part
            )}
            {i < arr.length - 1 && <br />}
          </span>
        );
      })}
    </>
  );
}

type ChatMessage = { role: "bot" | "user"; text: string };

export default function ChatBot() {
  const reduced = useReducedMotion();
  const [open,        setOpen]        = useState(false);
  const [history,     setHistory]     = useState<ChatMessage[]>([
    { role: "bot", text: nodes.welcome.message },
  ]);
  const [currentNode, setCurrentNode] = useState("welcome");
  const [animating,   setAnimating]   = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleSuggestion = useCallback((s: Suggestion) => {
    if (animating) return;
    const next = nodes[s.nextId];
    if (!next) return;
    setAnimating(true);
    setHistory(h => [...h, { role: "user", text: s.label }]);
    setTimeout(() => {
      setHistory(h => [...h, { role: "bot", text: next.message }]);
      setCurrentNode(s.nextId);
      setAnimating(false);
    }, 320);
  }, [animating]);

  const reset = useCallback(() => {
    setHistory([{ role: "bot", text: nodes.welcome.message }]);
    setCurrentNode("welcome");
  }, []);

  const suggestions = nodes[currentNode]?.suggestions ?? [];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">

      <div
        className={cn(
          "mb-3 flex w-[340px] max-w-[calc(100vw-3rem)] flex-col border border-white/[0.09] bg-[#070d18] shadow-2xl shadow-black/60 transition-all duration-300",
          open
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-95 opacity-0 pointer-events-none",
        )}
        style={{ maxHeight: "520px", transformOrigin: "bottom right" }}
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-white/[0.07] px-4 py-3.5">
          <div className="flex items-center gap-3">
            <Image
              src="/njtech-logo.png"
              alt="NJTECH"
              width={72}
              height={48}
              className="h-7 w-auto object-contain brightness-0 invert"
            />
            <div>
              <div className="text-[0.78rem] font-semibold text-white">Assistant NJTECH</div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className={cn("size-1.5 rounded-full bg-emerald-400", !reduced && "animate-pulse")} />
                <span className="text-[0.6rem] text-white/35 uppercase tracking-widest">En ligne</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={reset}
              className="grid size-7 place-items-center text-white/25 hover:text-white/70 transition-colors"
              aria-label="Réinitialiser"
              title="Nouvelle conversation"
            >
              <RotateCcw className="size-3.5" />
            </button>
            <button
              onClick={() => setOpen(false)}
              className="grid size-7 place-items-center text-white/25 hover:text-white transition-colors"
              aria-label="Fermer"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div
          className="flex-1 overflow-y-auto p-4 space-y-2.5"
          style={{ minHeight: 0 }}
          role="log"
          aria-live="polite"
          aria-label="Conversation avec l'assistant NJTECH"
        >
          {history.map((msg, i) => (
            <div
              key={i}
              className={cn(
                "flex",
                msg.role === "user" ? "justify-end" : "justify-start",
              )}
            >
              <div
                className={cn(
                  "max-w-[86%] px-3.5 py-2.5 text-[0.8rem] leading-[1.68]",
                  msg.role === "bot"
                    ? "border border-white/[0.07] bg-white/[0.04] text-white/72"
                    : "bg-signal-500 text-white",
                )}
              >
                <MessageText text={msg.text} />
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {animating && (
            <div className="flex justify-start" aria-label="L'assistant écrit…" aria-live="polite">
              <div className="border border-white/[0.07] bg-white/[0.04] px-4 py-3">
                <div className="flex items-center gap-1">
                  {[0, 1, 2].map(d => (
                    <span
                      key={d}
                      className={cn("size-1.5 rounded-full bg-white/30", !reduced && "animate-bounce")}
                      style={reduced ? undefined : { animationDelay: `${d * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Suggestions */}
        {!animating && suggestions.length > 0 && (
          <div className="shrink-0 border-t border-white/[0.07] p-3 space-y-1.5 overflow-y-auto" style={{ maxHeight: "180px" }}>
            <p className="text-[0.58rem] font-bold uppercase tracking-[0.22em] text-white/20 px-1 pb-0.5">
              Choisissez une option
            </p>
            {suggestions.map((s) => (
              <button
                key={s.label}
                onClick={() => handleSuggestion(s)}
                className="w-full cursor-pointer text-left px-3.5 py-2.5 text-[0.78rem] text-white/55 border border-white/[0.07] transition-all duration-150 hover:border-signal-500/40 hover:bg-white/[0.04] hover:text-white/90 active:scale-[0.99]"
              >
                {s.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={() => setOpen(v => !v)}
        aria-label={open ? "Fermer l'assistant" : "Ouvrir l'assistant NJTECH"}
        className="pointer-events-auto grid size-12 place-items-center bg-signal-500 text-white shadow-lg shadow-signal-500/25 transition-colors hover:bg-signal-600 active:scale-95"
      >
        {open
          ? <X className="size-5" />
          : <MessageSquare className="size-5" />
        }
      </button>
    </div>
  );
}
