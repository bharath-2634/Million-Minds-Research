import React, { useState } from 'react';
import { Menu, X, Rocket, LogOut, AlertTriangle  } from 'lucide-react'; 
import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '@/store/auth-slice';
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: 'Home', href: 'home' },
  { name: 'About', href: 'about-me' },
  { name: 'Our Works', href: 'our-works' },
  { name: 'Connect', href: 'booking-section' },
];


const NavHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const [activeLink, setActiveLink] = useState('Home');
  const [showLogoutPopUp,setShowLogoutPopUp] = useState(false);

  const navigate = useNavigate();

  const handleLinkClick = (name) => {
    setActiveLink(name);
    console.log("active link", activeLink);
    setIsOpen(false); 
  };

  const { user, isAuthenticated, isLoading }  = useSelector((state)=>state.auth);

  const getInital = (user) => {
    
    if(user==null) return "U";

    const firstLetter = user?.userName?.charAt(0);
    return firstLetter;
  }

  const dispatch = useDispatch();

  const confirmLogOut = () => {
    setShowLogoutPopUp(true);
  }

  const handleLogout = () => {
    setShowLogoutPopUp(false);

    dispatch(logoutUser()).then(()=>console.log("logout successful ")).catch((error)=>console.log(error));
  }

  const ConfirmationModal = () => {
        if (!showLogoutPopUp) return null;

        return (
            // Backdrop
            <div className="fixed inset-0 bg-gray-900 bg-opacity-70 z-50 flex items-center justify-center p-4">
                {/* Modal Container */}
                <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-sm transform transition-all duration-300 scale-100 opacity-100">
                    <div className="flex flex-col items-center space-y-4">
                        <AlertTriangle className="h-10 w-10 text-primary" />
                        <h3 className="text-xl font-bold text-gray-900">Confirm Logout</h3>
                        <p className="text-center text-gray-600">
                            Are you sure you want to log out of your account?
                        </p>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="mt-6 flex justify-between space-x-4">
                        <button
                            onClick={()=>setShowLogoutPopUp(false)}
                            className="flex-1 px-4 py-2 text-sm font-semibold rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleLogout}
                            className="flex-1 px-4 py-2 text-sm font-semibold rounded-lg bg-primary text-white hover:bg-primary transition-colors shadow-lg shadow-primary flex items-center justify-center"
                        >
                            <LogOut className="h-4 w-4 mr-1" />
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    const handleScroll = (sectionId, name) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveLink(name);
        setIsOpen(false);
      }
    };

console.log("user",user)

  return (
    <nav className="bg-white font-poppins ml-12">

      {
        showLogoutPopUp ? (ConfirmationModal()) : (<div>
          </div>)
      }

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex justify-start items-start lg:w-[10rem] md:w-[10rem] sm:w-[10rem] w-[10rem] -ml-10">
            <h2 className='lg:text-[1.5rem] md:text-[1.2rem] sm:text-[1.4rem] text-[1.4rem] font-semibold text-primary_nav text-start'>Million Minds</h2>
          </div>

          
          {/* Desktop Navigation Links (Hidden on small screens) */}
          {
            user?.role === "Admin" ? (
              <div className="hidden lg:flex md:flex flex-grow justify-center">

              </div>
            ) : (
              <div className="hidden lg:flex md:flex flex-grow justify-center font-poppins">
                <div className="bg-primary_nav rounded-full p-[.5rem] space-x-2">
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => handleScroll(link.href, link.name)} // smooth scroll handler
                      className={`
                        lg:text-[1.1rem] md:[.6rem] text-[1rem] transition-all duration-200 
                        px-4 py-2 rounded-full whitespace-nowrap md:font-medium
                        ${activeLink === link.name
                          ? 'bg-white text-slate-800'
                          : 'text-white hover:text-primary'}
                      `}
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>
            )
          }


          {/* CTA Button (Always visible on desktop/tablet) */}
          {
            isAuthenticated ? (
              <div className="hidden md:block lg:block">
                <div className='w-full flex items-center justify-between cursor-pointer gap-3'>
                    <div className="bg-primary p-[.3rem] rounded-full lg:w-[2.8rem] md:w-[2.8 rem] w-[2.8rem] flex items-center justify-center cursor-pointer">
                      <h2 className='lg:text-[1.1rem] md:text-[1.1rem] lg:m-1 md:m-1 text-white font-medium'>{getInital(user)}</h2>
                    </div>
                    <div className='flex flex-col items-start justify-start'>
                      <h2 className='lg:text-[1.2rem] md:text-[1.1rem] text-primary_nav font-semibold'>{user?.userName}</h2>
                      <p className='lg:text-[.9rem] -mt-1 text-slate-500' onClick={()=>confirmLogOut()}>logout</p>
                    </div>
                    
                </div>
                
              </div>
            ):(
              <div className="hidden md:block lg:block">
                <div className="bg-primary/10 border border-primary p-[.3rem] rounded-full lg:w-[9rem] md:w-[7rem] w-[9rem] flex items-center justify-center cursor-pointer">
                    <h2 className='lg:text-[1rem] md:text-[.8rem] lg:m-1 md:m-1 text-primary font-medium' onClick={()=>{navigate("/auth/login")}}>Lets Work !</h2>
                </div>
              </div>
            )
          }

          <div className="lg:hidden md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-emerald-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-400 transition"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content (Hidden on desktop) */}
      <div className={`lg:hidden md:hidden transition-all duration-300 ease-in-out absolute z-20 ${isOpen ? 'lg:w-[40%] md:w-[50%] sm:w-[40%] w-[60%] opacity-100 absolute right-10' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-primary_nav rounded-xl mx-2 shadow-xl ">
          {
            navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScroll(link.href, link.name)} // smooth scroll handler
                className={`
                  block w-full text-center px-3 py-2 rounded-lg text-[1rem] font-medium transition duration-150 ease-in-out
                  ${activeLink === link.name
                    ? 'bg-primary text-primary_nav'
                    : 'text-gray-100 hover:bg-slate-700 hover:text-white'}
                `}
              >
                {link.name}
              </button>
            ))

          }
           
          {/* Mobile CTA */}
          <div className="pt-2">
            {
             
              user==null ? (
              
                <div className="hidden md:block lg:block">
                <div className="bg-primary p-[.3rem] rounded-full lg:w-[9rem] md:w-[7rem] w-[9rem] flex items-center justify-center cursor-pointer">
                    <h2 className='lg:text-[1rem] md:text-[.8rem] lg:m-1 md:m-1 text-white font-medium' onClick={()=>{
                            const section = document.getElementById('booking-section');
                            section?.scrollIntoView({ behavior: 'smooth' });
                           }}>Lets Work!</h2>
                </div>
              </div>
                
            ):(
              <div className='flex items-center justify-center cursor-pointer gap-4'>
                    <div className="bg-primary p-[.3rem] rounded-full lg:w-[2.8rem] md:w-[2.8 rem] w-[2.6rem] flex items-center justify-center cursor-pointer">
                      <h2 className='lg:text-[1.1rem] md:text-[1.1rem] text-[1.3rem] lg:m-1 md:m-1 text-white font-medium'>{getInital(user)}</h2>
                    </div>
                    <div className='flex flex-col items-start justify-start '>
                        <h2 className='lg:text-[1.3rem] md:text-[1.3rem] sm:text-[1.3rem] text-[1.2rem] lg:m-1 md:m-1 text-primary font-medium'>{user?.userName.charAt(0).toUpperCase() + user?.userName.slice(1)}</h2>
                      <p className='lg:text-[.9rem] -mt-1 text-white' onClick={()=>confirmLogOut()}>logout</p>
                    </div>
                </div>
            )
          }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavHeader;

