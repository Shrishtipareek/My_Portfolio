import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    value:"15+",
    label:"Projects"
  },
  {
    value:"12+",
    label:"Technologies"
  },
  {
    value:"500+",
    label:"Practice Hours"
  }
];

const About = () => {
  return (

    <section
      id="about"
      className="py-32"
    >

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="
        grid
        lg:grid-cols-2
        gap-16
        items-center">

          {/* LEFT */}

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
          >

            <p className="
            text-[#8A5A2B]
            uppercase
            tracking-[4px]
            text-sm
            mb-5">

              About Me

            </p>


            <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            leading-tight
            text-[#3B2A1A]">

              Passionate about creating
              modern and impactful
              digital experiences

            </h2>


            <p className="
            mt-8
            text-lg
            leading-9
            text-[#6F6256]">

              I'm Shrishti Pareek, a Computer
              Science student and Full Stack
              Developer passionate about creating
              intuitive user experiences and
              scalable applications.

            </p>


            <p className="
            mt-6
            text-lg
            leading-9
            text-[#6F6256]">

              I enjoy combining creativity with
              technology and solving real-world
              problems through clean, efficient
              and maintainable code.

            </p>

          </motion.div>



          {/* RIGHT CARDS */}

          <motion.div
            initial={{
              opacity:0,
              y:20
            }}
            whileInView={{
              opacity:1,
              y:0
            }}
            transition={{
              delay:.2
            }}
            viewport={{
              once:true
            }}
            className="
            grid
            gap-6"
          >

            {stats.map((item,index)=>(

              <div
                key={index}
                className="
                p-8
                rounded-[30px]
                bg-[#F9EAD9]
                border
                border-[#E2CDB5]
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                transition-all"
              >

                <h2 className="
                text-4xl
                font-bold
                text-[#8A5A2B]
                mb-3">

                  {item.value}

                </h2>

                <p className="
                text-[#6F6256]
                text-lg">

                  {item.label}

                </p>

              </div>

            ))}

          </motion.div>

        </div>

      </div>

    </section>

  );
};

export default About;