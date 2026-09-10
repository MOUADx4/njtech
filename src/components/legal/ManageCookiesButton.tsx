"use client";

export default function ManageCookiesButton() {
  return (
    <button
      onClick={() => window.dispatchEvent(new CustomEvent("njtech:open-cookies"))}
      className="tap-target text-body text-left text-white/55 transition-colors hover:text-white"
    >
      Gérer mes cookies
    </button>
  );
}
