import React from 'react'

function JoinUs() {
    return (
        <div id='how' className='max-w-5xl mx-auto px-5 py-14 2xl:px-0'>


            <div className='flex flex-col lg:flex-row gap-10'>
                <div className='w-full lg:w-1/3'>
                    <img src="/dual.png" alt="" className='w-full' />
                </div>
                <div className='w-full lg:w-2/3'>


                    <h1 className='text-2xl lg:text-4xl font-semibold pb-10 text-orange'>
                        Join Us!
                    </h1>

                    <p className=' text-zinc-300 text-sm mb-5'>
                        Course launch:  September 2024
                    </p>
                    <p className=' text-zinc-300 text-sm mb-5'>
                        I promise you will find this course interesting, entertaining and useful. Sign up below, and I’ll keep you in the loop as launch time approaches. Hope to see you there!
                    </p>
                    <button className=' bg-[#5771FF] border-2 border-[#6E6E6E] text-white text-sm px-10 py-2 rounded-lg mt-10 mb-5'>
                        Get Notified!
                    </button>
                </div>

            </div>
        </div>
    )
}

export default JoinUs