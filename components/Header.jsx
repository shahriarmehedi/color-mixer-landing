import React from 'react'

function Header() {
    return (
        <div className='flex justify-between items-center h-[60px]  max-w-7xl mx-auto px-5  2xl:px-0'>
            <div>
                <img src="/logo.png" alt="" className='h-[30px]' />
            </div>
            <div className='lg:flex gap-5 items-center relative right-12 hidden'>
                <div>Welcome</div>
                <div>What</div>
                <div>Who</div>
                <div>Why</div>
                <div>How</div>
            </div>
            <div className='hidden lg:block'>
                <button className='border-2 border-[#6E6E6E] text-[#6E6E6E] px-7 py-2 rounded-lg'>
                    Member login
                </button>
            </div>
        </div>
    )
}

export default Header