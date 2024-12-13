import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (_, next) => setCurrentSlide(next),
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          width: "100%",
        }}
      >
        <ul style={{ display: "flex", justifyContent: "center" }}>{dots}</ul>
      </div>
    ),
  };

  const quotes = [
    "SORE TODAY, STRONG TOMORROW.",
    "IF YOU WORK, IT WILL WORK.",
    "WE ARE WHAT WE REPEATEDLY DO.",
  ];

  const typingAnimation = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative w-full max-w-full overflow-hidden">
      <Slider {...settings}>
        {quotes.map((quote, index) => (
          <div key={index}>
            <motion.div
              className="w-full h-[100vh] sm:h-[80vh] md:h-[500px] bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/image${index + 1}.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.3,
                duration: 1,
                ease: "easeOut",
              }}
            >
              {/* Overlay */}
              <div className="w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                <motion.div
                  className="text-center text-white px-4 sm:px-6 md:px-10 space-y-4 md:space-y-6"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.5,
                    duration: 1,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  {/* Typing Effect */}
                  {currentSlide === index && (
                    <motion.h1
                      className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500"
                      variants={typingAnimation}
                      initial="hidden"
                      animate="visible"
                    >
                      {quote.split("").map((char, i) => (
                        <motion.span
                          key={`${char}-${i}`}
                          variants={letterAnimation}
                          className="inline-block"
                        >
                          {char === " " ? "\u00A0" : char}
                        </motion.span>
                      ))}
                    </motion.h1>
                  )}
                  <p className="text-xs sm:text-sm md:text-lg text-gray-300 mb-4">
                    Join us in achieving your fitness goals. Start today and push your limits!
                  </p>
                  <motion.button
                    className="px-4 py-2 sm:px-6 sm:py-3 bg-red-600 text-white rounded-full hover:bg-gradient-to-r from-red-500 to-yellow-500 hover:text-white transition duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
