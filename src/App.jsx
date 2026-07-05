import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#F6E6D3] text-[#3B2A1A] overflow-x-hidden relative">

      {/* Soft background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-[-150px] right-[-100px] 
        w-[400px] h-[400px] rounded-full 
        bg-[#E7D3BE] blur-[120px]" />

        <div className="absolute bottom-[-100px] left-[-100px] 
        w-[350px] h-[350px] rounded-full 
        bg-[#E9DCCF] blur-[100px]" />

      </div>

      {/* Loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.7 }
            }}
            className="fixed inset-0 z-50 bg-[#F6E6D3] flex flex-col items-center justify-center"
          >
            <motion.h1
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: .8
              }}
              className="text-5xl font-bold"
            >
              Shrishti
              <span className="text-[#8A5A2B]">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: .7 }}
              transition={{ delay: .3 }}
              className="mt-4 tracking-[4px] uppercase text-sm"
            >
              Full Stack Developer
            </motion.p>

            <div className="w-48 h-[4px] bg-[#DCC4AB] rounded-full mt-8 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 1.2
                }}
                className="h-full bg-[#8A5A2B]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />

      <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Contact />

      </main>

      <Footer />

    </div>
  );
}

export default App;