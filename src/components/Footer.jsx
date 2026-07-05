import React from "react";

const Footer = () => {

  return (

    <footer
      className="
      py-12
      mt-20
      border-t
      border-[#DCC4AB]
      relative
      z-10"
    >

      <div className="
      max-w-7xl
      mx-auto
      px-6
      text-center">

        <h3 className="
        text-2xl
        font-bold
        text-[#3B2A1A]
        mb-3">

          Shrishti
          <span className="text-[#8A5A2B]">
            .
          </span>

        </h3>

        <p className="
        text-[#6F6256]
        text-sm">

          © {new Date().getFullYear()} Shrishti Pareek.
          All rights reserved.

        </p>

        <p className="
        text-[#8A7A6D]
        text-xs
        mt-4">

          Designed & Built with React,
          Tailwind CSS and Framer Motion

        </p>

      </div>

    </footer>

  );

};

export default Footer;