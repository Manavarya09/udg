import Header from "@/components/ui/header";
import HeroHome from "@/components/hero-home";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-24 bg-gradient-to-b from-pink-800 to-pink-400 min-h-screen">
        <HeroHome />
      </main>
    </>
  );
}
