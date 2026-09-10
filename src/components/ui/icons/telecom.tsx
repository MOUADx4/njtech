import type { SVGProps } from "react";

/**
 * Icônes métier dessinées sur mesure pour NJTECH.
 *
 * Les bibliothèques généralistes n'ont pas de pylône en treillis ni de
 * panneau sectoriel : leurs équivalents approximatifs donnaient au site un
 * air de gabarit. Ces quatre icônes reprennent la grille 24, le trait et les
 * terminaisons arrondies du reste du système, pour s'intégrer sans rupture.
 */

type IconProps = SVGProps<SVGSVGElement> & { strokeWidth?: number | string };

function Base({ strokeWidth = 1.5, children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

/** Pylône en treillis — aménagement de sites radio. */
export function IconPylone(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 2.2v2.8" />
      <path d="M9.6 5h4.8" />
      <path d="M9.6 5 6 20" />
      <path d="M14.4 5 18 20" />
      <path d="M8.64 9h6.72" />
      <path d="M7.68 13h8.64" />
      <path d="M8.64 9 16.32 13" />
      <path d="M15.36 9 7.68 13" />
      <path d="M4 20h16" />
    </Base>
  );
}

/** Panneau sectoriel et faisceau — déploiement d'antennes. */
export function IconAntenne(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="5.2" y="4" width="3.6" height="7" rx="1.3" />
      <path d="M7 11v9.5" />
      <path d="M4.5 20.5h5" />
      <path d="M11.6 7.6a5.5 5.5 0 0 1 0 7.8" />
      <path d="M14.3 5a9.3 9.3 0 0 1 0 13" />
      <path d="M17 2.4a13 13 0 0 1 0 18.2" />
    </Base>
  );
}

/** Plan technique coté — bureau d'étude. */
export function IconPlan(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M6 3h8l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M14 3v4h4" />
      <path d="M9.3 16.5 12 10l2.7 6.5" />
      <path d="M10.4 13.8h3.2" />
      <path d="M8 19h8" />
    </Base>
  );
}

/** Clé polygonale — maintenance et SAV. */
export function IconCle(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="16" cy="8" r="3.6" />
      <circle cx="16" cy="8" r="1.5" />
      <path d="M13.5 10.5 5.5 18.5" />
    </Base>
  );
}
