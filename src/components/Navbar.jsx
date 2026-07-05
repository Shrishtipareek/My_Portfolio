import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Education", to: "education" },
  { name: "Contact", to: "contact" }
];

const Navbar = () => {

  const [isOpen,setIsOpen] = useState(false);
  const [scrolled,setScrolled] = useState(false);

  useEffect(()=>{

    const handleScroll=()=>{
      setScrolled(window.scrollY>30);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return ()=>window.removeEventListener(
      "scroll",
      handleScroll
    );

  },[]);

  return (

    <nav className="fixed top-5 left-0 right-0 z-50 px-6">

      <motion.div
        initial={{
          opacity:0,
          y:-20
        }}
        animate={{
          opacity:1,
          y:0
        }}
        className={`
        max-w-7xl
        mx-auto
        rounded-full
        transition-all
        duration-500
        
        ${
          scrolled
          ?
          "bg-[#F9EAD9]/80 backdrop-blur-lg shadow-md"
          :
          "bg-transparent"
        }
        `}
      >

        <div className="
        flex
        items-center
        justify-between
        px-8
        py-5">

          {/* Logo */}

          <Link
            to="home"
            smooth
            duration={700}
            className="cursor-pointer"
          >

            <h1 className="
            text-3xl
            font-bold
            text-[#3B2A1A]">

              Shrishti
              <span className="text-[#8A5A2B]">
                .
              </span>

            </h1>

          </Link>


          {/* Desktop */}

          <div className="
          hidden
          md:flex
          items-center
          gap-10">

            {navLinks.map((link)=>(

              <Link
                key={link.name}
                to={link.to}
                smooth
                duration={700}
                spy
                offset={-100}
                activeClass="text-[#8A5A2B]"
                className="
                cursor-pointer
                text-[#5A4B40]
                hover:text-[#8A5A2B]
                transition
                font-medium"
              >

                {link.name}

              </Link>

            ))}


            <Link
              to="contact"
              smooth
              duration={700}
            >

              <button
                className="
                px-6
                py-3
                rounded-full
                bg-[#8A5A2B]
                text-white
                hover:scale-105
                transition"
              >

                Contact Me

              </button>

            </Link>

          </div>


          {/* Mobile button */}

          <button
            onClick={()=>setIsOpen(!isOpen)}
            className="
            md:hidden
            text-[#8A5A2B]"
          >

            {
              isOpen
              ?
              <HiX size={30}/>
              :
              <HiMenu size={30}/>
            }

          </button>

        </div>

      </motion.div>


      {/* Mobile menu */}

      <AnimatePresence>

        {isOpen && (

          <motion.div
            initial={{
              opacity:0,
              y:-20
            }}
            animate={{
              opacity:1,
              y:0
            }}
            exit={{
              opacity:0,
              y:-20
            }}
            className="
            md:hidden
            mt-4
            rounded-3xl
            bg-[#F9EAD9]
            shadow-lg
            p-6"
          >

            <div className="
            flex
            flex-col
            gap-6">

              {navLinks.map((link)=>(

                <Link
                  key={link.name}
                  to={link.to}
                  smooth
                  duration={700}
                  onClick={()=>
                    setIsOpen(false)
                  }
                  className="
                  cursor-pointer
                  text-[#5A4B40]
                  hover:text-[#8A5A2B]"
                >

                  {link.name}

                </Link>

              ))}

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>

  );

};

export default Navbar;