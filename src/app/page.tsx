import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import Split from "@/components/home/Split";
import Showcase from "@/components/home/Showcase";
import Confidence from "@/components/home/Confidence";
import Numbers from "@/components/home/Numbers";
import AppBand from "@/components/home/AppBand";
import ClosingCta from "@/components/home/ClosingCta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-ink">
        <Hero />
        <Intro />
        <Split />
        <Showcase />
        <Confidence />
        <Numbers />
        <AppBand />
        <ClosingCta />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
