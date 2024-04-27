import React from "react"

const Navbar = () => {

    return (

        <>
            <div className="navbar bg-base-200 IBMPlexMono px-0">
                <div className="navbar-start p-0">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a href="" className="text-3xl pl-12 pr-5 py-4 font-bold rounded-s-none rounded-e-2xl bg-white">Memobox</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a className="text-base hover:bg-transparent hover:border-b hover:border-[#c7e565] hover:text-[#c7e565]">Home</a></li>
                        <li>
                            <a href="" className="text-base hover:bg-transparent hover:border-b hover:border-[#c7e565] hover:text-[#c7e565]">Faq</a>
                        </li>
                        <li><a className="text-base hover:bg-transparent hover:border-b hover:border-[#c7e565] hover:text-[#c7e565]">Elements</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-x-6 pr-12">
                    <a className="btn btn-outline">Changelog</a>
                    <a className="btn btn-outline bg-[#c7e565] hover:bg-transparent"><span className="text-black">Contact us</span></a>
                </div>
            </div>
        </>
    )
}

export default Navbar