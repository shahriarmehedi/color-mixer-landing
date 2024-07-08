'use client'

import React, { useState } from 'react'
import SignupModal from './modals/SignupModal'

function Banner() {


    // Signup modal

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }





    return (
        <div
            id='welcome'
            className='
            h-[50vh]
            lg:h-[58vh]
            bg-[url(/screens.png)]
            bg-cover
            bg-center
            flex
            justify-center
            items-end
            px-5 
            '>

            <div>
                <h2 className='text-orange text-2xl lg:text-6xl mb-3 text-center'>
                    Original Color Creation
                </h2>
                <h2 className=' text-2xl lg:text-6xl mb-5 lg:mb-10 text-center'>
                    Interactive color learning
                </h2>
                <p className='text-center text-sm lg:text-base'>
                    Learn RGB color theory interactively from first principles, <br className='hidden lg:block' />
                    and discover a more satisfying and intuitive way to create with color
                </p>

                <div className="flex justify-center items-center">
                    <button
                        onClick={openModal}
                        className=' cursor-pointer bg-[#5771FF] border-2 border-[#6E6E6E] text-white text-sm lg:text-base px-10 py-3 rounded-lg mt-14 mb-5'>
                        Get started
                    </button>
                </div>
            </div>


            {/* Modal */}
            <SignupModal isOpen={isOpen} closeModal={closeModal} />

        </div>
    )
}

export default Banner