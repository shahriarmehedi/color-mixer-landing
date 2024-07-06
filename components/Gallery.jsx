import React from 'react'

function Gallery() {
    return (
        <div className=' max-w-7xl mx-auto py-14 px-5  2xl:px-0'>
            <h1 className='text-2xl lg:text-4xl font-semibold pb-5 text-orange text-center'>Gallery</h1>
            <p className=' text-zinc-300 text-center pb-10'>
                Course content and color exercises
            </p>
            <div className="flex gap-10 items-center">

                <div className="w-full">
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                        <img src="/7.png" alt="" className='w-full' />
                        <img src="/8.png" alt="" className='w-full' />
                        <img src="/9.png" alt="" className='w-full' />
                        <img src="/10.png" alt="" className='w-full' />
                        <img src="/11.png" alt="" className='w-full' />
                        <img src="/12.png" alt="" className='w-full' />
                        <img src="/13.png" alt="" className='w-full' />
                        <img src="/14.png" alt="" className='w-full' />
                        <img src="/15.png" alt="" className='w-full' />
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Gallery