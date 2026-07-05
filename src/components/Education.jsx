import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree:"B.Tech in Computer Science & Engineering",
    institution:"Axis Institute of Technology and Management",
    year:"2023–2027",
    score:"CGPA: 7.76",
    status:"active"
  },

  {
    degree:"Class XII",
    institution:"Kanya Kubja Public School",
    year:"2023",
    score:"66.4%",
    status:"completed"
  },

  {
    degree:"Class X",
    institution:"Kanya Kubja Public School",
    year:"2021",
    score:"80%",
    status:"completed"
  }
];

const Education = () => {

  return (

    <section
      id="education"
      className="py-32"
    >

      <div className="max-w-5xl mx-auto px-6 md:px-12">

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
          className="mb-16 text-center"
        >

          <p className="
          text-[#8A5A2B]
          uppercase
          tracking-[4px]
          text-sm
          mb-4">

            Education

          </p>

          <h2 className="
          text-4xl
          md:text-5xl
          font-bold
          text-[#3B2A1A]">

            Academic Journey

          </h2>

        </motion.div>



        {/* Timeline */}

        <div className="
        relative
        border-l-2
        border-[#D8C0A8]
        ml-4">

          {educationData.map((item,index)=>(

            <motion.div
              key={index}
              initial={{
                opacity:0,
                x:-30
              }}
              whileInView={{
                opacity:1,
                x:0
              }}
              viewport={{
                once:true
              }}
              transition={{
                delay:index*0.15
              }}
              className="
              mb-12
              ml-8
              relative"
            >

              {/* Dot */}

              <div
                className={`
                absolute
                -left-[42px]
                top-2
                w-5
                h-5
                rounded-full
                
                ${
                  item.status==="active"
                  ?
                  "bg-[#8A5A2B]"
                  :
                  "bg-[#EAD6C0]"
                }
                `}
              />



              {/* Card */}

              <div
                className="
                bg-[#F9EAD9]
                border
                border-[#E2CDB5]
                rounded-[30px]
                p-8
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                transition"
              >

                <div className="
                flex
                flex-col
                md:flex-row
                md:justify-between
                md:items-center
                gap-4">

                  <h3 className="
                  text-2xl
                  font-bold
                  text-[#3B2A1A]">

                    {item.degree}

                  </h3>

                  <span className="
                  text-[#8A5A2B]
                  font-medium">

                    {item.year}

                  </span>

                </div>


                <p className="
                mt-4
                text-[#6F6256]">

                  {item.institution}

                </p>


                {item.score && (

                  <div className="
                  inline-block
                  mt-5
                  px-4
                  py-2
                  rounded-full
                  bg-[#EAD6C0]
                  text-[#5A4B40]">

                    {item.score}

                  </div>

                )}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );

};

export default Education;