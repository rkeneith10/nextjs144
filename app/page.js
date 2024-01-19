import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import About from "../components/about";
import Services from "../components/services";
import Contact from "../components/contact";
import Skills from "@/components/skilss";
import WhatsAppButton from "@/components/whatsAppButton";
import Footer from "@/components/footer";
import Navbar2 from "@/components/navbar2";

export default function Home() {
  return (
    <>
      <div className="w-full bg-center">
        <Navbar2 />
        <Banner />
        <About />
        <Services />
        <Skills/>
        <Contact/>
        <Footer/>
        <WhatsAppButton/>
      </div>
    </>
  );
}
