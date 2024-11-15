import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
      <div className=' w-full h-screen bg-darkBlue flex items-center justify-center sm-max:h-[160vh]  '>
          <div className='h-full w-[50%] text-white  font-sans flex items-center justify-center text-5xl sm-max:flex-col'>
        <div className=' w-full h-[50%] ml-[25%] mt-28 sm-max:justify-center sm-max:mt-[-500px] sm-max:ml-0'>
          <Image
            src='/wasay.png'
            alt='#'
           width={800}
            height={800}
            className='hidden cover bg-no-repeat rounded-[100px] filter drop-shadow-[0px_4px_4px_rgba(0,0,0,0.75)] sm-max:block sm-max:m-0 '></Image>
              <h1 className='font-bold'>Hi, i am Abdul Wasay</h1>
              <h2 className='font-bold text-buttons'>Front-end Developer</h2>
          <p className='w-[526px] text-[20px] mt-7 font-thin sm-max:w-auto'>A skilled front-end developer specializing in crafting intuitive and visually stunning user interfaces. With a strong foundation in HTML, CSS, and JavaScript, I am passionate about leveraging AI and machine learning to create dynamic and engaging web experiences. I am dedicated to staying up-to-date with the latest trends and technologies to deliver innovative and user-centric solutions. </p>
                  <button className=' mt-7 w-[180px] h-[50px] rounded-[10px] bg-buttons self-center content-center text-2xl'><Link href='ki' >Get in touch</Link></button>
                </div>

          </div>
          <div className='h-full w-[50%] flex items-end justify-center sm-max:hidden'>
              <Image
                  src='/wasay.png'
                  alt='#'
                  width={800}
                  height={800}
                  className='cover bg-no-repeat  filter drop-shadow-[0px_4px_4px_rgba(0,0,0,0.75)]  '></Image>
          </div>
    </div>
  )
}

export default Hero