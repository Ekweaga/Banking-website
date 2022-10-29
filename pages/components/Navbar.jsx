import React,{useState} from 'react'
import Image from 'next/image'

function Navbar() {
    const [open,setOpen] = useState(false)
  return (
    <>
    <nav className='z-10 flex md:justify-around p-4 items-center relative justify-between '>
        <div>
            <img src="/logo.png"/>
        </div>

        <div>
            <ul className='text-sm md:flex gap-[50px] items-center justify-center z-10 hidden'>
                <li>RETAIL</li>
                <li>SME</li>
                <li>CORPERATE</li>
                <li>ABOUT US</li>
                <li>COVID 19</li>
                <li>CAMPAIGNS</li>
                <li className="ml-[80px]"> <img src="/Magnifier.png"/></li>
                <li><button className="bg-[#ED017F] p-2 shadow text-white w-[120px]">SERVICE</button></li>
            </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[99999px]  ${
            open ? "text-gray-900" : ""
          } text-3xl md:hidden `}
        >
          <Image src={open ? "/icon-close.svg" :"/icon-hamburger.svg"} alt="icon" width={20} height={20}></Image>
        </div>
        <div
          className={`md:hidden text-black absolute w-2/3 h-screen z-10
      px-7 py-2 font-medium bg-[#FEF9FC] top-0 duration-300 ${
        open ? "left-0 block" : "left-0 hidden"
      }`}
        >
          <ul className="flex flex-col justify-center h-[300px] gap-10 py-2 text-lg mt-[200px]">
          <li  onClick={() => setOpen(!open)}>Retail</li>
                
                <li  onClick={() => setOpen(!open)}>Get Started</li>
                <li  onClick={() => setOpen(!open)}>Our Solutions</li>
                <li  onClick={() => setOpen(!open)}>COVID 19</li>
                <li  onClick={() => setOpen(!open)}>CAMPAIGNS</li>
                <li  onClick={() => setOpen(!open)}>RETAIL</li>
                <li  onClick={() => setOpen(!open)}>ABOUT US</li>
               
                <li><button className="bg-[#ED017F] p-2 shadow text-white w-[120px]">SERVICE</button></li>
          </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar