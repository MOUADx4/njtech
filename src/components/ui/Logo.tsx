import Link from "next/link";
import Image from "next/image";

export default function Logo({
  dark = false,
  priority = false,
}: {
  dark?: boolean;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Link href="/" aria-label="NJTECH Solution — Accueil">
      <Image
        src="/njtech-logo.png"
        alt="NJTECH Solution"
        width={140}
        height={93}
        priority={priority}
        style={{
          height: "auto",
          width: "140px",
          filter: dark ? "brightness(0) invert(1)" : "none",
          transition: "filter 0.3s ease",
        }}
      />
    </Link>
  );
}
