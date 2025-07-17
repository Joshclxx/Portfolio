"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function MessageButton() {
  const [isAboveFooter, setIsAboveFooter] = useState(true);
  const [footerHeight, setFooterHeight] = useState(0);
  const [isDrawerOpen, setIsDrawerIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");

    if (footer) {
      setFooterHeight(footer.clientHeight);

      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsAboveFooter(!entry.isIntersecting);
        },
        {
          root: null,
          threshold: 0,
        }
      );

      observer.observe(footer);

      return () => observer.disconnect();
    }
  }, []);

  const sendEmail = async () => {
    setIsSending(true);

    try {
      await emailjs.send(
        "service_l4lduxg",
        "template_5p2dsys",
        {
          email: email,
          message: message,
        },
        "LOsgwbpBX02yCLiH3"
      );

      toast.success("Message sent successfuly!");
      setEmail("");
      setMessage("");
      setIsDrawerIsOpen(false);
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Try again,");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <div
        className="fixed right-4 z-50 transition-all duration-300"
        style={{
          bottom: isAboveFooter ? "1rem" : `${footerHeight + 16}px`,
        }}
      >
        <button
          className="bg-[#64FFDA]/75 p-1 rounded-full shadow-lg hover:bg-[#64FFDA]"
          onClick={() => setIsDrawerIsOpen(true)}
        >
          <Image src="/icon/message.svg" alt="Message" height={45} width={45} />
        </button>
      </div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-full md:w-full lg:w-1/4 bg-[#2A2F3B] shadow-lg z-50 transform transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="title font-bold">Send a Message</h2>
          <button
            onClick={() => setIsDrawerIsOpen(false)}
            className="description"
          >
            &times;
          </button>
        </div>
        <div className="p-4 space-y-4">
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            required
            className="w-full p-2 border rounded"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            onClick={sendEmail}
            disabled={isSending}
            className="w-full bg-[#64FFDA]/75 py-2 text-[#1B263B] rounded hover:font-bold hover:bg-[#64FFDA]"
          >
            {isSending ? "Sending..." : "Submit"}
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-[#1b263b]/85 bg-opacity-50 z-40"
          onClick={() => setIsDrawerIsOpen(false)}
        />
      )}
    </>
  );
}
