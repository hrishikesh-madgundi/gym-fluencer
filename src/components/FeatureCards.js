import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const FeatureCards = () => {
  const features = [
    {
      title: "Fast Performance",
      description: "Experience blazing fast performance optimized for modern web apps.",
      icon: "⚡",
    },
    {
      title: "Responsive Design",
      description: "Seamlessly adapt to any device with fully responsive layouts.",
      icon: "📱",
    },
    {
      title: "Intuitive UI",
      description: "Designed to deliver an easy and engaging user experience.",
      icon: "🎨",
    },
    {
      title: "Secure & Reliable",
      description: "Top-notch security to keep your data safe and reliable.",
      icon: "🔒",
    },
    {
      title: "Customizable Features",
      description: "Tailor the application to meet your specific needs.",
      icon: "🛠️",
    },
    {
      title: "Scalable Architecture",
      description: "Built to grow with your needs, from small to large-scale.",
      icon: "📈",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <div className="bg-black text-white py-10">
      <h2 className="text-3xl font-bold text-center text-red-500 mb-8">OUR FEATURES</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            data-aos="fade-up" // Adding fade-up animation on scroll
            data-aos-delay={`${index * 200}`} // Delay each card slightly
            className="bg-gray-800 hover:bg-red-600 transition duration-300 transform hover:scale-105 rounded-lg shadow-lg p-6 flex flex-col items-center"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
