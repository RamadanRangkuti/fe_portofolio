"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import axios from 'axios'

const HeroSection = () => {
  const [profile, setProfile] = useState({})
  useEffect(()=>{
    const fetchData = async () =>{
      try {
        // const response = await axios.get('http://localhost:5000/api/v1/profile')
        const response = await axios.get('https://api-ramadanrangkuti.vercel.app/api/v1/profile')
        console.log(response.data.data)
        setProfile(response.data.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  },[])
  return (
    <section>
      <div className='m-8 mt-12 pt-6'>
        <div className='flex justify-evenly my-8'>
          <div className=''>
            <h3 className='text-gray-300 text-base'>Hi, my name is</h3>
            <h1 className='text-white font-bold text-4xl sm:text-4xl md:text-4xl lg:text-6xl mb-px font-mono'>{profile.name || 'Ramadan Rangkuti'}</h1>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Fullstack Web Developer',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Backend Developer',
                1000,
              ]}
              wrapper="span"
              speed={10}
              className='text-xl text-gray-400'
              repeat={Infinity}
            />
            <div className='flex items-center'>
              <a href="https://www.linkedin.com/in/ramadan-rangkuti" target='blank' className=' ml-4'>
                <Image 
                src='/images/linkedin.svg'
                alt='linkedin'
                className=''
                width={30}
                height={20}
                />
              </a>
              <a href="https://github.com/RamadanRangkuti" target='blank' className=' ml-6'>
                <Image 
                src='/images/github.svg'
                alt='github'
                className=''
                width={65}
                height={20}
                />
              </a>
              <a href="https://wa.me/6282272175392" target='blank' className=''>
                <Image 
                src='/images/whatsapp.svg'
                alt='whatsapp'
                className=''
                width={70}
                height={20}
                />
              </a>
            </div>
            <div className='flex text-sm'>
              <a href='https://drive.google.com/file/d/1ThKSqlFDSZ8LdMbYSU3Jzqt-wVoYtfes/view?usp=sharing' target='_blank' rel='noopener noreferrer'><button className='px-4 py-2 lg:px-6 lg:py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black mt-3'>Hire Me</button></a>
              <a href='https://drive.google.com/file/d/1ThKSqlFDSZ8LdMbYSU3Jzqt-wVoYtfes/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
              <button className='px-4 py-2 lg:px-6 lg:py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>Download CV</button>
            </a>
            </div>
          </div>
          <div className=''>
          <Image
              src={profile.picture || '/images/ramadan.jpg'} 
              alt="ramadan rangkuti"
              className="rounded-full border-4 border-white mb-4"
              width={250}
              height={250}
            />
            {console.log(profile.picture)} 
            {/* ini udah bener ngarah ke link cloudinary */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection