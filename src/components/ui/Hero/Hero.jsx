import React from 'react'

const Hero = () => {
    return (
        <>
            <div className="hero py-20 md:py-36 lg:py-36 bg-base-200 rounded-b-2xl flex items-center justify-center font-primary">
                <div className="hero-content md:max-w-full py-0 md:px-24 grid lg:grid-cols-2 ">
                    <div>
                        <div className='mb-6 w-fit rounded-lg bg-base-300 px-4 py-2 font-medium text-text sm:mb-8'>
                            <p>Interactive Tutorial 🔥</p>
                        </div>
                        <div className="text-left mb-8 md:mb-0">
                            <h1 className="text-5xl md:text-6xl font-bold">Let's Get Started With Memobox</h1>
                            <p className="py-6 text-lg mb-8 md:mb-0">
                                Pellen tesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh. Vivamus accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum sed suscipit tortor eget
                            </p>
                        </div>

                        <div>
                            <form action="" className="flex w-full max-w-[450px] flex-col justify-between rounded-xl bg-white p-1 shadow-lg sm:flex-row sm:rounded-2xl md:max-w-[580px]">
                                <input onClick={() => document.getElementById('my_modal_5').showModal()} type="text" placeholder='Write A Message For Me ' className='w-full border-none bg-transparent p-4 pl-6 text-center text-sm placeholder:text-text/50 focus:border-none focus:ring-0 sm:text-left md:text-base' />
                                <button className='bg-[#0B1215] rounded-xl py-2 px-8 whitespace-nowrap font-bold text-white hover:bg-[#c7e565] hover:text-black'>Send Messagge</button>
                            </form>
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
                                <div className="rounded-md px-2 w-[100%] md:w-[40rem] lg:w-[40rem]">
                                    <div className='search p-4 bg-white rounded-t-md'>
                                        <label className="input input-bordered flex items-center gap-2 ">
                                            <input type="text" className="grow" placeholder="Search" />
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                                        </label>
                                    </div>
                                    <div className='p-4 bg-base-200'>
                                        <p className="py-9 text-center bg-base-200">Type Something To Search</p>
                                    </div>
                                    <div className='hidden md:block'>
                                        <div className="modal-action search-footer bg-white m-0 flex items-center justify-between px-4 py-2 leading-none rounded-b-md">
                                            <div className='flex '>
                                                <span className='flex items-center mr-5'>
                                                    <kbd className='p-1 text-center bg-base-200 rounded-sm mr-2'>
                                                        <svg width="14" height="14" fill="currentcolor" viewBox="0 0 16 16"><path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 011.506.0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 01-.753-1.659z"></path></svg>
                                                    </kbd>
                                                    <kbd className='p-1 text-center bg-base-200 rounded-sm mr-1'>
                                                        <svg width="14" height="14" fill="currentcolor" viewBox="0 0 16 16"><path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 001.506.0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 00-.753 1.659z"></path></svg>
                                                    </kbd>
                                                    To navigate
                                                </span>
                                                <span className='flex items-center mr-8'>
                                                    <kbd className='p-1 text-center bg-base-200 rounded-sm mr-1'>
                                                        <svg width="12" height="12" fill="currentcolor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14.5 1.5a.5.5.0 01.5.5v4.8a2.5 2.5.0 01-2.5 2.5H2.707l3.347 3.346a.5.5.0 01-.708.708l-4.2-4.2a.5.5.0 010-.708l4-4a.5.5.0 11.708.708L2.707 8.3H12.5A1.5 1.5.0 0014 6.8V2a.5.5.0 01.5-.5z"></path></svg>
                                                    </kbd>
                                                    To select
                                                </span>
                                            </div>
                                            <div className='ml-8'>
                                                <span className='text-sm ml-auto'>Esc to close</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                    <div className="hidden lg:block item justify-center">
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
