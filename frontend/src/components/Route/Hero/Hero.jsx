import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className={`relative min-h-screen w-full bg-cover bg-center flex items-center justify-center text-center 800px:text-left`} 
      style={{
        backgroundImage: "url(https://res.cloudinary.com/drthsaowz/image/upload/v1740480807/assets/na9tscyef3pdowspageg.jpg)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-[90%] 800px:w-[60%]"
      >
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[40px] leading-tight 800px:text-[65px] text-white font-bold"
        >
          Learn from the Best, <br className="hidden 800px:block" /> Anytime, Anywhere
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 text-[18px] font-[Poppins] font-[400] text-white leading-[1.6]"
        >
          Join a diverse marketplace of top instructors and industry experts.<br/> Get access to high-quality courses across multiple domains.
        </motion.p>
        <Link to="/products" className="inline-block mt-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-[#ff9800] text-white text-[18px] font-[Poppins] rounded-md shadow-lg hover:bg-[#e68900] transition-all"
          >
            Browse Courses
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;
