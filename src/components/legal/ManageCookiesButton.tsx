"use client";

export default function ManageCookiesButton() {
  return (
    <button
      onClick={() => window.dispatchEvent(new CustomEvent("njtech:open-cookies"))}
      className="text-[0.8rem] text-white/38 transition-colors hover:text-white text-left"
    >
      Gérer mes cookies
    </button>
  );
}
