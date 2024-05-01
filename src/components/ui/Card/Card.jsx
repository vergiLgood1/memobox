import React from 'react'
import { MdStart } from "react-icons/md";
import { RxArrowRight } from "react-icons/rx";

const Card = () => {
    return (
        <>
            <div className="card bg-transparent font-primary px-2 md:px-4">
                <figure></figure>
                <div className="card-body px-5 py-7 flex-col flex w-fit border border-[#f5f5f567] rounded-2xl gap-y-4">
                    <div className="card-title text-white">
                        <div className='flex h-[80px] w-[80px] bg-[#38bdf8] rounded-full items-center justify-center'>
                        <MdStart className='w-10 h-10 fill-black'/>
                        </div>
                    </div>
                    <h3 className='text-white text-[22px]'>Getting Started</h3>
                    <p className='text-[#ceced0b3] text-lg font-normal font-secondary'>amet nisl tempus convlis quis ac lectus. Vivsdv amus mana justo, lacinia eget </p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-ghost p-0 text-lg text-[#c7e565]">View Detail <RxArrowRight /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
