import Card from '../Card/Card'
import React from 'react'

const Featured = () => {
    return (
        <>
            <div className='bg-[#0B1215] mx-auto w-full max-w-[1700px] rounded-[2rem] sm:rounded-[40px] font-primary '>
                <div className='container py-16 px-4 md:px-8'>
                    <div className='px-0 md:px-4 mb-8'>
                        <p className='w-fit px-4 py-2 bg-[#F5F5F533] rounded-lg text-lg font-medium text-white mb-8'>Topic Together 🎁</p>
                        <p className='text-white text-[42px] font-bold '>All Topics</p>
                    </div>
                    <div className='flex md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 2xl:grid 2xl:grid-cols-4 flex-col gap-y-4 md:flex-row md:flex-wrap lg:flex-row lg:flex-wrap justify-start items-center col-1 sm:col-1 md:col-6 lg:col-4 xl:col-3 md:gap-y-8'>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Featured
