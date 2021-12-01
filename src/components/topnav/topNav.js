import React from 'react'
import { Link } from "react-router-dom";
import '@mdi/font/css/materialdesignicons.min.css';

import { createPopper } from "@popperjs/core";

const Dropdown = ({ color }) => {
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start"
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };
    // bg colors
    let bgColor;
    color === "white"
        ? (bgColor = "bg-blueGray-700")
        : (bgColor = "bg-" + color + "-500");

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
                            <Link to="/gallery"
                                className={
                                    "px-7 py-2 flex items-center text-4x1 uppercase font-bold leading-snug text-gray-400 hover:opacity-75 pr-20" +
                                    bgColor
                                }
                                type="button"
                                ref={btnDropdownRef}
                                onClick={() => {
                                    dropdownPopoverShow
                                        ? closeDropdownPopover()
                                        : openDropdownPopover();
                                }}
                            >
                                {color === "white" ? "LOGIN" : color + " Dropdown"}
                            </Link>
                        </li>
                        <div
                            ref={popoverDropdownRef}
                            className={
                                (dropdownPopoverShow ? "block " : "hidden ") +
                                (color === "white" ? "bg-white " : bgColor + " ") +
                                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 hover:shadow-lg border-2"
                            }
                            style={{ minWidth: "12rem" }}
                        >
                            <a
                                href="#Logout"
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                                    (color === "white" ? " text-blueGray-700" : "text-white")
                                }
                                onClick={e => e.preventDefault()}
                            >
                                Logout
                            </a>
                            <div className="h-0 my-2 border border-solid border-t-0 border-gray-800 opacity-25" />
                            <a
                                href="#Changepass"
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                                    (color === "white" ? " text-blueGray-700" : "text-black")
                                }
                                onClick={e => e.preventDefault()}
                            >
                                Change Password
                            </a>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default function TopNav() {
    return (
        <>
            <Dropdown color="white" />
        </>
    );
}
