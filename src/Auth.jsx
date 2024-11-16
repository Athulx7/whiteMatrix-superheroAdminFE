import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loginimage from "../src/assets/loginimage.png";
import { loginAPI } from "./Serivces/allAPI";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

function Auth() {

  const navigate = useNavigate()

    const [logindata,setLogindata] = useState({
        email:'',
        password:''
    })

    const [error,setError] = useState({})

    const handleOnchange = (e)=>{
        setLogindata({...logindata,[e.target.name]:e.target.value})
    }

    const validation = ()=>{
        const newError = {}

        if(!logindata.email){
            newError.email = "Email is requierd"
        }
        else if (!/\S+@\S+\.\S+/.test(logindata.email)){
            newError.email = "Enter a valid email id"
        }

        if(!logindata.password){
            newError.password = "Password is required"
        }
        else if(logindata.password.length < 8){
            newError.password = "please enter a 8 characters"

        }

        setError(newError)
        return Object.keys(newError).length === 0

    }



    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(validation()){
            // console.log(logindata)

            const result = await loginAPI(logindata)
            // console.log(result)
            if(result.status === 200){
              if(result.data.data.role === 'admin'){
                sessionStorage.setItem('admin',JSON.stringify(result.data.data))
                sessionStorage.setItem("token",result.data.token)

                Swal.fire({
                  title: "Success!",
                  text: 'Login successfully, "Explore now more!!!',
                  icon: "success",
                  confirmButtonText: "OK",
                });
                navigate('/home')
              }
              else{
                toast.warning("invalid email or password")
                
              }
            }
            else{
              toast.error("invalid email or password")
            }

            

        }
        else{
          toast.warning("please fill the form completely")
        }
        

    }
  return (
    <>

<div className="container mx-auto flex flex-col justify-center items-center mt-10 px-10">
        <h5 className="text-2xl font-bold text-red-700">WELCOME SUPER HERO</h5>
        <hr className="w-1/2 mt-5" />
      </div>

      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center px-10 md:px-32">
        <div className="md:w-1/2  justify-center md:mt-0 hidden md:block">
          <img
            src={Loginimage}
            alt="Hero Silhouette"
            className="max-w-full h-auto ms-10 transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-32">
          <div className="md:ml-8 lg:ml-16 w-full">
            <div className="space-y-6 bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
              <div>
                <label className="block font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder=" Hero's email"
                  onChange={handleOnchange}
                  value={logindata.email}
                />
                 {error.email && (
              <span className="text-red-500">{error.email}</span>
            )}
              </div>

              <div>
                <label className="block font-semibold mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="Hero's password"
                  onChange={handleOnchange}
                  value={logindata.password}
                />
                 {error.password && (
              <span className="text-red-500">{error.password}</span>
            )}
              </div>

              <div className="flex justify-center">
                <button
                onClick={handleSubmit}
                  
                  className="w-full bg-black text-white font-bold p-2 rounded transition-transform duration-500 hover:scale-105"
                >
                  LOGIN
                </button>
              </div>

              <div className="text-center">
                <p>
                  Please Login to explore more{" "}
                  
                </p>
              </div>

             
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Auth
