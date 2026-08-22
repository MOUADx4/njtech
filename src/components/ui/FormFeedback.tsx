import { CheckCircle2, AlertCircle, RotateCcw } from "lucide-react";

interface Props {
  status:  "success" | "error";
  onReset: () => void;
  dark?:   boolean;
}

export default function FormFeedback({ status, onReset, dark = true }: Props) {
  if (status === "success") {
    return (
      <div className={`flex flex-col items-center gap-5 rounded-2xl border py-14 text-center ${
        dark
          ? "border-emerald-500/20 bg-emerald-500/[0.06]"
          : "border-emerald-200 bg-emerald-50"
      }`}>
        <div className="grid size-14 place-items-center rounded-full border border-emerald-500/30 bg-emerald-500/10">
          <CheckCircle2 className="size-7 text-emerald-400" />
        </div>
        <div>
          <p className={`text-[1.05rem] font-semibold ${dark ? "text-white" : "text-navy-900"}`}>
            Message envoyé avec succès !
          </p>
          <p className={`mt-2 text-[0.85rem] ${dark ? "text-white/45" : "text-navy-600/70"}`}>
            Notre équipe vous répondra sous 24h ouvrées.
          </p>
        </div>
        <button
          onClick={onReset}
          className={`inline-flex items-center gap-2 text-[0.78rem] font-medium transition-colors ${
            dark
              ? "text-white/35 hover:text-white/70"
              : "text-navy-400 hover:text-navy-700"
          }`}
        >
          <RotateCcw className="size-3.5" />
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center gap-4 rounded-2xl border py-10 text-center ${
      dark
        ? "border-red-500/20 bg-red-500/[0.05]"
        : "border-red-200 bg-red-50"
    }`}>
      <div className="grid size-12 place-items-center rounded-full border border-red-500/25 bg-red-500/10">
        <AlertCircle className="size-6 text-red-400" />
      </div>
      <div>
        <p className={`text-[0.95rem] font-semibold ${dark ? "text-white" : "text-navy-900"}`}>
          Une erreur est survenue
        </p>
        <p className={`mt-1.5 text-[0.82rem] ${dark ? "text-white/40" : "text-navy-600/65"}`}>
          Veuillez réessayer ou nous contacter par téléphone.
        </p>
      </div>
      <button
        onClick={onReset}
        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg border border-white/[0.1] bg-white/[0.05] px-5 py-2.5 text-[0.78rem] font-semibold text-white/60 transition-all hover:text-white"
      >
        <RotateCcw className="size-3.5" /> Réessayer
      </button>
    </div>
  );
}
