import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import About from "../components/about";
import Services from "../components/services";

export default function Home() {
  return (
    <>
      <div className="w-full bg-center">
        <Navbar />
        <Banner />
        <About />
        <Services />
      </div>
    </>
  );
}
