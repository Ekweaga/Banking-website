import React from 'react'

function Footer() {
  return (
    <>
    <footer className='md:h-[350px] bg-white flex items-center justify-center p-4'>
<div className='grid grid-cols-1 md:grid-cols-4 gap-[30px] md:p-4'>
    <div>
        <h2 className='font-bold mb-[20px]'>About the company</h2>
        <p className='text-sm w-[280px]'>Learn to love growth and change and you will be a success microsoft patch</p>
        <img src="/Frame 23.png" className='mt-[60px] w-[100px]'/>
    </div>

    <div>
        <h2 className='font-bold mb-[20px]'>Products</h2>
        <ul className="text-sm flex flex-col gap-[20px]">
            <li>CSR Activities</li>
            <li>Green Banking</li>
            <li>News</li>
            <li>Ongoing Campaign</li>
            <li>Updates</li>
        </ul>
    </div>

    <div>
        <h2 className='font-bold mb-[20px]'>Get Started</h2>
        <ul className="text-sm flex flex-col gap-[20px]">
            <li>Career</li>
            <li>Contact Us</li>
            <li>News</li>
            <li>Government Securities</li>
            <li>Examples</li>
            <li>NIS</li>
        </ul>
    </div>

    <div>
        <h2 className='font-bold mb-[20px]'>About</h2>
        <ul className="text-sm flex flex-col gap-[20px]">
            <li>IPDC at a Glance</li>
            <li>Mission,vision,values</li>
            <li>News</li>
            <li>Governance</li>
            <li>Shareholders</li>
            <li>Relations</li>
        </ul>
    </div>
</div>
    </footer>
      
    </>
  )
}

export default Footer
