import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Abuja from "@/components/home/Abuja";
import Facts from "@/components/home/Facts";
import Drive from "@/components/home/Drive";
import GetTheApp from "@/components/home/GetTheApp";
import Articles from "@/components/home/Articles";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-ink">
        <Hero />
        <Services />
        <Abuja />
        <Facts />
        <Drive />
        <GetTheApp />
        <Articles />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
