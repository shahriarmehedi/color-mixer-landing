import React from 'react'

function Video() {
    return (
        <div className=' max-w-6xl mx-auto py-14 px-5 2xl:px-0'>
            <div className="flex flex-col lg:flex-row gap-10 items-center">
                <div className="flex-1">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/tvICjt1KP6c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="flex-1">
                    <p className="mt-4">Original Color Creation is a unique hands-on approach to working creatively with digital color, adapting traditional artistic color practices for RGB screen output in an interactive approach to working with color.</p>

                    <p className="mt-4">Original Color Creation is based on the methods of colormixing, which teach how RGB colors are composed from first principles, revealing how all colors are related, unlocking color creativity.</p>

                    <p className="mt-4">Colormixing is a new way to color; a more elegant system for picking color values,
                        fine-tuning color palettes and creating graphic color creations. By creating a more intuitive link between the eye, the screen, the hand and the mind, the Colormixer interface opens up vast new territories of color exploration and expression.</p>
                </div>

            </div>
        </div>
    )
}

export default Video