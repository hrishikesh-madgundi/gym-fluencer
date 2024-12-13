import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  // Manage open state for each accordion item
  const [activeIndex, setActiveIndex] = useState(null);

  // Handle opening and closing of accordion
  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  // FAQ data
  const faqData = [
    {
      question: "What is the purpose of this website?",
      answer:
        "This website helps users achieve their fitness goals by providing customized workout and nutrition plans.",
    },
    {
      question: "How do I create a custom plan?",
      answer:
        "You can fill out a simple questionnaire, and we will create a tailored plan based on your needs.",
    },
    {
      question: "Can I track my progress?",
      answer:
        "Yes, you can track your progress through your dashboard and see detailed analytics.",
    },
    {
      question: "Is there a mobile app available?",
      answer:
        "We are currently working on a mobile app to make tracking easier for you.",
    },
  ];

  return (
    <div className="bg-black text-white py-10 px-6 sm:px-10 lg:px-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-red-500">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-900 border-dashed border-red-500 rounded-lg shadow-md overflow-hidden"
          >
            {/* Question Section */}
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-red-500"
              >
                ▼
              </motion.span>
            </div>
            {/* Answer Section */}
            <motion.div
              className="px-4 overflow-hidden bg-black"
              initial={{ height: 0, opacity: 0 }}
              animate={
                activeIndex === index
                  ? { height: "auto", opacity: 1 }
                  : { height: 0, opacity: 0 }
              }
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{ maxHeight: activeIndex === index ? "1000px" : "0px" }}
            >
              <p className="text-gray-300 py-4">{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
