import React from "react";
import { motion } from "framer-motion";
import step1Img from "../assets/step1.jpg";
import step2Img from "../assets/step2.jpg";
import step3Img from "../assets/step3.jpg";
import step4Img from "../assets/step4.jpg";
import step5Img from "../assets/step5.jpg";
import step6Img from "../assets/step6.jpg";

const steps = [
  {
    id: 1,
    title: " STEP 1 SIGN UP",
    description: "Create your account to get started on your fitness journey.",
    image: step1Img,
  },
  {
    id: 2,
    title: "STEP 2 ENTER YOUR FITNESS GOALS",
    description: "Set your fitness goals to tailor the experience to your needs.",
    image: step2Img,
  },
  {
    id: 3,
    title: "STEP 3 UPLOAD YOUR INITIAL DATA",
    description: "Provide details like weight, height, and preferences.",
    image: step3Img,
  },
  {
    id: 4,
    title: "STEP 4 RECIEVE YOUR CUSTOM PLAN",
    description: "Get your personalized workout and diet plan.",
    image: step4Img,
  },
  {
    id: 5,
    title: "STEP 5 TRACK PROGRESS DAILY",
    description: "Monitor your daily progress and achievements.",
    image: step5Img,
  },
  {
    id: 6,
    title: "STEP 6 STAY MOTIVATED WITH OUR AI INISGHTS",
    description: "Leverage AI insights to stay on track and motivated.",
    image: step6Img,
  },
];

const StepTour = () => {
  return (
    <section className="bg-black py-16 px-4 sm:px-8 lg:px-16 overflow-x-hidden">
      <h2 className="text-4xl font-bold text-center mb-12 text-red-500">
        LET'S GET YOU A WALKTHROUGH
      </h2>
      <div className="space-y-20 max-w-screen-xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className={`flex flex-col-reverse md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } items-center`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <motion.img
              src={step.image}
              alt={step.title}
              className="w-full md:w-1/2 rounded-lg shadow-lg"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            {/* Text */}
            <motion.div
              className="w-full md:w-1/2 p-6 md:p-10"
              initial={{ x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="text-3xl font-semibold text-red-500 mb-4">
                {step.title}
              </h3>
              <p className="text-lg text-gray-300">{step.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StepTour;
