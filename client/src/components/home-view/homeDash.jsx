import React from 'react'
import bg from "../../assets/bg.png"
import user_img from "../../assets/User_img.png"
import "../../App.css";
import { TiTick } from "react-icons/ti";
import { ArrowRight, Users, Check } from 'lucide-react';
import { FaUsers } from "react-icons/fa";
import lapView from "../../assets/lap_view_img.png";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

const HomeDash = () => {

  const testimonials = [
    {
      quote:
        "Their ability to capture our brand essence in every project is unparalleled - an invaluable creative collaborator.",
      name: "Isabella Rodriguez",
      title: "CEO and Co-founder of ABC Company",
      avatarColor: "bg-orange-400",
    },
    {
      quote:
        "Creative geniuses who listen, understand, and craft captivating visuals - an agency that truly understands our needs.",
      name: "Gabrielle Williams",
      title: "CEO and Co-founder of ABC Company",
      avatarColor: "bg-pink-400",
    },
    {
      quote:
        "A refreshing and imaginative agency that consistently delivers exceptional results - highly recommended for any project.",
      name: "Victoria Thompson",
      title: "CEO and Co-founder of ABC Company",
      avatarColor: "bg-purple-400",
    },
    {
      quote:
        "Their team's artistic flair and strategic approach resulted in remarkable campaigns - a reliable creative partner.",
      name: "John Peter",
      title: "CEO and Co-founder of ABC Company",
      avatarColor: "bg-amber-700",
    },
    {
      quote:
        "From concept to execution, their creativity knows no bounds - a game-changer for our brand's success.",
      name: "Natalie Martinez",
      title: "CEO and Co-founder of ABC Company",
      avatarColor: "bg-indigo-400",
    },
  ];

  const TestimonialCard = ({ quote, name, title, avatarColor }) => (
    <div className="flex-shrink-0 w-80 p-6 bg-white rounded-xl shadow-lg m-4 hover:shadow-2xl transition-shadow duration-300">
      <blockquote className="text-2xl font-serif text-indigo-500 mb-4 leading-none">
        “
      </blockquote>
      <p className="text-gray-700 text-sm mb-6 h-20 overflow-hidden">{quote}</p>
      <div className="flex items-center">
        <div
          className={`w-10 h-10 ${avatarColor} rounded-full flex items-center justify-center text-white font-bold text-sm mr-3`}
        >
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{name}</p>
          <p className="text-xs text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );

  const ScrollingRow = ({ direction = "left" }) => {
    const duplicatedList = [...testimonials, ...testimonials]; // duplicate to make loop seamless
    const scrollWidth = duplicatedList.length * 12; // adjust spacing

    return (
      <div className="overflow-hidden w-full relative">
        <motion.div
          className="flex"
          animate={{
            x:
              direction === "left"
                ? ["0%", "-30%"]
                : ["-30%", "0%"], // move half width to make it seamless
          }}
          transition={{
            duration: 30, // adjust for speed
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            width: `${scrollWidth}rem`,
          }}
        >
          {duplicatedList.map((testimonial, index) => (
            <TestimonialCard key={`${direction}-${index}`} {...testimonial} />
          ))}
        </motion.div>
      </div>
    );
  };






  return (
    <div className='relative w-[90%] min-h-screen sm:px-6 lg:px-8 
                 flex flex-col items-center justify-center 
                 bg-cover bg-center bg-no-repeat rounded-[1rem] lg:mt-10 md:mt-8 sm:mt-6 mt-3 font-poppins gap-6' 
                 style={{ backgroundImage: `url(${bg})` }}>

          <h2 className='lg:text-[2.4rem] md:text-[1.8rem] sm:text-[1.8rem] text-[1.8rem] font-semibold text-primary_nav text-center m-6'>Turn Concepts Into  <span className='bg-primary text-white lg:text-[2.5rem] md:text-[1.8rem] sm:text-[1.8rem] text-[1.8 rem] p-2 rounded'>Published</span> Success</h2>

          <div className='flex flex-col items-center justify-center gap-3 '>
              <h2 className='lg:text-[1.1rem] md:text-[]'>Join over <span className='text-primary font-bold'>2M</span> global social users</h2>
              <img src={user_img} alt="Root-Ed" className='lg:w-20 md:w-20 sm:w-20 w-20'/>
          </div>

          <div className="flex flex-row justify-center items-center gap-4 mt-6 mb-16">
  
              <button
                className="
                  flex items-center justify-center
                  px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3
                  bg-primary_nav text-white
                  text-sm sm:text-[0.9rem] md:text-[1rem]
                  rounded-full shadow-xl
                  transition-all duration-300 ease-in-out
                  hover:-translate-y-1 hover:shadow-2xl
                "
                onClick={()=>{
                            const section = document.getElementById('booking-section');
                            section?.scrollIntoView({ behavior: 'smooth' });
                           }}
              >
                Book now
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-2 text-white" />
              </button>
          </div>

          <div className='flex items-center justify-center lg:w-[100%] md:w-[80%] sm:w-[90%] w-[10%]overflow-hidden relative'>
            <ScrollingRow direction="right" />
          </div>

    </div>
  )
}

export default HomeDash
