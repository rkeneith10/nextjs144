"use client";

const Footer = () => {
  return (
    <footer className="bg-slate-50 text-slate-600 py-8 border-t border-slate-200">
      <div className="container mx-auto text-center px-6">
        <p className="font-heading tracking-wide mb-2">&copy; {new Date().getFullYear()} Keneith-Salnave Romain | All rights reserved.</p>
        <p className="text-sm">Designed & Built by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-600 font-bold">Keneith Salnave Romain</span>.</p>
      </div>
    </footer>
  );
};

export default Footer;
