import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

const Contact = () => {

  const [formData,setFormData]=useState({
    name:"",
    email:"",
    message:""
  });

  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData);
  };

  return (

    <section
      id="contact"
      className="py-32"
    >

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="
          text-[#8A5A2B]
          uppercase
          tracking-[4px]
          text-sm
          mb-4">

            Contact

          </p>

          <h2 className="
          text-4xl
          md:text-5xl
          font-bold
          text-[#3B2A1A]">

            Let's Work Together

          </h2>

          <p className="
          mt-6
          max-w-xl
          mx-auto
          text-[#6F6256]">

            Open to internships,
            collaborations and exciting
            opportunities.

          </p>

        </div>



        <div className="
        grid
        md:grid-cols-2
        gap-10">

          {/* Left */}

          <motion.div
            initial={{
              opacity:0,
              y:20
            }}
            whileInView={{
              opacity:1,
              y:0
            }}
            viewport={{
              once:true
            }}
            className="
            rounded-[30px]
            bg-[#F9EAD9]
            border
            border-[#E2CDB5]
            p-8
            shadow-sm"
          >

            <div className="space-y-6">

              <a
                href="mailto:shrishtipareek07@gmail.com"
                className="
                flex
                items-center
                gap-5
                p-4
                rounded-xl
                hover:bg-[#EAD6C0]
                transition"
              >

                <FaEnvelope
                size={22}
                className="text-[#8A5A2B]"
                />

                <span className="text-[#5A4B40]">

                  shrishtipareek07@gmail.com

                </span>

              </a>


              <a
                href="https://www.linkedin.com/in/shrishti-pareek-2899ab291"
                target="_blank"
                rel="noreferrer"
                className="
                flex
                items-center
                gap-5
                p-4
                rounded-xl
                hover:bg-[#EAD6C0]
                transition"
              >

                <FaLinkedin
                size={22}
                className="text-[#8A5A2B]"
                />

                <span className="text-[#5A4B40]">

                  LinkedIn

                </span>

              </a>

            </div>



            <div className="
            flex
            gap-4
            mt-10">

              <a
                href="https://github.com/shrishtipareek"
                target="_blank"
                rel="noreferrer"
                className="
                p-4
                rounded-full
                bg-[#EAD6C0]
                hover:bg-[#8A5A2B]
                hover:text-white
                transition"
              >

                <FaGithub size={20}/>

              </a>


              <a
                href="https://leetcode.com/u/shrishtipareek/"
                target="_blank"
                rel="noreferrer"
                className="
                p-4
                rounded-full
                bg-[#EAD6C0]
                hover:bg-[#8A5A2B]
                hover:text-white
                transition"
              >

                <SiLeetcode size={20}/>

              </a>

            </div>

          </motion.div>




          {/* Right */}

          <motion.div
            initial={{
              opacity:0,
              y:20
            }}
            whileInView={{
              opacity:1,
              y:0
            }}
            viewport={{
              once:true
            }}
            transition={{
              delay:.2
            }}
            className="
            rounded-[30px]
            bg-[#F9EAD9]
            border
            border-[#E2CDB5]
            p-8
            shadow-sm"
          >

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="
                w-full
                p-4
                rounded-xl
                bg-[#FFF6EE]
                border
                border-[#DCC4AB]
                outline-none
                focus:border-[#8A5A2B]"
              />


              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="
                w-full
                p-4
                rounded-xl
                bg-[#FFF6EE]
                border
                border-[#DCC4AB]
                outline-none
                focus:border-[#8A5A2B]"
              />


              <textarea
                rows="6"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="
                w-full
                p-4
                rounded-xl
                bg-[#FFF6EE]
                border
                border-[#DCC4AB]
                outline-none
                resize-none
                focus:border-[#8A5A2B]"
              />

              <button
                type="submit"
                className="
                w-full
                py-4
                rounded-xl
                bg-[#8A5A2B]
                text-white
                hover:scale-[1.02]
                transition"
              >

                Send Message

              </button>

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  );

};

export default Contact;