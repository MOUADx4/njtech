"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const GEO_URL = "/france-regions.geojson";

// Projection centrée sur la France métropolitaine (sans Corse par défaut)
const PROJECTION_CONFIG = {
  center:  [2.5, 46.5] as [number, number],
  scale:   2600,
};

// Régions à afficher (codes INSEE 2016 — on exclut la Corse 94)
const EXCLUDED = ["94"];

const REGION_LABELS: Record<string, string> = {
  "11": "Île-de-France",
  "24": "Centre-Val de Loire",
  "27": "Bourgogne-Franche-Comté",
  "28": "Normandie",
  "32": "Hauts-de-France",
  "44": "Grand Est",
  "52": "Pays de la Loire",
  "53": "Bretagne",
  "75": "Nouvelle-Aquitaine",
  "76": "Occitanie",
  "84": "Auvergne-Rhône-Alpes",
  "93": "Provence-Alpes-Côte d'Azur",
};

// Marqueurs clés [longitude, latitude]
const MARKERS = [
  { coords: [2.308,  48.960] as [number, number], label: "Épinay-sur-Seine", sub: "Siège social",        isHq: true  },
  { coords: [4.835,  45.764] as [number, number], label: "Lyon",              sub: "Zone d'intervention", isHq: false },
  { coords: [5.369,  43.297] as [number, number], label: "Marseille",         sub: "Zone d'intervention", isHq: false },
];

export default function FranceCoverageMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative w-full select-none">

      {/* Tooltip */}
      <div
        className={`pointer-events-none absolute left-3 top-3 z-10 rounded-xl border bg-white px-3.5 py-2.5 shadow-lg transition-all duration-150 ${
          hovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
        } ${hovered === "11" ? "border-orange-200" : "border-navy-100"}`}
      >
        <p className="text-[0.78rem] font-semibold leading-none text-navy-900">
          {hovered ? (REGION_LABELS[hovered] ?? "Région") : ""}
        </p>
        <p className={`mt-1 text-[0.65rem] font-medium ${hovered === "11" ? "text-orange-500" : "text-signal-500"}`}>
          {hovered === "11" ? "Siège social NJTECH" : "Zone d'intervention NJTECH"}
        </p>
      </div>

      <ComposableMap
        projection="geoMercator"
        projectionConfig={PROJECTION_CONFIG}
        style={{ width: "100%", height: "auto" }}
        viewBox="0 0 800 700"
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies
              .filter(geo => !EXCLUDED.includes(geo.properties.code))
              .map(geo => {
                const code     = geo.properties.code as string;
                const isHq     = code === "11";
                const isActive = hovered === code;

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => setHovered(code)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      default: {
                        fill:         isHq ? "#FFF7ED" : "#EFF6FF",
                        stroke:       isHq ? "#FB923C" : "#BFDBFE",
                        strokeWidth:  isHq ? 1.2 : 0.6,
                        outline:      "none",
                        cursor:       "pointer",
                        transition:   "fill 0.15s, stroke 0.15s",
                      },
                      hover: {
                        fill:        isHq ? "#FDBA74" : "#BAE6FD",
                        stroke:      isHq ? "#F97316" : "#0EA5E9",
                        strokeWidth: 1.5,
                        outline:     "none",
                        cursor:      "pointer",
                      },
                      pressed: {
                        fill:    isHq ? "#FED7AA" : "#7DD3FC",
                        outline: "none",
                      },
                    }}
                  />
                );
              })
          }
        </Geographies>

        {/* Marqueurs animés */}
        {MARKERS.map(m => (
          <Marker key={m.label} coordinates={m.coords}>
            <circle r={10} fill={m.isHq ? "#F97316" : "#0EA5E9"} opacity={0.18}>
              <animate
                attributeName="r"
                values="6;16;6"
                dur={m.isHq ? "1.6s" : "2.4s"}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.35;0;0.35"
                dur={m.isHq ? "1.6s" : "2.4s"}
                repeatCount="indefinite"
              />
            </circle>
            <circle
              r={5}
              fill={m.isHq ? "#F97316" : "#0EA5E9"}
              stroke="white"
              strokeWidth={1.5}
            />
          </Marker>
        ))}
      </ComposableMap>

      {/* Légende */}
      <div className="mt-3 flex flex-wrap items-center gap-5 text-[0.7rem] text-navy-500/65">
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-4 rounded-sm border border-orange-300 bg-[#FFF7ED]" />
          Île-de-France — Siège social
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-4 rounded-sm border border-blue-200 bg-[#EFF6FF]" />
          Couverture nationale
        </span>
      </div>
    </div>
  );
}
