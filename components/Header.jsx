'use client'

import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
function Header() {

    // Mobile nav menu

    const [isOpen, setIsOpen] = useState(false)

    const openMenu = () => {
        setIsOpen(true)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }





    return (
        <div className=' h-[60px] sticky top-0 main-bg'>
            <div className='flex justify-between items-center max-w-7xl mx-auto px-5 py-2  2xl:px-0'>
                <div>
                    <Link href='/'>
                        <img src="/logo.png" alt="" className='h-[30px]' />
                    </Link>
                </div>
                <div className='lg:flex gap-5 items-center relative right-12 hidden'>

                    <Link href='#welcome' className=''>Welcome</Link>
                    <Link href='#what' className=''>What</Link>
                    <Link href='#who' className=''>Who</Link>
                    <Link href='#why' className=''>Why</Link>
                    <Link href='#how' className=''>How</Link>
                </div>
                <div className='hidden lg:block'>
                    <button className='border-2 border-[#6E6E6E] text-[#6E6E6E] px-7 py-2 rounded-lg'>
                        Member login
                    </button>
                </div>

                {/* Mobile menu */}
                {
                    !isOpen && (
                        <div
                            onClick={openMenu}
                            className='lg:hidden cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                            </svg>
                        </div>
                    )
                }

                {isOpen && (
                    <div className='lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
                        <div className='main-bg p-10 rounded-lg'>
                            <div
                                onClick={closeMenu}
                                className='absolute top-5 right-5 cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <Link
                                    onClick={closeMenu}
                                    href='#welcome' className=''>Welcome</Link>
                                <Link
                                    onClick={closeMenu}
                                    href='#what' className=''>What</Link>
                                <Link
                                    onClick={closeMenu}
                                    href='#who' className=''>Who</Link>
                                <Link
                                    onClick={closeMenu}
                                    href='#why' className=''>Why</Link>
                                <Link
                                    onClick={closeMenu}
                                    href='#how' className=''>How</Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header