import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Bouton unique du site.
 *
 * Avant ce composant, le même bouton d'action bleu était réécrit à la main
 * dans sept fichiers, avec quatre tailles de police et trois paddings
 * différents — et un coin arrondi isolé au milieu de boutons carrés. Toute
 * modification d'apparence passe désormais par ici.
 *
 * Rendu polymorphe : `href` produit un lien de navigation, son absence un
 * `<button>`.
 */

type Variant = "primary" | "secondary";
type Size = "sm" | "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  /** Action principale — aplat bleu signal, reflet au survol. */
  primary: "btn-shimmer bg-signal-500 text-white hover:bg-signal-600",
  /** Action secondaire sur fond sombre — contour seul. */
  secondary: "border border-white/[0.18] text-white/70 hover:border-white/40 hover:text-white",
};

const SIZES: Record<Size, string> = {
  sm: "px-5 py-2.5 text-body",
  md: "px-7 py-3.5 text-body-lg",
  lg: "px-8 py-3.5 text-body-lg",
};

/** Coins carrés : parti pris graphique du site, appliqué sans exception. */
const BASE =
  "tap-target inline-flex cursor-pointer items-center gap-2.5 font-semibold " +
  "transition-colors duration-200 active:scale-[0.98] " +
  "disabled:cursor-not-allowed disabled:opacity-60";

type Props = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  type = "button",
  disabled,
  className,
  ...rest
}: Props) {
  const classes = cn(BASE, VARIANTS[variant], SIZES[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={classes} {...rest}>
      {children}
    </button>
  );
}
