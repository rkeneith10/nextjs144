import { Montserrat } from "next/font/google";
import Head from 'next/head';
import theWhiteLogo from "../public/images/logochange.png";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Keneith Salnave Romain",
  description: "Portfolio of Keneith Salnave Romain",
  head:[
    <link  key="icon" rel="icon" href={theWhiteLogo}s type="image/png"/>
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
