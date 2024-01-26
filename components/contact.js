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
    }, 1500);
    return () => clearTimeout(timeOutId);
  }, [erreur, good]);

  const handleEmail = async (e) => {
    e.preventDefault();

    // Si le loader est déjà en cours, ne rien faire
    if (loading) return;

    try {
      setLoading(true);

      if (
        formData.userName.trim() === "" &&
        formData.email.trim() === "" &&
        formData.message.trim() === ""
      ) {
        setErreur("All fields must be completed");
      } else if (!regexEmail.test(formData.email)) {
        setErreur("This email is invalid");
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
          setGood("Your Email was sent successfully");

          setFormData({
            userName: "",
            email: "",
            message: "",
          });
        } else {
          setErreur("Failed to send email");
        }
      }
    } catch (error) {
      setErreur("An error occurred while sending the email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="h-[750px] lg:h-[550px] max-w-screen-2xl mx-auto flex flex-col  p-7 lg:p-40 lg:pt-5 bg-center bg-cover bg-no-repeat "
      style={{ backgroundImage: `url(${BackImage.src})` }}
    >
      <div className="max-w-screen">
        <div className="container mx-auto  text-white">
          <div className="text-3xl font-bold">
            <span className="underline">C</span>ontact
          </div>
          <br />
          <div className="text-xl">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </div>
          {erreur && (
            <div
              class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <span class="block sm:inline">{erreur}.</span>
              <span class="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
            </div>
          )}

          {good && (
            <div
              class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <span class="block sm:inline">{good}.</span>
              <span class="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
            </div>
          )}
        </div>
        <br />
        <div className="  h-[300px] w-auto rounded-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                htmlFor="nom"
                className="block text-white text-xl font-bold"
              >
                Name
              </label>
              <input
                value={formData.userName}
                onChange={handleChange}
                type="text"
                placeholder="Enter your Name"
                id="userName"
                name="userName"
                className="border rounded-md w-full p-2"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-white text-xl font-bold"
              >
                E-mail
              </label>
              <input
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Enter your Email"
                id="email"
                name="email"
                className="border rounded-md w-full p-2"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-white text-xl font-bold"
            >
              Message
            </label>
            <textarea
              value={formData.message}
              onChange={handleChange}
              id="message"
              name="message"
              placeholder="Enter your Message"
              rows="8"
              className="border rounded-md w-full p-2 resize-none"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleEmail}
              disabled={loading}
              type="submit"
              className={`bg-gray-900 text-white p-4 rounded ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
