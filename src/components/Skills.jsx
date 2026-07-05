import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "HTML",
      "CSS"
    ]
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs"
    ]
  },
  {
    category: "Database",
    skills: [
      "MongoDB",
      "MySQL"
    ]
  },
  {
    category: "Languages & Tools",
    skills: [
      "Core Java",
      "Git",
      "GitHub",
      "VS Code"
    ]
  }
];

const Skills = () => {
  return (

    <section
      id="skills"
      className="py-32"
    >

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}

        <motion.div
          initial={{
            opacity:0,
            y:20
          }}
          whileInView={{
            opacity:1,
            y:0
          }}
          viewport={{once:true}}
          className="mb-16 text-center"
        >

          <p className="
          text-[#8A5A2B]
          uppercase
          tracking-[4px]
          text-sm
          mb-4">

            Skills

          </p>

          <h2 className="
          text-4xl
          md:text-5xl
          font-bold
          text-[#3B2A1A]">

            Tech Stack & Tools

          </h2>

          <p className="
          mt-5
          max-w-2xl
          mx-auto
          text-[#6F6256]">

            Technologies and tools I use to build
            modern and scalable web applications.

          </p>

        </motion.div>


        {/* Cards */}

        <div className="
        grid
        md:grid-cols-2
        gap-8">

          {skillsData.map((category,index)=>(

            <motion.div
              key={index}
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
                delay:index*0.1
              }}
              className="
              p-8
              rounded-[30px]
              bg-[#F9EAD9]
              border
              border-[#E2CDB5]
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-2
              transition-all
              duration-500"
            >

              <h3 className="
              text-2xl
              font-semibold
              mb-8
              text-[#3B2A1A]">

                {category.category}

              </h3>


              <div className="
              flex
              flex-wrap
              gap-4">

                {category.skills.map((skill,i)=>(

                  <span
                    key={i}
                    className="
                    px-5
                    py-3
                    rounded-full
                    bg-[#EAD6C0]
                    text-[#5A4B40]
                    border
                    border-[#D8C0A8]
                    hover:bg-[#8A5A2B]
                    hover:text-white
                    transition"
                  >

                    {skill}

                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;