import React from "react"

const Navbar = () => {

    return (

        <>
            <div className="navbar bg-base-200 IBMPlexMono px-0">
                <div className="navbar-start p-0">
                    <a href="" className="text-4xl pl-4 md:pl-24 pr-5 py-4 font-bold rounded-s-none rounded-e-2xl bg-white">Memobox</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a className="text-lg font-medium hover:bg-transparent hover:border-b hover:border-[#c7e565] hover:text-[#c7e565]">Home</a></li>
                        <li>
                            <a href="" className="text-lg font-medium hover:bg-transparent hover:border-b hover:border-[#c7e565] hover:text-[#c7e565]">Faq</a>
                        </li>
                        <li><a className="text-lg font-medium hover:bg-transparent hover:border-b hover:border-[#c7e565] hover:text-[#c7e565]">Elements</a></li>
                    </ul>
                </div>
                <div className="navbar-end md:pr-24">
                    <div className="hidden md:flex md:flex-wrap justify-center gap-x-4 gap-y-2 pt-[0.7rem] lg:gap-x-5 lg:pt-0">
                        <a className="btn btn-outline">Changelog</a>
                        <a className="btn btn-outline bg-[#c7e565] hover:bg-transparent"><span className="text-black">Contact us</span></a>
                    </div>
                    {/* <details className="dropdown">
                        <div className="lg:hidden px-4">
                            <div>
                                <label className="btn-square rounded-md border-2 border-[#1113] swap swap-rotate">

                                    <input type="checkbox" />

                               
                                    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                                
                                    <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                                </label>
                            </div>
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-screen rounded-t-none">
                            <li className="flex text-center items-center justify-center"><a className="hover:bg-transparent hover:text-[#c7e565]">Home</a></li>
                            <li className="flex text-center items-center justify-center"><a className="hover:bg-transparent hover:text-[#c7e565]">Faq</a></li>
                            <li className="flex text-center items-center justify-center"><a className="hover:bg-transparent hover:text-[#c7e565]">Elements</a></li>
                            <li>
                                <div className="order-2 mx-auto mb-[0.75rem] flex flex-col items-center lg:mx-0 lg:mb-0 lg:flex-row lg:gap-7 hover:bg-transparent">
                                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 pt-[0.7rem] lg:gap-x-5 lg:pt-0">
                                        <a className="btn btn-outline ">Changelog</a>
                                        <a className="btn btn-outline bg-[#c7e565] hover:bg-transparent"><span className="text-black">Contact us</span></a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </details> */}
                    <details className="dropdown">
                        <summary className="m-1 btn">open or close</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </details>
                </div>
            </div>
        </>
    )
}

export default Navbar