import Link from "next/link";
import Image from "next/image";
import HeroImage from "@/public/images/hero-image-01.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Cruip">
      <Image
        src={HeroImage}
        width={160}
        height={160}
        alt="Logo"
        priority
        style={{ borderRadius: 12 }}
      />
    </Link>
  );
}
