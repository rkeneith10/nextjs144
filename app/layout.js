import { Inter, Outfit } from "next/font/google";
import theWhiteLogo from "../public/images/logochange.png";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata = {
  title: "Keneith-Salnave Romain | Developer",
  description: "Portfolio of Keneith-Salnave Romain, Fullstack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <link key="icon" rel="icon" href={theWhiteLogo.src} type="image/png" />
      </head>
      <body className="bg-slate-50 text-slate-900 font-sans antialiased selection:bg-cyan-500/30">
        {children}
      </body>
    </html>
  );
}
