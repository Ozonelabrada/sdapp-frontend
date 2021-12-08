import React from 'react'
import { Link } from "react-router-dom";
import '@mdi/font/css/materialdesignicons.min.css';

import { createPopper } from "@popperjs/core";

const TopNav = ({ color }) => {
    // dropdown props
    const [showDropdown, setShowDropdown] = React.useState(false);

    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();

    const toggleDropdown = () => {
        if (showDropdown) {
            createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
                placement: "bottom-start"
            })
        }
        setShowDropdown(!showDropdown);
    };

    
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
                        <button
                            className="mr-5 bg-gray-800 rounded pl-3 pb-1 flex items-center pr-4 hover:bg-opacity-75 hover:text-gray-200"
                            ref={btnDropdownRef}
                            onClick={toggleDropdown}
                        >Toggle</button>
                    </div>
                </div>
                <div
                    ref={popoverDropdownRef}
                    className={
                        (showDropdown ? "block " : "hidden ") +
                        "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 hover:shadow-lg border-2"
                    }
                    style={{ minWidth: "12rem" }}
                >
                    <a
                        href="#Logout"
                        className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent"
                        onClick={e => e.preventDefault()}
                    >
                        Logout
                    </a>
                    <div className="h-0 my-2 border border-solid border-t-0 border-gray-800 opacity-25" />
                    <a
                        href="#Changepass"
                        className={
                            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " 
                        }
                        onClick={e => e.preventDefault()}
                    >
                        Change Password
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default TopNav
