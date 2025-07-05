import React from 'react'

const Nav = (btn) => {
  return (
    <div className="flex gap-60 border-b-[1.5px] border-[#f0eeec] w-fit pt-5">                                            
       <div className="left flex gap-3 pl-4 pb-5">
            <img className='w-[95px]' src="https://cdn.prod.website-files.com/63c3f1995d4c3581bbc944b5/63c3fed42405e70f33df42ee_logo.svg" />
        <button className='text-[#474645] bg-[#f5e8da] px-3 py-1 rounded-full text-[12px] font-[500]'>We are hiring!</button>
       </div>
         <div className="right flex gap-7 text-[15px] ">
              <a href="#" className='text-[#474645] '>Work</a>
              <a href="#" className='text-[#474645] '>Services</a>
              <a href="#" className='text-[#474645] '>About</a>
              <a href="#" className='text-[#474645] '>Blog</a>
              <a href="#" className='text-[#474645] '>Pages <i className="ri-arrow-down-s-line"></i></a>
              <a href="#" className='text-[#474645] '>Cart  <button className='bg-[#f5e8da] font-normal ml-1 text-[12px] h-6 w-6 rounded-full'>0</button></a>
            <button className='mt-[-9px] h-10 w-30 rounded-full border text-[15px] hover:bg-black hover:text-white'>{btn.val}</button>
        </div>
    </div>
  )
}

export default Nav
