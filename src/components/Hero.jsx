import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";
import { Link } from "react-scroll";

const Hero = () => {

  const socials = [
    {
      icon:<FaGithub size={18}/>,
      link:"https://github.com/shrishtipareek"
    },
    {
      icon:<FaLinkedin size={18}/>,
      link:"https://linkedin.com"
    },
    {
      icon:<SiLeetcode size={18}/>,
      link:"https://leetcode.com/u/shrishtipareek"
    },
    {
      icon:<FaEnvelope size={18}/>,
      link:"mailto:shrishtipareek07@gmail.com"
    }
  ]

  return (

    <section
      id="home"
      className="min-h-screen flex items-center py-20"
    >

      <div className="
      max-w-7xl
      mx-auto
      px-6
      grid
      lg:grid-cols-2
      gap-14
      items-center">

        {/* LEFT IMAGE */}

        <motion.div
          initial={{opacity:0,x:-30}}
          animate={{opacity:1,x:0}}
          transition={{duration:.8}}
          className="flex justify-center"
        >

          <div className="relative">

            {/* Blob background */}

            <div
              className="
              w-[320px]
              h-[420px]
              md:w-[420px]
              md:h-[500px]
              bg-[#EAD6C0]
              rounded-[55%_45%_60%_40%/50%_60%_40%_50%]
              border-2
              border-[#B08A67]
              overflow-hidden
              shadow-xl"
            >

              <img
                src="/media/profile.jpeg"
                alt="Shrishti"
                className="
                w-full
                h-full
                object-cover"
              />

            </div>

          </div>

        </motion.div>


        {/* RIGHT CONTENT */}

        <motion.div
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          transition={{duration:.8}}
        >

          <p className="
          text-[#8A5A2B]
          font-medium
          mb-4">

            Welcome to my portfolio
          </p>


          <h1 className="
          text-5xl
          md:text-6xl
          font-bold
          leading-tight">

            Hey I'm {" "}

            <span className="text-[#8A5A2B]">

              Shrishti

            </span>

          </h1>

          <h2 className="
          mt-4
          text-3xl
          font-semibold">

            I'm a {" "}

            <span className="text-[#8A5A2B]">
              Full Stack Developer
            </span>

          </h2>


          <p className="
          mt-8
          leading-8
          text-[#6F6256]
          max-w-xl">

            Passionate about building modern web
            applications with clean UI, scalable
            backend systems and solving real-world
            problems through technology.

          </p>


          {/* Social Icons */}

          <div className="flex gap-4 mt-8">

            {socials.map((item,index)=>(

              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="
                w-12
                h-12
                rounded-full
                bg-[#8A5A2B]
                text-white
                flex
                items-center
                justify-center
                hover:scale-110
                transition"
              >

                {item.icon}

              </a>

            ))}

          </div>


          {/* Buttons */}

          <div className="
          flex
          gap-5
          mt-10
          flex-wrap">

            <Link
              to="projects"
              smooth
              duration={700}
            >

              <button
                className="
                px-8
                py-4
                rounded-lg
                bg-[#8A5A2B]
                text-white
                hover:scale-105
                transition"
              >

                View Projects

              </button>

            </Link>


            <Link
              to="contact"
              smooth
              duration={700}
            >

              <button
                className="
                px-8
                py-4
                rounded-lg
                border-2
                border-[#8A5A2B]
                hover:bg-[#8A5A2B]
                hover:text-white
                transition"
              >

                Contact Me

              </button>

            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;