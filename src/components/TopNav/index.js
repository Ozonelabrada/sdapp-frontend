import React from 'react'
import { Link } from "react-router-dom";
import '@mdi/font/css/materialdesignicons.min.css';

const TopNav = () => {
    return (
        <div className="border-b-2">
            <nav className="lg:container text-gray-600 uppercase">
                <div className="flex items-center justify-between">
                    <div className="flex-1 ml-10 font-extrabold leading-snug">
                        <Link to="/home" className="flex flex-none items-center"><i className="mdi mdi-eye-circle-outline mdi-24px"></i><span className="m-5">KITA</span></Link>
                    </div>
                    <div className="flex-1 flex justify-around items-center font-normal">
                        <Link to="/home" className="mr-5"><span className="hover:underline hover:opacity-75">Home</span></Link>
                        <Link to="/about" className="mr-5"><span className="hover:underline hover:opacity-75">About</span></Link>
                        <Link to="/gallery" className="mr-5"><span className="hover:underline hover:opacity-75">Gallery</span></Link>
                        <Link to="/login" className="mr-5 sflex items-center pr-4 hover:opacity-75"><span className="hover:underline hover:opacity-75">Login</span></Link>
                    </div>
                </div>

            </nav>
        </div>
    );
};

export default TopNav
