import React from 'react';
import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from "react-icons/fa";

const header = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className='container py-4'>
        <div className='flex justify-between items center'>
          <div className= "hidden lg:flex gap-1">
            <div className="header_top__icon_wrapper">
              <FaFacebookF/>
            </div>
            <div className='header_top__icon_wrapper'> 
            <BsTwitter />
            </div>
            <div className='header_top__icon_wrapper'> 
            <BsInstagram />
            </div>
            <div className='header_top__icon_wrapper'> 
            <BsLinkedin />
            </div>
          </div>
          <div className='text-gray-500 text-[12px]'>
           <b>FREE SHIPPING</b>THIS WEEK ORDER OVER  -  $55
          </div>
           <div className='flex gap-4'>
             <select ></select>
           </div>

        </div>
      </div>
    </div>
  )
}

export default header