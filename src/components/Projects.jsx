import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "StaySphere",

    description:
      "Travel accommodation platform with authentication, booking flow and complete CRUD functionality.",

    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "EJS",
      "Bootstrap"
    ],

    image: "./dist/media/staysphere.png",

    github:"https://github.com/Shrishtipareek/StaySphere.git",
    live:"#"
  },

  {
    title:"Zerodha Clone",

    description:
      "Trading dashboard with portfolio tracking, holdings management and simulated order APIs.",

    tech:[
      "React",
      "Node.js",
      "MongoDB",
      "Material UI"
    ],

    image:"/media/zerodha.png",

    github:"#",
    live:"#"
  }
];

const Projects = () => {

  return (

    <section
      id="projects"
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
          viewport={{
            once:true
          }}
          className="text-center mb-16"
        >

          <p className="
          text-[#8A5A2B]
          uppercase
          tracking-[4px]
          mb-4
          text-sm">

            Portfolio

          </p>


          <h2 className="
          text-4xl
          md:text-5xl
          font-bold
          text-[#3B2A1A]">

            Featured Projects

          </h2>


          <p className="
          mt-5
          max-w-2xl
          mx-auto
          text-[#6F6256]">

            A collection of projects showcasing
            full-stack development and modern UI design.

          </p>

        </motion.div>



        {/* Projects Grid */}

        <div className="
        grid
        md:grid-cols-2
        gap-10">

          {projects.map((project,index)=>(

            <motion.div
              key={index}
              initial={{
                opacity:0,
                y:30
              }}
              whileInView={{
                opacity:1,
                y:0
              }}
              viewport={{
                once:true
              }}
              transition={{
                delay:index*.1
              }}
              className="
              rounded-[30px]
              overflow-hidden
              bg-[#F9EAD9]
              border
              border-[#E2CDB5]
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-2
              transition-all
              duration-500"
            >

              {/* Image */}

              <div className="
              h-[240px]
              overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                  w-full
                  h-full
                  object-cover
                  hover:scale-105
                  transition
                  duration-700"
                />

              </div>


              {/* Content */}

              <div className="p-8">

                <h3 className="
                text-2xl
                font-bold
                text-[#3B2A1A]
                mb-4">

                  {project.title}

                </h3>


                <p className="
                text-[#6F6256]
                leading-8
                mb-6">

                  {project.description}

                </p>


                {/* Tech tags */}

                <div className="
                flex
                flex-wrap
                gap-3
                mb-8">

                  {project.tech.map((tech,i)=>(

                    <span
                      key={i}
                      className="
                      px-4
                      py-2
                      rounded-full
                      bg-[#EAD6C0]
                      border
                      border-[#D8C0A8]
                      text-[#5A4B40]
                      text-sm"
                    >

                      {tech}

                    </span>

                  ))}

                </div>


                {/* Buttons */}

                <div className="flex gap-6">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    flex
                    items-center
                    gap-2
                    text-[#5A4B40]
                    hover:text-[#8A5A2B]
                    transition"
                  >

                    <FaGithub/>

                    Code

                  </a>


                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    flex
                    items-center
                    gap-2
                    text-[#5A4B40]
                    hover:text-[#8A5A2B]
                    transition"
                  >

                    <FaExternalLinkAlt/>

                    Live

                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

};

export default Projects;