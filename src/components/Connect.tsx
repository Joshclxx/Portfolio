"use client";

import React, { useRef } from "react";
import emailjs from "emailjs-com";
import SectionContainer from "./SectionContainer";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

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
          toast.success("Message set successfully!");
          form.current?.reset();
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
          form.current?.reset();
        }
      );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 14,
      },
    },
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <SectionContainer background="w-full max-w-[1440px] mx-auto mt-2 mb-2">
        <div className="px-4 md:px-8 lg:px-[120px] pb-0">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="bg-secondary w-full h-auto rounded-lg px-4 py-6"
          >
            {/* Title */}
            <motion.div variants={itemVariants}>
              <div className="text-center text-textPrimary text-[32px] font-semibold mb-5">
                CONNECT WITH ME
              </div>
            </motion.div>

            {/* Form */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4"
            >
              <motion.div
                variants={itemVariants}
                className="flex flex-col md:flex-row gap-4"
              >
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
              </motion.div>

              <motion.div variants={itemVariants}>
                <textarea
                  name="message"
                  placeholder="Type your message here..."
                  required
                  className="w-full h-[160px] bg-tertiary rounded-xl px-2 py-2 resize-none"
                />
              </motion.div>

              {/* Button */}
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center mb-5"
              >
                <button
                  type="submit"
                  className="w-[200px] h-[40px] bg-link flex items-center justify-center rounded-lg hover:bg-hover/75 transition-transform transform hover:scale-105 cursor-pointer"
                >
                  <p className="text-[14px] font-semibold text-primary">
                    SEND MESSAGE
                  </p>
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </SectionContainer>
    </>
  );
};

export default Connect;
