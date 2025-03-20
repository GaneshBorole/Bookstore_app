import React from 'react'
import {Link} from "react-router-dom";
import Login from './Login';
import { useForm } from "react-hook-form";
function Signup() {
   const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => {
      console.log("Form Data:", data);
    };
  return (
    <div className='flex h-screen items-center justify-center '>
       <div  className=" border-[2px] shadow-md p-5 rounded-md w-[400px]">
  <div className="">
    <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    
    <h3 className="font-bold text-lg">Signup</h3>
    <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br/>
        <input   {...register("name", { required: "Name is required" })} type='text' placeholder='Enter Your Name'className='w-80 px-3 py-1 border rounded-md outline-none' />
        <br/>
              {errors.name && (
                <span className="text-sm text-red-500">
                  {errors.name.message}
                </span>
              )}
        </div>
    {/* Email */}
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br/>
        <input   {...register("email", { required: "Email is required" })} type='email' placeholder='Enter Your Email'className='w-80 px-3 py-1 border rounded-md outline-none' />
        <br/>
              {errors.email && (
                <span className="text-sm text-red-500">
                  {errors.email.message}
                </span>
              )}
        </div>
{/* password */}
        <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br/>
        <input   {...register("password", { required: "password is required" })}type='password' placeholder='Enter Your Password'className='w-80 px-3 py-1 border rounded-md outline-none' />
        <br/>
              {errors.password && (
                <span className="text-sm text-red-500">
                  {errors.password.message}
                </span>
              )}
    </div>
    {/* Button */}
    <div className='mt-4 flex justify-around '>
        <button className='bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-200 '>Signup</button>
        <p className='text-xl'>
                Have account?{""}
                <button
                  
                  className="underline text-blue-500 cursor-pointer"
                  onClick={()=>document.getElementById("my_modal_3").showModal()}
                >
                  Login
                </button> {""}
                <Login />
                </p>
    </div>
    </form>
  </div>
</div>
    </div>
  )
}

export default Signup
