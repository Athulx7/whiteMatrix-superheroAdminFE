import {
  faArrowRight,
  faBars,
  faBell,
  faHouse,
  faUser,
  faX,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/superheroLogo.png";

function Header({usedetailas,grievnaceData}) {

  const navigate = useNavigate()

  const [responcive, setResponcive] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [Scrolling, setscrolling] = useState(0);

  const handleNavbar = () => {
    if (window.scrollY > Scrolling) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }

    setscrolling(window.screenY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavbar);
    return () => {
      window.removeEventListener("scroll", handleNavbar);
    };
  }, [Scrolling]);



  const token = sessionStorage.getItem('token')
  const handleLogout = (e)=>{
    e.preventDefault();
    if(token){
      sessionStorage.removeItem("admin")
      sessionStorage.removeItem('token')
      navigate('/')
      
    }
  }


  return (
    <>
      <div
        className={`bg-gray-100 shadow-md transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center py-3 ">
          <Link to={"/home"}>
            <div className="flex">
              <img src={logo} alt="" width={80} className="" />
              <span className="mt-2 text-2xl font-bold ">
                SUPER HERO DASHBOARD
              </span>
            </div>
            <div className="text-md font-bold ms-40">HERO HUB</div>
          </Link>

         {
          token?
          <button
          onClick={() => setResponcive(!responcive)}
          className="lg:hidden text-gray-700 focus:outline-none"
        >
          {responcive ? (
            <FontAwesomeIcon
              icon={faXmark}
              size="2x"
              className="text-red-600"
            />
          ) : (
            <FontAwesomeIcon icon={faBars} size="2x" />
          )}
        </button>

        :
        <span></span>

         }

         {
          token?

          <div
            className={`${
              responcive ? "block" : "hidden"
            } lg:flex lg:items-center lg:space-x-6 w-full lg:w-auto absolute lg:relative top-16 left-0 lg:top-0 bg-gray-100 lg:bg-transparent px-4 lg:px-0 py-4 lg:py-0`}
          >
            <Link
              to={"/home"}
              className="block lg:inline-block text-black hover:text-red-700 hover:font-bold py-2 lg:py-0 transition-transform duration-500 hover:scale-105"
            >
              <FontAwesomeIcon icon={faHouse} size="2x" />
             
            </Link>

           

            <Link
              to={"/userdetail"}
              className="block  lg:inline-block text-black hover:text-red-700 hover:font-bold py-2 lg:py-0 transition-transform duration-500 hover:scale-105"
            >
              <FontAwesomeIcon icon={faUser} size="2x" />
              <span className="ml-2 px-2 py-0.5 text-xs font-semibold text-white bg-gray-500 rounded-full">
                {usedetailas?.length}
              </span>
            </Link>

            <Link
              to={"/viewGrievance"}
              className="block lg:inline-block text-black hover:text-red-700 hover:font-bold py-2 lg:py-0 transition-transform duration-500 hover:scale-105"
            >
              <FontAwesomeIcon icon={faBell} size="2x" />
              <span className="ml-2 px-2 py-0.5 text-xs font-semibold text-white bg-gray-500 rounded-full">
                {grievnaceData?.length}
              </span>
            </Link>


           
              <button
              
              onClick={handleLogout}
              className="block lg:inline-block text-gray-700 hover:text-red-700 hover:font-bold  py-2 lg:py-0 transition-transform duration-500 hover:scale-105"
            >
              <div className="px-5 py-2 bg-red-800  rounded-md text-white font-bold">
                LOG OUT
              </div>
            </button>
          
            
          </div>
          :
          <span></span>
         }
         
          
        </div>
      </div>
    </>
  );
}

export default Header;
