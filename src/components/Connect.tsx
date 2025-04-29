"use client";

import React, { useRef } from "react";
import emailjs from "emailjs-com";
import SectionContainer from "./SectionContainer";

const Connect = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_rvus0lf",
        "template_b40xwsb",
        form.current,
        "5Bg69U6AZRci4hYw9"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <SectionContainer background="w-full max-w-[1440px] mx-auto mt-2 mb-2">
      <div className="px-4 md:px-8 lg:px-[120px] pb-0">
        <div className="bg-secondary w-full h-auto rounded-lg px-[60px]">
          <div className="text-center text-textPrimary text-[32px] font-semibold mb-5">
            CONNECT WITH ME
          </div>

          {/* FORM */}
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full h-[40px] bg-tertiary rounded-xl px-2"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full h-[40px] bg-tertiary rounded-xl px-2"
              />
            </div>

            <div className="flex flex-col">
              <textarea
                name="message"
                placeholder="Type your message here..."
                required
                className="w-full h-[160px] bg-tertiary rounded-xl px-2 py-2 resize-none"
              />
            </div>

            {/* BUTTON */}
            <div className="flex items-center justify-center mb-5">
              <button
                type="submit"
                className="w-[200px] h-[40px] bg-link flex items-center justify-center rounded-lg hover:bg-hover/75 transition-transform transform hover:scale-105 cursor-pointer"
              >
                <p className="text-[14px] font-semibold text-primary">
                  SEND MESSAGE
                </p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Connect;
