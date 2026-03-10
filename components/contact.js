"use client";
import { useEffect, useState } from "react";
import BackImage from "../public/images/bannerContact.jpeg";

const Contact = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [erreur, setErreur] = useState("");
  const [good, setGood] = useState("");
  const [loading, setLoading] = useState(false);

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setErreur("");
      setGood("");
    }, 3000);
    return () => clearTimeout(timeOutId);
  }, [erreur, good]);

  const handleEmail = async (e) => {
    e.preventDefault();

    if (loading) return;

    try {
      setLoading(true);

      if (
        formData.userName.trim() === "" ||
        formData.email.trim() === "" ||
        formData.message.trim() === ""
      ) {
        setErreur("All fields must be completed.");
      } else if (!regexEmail.test(formData.email)) {
        setErreur("This email is invalid.");
      } else {
        const response = await fetch("/api/sendEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.userName,
            email: formData.email,
            message: formData.message,
          }),
        });

        if (response.ok) {
          setGood("Your Email was sent successfully!");
          setFormData({
            userName: "",
            email: "",
            message: "",
          });
        } else {
          setErreur("Failed to send email. Please try again.");
        }
      }
    } catch (error) {
      setErreur("An error occurred while sending the email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="relative py-24 bg-white bg-center bg-cover bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${BackImage.src})` }}
    >
      {/* Light overlay for better text readability */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Contact Info container */}
        <div className="w-full lg:w-1/2">
          <div className="mb-6">
            <h2 className="text-4xl font-heading font-bold text-slate-900 relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-600">Get in</span> Touch
              <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full"></div>
            </h2>
          </div>
          <p className="text-lg text-slate-700 font-sans leading-relaxed mb-8 max-w-lg">
            Feel free to contact me by submitting the form below. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. I will get back to you as soon as possible!
          </p>

          <div className="space-y-4">
            {erreur && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-6 py-4 rounded-xl flex items-center gap-3 animate-fade-in-up">
                <span className="font-semibold">{erreur}</span>
              </div>
            )}
            {good && (
              <div className="bg-green-50 border border-green-200 text-green-600 px-6 py-4 rounded-xl flex items-center gap-3 animate-fade-in-up">
                <span className="font-semibold">{good}</span>
              </div>
            )}
          </div>
        </div>

        {/* Form Container */}
        <div className="w-full lg:w-1/2 max-w-lg mx-auto lg:mr-0">
          <div className="bg-white/90 p-8 rounded-3xl border border-slate-200 shadow-xl backdrop-blur-md">
            <form className="flex flex-col gap-6" onSubmit={handleEmail}>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="userName" className="text-sm font-semibold text-slate-700 tracking-wide uppercase">Name</label>
                <input
                  value={formData.userName}
                  onChange={handleChange}
                  type="text"
                  placeholder="John Doe"
                  id="userName"
                  name="userName"
                  className="bg-slate-50 border border-slate-200 rounded-xl w-full p-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all bg-opacity-70"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-slate-700 tracking-wide uppercase">Email</label>
                <input
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="john@example.com"
                  id="email"
                  name="email"
                  className="bg-slate-50 border border-slate-200 rounded-xl w-full p-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all bg-opacity-70"
                />
              </div>

              <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700 tracking-wide uppercase">Message</label>
                <textarea
                  value={formData.message}
                  onChange={handleChange}
                  id="message"
                  name="message"
                  placeholder="How can I help you?"
                  rows="5"
                  className="bg-slate-50 border border-slate-200 rounded-xl w-full p-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none bg-opacity-70"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white py-4 rounded-xl font-bold tracking-wide shadow-md shadow-indigo-500/20 hover:shadow-cyan-500/30 transition-all transform hover:-translate-y-1 ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Sending Message..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
