import React from 'react'
import './topNav.css'
import { Link } from "react-router-dom";
import '@mdi/font/css/materialdesignicons.min.css';
// import { createPopper } from "@popperjs/core";


const TopNav = () => {
    return (
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                    <Link to="/" className="px-3 py-2 flex items-center text-8x1 uppercase font-bold leading-snug text-gray-400 hover:opacity-75">
                        <i className="mdi mdi-eye-circle-outline mdi-24px" ></i>
                        KITA
                    </Link>
                    <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                        <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                    </button>
                </div>
                <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
                    <ul className="flex flex-col lg:flex-row list-none ml-auto">
                        <li className="nav-item inline-block">
                            <Link to="/" className="px-7 py-2 flex items-center text-4x1 uppercase font-bold leading-snug text-gray-400 hover:opacity-75">Home</Link>
                        </li>
                        <li className="nav-item inline-block">
                            <Link to="/about" className="px-7 py-2 flex items-center text-4x1 uppercase font-bold leading-snug text-gray-400 hover:opacity-75">About</Link>
                        </li>
                        <li className="nav-item inline-block">
                            <Link to="/gallery" className="px-7 py-2 flex items-center text-4x1 uppercase font-bold leading-snug text-gray-400 hover:opacity-75">Gallery</Link>
                        </li>
                        <li className="nav-item inline-block">
                            <Link to="" className="px-7 py-2 flex items-center text-4x1 uppercase font-bold leading-snug text-gray-400 hover:opacity-75">Profile</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default TopNav
