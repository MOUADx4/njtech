"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Image from "next/image";

const ParticleNetwork = dynamic(() => import("./ParticleNetwork"), { ssr: false });

export default function HeroBackground({ interactive = true }: { interactive?: boolean }) {
  const [videoError, setVideoError] = useState(false);
  const [isDesktop,  setIsDesktop]  = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Base dark layer */}
      <div className="absolute inset-0 bg-[#020816]" />

      {/* Video — desktop only, preload deferred */}
      {isDesktop && !videoError && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          onError={() => setVideoError(true)}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          style={{ filter: "saturate(0.6) brightness(0.55)" }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      )}

      {/* Ken Burns static image — Next.js Image with priority for LCP */}
      <div
        className="absolute inset-0 opacity-25 overflow-hidden"
        style={{ animation: isDesktop ? "kenBurns 22s ease-in-out infinite alternate" : "none" }}
      >
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Gradient blobs — reduced on mobile */}
      <div className="absolute -top-60 left-1/3 h-[600px] w-[600px] sm:h-[900px] sm:w-[900px] rounded-full opacity-100"
        style={{ background: "radial-gradient(circle, rgba(14,165,233,0.14) 0%, transparent 65%)", animation: "blobA 18s ease-in-out infinite" }} />
      <div className="absolute -bottom-40 right-1/4 h-[450px] w-[450px] sm:h-[700px] sm:w-[700px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(56,189,248,0.09) 0%, transparent 65%)", animation: "blobB 22s ease-in-out infinite" }} />

      {/* Extra blobs — desktop only */}
      {isDesktop && (
        <>
          <div className="absolute top-1/2 -left-60 h-[600px] w-[600px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(79,70,229,0.07) 0%, transparent 65%)", animation: "blobC 26s ease-in-out infinite" }} />
          <div className="absolute -top-10 right-1/3 h-[400px] w-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 65%)", animation: "blobD 20s ease-in-out infinite reverse" }} />

          {/* Light streaks */}
          <svg className="absolute inset-0 h-full w-full opacity-25" aria-hidden>
            <defs>
              <linearGradient id="streak1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="rgba(56,189,248,0.8)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <linearGradient id="streak2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="rgba(99,102,241,0.6)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <line x1="-20%" y1="30%" x2="120%" y2="30%" stroke="url(#streak1)" strokeWidth="1"
              style={{ animation: "streakPass 8s ease-in-out infinite", opacity: 0 }} />
            <line x1="-20%" y1="55%" x2="120%" y2="52%" stroke="url(#streak1)" strokeWidth="0.5"
              style={{ animation: "streakPass 11s ease-in-out infinite 3s", opacity: 0 }} />
            <line x1="-20%" y1="72%" x2="120%" y2="70%" stroke="url(#streak2)" strokeWidth="0.8"
              style={{ animation: "streakPass 9s ease-in-out infinite 5s", opacity: 0 }} />
          </svg>

          {/* Particle canvas — desktop only */}
          <ParticleNetwork interactive={interactive} />
        </>
      )}

      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#020816] to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#020816]/60 to-transparent" />

      <style>{`
        @keyframes kenBurns {
          0%   { transform: scale(1)    translate(0, 0); }
          100% { transform: scale(1.12) translate(-3%, -2%); }
        }
        @keyframes blobA {
          0%,100% { transform:translate(0,0) scale(1); }
          33%      { transform:translate(80px,-60px) scale(1.1); }
          66%      { transform:translate(-50px,40px) scale(0.93); }
        }
        @keyframes blobB {
          0%,100% { transform:translate(0,0) scale(1); }
          40%      { transform:translate(-90px,60px) scale(1.12); }
          70%      { transform:translate(55px,-40px) scale(0.91); }
        }
        @keyframes blobC {
          0%,100% { transform:translate(0,0) scale(1); }
          50%      { transform:translate(70px,-80px) scale(1.14); }
        }
        @keyframes blobD {
          0%,100% { transform:translate(0,0) scale(1); }
          45%      { transform:translate(-60px,50px) scale(1.08); }
        }
        @keyframes streakPass {
          0%   { opacity:0; stroke-dashoffset:1000; stroke-dasharray:0 1000; }
          10%  { opacity:1; }
          50%  { opacity:0.6; stroke-dasharray:400 600; stroke-dashoffset:0; }
          100% { opacity:0; stroke-dasharray:0 1000; stroke-dashoffset:-1000; }
        }
      `}</style>
    </div>
  );
}
