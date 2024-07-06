import React from 'react'

function Includes() {
    return (
        <div className='max-w-5xl mx-auto px-5 py-14 2xl:px-0'>
            <div className='w-full'>
                <h1 className='text-2xl lg:text-4xl font-semibold pb-10 text-orange text-center'>
                    What’s included?
                </h1>
            </div>

            <div className='flex flex-col lg:flex-row gap-10 items-center'>
                <div className='flex-1 text-lg'>
                    <h3 className=''>
                        The course consists of
                    </h3>

                    <ul className='font-semibold'>
                        <li>
                            &#x2022; 4 modules
                        </li>
                        <li>
                            &#x2022; x Video lessons / length
                        </li>
                        <li>
                            &#x2022; x Quizzes
                        </li>
                        <li>
                            &#x2022; Reference material PDF
                        </li>
                        <li>
                            &#x2022; x Interactive exercises <br />via the Colormxr web app
                        </li>
                    </ul>
                </div>
                <div className='flex-1 text-zinc-300'>
                    <p>
                        The course is video based; starting with foundation concepts, each module builds progressively, presenting big picture views, key concepts and then application via interactive exercises where you apply what you’ve learned. <br /> <br />

                        The heart of the course is the Colormxr web app, a unique color interface that embodies the concepts of colormixing, allowing for hands-on learning and open-ended color exploration.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Includes