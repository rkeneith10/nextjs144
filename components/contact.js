"use client";
import React from "react";
import { useState } from "react";
import BackImage from "../public/images/bannerContact.jpeg";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [erreur, setErreur] = useState("");
  const [good, setGood] = useState("");
  const [loading, setLoading] = useState(false);
  //const [showGood, setShowGood] = useState(true);

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmail = async (e) => {
    e.preventDefault();

    // Si le loader est déjà en cours, ne rien faire
    if (loading) return;

    try {
      setLoading(true); // Affichez le loader au début de la fonction

      if (name.trim() === "" && email.trim() === "" && message.trim() === "") {
        setErreur("All fields must be completed");
      } else if (!regexEmail.test(email)) {
        setErreur("This email is invalid");
      } else {
        const response = await fetch("/api/sendEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            message: message,
          }),
        });

        if (response.ok) {
          setGood("Your Email was sent successfully");
          setEmail("");
          setMessage("");
          setName("");
        } else {
          setErreur("Failed to send email");
        }
      }
    } catch (error) {
      setErreur("An error occurred while sending the email");
    } finally {
      setLoading(false); // Masquez le loader, que la fonction ait réussi ou échoué
    }
  };

  // const handleClearGood = () => {
  //   setShowGood(!good);
  // };
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
              <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg
                  class="fill-current h-6 w-6 text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          )}

          {good && (
            <div
              class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <span class="block sm:inline">{good}.</span>
              <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg
                  onClick={handleClearGood}
                  class="fill-current h-6 w-6 text-green-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter your Name"
                id="nom"
                name="nom"
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
