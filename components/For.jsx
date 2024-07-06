import React from 'react'

function For() {
    return (
        <div className='max-w-5xl mx-auto px-5 py-14 2xl:px-0'>
            <div className='w-full'>
                <h1 className='text-2xl lg:text-4xl font-semibold pb-10 text-orange text-center'>
                    Who is this course for?
                </h1>
            </div>

            <div className='flex flex-col lg:flex-row gap-10'>
                <div className='w-full lg:w-1/3'>
                    <h3 className='text-lg font-semibold mb-3'>
                        Aspiring Digital Artists + Designers
                    </h3>
                    <p className=' text-zinc-300'>
                        Beginners will learn an entire system for working with color, starting from first principles.
                    </p>
                </div>
                <div className='w-full lg:w-1/3'>
                    <h3 className='text-lg font-semibold mb-3'>
                        Experienced Color Users
                    </h3>
                    <p className=' text-zinc-300'>
                        Experienced users can leverage their color knowledge and augment what they already know with new methods of working with color.
                    </p>
                </div>
                <div className='w-full lg:w-1/3'>
                    <h3 className='text-lg font-semibold mb-3'>
                        Color Enthusiasts
                    </h3>
                    <p className=' text-zinc-300'>
                        The course is accessible to anybody who is interested in learning about color. The only requirement is a desire to learn.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default For