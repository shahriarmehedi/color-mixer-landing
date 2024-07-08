import React from 'react'

function Learn() {
    return (
        <div id='what' className=' max-w-7xl mx-auto py-14 px-5  2xl:px-0'>
            <h1 className='text-2xl lg:text-4xl font-semibold pb-10 text-orange text-center'>What will you learn in this course?</h1>
            <div className="flex  flex-col lg:flex-row gap-10 items-center">

                <div className="w-full lg:w-2/3">
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        <img src="/1.png" alt="" className='w-full' />
                        <img src="/2.png" alt="" className='w-full' />
                        <img src="/3.png" alt="" className='w-full' />
                        <img src="/4.png" alt="" className='w-full' />
                        <img src="/5.png" alt="" className='w-full' />
                        <img src="/6.png" alt="" className='w-full' />
                    </div>
                </div>

                <div className="w-full lg:w-1/3">
                    <div className="flex flex-col gap-10">
                        <div>
                            <h3>The principles of color interaction </h3>
                            <p className='text-zinc-500'>
                                You will learn how colors interact with each other, and the interactive methods for creating  color compositions.
                            </p>
                        </div>
                        <div>
                            <h3>How to create dynamic color compositions </h3>
                            <p className='text-zinc-500'>
                                Learn how to explore and create interesting color combinations, and how to create striking color effects using close harmony and contrast
                            </p>
                        </div>
                        <div>
                            <h3>Color palette creation and variation </h3>
                            <p className='text-zinc-500'>
                                How to dynamically create and explore color palettes
                            </p>
                        </div>
                        <div>
                            <h3>Foundational color theory</h3>
                            <p className='text-zinc-500'>
                                You will learn artistic RGB screen color theory starting from first principles
                            </p>
                        </div>
                        <div>
                            <h3>The methods of colormixing</h3>
                            <p className='text-zinc-500'>
                                Mixing primary, secondary and complex colors, using the RGB+CMY interface
                            </p>
                        </div>
                        <div>
                            <h3>The relationships between all colors</h3>
                            <p className='text-zinc-500'>
                                How any and all colors relate to each other
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Learn