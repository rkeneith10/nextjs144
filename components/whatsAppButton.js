// Importez le style Tailwind pour le bouton WhatsApp
import { FaWhatsapp } from "react-icons/fa6";

const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=+50938396075"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:bg-[#1ebe57] rounded-full hover:-translate-y-1 transition-all duration-300"
    >
      <FaWhatsapp className="w-8 h-8 md:w-10 md:h-10 text-white" />
    </a>
  );
};

export default WhatsAppButton;
