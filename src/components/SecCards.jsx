import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SecCards = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);

  const cards = [
    {
      title: "Rewards at all stores",
      description:
        "At any online destination where you can make a transaction, you'll earn points. From trending brands to old faves, and even subscription sign-ups!",
      image:
        "https://cdn.simplycodes.com/web/images/home/stores_img.png?width=2048&outputFormat=avif&fit=min",
      highlight: "Rewards",
    },
    {
      title: "Powered by AI",
      description:
        "SimplyCodes uses artificial intelligence to capture the thousands of new coupon codes issued daily and verify they work.",
      image:
        "https://cdn.simplycodes.com/web/images/home/verified_codes_img.png?width=2048&outputFormat=avif&fit=min",
      highlight: "AI",
    },
    {
      title: "Better with community",
      description:
        "Helping each other save is what we’re all about. Real people share working codes, confirm deals, and provide saving tips.",
      image:
        "https://cdn.simplycodes.com/web/images/home/community_img.png?width=2048&outputFormat=avif&fit=min",
      highlight: "community",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-8 p-8 bg-gray-100">
      {cards.map((card, index) => (
        <div
          key={index}
          data-aos="fade-up" 
          data-aos-delay={index * 200} 
          className="bg-white text-gray-800 w-80 lg:w-96 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          <div className="flex justify-center mb-6">
            <img
              src={card.image}
              alt={card.title}
              className="h-20 w-20 object-contain"
            />
          </div>
          <h3 className="text-xl lg:text-2xl font-bold mb-4">
            <span className="text-green-500">{card.highlight}</span>{" "}
            {card.title.replace(card.highlight, "")}
          </h3>
          <p className="text-gray-600">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SecCards;
