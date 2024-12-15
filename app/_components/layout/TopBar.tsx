import React from 'react' 
import ProfilePic from '@/app/_assets/images/profile-img.png'
import Image from 'next/image'
const TopBar = () => {
  return (
    <div className='bg-white h-16 flex flex-row-reverse gap-5 pe-8 py-1'>
      <div className='flex flex-col gap-1 py-3'>
        <span>Moni Roy</span>
        <span className='text-xs text-subtitle'>Admin</span>
      </div>
      <Image alt='top-bar-profile-image' src={ProfilePic} style={{width:"auto",height:"auto"}} className='rounded-full bg-subtitle' />
    </div>
  )
}

export default TopBar