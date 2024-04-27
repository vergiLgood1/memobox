import React from 'react'

const Hero = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-200 IBMPlexMono flex items-center justify-center">
                <div className="hero-content grid lg:grid-cols-2">

                    <div>
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Lets Get Started With Memobox</h1>
                            <p className="py-6">
                            Pellen tesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh. Vivamus accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum sed suscipit tortor eget
                            </p>
                        </div>
                        
                        <div>
                            
                        </div>
                    </div>

                    <div className="hidden lg:block item\ justify-center">
                        <div className="flex justify-end items-center">
                            <img
                                src="/src/assets/imgs/banner-image.png"
                                className="max-w-sm rounded-lg shadow-2xl"
                                alt="Hero Image"
                            />
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Hero
