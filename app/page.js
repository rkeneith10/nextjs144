import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import About from "../components/about";
import Services from "../components/services";
import WhatsAppButton from "@/components/whatsAppButton";

export default function Home() {
  return (
    <>
      <div className="w-full bg-center">
        <Navbar />
        <Banner />
        <About />
        <Services />
        <WhatsAppButton/>
      </div>
    </>
  );
}
