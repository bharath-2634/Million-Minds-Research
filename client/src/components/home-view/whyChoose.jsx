import React from 'react'
import { GraduationCap, Award, Target, BookOpen, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhyChoose = () => {
  const navigate = useNavigate();

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <section className='w-full px-4 md:px-8 lg:px-16 py-12 lg:py-20 font-poppins bg-white -mt-40'>
        <div className='p-10'>
          
          {/* Section Header */}
          <div className='mb-12 text-center'>
            <h2 className='text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-primary_nav leading-tight'>
              Why <span className='text-primary'>Million-Minds</span> Is The Right Choice for You
            </h2>
          </div>

          {/* Grid Layout - 3 columns in first row, full width in second row */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            
            {/* Card 1: Expert Instructors */}
            <div className='bg-gray-50 rounded-2xl p-3 md:p-4 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col xl:py-10 xl:px-4 '>
              <div className='w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-white shadow-sm'>
                <GraduationCap className='w-7 h-7 text-gray-700' />
              </div>
              <h3 className='text-xl md:text-2xl xl:text-2xl font-semibold mb-4 text-[#131D2D]'>
                Expert Research Professionals
              </h3>
              <p className='text-gray-600 text-sm md:text-base xl:text-[1rem] leading-relaxed'>
                Work with seasoned researchers and technical writers who bring years of academic and industry experience. Our experts ensure your documents are accurate, well-structured, and meet the highest professional standards.
              </p>
            </div>

            {/* Card 2: Career-Boost Certify */}
            <div className='bg-gray-50 rounded-2xl p-3 md:p-4 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col xl:py-10 xl:px-4 '>
              <div className='w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-white shadow-sm'>
                <Award className='w-7 h-7 text-gray-700' />
              </div>
              <h3 className='text-xl md:text-2xl xl:text-2xl font-semibold mb-4 text-[#131D2D]'>
                Credible & Career-Focused Documentation
              </h3>
              <p className='text-gray-600 text-sm md:text-base xl:text-[1rem] leading-relaxed'>
                Receive research reports, proposals, and project documents that not only meet academic or corporate requirements but also strengthen your portfolio and professional credibility.
              </p>
            </div>

            {/* Card 3: Flexible Learning Schedules - Deep Blue Highlight */}
            <div className='bg-primary_nav text-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:col-span-2 lg:col-span-1 lg:row-span-2'>
              <div className='w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-white/20'>
                <BookOpen className='w-7 h-7 text-white' />
              </div>
              <h3 className='text-xl md:text-2xl font-semibold mb-4 xl:text-3xl'>
                Flexible Delivery & Support
              </h3>
              <p className='text-gray-300 text-sm md:text-base xl:text-[1rem] mb-4'>
                We understand the importance of time and convenience. That’s why we offer flexible submission schedules, real-time communication, and on-demand revisions — helping you achieve results on your own terms.
              </p>
            
              <button className='bg-primary hover:bg-[#00a859] text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:shadow-lg group  w-fit mt-10' onClick={()=>navigate("/auth/login")}>
                Start Free Trial
                <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </button>
            </div>

            {/* Card 4: 100+ High Impact Courses - Full Width */}
            <div className='md:col-span-2 lg:col-span-2 bg-gray-50 rounded-2xl p-3 md:p-4 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col xl:py-6 xl:px-4'>
              <div className='w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-white shadow-sm'>
                <Target className='w-7 h-7 text-gray-700' />
              </div>
              <h3 className='text-xl md:text-2xl xl:text-[1.6rem] font-semibold mb-4 text-[#131D2D]'>
                100+ Research & Project Solutions
              </h3>
              <p className='text-gray-600 text-sm md:text-base xl:text-[1rem] leading-relaxed'>
                From academic theses to business proposals and technical documentation, we cover a wide range of disciplines and project types — offering you complete, customized support for every need.
              </p>
            </div>

          </div>

        </div>
      </section>
    </motion.section>
  )
}

export default WhyChoose
