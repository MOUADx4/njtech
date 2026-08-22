"use client";

import { useState } from "react";

export type FormStatus = "idle" | "loading" | "success" | "error";

export function useContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form  = e.currentTarget;
    const data  = new FormData(form);

    setStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          /* Clé API Web3Forms — à définir dans .env.local
             NEXT_PUBLIC_WEB3FORMS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
             Obtenir gratuitement sur https://web3forms.com              */
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "",

          /* Objet de l'email reçu */
          subject:   `Nouveau contact NJTECH — ${data.get("name")} · ${data.get("company")}`,
          from_name: "Site NJTECH Solution",

          /* Honeypot anti-spam — Web3Forms rejette si rempli */
          botcheck: data.get("botcheck") ?? "",

          /*
           * "email" en minuscule = champ reconnu par Web3Forms pour :
           *   1. Définir le Reply-To de la notification (répondre directement au visiteur)
           *   2. Envoyer un email de confirmation automatique au visiteur
           *      → activer dans le dashboard Web3Forms :
           *        web3forms.com/dashboard → votre clé → "Auto Response" → ON
           *        Personnaliser l'objet et le message de confirmation là-bas.
           */
          email:    data.get("email"),
          replyto:  data.get("email"),

          /* Champs affichés dans la notification reçue */
          "Nom":                  data.get("name"),
          "Entreprise":           data.get("company"),
          "Téléphone":            data.get("phone"),
          "Type d'intervention":  data.get("type"),
          "Message":              data.get("message"),
        }),
      });

      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const reset = () => setStatus("idle");

  return { status, submit, reset };
}
