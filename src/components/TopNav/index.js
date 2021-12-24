import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import '@mdi/font/css/materialdesignicons.min.css';
import { UserContext } from '../../context/userContext';
import userEvent from '@testing-library/user-event';

const TopNav = () => {
    const { setUser, user } = useContext(UserContext)
    const [showMenu, setShowMenu] = React.useState(false)

    //create function to toggle menu
    const toggleMenu = () => {
        setShowMenu(showMenu => !showMenu)
    }
    const handleLogout = () => {
        setUser(null)
    }
    return (
        <div className="lg:container border-b-2 text-gray-600">
            <nav className="flex items-center justify-between flex-wrap uppercase">
                <div className="flex items-center flex-shrink-0  ml-10">
                    <Link to="/home" className="flex flex-none items-center font-semibold text-xl tracking-tight"><i className="mdi mdi-eye-circle-outline mdi-24px"></i><span className="m-5">KITA</span></Link>
                </div>
                <div className="block md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="flex items-center px-3 py-2 border rounded text-green-600 border-green-400 hover:text-black hover:border-black"
                    >
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className={`w-full ${showMenu ? "block" : "hidden"} md:flex md:items-center md:w-auto`}>
                    <div className="md:flex-grow">
                        <Link to="/home" className="block md:inline-block md:mt-4 mx-5"><span className="hover:underline hover:opacity-75">Home</span></Link>
                        <Link to="/about" className="block md:inline-block md:mt-4 mx-5"><span className="hover:underline hover:opacity-75">About</span></Link>
                        <Link to="/gallery" className="block md:inline-block md:mt-4 mx-5"><span className="hover:underline hover:opacity-75">Gallery</span></Link>
                    </div>
                    <div>
                        {/* <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded   hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a> */}
                        {
                            (user && user.token)
                                ? <button
                                    onClick={handleLogout}
                                    className="bg-green-600 border-1 rounded-full mt-4 px-4 py-1 text-white hover:text-gray-900 hover:bg-green-500">
                                    <i className="mdi mdi-logout-variant"></i>
                                    Logout
                                </button>
                                : <Link to="/login" className="block md:inline-block mt-4 mx-5"><span className="hover:underline hover:opacity-75">Login</span></Link>
                        }
                    </div>
                </div>
            </nav>

        </div >
    );
};

export default TopNav
