import React from "react";
import { motion } from "framer-motion";

const certs = [
  {
    name: "Android Developer Virtual Internship",
    issuer: "Google for Developers, EduSkills & AICTE",
    isInternship: true,
    pdf: "/certificates/SHRISHTI PAREEK 781708.pdf"
  },

  {
    name: "Introduction to MongoDB",
    issuer: "MongoDB",
    isInternship: false,
    pdf: "/certificates/mongodb.pdf"
  },

  {
    name: "Basic Python",
    issuer: "Infosys Springboard",
    isInternship: false,
    pdf: "/certificates/springboot.pdf"
  },

  {
    name: "Java Bootcamp",
    issuer: "LetsUpgrade",
    isInternship: false,
    pdf: "/certificates/java_bootcamp.pdf"
  },

  {
    name: "Full Stack Web Journey Workshop",
    issuer: "Softpro India",
    isInternship: false,
    pdf: "/certificates/fullstack.png"
  },
  {
    name: " React.js",
    issuer: "Infosys Springboard",
    isInternship: false,
    pdf: "/certificates/react.js.pdf"
  }
  
];

const Certifications = () => {

  return (

    <section
      id="certifications"
      className="py-32"
    >

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}

        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          className="mb-16 text-center"
        >

          <p className="
          text-[#8A5A2B]
          uppercase
          tracking-[4px]
          text-sm
          mb-4">

            Milestones

          </p>

          <h2 className="
          text-4xl
          md:text-5xl
          font-bold
          text-[#3B2A1A]">

            Certifications & Experience

          </h2>

        </motion.div>


        {/* Cards */}

        <div className="
        grid
        md:grid-cols-2
        lg:grid-cols-3
        gap-8">

          {certs.map((cert,index)=>(

            <motion.a
              key={index}
              href={cert.pdf}
              target="_blank"
              rel="noreferrer"

              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ delay:index*0.1 }}

              className="
              block
              p-8
              rounded-[30px]
              bg-[#F9EAD9]
              border
              border-[#E2CDB5]
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-2
              transition-all
              cursor-pointer"
            >

              <div className="
              flex
              justify-between
              items-start
              mb-6">

                <div className="
                w-12
                h-12
                rounded-full
                flex
                items-center
                justify-center
                bg-[#EAD6C0]
                text-[#8A5A2B]
                text-xl">

                  {cert.isInternship ? "💼" : "✓"}

                </div>

                {cert.isInternship && (

                  <span className="
                  text-xs
                  px-3
                  py-1
                  rounded-full
                  bg-[#EAD6C0]
                  text-[#8A5A2B]
                  font-medium">

                    Internship

                  </span>

                )}

              </div>

              <h3 className="
              text-xl
              font-bold
              text-[#3B2A1A]
              mb-4">

                {cert.name}

              </h3>

              <p className="
              text-[#6F6256]
              leading-7">

                {cert.issuer}

              </p>


              <div className="mt-6">

                <span className="
                inline-block
                px-4
                py-2
                rounded-full
                bg-[#8A5A2B]
                text-white
                text-sm">

                  View Certificate

                </span>

              </div>

            </motion.a>

          ))}

        </div>

      </div>

    </section>

  );

};

export default Certifications;