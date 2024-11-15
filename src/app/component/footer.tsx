import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
      <div className=' h-[80px] bg-sections  flex items-center justify-between text-white sm-max:text-[10px]'>
          <div className="pl-10">Developed by Abdul Wasay</div>
          <div className="font-thin">Copyright © 2024 Abdul Wasay
</div>
          <div className="flex justify-between pr-10 gap-4  items-center">
              Connect with me:
        <Image alt='#' height={30} width={30} src='/facebook.png' className='object-cover rounded-[100px] sm-max:w-[20px] sm-max:h-[20px]'></Image>
        <Image alt='#' height={30} width={30} src='/twitter.png' className='object-cover rounded-[100px] sm-max:w-[20px] sm-max:h-[20px]'></Image>
        <Image alt='#' height={30} width={30} src='/github.png' className='object-cover rounded-[100px] sm-max:w-[20px] sm-max:h-[29px]' ></Image>
          </div>
    </div>
  )
}

export default Footer