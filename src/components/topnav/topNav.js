import React from 'react'
import './topNav.css'
import { Link } from "react-router-dom";
import '@mdi/font/css/materialdesignicons.min.css';


const TopNav = () => {
    return (
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                    <Link to="/" className="px-3 py-2 flex items-center uppercase font-bold leading-snug text-gray-400 hover:opacity-75">
                        <i className="mdi mdi-eye-circle-outline mdi-24px" ></i>
                        <span className="text-8x1 ml-1">KITA</span>

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
                            {/* <div className="relative mb-32">
                                <button className="inline-flex items-center h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                                    <span>Dropdown</span>
                                    <svg className="w-4 h-4 ml-3 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd" /></svg>
                                </button>
                                <div className="absolute flex flex-col py-2 mt-1 text-gray-700 bg-white border rounded-lg">
                                    <a className="px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 focus:text-white" href="#">One item</a>
                                    <a className="px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 focus:text-white" href="#">Another longer item</a>
                                    <a className="px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 focus:text-white" href="#">A medium item</a>
                                </div>
                            </div> */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default TopNav
