import NavHeader from '@/components/common/navHeader'
import React from 'react'
import HomeDash from '../../components/home-view/homeDash'
import EducationSystemIntro from '@/components/home-view/educationSystem'
import LearnSmarterSection from '@/components/home-view/learnSmarter'
import WorldWideFunction from '@/components/home-view/worldWideEducation'
import TestimonialCarousel from '@/components/common/testimonial'
import Footer from '@/components/common/footer'
import AboutCEO from '@/components/home-view/aboutCEO'
import WhyChoose from '@/components/home-view/whyChoose'
import BlogSection from '@/components/home-view/eventsPosts'
import ContactForm from '@/components/home-view/contact_form'

const home = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className="w-full ">
        <NavHeader/>
      </div>
      <HomeDash/>
      <EducationSystemIntro/>
      <WhyChoose/>
      <LearnSmarterSection/>
      <section id="our-works">
        <BlogSection/>
      </section>
      
      <section id="about-me">
        <AboutCEO/>
      </section>
      
      <WorldWideFunction/>
      <TestimonialCarousel/>
      <section id="booking-section">
        <ContactForm/>
      </section>
      <Footer/>
    </div>
  )
}

export default home
