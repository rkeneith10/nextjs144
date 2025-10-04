import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import About from "../components/about";
import Services from "../components/services";
import Contact from "../components/contact";
import Skills from "@/components/skilss";
import Portfolio from "../components/portfolio"; 
import WhatsAppButton from "@/components/whatsAppButton";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <>
      <div className="w-full bg-center">
        <Navbar />
        <Banner />
        <About />
        <Services />
        <Skills/>
        <Portfolio />
        <Contact/>
        <Footer/>
        <WhatsAppButton/>
      </div>
    </>
  );
}
