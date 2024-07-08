import React from 'react'

function About() {
    return (
        <div id='why' className='max-w-5xl mx-auto px-5 py-14 2xl:px-0'>
            <div className='w-full'>
                <h1 className='text-2xl lg:text-4xl font-semibold pb-10 text-orange text-center'>
                    About this course

                </h1>
            </div>

            <div className='flex flex-col lg:flex-row gap-10'>
                <div className='w-full lg:w-1/3'>
                    <img src="/dw.png" alt="" className='w-full' />
                </div>
                <div className='w-full lg:w-2/3'>

                    <p className=' text-zinc-300 text-sm mb-5'>
                        I’m David Witt, the creator of Original Color Creation, the colormixer interface and the methods of colormixing.  I’m an HMI / UX / UI designer with 25+ years experience in visual arts + design.
                    </p>
                    <p className=' text-zinc-300 text-sm mb-5'>
                        This project has roots in my MFA research at Parsons School of Design in NYC, where I dove deep into the history of color in art + science, which resulted in the creation of colormixing. I’ve used it in my own work for many years, and I’ve found it to be a fun and compelling tool for playing with color and exploring color interaction and visual perception.
                    </p>
                    <p className=' text-zinc-300 text-sm mb-5'>
                        My goal is to bring a better way of working with color out into the world, to help people to break away from the limitations of color pickers and canned palettes, and work with color more intuitively, while enjoying the process.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default About