import React from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Arjun Sharma",
    text: "This Gym AI has transformed my workouts! It customizes my routines and motivates me daily. Highly recommend it to anyone serious about fitness!",
    role: "Fitness Enthusiast",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    bgColor: "bg-red-600",
  },
  {
    id: 2,
    name: "Meera Kapoor",
    text: "The diet suggestions and real-time feedback from Gym AI are a game changer. My strength and stamina have improved drastically in just 3 months!",
    role: "Yoga Trainer",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    bgColor: "bg-red-500",
  },
  {
    id: 3,
    name: "Rahul Desai",
    text: "I love how Gym AI tracks my progress and adjusts plans automatically. It’s like having a personal trainer in your pocket!",
    role: "Bodybuilder",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    bgColor: "bg-red-700",
  },
];

const ReviewsCarousel = () => {
  return (
    <div className="bg-black py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h3 className="text-4xl font-bold text-red-500 mb-4">What People Say</h3>
        <p className="text-gray-400 mb-10">
          Transforming fitness routines one step at a time. Here's what our
          users have to say about Gym AI:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center bg-gray-800 rounded-lg shadow-lg p-6"
            >
              {/* Top Bar */}
              <div
                className={`w-full h-2 ${review.bgColor} rounded-t-lg mb-4`}
              ></div>

              {/* Profile Image */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-24 h-24 -mt-12 rounded-full border-4 border-red-500 bg-white"
              >
                <img
                  src={review.image}
                  alt={review.name}
                  className="rounded-full w-full h-full object-cover"
                />
              </motion.div>

              {/* Content */}
              <div className="text-center mt-4">
                <motion.h4
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-xl font-semibold text-white"
                >
                  {review.name}
                </motion.h4>
                <p className="text-sm text-gray-400 mb-4">{review.role}</p>
                <hr className="border-gray-600 my-4" />
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-gray-300 italic"
                >
                  <span className="text-red-500 text-lg font-bold mr-2">“</span>
                  {review.text}
                  <span className="text-red-500 text-lg font-bold ml-2">”</span>
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ReviewsCarousel;
