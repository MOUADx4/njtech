"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export default function SectionHeader({
  label,
  title,
  description,
  align = "left",
  dark = false,
  className,
}: {
  label?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {label && (
        <motion.div
          initial={{ opacity: 0, x: align === "center" ? 0 : -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "section-label mb-7",
            align === "center" && "justify-center",
            dark ? "text-signal-400" : "text-signal-600",
          )}
        >
          {label}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: label ? 0.07 : 0 }}
        className={cn(
          "text-balance font-semibold tracking-[-0.033em]",
          "text-[2.3rem] leading-[1.08] md:text-[3rem] md:leading-[1.06] lg:text-[3.6rem] lg:leading-[1.05]",
          dark ? "text-white" : "text-navy-950",
        )}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.17 }}
          className={cn(
            "mt-6 text-pretty leading-[1.8]",
            "text-[0.98rem] md:text-[1.07rem]",
            dark ? "text-white/52" : "text-navy-700/65",
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
