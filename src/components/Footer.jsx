import React from 'react'
import footerlogo from '../img/footerlogo.png'
import { FaFacebook, FaInstagramSquare, FaPinterest, FaYoutube, FaPhoneAlt, FaSearchLocation } from "react-icons/fa";
import { Link } from 'react-router-dom';
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

export const Footer = () => {
  return (
    <>
    <footer className="flex flex-col md:flex-row w-full h-[1000px] md:h-[450px] lg:h-[350px] md:gap-2 py-12 px-6 lg:px-16 justify-between bg-[#e3e3e3]">

        <div className='flex flex-col gap-3 w-300'>
            <img className='w-40 mb-2' src={footerlogo} alt="Footer logo" />
            <p className='text-sm text-gray-600 tracking-wider text-justify w-[90%]'> Indulge in Flavorful Journeys with YumYield. Your culinary cravings are our top priority, and we're here to bring the finest flavors from around the world straight to your doorstep. </p>
            <button className='bg-gradient-to-br text-sm from-orange-400 to-orange-500 md:mt-2 mr-auto w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'>Grab Now</button>
        </div>
        <div className='flex flex-col gap-3 w-300 '>
            <h3 className='text-gray-700 mb-2'>Usefull Links</h3>
            <ul className='space-y-2 flex flex-col'>
                <Link to={'/'} className="text-sm text-gray-600 cursor-pointer">Home</Link>
                <Link to={'/about'} className="text-sm text-gray-600 cursor-pointer">About us</Link>
                <Link to={'/contact'} className="text-sm text-gray-600 cursor-pointer">Contact us</Link>
                <Link to={'/privacy-policy'} className="text-sm text-gray-600 cursor-pointer">Privacy Policy</Link>
                <Link to={'/refund'} className="text-sm text-gray-600 cursor-pointer">Refund & Return Policy</Link>
            </ul>
        </div>
        <div className='flex flex-col gap-3 w-300 '>
            <h3 className='text-gray-700 mb-2'>About us</h3>
            <ul className='space-y-2 flex flex-col'>
                <Link to={'/about'} className="text-sm text-gray-600 cursor-pointer">About us</Link>
                <Link to={'/contact'} className="text-sm text-gray-600 cursor-pointer">Contact us</Link>
            </ul>
                <div className='flex flex-row gap-2'>
                    <FaPhoneAlt className='text-[#f98027]'/>
                    <p className='text-[14px] text-gray-600'>+1970-761-8896</p>
                </div>
                <div className='flex flex-row gap-2 '>
                    <FaSearchLocation className='text-[#f98027] text-xl'/>
                    <p className='text-[14px] w-[200px] text-gray-600 tracking-wider'>2056 Stark Hollow Road, Centennial, Colorado 80112 United States</p>
                </div>
            
        </div>
        <div className='flex flex-col w-300 gap-3'>
            <h3 className='text-gray-700 mb-2'>Follow us</h3>
            <div className='flex flex-col gap-2'>
                <p className='text-sm text-gray-500 '>Subscribe us</p>
                <form action="" className='shadow-sm border-none rounded-xl justify-center items-center'>
                    <input type="email" placeholder='Enter your email' className='text-sm text-gray-500 rounded-md bg-[#f7f7f7] px-4 py-2 outline-none border-none' />
                    <button type='submit' className=' text-sm text-gray-900 bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-2 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 mt-2'>Subscribe</button>
                </form>

            </div>
            <div className='flex flex-row gap-3 mt-4'>
                <FaFacebook className='text-[#f98027] text-2xl cursor-pointer'/>
                <FaInstagramSquare className='text-[#f98027] text-2xl cursor-pointer'/>
                <FaPinterest className='text-[#f98027] text-2xl cursor-pointer'/>
                <FaYoutube className='text-[#f98027] text-2xl cursor-pointer'/>
            </div>
        </div>

    </footer>
    <div className='flex justify-center items-center py-2 px-2 bg-[#d4d4d4]'>
        <p className='text-sm text-gray-800 tracking-wider'>©{currentYear} YumYield. All Rights Reserved.</p>
    </div>
    </>
  )
}
export default Footer;